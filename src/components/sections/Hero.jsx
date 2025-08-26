import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Send } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

// Import tech icons
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 lg:ml-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'BCA Student',
                  1000,
                  'Web Developer',
                  1000,
                  'Tech Enthusiast',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} /> Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} /> Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <FaReact className="text-blue-500 text-2xl" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 right-0 transform translate-x-1/2"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              >
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <FaJs className="text-yellow-500 text-2xl" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute bottom-0 left-10 transform translate-y-1/4"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 1 }}
              >
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <FaNodeJs className="text-green-600 text-2xl" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute top-20 left-0 transform -translate-x-1/2"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3.8, delay: 1.5 }}
              >
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <SiTypescript className="text-blue-700 text-2xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
