import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Programs from './components/Programs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Solutions />
      <Programs />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  );
}
