import HeroWrapper from "@/components/HeroWrapper";
import { getBlogById } from "@/utility/getBlogs";
import { GetTime } from "@/utility/GetTime";
import Image from "next/image";
import Link from "next/link";

export default async function Blog({ params }) {
  const { id } = await params;
  const blog = await getBlogById(id);

  return (
    <>
      <HeroWrapper
        bg={Number(id) % 2 === 0 ? "blue" : "red"}
        className="!min-h-[400px] md:!min-h-[350px] lg:!min-h-[500px]"
      >
        <div className="text-white text-center max-w-3xl mx-auto mt-24">
          <h1 className="font-medium text-[2.5rem] md:text-5xl lg:text-6xl mt-3 mb-12">
            {blog.title}
          </h1>
        </div>
      </HeroWrapper>

      <section>
        <div className="container py-12 lg:py-20 lg:w-4/5  2xl:w-3/5">
          <Image
            src={`/api/uploads/blog/${blog?.image}`}
            alt="Blog Image"
            width={800}
            height={500}
            className="w-full h-[400px] object-cover my-8"
          />
          <div className="sm:flex items-center gap-x-4 ">
            <div className="flex gap-x-4">
              <Link
                className="flex items-center gap-x-4 group"
                href={`/author/${blog?.author?._id}`}
              >
                <Image
                  src={
                    blog?.author?.avatar
                      ? `/api/uploads/user/${blog?.author?.avatar}`
                      : "/avatar.png"
                  }
                  alt="User Image"
                  width={50}
                  height={50}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
                <h5 className="font-semibold group-hover:underline group-hover:text-gold text-lg text-darkSlate">
                  {blog?.author?.name}
                </h5>
              </Link>

              <p className="flex gap-x-1 items-center">
                <span className="inline-block size-1.5 rounded-full bg-lightBlue"></span>
                <span>{GetTime(blog.createdAt)}</span>
              </p>
            </div>
            <p className="flex gap-x-1 items-center mt-6 sm:mt-0">
              <span className="inline-block size-1.5 rounded-full bg-lightBlue"></span>
              <span>Daily Updates</span>
            </p>
          </div>
          <div className="text-darkSlate mt-8">
            <p className="font-roboto">{blog?.content}</p>
          </div>
          {/* <div className="text-darkSlate">
            <div>
              <h5 className="font-semibold text-2xl mb-5 mt-8">Introduction</h5>
              <p className="font-roboto">
                Running a small business is an exciting adventure, but grappling
                with accounting can quickly turn into a headache. Fear not,
                entrepreneurs! This blog is designed to demystify the world of
                small business accounting, empowering you to make informed
                financial decisions and keep your business on track for success.
              </p>
            </div>
            <h5 className="font-semibold text-2xl mb-5 mt-8">
              Why Accounting Matters for Small Businesses
            </h5>
            <p className="font-roboto">
              Sound accounting is the backbone of any thriving small business.
              It helps you track your income and expenses, monitor
              profitability, meet tax obligations, and make strategic financial
              decisions.
            </p>
            <h5 className="font-semibold text-2xl mb-5 mt-8">
              Essential Accounting Practices for Small Businesses
            </h5>
            <ul className="space-y-4 font-roboto">
              <li>
                1. Choose the Right Accounting System: From simple spreadsheets
                to robust accounting software, choose a system that fits your
                needs and skill level.
              </li>
              <li>
                2. Track Your Income & Expenses Diligently: Maintaining accurate
                records is crucial. Categorize every transaction – income from
                sales, expenses on office supplies, marketing costs, etc.
              </li>
              <li>
                3. Master Basic Accounting Concepts: Understanding terms like
                accounts receivable, accounts payable, and profit and loss
                statements will give you a strong foundation.
              </li>
              <li>
                4. Reconcile Your Bank Statements Regularly: Ensure your bank
                records match your internal accounting data to avoid
                discrepancies.
              </li>
              <li>
                5. Schedule Regular Reviews with Your Accountant: Partnering
                with a qualified accountant helps you stay compliant, optimize
                your finances, and plan for the future.
              </li>
            </ul>
            <h5 className="font-semibold text-2xl mb-5 mt-8">Conclusion</h5>
            <p className="font-roboto">
              By embracing essential accounting practices, you can transform
              accounting from a chore into a valuable tool for managing your
              small business. Don't be afraid to seek professional guidance –
              our team of experienced accountants is here to support your
              entrepreneurial journey. Let's work together to ensure your small
              business financial success!
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
