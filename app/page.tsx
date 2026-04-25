import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Stats />
      <About />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
