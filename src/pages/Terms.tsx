import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Scentinel Pro products and services, you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Product Usage</h2>
              <p>
                You agree to use the Scentinel Pro device in accordance with all
                applicable laws and regulations. The device is intended for
                personal or commercial safety monitoring purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Warranty</h2>
              <p>
                Scentinel Pro provides a 2-year limited warranty on all devices.
                This warranty covers defects in materials and workmanship under
                normal use. The warranty does not cover damage caused by
                accidents, misuse, or unauthorized modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Limitation of Liability
              </h2>
              <p>
                While Scentinel Pro strives to provide accurate and reliable
                detection, no system is foolproof. We are not liable for any
                damages resulting from device malfunction, false alarms, or
                failure to detect hazards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Subscription Services
              </h2>
              <p>
                Cloud storage and premium features may require a subscription.
                Subscriptions automatically renew unless cancelled before the
                renewal date. Refunds are provided according to our refund
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Intellectual Property
              </h2>
              <p>
                All content, trademarks, and data on this website and in our
                products are the property of Scentinel Pro. Unauthorized use is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. We will
                notify users of any material changes via email or through the
                app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Contact Information
              </h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <p className="font-medium">legal@scentinelpro.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
