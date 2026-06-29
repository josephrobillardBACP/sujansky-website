import { Link } from 'react-router-dom';
import { MapPin, Phone, FileText, Star, HeartPulse, Stethoscope, Users, Newspaper, Mail } from 'lucide-react';
import logoImage from '@/assets/lgogtrans.png';

function Footer() {
  const navigationItems = [
    { to: '/membership', label: 'Membership', icon: HeartPulse },
    { to: '/services', label: 'Services', icon: Stethoscope },
    { to: '/about', label: 'About Us', icon: Users },
    { to: '/blog', label: 'Blog', icon: Newspaper },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <footer className="border-t border-navy/12 bg-[#f8f6f1]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.72fr_0.78fr] md:gap-8">
          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Our Office
            </p>
            <div className="space-y-3 text-[15px] leading-6.5 text-navy/80">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <span>
                  34 North San Mateo Drive
                  <br />
                  Suite 1
                  <br />
                  San Mateo, CA 94401
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Phone:</span> <a href="tel:+16503935851" className="hover:underline">(650) 393-5851</a>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="font-medium text-navy">Fax:</span> (650) 393-5871
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Navigation
            </p>
            <nav className="flex flex-col items-start gap-3">
              {navigationItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Reviews
            </p>
            <div className="space-y-2.5">
              <a
                href="https://www.google.com/maps/place/Ulrike+Sujansky,+MD/@37.568004,-122.3289013,796m/data=!3m1!1e3!4m8!3m7!1s0x808f9e76eab22fc9:0x16272bd44374ea91!8m2!3d37.568004!4d-122.326321!9m1!1b1!16s%2Fg%2F11bv33mb38?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
              >
                <Star className="h-4 w-4 text-gold" />
                Google Reviews
              </a>
              <br />
              <a
                href="https://www.yelp.com/biz/ulrike-sujansky-md-san-mateo?osq=Ulrike+Sujansky+MD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[15px] text-navy/78 transition-colors duration-200 hover:text-gold"
              >
                <Star className="h-4 w-4 text-gold" />
                Yelp Reviews
              </a>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src={logoImage}
                alt="Ulrike Sujansky, MD"
                className="h-12 w-auto object-contain md:h-14"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2.5 border-t border-navy/12 pt-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] tracking-[0.08em] text-navy/56">
            Copyright {new Date().getFullYear()} Ulrike Sujansky MD Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-[12px] tracking-[0.08em] text-navy/56">
            <Link to="/privacy-policy" className="transition-colors hover:text-navy">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-navy">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
