import { Mail, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import type { PersonalInfo } from '../../domain/types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props { data: PersonalInfo; }

export default function About({ data }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <img src="/paskiki1.jpg" alt="Oksenda" className="rounded-2xl w-full max-w-sm mx-auto object-cover shadow-xl border border-dark-700" />
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">{data.summary}</p>
            <div className="space-y-3">
              <ContactRow icon={<Mail size={16} />} label="Email" value={data.email} href={`mailto:${data.email}`} />
              <ContactRow icon={<Phone size={16} />} label="Phone" value={data.phone} href={`tel:${data.phone}`} />
              <ContactRow icon={<LinkedinIcon size={16} />} label="LinkedIn" value="linkedin.com/in/oksenda" href={data.linkedin} external />
              <ContactRow icon={<GithubIcon size={16} />} label="GitHub" value="github.com/h4ckm3" href={data.github} external />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-3 text-sm group">
      <span className="text-primary-400 w-4">{icon}</span>
      <span className="text-gray-500 w-16">{label}</span>
      <span className="text-gray-300 group-hover:text-primary-400 transition-colors">{value}</span>
      {external && <ExternalLink size={12} className="text-gray-600 group-hover:text-primary-400" />}
    </a>
  );
}

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
    </div>
  );
}
