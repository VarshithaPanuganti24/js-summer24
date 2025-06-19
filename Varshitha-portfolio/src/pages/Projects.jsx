import React from 'react'


import ProjectCard from '../components/ProjectCard';

const projectList = [
  {
    title: 'To-Do App',
    description: 'A simple task manager built with React.',
    image: '/images/todo-app.png', // Replace with your image path
    github: 'https://github.com/yourusername/todo-app',
    live: 'https://todo-app.vercel.app',
  },
  {
    title: 'Netflix Clone',
    description: 'A UI clone of Netflix homepage using Tailwind CSS.',
    image: '/images/netflix-clone.png',
    github: 'https://github.com/yourusername/netflix-clone',
    live: 'https://netflix-clone.vercel.app',
  },
];

function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;