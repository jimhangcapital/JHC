import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Brain, Bot, Cpu, Globe, Sparkles } from "lucide-react";
import { useRef } from "react";

const iconMap = [Brain, Bot, Cpu, Globe, Sparkles];

const cardGradients = [
  "from-blue-600/20 via-blue-500/5 to-transparent",
  "from-cyan-600/20 via-cyan-500/5 to-transparent",
  "from-violet-600/20 via-violet-500/5 to-transparent",
  "from-amber-600/20 via-amber-500/5 to-transparent",
  "from-emerald-600/20 via-emerald-500/5 to-transparent",
];

const accentColors = [
  { icon: "text-blue-400", bg: "bg-blue-600/15", border: "border-blue-500/20", hoverBg: "group-hover:bg-blue-600/25", hoverBorder: "group-hover:border-blue-500/30", tag: "text-blue-400/60", tagBg: "bg-blue-500/10", tagBorder: "border-blue-500/15" },
  { icon: "text-cyan-400", bg: "bg-cyan-600/15", border: "border-cyan-500/20", hoverBg: "group-hover:bg-cyan-600/25", hoverBorder: "group-hover:border-cyan-500/30", tag: "text-cyan-400/60", tagBg: "bg-cyan-500/10", tagBorder: "border-cyan-500/15" },
  { icon: "text-violet-400", bg: "bg-violet-600/15", border: "border-violet-500/20", hoverBg: "group-hover:bg-violet-600/25", hoverBorder: "group-hover:border-violet-500/30", tag: "text-violet-400/60", tagBg: "bg-violet-500/10", tagBorder: "border-violet-500/15" },
  { icon: "text-amber-400", bg: "bg-amber-600/15", border: "border-amber-500/20", hoverBg: "group-hover:bg-amber-600/25", hoverBorder: "group-hover:border-amber-500/30", tag: "text-amber-400/60", tagBg: "bg-amber-500/10", tagBorder: "border-amber-500/15" },
  { icon: "text-emerald-400", bg: "bg-emerald-600/15", border: "border-emerald-500/20", hoverBg: "group-hover:bg-emerald-600/25", hoverBorder: "group-hover:border-emerald-500/30", tag: "text-emerald-400/60", tagBg: "bg-emerald-500/10", tagBorder: "border-emerald-500/15" },
];

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      {children}
    </motion.div>
  );
}

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
          <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
            {t.focus.title}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6" style={{ perspective: "1000px" }}>
          {t.focus.areas.map((area, index) => {
            const Icon = iconMap[index];
            const colors = accentColors[index];
            const gradient = cardGradients[index];

            return (
              <TiltCard key={area.title} index={index}>
                <div className="glow-border p-8 bg-card rounded-2xl card-hover relative overflow-hidden h-full">
                  <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/30 transition-all duration-500" />

                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} ${colors.hoverBg} ${colors.hoverBorder} border flex items-center justify-center transition-all duration-300`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <span className={`text-xs font-medium ${colors.tag} ${colors.tagBg} ${colors.tagBorder} border px-3 py-1 rounded-full`}>
                        {area.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{area.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
