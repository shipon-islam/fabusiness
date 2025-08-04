"use client";
import Image from "next/image";
// import required modules
export default function SecondSection({ pageText }) {
  return (
    <section className="mt-12 lg:mt-20">
      <div className="">
        <div className="text-center  pb-13 lg:pb-20  container">
          <h1 className=" text-[2.5rem] text-center font-semibold text-[#2A9D8F]">
            Proccess
          </h1>
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-14 xl:gap-20 items-center">
            <ul className="list-disc text-xl space-y-5 xl:w-4/5 font-roboto ml-6">
              {pageText?.list?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <div>
              <Image
                src={pageText?.image}
                alt="Accounting Experts"
                width={600}
                height={500}
                className="w-full h-auto object-center max-h-[400px] lg:max-h-[460px]  rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
