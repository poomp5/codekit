import { SectionContainer } from "./section-container";
import ClientLogo from "./clients-logo";
const stats = [
  { value: "1830+", label: "Project executed" },
  { value: "834+", label: "Satisfied customers" },
  { value: "390", label: "Data management" },
];

export default function ElementsOverView() {
  return (
    <div className="w-full">
      <SectionContainer className="py-12 px-4">
        <h1 className="text-[38px] font-bold text-gray-800 text-center">
          We provide services that guarantee your success
        </h1>
        <div className="mt-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-4 font-open-sans">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0 relative"
            >
              <h2 className="text-[75px] text-center md:text-[50px] mb-2 text-primary font-[800]">
                {stat.value}
              </h2>
              <p className="text-xl text-center text-nowrap md:text-base text-[#9497A1]">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <div className="block md:hidden w-3/5 mx-auto h-px bg-white/30 my-6"></div>
              )}

              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/30"></div>
              )}
            </div>
          ))}
          <p className="mt-4 text-[#9497A1] max-w-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
            finibus nec.
          </p>
        </div>
      </SectionContainer>
      <ClientLogo />
    </div>
  );
}
