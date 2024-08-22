import HeroSection from "../about/hero/page";
import AboutSection from "../about/about-product/page";
import FeatureSection from "../about/feature/page";
import PolicySection from "../about/policy/page";
import ContactSection from "../about/contact/page";
import TestimonialSection from "../about/testimonial/page";
import QuestionSection from "../about/question/page";

export default function About() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <PolicySection />
      <TestimonialSection />
      <QuestionSection />
      <ContactSection />
    </>
  );
}
