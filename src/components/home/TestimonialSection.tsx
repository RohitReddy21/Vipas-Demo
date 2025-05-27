import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    content: "Vipas Energy transformed our company's approach to energy consumption. Their solar installation has reduced our costs by 40% while reducing our carbon footprint.",
    author: "Sarah Johnson",
    position: "Operations Director, TechFlow Inc.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 2,
    content: "The digital marketing team at Vipas helped us increase our online visibility significantly. Our web traffic has grown by 150% since working with them.",
    author: "Michael Chen",
    position: "Marketing Manager, GreenSolutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 3,
    content: "The SAP integration services provided by Vipas Technologies streamlined our operations and improved our data management capabilities exponentially.",
    author: "Laura Martinez",
    position: "CTO, Innovate Manufacturing",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

const TestimonialSection: React.FC = () => {
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto max-w-xl after:left-1/2 after:-translate-x-1/2">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Vipas Energy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-8 shadow-md relative"
            >
              {/* Quote mark */}
              <svg className="absolute top-4 right-4 w-10 h-10 text-primary opacity-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-secondary">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;