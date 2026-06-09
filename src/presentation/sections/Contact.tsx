import { Mail, FolderOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import type { PersonalInfo } from '../../domain/types';
import { SectionTitle } from './About';

interface Props { data: PersonalInfo; }

export default function Contact({ data }: Props) {
  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" />
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm open to remote opportunities and exciting projects. Whether you have a question, a collaboration idea, or just want to say hi — my inbox is always open.
          </p>
          <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors mb-10">
            <Mail size={18} /> Send me an email
          </a>
          <div className="flex justify-center gap-6">
            <SocialLink href={data.github} icon={<GithubIcon size={22} />} label="GitHub" />
            <SocialLink href={data.linkedin} icon={<LinkedinIcon size={22} />} label="LinkedIn" />
            <SocialLink href="https://drive.google.com/drive/folders/1O2eySR34faSGAxRwZWpCE5SyVcs_aqXr" icon={<FolderOpen size={22} />} label="Portfolio Docs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-primary-400 transition-colors group">
      <span className="bg-dark-800 border border-dark-700 group-hover:border-primary-500/50 p-3 rounded-xl transition-colors">
        {icon}
      </span>
      <span className="text-xs">{label}</span>
    </a>
  );
}
