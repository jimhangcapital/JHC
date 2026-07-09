import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { Code2, Sparkles, ArrowUpRight, Terminal } from "lucide-react";

const projectAccents = [
  {
    // Poetry
    border: "border-violet-500/25",
    hoverBorder: "hover:border-violet-400/50",
    text: "text-violet-400",
    hoverText: "group-hover:text-violet-300",
    glowBg: "bg-violet-500/10",
    grad: "from-violet-600/20 via-fuchsia-500/5 to-transparent",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-300/80",
    tagBorder: "border-violet-500/20",
    coverGrad: "from-[#1a1233] via-[#2a1a4d] to-[#0b0619]",
  },
  {
    // World Cup
    border: "border-emerald-500/25",
    hoverBorder: "hover:border-emerald-400/50",
    text: "text-emerald-400",
    hoverText: "group-hover:text-emerald-300",
    glowBg: "bg-emerald-500/10",
    grad: "from-emerald-600/20 via-rose-500/5 to-transparent",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-300/80",
    tagBorder: "border-emerald-500/20",
    coverGrad: "from-[#0b3d2e] via-[#0f5e42] to-[#a83932]",
  },
];

export const VibeCoding: React.FC = () => {
  const { t } = useI18n();
  const projects = t.vibeCoding.projects;

  return (
    <section id="vibe-coding" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-violet-500/50" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2">
              <Terminal size={14} />
              Vibe Coding
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            {t.vibeCoding.title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed mb-16">
            {t.vibeCoding.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => {
            const c = projectAccents[index];
            return (
              <motion.a
                key={project.slug}
                href={`/${project.slug}/`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`group relative block glow-border bg-card/60 backdrop-blur-sm border ${c.border} ${c.hoverBorder} rounded-2xl overflow-hidden card-hover`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Cover */}
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${c.coverGrad} overflow-hidden`}>
                  {project.coverImage && (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`text-[11px] font-mono tracking-[0.28em] uppercase ${c.text}`}>
                      {project.chapter}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                    <div className={`w-10 h-10 rounded-full ${c.glowBg} border ${c.border} backdrop-blur-md flex items-center justify-center`}>
                      <ArrowUpRight className={`w-4 h-4 ${c.text}`} />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7 relative">
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 text-foreground ${c.hoverText} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full ${c.tagBg} ${c.tagText} border ${c.tagBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center gap-2 text-sm font-medium ${c.text}`}>
                    <span>{project.cta}</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Why block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glow-border rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-light/40 via-background/60 to-accent-light/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_50%)]" />

          <div className="relative grid md:grid-cols-5 gap-8 md:gap-12 p-8 md:p-12">
            <div className="md:col-span-3">
              <div className="text-violet-400/70 text-xs font-mono tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
                <Sparkles size={12} />
                Manifesto
              </div>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/95 border-l-2 border-violet-500/60 pl-6">
                {t.vibeCoding.quote}
              </blockquote>
            </div>
            <div className="md:col-span-2 flex flex-col justify-between gap-6">
              <div>
                <div className="text-gray-300 text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Code2 size={14} className="text-violet-400" />
                  {t.vibeCoding.whyTitle}
                </div>
                <ul className="space-y-2.5">
                  {t.vibeCoding.reasons.map((reason, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="text-violet-400/60 font-mono shrink-0">0{i + 1}</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://github.com/jimhangcapital/vibe-coding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-violet-500/40 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all self-start"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>
                {t.vibeCoding.viewSource}
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
