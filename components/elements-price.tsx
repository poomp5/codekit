import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";
const PricingList = [
  {
    title: "Free trial",
    price: "$00",
    details: ["For small teams – 5 users", "Community support"],
  },
  {
    title: "Lite",
    price: "$99",
    details: [
      "For small teams – 15 users",
      "Individual support",
      "Individual data – 60GB",
    ],
  },
  {
    title: "Basic",
    price: "$00",
    details: [
      "For big teams – 30 users",
      "Individual support",
      "Individual data – 120GB",
      "Advanced permissions",
    ],
  },
  {
    title: "For enterprises",
    price: "Custom",
    details: [
      "Unlimited team members",
      "Individual support",
      "Unlimited Individual data",
      "Advanced permissions",
      "Data history",
      "Audit log",
      "All functions included",
    ],
  },
];
const ElementsPrice = () => {
  return (
    <SectionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center font-manrope">
      <div className="w-full flex justify-between">
        <h1 className="text-[38px] font-extrabold text-gray-800">Our Picing</h1>
      </div>
      <div className="mt-12">
        <div className="w-full">
          <div className="flex px-4 md:mx-auto flex-col sm:flex-row gap-6">
            {PricingList.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  index === 2 && "bg-primary text-white",
                  "max-w-[350px] rounded-md p-8 snap-start shrink-0 shadow-lg"
                )}
              >
                <h1
                  className={cn(
                    index === 2 && "text-white",
                    "mt-1 font-bold font-manrope text-base"
                  )}
                >
                  {feature.title}
                </h1>
                <div className="flex justify-between">
                  <h1
                    className={cn(
                      index === 2 && "text-white",
                      "mt-4 font-bold font-manrope text-[26px] block"
                    )}
                  >
                    {feature.price}
                  </h1>
                  <div className="content-end">
                    <Button
                      className={cn(
                        index === 2 &&
                          "bg-transparent text-primary mr-3 w-[41px] h-[32px]",
                        "bg-white hover:bg-gray-100 border-1 border-primary text-primary mr-2 w-[41px] h-[32px]"
                      )}
                    >
                      Mo
                    </Button>
                    <Button
                      className={cn(
                        index === 2 &&
                          "border-1 border-white hover:bg-white text-white hover:text-primary w-[41px] h-[32px]",
                        "mr-2 w-[41px] h-[32px]"
                      )}
                    >
                      Yr
                    </Button>
                  </div>
                </div>
                <Button
                  className={cn(
                    index === 2 &&
                      "bg-white text-primary hover:text-blue-600 hover:bg-gray-200 border-1 border-primary",
                    "w-full py-5.5 my-4"
                  )}
                >
                  Choose plan
                </Button>
                {feature.details.map((item, index) => (
                  <p key={index} className="text-base mb-2">
                    <Icons.check className="inline-block mr-2 stroke-white" />
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ElementsPrice;
