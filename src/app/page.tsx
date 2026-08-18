'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Business from '@/components/Business';
import Products from '@/components/Products';
import GlobalNetwork from '@/components/GlobalNetwork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Business />
      <Products />
      <GlobalNetwork />
      <Contact />
      <Footer />
    </main>
  );
}
