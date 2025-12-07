import { useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Монтеблун",
    image: "/products/monteblun.jpeg",
    subtitle: "горгонзола",
    description: "Благородный сыр с голубой плесенью",
    category: "blue",
  },
  {
    name: "Гран Кремлино",
    image: "/products/parmezan.jpeg",
    subtitle: "пармезан",
    description: "Выдержанный твёрдый сыр, 12-24 месяца",
    category: "hard",
  },
  {
    name: "Буррата",
    image: "/products/burrata.jpeg",
    subtitle: "",
    description: "Нежнейший сыр с кремовой начинкой",
    category: "soft",
  },
  {
    name: "Моцарелла",
    image: "/products/mozarella.jpeg",
    subtitle: "",
    description: "Классика итальянской кухни",
    category: "soft",
  },
  {
    name: "Гран Пекорино",
    subtitle: "овечий сыр",
    description: "Пикантный овечий сыр длительной выдержки",
    category: "hard",
  },
  {
    name: "Тревизо",
    image: "/products/treviso.jpeg",
    subtitle: "таледжио",
    description: "Мягкий сыр с характерным ароматом",
    category: "soft",
  },
  {
    name: "Качотта с трюфелем",
    image: "/products/cachiotta-tartufo.jpeg",
    subtitle: "",
    description: "Изысканный сыр с чёрным трюфелем",
    category: "specialty",
  },
  {
    name: "Азоло",
    image: "/products/azolo.jpeg",
    subtitle: "азиаго",
    description: "Полутвёрдый сыр с нежным вкусом",
    category: "hard",
  },
  {
    name: "Венеция",
    image: "/products/venecia.jpeg",
    subtitle: "страккино",
    description: "Мягкий сливочный сыр",
    category: "soft",
  },
  {
    name: "Качотта",
    image: "/products/cachiotta.jpeg",
    subtitle: "",
    description: "Традиционный итальянский сыр",
    category: "hard",
  },
  {
    name: "Качотта с пажитником",
    image: "/products/cachiotta-paj.jpeg",
    subtitle: "",
    description: "С ароматными травами",
    category: "specialty",
  },
  {
    name: "Страчателла",
    subtitle: "",
    description: "Нежнейшая начинка бурраты",
    category: "soft",
  },
];

const categories = [
  { id: "all", label: "Все сыры" },
  { id: "soft", label: "Мягкие" },
  { id: "hard", label: "Твёрдые" },
  { id: "blue", label: "С плесенью" },
  { id: "specialty", label: "Особые" },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Более 20 наименований
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наш ассортимент
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Все сыры изготавливаются из натурального молока по традиционным итальянским рецептам
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "gradient-hero text-primary-foreground shadow-card"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-secondary via-muted to-secondary/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* фото товара */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                {product.subtitle && (
                  <p className="text-sm text-primary font-medium mb-2">
                    {product.subtitle}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Полный каталог с ценами в прайс-листе
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Получить прайс-лист
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
