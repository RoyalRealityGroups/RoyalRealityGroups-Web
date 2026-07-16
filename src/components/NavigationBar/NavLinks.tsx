import { useLocation, useNavigate } from 'react-router-dom';

interface NavLink {
  path: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact-us', label: 'Contact Us' },
];

interface NavLinksProps {
  direction?: 'horizontal' | 'vertical';
  onLinkClick?: () => void;
}

/**
 * Navigation links using React Router for multi-page navigation.
 */
export function NavLinks({ direction = 'horizontal', onLinkClick }: NavLinksProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onLinkClick?.();
  };

  const isHorizontal = direction === 'horizontal';

  return (
    <nav
      aria-label="Main navigation"
      className={isHorizontal ? 'hidden md:flex items-center gap-1' : 'flex flex-col'}
    >
      {NAV_LINKS.map((link) => {
        const isActive = location.pathname === link.path;

        return (
          <button
            key={link.path}
            type="button"
            onClick={() => handleClick(link.path)}
            className={`
              relative px-4 py-2 font-body text-sm font-medium transition-colors duration-200
              min-h-[44px] min-w-[44px]
              ${isHorizontal ? '' : 'w-full text-left text-lg py-3 px-6'}
              ${isActive
                ? 'text-brand-gold'
                : 'text-white hover:text-brand-gold'
              }
            `}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
            {isActive && isHorizontal && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-gold rounded-full" />
            )}
            {isActive && !isHorizontal && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-gold rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

export { NAV_LINKS };
