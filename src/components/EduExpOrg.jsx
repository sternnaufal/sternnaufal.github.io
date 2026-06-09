import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function EduExpOrg() {
  return (
    <section className="py-16 px-4 dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Education */}
        <motion.div
          className="bg-white dark:bg-gray-900 dark:text-white border-4 border-black dark:border-yellow-400 shadow-[8px_8px_0_black] dark:shadow-[8px_8px_0_#facc15] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-space text-xl bg-neo-lime dark:bg-yellow-400 dark:text-black inline-block px-4 py-2 border-4 border-black shadow-[-4px_4px_0_black] mb-4">
            🎓 Pendidikan
          </h3>
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{edu.institution}</h4>
              <p className="text-sm">
                {edu.degree}<br/>
                <span className="italic">{edu.period}</span>
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                {edu.description.map((desc, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          className="bg-black text-white border-4 border-yellow-400 shadow-[8px_8px_0_#FFFF00] dark:shadow-[8px_8px_0_#facc15] p-6"
          style={{ transform: 'rotate(-0.5deg)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-space text-xl bg-red-600 px-4 py-2 border-4 border-dashed border-yellow-400 text-white shadow-[4px_4px_0_#FFFF00] dark:shadow-[4px_4px_0_#facc15] inline-block mb-4">
            💼 Pengalaman
          </h3>
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{exp.company}</h4>
              <ul className="list-disc list-inside text-sm mt-2">
                {exp.description.map((desc, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Organizations */}
        <motion.div
          className="bg-neo-yellow dark:bg-gray-800 dark:text-white border-4 border-black dark:border-yellow-400 shadow-[8px_8px_0_black] dark:shadow-[8px_8px_0_#facc15] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-space text-xl bg-black text-neo-yellow dark:bg-yellow-400 dark:text-black px-4 py-2 border-4 border-double border-yellow-400 dark:border-black uppercase inline-block mb-4 tracking-wider">
            🏢 Organisasi
          </h3>
          {portfolioData.organizations.map((org, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-bold">{org.name}</h4>
              <p className="text-sm">
                {org.position}<br/>
                <span className="italic">{org.period}</span>
              </p>
              {org.description.length > 0 && (
                <ul className="list-disc list-inside text-sm mt-2">
                  {org.description.map((desc, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
