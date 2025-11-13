import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Mock blog data
const blogPosts = [
  {
    id: "1",
    slug: "top-5-home-safety-tips",
    title: "Top 5 Home Safety Tips for 2025",
    excerpt: "Discover the latest strategies to keep your home and family safe with smart technology and best practices.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    category: "Tips & Guides"
  },
  {
    id: "2",
    slug: "understanding-smart-detectors",
    title: "Understanding Smart Detectors: How AI Saves Lives",
    excerpt: "Learn how artificial intelligence is revolutionizing home safety detection systems.",
    author: "Mike Chen",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    category: "Technology"
  },
  {
    id: "3",
    slug: "installation-guide",
    title: "Complete Installation Guide for Scentinel Pro",
    excerpt: "Step-by-step instructions to get your device up and running in under 10 minutes.",
    author: "Emily Rodriguez",
    date: "2025-01-05",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop",
    category: "How-To"
  },
  {
    id: "4",
    slug: "fire-safety-statistics",
    title: "2025 Fire Safety Statistics You Need to Know",
    excerpt: "Recent data shows how smart detection is reducing home fire incidents by up to 40%.",
    author: "David Park",
    date: "2025-01-01",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=400&fit=crop",
    category: "Research"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights, safety tips, and the latest updates from Scentinel Pro
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink to={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden hover:shadow-hover transition-all h-full group cursor-pointer">
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;