import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Social Presence',
    client: 'PW CA WALLAH',
    platform: 'Instagram',
    category: 'Instagram',
    image: 'https://i.ibb.co/XfSwtbQG/Whats-App-Image-2026-03-13-at-14-12-02.jpg',
    description: 'Strategic content planning and engagement growth for PW'
  },
  {
    id: 2,
    title: 'Brand Fan Page',
    client: 'PW',
    platform: 'YouTube',
    category: 'YouTube',
    image: 'https://tmpfiles.org/dl/28738401/whatsappimage2026-03-13at16.18.39.jpeg',
    description: 'Creating viral YouTube content that reached over 1M organic views.'
  },
  {
    id: 4,
    title: 'Community Page',
    client: 'Client Fan Page',
    platform: 'Instagram',
    category: 'Instagram',
    image: 'https://i.ibb.co/DfyFLGN8/Whats-App-Image-2026-03-13-at-14-36-24.jpg',
    description: 'Community page curated to drive engagement and build an active audience around the brand'
  },
  {
    id: 6,
    title: 'Learning Highlights',
    client: 'Unacademy',
    platform: 'YouTube',
    category: 'YouTube',
    image: 'https://tmpfiles.org/dl/28738775/whatsappimage2026-03-13at16.21.31.jpeg',
    description: 'Short-form clips curated from client classes and events to increase visibility and drive audience engagement.'
  },
  {
    id: 7,
    title: 'Learning Content Snippets',
    client: 'Unacademy',
    platform: 'Instagram',
    category: 'Instagram',
    image: 'https://i.ibb.co/nNwxLzXx/Whats-App-Image-2026-03-13-at-15-30-15.jpg',
    description: 'Selected highlights from client sessions used to promote classes and engage the online audience.'
  },
  {
    id: 8,
    title: 'Brand Community',
    client: 'PW',
    platform: 'YouTube',
    category: 'YouTube',
    image: 'https://i.ibb.co/dJxjMb1J/Whats-App-Image-2026-03-13-at-16-21-57.jpg',
    description: 'Educational and entertainment short-form content series.'
  },
  {
    id: 9,
    title: 'Podcast Snippets',
    client: 'AfterHours with All About Eve',
    platform: 'YouTube',
    category: 'YouTube',
    image: 'https://i.ibb.co/qFDZSydj/Whats-App-Image-2026-03-13-at-16-31-25.jpg',
    description: 'Converted long-form podcast interviews with notable guests into viral-ready clips.'
  }
];

const categories = ['All', 'YouTube', 'Instagram'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
          >
            My Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/60 max-w-xl mx-auto"
          >
            I worked on various projects, from very different areas.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-charcoal text-white soft-shadow'
                  : 'bg-white/50 text-charcoal hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden soft-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                    <span className="text-xs uppercase tracking-widest mb-2 opacity-80">{project.platform}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{project.client}</h4>
                    <span className="text-xs bg-soft-beige px-3 py-1 rounded-full text-charcoal/70">
                      {project.platform}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
