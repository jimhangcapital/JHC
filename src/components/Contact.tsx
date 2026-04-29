import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { CheckCircle, Send } from "lucide-react";

export const Contact: React.FC = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    founderName: "",
    sector: "",
    stage: "",
    fundraising: "",
    globalPlan: "",
    contact: "",
    pitch: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ projectName: "", founderName: "", sector: "", stage: "", fundraising: "", globalPlan: "", contact: "", pitch: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 bg-card border border-white/10 rounded-xl focus:border-blue-500/50 outline-none transition-all duration-300 placeholder-gray-600 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)]";

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-accent-light/20" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-blue-500/50" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Contact</span>
            <div className="w-12 h-px bg-blue-500/50" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-lg text-gray-400">{t.contact.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-border p-8 md:p-12 bg-card rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.projectName}</label>
                    <input name="projectName" value={formData.projectName} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.founderName}</label>
                    <input name="founderName" value={formData.founderName} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.sector}</label>
                    <input name="sector" value={formData.sector} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.stage}</label>
                    <select name="stage" value={formData.stage} onChange={handleChange} required className={inputClass}>
                      <option value="">{t.contact.form.selectPlaceholder}</option>
                      <option value="idea">{t.contact.form.stageOptions.idea}</option>
                      <option value="pre-seed">{t.contact.form.stageOptions.preSeed}</option>
                      <option value="seed">{t.contact.form.stageOptions.seed}</option>
                      <option value="series-a">{t.contact.form.stageOptions.seriesA}</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.fundraising}</label>
                    <input name="fundraising" value={formData.fundraising} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">{t.contact.form.globalPlan}</label>
                    <select name="globalPlan" value={formData.globalPlan} onChange={handleChange} required className={inputClass}>
                      <option value="">{t.contact.form.selectPlaceholder}</option>
                      <option value="yes">{t.contact.form.globalOptions.yes}</option>
                      <option value="no">{t.contact.form.globalOptions.no}</option>
                      <option value="planning">{t.contact.form.globalOptions.planning}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{t.contact.form.contact}</label>
                  <input name="contact" value={formData.contact} onChange={handleChange} required type="email" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{t.contact.form.pitch}</label>
                  <textarea name="pitch" value={formData.pitch} onChange={handleChange} required rows={3} className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  {t.contact.form.submit}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle size={64} className="mx-auto mb-6 text-green-400" />
                <h3 className="text-2xl font-bold mb-2">{t.contact.success}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
