import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Bell, Battery, Wifi, Cloud, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Detection",
    description:
      "Multi-sensor AI technology detects threats before they become dangerous",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Real-time notifications sent directly to your smartphone",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    description: "Up to 2 years of battery life with low-power sensors",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Wifi,
    title: "Smart Connectivity",
    description: "Seamless WiFi and Bluetooth integration",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud backup of all alerts and sensor data",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Control and monitor everything from your phone",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

const specs = [
  { label: "Sensors", value: "Smoke, CO, Temperature, Humidity" },
  { label: "Connectivity", value: "WiFi 802.11 b/g/n, Bluetooth 5.0" },
  { label: "Power", value: "Rechargeable Li-ion battery" },
  { label: "Dimensions", value: "120mm x 120mm x 40mm" },
  { label: "Weight", value: "250g" },
  { label: "Warranty", value: "2 years" },
];

export const ProductDetails = () => {
  return (
    <section id="product" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Simple Setup
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to keep your home safe in one smart device
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-hover transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-semibold text-muted-foreground">
                    {spec.label}
                  </span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
