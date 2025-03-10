
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-navy py-6 border-t border-gray-100 dark:border-navy-light">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p className="text-slate dark:text-slate-light text-xs">
              &copy; {new Date().getFullYear()} Cedrick Julian
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-slate hover:text-blue transition-colors"
            aria-label="Scroll to top"
          >
            <span className="mr-1 text-xs">Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
