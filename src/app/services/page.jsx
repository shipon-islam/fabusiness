import OurClientSection from "@/components/common-section/OurClientSection";
import HeroWrapper from "@/components/HeroWrapper";
import ServiceSection from "@/components/services/ServiceSection";
import TestimonialSection from "@/components/services/TestimonialSection";
import { CircleIcon } from "@/components/SvgIcons";
import { getFeedback } from "@/utility/getFeedback";

export default async function Services() {
  const feedbacks = await getFeedback();
  return (
    <>
      <HeroWrapper className="md:!h-[500px] lg:!h-[600px]">
        <div className="text-white text-center max-w-2xl mx-auto mt-18 lg:mt-24">
          <h5 className="font-medium text-gold text-xl md:text-[1.4rem] ">
            Modernizing Accounting
          </h5>
          <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-6xl mt-3 mb-12">
            Innovative Approaches for Today
          </h1>
          <ul className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 justify-center">
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
      </HeroWrapper>
      <ServiceSection />
      <OurClientSection />
      {feedbacks && <TestimonialSection feedbacks={feedbacks} />}
    </>
  );
}
