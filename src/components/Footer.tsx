
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-navy py-8 border-t border-gray-100 dark:border-navy-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate dark:text-slate-light text-sm">
              &copy; {new Date().getFullYear()} Cedrick Julian. All Rights Reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-slate hover:text-teal transition-colors"
            aria-label="Scroll to top"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
