import Image from "next/image";
export default function SixthSection({ pageText }) {
  return (
    <section>
      <div className="container grid lg:grid-cols-[2fr_1fr] relative mt-12 lg:mt-20 text-deepBlue">
        <div className="hidden lg:block">
          <Image
            src={pageText.image}
            alt="why-choose-us"
            className="w-full h-full max-h-[578px] max-w-[925px] object-cover rounded-md"
            width={1300}
            height={700}
          />
        </div>
        <div className="bg-gold lg:absolute top-1/2 lg:-translate-y-1/2 right-0 lg:right-20 w-full  lg:max-w-[720px] p-7 lg:p-9 xl:p-11  rounded-lg shadow-lg">
          <h5 className="font-semibold text-3xl sm:text-4xl lg:text-5xl ">
            {pageText?.top}
          </h5>

          <p className="text-xl  text-white/80 mb-6 md:mb-20 font-roboto mt-8 w-4/5">
            {pageText?.bottom}
          </p>
        </div>
      </div>
    </section>
  );
}
