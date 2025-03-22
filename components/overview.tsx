import { SectionContainer } from "./section-container";

const stats = [
  { value: "1830+", label: "Project executed" },
  { value: "220", label: "Data analytics" },
  { value: "390", label: "Data management" },
  { value: "834+", label: "Satisfied customers" },
];

export default function OverView() {
  return (
    <div className="bg-primary w-full">
      <SectionContainer className="py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-white text-center font-open-sans">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 relative"
            >
              <h2 className="text-[50px] md:text-[56px] font-extrabold mb-2">{stat.value}</h2>
              <p className="text-xl md:text-base font-normal md:font-bold">{stat.label}</p>

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
