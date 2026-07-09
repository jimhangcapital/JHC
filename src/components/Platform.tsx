import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { DollarSign, GraduationCap, Building2, Landmark, Rocket } from "lucide-react";

const platformIcons = [DollarSign, GraduationCap, Building2, Landmark, Rocket];

const platformColors = [
  { dot: "from-blue-400 to-blue-600", ring: "ring-blue-500/20", glow: "shadow-blue-500/20", bg: "bg-blue-500", icon: "text-blue-400" },
  { dot: "from-cyan-400 to-cyan-600", ring: "ring-cyan-500/20", glow: "shadow-cyan-500/20", bg: "bg-cyan-500", icon: "text-cyan-400" },
  { dot: "from-emerald-400 to-emerald-600", ring: "ring-emerald-500/20", glow: "shadow-emerald-500/20", bg: "bg-emerald-500", icon: "text-emerald-400" },
  { dot: "from-amber-400 to-amber-600", ring: "ring-amber-500/20", glow: "shadow-amber-500/20", bg: "bg-amber-500", icon: "text-amber-400" },
  { dot: "from-orange-400 to-orange-600", ring: "ring-orange-500/20", glow: "shadow-orange-500/20", bg: "bg-orange-500", icon: "text-orange-400" },
];

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
          {/* Animated timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 via-blue-500/15 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 via-cyan-400 to-amber-400"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ opacity: 0.4 }}
            />
          </div>

          <div className="space-y-12">
            {t.platform.items.map((item, index) => {
              const Icon = platformIcons[index];
              const colors = platformColors[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                  className={`relative flex items-center gap-8 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot with glow */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="relative"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.dot} flex items-center justify-center shadow-lg ${colors.glow} ring-4 ${colors.ring}`}>
                        <span className="text-white font-bold text-xs">{item.number}</span>
                      </div>
                      <div className={`absolute inset-0 rounded-full ${colors.bg} animate-ping opacity-20`} style={{ animationDuration: "3s" }} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="glow-border p-6 bg-card/80 backdrop-blur-sm rounded-2xl md:max-w-lg group card-hover relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      <div className={`absolute -top-20 ${index % 2 === 0 ? "-right-20" : "-left-20"} w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colors.bg}/10`} />

                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className={`w-8 h-8 rounded-lg ${colors.bg}/10 flex items-center justify-center`}>
                          <Icon className={`w-4 h-4 ${colors.icon}`} />
                        </div>
                        <h3 className={`text-xl font-bold ${colors.icon}`}>{item.title}</h3>
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
