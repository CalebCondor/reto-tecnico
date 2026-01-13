"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ChangesSection from "@/components/changes-section";
import DenialSection from "@/components/denial-section";
import BeginSection from "@/components/begin-section";
import AdditionalServices from "@/components/additional-services";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ChangesSection />
      <DenialSection />
      <BeginSection />
      <AdditionalServices />
      <Footer />
    </main>
  );
}
