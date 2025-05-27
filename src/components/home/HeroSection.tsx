import React, { Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import SolarPanel from '../three/SolarPanel';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section className="relative h-screen w-full overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://www.aramco.com/-/media/images/sustainability/sustainability-report/report-2024/overview_sus24.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 3D Background Canvas */}
  <div className="absolute inset-0 z-0">
    <Canvas ref={canvasRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={60} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        {/* <SolarPanel position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} /> */}
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* Centered Hero Content */}
  <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
    <motion.div
      className="max-w-3xl text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
        Sustainable Energy Solutions<br />for a Brighter Future
      </h1>
      <p className="text-lg md:text-xl mb-8 text-white/90">
        Powering innovation through solar energy, digital transformation, and smart infrastructure solutions.
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        <Link to="/services" className="btn-primary">
          Our Services
        </Link>
        <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
          Contact Us
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.5 }}
  >
    <motion.div
      className="w-8 h-12 rounded-full border-2 border-white flex justify-center"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <motion.div 
        className="w-1.5 h-3 bg-white rounded-full mt-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </motion.div>
  </motion.div>
</section>
  );
};

export default HeroSection;