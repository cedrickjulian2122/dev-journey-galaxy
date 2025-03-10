
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    name: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "Node.js", "ReactJS", "AdonisJS"]
  },
  {
    name: "Databases",
    skills: ["MySQL", "TypeORM", "LucidORM"]
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "DigitalOcean", "Nginx", "Ubuntu", "Sonatype Nexus Repository"]
  },
  {
    name: "Tools & Project Management",
    skills: ["Jira", "Sprint Planning", "System Deployment", "Risk Management"]
  },
  {
    name: "Automation & Integration",
    skills: ["IBM Cast Iron", "Automation Anywhere", "UiPath", "Zoho Integration"]
  }
];

export function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="section-container bg-gray-50 dark:bg-navy-dark"
    >
      <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {skillCategories.map((category, catIndex) => (
          <div 
            key={catIndex}
            className={cn(
              "bg-white dark:bg-navy-light p-4 rounded-lg border border-gray-100 dark:border-navy",
              isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
            )}
            style={{ animationDelay: `${0.2 + catIndex * 0.1}s` }}
          >
            <h3 className="text-navy dark:text-white font-medium text-sm mb-3 pb-2 border-b border-gray-100 dark:border-navy">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-dark dark:text-slate-light text-xs">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-navy rounded-full h-1.5">
                      <div 
                        className="bg-blue h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${95 - (skillIndex * 5)}%` : '0%',
                          transitionDelay: `${0.5 + (catIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
