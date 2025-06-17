import React, { useState, useEffect } from "react";
import { Container } from "./ui/Container";
// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    // <header
    //   className={cn(
    //     "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
    //     isScrolled
    //       ? "bg-white/80 backdrop-blur-md shadow-sm"
    //       : "bg-transparent"
    //   )}
    // >
      <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tight">
                OneTap<span className="text-primary-600">Sign</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-primary-600 transition-colors bg-cyan-500 px-4 py-2 hover:bg-gray-200 rounded-full"
            >
              Log in
            </a>
            <Button className="bg-primary-600 hover:bg-primary-700 transition-colors">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-in mt-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-sm font-medium px-4 py-2 text-gray-700"
                >
                  Log in
                </a>
                <div className="px-4">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;