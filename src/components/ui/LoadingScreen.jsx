import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Database, Terminal, Wrench } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 5, 100));
      } else {
        // Allow the 100% state to display briefly before completion
        setTimeout(() => onLoadingComplete(), 300);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div 
          className="absolute top-[10%] left-[20%]"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Code size={80} />
        </motion.div>
        <motion.div 
          className="absolute top-[30%] right-[15%]"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Laptop size={120} />
        </motion.div>
        <motion.div 
          className="absolute bottom-[25%] left-[15%]"
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
        >
          <Database size={90} />
        </motion.div>
        <motion.div 
          className="absolute bottom-[20%] right-[25%]"
          animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          <Terminal size={100} />
        </motion.div>
        <motion.div 
          className="absolute top-[50%] left-[50%] -translate-x-1/2"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <Wrench size={70} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.div>
        
        <motion.div 
          className="w-72 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "18rem", opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </motion.div>
        
        <motion.div 
          className="text-gray-600 dark:text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress < 100 ? "Loading..." : "Ready!"}
        </motion.div>
        
        <motion.div
          className="mt-1 text-sm text-gray-500 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {progress}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
