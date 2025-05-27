import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Intersection Observer hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sectionVariants = {
    hero: "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    heroVisible: "opacity-100 translate-y-0",
    fadeUp: "opacity-0 translate-y-8 transition-all duration-600 ease-out",
    fadeUpVisible: "opacity-100 translate-y-0",
    fadeLeft: "opacity-0 -translate-x-8 transition-all duration-600 ease-out",
    fadeLeftVisible: "opacity-100 translate-x-0",
    fadeRight: "opacity-0 translate-x-8 transition-all duration-600 ease-out",
    fadeRightVisible: "opacity-100 translate-x-0"
  };

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section 
        id="hero"
        data-animate
        className={`pt-32 pb-20 relative overflow-hidden ${
          isVisible('hero') ? sectionVariants.heroVisible : sectionVariants.hero
        }`}
        style={{ backgroundColor: '#003F5C' }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l opacity-20" style={{ background: 'linear-gradient(to left, #00A176, transparent)' }}></div>
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              About <span style={{ color: '#00A176' }}>Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              At Vipas Energy, we're driven by a singular mission: to empower organizations with the tools and insights they need to take control of their energy management and make smarter, more sustainable choices.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div 
            id="intro"
            data-animate
            className={`max-w-4xl mx-auto text-center ${
              isVisible('intro') ? sectionVariants.fadeUpVisible : sectionVariants.fadeUp
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#4A4A4A' }}>
              Founded with a commitment to innovation and a deep understanding of the energy landscape, we have been a trusted partner to commercial and industrial enterprises since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20" style={{ backgroundColor: '#E6F4F1' }}>
        <div className="container mx-auto px-6">
          <div 
            id="vision"
            data-animate
            className={`max-w-6xl mx-auto ${
              isVisible('vision') ? sectionVariants.fadeUpVisible : sectionVariants.fadeUp
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#4A4A4A' }}>
              Our <span style={{ color: '#00A176' }}>Vision</span>
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300">
              <p className="text-lg md:text-xl leading-relaxed text-center" style={{ color: '#4A4A4A' }}>
                Our vision is clear: a future where businesses can optimize their energy consumption, reduce costs, and minimize their environmental footprint effortlessly. We envision a world where energy management isn't just a necessity but a strategic advantage that leads to greater efficiency and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vipas Energy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div 
            id="why-choose"
            data-animate
            className={`max-w-6xl mx-auto ${
              isVisible('why-choose') ? sectionVariants.fadeUpVisible : sectionVariants.fadeUp
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#4A4A4A' }}>
              Why Choose <span style={{ color: '#00A176' }}>Vipas Energy</span>?
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border-l-4" style={{ borderLeftColor: '#003F5C' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E6F4F1' }}>
                  <svg className="w-8 h-8" style={{ color: '#003F5C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A4A4A' }}>Experience</h3>
                <p className="leading-relaxed" style={{ color: '#4A4A4A' }}>
                  Vipas Energy has a proven track record in the energy management software industry. Our journey has been one of continuous learning and innovation, which has allowed us to stay on the cutting-edge advancements in the field.
                </p>
              </div>

              {/* Expertise Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E6F4F1' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A4A4A' }}>Expertise</h3>
                <p className="leading-relaxed" style={{ color: '#4A4A4A' }}>
                  Our team is made up of seasoned professionals with extensive knowledge of energy management, software development, and data analytics. We use this collective knowledge to provide clients with comprehensive solutions that are tailored to their specific requirements.
                </p>
              </div>

              {/* Customer-Centric Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group border-l-4" style={{ borderLeftColor: '#003F5C' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#E6F4F1' }}>
                  <svg className="w-8 h-8" style={{ color: '#003F5C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A4A4A' }}>Customer-Centric Approach</h3>
                <p className="leading-relaxed" style={{ color: '#4A4A4A' }}>
                  At Vipas Energy, our clients are at the heart of everything we do. We understand that each organization is unique, which is why we take a personalized approach to every project. Our success is dependent on your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEMS Platform */}
      <section className="py-20" style={{ backgroundColor: '#003F5C' }}>
        <div className="container mx-auto px-6">
          <div 
            id="sems-platform"
            data-animate
            className={`max-w-6xl mx-auto text-center ${
              isVisible('sems-platform') ? sectionVariants.fadeUpVisible : sectionVariants.fadeUp
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span style={{ color: '#00A176' }}>SEMS</span> Platform
            </h2>
            <p className="text-xl text-white/90 mb-16 leading-relaxed max-w-4xl mx-auto">
              Smart Energy Management Solutions (SEMS) is a cutting-edge platform powered by Vipas, a trusted name in the field of energy and utility management strategies. Vipas has been at the forefront of empowering commercial and industrial enterprises to take control of their energy consumption and utility management needs.
            </p>

            {/* Platform Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {/* Real-Time Monitoring */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Monitoring</h3>
                <p className="text-white/80 leading-relaxed">
                  Vipas SEMS offers real-time monitoring capabilities that provide clients with immediate insights into their energy consumption. This enables quick response to anomalies and the implementation of energy-saving measures.
                </p>
              </div>

              {/* Analytics and Reporting */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics and Reporting</h3>
                <p className="text-white/80 leading-relaxed">
                  Our platform is equipped with advanced analytics and reporting tools that allow clients to gain deep insights into their energy usage patterns. These insights empower data-driven decision-making for energy optimization strategies.
                </p>
              </div>

              {/* Workflow Automation */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
                <p className="text-white/80 leading-relaxed">
                  Vipas SEMS automates energy management workflows, simplifying processes like vendor payments and budget tracking. This automation saves time and reduces the risk of errors.
                </p>
              </div>

              {/* Customization */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Customization</h3>
                <p className="text-white/80 leading-relaxed">
                  We understand that every business is unique, which is why Vipas SEMS is highly customizable. Clients can tailor the platform to meet their specific energy management needs and objectives.
                </p>
              </div>

              {/* User-Friendly Interface */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">User-Friendly Interface</h3>
                <p className="text-white/80 leading-relaxed">
                  Our platform is designed with user-friendliness in mind. Clients can easily navigate the intuitive interface to access the information and tools they need to effectively manage their energy resources.
                </p>
              </div>

              {/* Partnership Approach */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderLeftColor: '#00A176' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: 'rgba(0, 161, 118, 0.2)' }}>
                  <svg className="w-8 h-8" style={{ color: '#00A176' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Partnership Approach</h3>
                <p className="text-white/80 leading-relaxed">
                  Vipas SEMS is not just a software solution; it's a partner in your journey toward energy efficiency, cost savings, and environmental responsibility. With a strong commitment to innovation and a track record of empowering clients to achieve their energy management goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div 
            id="cta"
            data-animate
            className={`max-w-4xl mx-auto text-center ${
              isVisible('cta') ? sectionVariants.fadeUpVisible : sectionVariants.fadeUp
            }`}
          >
            <div className="rounded-3xl p-12 transform hover:scale-105 transition-all duration-300 shadow-2xl" style={{ background: 'linear-gradient(135deg, #003F5C 0%, #00A176 100%)' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Energy Management?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Vipas continues to be a trusted resource for commercial and industrial enterprises looking to make smarter energy choices. Join us on this path toward a more sustainable and cost-efficient future with Vipas SEMS.
              </p>
              <button className="bg-white px-8 py-4 rounded-full font-bold text-lg transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl" style={{ color: '#003F5C' }}>
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;