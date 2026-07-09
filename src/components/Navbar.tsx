import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "../lib/utils";

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#focus", label: t.nav.focus },
    { href: "#platform", label: t.nav.platform },
    { href: "#program", label: t.nav.program },
    { href: "#vibe-coding", label: t.nav.vibeCoding },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors">
          {t.nav.brand}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="flex items-center gap-2 px-4 py-2 text-sm border border-white/15 hover:border-blue-500/30 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            <Globe size={14} className="text-blue-400" />
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setLang(lang === "zh" ? "en" : "zh"); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full w-fit text-sm"
            >
              <Globe size={14} className="text-blue-400" />
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
