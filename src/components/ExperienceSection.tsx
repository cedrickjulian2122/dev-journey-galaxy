
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
      "Plan and execute pre/post-deployment strategies, ensuring smooth rollouts with minimal downtime.",
      "Participate in management meetings to align development timelines and support technical issue resolution across departments."
    ]
  },
  {
    date: "Jul 2021 – Aug 2023",
    title: "Web Developer",
    company: "Qmarketz Corp",
    location: "Quezon City, Philippines",
    description: [
      "Developed and maintained Automart.PH Admin 3.0 Dashboard, Motomart.PH Admin 3.0 Dashboard, and Assetmart.Global.",
      "Engineered Qmarketz Installment Core and Installment Admin Dashboard backend systems.",
      "Managed web application deployments on cloud platforms, ensuring system reliability and performance."
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
      "Developed Robotic Process Automation (RPA) for banking and payment collection systems.",
      "Contributed to Electronic Know Your Client (EKYC) Phase 2 implementation."
    ]
  },
  {
    date: "Nov 2018 – Jun 2020",
    title: "Digital Business Automation Developer",
    company: "I-Asiatic Innovations Phils., Inc.",
    description: [
      "Developed and implemented Automation Anywhere RPA solutions for banking operations, including Account Opening and Reports Reconciliation.",
      "Built automation workflows in UiPath for Retail Sales Management.",
      "Integrated IBM WebSphere Portal solutions for Bangko Sentral ng Pilipinas (BSP)."
    ]
  },
  {
    date: "Nov 2017 – Nov 2018",
    title: "Middleware Developer",
    company: "I-Asiatic Innovations Phils., Inc.",
    description: [
      "Developed IBM Cast Iron integrations for Ayala Land's My eSas Treasury Management and Multi SAP Instance modules.",
      "Implemented Customer Experience Engine (CXE) for Meralco."
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
      className="section-container bg-gray-50 dark:bg-navy-light"
    >
      <h2 className={`section-title ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}>
        Work Experience
      </h2>
      
      <div className="mt-10 relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate/20 transform md:-translate-x-px"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-teal rounded-full transform -translate-x-1/2 z-10"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-sm border border-gray-100 dark:border-navy">
                  <div className="experience-date">{exp.date}</div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">{exp.company}</div>
                  {exp.location && <div className="text-sm text-slate mb-3">📍 {exp.location}</div>}
                  <ul className="mt-3 space-y-2">
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
