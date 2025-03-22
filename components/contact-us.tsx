import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <div className="bg-white rounded-sm w-full max-w-[445px] p-8 shadow-md mx-auto md:mx-0">
      <h1 className="text-3xl font-manrope font-extrabold mb-4">Contact Us</h1>
      <form className="space-y-6">
        <label className="block">
          <span className="text-[#9497A1] text-xs block mb-2">Name</span>
          <input
            type="text"
            placeholder="Your name"
            defaultValue="Andrea"
            className="text-sm border-b border-gray-300 w-full focus:outline-none focus:border-black pb-1"
          />
        </label>

        <label className="block">
          <span className="text-[#9497A1] text-xs block mb-2">Email</span>
          <input
            type="email"
            placeholder="Your email"
            defaultValue="andrea@gmail.com"
            className="text-sm border-b border-gray-300 w-full focus:outline-none focus:border-black pb-1"
          />
        </label>

        <label className="block">
          <span className="text-[#9497A1] text-xs block mb-2">Theme</span>
          <input
            type="text"
            placeholder="Theme"
            defaultValue="Job"
            className="text-sm border-b border-gray-300 w-full focus:outline-none focus:border-black pb-1"
          />
        </label>

        <label className="block">
          <span className="text-[#9497A1] text-xs block mb-2">Message</span>
          <input
            type="text"
            placeholder="Type your message"
            defaultValue="Your message"
            className="text-sm border-b border-gray-300 w-full focus:outline-none focus:border-black pb-1"
          />
        </label>

        <div className="flex justify-end">
          <Button className="mt-6 text-sm w-[137px] h-[44px]">Send</Button>
        </div>
      </form>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-[#F0F9FF]">
      <SectionContainer className="flex sm:gap-10 not-sm:flex-col justify-between">
        <div className="max-w-[540px] space-y-6">
          <h1 className="text-3xl md:text-[38px] font-manrope font-extrabold">
            Left questions? Contact us now for a free consultation and free
            trial!
          </h1>
          <p className="text-[#9497A1] not-sm:hidden ">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>

          <div className="font-open-sans space-y-6 mt-10 text-sm ">
            <div>
              <h2 className="text-base text-[#9497A1]">Email address</h2>
              <p className="font-semibold text-sm">ensome@info.co.us</p>
            </div>

            <div>
              <h2 className="text-base text-[#9497A1]">Phone number</h2>
              <p className="font-semibold text-sm">+1601-201-5580</p>
            </div>

            <div>
              <h2 className="text-base text-[#9497A1]">Address</h2>
              <p className="font-semibold text-sm">
                1642 Washington Avenue, Jackson, MS, Mississippi, 39201
              </p>
            </div>
          </div>
        </div>
        <Button className="w-full h-[54px] sm:hidden mt-[30px] font-manrope font-bold text-base not-sm:w-full">
          Contact us
        </Button>
        <div className="not-sm:hidden w-full ">
          <Form />
        </div>
      </SectionContainer>
    </div>
  );
};

export default ContactUs;
