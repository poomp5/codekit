import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

const PricingList = [
  {
    title: "Starter",
    price: "Free",
    description: "Trial plan for starters",
    details: [
      "For small teams – 5 users",
      "Community support",
      "Individual data – 20GB",
    ],
  },
  {
    title: "Professional",
    price: "$20",
    description: "For users who want more",
    details: [
      "For small teams – 15 users",
      "Individual support",
      "Individual data – 60GB",
    ],
  },
  {
    title: "Organization",
    price: "$50",
    description: "The best solution for Pro",
    details: [
      "For big teams – unlimited",
      "Individual support",
      "Individual data – unlimited",
      "Data history",
    ],
  },
];

const Pricing = () => {
  return (
    <SectionContainer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center font-manrope">
      {/* Header and Toggle */}
      <div className="w-full flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-3xl sm:text-[38px] font-extrabold text-gray-800 text-center sm:text-left">
          Our Pricing
          <hr className="mt-2 border-b-3 border-primary w-[95px] mx-auto sm:mx-0" />
        </h1>

        <div className="bg-tertiary flex rounded-full font-semibold text-sm w-full max-w-[220px] mx-auto sm:mx-0">
          <button className="w-1/2 py-2 bg-primary text-white rounded-l-full">
            Monthly
          </button>
          <button className="w-1/2 py-2 text-gray-800 rounded-r-full">
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PricingList.map((feature, index) => (
          <div
            key={index}
            className="bg-white w-full rounded-md p-8 shadow-lg flex flex-col h-full"
          >
            <h1 className="text-xl sm:text-[22px] font-bold text-gray-800">
              {feature.title}
            </h1>
            <h1 className="mt-4 text-3xl sm:text-[38px] font-bold text-gray-800">
              {feature.price}
              {index !== 0 && (
                <span className="block sm:inline text-base font-medium">
                  &nbsp;per editor/month
                </span>
              )}
            </h1>
            <h1 className="mt-2 mb-4 text-lg font-bold text-gray-800">
              {feature.description}
            </h1>
            <Button
              className={cn(
                index === 0 &&
                  "bg-transparent text-primary hover:text-white hover:bg-primary border border-primary",
                "w-full py-5.5 my-4"
              )}
            >
              Get Started
            </Button>

            <div className="space-y-3 mt-auto">
              {feature.details.map((item, i) => (
                <p key={i} className="text-base flex items-start">
                  <Icons.check className="mr-2 mt-1" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Pricing;
