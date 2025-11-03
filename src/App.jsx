import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-sm">
              <Rocket className="h-4 w-4" />
            </span>
            <span>My Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Your Name. Built with love, React, and a splash of 3D.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
