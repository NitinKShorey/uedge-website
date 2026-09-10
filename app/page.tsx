import Hero from "@/components/Hero";
import AISection from "@/components/AISection";
import RotatingWords from "@/components/RotatingWords";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AISection />
      <RotatingWords />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
