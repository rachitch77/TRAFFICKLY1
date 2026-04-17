import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

const businessTypes = [
  "HVAC / Air Conditioning",
  "Plumbing",
  "Roofing",
  "Electrical Services",
  "Pest Control",
  "General Home Services",
  "Dental Clinic",
  "Medical / General Clinic",
  "Cosmetic / Aesthetic Clinic",
  "Physiotherapy",
  "Other Healthcare",
  "Other Business",
];

export function Contact() {
  const { mutate: createLead, isPending, isSuccess, isError } = useCreateLead();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    createLead(
      { data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      <div className="bg-glow bg-primary w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Ready to Scale?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Ready to Get
            <br />
            <span className="text-gradient">More Customers?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your business and we will put together a custom growth strategy — completely free. No pressure, no obligation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col justify-center gap-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">Talk to a Growth Expert</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We review every submission personally and respond within 24 hours with a tailored strategy for your business.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call / WhatsApp</p>
                  <p className="font-medium">+91 98000 00000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email (Founder)</p>
                  <p className="font-medium">aiintellisense.sales@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Offices</p>
                  <p className="font-medium">Mumbai, India &amp; Dallas, USA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">You are in!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    We received your details and will get back to you within 24 hours with a custom growth strategy.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Full Name *</label>
                      <input
                        {...register("name")}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Email Address *</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91 98000 00000"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Business Type *</label>
                    <select
                      {...register("businessType")}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="text-xs text-destructive">{errors.businessType.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Tell Us About Your Business *</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your business, your current challenges, and what growth looks like for you..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {isError && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or reach out directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl font-semibold h-13"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Get My Free Growth Strategy"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
