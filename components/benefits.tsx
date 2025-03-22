import { Icons } from "./icons";
import { SectionContainer } from "./section-container";
const clientFeatures1 = [
  {
    icon: <Icons.brain className="w-8 h-8" />,
    title: "Machine learning",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.key className="w-10 h-10" />,
    title: "Access control",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];
const clientFeatures2 = [
  {
    icon: <Icons.graph className="w-8 h-8" />,
    title: "Embed analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    icon: <Icons.data className="w-10 h-10" />,
    title: "Data analytics",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
];

const Benefits = () => {
  return (
    <div className="bg-[#F1F6FA] py-16 px-6 md:px-12 lg:px-16">
      <SectionContainer className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="max-w-md content-end">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The benefits of Ensome
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-rows-2 gap-6">
            {clientFeatures1.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h1 className="my-6 font-bold font-manrope text-[22px]">
                  {feature.title}
                </h1>
                <p className="mb-2 text-[16px] text-[#9497A1]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="translate-y-0 md:translate-y-13 grid grid-rows-2 gap-6">
            {clientFeatures2.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h1 className="my-6 font-bold font-manrope text-[22px]">
                  {feature.title}
                </h1>
                <p className="mb-2 text-[16px] text-[#9497A1]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
export default Benefits;
