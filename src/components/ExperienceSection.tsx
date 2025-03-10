
import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    date: "Aug 2023 – Present",
    title: "Web Development Jr. Manager",
    company: "Qmarketz Corp",
    location: "Quezon City, Philippines | Hybrid",
    description: [
      "Lead and mentor developers, providing technical expertise in web development technologies.",
      "Collaborate with design, UX/UI, and cross-functional teams to build scalable and visually appealing web solutions.",
      "Plan and execute pre/post-deployment strategies, ensuring smooth rollouts with minimal downtime."
    ]
  },
  {
    date: "Jul 2021 – Aug 2023",
    title: "Web Developer",
    company: "Qmarketz Corp",
    location: "Quezon City, Philippines",
    description: [
      "Developed and maintained Automart.PH Admin 3.0 Dashboard, Motomart.PH Admin 3.0 Dashboard, and Assetmart.Global.",
      "Engineered Qmarketz Installment Core and Installment Admin Dashboard backend systems."
    ]
  },
  {
    date: "Feb 2021 – Jul 2021",
    title: "Javascript Developer",
    company: "Qmarketz Corp",
    location: "Quezon City, Philippines | Contract",
    description: [
      "Full-stack development of Automart.PH Admin 3.0 Dashboard and Motomart.PH Admin 3.0 Dashboard."
    ]
  },
  {
    date: "Jul 2020 – Jan 2021",
    title: "Technical Consultant",
    company: "I-Asiatic Innovations Phils., Inc.",
    location: "Contract",
    description: [
      "Led IBM Cast Iron development for Ayala Land projects.",
      "Developed Robotic Process Automation (RPA) for banking and payment collection systems."
    ]
  },
  {
    date: "Nov 2018 – Jun 2020",
    title: "Digital Business Automation Developer",
    company: "I-Asiatic Innovations Phils., Inc.",
    description: [
      "Developed and implemented Automation Anywhere RPA solutions for banking operations.",
      "Built automation workflows in UiPath for Retail Sales Management."
    ]
  }
];

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="section-container"
    >
      <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
        Work Experience
      </h2>
      
      <div className="mt-8 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate/20 transform md:-translate-x-px"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-blue rounded-full transform -translate-x-1.5 z-10"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:ml-auto' : 'md:pl-8'}`}>
                <div className="bg-white dark:bg-navy-dark p-4 rounded-lg border border-gray-100 dark:border-navy">
                  <div className="experience-date">{exp.date}</div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  {exp.location && <div className="text-xs text-slate mb-2">📍 {exp.location}</div>}
                  <ul className="mt-2 space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="experience-description">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
