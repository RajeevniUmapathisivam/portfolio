import "./App.css";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <div className="app" data-theme={theme}>
        <div className="bg-glow bg-glow-1" aria-hidden="true" />
        <div className="bg-glow bg-glow-2" aria-hidden="true" />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
