import person_working_office from "@/assets/home/chees.jpg";
import Image from "next/image";

export default function StrategySection() {
  return (
    <section>
      <div className="container mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-[29rem_1fr] xl:grid-cols-[38rem_1fr] gap-2 my-6 lg:my-13 ">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[130%] text-[#010101]">
            Strategy with Purpose. Results with Precision
          </h1>
          <p className="text-[1.1rem] sm:text-lg text-[#4D4D4D] font-roboto lg:mt-3">
            At Fa Business & Tax Solutions Inc., we build purposeful strategies
            tailored to your goals. With expert insight and precise execution,
            we deliver tax and business solutions that go beyond
            compliance—driving real results where they matter most.
          </p>
        </div>
        <div>
          <Image
            src={person_working_office}
            alt="Accounting Experts"
            className="w-full h-auto object-cover max-h-[827px]  rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
