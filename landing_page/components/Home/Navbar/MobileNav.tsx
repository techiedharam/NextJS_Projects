"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from 'react'
import { navLinks } from "@/constant/Constant";
import Link from "next/link";

type Props = {
  showNav: boolean,
  closeNav : ()=> void
}

const MobileNav = ({closeNav ,showNav}:Props) => {
  
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
        {/* Nav Links */}
      <div className={`absolute top-0 z-[1000] w-[350px] h-[765px] bg-blue-700 text-white flex flex-col py-20 px-20 gap-12
        ${navOpen}
      `}>
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav__link">{link.label}</p>
            </Link>
          ))}
              {/* cross icons  */}
      <XMarkIcon onClick={closeNav} className="h-8 w-8 z-[1000] text-black absolute left-76 top-5 cursor-pointer " />
      </div>

    </div>
  )
}

export default MobileNav
