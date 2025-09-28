import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-smooth">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              BusinessPro
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-smooth"
            >
              Contact
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="transition-smooth"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="gradient-primary">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-smooth"
              >
                Contact
              </button>
              <div className="flex space-x-2 px-4 pt-2 sm:hidden">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1 gradient-primary">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};