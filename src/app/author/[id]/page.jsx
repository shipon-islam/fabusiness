import HeroWrapper from "@/components/HeroWrapper";
import { getBlogByAuthorId } from "@/utility/getBlogs";
import { GetTime } from "@/utility/GetTime";
import Image from "next/image";
import Link from "next/link";

export default async function AuthorPost({ params }) {
  const { id } = await params;
  const { user, blogs } = await getBlogByAuthorId(id);
  return (
    <>
      <HeroWrapper
        bg={Number(id) !== 102 ? "blue" : "red"}
        className="!min-h-[400px] lg:!min-h-[550px]"
      >
        <div className="container h-full text-white text-center">
          <div className="text-white max-w-2xl mx-auto pt-18 lg:pt-24">
            <div>
              <Image
                src={
                  user?.avatar
                    ? `/api/uploads/user/${user?.avatar}`
                    : "/avatar.png"
                }
                alt="Author Image"
                width={100}
                height={100}
                className="rounded-full  object-cover size-[80px] md:size-[90px] lg:size-[100px] mx-auto mb-4 border-2 border-gold"
              />
            </div>

            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl mt-3 mb-12">
              {user.name}
            </h1>
          </div>
        </div>
      </HeroWrapper>

      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid  grid-cols-1">
            {blogs.map((item) => {
              return (
                <div key={item._id} className="shadow-lg rounded-md p-8">
                  <div>
                    <Image
                      src={`/api/uploads/blog/${item.image}`}
                      alt="blog"
                      width={900}
                      height={300}
                      className="w-full  h-[300px] rounded-md object-cover"
                    />
                    <div className="mt-8 mb-2 w-fit sm:mx-auto">
                      <h5 className="">{GetTime(item.createdAt)}</h5>
                      <h5 className="font-medium text-xl mt-3 ">
                        {item.title}
                      </h5>
                      <Link
                        href={`/blogs/${item._id}`}
                        className="underline text-lightBlue mt-3 inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
