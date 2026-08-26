import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  BarChart3, 
  Settings, 
  Users, 
  Zap, 
  TrendingUp, 
  Activity, 
  Bell, 
  Monitor, 
  Shield, 
  HeadphonesIcon, 
  FileText,
  Search,
  Archive
} from 'lucide-react';
import SEO from '../components/ui/SEO';

const ServicesPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const services = [
    {
      id: 'expense-data-management',
      name: 'Expense & Data Management',
      description: 'Streamline your financial processes and harness the power of data for informed decision-making.',
      fullDescription: 'In order to adapt to changes and data-driven business world, managing expenses and harnessing the power of data are critical for financial success and making informed decisions. We understand the challenges that organizations face in these areas at Vipas Expense and Data Management, and we provide innovative solutions that streamline processes, improve efficiency, and provide you with actionable insights.',
      features: [
        { 
          icon: <DollarSign />, 
          name: 'Expense Management', 
          description: 'All-encompassing software platform that streamlines expense tracking and reimbursement process. Our platform streamlines the workflow, reduces administrative burdens, and ensures accuracy when managing vendor invoices or other financial transactions.' 
        },
        { 
          icon: <BarChart3 />, 
          name: 'Data Analytics', 
          description: 'Extract meaningful information from your financial data. Whether you need to understand spending patterns, forecast expenses, or identify cost-saving opportunities, our analytics solutions have you covered.' 
        },
        { 
          icon: <Settings />, 
          name: 'Customization', 
          description: 'We understand that every business is unique. Our solutions are highly customizable to align with your specific requirements and objectives.' 
        },
        { 
          icon: <Users />, 
          name: 'Expertise', 
          description: 'With years of experience in financial technology and data management, our team of experts brings a wealth of knowledge to the table.' 
        }
      ]
    },
    {
      id: 'energy-analytics',
      name: 'Energy Analytics',
      description: 'Powerful data-driven insights to optimize your energy consumption and reduce costs.',
      fullDescription: 'At Vipas Energy, we understand that data-driven decision-making is the key to effective energy management. That is why we are pleased to present Vipas Energy Analytics, a powerful tool designed to provide deep insights into your energy consumption patterns, allowing you to optimize efficiency, reduce costs, and improve green credentials.',
      features: [
        { 
          icon: <Activity />, 
          name: 'Real-Time Monitoring', 
          description: 'Monitor your energy consumption in real-time. Track electricity, gas, water, and more, all from one centralized dashboard. Stay informed and make instant adjustments when necessary.' 
        },
        { 
          icon: <TrendingUp />, 
          name: 'Predictive Analytics', 
          description: 'Our platform employs predictive analytics to forecast future energy usage patterns. Anticipate peak demand periods and proactively implement energy-saving strategies.' 
        },
        { 
          icon: <BarChart3 />, 
          name: 'Historical Data Analysis', 
          description: 'Dive deep into historical energy data to identify trends, anomalies, and areas for improvement. Essential for recognizing long-term consumption patterns and establishing baseline benchmarks.' 
        },
        { 
          icon: <DollarSign />, 
          name: 'Cost Reduction', 
          description: 'By gaining a better understanding of your energy consumption, you can identify opportunities for cost reduction. Optimize equipment operation schedules, reduce wastage, and minimize unnecessary expenses.' 
        },
        { 
          icon: <FileText />, 
          name: 'Customized Reporting', 
          description: 'Generate customized reports and dashboards to visualize your energy data in a way that makes sense for your organization. Share insights with stakeholders and team members effortlessly.' 
        }
      ]
    },
    {
      id: 'alerts-monitoring',
      name: 'Alerts & Monitoring',
      description: 'Real-time monitoring and instant alerts to keep you in control of your energy resources.',
      fullDescription: 'Staying informed and in control is critical in the fast-paced world of energy management. Vipas Alerts & Monitoring is a key feature of our smart energy management system designed to help businesses manage their energy resources more effectively, reduce costs, and maximize efficiency. At Vipas Energy, we understand that energy management is not a set-it-and-forget-it task. It requires continuous vigilance and quick responses to changing conditions.',
      features: [
        { 
          icon: <Bell />, 
          name: 'Instant Alerts', 
          description: 'When predefined thresholds are exceeded or anomalies are detected, receive immediate notifications via email, SMS, or within the software itself. You\'ll be the first to know if there\'s an unexpected increase in energy consumption or a malfunctioning piece of equipment.' 
        },
        { 
          icon: <Monitor />, 
          name: 'Comprehensive Monitoring', 
          description: 'Goes beyond energy consumption. It also monitors environmental conditions, the health of equipment, and other critical factors that affect energy efficiency.' 
        },
        { 
          icon: <DollarSign />, 
          name: 'Cost Savings', 
          description: 'Timely alerts and continuous monitoring allow you to address energy inefficiencies promptly, resulting in substantial cost savings over time.' 
        },
        { 
          icon: <BarChart3 />, 
          name: 'Data-Driven Decision-Making', 
          description: 'Access to real-time data and historical insights empowers data-driven decision-making, ensuring that you\'re always in control of your energy management strategy.' 
        }
      ]
    },
    {
      id: 'client-services',
      name: 'Client Services',
      description: 'Dedicated support and services that go beyond software provision.',
      fullDescription: 'Vipas Energy acknowledges that our clients are at the heart of our mission. We are dedicated to providing exceptional client services that go beyond the provision of software. Our goal is to enable you to effectively optimize your energy management efforts, reduce costs, and make environmentally responsible decisions.',
      features: [
        { 
          icon: <HeadphonesIcon />, 
          name: 'Dedicated Support Teams', 
          description: 'We dedicate support teams to each client. Our teams are made up of knowledgeable and experienced professionals who are enthusiastic about assisting you in reaching your energy management objectives.' 
        },
        { 
          icon: <Shield />, 
          name: 'Continuous Monitoring and Support', 
          description: 'Energy management is an ongoing effort. We provide continuous monitoring of your energy performance and proactively identify potential issues, anomalies, or opportunities for improvement.' 
        },
        { 
          icon: <TrendingUp />, 
          name: 'Scalability and Growth Support', 
          description: 'As your organization grows, your energy management needs may evolve. Our Client Services support your scalability requirements, ensuring that our solutions adapt to your changing circumstances and objectives.' 
        }
      ]
    },
    {
      id: 'document-library',
      name: 'Document Library',
      description: 'Centralized document management for all your energy-related information.',
      fullDescription: 'Staying informed and organized is critical in the ever-changing landscape of energy management. Vipas Smart Energy Management Software recognizes the value of having quick access to critical information, compliance documents, energy reports, and relevant resources. The Vipas Document Library is a powerful feature designed to help energy professionals, businesses, and organizations achieve energy efficiency and sustainability.',
      features: [
        { 
          icon: <Archive />, 
          name: 'Centralized Document Management', 
          description: 'Bid farewell to scattered documents and disparate storage systems. Centralize all your energy-related documents, including utility bills, compliance certificates, energy audit reports, and energy contracts in one secure location.' 
        },
        { 
          icon: <FileText />, 
          name: 'Effortless Organization', 
          description: 'Our user-friendly interface makes it easy to organize documents by module, categories, and tags, ensuring that you can quickly locate the information you need when you need it.' 
        },
        { 
          icon: <Search />, 
          name: 'Search and Retrieval', 
          description: 'Our robust search functionality allows you to swiftly retrieve documents using keywords, dates, or specific criteria.' 
        },
        { 
          icon: <Settings />, 
          name: 'Version Control', 
          description: 'Keep track of document revisions and updates effortlessly. Our Document Library maintains version history, ensuring that you always have access to the most recent information.' 
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Services" 
        description="Explore Vipas Energy's comprehensive services including expense & data management, energy analytics, alerts & monitoring, client services, and document library solutions."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20" style={{ backgroundColor: '#003F5C' }} ref={headerRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive solutions for expense management, energy analytics, and data-driven decision making to optimize your business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      {services.map((service, index) => {
        const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
        const isEven = index % 2 === 0;

        return (
          <section 
            id={service.id}
            key={service.id}
            ref={ref}
            className="py-20"
            style={{ backgroundColor: isEven ? '#ffffff' : '#E6F4F1' }}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className={!isEven ? 'lg:order-2' : ''}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#003F5C' }}>
                    {service.name}
                  </h2>
                  <p className="text-lg mb-6" style={{ color: '#4A4A4A' }}>
                    {service.description}
                  </p>
                  <p className="text-base mb-8" style={{ color: '#4A4A4A' }}>
                    {service.fullDescription}
                  </p>
                  
                  <div className="space-y-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: '#00A176' }}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#003F5C' }}>
                            {feature.name}
                          </h3>
                          <p style={{ color: '#4A4A4A' }}>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative ${!isEven ? 'lg:order-1' : ''}`}
                >
                  {/* Service-specific images */}
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={
                        service.id === 'expense-data-management' 
                          ? 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
                          : service.id === 'energy-analytics'
                            ? 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg'
                            : service.id === 'alerts-monitoring'
                              ? 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg'
                              : service.id === 'client-services'
                                ? 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg'
                                : 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
                      }
                      alt={`${service.name} illustration`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Floating decorative elements */}
                  <div 
                    className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg opacity-20 hidden md:block"
                    style={{ backgroundColor: '#00A176' }}
                  ></div>
                  <div 
                    className="absolute -top-6 -left-6 w-12 h-12 rounded-full opacity-30 hidden md:block"
                    style={{ backgroundColor: '#003F5C' }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #003F5C 0%, #00A176 100%)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Contact us today for a consultation and discover how our comprehensive solutions can transform your energy management and data analytics capabilities.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              style={{ color: '#003F5C' }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;