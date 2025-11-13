import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-device.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm"
            >
              🚀 Next-Gen Safety Technology
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Protect What Matters{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Most
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Scentinel Pro uses advanced AI-powered detection to keep your home
              and family safe. Smart alerts, real-time monitoring, and seamless
              integration.
            </p>

            {/* Features highlights */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold">24/7 Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold">Instant Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-success" />
                </div>
                <span className="font-semibold">Smart Connected</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 shadow-hover hover:shadow-lg transition-all"
                onClick={() => scrollToSection("buy")}
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => scrollToSection("product")}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Scentinel Pro Smart Detector"
                className="w-full h-auto"
              />
              {/* Floating badge */}
              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-8 left-8 bg-background/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg"
              >
                <div className="text-sm text-muted-foreground">Starting at</div>
                <div className="text-3xl font-bold text-primary">$199</div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
