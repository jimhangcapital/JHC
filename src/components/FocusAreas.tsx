import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Brain, Bot, Cpu, Globe, Sparkles } from "lucide-react";

const iconMap = [Brain, Bot, Cpu, Globe, Sparkles];

export const FocusAreas: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="focus" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/10 via-transparent to-accent-light/10" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Focus Areas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl">
            {t.focus.title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {t.focus.areas.map((area, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glow-border group p-8 bg-card rounded-2xl card-hover relative overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 group-hover:border-blue-500/30 transition-all duration-300">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <span className="text-xs font-medium text-blue-400/60 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/15">
                      {area.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
