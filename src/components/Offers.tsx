import { motion } from 'motion/react';
import { Calendar, Users, BarChart3 } from 'lucide-react';

const offers = [
  {
    title: 'CONTENT PLANNING',
    icon: Calendar,
    description: 'Develop structured content planners and posting strategies to ensure consistent, goal-driven content across YouTube, Instagram, and other social platforms'
  },
  {
    title: 'COMMUNITY GROWTH',
    icon: Users,
    description: 'Build active digital communities through fan pages, student-driven content, and strategic posting that strengthens brand presence and audience loyalty'
  },
  {
    title: 'Analyse',
    icon: BarChart3,
    description: 'Make data-driven decisions for growth. Our comprehensive analysis goes beyond metrics, guiding strategic decisions to elevate your social media presence.'
  }
];

const Offers = () => {
  return (
    <section id="offers" className="py-24 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
          >
            My Offers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/60 max-w-xl mx-auto"
          >
            I propose my services with different offers tailored to your brand's needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] soft-shadow text-center group"
            >
              <div className="w-16 h-16 bg-soft-beige rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-muted-rose transition-colors duration-300">
                <offer.icon className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4 uppercase tracking-tight">{offer.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a
              href="#contact"
              className="inline-block bg-charcoal text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-coffee transition-all soft-shadow"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
