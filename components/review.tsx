"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { SectionContainer } from "./section-container";

const data = [
  {
    imageUrl: "001_img_person_1.png",
    quote:
      '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."',
    another: "Alex Bern",
    position: "CEO by PixelPerfect",
  },
  {
    imageUrl: "002_img_person_1.png",
    quote:
      '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."',
    another: "Ruben Chifundo",
    position: "CEO by NOX",
  },
  {
    imageUrl: "003_img_person_1.png",
    quote:
      '"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."',
    another: "Tigran Nazaret",
    position: "Data analyst",
  },
];

type Props = {
  header: string;
  hideAnother?: boolean;
  amount?: number;
  showUnderline?: boolean;
  colorVariant?: boolean;
  buttonClassName?: string;
};

const Review = ({
  header,
  hideAnother,
  showUnderline = false,
  colorVariant = false,
  amount = 2,
  buttonClassName,
}: Props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleItems = isMobile ? 1 : amount;
  const maxStartIndex = Math.max(0, data.length - visibleItems);

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  const visibleData = data.slice(startIndex, startIndex + visibleItems);

  return (
    <div className={cn("w-full", colorVariant && "bg-[#F1F6FA]")}>
      <SectionContainer>
        <div className="flex justify-between items-start sm:items-center relative flex-col sm:flex-row">
          <div className="w-full sm:w-auto">
            <h1
              dangerouslySetInnerHTML={{ __html: header }}
              className="text-2xl sm:text-3xl md:text-[46px] font-extrabold font-manrope text-center sm:text-left"
            ></h1>
            {showUnderline && (
              <hr className="mt-2 border-b-3 border-primary w-[95px] mx-auto sm:mx-0" />
            )}
          </div>

          <div
            className={cn(
              "gap-3 flex justify-center sm:justify-end mt-6 sm:mt-0 w-full sm:w-auto sm:absolute sm:right-0",
              buttonClassName
            )}
          >
            <button
              className={cn(
                "bg-tertiary w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-xl flex items-center justify-center transition-opacity",
                startIndex === 0
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-c-background/90 cursor-pointer",
                colorVariant && "!bg-help-3"
              )}
              onClick={handlePrevClick}
              disabled={startIndex === 0}
              aria-label="Previous review"
            >
              <Icons.arrowRight
                className={cn(
                  colorVariant ? "*:fill-help-2" : "*:fill-help-3",
                  "size-6 sm:size-8 rotate-180"
                )}
              />
            </button>
            <button
              className={cn(
                "bg-tertiary w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-xl flex items-center justify-center transition-opacity",
                startIndex >= maxStartIndex
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-c-background/90 cursor-pointer",
                colorVariant && "!bg-help-3"
              )}
              onClick={handleNextClick}
              disabled={startIndex >= maxStartIndex}
              aria-label="Next review"
            >
              <Icons.arrowRight className="size-6 sm:size-8" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "w-full grid mt-16 gap-10",
            "grid-cols-1",
            !isMobile && amount === 2 && "sm:grid-cols-2",
            !isMobile && amount !== 2 && "sm:grid-cols-2 md:grid-cols-3"
          )}
        >
          {visibleData.map((item, index) => (
            <div
              key={startIndex + index}
              className="bg-background shadow-2xl px-6 py-10 sm:p-[35px] relative font-open-sans rounded-2xl transition-all duration-300 ease-in-out"
            >
              <Image
                src={`/images/publicity/${item.imageUrl}`}
                width={75}
                height={75}
                className="sm:absolute sm:-top-[37.5px] relative mx-auto sm:mx-0"
                alt={item.another}
              />

              <h3 className="text-base text-c-gray mt-6">{item.quote}</h3>

              {!hideAnother && (
                <>
                  <h4 className="font-manrope text-base font-bold mt-4">
                    {item.another}
                  </h4>
                  <h5 className="text-sm text-c-gray">{item.position}</h5>
                </>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Review;
