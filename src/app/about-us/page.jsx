import FinancialSection from "@/components/about/FinancialSection";
import IntegritySection from "@/components/about/IntegritySection";
import OurTeamSection from "@/components/about/OurTeamSection";
import OurClientSection from "@/components/common-section/OurClientSection";
import HeroWrapper from "@/components/HeroWrapper";
import { CircleIcon } from "@/components/SvgIcons";

export default function AboutUs() {
  return (
    <>
      <HeroWrapper bg="blue" className="">       
          <div className="text-white text-center max-w-2xl mx-auto mt-18 lg:mt-24">
            <h5 className="font-medium text-[#FFD100] text-xl md:text-[1.4rem]">
              Meet the Experts
            </h5>
            <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-6xl mt-3 mb-12">
              Who We Are & How We Can Help
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
      <FinancialSection />
      <IntegritySection />
      <OurClientSection />
      <OurTeamSection />
    </>
  );
}
