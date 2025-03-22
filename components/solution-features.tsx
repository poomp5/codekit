import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "./section-container";

const SolutionFeatures = () => {
  return (
    <SectionContainer className="bg-[#F1F6FA] w-full max-w-screen flex flex-col items-center relative gap-[30px] font-manrope">
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center max-w-screen-lg">
        <div className="space-y-6">
          <h1 className="text-[38px] font-extrabold text-gray-800">
            The newest business analytics platform
            <hr className="mt-2 border-b-3 border-primary w-[95px]" />
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
        <Image
          src="/images/publicity/01_img_10.png"
          width={768}
          height={590}
          alt="Business analytics platform illustration"
          className="w-full h-auto rounded-md"
          priority
        />
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center max-w-screen-lg">
        <Image
          src="/images/publicity/02_img_11.png"
          width={768}
          height={590}
          alt="Business analytics platform illustration"
          className="w-full h-auto rounded-md"
          priority
        />
        <div className="space-y-6">
          <h1 className="text-[38px] font-extrabold text-gray-800">
            The newest business analytics platform
            <hr className="mt-2 border-b-3 border-primary w-[95px]" />
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
    </SectionContainer>
  );
};

export default SolutionFeatures;
