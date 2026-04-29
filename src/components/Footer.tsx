import { useI18n } from "../lib/i18n-context";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="py-16 relative">
      <div className="scifi-divider mb-12" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3">{t.nav.brand}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2">
              {[
                { href: "#focus", label: t.nav.focus },
                { href: "#platform", label: t.nav.platform },
                { href: "#program", label: t.nav.program },
                { href: "#about", label: t.nav.about },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-gray-500 hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Connect</h4>
            <a href="#contact" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
              {t.nav.contact}
            </a>
          </div>
        </div>
        <div className="scifi-divider mb-8" />
        <p className="text-gray-600 text-sm text-center">
          {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
};
