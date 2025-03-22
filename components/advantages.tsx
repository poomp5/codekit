import { Icons } from "@/components/icons";
import { SectionContainer } from "./section-container";

const clientFeatures = [
  {
    icon: <Icons.brain className="w-8 h-8" />,
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.graph className="w-10 h-10" />,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.key className="w-8 h-8" />,
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

const Advantages = () => {
  return (
    <SectionContainer className="bg-[#F1F6FA] w-full max-w-screen">
      <div className="space-y-[30px]">
        <div className="max-w-[540px] word-wrap mx-auto">
          <h1 className="text-3xl md:text-[46px] font-manrope font-extrabold text-center">
            Why our clients <br /> chosse Ensome?
          </h1>
          <p className="mt-6 text-[#9497A1] text-center font-medium font-open-sans text-sm md:text-xl">
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
        <div className="w-full overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-6 w-max flex-nowrap px-4 md:mx-auto">
            {clientFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white max-w-[350px] rounded-md p-8 snap-start shrink-0"
              >
                <div className="mt-4 w-fit border border-[#F1F6FA] rounded-lg p-4">
                  {feature.icon}
                </div>
                <h1 className="my-6 font-bold font-manrope text-[22px]">
                  {feature.title}
                </h1>
                <p className="mb-6 text-[16px] text-[#9497A1]">
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

export default Advantages;
