import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Achievements() {
  return (
    <motion.section 
      id="achievements"
      className="py-12 px-4 bg-white dark:bg-gray-800 border-t-4 border-b-4 border-black dark:border-yellow-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Cpolygon points='0,20 25,0 50,20 75,0 100,20 100,40 0,40' fill='%23fef08a'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}
    >
      <h3 className="font-space text-2xl font-extrabold border-b-4 border-black inline-block pb-1 mb-6 bg-neo-yellow px-4 py-2">
        🏆 Prestasi
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 dark:bg-gray-700 border-4 border-black dark:border-yellow-400 shadow-[6px_6px_0_black] p-4 transition-transform hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0_black]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-content">
              <h4 className="text-lg font-bold bg-neo-lime dark:bg-yellow-400 inline-block px-2 py-1 border-2 border-black dark:border-black mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm dark:text-gray-200">{achievement.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


