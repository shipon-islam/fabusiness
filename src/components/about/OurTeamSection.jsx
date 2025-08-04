import { teamList } from "@/constants";
import Image from "next/image";

export default function OurTeamSection() {
  return (
    <section className="mt-1">
      <div className="container">
        <div className="text-center mb-6 lg:mb-10">
          <h1 className="font-bold text-xl lg:text-2xl text-gold">Our Team</h1>
          <p className="text-3xl mt-1.5 font-medium">
            Meet the Experts Behind Your Financial Growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamList.map((teamMember, index) => (
            <div className="p-8 custom-shadow rounded-md" key={index}>
              <Image
                src={teamMember.image}
                alt="team"
                className=" w-full h-auto object-cover rounded-md mb-4"
                width={340}
                height={227}
              />
              <div className="text-center">
                <h5 className="text-lg lg:text-xl py-3 font-medium">
                  {teamMember.name}
                </h5>
                <a
                  className="underline hover:text-gold"
                  href={`mailto:${teamMember.mail}`}
                  target="_blank"
                >
                  {teamMember.mail}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
