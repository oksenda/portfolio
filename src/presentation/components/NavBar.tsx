import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-primary-400 font-mono font-bold text-lg">OFP</span>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-gray-300 hover:text-primary-400 text-sm transition-colors font-medium">
                {link}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700 px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-gray-300 hover:text-primary-400 text-sm text-left transition-colors">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
