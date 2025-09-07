"use client";
import fa_logo from "@/assets/fa-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import {
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  WhatsappIcon,
  XTwitterIcon,
} from "./SvgIcons";
const endpoints = ["/contact-us", "/login", "/register"];
export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  if (pathname.includes("dashboard")) {
    return null;
  }
  const handleSubmit = async () => {
    if (!email) {
      return toast.error("Please add a valid gmail");
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    if (!isValid) {
      return toast.error("Please add a valid gmail");
    }
    try {
      const res = await fetch("/api/subscriber", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 409) {
        setEmail("");
        return toast.error("You have already Subscribed!");
      }
      const data = await res.json();
      if (data) {
        setEmail("");
        return toast.success("Subscribe successfuly!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer
      className={`bg-darkSlate text-white  ${
        endpoints.includes(pathname)
          ? "mt-62 md:mt-34 lg:mt-50"
          : "mt-80 md:mt-54 lg:mt-80"
      }`}
    >
      <div className="container relative">
        <div className="bg-gold absolute -top-66 md:-top-32 lg:-top-48 w-[97%] xxs:w-[92%] xl:w-full max-w-[1100px] left-1/2 -translate-x-1/2 p-5 xxs:p-10 lg:px-28 xl:px-40 rounded-md text-center">
          <h5 className="text-lg sm:text-[1.4rem] font-bold">
            Join Our Network
          </h5>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3">
            We’re just a message away…
          </h1>
          <p className="text-[1.1rem] sm:text-lg font-medium font-roboto my-4 md:my-8">
            Subscribe To Our Newsletter Stay informed with expert tips, tax
            updates, and business insights—delivered straight to your inbox. 
          </p>
          <div className="sm:bg-white  rounded-md sm:flex items-center relative mt-4 max-w-[500px] mx-auto">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email address"
              placeholder="Your email here"
              className="block w-full h-full rounded-md sm:rounded-none border-none px-4 py-2 bg-white sm:bg-transparent text-black focus:outline-none placeholder:text-black sm:text-lg "
            />
            <Button
              name="Subscribe"
              onClick={handleSubmit}
              className="mt-4 sm:mt-0 sm:absolute right-[5px] top-1/2 sm:-translate-y-1/2 !bg-darkSlate hover:!bg-black  lg:hover:!bg-gold transition-colors duration-300 "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-x-2  gap-y-2 lg:gap-x-10 lg:gap-y-8 py-8 pt-56  sm:!pt-32 md:!pt-56 lg:!pt-48">
          <div className="md:w-4/5">
            <Image
              src={fa_logo}
              alt="band-logo"
              width={120}
              height={120}
              className="object-cover w-24 h-auto "
            />
            <p className="text-white/80 font-roboto text-justify xl:w-[90%] mt-4">
              FA Business & Tax Solutions Inc. is committed to delivering
              accurate, timely, and transparent financial services. Our team
              ensures every task is handled with care, compliance, and
              confidentiality. Clients trust us for consistent support and
              dependable results at every step.
            </p>
            <ul className="flex gap-x-4 mt-10">
              <li className="bg-white/10 p-2 rounded-lg hover:bg-gold transition-colors duration-300">
                <a
                  href="https://www.facebook.com/share/1GeSz4cQTV/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li className="bg-white/10 p-2 rounded-lg hover:bg-gold transition-colors duration-300">
                <a
                  href="https://www.instagram.com/fa_business_and_tax_solution?igsh=bGxuZWpjc3VtM2k2"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li className="bg-white/10 p-2 rounded-lg hover:bg-gold transition-colors duration-300">
                <a href="#">
                  <XTwitterIcon />
                </a>
              </li>
              <li className="bg-white/10 p-2 rounded-lg hover:bg-gold transition-colors duration-300">
                <a href="https://www.linkedin.com/company/fa-business-tax-solution-inc/">
                  <LinkedinIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 md:flex justify-between gap-x-2">
            <div className="mt-10">
              <h5 className="text-xl font-bold">Quick Link</h5>
              <ul className="mt-6 space-y-6">
                <li className="hover:text-gold hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-gold hover:underline">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="hover:text-gold hover:underline">
                  <Link href="/services">Services</Link>
                </li>

                <li className="hover:text-gold hover:underline">
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 hidden">
              <h5 className="text-xl font-bold">Support</h5>
              <ul className="mt-6 space-y-6">
                <li className="hover:text-gold hover:underline">
                  <Link href="/licence">Licence</Link>
                </li>
                <li className="hover:text-gold hover:underline">
                  <Link href="/changelog">Changelog</Link>
                </li>
                <li className="hover:text-gold hover:underline">
                  <Link href="/styleguide">Styleguide</Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h5 className="text-xl font-bold">Contact Us</h5>
              <ul className="mt-6 space-y-6 item:hover:text-gold">
                <li className="flex items-center gap-x-2 hover:text-gold hover:underline">
                  <LocationIcon />
                  <a
                    href="https://www.google.com/maps?q=14661+107th+Avenue+Jamaica+NY+11435"
                    target="_blank"
                  >
                    14661 107th Avenue Jamaica NY 11435
                  </a>
                </li>
                <li className="flex items-center gap-x-2 hover:text-gold hover:underline">
                  <CallIcon />
                  <a href="tel:347-233-3777" target="_blank">
                    347-233-3777
                  </a>
                </li>
                <li className="flex items-center gap-x-2 hover:text-gold hover:underline">
                  <WhatsappIcon />
                  <a href="tel:917-818–5122" target="_blank">
                    917-818–5122
                  </a>
                </li>
                <li className="flex items-center gap-x-2 hover:text-gold hover:underline">
                  <MailIcon />
                  <a href="mailto:info@exmaple.com" target="_blank">
                    info@exmaple.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-4 border-t lg:border-t-none border-white/10">
          <p>Powered By AWTOMATIG</p>
        </div>
      </div>
    </footer>
  );
}
