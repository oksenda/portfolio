import { GraduationCap, Star } from 'lucide-react';
import type { Education as EducationType } from '../../domain/types';
import { SectionTitle } from './About';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { education: EducationType; }

export default function Education({ education }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-dark-900 rounded-xl border border-dark-700 p-8">
            <div className="flex items-start gap-5">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-3 flex-shrink-0">
                <GraduationCap size={28} className="text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl">{education.degree}</h3>
                <p className="text-primary-400 font-medium mt-1">{education.school}</p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>{education.location}</span>
                  <span>•</span>
                  <span>Graduated {education.year}</span>
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Star size={12} fill="currentColor" /> GPA {education.gpa}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {education.notes.map((note, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-primary-500 flex-shrink-0 mt-0.5">▸</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
