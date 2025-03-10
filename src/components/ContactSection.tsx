
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-container"
    >
      <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
        Get In Touch
      </h2>
      
      <div className="max-w-2xl mx-auto text-center mt-8">
        <p className={`text-slate dark:text-slate-light text-lg ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Whether you have a question, opportunity, or just want to connect, 
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className={`mt-10 grid md:grid-cols-3 gap-6 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <a 
            href="mailto:cedrickjulian2122@gmail.com" 
            className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy hover:border-teal dark:hover:border-teal transition-colors group"
          >
            <div className="flex flex-col items-center">
              <Mail className="text-teal mb-3 h-8 w-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-navy dark:text-white font-medium">Email</h3>
              <p className="text-slate text-sm mt-2 break-all">cedrickjulian2122@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+639552192028" 
            className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy hover:border-teal dark:hover:border-teal transition-colors group"
          >
            <div className="flex flex-col items-center">
              <Phone className="text-teal mb-3 h-8 w-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-navy dark:text-white font-medium">Phone</h3>
              <p className="text-slate text-sm mt-2">0955-219-2028</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/cedrick-julian-1b2082163" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy hover:border-teal dark:hover:border-teal transition-colors group"
          >
            <div className="flex flex-col items-center">
              <Linkedin className="text-teal mb-3 h-8 w-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-navy dark:text-white font-medium">LinkedIn</h3>
              <p className="text-slate text-sm mt-2 flex items-center">
                Connect with me 
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </p>
            </div>
          </a>
        </div>
        
        <div className={`mt-16 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <a
            href="mailto:cedrickjulian2122@gmail.com"
            className="bg-teal text-navy px-8 py-4 rounded font-semibold hover:bg-teal/90 transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
