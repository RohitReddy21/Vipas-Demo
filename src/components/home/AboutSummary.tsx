import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSummary: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-title">About Vipas Energy</h2>
            <p className="mb-6 text-lg">
              At Vipas Energy, we're committed to revolutionizing how businesses and communities access and utilize energy resources through innovative sustainable solutions.
            </p>
            <p className="mb-6">
              Founded on the principles of sustainability, innovation, and excellence, we combine cutting-edge technology with environmental responsibility to create a lasting positive impact on our planet and future generations.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">10+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">500+</div>
                <p className="text-gray-700">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">50+</div>
                <p className="text-gray-700">Expert Professionals</p>
              </div>
              <div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">20+</div>
                <p className="text-gray-700">Awards Won</p>
              </div>
            </div>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/9875434/pexels-photo-9875434.jpeg" 
                alt="Vipas Energy team working on solar installation" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating accent image */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img 
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg" 
                alt="Solar panels" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-primary rounded-full opacity-20 hidden md:block"></div>
            <div className="absolute top-1/2 -right-3 w-16 h-16 bg-accent rounded-full opacity-40 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;