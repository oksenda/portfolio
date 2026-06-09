import type { Skill } from '../../domain/types';
import { SectionTitle } from './About';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { skills: Skill[]; }

export default function Skills({ skills }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {skills.map((skill, i) => (
            <div key={i} className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors group">
              <h3 className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span key={j} className="text-xs bg-dark-700 group-hover:bg-dark-600 text-gray-300 px-3 py-1.5 rounded-full border border-dark-600 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
