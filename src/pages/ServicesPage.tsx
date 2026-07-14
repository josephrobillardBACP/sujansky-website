import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import PageSectionHeader from '@/components/PageSectionHeader';
import primaryImage from '@/assets/Rika+with+Jennifer (1).webp';
import preventativeImage from '@/assets/notttwide.jpg';

function ServiceSectionHeader({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy">{title}</h2>
      <div className="mt-3 h-1 w-16 bg-gold" />
    </div>
  );
}

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const primaryCareServices = [
    <>
      <strong>Direct communication</strong> by personal phone support after hours and same-day or next-day email support
    </>,
    <>
      <strong>Limited number of patients</strong> that allows for <strong>longer appointments</strong> and expedited scheduling
    </>,
    <>
      <strong>Executive-style</strong> physical with <strong>thorough guidance</strong> through history review, screening data, and follow-up
    </>,
    <>
      <strong>EKG screening</strong> and <strong>concise individualized</strong> body composition evaluation for more tailored counseling
    </>,
    <>
      <strong>Pulmonary function testing</strong> to assess lung health and respiratory performance
    </>,
    <>
      <strong>Preventive planning</strong>, routine immunizations, travel medicine, and well-woman care as appropriate
    </>,
    <>
      <strong>In-office testing</strong> including urinalysis, rapid strep testing, and tuberculosis screening when indicated
    </>,
    <>
      <strong>Specialist</strong> and <strong>hospital coordination</strong> to support <strong>seamless</strong> transitions in care
    </>,
    <>
      <strong>Home visits</strong> within 10 miles for patients who are unable to travel to the office
    </>,
    <>
      Access to our <strong>Travel Medicine</strong> program (see Additional Services below)
    </>,
  ];

  const wellnessServices = [
    'Everything included in the Concierge Care package',
    '__SUBHEAD_AS_WELL_AS__',
    'Polygenic DNA tests and risk scores',
    'Microbiome diagnostic',
    'Complimentary home IV therapy (2x per year)',
  ];

  return (
    <>
      <Header />
      <main className="bg-light-gray pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <PageSectionHeader title="Services" />
        </div>

        <section id="primary-care" className="scroll-mt-24">
          <ServiceSectionHeader title="Concierge Care" />
          <div className="max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 md:mb-32">
            <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10 border border-gray-300 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Core Offering</p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">Comprehensive Care</h3>
                  <p className="text-[26px] leading-[3.2rem] text-foreground/90">
                    Our Concierge Care offering begins with an annual executive physical that includes a thorough review of your personal and family history, physical exam, screening test data, and follow-up communications that help guide health care decisions. From there, the practice is built around direct communication, longer visits, preventive planning, and close coordination that support more personalized and responsive care.
                  </p>
                </div>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={primaryImage}
                    alt="Doctor and patient consultation"
                    className="h-72 w-full object-cover md:h-80"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard title="What We Offer" items={primaryCareServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="wellness" className="relative scroll-mt-24 border-t border-navy/15 bg-[linear-gradient(to_bottom,rgba(20,36,74,0.03),rgba(20,36,74,0)_120px)] pt-16 md:pt-20">
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 border border-[#c9a84c]/40 bg-[#fdf8ee] px-14 py-7 shadow-[0_6px_32px_rgba(180,140,60,0.15)]">
              <div className="flex items-center gap-4 w-full">
                <span className="h-px flex-1 bg-[#c9a84c]/40" />
                <p className="text-2xl font-semibold uppercase tracking-[0.28em] text-[#a8882e]">Coming Soon</p>
                <span className="h-px flex-1 bg-[#c9a84c]/40" />
              </div>
              <p className="text-sm tracking-wide text-[#8a7040]/70">This program is currently in development</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[9] bg-white/30 backdrop-blur-[2px]" />
          <ServiceSectionHeader title="Concierge Plus" />
          <div className="max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8 md:mb-32">
            <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10 border border-gray-300 bg-white p-8 shadow-sm">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Advanced Prevention</p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-navy">A More Proactive Approach</h3>
                  <p className="text-[26px] leading-[3.2rem] text-foreground/90">
                    Our Concierge Plus offering is an enhanced program designed for patients who want to take a proactive approach to their long-term health. It focuses on advanced diagnostics and early detection to help you stay ahead of potential health concerns.
                  </p>
                </div>
                <div className="overflow-hidden border border-navy/70 bg-white shadow-sm">
                  <img
                    src={preventativeImage}
                    alt="Concierge Plus care"
                    className="h-72 w-full object-cover md:h-80"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard title="What We Offer" items={wellnessServices} />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="additional-services" className="scroll-mt-24 border-t border-navy/15 bg-[linear-gradient(to_bottom,rgba(20,36,74,0.03),rgba(20,36,74,0)_120px)] pt-16 md:pt-20">
          <ServiceSectionHeader title="Additional Services" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14 scroll-mt-32"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col border border-gray-300 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 border-b border-gray-200 pb-3 text-[2.2rem] font-semibold tracking-tight text-navy">Travel Kits</h3>
                  <p className="text-[26px] leading-[3.2rem] text-foreground/90">
                    Our Travel Medicine program prepares you for international travel with personalized health planning, destination-specific vaccinations, prescription medications, and a curated travel health kit.
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-semibold text-gold">
                    <span className="h-px w-4 bg-gold/60" />
                    <span className="uppercase tracking-[0.14em]">See below to request</span>
                  </div>
                </div>
                <div className="flex flex-col border border-gray-300 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 border-b border-gray-200 pb-3 text-[2.2rem] font-semibold tracking-tight text-navy">On-Demand Nursing</h3>
                  <p className="text-[26px] leading-[3.2rem] text-foreground/90">
                    When additional support is needed, we can help arrange concierge private duty nursing through Luminate Wellness &amp; Recovery. We coordinate setup for flexible day, night, and live-in shifts for short-term recovery or ongoing care, including medication administration, wound care, vital sign monitoring, IV vitamin and hydration therapy, and physician coordination. Discreet home visits and hotel-based care are also available.
                  </p>
                </div>
                <div className="flex flex-col border border-gray-300 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 border-b border-gray-200 pb-3 text-[2.2rem] font-semibold tracking-tight text-navy">Partnerships</h3>
                  <p className="text-[26px] leading-[3.2rem] text-foreground/90">
                    We can help connect patients with trusted specialists, allied health professionals, and other supportive care partners as needed.
                  </p>
                </div>
              </div>

              {/* Travel Kit CTA */}
              <div>
                <div className="mt-6 border border-gold/35 bg-[linear-gradient(135deg,rgba(184,142,63,0.06),rgba(255,255,255,0.95))] px-8 py-7 shadow-sm">
                  <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Planning a Trip?</p>
                    <p className="text-[17px] leading-8 text-foreground/80 max-w-2xl">
                      If you are a current patient preparing for a trip, please complete the form around three weeks in advance. Prospective patients interested in a travel kit are also welcome to reach out.
                    </p>
                    <a
                      href="https://travel.blueangelclinical.com/intake.html?practice=sujansky"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex min-w-[200px] justify-center border border-navy bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(20,36,74,0.12)] transition-colors duration-200 hover:bg-white hover:text-navy"
                    >
                      Request a Travel Kit
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage;
