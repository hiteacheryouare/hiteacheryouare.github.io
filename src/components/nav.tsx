import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../utils/navigation';
import LogoSVG from './LogoSVG';

type NavLinkItem = (typeof navLinks)[number];

const NavLink = ({ link, isActive }: { link: NavLinkItem; isActive: boolean }) => (
  <a
    href={link.href}
    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group ${
      isActive
        ? 'text-primary dark:text-primary-dark'
        : 'text-gray-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-dark'
    }`}
  >
    {link.name}
    {isActive && (
      <span
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-current"
        style={{ bottom: '2px', width: '4px', height: '4px' }}
      />
    )}
  </a>
);

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(88);
  const [currentPath, setCurrentPath] = useState('');
  const lastScrollY = useRef(0);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      setCollapsedWidth(logoRef.current.offsetWidth + 32);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsCollapsed(true);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsCollapsed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    const handleRouteChange = () => {
      setIsCollapsed(false);
      setIsOpen(false);
      lastScrollY.current = 0;
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('astro:after-swap', handleRouteChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('astro:after-swap', handleRouteChange);
    };
  }, []);

  const handleLogoClick = (e) => {
    if (isCollapsed) {
      e.preventDefault();
      setIsCollapsed(false);
    }
  };

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const linksStyle = {
    opacity: isCollapsed ? 0 : 1,
    transition: 'opacity 0.2s ease',
    pointerEvents: isCollapsed ? ('none' as const) : ('auto' as const),
    whiteSpace: 'nowrap' as const,
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30 rounded-2xl overflow-hidden"
          style={{
            width: '100%',
            maxWidth: isCollapsed ? `${collapsedWidth}px` : '2000px',
            transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="px-4 flex items-center h-16 relative">
            {/* Left links */}
            <div className="hidden md:flex items-center gap-1" style={linksStyle}>
              {leftLinks.map((link) => (
                <NavLink key={link.name} link={link} isActive={isActive(link.href)} />
              ))}
            </div>

            {/* Logo — absolutely centered so it's always the visual anchor */}
            <div ref={logoRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <a
                href="/"
                onClick={handleLogoClick}
                className={`flex items-center transition-opacity duration-200 ${isCollapsed ? 'cursor-pointer hover:opacity-75' : ''}`}
                title={isCollapsed ? 'Tap to expand navigation' : undefined}
              >
                <LogoSVG />
              </a>
            </div>

            {/* Right links */}
            <div className="hidden md:flex items-center gap-1 ml-auto" style={linksStyle}>
              {rightLinks.map((link) => (
                <NavLink key={link.name} link={link} isActive={isActive(link.href)} />
              ))}
            </div>

            {/* Mobile hamburger */}
            {!isCollapsed && (
              <div className="md:hidden ml-auto">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && !isCollapsed && (
        <div className="md:hidden mt-1 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30 rounded-2xl overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-primary dark:text-primary-dark'
                    : 'text-gray-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
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
