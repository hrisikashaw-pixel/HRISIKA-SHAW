import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ContactCTA = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hrisika2002@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-light-cream">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal rounded-[3rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 soft-shadow"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
              Interested? <br />
              <span className="text-soft-taupe">Contact Me!</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-full flex items-center justify-between gap-4 w-full sm:w-auto">
              <span className="text-sm font-medium opacity-90">{email}</span>
              <button 
                onClick={copyEmail}
                className="hover:text-soft-taupe transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <a
              href={`mailto:${email}`}
              className="bg-white text-charcoal px-8 py-4 rounded-full text-sm font-bold hover:bg-soft-beige transition-all w-full sm:w-auto text-center"
            >
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
