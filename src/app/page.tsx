import Navbar from "@/components/layout/Navbar";
import NeuralStory from "@/components/neural/NeuralStory";
import YourMindSystem from "@/components/neural/YourMindSystem";
import Features from "@/components/landing/Features";
import HeroSplit from "@/components/landing/HeroSplit";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    // Use default background and text, allowing next-themes to control light/dark mode
    <main className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      {/* Unified Hero Section: Courses (Left) + About Us (Right) */}
      <HeroSplit />

      {/* Scroll-driven Neural Experience */}
      <NeuralStory />

      {/* Typography System Section */}
      <YourMindSystem />

      {/* Features */}
      <Features />

      <Footer />
    </main>
  );
}
