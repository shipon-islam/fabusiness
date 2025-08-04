import Image from "next/image";
import CommonHeading from "../../CommonHeading";

export default function FifthSection({ pageText }) {
  return (
    <section>
      <div className="container mt-12 lg:mt-20">
        <div className="text-center py-8 sm:py-10 lg:py-14">
          <CommonHeading
            heading={pageText.heading}
            subHeading={pageText.top}
            subClassName="text-3xl sm:text-4xl !text-[#2A9D8F] mt-8"
          />
        </div>
        <div>
          <Image
            src={pageText.image}
            alt="Accounting Experts"
            className="w-full h-auto max-h-[600px] max-w-[756px] mx-auto  rounded-md object-cover"
            width={1300}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
