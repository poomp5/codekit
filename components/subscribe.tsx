"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Subscribe = () => {
  const pathname = usePathname();
  return (
    <div 
    className={cn(
      pathname === "/solution" ? "bg-secondary border-b border-help-1" : "bg-primary",
      " w-full py-10"
    )}
    >
      <SectionContainer className="flex not-sm:flex-col items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-[38px] not-sm:text-center  font-extrabold font-manrope text-white">
            Subscribe to our newsletter
          </h1>
          <h3 className="not-sm:hidden font-open-sans text-xl text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </h3>
        </div>

        <div className="space-y-6 sm:hidden mt-3">
          <input
            type="text"
            placeholder="Your email"
            className=" h-[54px] px-4 w-full border-2 rounded-md placeholder:text-white"
          />
          <Button
            className="font-manrope not-sm:text-primary text-base bg-background w-full h-[54px] font-bold "
            variant="ghost"
          >
            Subscribe
          </Button>
        </div>

        <div className="not-sm:hidden h-[54px] bg-[#C9DCEC] rounded-md w-fit flex">
          <input
            type="text"
            placeholder="Your email"
            className=" h-full px-4 w-[300px]"
          />
          <Button
            className="font-manrope text-base  bg-background w-[125px] h-full font-bold"
            variant="ghost"
          >
            Send
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Subscribe;
