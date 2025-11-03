import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful 3D hero built with Spline and React for a modern SaaS.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description: 'A scalable component library with tokens, themes, and docs.',
    tags: ['TypeScript', 'Storybook', 'Radix UI'],
    link: '#',
  },
  {
    title: 'Motion Microinteractions',
    description: 'A collection of delightful UI patterns powered by animation.',
    tags: ['Framer Motion', 'React', 'UX'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Featured Projects</h2>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50 md:inline-flex"
          >
            <Code2 className="h-4 w-4" /> View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target={p.link.startsWith('http') ? '_blank' : undefined}
                rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Explore <ExternalLink className="h-4 w-4" />
              </a>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition group-hover:ring-indigo-200" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
