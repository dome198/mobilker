"use client";

import VacuumBackground from "@/components/background/VacuumBackground";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Layers,
  Clock,
  DollarSign,
  TrendingUp,
  Settings,
  CheckCircle,
  Package,
  Truck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function VakuumformazasPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen">
      <VacuumBackground />

      <div className="relative z-10">
        {/* Back button */}
        <Link href="/valaszto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-8 left-8 inline-flex items-center text-primary-cyan hover:text-primary-purple transition-colors cursor-pointer z-50 glass px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Vissza</span>
          </motion.div>
        </Link>

        {/* Section 1: Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl"
          >
            <h1 className="text-8xl font-bold mb-6">
              Vákuumformázás
              <br />
              <span className="gradient-text">Új Dimenzióban</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12">
              15+ év tapasztalat • 500+ projekt • CNC precizitás
            </p>
            <Button>Ingyenes Konzultáció</Button>
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
              <ChevronDown className="w-8 h-8 text-primary-cyan" />
            </motion.div>
          </motion.div>
        </section>

        {/* Section 2: Why Vacuum */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-16 gradient-text"
            >
              Miért Válaszd a Vákuumformázást?
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card icon={Layers} title="Sokféle Termék">
                Csomagolás, burkolat, doboz – bármilyen forma elkészíthető
              </Card>
              <Card icon={Clock} title="Rövid Gyártási Idő">
                Mérettől függően egyszerre több termék is készülhet
              </Card>
              <Card icon={DollarSign} title="Alacsony Szerszámköltség">
                Lényegesen gazdaságosabb, mint a fröccsöntés
              </Card>
              <Card icon={TrendingUp} title="Kis Sorozat is Gazdaságos">
                Már 10 darabtól megéri a gyártás
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Technology */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-16 gradient-text"
            >
              Technológia
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <StatCard number="±0.1mm" label="Pontosság" />
              <StatCard number="4-5" label="Tengelyes CNC" />
              <StatCard number="ISO" label="Minősítés" />
            </div>

            <motion.div
              {...fadeInUp}
              className="glass rounded-3xl p-16 text-center"
            >
              <Settings className="w-24 h-24 text-primary-cyan mx-auto mb-6" />
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

        {/* Section 4: Process */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-20 gradient-text"
            >
              Hogyan Dolgozunk?
            </motion.h2>

            <div className="space-y-16 relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-cyan via-primary-purple to-primary-pink transform -translate-x-1/2 hidden md:block" />

              {[
                {
                  number: "1",
                  title: "Konzultáció",
                  description: "Megbeszéljük az elképzeléseket és igényeket",
                },
                {
                  number: "2",
                  title: "Tervezés",
                  description: "CAD modellezés és szerszámtervezés",
                },
                {
                  number: "3",
                  title: "Gyártás",
                  description: "CNC marás és vákuumformázás",
                },
                {
                  number: "4",
                  title: "Szállítás",
                  description: "Minőségellenőrzés és csomagolás",
                },
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
                  <div className="flex-1 glass rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  <div className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-purple rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 relative z-10">
                    {step.number}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Projects/References */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-primary-pink/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-16 gradient-text"
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
                  whileHover={{ y: -8 }}
                  className="glass rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_20px_60px_rgba(236,72,153,0.3)]"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary-cyan/20 to-primary-purple/20 rounded-xl mb-6 flex items-center justify-center">
                    <Package className="w-16 h-16 text-primary-cyan" />
                  </div>
                  <div className="text-sm text-primary-cyan mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400">{project.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Materials */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-16 gradient-text"
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
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,240,255,0.2)]"
                >
                  <div className="text-4xl font-bold gradient-text mb-3">{material.name}</div>
                  <p className="text-gray-400">{material.properties}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Machines */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-primary-purple/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="text-5xl font-bold text-center mb-16 gradient-text"
            >
              Gépparkunk
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeInUp} className="glass rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Vákuumszívó Gépek</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Többféle méretben és részben vagy teljesen automatizáltan végzik a feladatukat.
                  Precíz, megbízható gépek a tökéletes eredményért.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} className="glass rounded-2xl p-10">
                <h3 className="text-3xl font-bold text-white mb-4">CNC Marógépek</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  4 és 5 tengelyes CNC vezérelt marógépeink bármilyen forma megmunkálását képesek
                  elvégezni a legmagasabb pontossággal.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: CTA Form */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan/10 via-primary-purple/10 to-primary-pink/10" />

          <div className="max-w-2xl mx-auto relative">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-5xl font-bold gradient-text mb-4">
                Kérj Ingyenes Árajánlatot
              </h2>
              <p className="text-gray-400 text-lg">
                Küldd el az elképzeléseidet és hamarosan felvesszük veled a kapcsolatot!
              </p>
            </motion.div>

            <motion.form {...fadeInUp} className="space-y-6 glass rounded-2xl p-10">
              <Input placeholder="Név" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Telefon" />
              <Input multiline rows={5} placeholder="Projekt leírása" />
              <Button className="w-full">Küldés</Button>
            </motion.form>
          </div>
        </section>

        {/* Section 9: Footer */}
        <footer className="py-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16 mb-12">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-4">Mobilker</h3>
                <p className="text-gray-400">Vákuumformázás szakértők</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Linkek</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-primary-cyan transition-colors cursor-pointer">Referenciák</li>
                  <li className="hover:text-primary-cyan transition-colors cursor-pointer">Gépparkunk</li>
                  <li className="hover:text-primary-cyan transition-colors cursor-pointer">Kapcsolat</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Elérhetőség</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-primary-cyan" />
                    <span>+36 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary-purple" />
                    <span>info@mobilker.hu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary-pink" />
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
    </div>
  );
}
