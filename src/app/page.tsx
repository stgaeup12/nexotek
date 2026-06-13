import Hero from "@/components/Hero";
import Products from "@/components/Products";
import VideoShowcase from "@/components/VideoShowcase";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <VideoShowcase />
      <About />
      <WhyUs />
      <Contact />
    </main>
  );
}

