import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const skillItems = [
  {
    title: 'Content Strategy and Planning',
    description: 'I specialize in crafting content strategies aligned with company objectives. From planning to scheduling, I optimize our approach across diverse social media platforms, staying attuned to market trends and using advanced planning tools for effective execution.'
  },
  {
    title: 'Engagement and Interaction',
    description: 'Building meaningful relationships with your audience is key. I manage community interactions, respond to comments, and foster a positive brand image through consistent and authentic engagement strategies.'
  },
  {
    title: 'Analysis and Reporting',
    description: 'Data-driven decisions are at the heart of my work. I provide comprehensive analytics reports that track growth, engagement, and ROI, allowing us to refine our strategy and achieve measurable results.'
  },
  {
    title: 'Campaign Management',
    description: 'From concept to execution, I handle multi-platform social media campaigns. This includes influencer outreach, ad management, and cross-channel coordination to ensure maximum reach and impact.'
  }
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="py-24 bg-light-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">My Skills</h2>
          <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
            Explore my skills in content strategy, community engagement, and performance analysis as a Social Media Manager.
          </p>
          <div className="relative">
            {/* Decorative Line Art */}
            <div className="absolute -bottom-20 -left-20 opacity-10 pointer-events-none">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 250C100 150 200 150 250 250" stroke="#3B2F2F" strokeWidth="1" />
                <path d="M20 280C80 200 220 200 280 280" stroke="#3B2F2F" strokeWidth="1" />
              </svg>
            </div>
            <a
              href="#contact"
              className="inline-block bg-charcoal text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-coffee transition-all soft-shadow"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {skillItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white soft-shadow' : 'bg-soft-beige/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="text-lg font-bold text-charcoal">{item.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-soft-taupe transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-charcoal/70 leading-relaxed">
                      {item.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
