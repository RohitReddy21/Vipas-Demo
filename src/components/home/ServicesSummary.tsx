import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, BarChart3, Users, DollarSign, TrendingUp, Eye, Monitor } from 'lucide-react';

const ServicesSummary: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      id: 'accuracy',
      title: '99.95% of the data is accurate',
      description: 'Precise monitoring and data collection ensures reliable energy asset management.',
      icon: <Target className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#003F5C]" />,
      link: '/services#accuracy'
    },
    {
      id: 'data-gathering',
      title: 'Efficient and rapid data gathering',
      description: 'Streamlined processes for quick and comprehensive energy data collection.',
      icon: <BarChart3 className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#00A176]" />,
      link: '/services#data-gathering'
    },
    {
      id: 'onboarding',
      title: 'Simple onboarding and implementation',
      description: 'Easy setup and integration process for seamless system deployment.',
      icon: <Users className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#4A4A4A]" />,
      link: '/services#onboarding'
    },
    {
      id: 'invoice-management',
      title: 'Tailored solution for invoice management',
      description: 'Custom billing and invoice solutions designed for your energy operations.',
      icon: <DollarSign className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#003F5C]" />,
      link: '/services#invoice-management'
    },
    {
      id: 'expense-monitoring',
      title: 'Reliable expense monitoring',
      description: 'Continuous tracking and analysis of energy costs and expenditures.',
      icon: <TrendingUp className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#00A176]" />,
      link: '/services#expense-monitoring'
    },
    {
      id: 'transparency',
      title: 'Enhanced transparency and cooperation among various locations',
      description: 'Improved visibility and collaboration across multiple energy facilities.',
      icon: <Eye className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#4A4A4A]" />,
      link: '/services#transparency'
    },
    {
      id: 'dashboard',
      title: 'Intuitive and adaptable dashboard interfaces',
      description: 'User-friendly dashboards that adapt to your specific monitoring needs.',
      icon: <Monitor className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-[#003F5C]" />,
      link: '/services#dashboard'
    },
  ];

  return (
    <section className="py-20 bg-mint">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <h2 className="section-title mx-auto max-w-xl after:left-1/2 after:-translate-x-1/2">SEMS presents a more intelligent approach to overseeing your energy assets by:</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Advanced Smart Energy Management System designed to optimize your energy operations with precision and intelligence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col h-full cursor-pointer overflow-hidden relative"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with enhanced hover effect */}
              <div className="mb-4 p-4 rounded-xl bg-white/80 group-hover:bg-white/90 inline-block transition-all duration-300 relative z-10 group-hover:scale-110 shadow-sm group-hover:shadow-md">
                {service.icon}
              </div>
              
              {/* Title with subtle hover effect */}
              <h3 className="text-xl font-montserrat font-semibold mb-3 group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-700 mb-4 flex-grow transition-colors duration-300 relative z-10">
                {service.description}
              </p>
              
              {/* Link with enhanced hover effects */}
              <Link 
                to={service.link} 
                className="text-primary group-hover:text-primary font-montserrat font-medium transition-all duration-300 flex items-center gap-1 relative z-10 group-hover:gap-2"
              >
                Learn more
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              {/* Subtle shine effect on hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/sems" className="btn-primary">
            Learn More About SEMS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;