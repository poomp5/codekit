import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

export const ElementsContactUs = () => {
  return (
    <div className="w-full bg-c-background">
      <SectionContainer className="flex md:py-13 items-center flex-col gap-3 justify-center">
        <h1 className="font-extrabold text-3xl  md:text-[38px] font-manrope ">
          Do you need help?
        </h1>
        <h3 className="text-sm md:text-base font-open-sans text-c-gray max-w-2xl mx-auto text-center ">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </h3>
        <Button className="w-full md:w-[190px] h-[54px] mt-10 font-manrope font-bold text-base not-sm:w-full bg-primary text-white">
          Contact Us
        </Button>
      </SectionContainer>
    </div>
  );
};
export default ElementsContactUs;
