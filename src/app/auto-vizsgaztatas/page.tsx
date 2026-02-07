"use client";

import VacuumBackground from "@/components/background/VacuumBackground";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ClipboardCheck, Wrench, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AutoVizsgaztatasPage() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Műszaki Vizsgáztatás",
      description: "Teljes körű műszaki vizsga lebonyolítása",
    },
    {
      icon: Wrench,
      title: "Elővizsgálat",
      description: "Részletes előzetes vizsgálat a sikeres átadáshoz",
    },
    {
      icon: FileText,
      title: "Adminisztráció",
      description: "Komplett ügyintézés egy helyen",
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
              className="glass rounded-xl p-8 text-center hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)] transition-all duration-300"
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
                <p className="text-gray-400">Budapest, [Cím]</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-8 h-96 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary-cyan mx-auto mb-4" />
            <p className="text-gray-400">Google Maps integráció helye</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
