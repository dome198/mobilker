"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Gauge,
  Ruler,
  Weight,
  Wind,
  Shield,
  Wrench,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AknaperemEmeloPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  const specs = [
    { icon: Gauge, label: "Max terhelhetőség", value: "40 kN (4000 kg)" },
    { icon: Ruler, label: "Emelési magasság", value: "480 mm" },
    { icon: Wrench, label: "Állítható fesztáv", value: "700–850 mm" },
    { icon: Weight, label: "Teljes tömeg", value: "75 kg" },
    { icon: Wind, label: "Ajánlott légnyomás", value: "6–8 bár" },
    { icon: Shield, label: "Tanúsítvány", value: "CE (2006/42/EK)" },
  ];

  const features = [
    {
      title: "Kézi működtetés",
      desc: "A kézi kar folyamatos pumpálásával a munkahenger dugattyúja emelkedik. A leeresztés sebessége a szelep nyitásával szabályozható.",
    },
    {
      title: "Pneumatikus működtetés",
      desc: "A levegő csatlakozón található szelep megnyomásával működésbe jön a pneumatikus pumpa. Leeresztés kézi szeleppel, szabályozható sebességgel.",
    },
    {
      title: "Állítható szélesség",
      desc: "Az állítható kocsinak köszönhetően 750–990 mm szélességben használható bármely szabványos szerelőaknán.",
    },
    {
      title: "Keresztkocsi",
      desc: "Az emelő hídon elhelyezett keresztkocsi nem csak középről, hanem oldalról történő emelést is biztosít.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Back button */}
      <Link href="/egyedi-gepek">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-8 left-8 inline-flex items-center text-[#00d4ff] hover:text-white transition-colors cursor-pointer z-50 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Vissza</span>
        </motion.div>
      </Link>

      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-white">
            Aknaperem
            <br />
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent">
              Emelő
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">
            MOBIL-E -4
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Szerelőaknára telepíthető, kézi és pneumatikus működtetésű emelő gépjárművek javításához
          </p>
          <a
            href="#kapcsolat"
            className="bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 inline-block"
          >
            Ajánlatot Kérek
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-8 h-8 text-[#00d4ff]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: Product Image + Description */}
      <section className="py-32 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-[#1e293b]"
          >
            A Termék
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <Image
                src="/aknaperem-emelo.jpg"
                alt="MOBIL-E -4 Aknaperem emelő"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <p className="text-lg text-[#475569] leading-relaxed">
                Az aknaperem emelő személy- és kisteher járművek javításával foglalkozó szervizekben,
                javító műhelyekben szabványosan kialakított szerelőaknára telepíthető.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed">
                Az állítható kocsinak köszönhetően <strong>750–990 mm</strong> szélességben használható.
                Az emelő hídon elhelyezett keresztkocsinak köszönhetően nem csak középről történő emelés biztosított.
              </p>
              <p className="text-lg text-[#475569] leading-relaxed">
                Maximálisan <strong>40 kN (4000 kg)</strong> terhelhető. Kézi és pneumatikus működtetésű
                munkahengerrel rendelkezik.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 text-[#0284c7] px-4 py-2 rounded-lg text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  CE megfelelőségi tanúsítvány (2006/42/EK)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Specs - Dark */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            Műszaki Adatok
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <spec.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-2">
                  {spec.value}
                </div>
                <div className="text-gray-400">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Features - Light */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-20 text-[#1e293b]"
          >
            Működési Jellemzők
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#f8fafc] rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{feature.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Installation Diagram - Dark */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-6 text-white"
          >
            Telepítési Megoldás
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
          >
            Az emelő beton aknafalra telepíthető az aknadeszka alá, két különböző konfigurációban
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <Image
              src="/aknaperem-megoldasok.png"
              alt="Aknaperem emelő telepítési megoldások - beton akna fal és aknadeszka"
              width={1654}
              height={2339}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 6: Dimensions - Light */}
      <section className="py-32 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-5xl font-bold text-center mb-6 text-[#1e293b]"
          >
            Méretrajz
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-center text-[#64748b] text-lg mb-16 max-w-2xl mx-auto"
          >
            Részletes műszaki rajz a pontos méretekkel
          </motion.p>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-2xl mb-12"
          >
            <Image
              src="/aknaperem-meretek.png"
              alt="Aknaperem emelő méretrajz - 400x285x224mm"
              width={1653}
              height={2339}
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-2">
                400 mm
              </div>
              <div className="text-[#64748b]">Szélesség</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-2">
                285 mm
              </div>
              <div className="text-[#64748b]">Magasság</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] bg-clip-text text-transparent mb-2">
                320 mm
              </div>
              <div className="text-[#64748b]">Belső szélesség</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-sm text-[#94a3b8] mb-1">Kocsi tömege</div>
              <div className="text-xl text-[#1e293b] font-semibold">50 kg</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-sm text-[#94a3b8] mb-1">Hidraulika tömege</div>
              <div className="text-xl text-[#1e293b] font-semibold">15 kg</div>
            </div>
          </div>

          <p className="text-[#94a3b8] text-sm mt-8 text-center">
            Az akna szélességének eltérése a működési hosszban nem haladhatja meg az 5 mm-t.
            Az akna peremének minimum 40 mm széles futófelülettel kell rendelkezni.
          </p>
        </div>
      </section>

      {/* Section 7: CTA + Contact */}
      <section id="kapcsolat" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Érdeklődés
            </h2>
            <p className="text-gray-400 text-lg">
              Kérjen ajánlatot vagy érdeklődjön az aknaperem emelőről!
            </p>
          </motion.div>

          <motion.form
            {...fadeInUp}
            className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-16"
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
              placeholder="Üzenet"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none focus:border-[#00d4ff] transition-colors placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0ea5e9] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300"
            >
              Küldés
            </button>
          </motion.form>

          <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Phone className="w-6 h-6 text-[#00d4ff] mx-auto mb-3" />
              <p className="text-gray-400 text-sm">+36 20 975 1333</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <Mail className="w-6 h-6 text-[#00d4ff] mx-auto mb-3" />
              <p className="text-gray-400 text-sm">andras@mobilker94.hu</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <MapPin className="w-6 h-6 text-[#00d4ff] mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Vámospércs, Ady Endre u. 1, 4287</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#050508] border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          © 2026 Mobilker. Minden jog fenntartva.
        </div>
      </footer>
    </div>
  );
}
