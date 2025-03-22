import dynamic from "next/dynamic";

const ElementsHero = dynamic(() => import("@/components/elements-hero"));
const ElementsPrice = dynamic(() => import("@/components/elements-price"));
const ElementsOverView = dynamic(
  () => import("@/components/elements-overview")
);
const Benefits = dynamic(() => import("@/components/benefits"));
const ElementsFeatures = dynamic(
  () => import("@/components/elements-features")
);
const Footer = dynamic(() => import("@/components/footer"));

const Review = dynamic(() => import("@/components/review"));
const SectionBlog = dynamic(() => import("@/components/section-blog"));
const ElementsContactUs = dynamic(
  () => import("@/components/elements-contact-us")
);

export default function Elements() {
  return (
    <div>
      <ElementsHero />
      <ElementsFeatures />
      <ElementsOverView />
      <Benefits />
      <Review header="Testimonials" hideAnother amount={3} />
      <ElementsPrice />
      <SectionBlog header="Our blog" showDescription />
      <ElementsContactUs />
      <Footer />
    </div>
  );
}
