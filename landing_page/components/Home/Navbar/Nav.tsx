"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";

type Props = {
  openNav : ()=> void
}

const Nav = ({openNav} : Props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-200 h-[10vh] z-[1000] ${
        isSticky ? "fixed top-0 left-0 bg-white shadow-md" : "relative"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl md:text-4xl text-pink-700">D</span>igital{" "}
          <span className="text-3xl md:text-4xl text-pink-700">I</span>itiate
        </h1>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="md:px-8 md:py-2.5 px-6 py-6 text-white font-semibold text-base bg-blue-700
          hover:bg-blue-900 rounded-3xl"
          >
            Join Now
          </button>
          {/* Hamburger Menu */}
          <Bars3BottomRightIcon onClick={openNav} className="h-8 w-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
