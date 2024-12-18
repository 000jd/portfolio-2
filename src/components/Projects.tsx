import React from 'react';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={`https://${project.github}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
                  >
                    <Github size={14} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}