import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Verticals' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'senior-living', name: 'Senior Living' },
    { id: 'multi-family', name: 'Multi-Family Housing' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'retail', name: 'Retail' },
    { id: 'student-housing', name: 'Student Housing' }
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

      {/* Projects Gallery */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container-custom">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-montserrat transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'text-white shadow-md' 
                    : 'hover:shadow-md'
                }`}
                style={selectedCategory === category.id 
                  ? { backgroundColor: '#00A176' }
                  : { backgroundColor: '#E6F4F1', color: '#4A4A4A' }
                }
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span 
                        className="text-xs font-montserrat uppercase tracking-wider px-2 py-1 rounded"
                        style={{ backgroundColor: '#E6F4F1', color: '#003F5C' }}
                      >
                        {project.category.replace('-', ' ')}
                      </span>
                      <span className="text-sm" style={{ color: '#4A4A4A' }}>{project.year}</span>
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2" style={{ color: '#003F5C' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4" style={{ color: '#4A4A4A' }}>{project.description}</p>
                    
                    <div className="mb-4 text-sm">
                      <div className="flex items-start gap-2 mb-1">
                        <span className="font-semibold" style={{ color: '#003F5C' }}>Client:</span>
                        <span style={{ color: '#4A4A4A' }}>{project.client}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold" style={{ color: '#003F5C' }}>Location:</span>
                        <span style={{ color: '#4A4A4A' }}>{project.location}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={project.link} 
                      className="inline-block font-montserrat font-medium transition-colors hover:opacity-80"
                      style={{ color: '#00A176' }}
                    >
                      View Project Details →
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg" style={{ color: '#4A4A4A' }}>
                No projects found in this category. Please try another filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;