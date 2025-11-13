import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Package } from "lucide-react";
import { useCallback } from "react";

const packages = [
  {
    name: "Single Unit",
    price: 199,
    description: "Perfect for apartments",
    features: [
      "1x Scentinel Pro device",
      "Wall mount kit",
      "2-year warranty",
      "Mobile app access",
      "Cloud storage (1 year)",
    ],
  },
  {
    name: "Home Pack",
    price: 499,
    popular: true,
    description: "Best for homes",
    features: [
      "3x Scentinel Pro devices",
      "Wall mount kits",
      "2-year warranty",
      "Mobile app access",
      "Cloud storage (2 years)",
      "Priority support",
    ],
  },
  {
    name: "Business Pack",
    price: 999,
    description: "For offices & businesses",
    features: [
      "6x Scentinel Pro devices",
      "Professional installation",
      "3-year warranty",
      "Mobile app access",
      "Unlimited cloud storage",
      "24/7 priority support",
      "Custom alert zones",
    ],
  },
];

export const BuySection = () => {
  const handleBuy = useCallback((_: string) => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="buy" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Protection Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All packages include free shipping and 30-day money-back guarantee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-8 h-full flex flex-col relative ${
                  pkg.popular ? "border-primary border-2 shadow-hover" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* <div className="mb-6">
                  <span className="text-5xl font-bold">${pkg.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div> */}

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => handleBuy(pkg.name)}
                >
                  Buy Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Secure payment powered by Stripe
          </p>
          <div className="flex justify-center gap-8 text-muted-foreground">
            <span>✓ Free Shipping</span>
            <span>✓ 30-Day Returns</span>
            <span>✓ Secure Checkout</span>
          </div>
        </div>
      </div>
    </section>
  );
};
