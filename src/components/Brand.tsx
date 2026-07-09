import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ArrowRight, Zap, Globe, Users, TrendingUp } from "lucide-react";

const statIcons = [Zap, Users, Globe, TrendingUp];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration, start]);

  return count;
}

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value) || 0;
  const isNumeric = !isNaN(numericValue) && numericValue > 0;
  const count = useCountUp(numericValue, 2000, isInView && isNumeric);
  const Icon = statIcons[index % statIcons.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glow-border group p-8 bg-card rounded-2xl text-center card-hover relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-700" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />

      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 group-hover:border-blue-500/25 transition-all duration-300">
          <Icon className="w-5 h-5 text-blue-400/60 group-hover:text-blue-400 transition-colors" />
        </div>
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
          {isNumeric ? count : value}
          {value.includes("+") && "+"}
        </div>
        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</div>
      </div>
    </motion.div>
  );
}

export const Brand: React.FC = () => {
  const { t } = useI18n();

  const ecosystemSteps = [
    { label: "Founder", color: "from-blue-500 to-blue-400" },
    { label: "Technology", color: "from-blue-400 to-cyan-400" },
    { label: "Capital", color: "from-cyan-400 to-emerald-400" },
    { label: "Hong Kong", color: "from-emerald-400 to-amber-400" },
    { label: "Industry", color: "from-amber-400 to-orange-400" },
    { label: "Global Market", color: "from-orange-400 to-red-400" },
  ];

  return (
    <section id="brand" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-light/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 glow-text max-w-3xl">
            {t.brand.title}
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl">
            <p>{t.brand.paragraph1}</p>
            <p>{t.brand.paragraph2}</p>
            <p className="text-gray-400/80">{t.brand.paragraph3}</p>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.brand.stats.map((stat, i) => (
            <StatCounter key={i} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 p-8 glow-border bg-card rounded-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">Cross-Border Ecosystem</div>

          <div className="flex items-center justify-center gap-2 md:gap-0 flex-wrap py-4">
            {ecosystemSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="group flex flex-col items-center gap-2 px-3 md:px-5"
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-15 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-300`}>
                      <span className="text-white/80 font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors whitespace-nowrap">{step.label}</span>
                </motion.div>
                {i < ecosystemSteps.length - 1 && (
                  <div className="hidden md:flex items-center px-1">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      className="w-8 h-px bg-gradient-to-r from-blue-500/30 to-transparent origin-left"
                    />
                    <ArrowRight size={12} className="text-blue-400/30 -ml-0.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
