import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSummary from '../components/home/AboutSummary';
import ServicesSummary from '../components/home/ServicesSummary';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import TestimonialSection from '../components/home/TestimonialSection';
import CtaSection from '../components/home/CtaSection';
import SEO from '../components/ui/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Vipas Energy provides sustainable energy solutions, digital marketing, SAP integration, and smart infrastructure services for businesses and communities."
      />
      <HeroSection />
      <AboutSummary />
      <ServicesSummary />
      <ProjectsShowcase />
      <TestimonialSection />
      <CtaSection />
    </>
  );
};

export default HomePage;