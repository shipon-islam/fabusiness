"use client";
import { servicesCardList } from "@/constants";
import Link from "next/link";
import { useRef, useState } from "react";
import Button from "../Button";
import CommonHeading from "../CommonHeading";

export default function ServiceSection() {
  const [services, setServices] = useState(servicesCardList.slice(0, 6));
  const serviceRef = useRef();
  const handleChange = () => {
    const serviceLength = services.length;
    if (serviceLength < 7) {
      setServices(servicesCardList);
    } else {
      setServices(servicesCardList.slice(0, 6));
      serviceRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section ref={serviceRef}>
      <div className="container">
        <CommonHeading
          heading="Modernizing Accounting"
          subHeading="Innovative Approaches for Today"
          subClassName="!text-3xl"
        />
        
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((item) => {
            return (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <div className="custom-shadow p-8 rounded-md bg-white  transition-all duration-300 hover:bg-gold hover:text-white  group  h-full">
                  <span className="inline-block bg-darkBlue p-3 rounded-full  group-hover:bg-transparent group-hover:text-lightBlue group-hover:scale-150">
                    {item.icon}
                  </span>
                  <h2 className="font-semibold text-xl lg:text-2xl mt-5 lg:mt-8 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-[1rem] font-roboto">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <Button
          name={services.length < 7 ? "Show all Services" : "Less Services"}
          className="mx-auto block mt-10 text-white"
          onClick={handleChange}
        />
      </div>
    </section>
  );
}
