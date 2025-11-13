import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { MessageCircle, Book, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does the battery last?",
    answer:
      "The Scentinel Pro features a high-capacity rechargeable battery that lasts up to 2 years under normal usage. You'll receive notifications when battery levels are low.",
  },
  {
    question: "Is professional installation required?",
    answer:
      "No, the device comes with an easy wall-mount kit and can be installed in minutes. However, professional installation is included with the Business Pack.",
  },
  {
    question: "What types of threats does it detect?",
    answer:
      "Scentinel Pro detects smoke, carbon monoxide, unusual temperature changes, and humidity levels. It uses AI to differentiate between real threats and false alarms.",
  },
  {
    question: "Can I control multiple devices?",
    answer:
      "Yes! The mobile app allows you to manage unlimited Scentinel Pro devices from a single account, perfect for homes or businesses with multiple units.",
  },
  {
    question: "What's included in cloud storage?",
    answer:
      "Cloud storage includes all alert history, sensor readings, and event logs. The data is encrypted and accessible through the mobile app at any time.",
  },
  {
    question: "Is there a monthly subscription fee?",
    answer:
      "No monthly fees! Cloud storage is included for 1-2 years depending on your package. After that, it's optional at $4.99/month for extended features.",
  },
  {
    question: "What's the return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied, return the device for a full refund, no questions asked.",
  },
  {
    question: "How do I update the firmware?",
    answer:
      "Firmware updates are automatic when connected to WiFi. You can also manually check for updates in the firmware section or through the mobile app.",
  },
];

export const SupportFaq = () => {
  return (
    <section id="support" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Scentinel Pro
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-hover transition-all">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Get instant help from our support team
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-hover transition-all">
              <Book className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Detailed guides and tutorials
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-hover transition-all">
              <HelpCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support Ticket</h3>
              <p className="text-sm text-muted-foreground">
                Submit a ticket for complex issues
              </p>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};
