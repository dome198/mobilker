"use client";

import { useState } from "react";
import VacuumBackground from "@/components/background/VacuumBackground";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ClipboardCheck, Search, FileText, ArrowLeft, X } from "lucide-react";
import Link from "next/link";

export default function AutoVizsgaztatasPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      icon: ClipboardCheck,
      title: "Műszaki Vizsgáztatás",
      description: "Teljes körű műszaki vizsga lebonyolítása",
      hasModal: true,
      modalContent: {
        title: "Műszaki Vizsgáztatás",
        body: "Teljes körű műszaki vizsga lebonyolítása gyorsan és megbízhatóan.\n\nA vizsgálat tartalmazza a jármű teljes műszaki állapotfelmérését a hatályos jogszabályok szerint.\n\nÁr: 22 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.",
      },
    },
    {
      icon: Search,
      title: "Eredetiség Vizsgálat",
      description: "Gépjármű eredetiség ellenőrzése szakértői vizsgálattal",
      hasModal: true,
      modalContent: {
        title: "Eredetiség Vizsgálat",
        body: "Gépjármű eredetiség ellenőrzése szakértői vizsgálattal, hivatalos dokumentációval.\n\nA vizsgálat kiterjed a jármű alvázszámának, motorszámának és egyéb azonosítóinak ellenőrzésére.\n\nÁr: 45 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.",
      },
    },
    {
      icon: FileText,
      title: "Adminisztráció",
      description: "Komplett ügyintézés egy helyen",
      hasModal: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <VacuumBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Back button */}
        <Link href="/valaszto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center text-primary-cyan hover:text-primary-purple transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Vissza</span>
          </motion.div>
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold gradient-text mb-4">
            Autó Vizsgáztatás
          </h1>
          <p className="text-2xl text-gray-300">
            Megbízható • Gyors • Pontos
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => service.hasModal && setActiveModal(service.title)}
              className={`glass rounded-xl p-8 text-center hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)] transition-all duration-300 ${service.hasModal ? "cursor-pointer" : ""}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-10 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Elérhetőség
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                <p className="text-gray-400">+36 XX XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-purple" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">info@mobilker.hu</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-pink" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Helyszín</h3>
                <p className="text-gray-400">Vámospércs, Ady Endre u. 1, 4287</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl overflow-hidden h-96"
        >
          <iframe
            src="https://www.google.com/maps?q=Mobil-Ker+94+Kft,+Vámospércs,+Ady+Endre+u.+1,+4287&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mobil-Ker 94 Kft. térkép"
          />
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (() => {
          const service = services.find((s) => s.title === activeModal);
          if (!service?.modalContent) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setActiveModal(null)}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative glass rounded-2xl p-8 max-w-lg w-full border border-white/10"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-cyan to-blue-500 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {service.modalContent.title}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {service.modalContent.body}
                </p>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
