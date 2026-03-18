import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Docs from "@/components/Docs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div id="home">
          <Hero />
        </div>
        <Features />
        <Pricing />
        <Docs />
      </div>
      <Footer />
    </main>
  );
}