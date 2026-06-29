import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import PageSectionHeader from '@/components/PageSectionHeader';
import contactOfficeImage from '@/assets/Gemini_Generated_Image_l6jcc5l6jcc5l6jc.png';

function ContactPage() {
  return (
    <>
      <Header />
      <main className="py-12 bg-light-gray min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageSectionHeader title="Contact Us" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="order-3 space-y-6 lg:order-1 lg:col-span-1">
              <div className="h-[420px] overflow-hidden shadow-sm border border-navy/70 bg-white">
                <MapEmbed />
              </div>
              <div className="overflow-hidden shadow-sm border border-navy/70 bg-white">
                <img
                  src={contactOfficeImage}
                  alt="Exterior of the Sujansky medical office"
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="order-1 lg:order-2 lg:col-span-1">
              <div className="h-full border border-navy/70 bg-light-gray p-6 md:p-8 shadow-sm">
                <h2 className="mb-5 border-b border-gray-200 pb-3 text-[2rem] font-semibold text-navy">Send a Message</h2>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="order-2 space-y-6 lg:order-3 lg:col-span-1">
              <div className="border border-navy/70 bg-white p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 text-[2rem] font-semibold text-navy"><MapPin className="h-4 w-4 text-gold" /> Contact Information</h3>
                <p className="mb-4 text-sm leading-relaxed text-foreground/80">34 North San Mateo Drive<br />Suite 1<br />San Mateo, CA 94401</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 text-sm text-foreground/80"><Phone className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Phone:</span> (650) 393-5851</p>
                  <p className="flex items-center gap-2 text-sm text-foreground/80"><Mail className="h-3.5 w-3.5 text-steely-blue" /><span className="font-medium text-navy">Fax:</span> (650) 393-5871</p>
                </div>
              </div>
              <div className="border border-navy/70 bg-white p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 text-[2rem] font-semibold text-navy"><Clock className="h-4 w-4 text-gold" /> Office Hours</h3>
                <div className="space-y-2.5 text-sm text-foreground/80">
                  <div className="flex justify-between"><span className="font-medium text-navy">Mon - Fri</span><span>9:00am - 5:00pm</span></div>
                  <div className="flex justify-between"><span className="font-medium text-navy">Sat - Sun</span><span className="text-foreground/50">Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
