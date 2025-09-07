import Button from "@/components/Button";
import BlogSection from "@/components/common-section/BlogSection";
import OurClientSection from "@/components/common-section/OurClientSection";
import Header from "@/components/Header";
import StrategySection from "@/components/home/StrategySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { CircleIcon } from "@/components/SvgIcons";
import { getBlogs } from "@/utility/getBlogs";
import { getFeedback } from "@/utility/getFeedback";
import Link from "next/link";

export default async function Home() {
  const feedbacks = await getFeedback();
  const blogs = await getBlogs();

  return (
    <>
      <Header />
      <main>
        <section
          style={{
            backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9),rgba(0,0,0,0.1)),url("/images/bg/blue-city.jpg")`,
          }}
          className="bg-cover bg-center text-white min-h-[700px] md:min-h-[809px] relative"
        >
          <div className="container">
            <div className="absolute top-1/2 -translate-y-1/2 pt-20">
              <h5 className="text-lg md:text-xl text-deepGold font-medium ">
                Accounting Personalized
              </h5>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl py-3.5 font-semibold leading-[120%] bg-gradient-to-r from-gold to-[#999999] bg-clip-text text-transparent">
                Clarity in Every Calculation. <br /> Confidence in Every Step
              </h1>
              <h5 className="text-[1.1rem] sm:text-lg lg:text-2xl text-gold font-medium ">
                Simplifying Numbers. <br /> Strengthening Business
              </h5>

              <Link
                href="/services"
                className="inline-block mt-14 lg:mt-14 xl:mt-24 mb-11 lg:mb-9 xl:mb-11"
              >
                <Button name="Know More" />
              </Link>

              <ul className="flex flex-wrap gap-6 md:gap-10 lg:gap-6 xl:gap-10">
                <li className="flex gap-x-2">
                  <CircleIcon /> <span>Expert Help</span>
                </li>
                <li className="flex gap-x-2">
                  <CircleIcon /> <span>Proven Results</span>
                </li>
                <li className="flex gap-x-2">
                  <CircleIcon /> <span>Ongoing Support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <WhyChooseUs />
        <StrategySection />
        <OurClientSection />
        {feedbacks && <TestimonialSection feedbacks={feedbacks} />}
        <BlogSection blogs={blogs} />
      </main>
    </>
  );
}
