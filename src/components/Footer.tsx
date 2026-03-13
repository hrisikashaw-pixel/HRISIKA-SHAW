import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-soft-taupe/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold tracking-tighter uppercase border-2 border-charcoal px-2 py-1 inline-block mb-6">
              HRISIKA SHAW
            </h3>
            <p className="text-charcoal/60 leading-relaxed text-sm">
              Turning content ideas into consistent social media growth. Helping creators and brands build reach, engagement, and loyal communities.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Sitemap</h4>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li><a href="#work" className="hover:text-soft-taupe transition-colors">Work</a></li>
              <li><a href="#skills" className="hover:text-soft-taupe transition-colors">Skills</a></li>
              <li><a href="#offers" className="hover:text-soft-taupe transition-colors">Offers</a></li>
              <li><a href="#contact" className="hover:text-soft-taupe transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Contact Me</h4>
            <ul className="space-y-4 text-sm text-charcoal/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-soft-taupe" />
                <span>(+91) 8637589942</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-soft-taupe" />
                <span>hrisika2002@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social / Extra */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Social</h4>
            <div className="flex gap-4">
              {['Instagram', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-soft-beige flex items-center justify-center hover:bg-muted-rose transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-2 h-2 bg-charcoal rounded-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-soft-taupe/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-charcoal/40 font-medium">
          <div className="flex gap-8">
            <span>HRISIKA SHAW</span>
            <span>©{currentYear}</span>
          </div>
          <div className="flex gap-8">
            <span>Made with Google AI Studio</span>
            <a href="#" className="hover:text-charcoal transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
