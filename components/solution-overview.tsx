import { SectionContainer } from "./section-container";

const stats = [
  { value: "220", label: "Data analytics performed by Ensome's " },
  { value: "390", label: "Data management performed by Ensome's " },
  { value: "834+", label: "Сustomers are satisfied with Ensome's work" },
  { value: "1830+", label: "Projects implemented by Ensome" },
];

export default function SolutionOverView() {
  return (
    <div className="w-full">
      <SectionContainer className="py-12 px-4">
        <h1 className="text-[38px] font-bold text-gray-800">
          Ensome in numbers
          <hr className="mt-2 border-b-3 border-primary w-[95px]" />
        </h1>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between font-open-sans">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 relative"
            >
              <p className="mt-8 text-xl md:text-sm text-[#9497A1] w-3/4">
                {stat.label}
              </p>
              <h2 className="text-[75px] md:text-[56px] mb-2 text-primary ">
                {stat.value}
              </h2>
              {index < stats.length - 1 && (
                <div className="block md:hidden w-3/5 mx-auto h-px bg-white/30 my-6"></div>
              )}

              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/30"></div>
              )}
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
