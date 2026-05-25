import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import USP from './components/USP';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      <Background />
      <Header />
      
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <USP />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-50 selection:bg-blue-500/30 selection:text-white font-sans">
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
