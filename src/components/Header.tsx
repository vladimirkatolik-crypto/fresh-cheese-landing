import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#advantages", label: "Преимущества" },
  { href: "#products", label: "Ассортимент" },
  { href: "#about", label: "О нас" },
  { href: "#clients", label: "Клиенты" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-display text-xl font-bold transition-transform group-hover:scale-105">
            it
          </div>
          <div className="hidden sm:block">
            <p className={cn(
              "font-display text-lg font-semibold transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              Итальянские традиции
            </p>
            <p className={cn(
              "text-xs transition-colors",
              isScrolled ? "text-muted-foreground" : "text-muted-foreground"
            )}>
              Сыроварня в центре Москвы
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+79032017276" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +7 903 201-72-76
          </a>
          <Button asChild className="gradient-hero hover:opacity-90 transition-opacity">
            <a href="#contacts">Получить прайс</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-card transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+79032017276" className="flex items-center gap-2 text-muted-foreground py-2">
            <Phone className="w-4 h-4" />
            +7 903 201-72-76
          </a>
          <Button asChild className="gradient-hero mt-2">
            <a href="#contacts">Получить прайс</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
