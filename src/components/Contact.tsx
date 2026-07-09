import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../lib/i18n-context";
import { CheckCircle, Send, FileText, User, Tag, BarChart3, Globe, Mail, MessageSquare } from "lucide-react";

const fieldIcons: Record<string, React.ElementType> = {
  projectName: FileText,
  founderName: User,
  sector: Tag,
  stage: BarChart3,
  fundraising: BarChart3,
  globalPlan: Globe,
  contact: Mail,
  pitch: MessageSquare,
};

function FloatingLabelInput({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  isTextarea = false,
  children,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  isTextarea?: boolean;
  children?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const Icon = fieldIcons[name];

  const inputClass = `w-full px-4 py-4 pt-5 bg-white/[0.03] border border-white/[0.08] rounded-xl focus:border-blue-500/40 outline-none transition-all duration-300 placeholder-transparent focus:shadow-[0_0_30px_rgba(59,130,246,0.08)] focus:bg-white/[0.05]`;

  return (
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 pointer-events-none">
        {Icon && <Icon size={15} className={isActive ? "text-blue-400/60" : "text-gray-600"} />}
      </div>

      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={3}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClass} resize-none pl-11`}
          placeholder={label}
        />
      ) : children ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClass} pl-11 appearance-none cursor-pointer`}
        >
          {children}
        </select>
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClass} pl-11`}
          placeholder={label}
        />
      )}

      <label className={`absolute transition-all duration-300 pointer-events-none ${
        isActive
          ? "top-2 left-11 text-[10px] text-blue-400/70 font-medium"
          : "top-1/2 -translate-y-1/2 left-11 text-sm text-gray-500"
      }`}>
        {label}
      </label>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-blue-400/50 group-focus-within:w-full transition-all duration-500" />
    </div>
  );
}

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

  const steps = [
    { num: "01", label: t.contact.form.projectName },
    { num: "02", label: t.contact.form.sector },
    { num: "03", label: t.contact.form.stage },
    { num: "04", label: t.contact.form.pitch },
  ];

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

        {/* Step indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
                <span className="text-[10px] font-mono text-blue-400/50">{step.num}</span>
                <span className="text-xs text-gray-500 hidden sm:inline">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-6 h-px bg-white/[0.06] mx-1" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-border p-8 md:p-12 bg-card/60 backdrop-blur-sm rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 relative"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <FloatingLabelInput
                    name="projectName"
                    label={t.contact.form.projectName}
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                  />
                  <FloatingLabelInput
                    name="founderName"
                    label={t.contact.form.founderName}
                    value={formData.founderName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <FloatingLabelInput
                    name="sector"
                    label={t.contact.form.sector}
                    value={formData.sector}
                    onChange={handleChange}
                    required
                  />
                  <FloatingLabelInput
                    name="stage"
                    label={t.contact.form.stage}
                    value={formData.stage}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t.contact.form.selectPlaceholder}</option>
                    <option value="idea">{t.contact.form.stageOptions.idea}</option>
                    <option value="pre-seed">{t.contact.form.stageOptions.preSeed}</option>
                    <option value="seed">{t.contact.form.stageOptions.seed}</option>
                    <option value="series-a">{t.contact.form.stageOptions.seriesA}</option>
                  </FloatingLabelInput>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <FloatingLabelInput
                    name="fundraising"
                    label={t.contact.form.fundraising}
                    value={formData.fundraising}
                    onChange={handleChange}
                  />
                  <FloatingLabelInput
                    name="globalPlan"
                    label={t.contact.form.globalPlan}
                    value={formData.globalPlan}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t.contact.form.selectPlaceholder}</option>
                    <option value="yes">{t.contact.form.globalOptions.yes}</option>
                    <option value="no">{t.contact.form.globalOptions.no}</option>
                    <option value="planning">{t.contact.form.globalOptions.planning}</option>
                  </FloatingLabelInput>
                </div>
                <FloatingLabelInput
                  name="contact"
                  label={t.contact.form.contact}
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  type="email"
                />
                <FloatingLabelInput
                  name="pitch"
                  label={t.contact.form.pitch}
                  value={formData.pitch}
                  onChange={handleChange}
                  required
                  isTextarea
                />
                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />
                  <span className="relative text-white flex items-center justify-center gap-2">
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    {t.contact.form.submit}
                  </span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={64} className="mx-auto mb-6 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{t.contact.success}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
