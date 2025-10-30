import { useState } from 'react';

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Résumé', href: '/resume' },
    { name: 'Blog', href: '/blog' },
    { name: 'Research', href: '/research' },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              {props.children}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-neutral-200 hover:text-primary dark:hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-neutral-200 hover:text-primary dark:hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-expanded={isOpen}
            >
                <i
                className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}
                aria-hidden="true"
                />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/60 dark:bg-zinc-800/60 backdrop-blur-lg border-t border-gray-200/30 dark:border-gray-700/30 rounded-b-2xl overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-neutral-200 hover:text-primary dark:hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};