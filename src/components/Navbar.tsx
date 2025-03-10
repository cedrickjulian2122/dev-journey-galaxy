
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <a 
          href="#" 
          className="font-bold text-2xl text-navy dark:text-white font-poppins hover:text-teal dark:hover:text-teal transition-colors duration-300"
        >
          CJ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-dark dark:text-slate-light hover:text-teal dark:hover:text-teal font-medium transition-colors duration-300"
                >
                  <span className="text-teal mr-1">{index + 1}.</span>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal text-teal px-4 py-2 rounded hover:bg-teal/10 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-navy z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-dark dark:text-slate-light text-xl hover:text-teal dark:hover:text-teal font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-teal mr-1">{index + 1}.</span>
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal text-teal px-6 py-3 rounded text-lg hover:bg-teal/10 transition-colors duration-300 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
