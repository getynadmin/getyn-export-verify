import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
