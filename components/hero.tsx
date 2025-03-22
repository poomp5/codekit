import Image from "next/image";
import { Icons } from "./icons";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <SectionContainer className="flex items-center not-md:flex-col relative gap-[30px]">
      <div className="max-w-[540px]  space-y-[35px] shrink-0">
        <div className="space-y-[30px]">
          <h1 className="text-3xl md:text-[48px] font-manrope font-extrabold">
            Find true power in your data with Ensome
          </h1>
          <h3 className="text-sm md:text-xl font-open-sans text-[#9497A1]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </h3>
        </div>

        <div className="flex items-center gap-[20px] not-sm:flex-col not-sm:w-full">
          <Button className="w-[190px] h-[54px] font-manrope font-bold text-base not-sm:w-full">
            Learn more
          </Button>
          <Button
            variant="ghost"
            className="text-[#292D33] w-[190px] h-[54px] font-manrope font-bold text-base not-sm:text-primary not-sm:w-full not-sm:border-2 not-sm:border-primary"
          >
            <Icons.play className="size-6 *:fill-[#292D33] not-sm:*:fill-primary" />
            <span>Watch the demo</span>
          </Button>
        </div>
      </div>
      <Image
        src="/images/publicity/001_illustration.png"
        className="not-sm:-order-1"
        width={845}
        height={518}
        alt="banner"
        priority
      />
    </SectionContainer>
  );
};

export default Hero;
