
import React from 'react';
import Hero from '../components/Hero';
import CaseStudies from '../components/CaseStudies';
import PersonalProjects from '../components/PersonalProjects';
import Events from '../components/Events';
import Testimonials from '../components/Testimonials';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <CaseStudies />
      <PersonalProjects />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
