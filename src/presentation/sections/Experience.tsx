import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import type { ExperienceItem } from '../../domain/types';
import { SectionTitle } from './About';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { experience: ExperienceItem[]; }

export default function Experience({ experience }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-dark-600 hidden sm:block" />

          <div className="space-y-8">
            {experience.map(exp => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [expanded, setExpanded] = useState(exp.id === 'indocyber');

  return (
    <div className="sm:pl-16 relative">
      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-800 hidden sm:block" />
      <div className="bg-dark-900 rounded-xl border border-dark-700 hover:border-primary-500/40 transition-colors overflow-hidden">
        <button className="w-full text-left p-6" onClick={() => setExpanded(v => !v)}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
              <p className="text-primary-400 font-medium mt-1">{exp.company}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="flex items-center gap-1 text-gray-500 text-xs"><Calendar size={12} />{exp.period}</span>
                <span className="flex items-center gap-1 text-gray-500 text-xs"><MapPin size={12} />{exp.location}</span>
              </div>
              {exp.description && <p className="text-gray-400 text-sm mt-2 italic">{exp.description}</p>}
            </div>
            <span className="text-gray-500 mt-1 flex-shrink-0">{expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
          </div>
        </button>

        {expanded && (
          <div className="px-6 pb-6 border-t border-dark-700">
            <ul className="space-y-2 mt-4">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-400">
                  <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {exp.projects && exp.projects.length > 0 && (
              <div className="mt-6 space-y-4">
                <h4 className="text-gray-300 font-semibold text-sm uppercase tracking-wider">Key Projects</h4>
                {exp.projects.map((p, i) => (
                  <div key={i} className="bg-dark-800 rounded-lg p-4 border border-dark-700">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-medium text-sm">{p.name}</span>
                      <span className="text-xs bg-primary-900/50 text-primary-400 border border-primary-800 px-2 py-0.5 rounded-full">{p.tech}</span>
                    </div>
                    <ul className="space-y-1">
                      {p.points.map((pt, j) => (
                        <li key={j} className="text-gray-500 text-xs flex gap-2">
                          <span className="text-primary-600 flex-shrink-0">–</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
