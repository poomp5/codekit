import dynamic from "next/dynamic";

const ClientLogo = dynamic(() => import("@/components/clients-logo"));
const Features = dynamic(() => import("@/components/features"));
const OverView = dynamic(() => import("@/components/overview"));
const Hero = dynamic(() => import("@/components/hero"));
const Advantages = dynamic(() => import("@/components/advantages"));
const Footer = dynamic(() => import("@/components/footer"));
const Blog = dynamic(() => import("@/components/blog"));
const ContactUs = dynamic(() => import("@/components/contact-us"));
const Subscribe = dynamic(() => import("@/components/subscribe"));
const Review = dynamic(() => import("@/components/review"));

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientLogo />
      <Advantages />
      <Features />
      <Blog />
      <Review
        buttonClassName="mt-20"
        header="Trusted by the best <br /> in the business"
      />
      <OverView />
      <ContactUs />
      <Subscribe />
      <Footer />
    </div>
  );
}
