import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ParticleField } from "./ParticleField";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const floatingTags = [
  { text: "AI", x: "10%", y: "20%", delay: 0 },
  { text: "Robotics", x: "85%", y: "15%", delay: 0.5 },
  { text: "Deep Tech", x: "75%", y: "70%", delay: 1 },
  { text: "HK Gateway", x: "8%", y: "65%", delay: 1.5 },
];

export const Hero: React.FC = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <motion.div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[200px]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-60 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

      {floatingTags.map((tag) => (
        <motion.div
          key={tag.text}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs text-gray-500"
          style={{ left: tag.x, top: tag.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + tag.delay, duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          {tag.text}
        </motion.div>
      ))}

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] mb-8 text-sm text-blue-400 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            AI / Robotics / Deep Tech / Hong Kong Gateway
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 tracking-tight">
            <motion.span
              className="block text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t.hero.title}
            </motion.span>
            <motion.span
              className="block mt-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 80px rgba(59, 130, 246, 0.2)",
                backgroundSize: "200% auto",
                animation: "data-flow 4s ease-in-out infinite",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.hero.titleAccent}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
              <span className="relative text-white">{t.hero.cta1}</span>
              <ArrowRight size={18} className="relative text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#platform"
              className="px-8 py-4 border border-white/15 hover:border-blue-500/40 rounded-full font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <div className="w-5 h-8 rounded-full border border-gray-600/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-blue-400/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
