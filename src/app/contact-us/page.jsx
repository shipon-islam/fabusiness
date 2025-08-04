import HeroWrapper from "@/components/HeroWrapper";
import OurClientSection from "@/components/common-section/OurClientSection";
import ContactUsSection from "@/components/contact/ContactUsSection";

export default function ContactUs() {
  return (
    <>
      <HeroWrapper className="!h-[450px] sm:!h-[400px] lg:!h-[500px]">
        <div className="container h-full text-white text-center">
          <div className="text-white max-w-2xl mx-auto mt-18 lg:mt-24">
            <h5 className="font-medium text-gold text-xl md:text-[1.4rem] ">
              Let’s Connect
            </h5>
            <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-5xl mt-3 mb-12">
              Have a question, need advice, or want to schedule a consultation?
            </h1>
          </div>
        </div>
      </HeroWrapper>
      <ContactUsSection />
      <OurClientSection />
    </>
  );
}
