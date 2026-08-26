import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary rounded-full opacity-10 -translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-10 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
                Ready to Transform Your Energy Future?
              </h2>
              <p className="text-white/90 text-lg mb-0">
                Contact us today for a free consultation and discover how our sustainable solutions can benefit your business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <Link 
                to="/contact" 
                className="py-3 px-8 bg-white text-primary hover:bg-gray-100 font-montserrat font-medium rounded-md text-center transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="py-3 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10 font-montserrat font-medium rounded-md text-center transition-colors duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;