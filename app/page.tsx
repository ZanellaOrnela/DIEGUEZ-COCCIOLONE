import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Areas from '@/components/Areas';
import Advantage from '@/components/Advantage';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatWhatsApp from '@/components/FloatWhatsApp';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Advantage />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatWhatsApp />
    </>
  );
}


