// app/projects/page.tsx
export default function Projects() {
  const projects = [
    {
      title: 'Online Food Ordering System',
      description:
        'A full-stack food ordering app with authentication, cart, checkout, and payment flow using Next.js 15 and Vercel Postgres.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
      link: 'https://github.com/vyom2507/ITMD542-Private',
    },
    {
      title: 'E-commerce Backend API (GraphQL)',
      description:
        'Developed a backend GraphQL API for managing users, products, and orders with Vercel PostgreSQL.',
      tech: ['Node.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Vercel'],
      link: 'https://github.com/vyom2507/ITMD_544',
    },
    {
      title: 'Hospital Management System',
      description:
        'A management dashboard to handle patients, appointments, and doctors using a modern stack.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      link: 'https://github.com/vyom2507/Hospital-mgmt',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js 15 and deployed on Vercel.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      link: 'https://github.com/vyom2507/vyom-portfolio',
    },
  ]

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 space-y-10">
      <h1 className="text-3xl font-semibold text-gray-900">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-5 shadow hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
            <p className="text-sm text-white-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-500">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 border px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-4 text-blue-600 hover:underline text-sm"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
