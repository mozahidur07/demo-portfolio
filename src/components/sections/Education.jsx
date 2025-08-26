import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../../data/portfolioData';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-gray-800 dark:text-white pb-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mb-8 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-500 dark:text-gray-400">{item.period}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <GraduationCap size={20} className="text-primary-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Academic Highlights
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <span className="font-medium">GPA/Percentage:</span> {item.gpa}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <BookOpen size={20} className="text-primary-600 mr-2" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Relevant Coursework
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
