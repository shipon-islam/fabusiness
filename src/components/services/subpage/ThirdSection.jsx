import Image from "next/image";
export default function ThirdSection({ pageText }) {
  return (
    <section>
      <div className="container  relative mt-12 lg:mt-20 text-deepBlue">
        <div className="hidden lg:block">
          <Image
            src={pageText?.image}
            alt="why-choose-us"
            className="w-full h-full max-h-[641px] object-cover rounded-md"
            width={1300}
            height={700}
          />
        </div>
        <div className="bg-gold lg:bg-gold/30 lg:absolute top-20  left-10 lg:left-10 w-full lg:max-w-[720px] p-7 lg:p-9 xl:p-11 rounded-r-lg rounded-l-lg  lg:rounded-r-lg lg:rounded-l-none shadow-lg">
          <h5 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
            {pageText?.top}
          </h5>

          <p className="text-xl  text-white/80   font-roboto mt-8 w-4/5">
            {pageText?.bottom}
          </p>
        </div>
      </div>
    </section>
  );
}
