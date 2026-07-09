import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Award, MapPin, GraduationCap } from "lucide-react";

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
                src="/justin-zhan.jpg"
                alt={t.founder.name}
                className="absolute inset-0 w-full h-full object-cover object-[center_20%] scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-white font-bold text-xl">{t.founder.name}</p>
                <p className="text-blue-400 text-sm font-medium">{t.founder.titleEn}</p>
                <p className="text-gray-400 text-xs mt-1">{t.founder.role}</p>
              </div>
            </div>

            {/* Quick info cards below photo */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-card rounded-xl border border-white/[0.06] flex items-center gap-2">
                <MapPin size={14} className="text-blue-400/70" />
                <span className="text-xs text-gray-400">Hong Kong</span>
              </div>
              <div className="p-3 bg-card rounded-xl border border-white/[0.06] flex items-center gap-2">
                <GraduationCap size={14} className="text-blue-400/70" />
                <span className="text-xs text-gray-400">HKUST</span>
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
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">{t.founder.name}</h3>
              <p className="text-secondary font-medium mt-1">{t.founder.titleEn}</p>
              <p className="text-gray-500 text-sm mt-1">{t.founder.role}</p>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
              {t.founder.bio}
            </p>

            <div className="mb-2">
              <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Positions & Affiliations</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.founder.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-300 bg-white/[0.03] border border-white/[0.08] px-3 py-2 rounded-lg hover:bg-blue-500/8 hover:border-blue-500/20 transition-all duration-300 cursor-default"
                >
                  <Award size={10} className="text-amber-500/50" />
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Decorative quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-10 p-6 bg-card/50 rounded-2xl border border-white/[0.04] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500/40 to-transparent" />
              <p className="text-gray-500 text-sm italic leading-relaxed pl-4">
                "在资本、产业、政策与香港之间，创业者需要的不是一扇门，而是一座桥。"
              </p>
              <p className="text-gray-600 text-xs mt-3 pl-4">— {t.founder.name}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
