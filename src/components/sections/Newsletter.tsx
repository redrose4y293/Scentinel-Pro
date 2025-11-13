import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setIsSubscribed(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);

    // In real app: POST /api/newsletter
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Stay Updated
              </h2>
              <p className="text-lg text-white/90">
                Get safety tips, firmware updates, and exclusive offers
                delivered to your inbox
              </p>
            </div>

            {!isSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-white/90 border-white/20 text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-white text-lg">
                <CheckCircle className="h-6 w-6" />
                <span>Successfully subscribed!</span>
              </div>
            )}

            <p className="text-center text-sm text-white/70 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
