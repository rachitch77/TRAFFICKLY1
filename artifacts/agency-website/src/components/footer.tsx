import { motion } from "framer-motion";
import { Rocket, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Google Ads", href: "#services" },
    { label: "Meta Ads", href: "#services" },
    { label: "AI Chatbots", href: "#services" },
    { label: "WhatsApp Automation", href: "#services" },
    { label: "Website Development", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ],
  Industries: [
    { label: "HVAC & Home Services", href: "#industries" },
    { label: "Solar Panel Installation", href: "#industries" },
    { label: "Roofing & Pest Control", href: "#industries" },
    { label: "Dental & Cosmetic Clinics", href: "#industries" },
    { label: "Healthcare & Specialists", href: "#industries" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 mb-4 group w-fit"
            >
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl">
                Traffic<span className="text-primary">kly</span>
              </span>
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              The hybrid AI + marketing agency that helps local businesses generate, qualify, and convert customers automatically — while they focus on doing great work.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Traffickly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">
              aiintellisense.sales@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
