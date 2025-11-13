import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scentinel Pro
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("product")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("buy")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Buy
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Support
            </button>
            <button
              onClick={() => scrollToSection("firmware")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Firmware
            </button>
            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </NavLink>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("product")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("buy")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Buy
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Support
            </button>
            <button
              onClick={() => scrollToSection("firmware")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Firmware
            </button>
            <NavLink
              to="/blog"
              className="py-2 text-foreground hover:text-primary transition-colors"
            >
              Blog
            </NavLink>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
