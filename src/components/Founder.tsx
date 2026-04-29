import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Award } from "lucide-react";

export const Founder: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Founder</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl">
            {t.founder.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="glow-border aspect-[3/4] bg-card rounded-2xl relative overflow-hidden group">
              <img
                src="/justin-zhan.png"
                alt={t.founder.name}
                className="absolute inset-0 w-full h-full object-cover object-[center_20%] scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">{t.founder.name}</p>
                <p className="text-blue-400 text-sm">{t.founder.titleEn}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.founder.role}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400">{t.founder.name}</h3>
              <p className="text-secondary font-medium">{t.founder.titleEn}</p>
              <p className="text-gray-500 text-sm mt-1">{t.founder.role}</p>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              {t.founder.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {t.founder.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-blue-500/8 border border-blue-500/15 px-3 py-1.5 rounded-full"
                >
                  <Award size={10} className="text-amber-500/60" />
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
