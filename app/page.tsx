// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-semibold text-slate-100 mb-4">
        Vyom Limbachiya
      </h1>

      <p className="text-base sm:text-lg text-sky-300 max-w-2xl leading-relaxed">
        Web Developer with experience in building modern, scalable, and user-focused web applications using React, TypeScript, Next.js, and PostgreSQL. Currently pursuing a Masters in Information Technology and Management at Illinois Institute of Technology, Chicago.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/vyom-limbachiya-582a85277/"
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/vyom2507"
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
        <a
          href="/resume"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          View Resume
        </a>
        <button
          onClick={() => router.push('/projects')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          View Projects
        </button>
      </div>
    </section>
  )
}
