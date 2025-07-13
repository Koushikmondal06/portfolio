"use client";

import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    
    {
      title: 'Eco-Tracker',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',

      technologies: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express'],
      github: 'https://github.com/HimanshuM685/EcoTracker.git',
      demo: 'https://eco-test-theta.vercel.app/'
    },
    {
      title: 'Music-Website',
      description: 'A platform for discovering and streaming music, featuring playlists, artist profiles, and social sharing.',

      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/Koushikmondal06/Music-website.git',
      demo: '#'
    },
    {
      title: 'To-Do List App',
      description: 'A modern to-do list application built with React, featuring user authentication, task categorization, and a responsive design.',

      technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Koushikmondal06/to-do-list.git',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Portflowio is a personal portfolio website to showcase projects, skills, and experience. Built with a modern tech stack, it features a responsive design, interactive project gallery, and smooth animations for an engaging user experience.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js'],
      github: 'https://github.com/Koushikmondal06/Music-website.git',
       demo: '#'
}
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some projects I've built while learning web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs font-medium border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;