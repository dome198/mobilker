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
import { useContent } from "@/lib/useContent";

export default function VakuumformazasPage() {
  const { c } = useContent();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  const whyCards = [
    { icon: Layers, title: c("vakuum.why.card1.title"), desc: c("vakuum.why.card1.desc") },
    { icon: Clock, title: c("vakuum.why.card2.title"), desc: c("vakuum.why.card2.desc") },
    { icon: DollarSign, title: c("vakuum.why.card3.title"), desc: c("vakuum.why.card3.desc") },
    { icon: TrendingUp, title: c("vakuum.why.card4.title"), desc: c("vakuum.why.card4.desc") },
  ];

  const stats = [
    { number: c("vakuum.tech.stat1.number"), label: c("vakuum.tech.stat1.label") },
    { number: c("vakuum.tech.stat2.number"), label: c("vakuum.tech.stat2.label") },
    { number: c("vakuum.tech.stat3.number"), label: c("vakuum.tech.stat3.label") },
  ];

  const steps = [
    { number: "1", title: c("vakuum.process.step1.title"), desc: c("vakuum.process.step1.desc") },
    { number: "2", title: c("vakuum.process.step2.title"), desc: c("vakuum.process.step2.desc") },
    { number: "3", title: c("vakuum.process.step3.title"), desc: c("vakuum.process.step3.desc") },
    { number: "4", title: c("vakuum.process.step4.title"), desc: c("vakuum.process.step4.desc") },
  ];

  const projects = [
    { title: c("vakuum.ref.project1.title"), subtitle: c("vakuum.ref.project1.subtitle"), category: c("vakuum.ref.project1.category"), image: c("vakuum.ref.project1.image") },
    { title: c("vakuum.ref.project2.title"), subtitle: c("vakuum.ref.project2.subtitle"), category: c("vakuum.ref.project2.category"), image: c("vakuum.ref.project2.image") },
    { title: c("vakuum.ref.project3.title"), subtitle: c("vakuum.ref.project3.subtitle"), category: c("vakuum.ref.project3.category"), image: c("vakuum.ref.project3.image") },
  ];

  const materials = [
    { name: c("vakuum.materials.mat1.name"), properties: c("vakuum.materials.mat1.props") },
    { name: c("vakuum.materials.mat2.name"), properties: c("vakuum.materials.mat2.props") },
    { name: c("vakuum.materials.mat3.name"), properties: c("vakuum.materials.mat3.props") },
    { name: c("vakuum.materials.mat4.name"), properties: c("vakuum.materials.mat4.props") },
  ];

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
            {c("vakuum.hero.title")}
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">
              {c("vakuum.hero.title2")}
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12">
            {c("vakuum.hero.subtitle")}
          </p>
          <button className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300">
            {c("vakuum.hero.cta")}
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
          <source src={c("vakuum.video_url")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/30 to-[#0a0a0a]/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <motion.h2
              {...fadeInUp}
              className="text-6xl font-bold text-white mb-6"
            >
              {c("vakuum.video.title")}
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
            {c("vakuum.why.title")}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-center text-[#64748b] text-lg mb-16 max-w-3xl mx-auto"
          >
            {c("vakuum.why.desc")}
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCards.map((item, index) => (
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
            {c("vakuum.tech.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16 mb-20">
            {stats.map((stat, index) => (
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
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-16 text-center overflow-hidden"
          >
            {c("vakuum.tech.cnc_image") && (
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c("vakuum.tech.cnc_image")} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#0a0a0a]/75" />
              </div>
            )}
            <div className="relative z-10">
              <Settings className="w-24 h-24 text-[#00d4ff] mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                {c("vakuum.tech.cnc_title")}
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {c("vakuum.tech.cnc_desc")}
              </p>
            </div>
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
            {c("vakuum.process.title")}
          </motion.h2>

          <div className="space-y-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d4ff] to-[#0ea5e9] transform -translate-x-1/2 hidden md:block" />

            {steps.map((step, index) => (
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
            {c("vakuum.ref.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-pointer"
              >
                {project.image ? (
                  <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-[#00d4ff]/20 to-[#0ea5e9]/20 rounded-xl mb-6 flex items-center justify-center">
                    <Package className="w-16 h-16 text-[#00d4ff]" />
                  </div>
                )}
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
            {c("vakuum.materials.title")}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {materials.map((material, index) => (
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
            {c("vakuum.equipment.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => {
              const title = c(`vakuum.equipment.item${i}.title`);
              if (!title) return null;
              return (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                >
                  {c(`vakuum.equipment.item${i}.image`) && (
                    <div className="h-56 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c(`vakuum.equipment.item${i}.image`)} alt={title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {c(`vakuum.equipment.item${i}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9: CTA Form - Sötét gradient */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              {c("vakuum.form.title")}
            </h2>
            <p className="text-gray-400 text-lg">
              {c("vakuum.form.desc")}
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
              <p className="text-gray-400">{c("vakuum.footer.tagline")}</p>
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
                  <span>{c("vakuum.phone")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#00d4ff]" />
                  <span>{c("vakuum.email")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#00d4ff]" />
                  <span>{c("vakuum.address")}</span>
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
