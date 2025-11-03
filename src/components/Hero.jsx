import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="backdrop-blur-[2px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <Rocket className="h-4 w-4 text-indigo-600" />
            Tech • Portfolio • Playful • Modern
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-700 md:text-lg">
            I craft delightful web experiences with a focus on interaction, performance, and clean design.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700 transition">
              View Projects
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-50 transition">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-50 transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
