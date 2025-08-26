import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: "2021",
      title: "Started BCA Degree",
      description: "Enrolled in Bachelor of Computer Applications program",
    },
    {
      year: "2022",
      title: "First Web Project",
      description: "Developed my first full-stack web application",
    },
    {
      year: "2023",
      title: "Internship Experience",
      description: "Completed web development internship at Tech Solutions Inc.",
    },
    {
      year: "2024",
      title: "Final Year Project",
      description: "Working on capstone project for BCA program",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading pb-3 text-gray-800 dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          About Me 
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mr-3 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="https://i.pinimg.com/736x/5c/16/fd/5c16fd714bc640089900c8b1eb37c878.jpg"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-600">BCA Student</span> &amp; Aspiring Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate Computer Applications student with a strong foundation in programming 
              and web development. My journey in the tech world began when I enrolled in my BCA program, 
              where I discovered my love for creating solutions through code.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Throughout my academic journey, I've consistently pursued opportunities to expand my 
              knowledge and skills beyond classroom learning. I enjoy working on challenging projects 
              that push my boundaries and help me grow as a developer.
            </p>

            {/* Timeline */}
            <div className="relative border-l-2 border-primary-500 pl-8 mt-4 space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                >
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-10 top-1.5"></div>
                  <div className="mb-1 text-sm text-primary-600 font-semibold">{milestone.year}</div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{milestone.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
