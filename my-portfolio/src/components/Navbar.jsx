import { useEffect, useState } from 'react';
import { Button, Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Articles', to: '/articles' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <HeroNavbar isBordered maxWidth="xl" className="site-navbar" classNames={{ wrapper: 'navbar-inner' }}>
      <NavbarBrand>
        <Link className="brand-lockup" to="/" onClick={closeMenu} aria-label="Soumya Mukherjee, home">
          <span className="brand-mark">s<span>.</span></span>
          <span className="brand-name">soumya<span>mukherjee</span></span>
        </Link>
      </NavbarBrand>

      <NavbarContent className="desktop-nav" justify="center">
        {links.map(({ label, to }) => (
          <NavbarItem key={to}>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end={to === '/'} to={to}>
              {label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="nav-actions">
        <Button
          isIconOnly
          variant="flat"
          className="theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'bright' : 'dark'} mode`}
          onPress={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
        <Button
          as={Link}
          to="/about"
          size="sm"
          radius="full"
          className="nav-contact"
          endContent={<ArrowUpRight size={14} />}
          onPress={closeMenu}
        >
          Let&apos;s talk
        </Button>
        <Button
          isIconOnly
          variant="flat"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onPress={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </NavbarContent>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(({ label, to }, index) => (
            <NavLink
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
              end={to === '/'}
              key={to}
              onClick={closeMenu}
              style={{ '--menu-index': index }}
              to={to}
            >
              <span>0{index + 1}</span>{label}<ArrowUpRight size={16} />
            </NavLink>
          ))}
          <span className="mobile-menu-note">Machine learning, made useful.</span>
        </div>
      )}
    </HeroNavbar>
  );
}
