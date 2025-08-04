import Image from "next/image";
import Marquee from "react-fast-marquee";
const clientLogos = [
  {
    id: 1,
    logo: "/images/business-partner/edges-reality-inc.png",
    name: "edges",
  },
  {
    id: 2,
    logo: "/images/business-partner/first-franchise.png",
    name: "franchise",
  },
  { id: 3, logo: "/images/business-partner/foresight.png", name: "foresight" },
  { id: 4, logo: "/images/business-partner/mezban.png", name: "mezban" },
  { id: 5, logo: "/images/business-partner/naomi-cars-nyc.png", name: "naomi" },
  {
    id: 6,
    logo: "/images/business-partner/NEW-YORK-COMMERCIAL-CLEAN-TEAM-INC.png",
    name: "NEW-YORK",
  },
  { id: 7, logo: "/images/business-partner/nybcl.png", name: "nybcl" },
  {
    id: 8,
    logo: "/images/business-partner/the-asbury-fork-and-flames.png",
    name: "the-asbury",
  },
];
export default function OurClientSection() {
  return (
    <section className="">
      <div className="text-center mt-6 sm:mt-9 lg:mt-10 container">
        <h1
          className={`font-bold text-xl sm:text-[1.4rem] lg:text-2xl text-gold `}
        >
          Our Clients
        </h1>
        <p className={`text-2xl  mt-1.5 font-semibold sm:!text-3xl`}>
          Trusted by More than 10,000 Business around the globe
        </p>
      </div>
      <div className="bg-white">
        <Marquee
          speed={50}
          gradient={false}
          autoFill={true}
          className="container bg-white"
        >
          <ul className=" flex gap-x-4 md:gap-x-14 items-center  !px-10  py-4">
            {clientLogos.map((logos) => (
              <li key={logos.id}>
                <Image
                  src={logos.logo}
                  width={302}
                  height={150}
                  className={`h-full  object-cover  rounded-md px-4 py-2 ${
                    logos.name == "the-asbury"
                      ? "w-[150px] sm:w-[172px]"
                      : "w-[202px] sm:w-[280px]"
                  }`}
                  alt="service-partner"
                />
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}
