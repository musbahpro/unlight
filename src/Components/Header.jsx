"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { UserButton, useUser } from "@clerk/nextjs";


function Header() {
  const [Open, isOpen] = useState(false);
  const [isLoggedUn, setIsLoggedUn] = useState(false);
  useEffect(() => {
    setIsLoggedUn(window.location.href.toString().includes("sign-in"));
  }, []);
  const { user } = useUser();
  const Links = [
    { id: 0, to: "/", link: "Home" },
    { id: 1, to: "/Shop", link: "Shop" },
    { id: 2, to: "/About", link: "About" },
    { id: 3, to: "/FAQs", link: "FAQs" },
  ];

  return (
    !isLoggedUn && (
      <header className=" absolute w-full">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Image src={"/loxgo.png"} alt="Logo" width={130} height={130} />
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className=" md:block ">
              <motion.ul
                initial={{ translateX: 100 }}
                animate={{ translateX: 0 }}
                transition={{ delay: 1, duration: 1, stiffness: 30 }}
                className={`${
                  Open
                    ? "absolute top-0 bg-gray-200 space-y-16 pt-28 pl-12 h-screen right-0 w-72 naaa"
                    : " md:flex items-center gap-6 text-sm hidden"
                }`}
              >
                <IoCloseOutline
                  className=" text-3xl absolute top-5 md:hidden flex"
                  onClick={() => isOpen(!Open)}
                />
                {Links.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="text-gray-500 text-lg font-semibold transition hover:text-gray-500/75"
                    >
                      <Link href={item.to}>{item.link}</Link>
                    </li>
                  );
                })}
              </motion.ul>
            </nav>

            <div className="flex items-center gap-6">
              <div className=" flex space-x-4 items-center cursor-pointer">
                <Link href={"/"}>
                {!user ? <FaRegUser className="text-2xl" /> : <div><UserButton /></div>}

                </Link>
                <Link href={"/"}>
                  <IoCartOutline className="text-3xl" />
                </Link>
              </div>

              <button
                onClick={() => isOpen(!Open)}
                className={`block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden ${
                  Open ? "hidden" : "block"
                }`}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
