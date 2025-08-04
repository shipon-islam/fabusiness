import chees_middle from "@/assets/about/chees-middle.jpg";
import Image from "next/image";

export default function IntegritySection() {
  return (
    <section>
      <div className="container mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-[29rem_1fr] xl:grid-cols-[38rem_1fr] gap-2 my-6 lg:my-13 ">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[130%] text-[#2A9D8F] ">
            Built on Integrity. Driven by Results.
          </h1>
          <p className="text-[1.1rem] sm:text-lg text-[#4D4D4D] lg:mt-3 font-roboto">
            Founded with a mission to simplify the complex world of taxes and
            business finances, FA Business & Tax Solutions Inc. combines
            technical expertise with a people-first approach.
          </p>
        </div>
        <div>
          <Image
            src={chees_middle}
            alt="Accounting Experts"
            className="w-full h-auto object-center max-h-[827px]  rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
