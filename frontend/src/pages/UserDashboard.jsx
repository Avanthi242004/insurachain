import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
    </>
  );
}
