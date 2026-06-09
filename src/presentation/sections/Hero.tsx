import { Mail, MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import type { PersonalInfo } from '../../domain/types';

interface Props { data: PersonalInfo; }

export default function Hero({ data }: Props) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmEzYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-slide-up">
          <p className="text-primary-400 font-mono text-sm mb-3">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            {data.name.split(' ').slice(0, 2).join(' ')}<br />
            <span className="text-primary-400">{data.name.split(' ').slice(2).join(' ')}</span>
          </h1>
          <p className="text-xl text-gray-300 font-semibold mb-2">{data.title}</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">{data.summary}</p>

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${data.email}`} className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              <Mail size={16} /> Contact Me
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-dark-600 hover:border-primary-500 text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-dark-600 hover:border-primary-500 text-gray-300 hover:text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl scale-110" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary-500/30 ring-4 ring-primary-500/10">
              <img src={data.photo} alt={data.name} className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary-400 animate-bounce transition-colors"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
