import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

// Mock blog data - in real app would come from GET /api/blog
const blogPosts = [
  {
    id: "1",
    slug: "top-5-home-safety-tips",
    title: "Top 5 Home Safety Tips for 2025",
    excerpt:
      "Discover the latest strategies to keep your home and family safe with smart technology and best practices.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
  {
    id: "2",
    slug: "understanding-smart-detectors",
    title: "Understanding Smart Detectors: How AI Saves Lives",
    excerpt:
      "Learn how artificial intelligence is revolutionizing home safety detection systems.",
    author: "Mike Chen",
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
  },
  {
    id: "3",
    slug: "installation-guide",
    title: "Complete Installation Guide for Scentinel Pro",
    excerpt:
      "Step-by-step instructions to get your device up and running in under 10 minutes.",
    author: "Emily Rodriguez",
    date: "2025-01-05",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
  },
];

export const BlogSection = () => {
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
            Latest{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              News
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and updates from the Scentinel Pro team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink to={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-hover transition-all h-full group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Card>
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <NavLink to="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
