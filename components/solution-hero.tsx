import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";
import { Icons } from "./icons";

const SolutionHero = () => {
  return (
    <div className="bg-[#002B4E] w-full">
      <SectionContainer className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-lg mx-auto px-4 py-12">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white font-manrope leading-tight">
              Find true power in your data with Ensome
            </h1>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <p className="text-[#F1F6FA] text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
              <Button className="text-secondary bg-c-background hover:bg-gray-200 w-full sm:w-[190px] h-[54px] font-manrope font-bold text-base">
                Learn more
              </Button>
              <Button className="text-[#F1F6FA] w-full sm:w-[190px] h-[54px] font-manrope font-bold text-base border border-white flex items-center justify-center gap-2 !bg-transparent">
                <Icons.play className="size-6 fill-white" />
                <span>Watch the demo</span>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default SolutionHero;
