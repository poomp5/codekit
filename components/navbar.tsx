"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solution",
    href: "/solution",
  },
  {
    title: "Elements",
    href: "/elements",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const solutionPage = pathname === "/solution";

  return (
    <div
      className={cn(
        solutionPage ? "bg-[#002B4E] border-b border-help-1" : "bg-white"
      )}
    >
      <SectionContainer className="w-full py-4">
        <nav className={"border-gray-200 font-manrope"}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {solutionPage ? (
                <Image
                  src={"/images/publicity/logo_white.png"}
                  className="h-12 w-auto"
                  width={1000}
                  height={1000}
                  alt="logo"
                />
              ) : (
                <Image
                  src={"/images/publicity/logo_blue.png"}
                  className="h-12 w-auto"
                  width={1000}
                  height={1000}
                  alt="logo"
                />
              )}
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <MobileNav />
              {/* <Icons.menu className="size-5" /> */}
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        pathname === item.href
                          ? solutionPage
                            ? "underline !text-white"
                            : "!text-c-black"
                          : solutionPage
                          ? "!text-white"
                          : "!text-c-gray",
                        "block py-2 px-3 rounded-sm md:font-semibold md:p-0 transition-all"
                      )}
                      aria-current="page"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <Button
                className={cn(
                  "w-[168px] h-[44px]",
                  solutionPage && "!bg-background text-c-black"
                )}
              >
                <Icons.play
                  className={cn("w-24 h-24 ", solutionPage && "*:fill-c-black")}
                />
                <span>Watch the demo</span>
              </Button>
            </div>
          </div>
        </nav>
      </SectionContainer>
    </div>
  );
}
