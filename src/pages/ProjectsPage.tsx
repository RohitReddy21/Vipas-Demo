import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Handshake, Home, Store } from 'lucide-react';
import SEO from '../components/ui/SEO';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  location: string;
  year: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Manufacturing Energy Optimization",
    category: "manufacturing",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
    description: "Smart Energy Management Solutions (SEMS) implementation for manufacturing facility, reducing energy costs by 35% through real-time monitoring and analytics.",
    client: "Industrial Manufacturing Corp",
    location: "Michigan, USA",
    year: "2023",
    link: "/projects/manufacturing-energy"
  },
  {
    id: 2,
    title: "Senior Living Energy Efficiency",
    category: "senior-living",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    description: "Comprehensive energy management solution for senior living community, optimizing HVAC and lighting systems for enhanced resident comfort and cost savings.",
    client: "Golden Years Communities",
    location: "Florida, USA",
    year: "2023",
    link: "/projects/senior-living-energy"
  },
  {
    id: 3,
    title: "Multi-Family Housing SEMS",
    category: "multi-family",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
    description: "End-to-end energy management system for multi-family housing complex, providing real-time data and benchmarking to reduce operational costs.",
    client: "Urban Living Properties",
    location: "California, USA",
    year: "2022",
    link: "/projects/multi-family-sems"
  },
  {
    id: 4,
    title: "Healthcare Energy Analytics",
    category: "healthcare",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    description: "Advanced energy analytics and carbon reporting solution for healthcare facility, ensuring compliance while reducing energy expenses by 28%.",
    client: "Regional Medical Center",
    location: "Texas, USA",
    year: "2023",
    link: "/projects/healthcare-analytics"
  },
  {
    id: 5,
    title: "Retail Chain Energy Management",
    category: "retail",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    description: "Multi-channel energy management strategy for retail chain, leveraging SEMS to optimize energy usage across 50+ locations.",
    client: "National Retail Group",
    location: "Nationwide, USA",
    year: "2022",
    link: "/projects/retail-energy"
  },
  {
    id: 6,
    title: "Student Housing Sustainability",
    category: "student-housing",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    description: "Tailored energy efficiency solution for student housing complex, incorporating smart technology and sustainability initiatives.",
    client: "University Housing Partners",
    location: "Arizona, USA",
    year: "2023",
    link: "/projects/student-housing"
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'senior-living', name: 'Senior Living', icon: Building2 },
    { id: 'multi-family', name: 'Multi-Family Housing', icon: Building2 },
    { id: 'healthcare', name: 'Healthcare', icon: Handshake },
    { id: 'retail', name: 'Retail', icon: Store },
    { id: 'student-housing', name: 'Student Housing', icon: Home }
  ];

  return (
    <>
      <SEO 
        title="Our Verticals" 
        description="Discover Vipas Energy's Smart Energy Management Solutions (SEMS) across multiple industry verticals, helping organizations achieve competitive advantages through energy efficiency."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: '#003F5C' }}>
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27edd2c9417010d43114b06408c6c2b4d60ca4f&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#003F5C]/80 to-[#003F5C]/60"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: '#00A176' }}
              >
                <span className="text-white font-montserrat text-sm font-medium uppercase tracking-wider">
                  Energy Solutions
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
                Verticals
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-montserrat font-semibold mb-8 leading-tight" style={{ color: '#E6F4F1' }}>
                Increasing Energy Efficiency and Sustainability Across Verticals
              </h2>
              
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p className="text-lg">
                  Elevated energy expenses are exerting significant pressure on industries operating in fiercely competitive markets with intricate global supply networks. While the advent of Big Data has been the landscape of energy management seeking to craft high-level strategies, the availability of intelligence-based tools that harness real-time data to ensure precision remains limited.
                </p>
                <p className="text-lg">
                  This is precisely why Vipas has pioneered the creation of <strong className="text-[#00A176]">Smart Energy Management Solutions (SEMS)</strong>. SEMS is engineered to offer tailored industry solutions, empowering organizations to secure a competitive edge by elevating the significance of energy management beyond conventional necessity.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button 
                  className="px-8 py-3 rounded-full font-montserrat font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  style={{ backgroundColor: '#00A176', color: 'white' }}
                >
                  Explore Solutions
                </button>
                <button 
                  className="px-8 py-3 rounded-full font-montserrat font-medium border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Large featured image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="col-span-2 relative group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg" 
                      alt="Smart Energy Management" 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F5C]/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-montserrat font-semibold">Smart Energy Solutions</p>
                      <p className="text-sm opacity-90">Advanced Analytics & Monitoring</p>
                    </div>
                  </div>
                </motion.div>

                {/* Two smaller images */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" 
                      alt="Manufacturing Solutions" 
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00A176]/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="font-montserrat font-medium text-sm">Manufacturing</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg" 
                      alt="Healthcare Solutions" 
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00A176]/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="font-montserrat font-medium text-sm">Healthcare</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements for visual interest */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20"
                style={{ backgroundColor: '#00A176' }}
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
                style={{ backgroundColor: '#E6F4F1' }}
              ></motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Description */}
      <section className="py-16" style={{ backgroundColor: '#E6F4F1' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4A4A4A' }}>
              Our comprehensive suite of services includes end-to-end bill management, benchmarking, rate and tariff audits, carbon reporting, energy analytics, and beyond. With our wealth of expertise, we have a proven track record of assisting organizations across industries, including manufacturing and retail, as they adapt and evolve to navigate the challenges tied to ever-changing market dynamics and consumer trends.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
              Vipas has carefully crafted its SEMS solution to specifically cater to these requirements, leveraging a demonstrated history of employing multi-channel strategies and advanced analytics to improve efficiencies and drive cost savings.
            </p>
          </motion.div>
        </div>
        
      </section>
      {/* Vertical selector */}
      <section className="border-b border-[#DCEDEA] bg-white py-8 sm:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {categories.map(({ id, name, icon: Icon }) => {
              const isSelected = selectedCategory === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedCategory(isSelected ? 'all' : id)}
                  aria-pressed={isSelected}
                  aria-label={`${name}: ${projects.filter(project => project.category === id).length} projects`}
                  className="group flex min-w-0 flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A176] focus-visible:ring-offset-4"
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-16 sm:w-16 ${
                    isSelected
                      ? 'border-[#00A176] bg-[#00A176] text-white shadow-md'
                      : 'border-[#20AEDE] bg-white text-[#20AEDE] group-hover:bg-[#E6F4F1] group-hover:shadow-md'
                  }`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={`mt-3 max-w-[150px] font-montserrat text-xs font-medium leading-tight transition-colors sm:text-sm ${
                    isSelected ? 'text-[#00A176]' : 'text-[#4A4A4A] group-hover:text-[#003F5C]'
                  }`}>
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

  
    </>
  );
};

export default ProjectsPage;