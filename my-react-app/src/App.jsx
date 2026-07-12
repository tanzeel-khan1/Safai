import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/layout/LoadingScreen';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import Navbar from './components/layout/Navbar';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import LuxuryMarquee from './components/sections/LuxuryMarquee';
import FeaturedCollection from './components/sections/FeaturedCollection';
import About from './components/sections/About';
import WhyChoose from './components/sections/WhyChoose';
import FragranceNotes from './components/sections/FragranceNotes';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ScrollProgressBar />
            <Navbar />
            <main>
              <Hero />
              <LuxuryMarquee />
              <FeaturedCollection />
              <About />
              <WhyChoose />
              <FragranceNotes />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
