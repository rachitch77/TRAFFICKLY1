import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-5 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2.5 rounded-xl group-hover:bg-primary/30 transition-colors">
              <Rocket className="h-7 w-7 text-primary" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">
              Traffic<span className="text-primary">kly</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-lg font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full font-semibold px-6">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 rounded-full w-full">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
