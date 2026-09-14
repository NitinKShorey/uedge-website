"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AISection from "@/components/AISection";
import RotatingWords from "@/components/RotatingWords";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Hero />
      <AISection />
      <RotatingWords onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
