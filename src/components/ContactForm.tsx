import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const businessTypes = [
  { value: "horeca", label: "HoReCa (рестораны, кафе)" },
  { value: "retail", label: "Магазины" },
  { value: "wholesale", label: "Оптовые поставки" },
  { value: "market", label: "Ярмарки / Рынки" },
  { value: "production", label: "Производство" },
  { value: "other", label: "Другое" },
];

const contacts = [
  {
    department: "Отдел HoReCa",
    phone: "+7 903 201-72-76",
    email: "zakaz@itradition.ru",
  },
  {
    department: "Отдел Ритейл",
    phone: "+7 966 103-60-33",
    email: "zakaz@itradition.ru",
  },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacts" className="py-24 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Form */}
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-elevated">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Получите прайс-лист
            </h2>
            <p className="text-muted-foreground mb-8">
              + бесплатные образцы для дегустации
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@company.ru"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="business">Сфера деятельности</Label>
                <Select name="business" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Выберите сферу" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg gradient-hero hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Отправка...</span>
                ) : (
                  <>
                    Отправить заявку
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-md">
              Готовы ответить на ваши вопросы и организовать бесплатную дегустацию
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contacts.map((contact) => (
                <div
                  key={contact.department}
                  className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                >
                  <h3 className="font-semibold text-lg mb-3">
                    {contact.department}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {contact.phone}
                    </a>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      {contact.email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Address */}
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p>г. Москва, сыроварня «Итальянские традиции»</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
