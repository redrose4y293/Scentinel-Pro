import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "AI-Powered Detection",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "Mobile App Control",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "Cloud Storage",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "Real-time Alerts",
    scentinel: true,
    traditional: true,
  },
  {
    feature: "Battery Life (2 years)",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "Firmware Updates",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "Multi-sensor Detection",
    scentinel: true,
    traditional: false,
  },
  {
    feature: "False Alarm Reduction",
    scentinel: true,
    traditional: false,
  },
];

export const ComparisonTable = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scentinel Pro?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to traditional detectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-3 bg-muted p-4 font-semibold text-center">
              <div className="text-left">Feature</div>
              <div className="text-primary">Scentinel Pro</div>
              <div className="text-muted-foreground">Traditional</div>
            </div>

            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 items-center ${
                  index % 2 === 0 ? "bg-background" : "bg-muted/30"
                }`}
              >
                <div className="font-medium">{row.feature}</div>
                <div className="flex justify-center">
                  {row.scentinel ? (
                    <Check className="h-6 w-6 text-success" />
                  ) : (
                    <X className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.traditional ? (
                    <Check className="h-6 w-6 text-success" />
                  ) : (
                    <X className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
