"use client";
import fa_logo from "@/assets/fa-logo.png";
import { useAuth } from "@/hook/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
import { Hambarger } from "./SvgIcons";
const links = [
  {
    id: 1,
    pathname: "Home",
    path: "/",
  },
  {
    id: 2,
    pathname: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    pathname: "Services",
    path: "/services",
  },
  {
    id: 4,
    pathname: "Blogs",
    path: "/blogs",
  },
  {
    id: 5,
    pathname: "Contact",
    path: "/contact-us",
  },
];
export default function Header() {
  const { user, loading, error } = useAuth();
  const [isShowNav, setIsShowNav] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="fixed w-full top-0 z-99">
        <div
          className={`relative font-roboto ${
            scrolled
              ? "bg-darkSlate"
              : ["/login", "/register"].includes(path)
              ? "bg-darkSlate"
              : "bg-darkSlate lg:bg-transparent"
          }`}
        >
          <nav className="container py-2 border-b border-white/10">
            <div className="flex justify-between items-center   text-white">
              <div className="text-2xl font-bold">
                <Link href="/" className="hover:text-gray-400">
                  <Image
                    src={fa_logo}
                    alt="Logo"
                    width={120}
                    height={120}
                    className="w-24 h-auto lg:w-full lg:h-full object-cover"
                  />
                </Link>
              </div>
              <ul className="hidden lg:flex space-x-8 ">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className={`hover:text-gold transition-colors duration-300 ${
                        path == link.path && "text-gold"
                      }`}
                    >
                      {link.pathname}
                    </Link>
                  </li>
                ))}
              </ul>
              {user ? (
                <Link className="hidden lg:block" href="/dashboard">
                  <Button className="font-moulpali" name="Dashboard" />
                </Link>
              ) : (
                <Link className="hidden lg:block" href="/login">
                  <Button className="font-moulpali" name="Login" />
                </Link>
              )}

              <button
                onClick={() => setIsShowNav((prev) => !prev)}
                className="cursor-pointer lg:hidden"
              >
                <Hambarger />
              </button>
              {/* for mobile */}
              <div
                className={`lg:hidden absolute z-99 top-[87px] right-0 w-full transition-all duration-300  bg-darkSlate  origin-top ${
                  isShowNav ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col gap-y-9 md:gap-y-10 py-16 justify-center items-center">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.path}
                        className={`hover:text-gold text-lg md:text-xl transition-colors duration-300 ${
                          path == link.path && "text-gold"
                        }`}
                      >
                        {link.pathname}
                      </Link>
                    </li>
                  ))}
                  {user ? (
                    <li>
                      <Link className="" href="/login">
                        <Button
                          name="Dashboard"
                          className="!text-[1.1rem] md:!text-lg"
                        />
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="" href="/login">
                        <Button
                          name="Login"
                          className="!text-[1.1rem] md:!text-lg"
                        />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
