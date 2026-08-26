import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import {
  Activity,
  Wifi,
  Lock,
  Settings,
  Bell,
  Leaf,
  Globe,
  Recycle,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import SolarPanel from '../three/SolarPanel';
import video from '../home/assets/video.webm';

interface Slide {
  caption: string;
  gradient: string;
  icons: { Icon: React.ElementType; className: string }[];
}

const slides: Slide[] = [
  {
    caption:
      'Monitor energy consumption across sites, regions, and your entire portfolio in real-time using our advanced notification system.',
    gradient: 'from-secondary-dark/60 via-secondary/45 to-black/35',
    icons: [
      { Icon: Activity, className: 'top-[15%] left-[10%] w-10 h-10 text-primary-light/40' },
      { Icon: Wifi, className: 'top-[35%] left-[22%] w-8 h-8 text-primary/40' },
      { Icon: Bell, className: 'top-[20%] left-[35%] w-7 h-7 text-white/30' },
      { Icon: Lock, className: 'top-[45%] left-[14%] w-9 h-9 text-primary-light/30' },
      { Icon: Settings, className: 'top-[55%] left-[30%] w-8 h-8 text-white/20' },
    ],
  },
  {
    caption:
      'Ensure compliance with reporting mandates from regulatory bodies such as the Environmental Protection Agency (EPA), the Carbon Disclosure Project (CDP), and the Automated Benchmarking System (ABS).',
    gradient: 'from-accent-dark/60 via-primary-dark/45 to-black/35',
    icons: [
      { Icon: Leaf, className: 'top-[18%] left-[12%] w-10 h-10 text-primary-light/40' },
      { Icon: Recycle, className: 'top-[30%] left-[28%] w-8 h-8 text-white/30' },
      { Icon: Globe, className: 'top-[48%] left-[18%] w-9 h-9 text-primary-light/30' },
      { Icon: ShieldCheck, className: 'top-[22%] left-[38%] w-7 h-7 text-white/25' },
    ],
  },
  {
    caption:
      'Our predictive modeling and comprehensive 360-degree reports equip energy managers with the data and compelling narratives required to secure support from key stakeholders for pivotal business plans and initiatives.',
    gradient: 'from-secondary/60 via-secondary-dark/45 to-black/35',
    icons: [
      { Icon: BarChart3, className: 'top-[16%] left-[10%] w-10 h-10 text-primary-light/40' },
      { Icon: LineChart, className: 'top-[36%] left-[24%] w-9 h-9 text-primary/40' },
      { Icon: PieChart, className: 'top-[24%] left-[36%] w-8 h-8 text-white/25' },
      { Icon: TrendingUp, className: 'top-[50%] left-[16%] w-8 h-8 text-primary-light/30' },
    ],
  },
  {
    caption:
      'Enhance your energy portfolio by harnessing the potential of data-driven solutions and integrated business management tools, revolutionizing your strategic approach.',
    gradient: 'from-accent/60 via-secondary/45 to-black/35',
    icons: [
      { Icon: Calculator, className: 'top-[18%] left-[12%] w-10 h-10 text-primary-light/40' },
      { Icon: DollarSign, className: 'top-[38%] left-[26%] w-8 h-8 text-white/30' },
      { Icon: Briefcase, className: 'top-[48%] left-[16%] w-9 h-9 text-primary-light/30' },
      { Icon: TrendingUp, className: 'top-[22%] left-[36%] w-7 h-7 text-white/25' },
    ],
  },
];

const SLIDE_DURATION = 6000;

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    startTimer();
  };

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
        <source src={video} type="video/mp4" />
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

      {/* Slide Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-[5] bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.icons.map(({ Icon, className }, iconIndex) => (
            <motion.div
              key={iconIndex}
              className={`absolute ${className}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 + iconIndex, ease: 'easeInOut' }}
            >
              <Icon className="w-full h-full" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Centered Hero Content */}
      {/*
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
      */}

      {/* Slide Caption */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/15 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="font-montserrat font-semibold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight text-white"
            >
              {slides[activeSlide].caption}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                index === activeSlide ? 'w-7 sm:w-6 bg-primary' : 'w-2.5 sm:w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
