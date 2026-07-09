import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ArrowUp, MapPin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-8 pb-16">
      <div className="scifi-divider mb-12" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">{t.nav.brand}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">{t.footer.tagline}</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={14} className="text-blue-400/50" />
                <span>Hong Kong & Greater Bay Area</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-5 uppercase tracking-widest">Navigation</h4>
            <div className="space-y-3">
              {[
                { href: "#focus", label: t.nav.focus },
                { href: "#platform", label: t.nav.platform },
                { href: "#program", label: t.nav.program },
                { href: "#about", label: t.nav.about },
              ].map((link) => (
                <a key={link.href} href={link.href} className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm group">
                  <span className="w-0 group-hover:w-3 h-px bg-blue-400/50 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-5 uppercase tracking-widest">Connect</h4>
            <a href="#contact" className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm group">
              <Mail size={14} className="text-blue-400/50" />
              <span className="w-0 group-hover:w-3 h-px bg-blue-400/50 transition-all duration-300" />
              {t.nav.contact}
            </a>
          </div>
        </div>
        <div className="scifi-divider mb-8" />
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-blue-500/30 bg-white/[0.02] hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 group"
          >
            <ArrowUp size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
