import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { ParticleField } from "./ParticleField";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/6 rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite_1s]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 text-sm text-blue-400"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            AI / Robotics / Deep Tech / Hong Kong Gateway
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            <span className="block text-foreground/90">{t.hero.title}</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-amber-400 bg-clip-text text-transparent glow-text">
              {t.hero.titleAccent}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
            >
              {t.hero.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#platform"
              className="px-8 py-4 border border-white/20 hover:border-blue-500/40 rounded-full font-medium transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};
