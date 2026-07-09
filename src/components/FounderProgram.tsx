import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ArrowRight, FileText, Handshake, Mic, Users, Globe, BookOpen, Cpu, User } from "lucide-react";

const programIcons = [FileText, Handshake, Mic, Users, Globe, BookOpen, Cpu, User];

const programColors = [
  "from-blue-500/15 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40",
  "from-cyan-500/15 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/40",
  "from-emerald-500/15 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/40",
  "from-violet-500/15 to-violet-600/5 border-violet-500/20 hover:border-violet-400/40",
  "from-amber-500/15 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40",
  "from-rose-500/15 to-rose-600/5 border-rose-500/20 hover:border-rose-400/40",
  "from-teal-500/15 to-teal-600/5 border-teal-500/20 hover:border-teal-400/40",
  "from-indigo-500/15 to-indigo-600/5 border-indigo-500/20 hover:border-indigo-400/40",
];

const iconColors = [
  "text-blue-400", "text-cyan-400", "text-emerald-400", "text-violet-400",
  "text-amber-400", "text-rose-400", "text-teal-400", "text-indigo-400",
];

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

        {/* Progress flow */}
        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.program.items.map((item, index) => {
              const Icon = programIcons[index];
              const colorClass = programColors[index];
              const iconColor = iconColors[index];

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className={`group p-6 bg-gradient-to-br ${colorClass} border rounded-2xl card-hover text-center relative overflow-hidden backdrop-blur-sm`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500" />

                  <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-amber-500/10" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-white/10 transition-all duration-300">
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                    </div>

                    <div className="text-amber-400/50 text-xs font-mono mb-2">{String(index + 1).padStart(2, '0')}</div>
                    <span className="text-sm font-bold block mb-1 group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{item.desc}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
            <span className="relative text-white">{t.program.cta1}</span>
            <ArrowRight size={18} className="relative text-white group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/15 hover:border-amber-500/40 rounded-full font-medium transition-all duration-300 hover:bg-white/5"
          >
            {t.program.cta2}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
