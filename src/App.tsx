import NavBar from './presentation/components/NavBar';
import Hero from './presentation/sections/Hero';
import About from './presentation/sections/About';
import Skills from './presentation/sections/Skills';
import Experience from './presentation/sections/Experience';
import Projects from './presentation/sections/Projects';
import Education from './presentation/sections/Education';
import Contact from './presentation/sections/Contact';
import Footer from './presentation/components/Footer';
import { portfolioData } from './data/portfolio';

export default function App() {
  const { personal, skills, experience, projects, education } = portfolioData;

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      <NavBar />
      <Hero data={personal} />
      <About data={personal} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Education education={education} />
      <Contact data={personal} />
      <Footer />
    </div>
  );
}
