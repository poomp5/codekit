import { SectionContainer } from "./section-container";
import Image from "next/image";
const ElementsHero = () => {
  return (
    <div>
      <SectionContainer className="flex not-md:flex-col relative gap-[30px]">
        <div className="max-w-[540px] space-y-[35px] shrink-0">
          <div className="space-y-[30px]">
            <h1 className="text-3xl md:text-[48px] font-manrope font-extrabold">
              Find true power in your data with
              <span className="text-primary">Ensome</span>
            </h1>
          </div>
        </div>
        <p className="text-base text-[#9497A1] max-w-[22rem] gap-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </p>
      </SectionContainer>
      <div className="right-200 top-80 absolute font-manrope border-1 bg-background rounded-full w-[130px] h-[130px] flex items-center justify-center text-sm font-semibold">
        <div className=" bg-primary relative w-[110px] h-[110px] rounded-full flex items-center justify-center">
          <div className="absolute w-[100px] h-[100px]  border rounded-full" />
          <span className="mx-auto text-white ">Learn more</span>
        </div>
      </div>
      <Image
        src="/images/publicity/img_11.png"
        width={1920}
        height={590}
        alt="Image 11 Banner"
        className="max-w-screen w-full"
        priority
      />
    </div>
  );
};

export default ElementsHero;
