import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase } from 'lucide-react';
import { experience } from '../../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-gray-800 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary-500 ml-3 md:ml-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10 ml-6 md:ml-10"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-2 md:-left-[9px] mt-1.5"></div>
                
                {/* Content Card */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.position}
                      </h3>
                      <div className="flex items-center mt-1">
                        <Briefcase size={16} className="text-primary-600 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{job.company}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-gray-500 dark:text-gray-400">{job.period}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
