import { I18nProvider } from "./lib/i18n-context";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Brand } from "./components/Brand";
import { FocusAreas } from "./components/FocusAreas";
import { Platform } from "./components/Platform";
import { FounderProgram } from "./components/FounderProgram";
import { Founder } from "./components/Founder";
import { VibeCoding } from "./components/VibeCoding";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/layout/ScrollProgress";

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <div className="scifi-divider" />
          <Brand />
          <div className="scifi-divider" />
          <FocusAreas />
          <Platform />
          <div className="scifi-divider" />
          <FounderProgram />
          <Founder />
          <div className="scifi-divider" />
          <VibeCoding />
          <div className="scifi-divider" />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
