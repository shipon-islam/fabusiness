import floor_blue_number from "@/assets/about/floor-blue-number.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
export default function FinancialSection() {
  return (
    <section>
      <div className="container grid lg:grid-cols-[2fr_1fr] relative mt-12 lg:mt-20 text-deepBlue">
        <div className="hidden lg:block">
          <Image
            src={floor_blue_number}
            alt="why-choose-us"
            className="w-full h-full lg:h-[420px] xl:h-[500px] object-bottom object-cover"
          />
        </div>
        <div className="bg-gold lg:absolute top-1/2 lg:-translate-y-1/2 right-0 lg:right-10 w-full lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[920px] p-7 lg:p-9 xl:p-11  rounded-lg shadow-lg">
          <h5 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-white">
            Your Financial Success, Our Dedicated Mission.
          </h5>

          <p className="text-lg text-white/80 mb-6 md:mb-11 font-roboto mt-3">
            At FA Business & Tax Solutions Inc., we believe that managing
            finances shouldn’t be overwhelming. That’s why we offer
            professional, personalized support that goes beyond the
            numbers—built on trust, strategy, and genuine client care.
          </p>
          <Link href="/services">
          <Button
            className="!bg-black text-white hover:!bg-black/20"
            name="Know More"
          />
          </Link>
          
        </div>
      </div>
    </section>
  );
}
