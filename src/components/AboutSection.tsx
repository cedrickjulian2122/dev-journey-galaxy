
import { useState, useEffect, useRef } from 'react';

export function AboutSection() {
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
      id="about" 
      ref={sectionRef}
      className="section-container"
    >
      <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
        About Me
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className={`md:col-span-2 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <p className="text-slate dark:text-slate-light mb-4 text-sm leading-relaxed">
            I'm a Web Development Junior Manager with a passion for creating efficient, scalable, and user-friendly web applications. 
            My journey in tech started at I-Asiatic Innovations where I developed automation solutions, and has led me to my current role at Qmarketz Corp, 
            where I lead and mentor developers while building innovative web solutions.
          </p>
          <p className="text-slate dark:text-slate-light mb-4 text-sm leading-relaxed">
            With expertise spanning both frontend and backend technologies, I specialize in JavaScript, TypeScript, React.js, and Node.js. 
            I bring together technical knowledge and leadership skills to guide teams in delivering high-quality web applications that meet business objectives.
          </p>
        </div>
        
        <div className={`relative ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full max-w-xs mx-auto">
            <div className="relative z-10 overflow-hidden rounded-md bg-blue/10">
              <img 
                src="https://media.licdn.com/dms/image/D5603AQEBhMRRSv5YSA/profile-displayphoto-shrink_800_800/0/1707733066894?e=1715212800&v=beta&t=1UJEw7gIkQ3yl1CnmEJYhKFXyMN4O_dEwUzkNm81cUI" 
                alt="Cedrick Julian" 
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <div className="absolute -top-3 -right-3 w-full h-full border border-blue rounded-md z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
