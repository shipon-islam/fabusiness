import red_floor_number from "@/assets/home/red-floor-number.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
export default function WhyChooseUs() {
  return (
    <section>
      <div className="container grid lg:grid-cols-[4fr_1fr] relative mt-12 lg:mt-20 text-deepBlue">
        <div className="hidden lg:block">
          <Image
            src={red_floor_number}
            alt="why-choose-us"
            className="w-full h-full max-h-[650px]  object-cover rounded-sm"
          />
        </div>
        <div className="bg-gold lg:absolute top-1/2 lg:-translate-y-1/2 right-0 lg:right-10 w-full lg:max-w-[650px] xl:max-w-[800px]  p-7 lg:p-9 xl:p-11  rounded-lg shadow-lg">
          <h5 className="font-semibold text-xl sm:text-2xl lg:text-2xl ">
            Why Choose Us ?
          </h5>
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl capitalize leading-[120%] my-3 ">
            We Don’t Just Support Your <br className="hidden md:block" /> Goals
            —We Accelerate Them
          </h1>
          <p className="text-lg text-white/80 mb-6 md:mb-11 font-roboto">
            At Fa Business & Tax Solutions Inc., we go beyond basic compliance{" "}
            <br className="hidden md:block" />
            —offering strategic, personalized services that fuel business growth
            and success.
          </p>
          <Link href="/about-us">
          <Button
            className="!bg-black  hover:!bg-black/20 text-white"
            name="Know More"
          />
          </Link>
        </div>
      </div>
    </section>
  );
}
