import { Icons } from "./icons";
import { SectionContainer } from "./section-container";

const FormSection = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 font-open-sans">
          <label htmlFor="name" className="block  text-c-gray text-xs">
            Name
          </label>
          <input
            id="name"
            type="text"
            defaultValue="Andrea"
            className="w-full border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:ring-0 focus:border-primary"
          />
        </div>

        <div className="space-y-2 font-open-sans">
          <label htmlFor="email" className="block  text-c-gray text-xs">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue="andrea@gmaol.com"
            className="w-full border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:ring-0 focus:border-primary"
          />
        </div>
      </div>

      <div className="space-y-2 font-open-sans">
        <label htmlFor="theme" className="block  text-c-gray text-xs">
          Theme
        </label>
        <input
          id="theme"
          type="text"
          defaultValue="Job"
          className="w-full border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:ring-0 focus:border-primary"
        />
      </div>

      <div className="space-y-2 font-open-sans">
        <label htmlFor="message" className="block  text-c-gray text-xs">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className="w-full min-h-[100px] border-0 border-b border-gray-300 py-2 px-0 bg-transparent focus:outline-none focus:ring-0 focus:border-primary resize-none"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-prborder-primary hover:bg-blue-700 text-white px-8 py-2 rounded-md transition-colors"
        >
          Send
        </button>
      </div>
    </form>
  );
};

const SolutionContactUs = () => {
  return (
    <div className="w-full bg-c-background">
      <SectionContainer className="grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-[38px] font-manrope font-extrabold  text-gray-800 mb-2">
            Contact information
          </h1>
          <div className="w-16 h-1 bg-primary mb-6"></div>

          <p className="text-c-gray mb-10 d text-xl">
            Fill up the form and our Team will get back to you with 25 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Icons.mail className="size-7" />
              <span className="text-base font-open-sans text-c-black">
                ensome@info.co.us
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Icons.call className="size-7" />
              <span className="text-base font-open-sans text-c-black">
                +1 601-201-5580
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Icons.location className="size-7" />
              <span className="text-base font-open-sans text-c-black">
                1642 Washington Ave, Jackson, MS
              </span>
            </div>
          </div>
        </div>
        <FormSection />
      </SectionContainer>
    </div>
  );
};

export default SolutionContactUs;
