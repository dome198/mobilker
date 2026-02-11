"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Layers,
  Clock,
  DollarSign,
  TrendingUp,
  Settings,
  Package,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VakuumformazasPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Back button */}
      <Link href="/valaszto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-8 left-8 inline-flex items-center text-[#00d4ff] hover:text-white transition-colors cursor-pointer z-50 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Vissza</span>
        </motion.div>
      </Link>

      {/* Section 1: Hero - Sötét gradient */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-white">
            Vákuumformázás
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">
              Új Dimenzióban
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            15+ év tapasztalat • 500+ projekt • CNC precizitás
          </p>
          <button className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
            Ingyenes Konzultáció
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-[#00d4ff]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Video Hero - Sötét + videó */}
      <section className="relative h-[80vh] overflow-hidden bg-[#0a0a0a]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/veo-studio-creation-compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <motion.h2
              {...fadeInUp}
              className="text-6xl font-bold text-white mb-6"
            >
              Lásd Működés Közben
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Section 3: Services - VILÁGOS */}
      <section className="py-32 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-4 text-[#1e293b]"
          >
            Miért Válaszd a Vákuumformázást?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-center text-[#64748b] text-lg mb-16 max-w-3xl mx-auto"
          >
            A vákuumformázás rugalmas, költséghatékony megoldás bármilyen méretű projekthez
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Layers,
                title: "Sokféle Termék",
                desc: "Csomagolás, burkolat, doboz – bármilyen forma"
              },
              {
                icon: Clock,
                title: "Rövid Gyártási Idő",
                desc: "Egyszerre több termék is készülhet"
              },
              {
                icon: DollarSign,
                title: "Alacsony Szerszámköltség",
                desc: "Gazdaságosabb mint a fröccsöntés"
              },
              {
                icon: TrendingUp,
                title: "Kis Sorozat",
                desc: "Már 10 darabtól megéri"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{item.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technology - Sötét */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            Technológia
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16 mb-20">
            {[
              { number: "±0.1mm", label: "Pontosság" },
              { number: "4-5", label: "Tengelyes CNC" },
              { number: "ISO", label: "Minősítés" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-16 text-center"
          >
            <Settings className="w-24 h-24 text-[#00d4ff] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              CNC Vezérelt Precizitás
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              4 és 5 tengelyes CNC marógépeink bármilyen forma megmunkálását képesek elvégezni
              a legmagasabb precizitással.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Process - VILÁGOS */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-20 text-[#1e293b]"
          >
            Hogyan Dolgozunk?
          </motion.h2>

          <div className="space-y-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d4ff] to-[#0ea5e9] transform -translate-x-1/2 hidden md:block" />

            {[
              { number: "1", title: "Konzultáció", desc: "Megbeszéljük az elképzeléseket" },
              { number: "2", title: "Tervezés", desc: "CAD modellezés és szerszámtervezés" },
              { number: "3", title: "Gyártás", desc: "CNC marás és vákuumformázás" },
              { number: "4", title: "Szállítás", desc: "Minőségellenőrzés és csomagolás" },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 bg-[#f8fafc] rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{step.title}</h3>
                  <p className="text-[#64748b]">{step.desc}</p>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 relative z-10">
                  {step.number}
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Projects - Sötét */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            Referenciák
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hét Próba", subtitle: "Csillagösvény", category: "Játék kellék" },
              { title: "Honfoglaló", subtitle: "Kiállítási elem", category: "Múzeum" },
              { title: "Őseink Nyomában", subtitle: "Interaktív kiállítás", category: "Oktatás" },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-full h-48 bg-gradient-to-br from-[#00d4ff]/20 to-[#0ea5e9]/20 rounded-xl mb-6 flex items-center justify-center">
                  <Package className="w-16 h-16 text-[#00d4ff]" />
                </div>
                <div className="text-sm text-[#00d4ff] mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400">{project.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Materials - VILÁGOS */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-[#1e293b]"
          >
            Anyagok
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "ABS", properties: "Ütésálló, tartós" },
              { name: "PETG", properties: "Áttetsző, erős" },
              { name: "PS", properties: "Gazdaságos" },
              { name: "PC", properties: "Hőálló, prémium" },
            ].map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-3">
                  {material.name}
                </div>
                <p className="text-[#64748b]">{material.properties}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Machines - Sötét */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            Gépparkunk
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeInUp}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Vákuumszívó Gépek</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Többféle méretben és részben vagy teljesen automatizáltan végzik a feladatukat.
                Precíz, megbízható gépek a tökéletes eredményért.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10"
            >
              <h3 className="text-3xl font-bold text-white mb-4">CNC Marógépek</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                4 és 5 tengelyes CNC vezérelt marógépeink bármilyen forma megmunkálását képesek
                elvégezni a legmagasabb pontossággal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Form - Sötét gradient */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Kérj Ingyenes Árajánlatot
            </h2>
            <p className="text-gray-400 text-lg">
              Küldd el az elképzeléseidet és hamarosan felvesszük veled a kapcsolatot!
            </p>
          </motion.div>

          <motion.form
            {...fadeInUp}
            className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10"
          >
            <input
              type="text"
              placeholder="Név"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none focus:border-[#00d4ff] transition-colors placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none focus:border-[#00d4ff] transition-colors placeholder:text-gray-500"
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none focus:border-[#00d4ff] transition-colors placeholder:text-gray-500"
            />
            <textarea
              placeholder="Projekt leírása"
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none focus:border-[#00d4ff] transition-colors placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
            >
              Küldés
            </button>
          </motion.form>
        </div>
      </section>

      {/* Section 10: Footer - Nagyon sötét */}
      <footer className="py-16 px-6 bg-[#050508] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Mobilker</h3>
              <p className="text-gray-400">Vákuumformázás szakértők</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Linkek</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#00d4ff] transition-colors cursor-pointer">Referenciák</li>
                <li className="hover:text-[#00d4ff] transition-colors cursor-pointer">Gépparkunk</li>
                <li className="hover:text-[#00d4ff] transition-colors cursor-pointer">Kapcsolat</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Elérhetőség</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#00d4ff]" />
                  <span>+36 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#00d4ff]" />
                  <span>info@mobilker.hu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#00d4ff]" />
                  <span>Budapest, [Cím]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            © 2026 Mobilker. Minden jog fenntartva.
          </div>
        </div>
      </footer>
    </div>
  );
}
