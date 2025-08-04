"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import CommonHeading from "../CommonHeading";

export default function BlogSection({ isHeading = true, blogs }) {
  const [blogsList, setblogsList] = useState(blogs.slice(0, 3));
  const handleChange = () => {
    const blogLength = blogsList.length;
    if (blogLength < 4) {
      setblogsList(blogs);
    } else {
      setServices(blogs.slice(0, 3));
    }
  };
  return (
    <section className="mt-12 lg:mt-20">
      <div className="container">
        {isHeading && (
          <CommonHeading
            heading="Our Blogs"
            subHeading="Smart Reads. Real Value"
          />
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {blogsList?.map((item) => {
            return (
              <div
                key={item._id}
                className="custom-shadow rounded-md p-6 lg:p-8"
              >
                <div>
                  <Image
                    src={`/api/uploads/blog/${item.image}`}
                    alt="blog"
                    width={340}
                    height={250}
                    className="w-full h-[250px] rounded-md object-cover"
                  />
                  <div className="mt-6 lg:mt-8 mb-6 lg:mb-10">
                    <h5 className="">{item.date}</h5>
                    <h5 className="font-semibold text-xl mt-3 text-darkSlate capitalize">
                      {item.title}
                    </h5>
                  </div>
                  <Link
                    href={`/blogs/${item._id}`}
                    className="underline text-lightBlue"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {blogsList.length < 1 && (
          <p className="capitalize text-2xl text-center text-red-500">
            There are no blogs yet!
          </p>
        )}
        <Button
          onClick={handleChange}
          name={blogsList.length < 4 ? "Explore All Blogs" : "Less Blogs"}
          className="mx-auto block mt-10 text-white"
        />
      </div>
    </section>
  );
}
