import HeroWrapper from "@/components/HeroWrapper";
import BlogSection from "@/components/common-section/BlogSection";
import { getBlogs } from "@/utility/getBlogs";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <>
      <HeroWrapper bg="blue" className="!h-[350px] md:!h-[350px] lg:!h-[500px]">
        <div className="text-center text-white max-w-2xl mx-auto mt-18 lg:mt-24">
          <h5 className="font-medium text-gold text-xl md:text-[1.4rem] ">
            Blogs
          </h5>
          <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-6xl mt-3 mb-12">
            Smart Reads. Real Value
          </h1>
        </div>
      </HeroWrapper>

      <BlogSection blogs={blogs} isHeading={false} />
    </>
  );
}
