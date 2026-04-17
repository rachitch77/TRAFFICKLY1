import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, CoolBreeze HVAC",
    location: "Mumbai, India",
    review:
      "We went from 3-4 leads a week to 25-30 qualified leads. The AI bot handles all the initial conversations and books appointments automatically. Our revenue has doubled in 4 months.",
    rating: 5,
    initials: "RS",
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "Dr. Priya Nair",
    role: "Director, Nair Dental Clinic",
    location: "Bengaluru, India",
    review:
      "I was skeptical about AI automation but the results speak for themselves. We fill 90% of our appointment slots now, and I spend zero time on follow-ups. Truly hands-free growth.",
    rating: 5,
    initials: "PN",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Marcus Delgado",
    role: "CEO, ProFix Plumbing",
    location: "Dallas, TX",
    review:
      "Within the first 30 days we had more booked jobs than the previous quarter. The Meta ads targeting is incredibly precise and the WhatsApp automation keeps leads warm until they're ready to book.",
    rating: 5,
    initials: "MD",
    color: "from-orange-500 to-pink-500",
  },
  {
    name: "Ananya Krishnan",
    role: "Founder, GlowUp Cosmetic Clinic",
    location: "Chennai, India",
    review:
      "Our consultation bookings are up 300%. The AI chatbot answers questions about procedures at 2am and books appointments without us lifting a finger. This is the future of medical marketing.",
    rating: 5,
    initials: "AK",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "James Whitfield",
    role: "Owner, Shield Pest Control",
    location: "Houston, TX",
    review:
      "GrowthAI transformed our entire customer acquisition process. We stopped relying on referrals and word of mouth. Now we have a predictable, scalable pipeline of new clients every month.",
    rating: 5,
    initials: "JW",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Dr. Vikram Menon",
    role: "Principal Physiotherapist, MoveFree Clinic",
    location: "Pune, India",
    review:
      "The ROI is insane. We spend ₹50K/month on the Growth plan and generate ₹4-5L in new patient revenue. Every rupee we invest brings back 8-10x. I wish I had found them sooner.",
    rating: 5,
    initials: "VM",
    color: "from-rose-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="bg-glow bg-primary w-[600px] h-[600px] top-1/2 left-[-200px] opacity-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Client Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Businesses That Trusted Us
            <br />
            <span className="text-gradient">And Never Looked Back</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. Our clients see measurable growth within the first 30 days.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors relative group"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-muted-foreground/20 group-hover:text-primary/20 transition-colors" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: "Businesses Scaled" },
            { value: "3.2M+", label: "Leads Generated" },
            { value: "8.4x", label: "Average ROI" },
            { value: "96%", label: "Client Retention Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
