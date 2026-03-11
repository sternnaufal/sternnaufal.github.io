import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { portfolioData } from '../data/portfolio';

export default function Certificates() {
  return (
    <motion.section 
      id="certificates"
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
        📜 Sertifikasi
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {portfolioData.certificates.map((cert, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 dark:bg-gray-700 border-4 border-black dark:border-yellow-400 shadow-[6px_6px_0_black] p-4 transition-transform hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0_black]"
            whileHover={{ scale: 1.02 }}
          >
            <LazyLoadImage
              src={cert.image}
              alt={cert.title}
              effect="blur"
              className="w-full h-auto border-3 border-black mb-3"
            />
            <div className="card-content">
              <h4 className="text-lg font-bold bg-neo-lime dark:bg-yellow-400 inline-block px-2 py-1 border-2 border-black dark:border-black mb-2">
                {cert.title}
              </h4>
              <p className="text-sm dark:text-gray-200">{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


