import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for could not be found."
      />
      
      <div className="min-h-screen pt-32 pb-20 flex items-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-montserrat font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-montserrat font-semibold text-secondary mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn-primary">
              Back to Homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;