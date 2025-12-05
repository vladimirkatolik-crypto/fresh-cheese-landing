import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Advantages } from "@/components/Advantages";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Products />
        <About />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
