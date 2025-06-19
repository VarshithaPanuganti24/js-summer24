import React from 'react'

function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I’m a beginner UI developer with experience in React, Tailwind CSS, HTML, and JavaScript. I enjoy building responsive and accessible user interfaces.
      </p>
      <h3 className="font-semibold mt-6">Skills:</h3>
      <ul className="list-disc list-inside">
        <li>HTML5, CSS3, JavaScript</li>
        <li>React, Tailwind CSS</li>
        <li>Git, GitHub, Figma</li>
      </ul>
    </section>
  );
}

export default About;