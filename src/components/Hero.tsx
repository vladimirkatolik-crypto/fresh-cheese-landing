import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award, Package } from "lucide-react";
import heroImage from "@/assets/hero-cheese.jpg";

const stats = [
  { icon: Clock, label: "Срок поставки", value: "от 1 дня" },
  { icon: Award, label: "Качество", value: "Премиальное" },
  { icon: Package, label: "Ассортимент", value: "20+ видов" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Итальянские сыры"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            12 наград "Лучший сыр России"
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up animation-delay-100 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Итальянские сыры{" "}
            <span className="text-primary italic">оптом</span>
            <br />
            по российским ценам
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-muted-foreground max-w-xl mb-10">
            Производим итальянские сыры в центре Москвы по традиционным рецептам
            из натурального молока. Поставки для ресторанов и магазинов.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-4 mb-16">
            <Button
              size="lg"
              className="gradient-hero text-lg px-8 py-6 hover:opacity-90 transition-opacity group"
              asChild
            >
              <a href="#contacts">
                Получить прайс-лист
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
              asChild
            >
              <a href="#contacts">Бесплатная дегустация</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-400 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
