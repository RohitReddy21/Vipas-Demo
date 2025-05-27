import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Solar Farm Installation",
    category: "solar",
    image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
    description: "A 5MW solar farm installation for a commercial client.",
    link: "/projects/solar-farm"
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "digital",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    description: "Complete digital transformation and SEO optimization.",
    link: "/projects/website-redesign"
  },
  {
    id: 3,
    title: "SAP Implementation",
    category: "technology",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
    description: "Full SAP integration for enterprise resource planning.",
    link: "/projects/sap-implementation"
  },
  {
    id: 4,
    title: "Smart Building Design",
    category: "engineering",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "Energy-efficient building with smart technology integration.",
    link: "/projects/smart-building"
  }
];

const ProjectsShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto max-w-xl after:left-1/2 after:-translate-x-1/2">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Explore some of our recent work across different industries and technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full font-montserrat transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('solar')}
              className={`px-5 py-2 rounded-full font-montserrat transition-colors ${
                filter === 'solar' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Solar
            </button>
            <button
              onClick={() => setFilter('digital')}
              className={`px-5 py-2 rounded-full font-montserrat transition-colors ${
                filter === 'digital' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Digital
            </button>
            <button
              onClick={() => setFilter('technology')}
              className={`px-5 py-2 rounded-full font-montserrat transition-colors ${
                filter === 'technology' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-5 py-2 rounded-full font-montserrat transition-colors ${
                filter === 'engineering' 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Engineering
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-montserrat uppercase tracking-wider text-primary-dark bg-mint px-2 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="font-montserrat font-semibold text-lg mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <Link 
                  to={project.link} 
                  className="text-primary font-montserrat text-sm font-medium hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  View Project
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;