
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-start justify-center">
        <h1 className="text-teal font-poppins text-lg md:text-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Hi, my name is
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-white mt-4 font-poppins opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Cedrick Monserrat Julian.
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate dark:text-slate-light mt-2 md:mt-4 font-poppins opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          I build web experiences.
        </h3>
        <p className="text-slate mt-6 max-w-xl text-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          I'm a Web Development Junior Manager with expertise in full-stack development, 
          cloud deployment, and team leadership. Currently focused on building innovative 
          solutions at <a href="https://qmarketz.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Qmarketz Corp</a>.
        </p>
        <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="#about"
            className="border border-teal text-teal px-6 py-4 rounded font-semibold hover:bg-teal/10 transition-colors duration-300 inline-flex items-center"
          >
            Learn more about me
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Background elements - decorative */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-slate dark:text-slate-light">Scroll Down</span>
        <ArrowDown className="text-teal mt-2 animate-bounce" />
      </div>
    </section>
  );
}
