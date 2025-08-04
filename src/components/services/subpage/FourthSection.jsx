"use client";
// Import Swiper styles
import "swiper/css";

// import required modules
import { usePathname } from "next/navigation";
export default function FourthSection({ pageText }) {
  const path = usePathname();

  return (
    <section className="mt-12 lg:mt-20">
      <div className="">
        <div
          style={{
            background: `linear-gradient(
                    to bottom right, 
                    rgba(0, 0, 0, 0.5), 
                    rgba(0, 0, 0, 0.5)
                ),url(${pageText.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="relative h-[400px] sm:h-[500px]  lg:h-[748px] "
        >
          <div className="container absolute top-1/2 left-1/2 -translate-1/2">
            <h5 className="text-gold text-center text-xl md:text-2xl font-semibold">
              {pageText.heading}
            </h5>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl pt-8  text-center leading-[120%]">
              {pageText.top}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
