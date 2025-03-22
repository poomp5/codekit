import dynamic from "next/dynamic";

const SolutionContactUs = dynamic(
  () => import("@/components/solution-contact-us")
);
const SectionBlog = dynamic(() => import("@/components/section-blog"));
const ClientLogo = dynamic(() => import("@/components/clients-logo"));
const Footer = dynamic(() => import("@/components/footer"));
const Subscribe = dynamic(() => import("@/components/subscribe"));
const SolutionHero = dynamic(() => import("@/components/solution-hero"));
const SolutionFeatures = dynamic(
  () => import("@/components/solution-features")
);
const SolutionOverView = dynamic(
  () => import("@/components/solution-overview")
);
const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"));
const Pricing = dynamic(() => import("@/components/pricing"));
const Review = dynamic(() => import("@/components/review"));

export default function Solution() {
  return (
    <div>
      <SolutionHero />
      <SolutionFeatures />
      <SolutionOverView />
      <WhyChooseUs />
      <Review
        header="What our customers say"
        hideAnother
        showUnderline
        colorVariant
      />

      <Pricing />
      <SectionBlog header="Ensome blog" />
      <ClientLogo />
      <SolutionContactUs />
      <Subscribe />
      <Footer />
    </div>
  );
}
