import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";
const clientFeatures = [
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
  },
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
  },
  {
    date: "22 June 2020",
    title: "Sed ut perspiciatis unde omnis at vero blanditils",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
  },
];

const Blog = () => {
  return (
    <SectionContainer className="bg-[#F0F9FF] w-full max-w-screen">
      <div className="space-y-[30px] flex items-center flex-col">
        <div className="max-w-[540px] mx-auto">
          <h1 className="text-3xl md:text-[46px] font-manrope font-extrabold text-center">
            Glad to help your success
          </h1>
        </div>
        <div className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory px-4 md:justify-center">
          {clientFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white w-[350px] rounded-md p-8 snap-center shrink-0"
            >
              <p className="text-sm font-open-sans text-[#9497A1] mb-2">{feature.date}</p>
              <h1 className="my-4 font-bold font-manrope text-xl md:text-[22px]">
                {feature.title}
              </h1>
              <p className="text-sm md:text-base font-open-sans text-[#9497A1] mb-2">
                {feature.description}
              </p>
              <button className="mr-2 text-sm text-primary font-manrope font-bold border border-[#F1F6FA] rounded-md py-1 px-2.5">
                Proxy
              </button>
              <button className="text-sm text-primary font-manrope font-bold border border-[#F1F6FA] rounded-md py-1 px-2.5">
                VPN
              </button>
            </div>
          ))}
        </div>

        <Button className="h-[54px] w-[190px] not-sm:w-full font-open-sans text-sm">Learn more</Button>
      </div>
    </SectionContainer>
  );
};

export default Blog;
