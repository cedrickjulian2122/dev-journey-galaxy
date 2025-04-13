import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      window.history.pushState(null, '', href);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-start justify-center max-w-4xl">
        <h1 className="text-blue font-poppins text-base md:text-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Hello, I'm
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-navy dark:text-white mt-3 font-poppins opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Cedrick Monserrat Julian.
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate dark:text-slate-light mt-2 md:mt-3 font-poppins opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Web Development Manager
        </h3>
        <p className="text-slate mt-5 max-w-lg text-base opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          I specialize in full-stack development, cloud deployment, and team leadership at{' '}
          <a href="https://qmarketz.com/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Qmarketz Corp</a>.
        </p>
        <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="border border-blue text-blue px-5 py-3 rounded hover:bg-blue/5 transition-colors duration-300 inline-flex items-center text-sm"
          >
            About me
            <ArrowDown className="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <ArrowDown className="text-blue mt-2 animate-bounce h-4 w-4" />
      </div>
    </section>
  );
}
