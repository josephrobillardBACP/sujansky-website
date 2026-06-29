import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoImage from '@/assets/fixedlogo.png';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      if (location.pathname === basePath) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', path);
        }
      }
    } else if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  const serviceLinks = [
    { path: '/services#primary-care', label: 'Concierge Care' },
    { path: '/services#wellness', label: 'Concierge Plus' },
    { path: '/services#additional-services', label: 'Additional Services' }
  ];

  const aboutLinks = [
    { path: '/about', label: 'About Us', hash: '' },
    { path: '/team', label: 'Meet the Office' },
    { path: '/about#testimonials', label: 'Testimonials' }
  ];

  const linkBase = 'text-navy/80 hover:text-gold transition-colors duration-200 text-[17px] tracking-[0.08em] uppercase font-medium';
  const activeStyle = 'text-gold';

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_1px_3px_rgba(0,0,0,0.08)]' : ''}`}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-24 md:h-24">
          <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="shrink-0">
            <img
              src={logoImage}
              alt="Ulrike Sujansky, MD - Partnering in Your Health"
              className="h-16 sm:h-16 md:h-[3.45rem] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-14 xl:gap-16">
            <Link to="/" onClick={(e) => handleNavClick(e, '/')} className={`${linkBase} ${isActive('/') ? activeStyle : ''}`}>
              Home
            </Link>

            <Link to="/membership" onClick={(e) => handleNavClick(e, '/membership')} className={`${linkBase} ${isActive('/membership') ? activeStyle : ''}`}>
              Membership
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                onClick={(e) => handleNavClick(e, '/services')}
                className={`${linkBase} inline-flex items-center gap-1 ${isActive('/services') ? activeStyle : ''}`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 min-w-[240px]">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="block px-5 py-2.5 text-[16px] text-navy/70 hover:text-gold hover:bg-light-gray transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link
                to="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                className={`${linkBase} inline-flex items-center gap-1 ${isActive('/about') || isActive('/team') || isActive('/dr-sujansky') ? activeStyle : ''}`}
              >
                About Us
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
              </Link>
              {aboutOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 min-w-[210px]">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className="block px-5 py-2.5 text-[16px] text-navy/70 hover:text-gold hover:bg-light-gray transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" onClick={(e) => handleNavClick(e, '/blog')} className={`${linkBase} ${isActive('/blog') ? activeStyle : ''}`}>
              Blog
            </Link>

            <Link to="/contact" onClick={(e) => handleNavClick(e, '/contact')} className={`${linkBase} ${isActive('/contact') ? activeStyle : ''}`}>
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-navy p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-1 border-t border-gray-100">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[16px] font-medium text-navy hover:text-gold ${isActive('/') ? 'text-gold' : ''}`}>
              Home
            </Link>
            <Link to="/membership" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[16px] font-medium text-navy hover:text-gold ${isActive('/membership') ? 'text-gold' : ''}`}>
              Membership
            </Link>
            <div>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-[16px] font-medium text-navy hover:text-gold">
                Services
              </Link>
              <div className="pl-4 space-y-1 border-l border-gray-200 ml-2">
                {serviceLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={(e) => handleNavClick(e, link.path)} className="block py-1.5 text-[14px] text-navy/60 hover:text-gold">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[16px] font-medium text-navy hover:text-gold ${isActive('/about') || isActive('/team') || isActive('/dr-sujansky') ? 'text-gold' : ''}`}>
                About Us
              </Link>
              <div className="pl-4 space-y-1 border-l border-gray-200 ml-2">
                {aboutLinks.map((link) => (
                  <Link key={link.path} to={link.path} onClick={(e) => handleNavClick(e, link.path)} className="block py-1.5 text-[14px] text-navy/60 hover:text-gold">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[16px] font-medium text-navy hover:text-gold ${isActive('/blog') ? 'text-gold' : ''}`}>
              Blog
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[16px] font-medium text-navy hover:text-gold ${isActive('/contact') ? 'text-gold' : ''}`}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
