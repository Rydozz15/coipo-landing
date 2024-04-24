"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/serivces";
import Pricing from "./components/pricing";
import TestimonialsSection from "./components/testimonial";
import { testimonialsData } from "./lib/data";
import LastHero from "./components/lastHero";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Pricing />
      <TestimonialsSection data={testimonialsData} />
      <LastHero />
      <FloatingWhatsApp
        phoneNumber="+56974612194"
        accountName="Coipo Solutions"
        statusMessage="Suele responder en 1 hora"
        chatMessage="Buenas, espero estés súper. ¿En qué te podemos ayudar?"
        placeholder="Escribe tu consulta..."
      />
    </main>
  );
}
