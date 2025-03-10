
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
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8 max-w-5xl">
        <a 
          href="#" 
          className="font-medium text-lg text-navy dark:text-white font-poppins hover:text-blue dark:hover:text-blue transition-colors duration-300"
        >
          CJ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-dark dark:text-slate-light hover:text-blue dark:hover:text-blue font-medium transition-colors duration-300 text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue text-blue px-3 py-1.5 rounded hover:bg-blue/5 transition-colors duration-300 text-sm"
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
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-navy z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-dark dark:text-slate-light text-lg hover:text-blue dark:hover:text-blue font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue text-blue px-4 py-2 rounded text-base hover:bg-blue/5 transition-colors duration-300 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
