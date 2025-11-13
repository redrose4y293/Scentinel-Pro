import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FirmwareSection = () => {
  const { toast } = useToast();

  // Mock firmware data - in real app would come from GET /api/firmware/latest
  const latestFirmware = {
    version: "2.1.3",
    date: "2025-01-10",
    size: "12.4 MB",
    changelog: [
      "Improved AI detection accuracy by 15%",
      "Enhanced battery optimization",
      "Fixed rare WiFi connectivity issue",
      "Added support for new alert types",
      "Security patches and performance improvements",
    ],
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: `Downloading firmware v${latestFirmware.version}...`,
    });
    // In real app: would download from secure URL
  };

  return (
    <section id="firmware" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Firmware{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keep your Scentinel Pro up to date with the latest features and
            improvements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="border-t border-border pt-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                What's New
              </h4>
              <ul className="space-y-3">
                {latestFirmware.changelog.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Installation Instructions</p>
                <p className="text-muted-foreground">
                  Download the firmware file and use the mobile app to update
                  your device. Make sure your device is connected to WiFi and
                  has at least 20% battery.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Updates are also available through the mobile app
            </p>
            <p className="text-xs text-muted-foreground">
              Automatic updates can be enabled in device settings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
