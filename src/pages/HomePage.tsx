import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import officeImageDesktop from '@/assets/hero-desktop-may1-2026.png';
import officeImageMobile from '@/assets/hero-mobile-may1-2026.png';
import contactOfficeImage from '@/assets/Gemini_Generated_Image_l6jcc5l6jcc5l6jc.png';
import drPortrait from '@/assets/Rika+in+brown+blouse (1).webp';
import shawnaPortrait from '@/assets/image-asset (4).webp';
import kimPortrait from '@/assets/Kim (1).webp';

function HomePage() {
  const teamMembers = [
    { name: 'Dr. Ulrike Sujansky', image: drPortrait, role: 'Physician', link: '/team#ulrike' },
    { name: 'Shawna G.', image: shawnaPortrait, role: 'Office Manager', link: '/team#shawna' },
    { name: 'Kim J.', image: kimPortrait, role: 'Medical Assistant', link: '/team#kim' }
  ];

  return (
    <>
      <Header />
      <main>
        {/* HERO - office building background */}
        <section className="relative flex min-h-[88vh] items-end overflow-hidden pb-12 pt-28 md:pb-20 md:pt-32">
          <div className="absolute inset-0 z-0">
            <picture>
              <source media="(max-width: 767px)" srcSet={officeImageMobile} />
              <img
                src={officeImageDesktop}
                alt="Dr. Ulrike Sujansky speaking with a patient"
                className="h-full w-full scale-[1.06] object-cover object-center md:scale-[1.08] md:object-[52%_30%]"
              />
            </picture>
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(93,72,24,0.26)_0%,rgba(126,98,35,0.18)_30%,rgba(255,227,158,0.14)_58%,rgba(255,248,222,0.04)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,216,128,0.26),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,244,209,0.18),transparent_30%)]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl"
            >
              <div className="pointer-events-none absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(circle_at_left_center,rgba(16,30,52,0.68)_0%,rgba(16,30,52,0.5)_34%,rgba(16,30,52,0.26)_60%,transparent_84%)] blur-2xl md:-inset-x-12 md:-inset-y-12" />
              <div className="mt-5 px-1 md:px-2">
                <Link
                  to="/contact"
                  className="mb-5 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-navy shadow-[0_10px_24px_rgba(15,23,42,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white sm:mb-6 sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  Inquire About Membership
                </Link>
                <h1 className="mb-2 text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_3px_18px_rgba(15,23,42,0.45)] md:text-[3.375rem] lg:text-[4.05rem]">
                  Ulrike Sujansky, M.D.
                </h1>
                <p className="hero-text mb-1 text-[2.025rem] font-medium italic leading-none tracking-[-0.02em] text-white/95 drop-shadow-[0_3px_16px_rgba(15,23,42,0.42)] md:text-[2.7rem]">
                  Concierge Medicine
                </p>
                <p className="hero-text mb-3 text-[2.025rem] font-medium italic leading-none text-white/95 drop-shadow-[0_3px_16px_rgba(15,23,42,0.42)] md:text-[2.7rem]">
                  San Mateo, CA
                </p>
                <div className="space-y-2 text-[1.125rem] text-white/95 drop-shadow-[0_2px_10px_rgba(15,23,42,0.45)] md:text-[1.35rem]">
                  <p className="hero-text flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-gold" />
                    34 North San Mateo Drive, Suite 1
                  </p>
                  <p className="hero-text flex items-center gap-2">
                    <Phone className="h-6 w-6 text-gold" />
                    <a href="tel:+16503935851" className="transition-opacity hover:opacity-80">(650) 393-5851</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="mb-6 text-[1.75rem] font-bold leading-snug tracking-tight text-navy md:text-[2rem]">What is Concierge Medicine?</h2>
                <p className="mb-4 text-[1.45rem] leading-[1.85] text-foreground/90">Concierge medicine represents a return to the traditional doctor-patient relationship, where your physician has the time to truly know you and your health needs. Through an annual membership, you gain direct access to Dr. Sujansky, same-day or next-day appointments, and comprehensive care that goes beyond the constraints of traditional insurance-based medicine.</p>
                <p className="mb-8 text-[1.45rem] leading-[1.85] text-foreground/90">This model allows for longer appointments, proactive health planning, and a genuine partnership in maintaining your wellbeing.</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-navy">
                  View Our Services <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-5 md:gap-y-7"
              >
                {[
                  { title: 'Direct Access', desc: '24/7 communication with your physician via phone or email.', accent: 'border-t-gold' },
                  { title: 'More Time', desc: 'Extended, unhurried visits to address all your concerns.', accent: 'border-t-gold' },
                  { title: 'Proactive Care', desc: 'Focus on prevention, wellness, and long-term health optimization.', accent: 'border-t-gold' },
                  { title: 'Coordination', desc: 'Seamless specialist referrals and hospital care management.', accent: 'border-t-gold' }
                ].map((card, i) => (
                  <div key={i} className={`flex flex-col border border-navy/70 border-t-[3px] bg-white p-4 md:p-4.5 ${i >= 2 ? 'translate-y-4 md:translate-y-5' : ''} ${card.accent}`}>
                    <h3 className="mb-2.5 text-[1.32rem] font-semibold leading-tight text-navy">{card.title}</h3>
                    <p className="text-[1.1rem] leading-6 text-foreground/85">{card.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-light-gray py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 text-center"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gold">Our Practice</p>
              <h3 className="text-[1.75rem] font-bold tracking-tight text-navy md:text-[2rem]">Meet Our Team</h3>
              <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group border border-navy/12 bg-white/80 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  <Link to={member.link} className="block">
                    <div className="mb-5 overflow-hidden border border-navy/15">
                      <img src={member.image} alt={`${member.name}, ${member.role}`} className="h-72 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                    </div>
                  </Link>
                  <div className="border-t border-gold/40 pt-4 text-center">
                    <p className="text-[1.2rem] font-semibold text-navy">{member.name}</p>
                    <p className="mt-1 text-[1rem] tracking-[0.08em] text-steely-blue">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/team" className="inline-flex items-center justify-center border border-navy px-14 py-5 text-xl font-semibold uppercase tracking-[0.16em] text-navy transition-colors duration-200 hover:bg-navy hover:text-white active:scale-[0.97]">
                Meet the Office
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 text-center"
            >
              <h2 className="text-[1.75rem] font-bold tracking-tight text-navy md:text-[2rem]">Get in Touch</h2>
              <p className="mt-2 text-sm text-foreground/60">We look forward to partnering in your health.</p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="order-3 space-y-6 lg:order-1"
              >
                <div className="h-[400px] overflow-hidden border border-navy/70">
                  <MapEmbed />
                </div>
                <div className="overflow-hidden border border-navy/70 bg-white">
                  <img
                    src={contactOfficeImage}
                    alt="Exterior of the Sujansky medical office"
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 border border-navy/70 bg-light-gray p-6 lg:order-2"
              >
                <h3 className="mb-5 border-b border-gray-200 pb-3 text-[1.45rem] font-semibold text-navy">Send a Message</h3>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="order-2 space-y-6 lg:order-3"
              >
                <div className="border border-navy/70 bg-white p-6">
                  <h4 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 font-semibold text-navy">
                    <MapPin className="h-4 w-4 text-gold" /> Contact Information
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-foreground/80">34 North San Mateo Drive<br />Suite 1<br />San Mateo, CA 94401</p>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-foreground/80"><Phone className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Phone:</span> (650) 393-5851</p>
                    <p className="flex items-center gap-2 text-sm text-foreground/80"><Mail className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Fax:</span> (650) 393-5871</p>
                  </div>
                </div>
                <div className="border border-navy/70 bg-white p-6">
                  <h4 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 font-semibold text-navy">
                    <Clock className="h-4 w-4 text-gold" /> Office Hours
                  </h4>
                  <div className="space-y-2.5 text-sm text-foreground/80">
                    <div className="flex justify-between"><span className="font-medium text-navy">Mon - Fri</span><span>9:00am - 5:00pm</span></div>
                    <div className="flex justify-between"><span className="font-medium text-navy">Sat - Sun</span><span className="text-foreground/50">Closed</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
