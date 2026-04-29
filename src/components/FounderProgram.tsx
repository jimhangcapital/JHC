import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ArrowRight } from "lucide-react";

export const FounderProgram: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="program" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/10 via-transparent to-accent-light/10" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-secondary/50" />
            <span className="text-secondary/80 text-sm font-medium tracking-widest uppercase">Founder Program</span>
            <div className="w-12 h-px bg-secondary/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.program.title}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">{t.program.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {t.program.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="glow-border group p-6 bg-card rounded-xl card-hover text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/30 transition-all duration-500" />
              <div className="text-amber-400/60 text-xs font-mono mb-2">{String(index + 1).padStart(2, '0')}</div>
              <span className="text-sm font-bold block mb-1">{item.name}</span>
              <span className="text-xs text-gray-500">{item.desc}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
          >
            {t.program.cta1} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:bg-white/5"
          >
            {t.program.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
