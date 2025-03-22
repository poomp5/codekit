import Image from "next/image";
import { SectionContainer } from "./section-container";
import { Icons } from "./icons";

const clientFeatures = [
  {
    icon: <Icons.brain className="w-6 h-6 inline-block mr-2" />,
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.graph className="w-6 h-6 inline-block mr-2" />,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.key className="w-6 h-6 inline-block mr-2" />,
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionContainer className="w-full max-w-screen px-4 md:px-8 flex flex-col items-center relative gap-10 font-manrope">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/publicity/img_15.png"
          width={929}
          height={530}
          alt="Business analytics platform illustration"
          className="w-full h-auto rounded-md object-cover"
          priority
        />
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            The benefits of Ensome
            <hr className="mt-2 border-b-4 border-primary w-24" />
          </h1>
          <div className="flex flex-col">
            {clientFeatures.map((feature, index) => (
              <div key={index} className="mb-4">
                <h2 className="flex items-center text-lg sm:text-xl font-bold text-gray-800">
                  {feature.icon} {feature.title}
                </h2>
                <p className="text-sm sm:text-base text-[#9497A1] mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
