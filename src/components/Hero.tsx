import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-light-cream">
      {/* Background Line Art */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 300C150 250 250 250 300 300" stroke="#3B2F2F" strokeWidth="2" />
          <path d="M50 350C100 300 300 300 350 350" stroke="#3B2F2F" strokeWidth="2" />
          <circle cx="200" cy="150" r="100" stroke="#3B2F2F" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none transform rotate-180">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 300C150 250 250 250 300 300" stroke="#3B2F2F" strokeWidth="2" />
          <path d="M50 350C100 300 300 300 350 350" stroke="#3B2F2F" strokeWidth="2" />
          <circle cx="200" cy="150" r="100" stroke="#3B2F2F" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-tight mb-8"
        >
          SOCIAL MEDIA <br />
          <span className="relative inline-block">
            MANAGER
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-soft-taupe origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning content ideas into consistent social media growth. <br className="hidden md:block" />
          Helping creators and brands build reach, engagement, and loyal communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-charcoal text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-coffee transition-all soft-shadow transform hover:-translate-y-1"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
