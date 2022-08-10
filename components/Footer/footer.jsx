import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const footerInfo = [
  {
    name: "services",
    sub1: "buy domains",
    link1: "/buy",
    sub2: "find domains",
    link2: "/find",
    sub3: "sell domains",
    link3: "/sell",
  },
  ,
  {
    name: "the company",
    sub1: "about next venture",
    link1: "/about",
    sub2: "what clients say",
    link2: "/#testimonials",
    sub3: "policys",
    link3: "/policy",
  },
  {
    name: "contact",
    sub1: "contact information",
    link1: "/find",
    sub2: "lorem ipsum",
    link2: "/buy",
    sub3: "lorem ipsum",
    link3: "/sell",
  },
];

export default function Footer({}) {
  return (
    <footer>
      <div className="w-full min-h-699 bg-footer-background-sm sm:bg-footer-background bg-center bg-cover bg-no-repeat relative overflow-hidden">
        <div className="customContainer">
          <div className=" flex flex-wrap sm:flex-nowrap px-10">
            {footerInfo.map((info, idx) => (
              <div
                key={idx}
                className=" mt-20 lg:mt-40 w-1/2 sm:w-full space-y-3 "
              >
                <h1 className="section-sub-title">{info.name.toUpperCase()}</h1>

                <div className="flex flex-col gap-3">
                  <Link href={info.link1}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub1}
                    </a>
                  </Link>

                  <Link href={info.link2}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub2}
                    </a>
                  </Link>
                  <Link href={info.link3}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub3}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute flex flex-row bottom-5 left-10 2xl:right-40 md: gap-10 xl:gap-20 ">
          <a href="https://www.linkedin.com/company/nextventure/">
            <span className=" w-4 h-4 md:w-8 md:h-8">
              <Image
                className=" w-4 h-4 md:w-8 md:h-8"
                src="/icons/linkedInIcon.svg"
                height={28}
                width={27}
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
