// Next.js Portfolio Starter (App Router + Tailwind)
// Step:
// 1. npx create-next-app@latest my-portfolio
// 2. pilih: App Router + Tailwind
// 3. replace app/page.tsx dengan ini

import Image from "next/image";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-xl font-bold">Porto-Jay</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Faraysz 👋</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Fullstack Developer | Machine Learning Enthusiast
        </p>
      </section>

      {/* About */}
      <section id="about" className="mb-20">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl">
          I'm a passionate developer who loves building clean and functional web apps.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 p-4 rounded-2xl hover:scale-105 transition">
              <div className="h-40 bg-gray-800 rounded mb-4"></div>
              <h4 className="font-semibold">Password Manager App</h4>
              <p className="text-gray-400 text-sm">React, Node.js, MongoDB</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">your@email.com</p>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name
      </footer>
    </main>
  );
}
