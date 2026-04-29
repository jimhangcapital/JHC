import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { DollarSign, GraduationCap, Building2, Landmark, Rocket } from "lucide-react";

const platformIcons = [DollarSign, GraduationCap, Building2, Landmark, Rocket];

export const Platform: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="platform" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-amber-500/50" />
            <span className="text-amber-400/80 text-sm font-medium tracking-widest uppercase">Platform</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl">
            {t.platform.title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {t.platform.items.map((item, index) => {
              const Icon = platformIcons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  className={`relative flex items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-blue-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      <span className="text-blue-400 font-bold text-xs">{item.number}</span>
                    </div>
                  </div>

                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="glow-border p-6 bg-card rounded-2xl md:max-w-lg group card-hover">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Icon className="w-5 h-5 text-blue-400" />
                        <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {index % 2 === 0 ? <div className="hidden md:block flex-1" /> : <div className="hidden md:block flex-1" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
