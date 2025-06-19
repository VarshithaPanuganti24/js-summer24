import React from 'react'

function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Varsha</h2>
      <p className="text-lg mb-6">UI Developer passionate about clean interfaces and smooth user experiences.</p>
      <a
        href="/projects"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </section>
  );
}

export default Home;