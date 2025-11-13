import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us when you
                register your device, create an account, or contact our support
                team. This includes your name, email address, device serial
                number, and location information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect and prevent fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Data Storage and Security
              </h2>
              <p>
                Your data is stored securely using industry-standard encryption.
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Information Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information at any time. You can also opt out of marketing
                communications and request a copy of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="font-medium">privacy@scentinelpro.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
