import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Industries } from "@/components/industries";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  // Smooth scroll behavior for anchor links — offset by fixed navbar height
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.hash && link.origin === window.location.origin) {
        // Clicking logo or plain "#" scrolls to very top
        if (link.hash === '#' || link.hash === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, '', ' ');
          return;
        }

        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          e.preventDefault();
          const navHeight = (document.querySelector('header') as HTMLElement)?.offsetHeight ?? 80;
          const top = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative overflow-hidden">
      <div className="bg-glow bg-primary w-[500px] h-[500px] top-[-250px] left-[-250px]" />
      <div className="bg-glow bg-accent w-[600px] h-[600px] top-[20%] right-[-300px]" />
      <div className="bg-glow bg-primary w-[800px] h-[800px] bottom-[-400px] left-[10%]" />
      
      <Navbar />
      <div className="h-24 md:h-28 shrink-0" aria-hidden="true" />
      
      <main className="flex-1 z-10">
        <Hero />
        <Services />
        <Industries />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
