import React from 'react'

function ProjectCard({ title, description, image, github, live }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="space-x-2">
        <a href={github} target="_blank" className="text-blue-600 underline">GitHub</a>
        <a href={live} target="_blank" className="text-green-600 underline">Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;