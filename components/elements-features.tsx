import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const ElementsFeatures = () => {
  return (
    <div>
      <SectionContainer className="mt-16 flex not-md:flex-col relative gap-[30px]">
        <div className="max-w-[540px] space-y-[35px] shrink-0">
          <div className="space-y-[30px]">
            <h1 className="text-3xl md:text-[48px] font-manrope font-extrabold">
              The <span className="text-primary">newest</span> business
              analytics platform
            </h1>
          </div>
        </div>
        <div>
          <p className="text-base text-[#9497A1] max-w-[22rem] gap-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Button className="mt-6 block w-[185px] h-[54px] font-manrope font-bold text-base not-sm:w-full">
            Discover more
          </Button>
        </div>
      </SectionContainer>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 bg-[#F1F6FA] max-w-screen w-full">
        <Image
          src="/images/publicity/02_img_10.png"
          width={929}
          height={530}
          alt="Business analytics platform illustration"
          className="rounded-md"
          priority
        />
        <div className="space-y-6 max-w-screen-sm content-center mx-8">
          <h1 className="sm:mt-0 mt-6 text-[38px] font-extrabold text-gray-800">
            Radically new solutions for data
          </h1>
          <p className="text-[#9497A1] font-open-sans text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Link
            href="#"
            className="shadow-md shadow-blue-600/40 inline-block bg-primary hover:bg-blue-700 text-white font-medium py-4 px-12 rounded-md transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElementsFeatures;
