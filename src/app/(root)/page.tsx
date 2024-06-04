import About from "./_components/About";
import Company from "./_components/Company";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Learning from "./_components/Learning";
import StartSection from "./_components/StartSection";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Learning />
      <About />
      <Company />
      <Testimonials />
      <StartSection />
      <Footer />
    </>
  );
}
