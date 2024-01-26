"use client";
import { Company, Helpful, Services, socialLinks } from "@/Utils/Date";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
  const [isLoggedUn, setIsLoggedUn] = useState(false);
  useEffect(() => {
    setIsLoggedUn(window.location.href.toString().includes("sign-in"));
  }, []);
  const FooterLinkSection = ({ title, links }) => (
    <div>
      <p className="font-medium text-white">{title}</p>
      <ul className="mt-6 space-y-4 text-sm">
        {links.map((item) => (
          <li key={item.id}>
            <Link href={item.to}>{item.link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    !isLoggedUn && (
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Image
                src={"/logo.png"}
                width={180}
                height={180}
                alt="logo"
                className="mb-12"
              />
              <p className="mt-4 max-w-xs text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
              <ul className="mt-8 flex gap-6">
                {socialLinks.map((link) => (
                  <i key={link.id} className=" text-3xl cursor-pointer">
                    {link.icon}
                    <span className=" text-xs">{link.platform}</span>
                  </i>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <FooterLinkSection title="Services" links={Services} />
              <FooterLinkSection title="Company" links={Company} />
              <FooterLinkSection title="Helpful Links" links={Helpful} />
            </div>
          </div>

          <div className="text-xs text-white py-12 flex justify-between">
            <p>&copy; 2023 UNICLUB. All rights reserved.</p>
            <p>Free HTML Template by TemplatesJungle</p>
          </div>
        </div>
      </footer>
    )
  );
}

export default Footer;
