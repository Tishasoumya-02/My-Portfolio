import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Highlight from "./components/Highlight";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IntlProvider } from "./components/IntlProvider";
export default function App() {
  return (
    <IntlProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Highlight />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </IntlProvider>
  );
}
