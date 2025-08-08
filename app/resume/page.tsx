// app/resume/page.tsx
export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-3xl font-semibold text-white">Resume</h1>

      <p className="text-gray-300 text-base leading-relaxed">
        I am a web developer with hands-on experience building full-stack applications using modern frameworks like React, Next.js, and Node.js. I specialize in frontend design, backend development with PostgreSQL, and API integration. I am currently pursuing my Master’s at IIT Chicago with a concentration in Web Design and Development.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm list-disc list-inside">
          <li>React.js / Next.js</li>
          <li>TypeScript / JavaScript</li>
          <li>Tailwind CSS</li>
          <li>.NET , C# and SQL Server</li>
          <li>Node.js / Express</li>
          <li>PostgreSQL / Prisma</li>
          <li>Git / GitHub / Vercel</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Download</h2>
        <a
          href="/Vyom resume - 2025.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
        >
          Click to download
        </a>
      </div>
    </section>
  )
}
