import HeroWrapper from "@/components/HeroWrapper";
import FifthSection from "@/components/services/subpage/FifthSection";
import FourthSection from "@/components/services/subpage/FourthSection";
import SecondSection from "@/components/services/subpage/SecondSection";
import SixthSection from "@/components/services/subpage/SixthSection";

import ThirdSection from "@/components/services/subpage/ThirdSection";
import { CircleIcon } from "@/components/SvgIcons";
import { servicesCardList } from "@/constants";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;
  const {
    pages: {
      fifthSection,
      secondSection,
      thirdSection,
      fourthSection,
      firstSection,
      sixthSection,
    },
  } = servicesCardList.find((service) => service.slug == slug);

  return (
    <>
      <HeroWrapper className="md:!h-[500px] lg:!h-[600px]">
        <div className="text-white text-center max-w-2xl mx-auto mt-18 lg:mt-24">
          <h5 className="font-medium text-gold text-xl md:text-[1.4rem]">
            {firstSection.top}
          </h5>
          <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-6xl mt-3 mb-12">
            {firstSection.bottom}
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
      <SecondSection pageText={secondSection} />
      <ThirdSection pageText={thirdSection} />
      <FourthSection pageText={fourthSection} />
      <FifthSection pageText={fifthSection} />
      <SixthSection pageText={sixthSection} />
    </>
  );
}
