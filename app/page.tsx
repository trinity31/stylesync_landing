import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <AppPreview />
      <Footer />
    </main>
  );
}
