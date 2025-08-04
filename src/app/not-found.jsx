import notFoundImage from "@/assets/not-found-404.png";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-darkSlate">
        <Header bg />
      </div>
      <section>
        <div className="w-[750px] mx-auto py-20">
          <Image
            src={notFoundImage}
            alt="Not Found"
            className="w-full h-auto object-cover"
          />
          <div className="grid place-items-center gap-8">
            <h1 className="text-6xl font-bold text-deepGold">
              Oops!! Page not found
            </h1>
            <Link href="/">
              <Button name="Back to Home" className="text-white !bg-deepGold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
