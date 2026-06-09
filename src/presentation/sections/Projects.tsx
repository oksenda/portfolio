import { ExternalLink } from 'lucide-react';
import type { Project } from '../../domain/types';
import { SectionTitle } from './About';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { projects: Project[]; }

export default function Projects({ projects }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs text-primary-400 font-mono">{project.year}</span>
            <h3 className="text-white font-bold text-lg mt-0.5">{project.name}</h3>
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary-400 transition-colors ml-2 flex-shrink-0">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dark-700">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs bg-dark-700 text-gray-400 px-2.5 py-1 rounded-full border border-dark-600">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
