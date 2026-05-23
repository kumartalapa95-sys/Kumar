import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import Hero from '../common/Hero';
import Services from '../common/Services';
import WhyChooseUs from '../common/WhyChooseUs';
import Reviews from '../common/Reviews';
import Brands from '../common/Brands';
import CTASection from '../common/CTASection';
import ContactSection from '../common/ContactSection';

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Brands />
      <CTASection />
      <ContactSection />

      <Footer />
    </>
  );
}

export default Home;