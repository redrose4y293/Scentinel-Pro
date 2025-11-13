import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock data - in real app would fetch from API
  const post = {
    title: "Top 5 Home Safety Tips for 2025",
    author: "Sarah Johnson",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    category: "Tips & Guides",
    content: `
      <p>Home safety has never been more important, and with the advancement of smart technology, keeping your family safe has become easier and more effective. Here are our top 5 tips for 2025.</p>
      
      <h2>1. Install Smart Detection Systems</h2>
      <p>Modern smart detectors like the Scentinel Pro use AI-powered technology to identify threats before they become dangerous. Unlike traditional smoke detectors, these systems can differentiate between cooking smoke and actual fire threats, reducing false alarms while improving response times.</p>
      
      <h2>2. Create a Family Emergency Plan</h2>
      <p>Every family member should know what to do in case of an emergency. Designate meeting points, assign responsibilities, and practice your plan regularly. Smart home systems can help by automatically sending alerts to all family members' phones.</p>
      
      <h2>3. Regular Maintenance is Key</h2>
      <p>Even the most advanced safety systems require regular maintenance. Check your detectors monthly, replace batteries as needed, and keep firmware up to date. Set calendar reminders to ensure you never miss important maintenance tasks.</p>
      
      <h2>4. Integrate Your Safety Systems</h2>
      <p>Modern smart home ecosystems allow different devices to work together. When your detector identifies a threat, it can automatically turn on lights, unlock doors, and send notifications to emergency services. Integration creates a comprehensive safety net.</p>
      
      <h2>5. Stay Informed About New Threats</h2>
      <p>Safety threats evolve, and so should your preparedness. Subscribe to safety newsletters, follow updates from your device manufacturer, and stay informed about new risks in your area. Knowledge is one of the best defenses.</p>
      
      <h2>Conclusion</h2>
      <p>By following these tips and investing in quality safety equipment, you can significantly reduce risks to your home and family. Remember, the best time to prepare for an emergency is before it happens.</p>
    `,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <article>
          {/* Hero Image */}
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <NavLink to="/blog">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </NavLink>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
