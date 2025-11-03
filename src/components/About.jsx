export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">About Me</h2>
          <p className="mt-4 text-gray-700">
            I’m a front-end developer who blends design and code to build interfaces that feel fast, intuitive, and fun. I enjoy working with React, TypeScript, and 3D/interactive tooling to bring ideas to life.
          </p>
          <p className="mt-3 text-gray-700">
            Beyond the UI, I care deeply about accessibility, performance, and maintainable systems that scale with teams.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Three.js / Spline',
                'Node.js',
                'Accessibility',
                'Performance',
                'Design Systems',
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
