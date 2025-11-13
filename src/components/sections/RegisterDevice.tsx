import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";

export const RegisterDevice = () => {
  const formspreeAction = "https://formspree.io/f/your-id";

  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Register Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Device
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Activate your warranty and unlock premium features
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            {/* Benefits Banner */}
            <div className="bg-primary/10 rounded-lg p-4 mb-8 flex items-start gap-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Why Register?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Activate your 2-year warranty</li>
                  <li>• Get priority customer support</li>
                  <li>• Receive firmware update notifications</li>
                  <li>• Unlock advanced app features</li>
                </ul>
              </div>
            </div>

            <form action={formspreeAction} method="POST" className="space-y-6">
              <div>
                <Label htmlFor="serialNumber">Device Serial Number *</Label>
                <Input
                  id="serialNumber"
                  name="serialNumber"
                  required
                  placeholder="e.g., SCP-2025-XXXX"
                  className="font-mono"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Found on the back of your device or in the box
                </p>
              </div>

              <div>
                <Label htmlFor="purchaseDate">Purchase Date *</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  name="purchaseDate"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    required
                    placeholder="Your city"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
              >
                Register Device
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
