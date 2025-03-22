import Image from "next/image";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

const FeaturesButton = () => {
  return (
    <Button className="w-[190px] not-sm:w-full h-[54px] font-manrope text-base">
      <span className="not-sm:hidden">Learn more</span>
      <span className="sm:hidden">Discover more</span>
    </Button>
  );
};

const Features = () => {
  return (
    <SectionContainer className="flex flex-col items-center relative gap-[30px] font-manrope">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 ">
          <h1 className="text-3xl md:text-[46px] font-extrabold text-gray-800">
            The newest business analytics platform
          </h1>
          <p className="text-gray-600 font-open-sans text-sm md:text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <FeaturesButton />
        </div>
        <Image
          src="/images/publicity/002_illustration.png"
          width={768}
          height={590}
          alt="Business analytics platform illustration"
          className="w-full h-auto not-sm:-order-1"
          priority
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/publicity/003_illustration.png"
          width={768}
          height={590}
          alt="Business analytics platform illustration"
          className="w-full h-auto "
          priority
        />
        <div className="space-y-6">
          <h1 className="text-3xl md:text-[46px] font-extrabold text-gray-800">
            Radically new data solutions
          </h1>
          <p className="text-gray-600 font-open-sans text-sm md:text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <FeaturesButton />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
