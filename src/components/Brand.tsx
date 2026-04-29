import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";

export const Brand: React.FC = () => {
  const { t } = useI18n();

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
          <h2 className="text-3xl md:text-5xl font-bold mb-12 glow-text">
            {t.brand.title}
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-4xl">
            <p>{t.brand.paragraph1}</p>
            <p>{t.brand.paragraph2}</p>
            <p className="text-gray-400">{t.brand.paragraph3}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {t.brand.stats.map((stat, i) => (
            <div
              key={i}
              className="glow-border p-6 bg-card rounded-2xl text-center card-hover"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 p-8 glow-border bg-card rounded-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap py-4">
            {["Founder", "Technology", "Capital", "Hong Kong", "Industry", "Global Market"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-blue-600/15 border border-blue-500/25 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < 5 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-blue-500/30 to-transparent -translate-y-1/2" />
                  )}
                </div>
                <span className="text-sm text-gray-300 hidden md:block">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
