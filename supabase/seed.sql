-- Mobilker CMS seed data
-- Run this after migration.sql to populate with default content

INSERT INTO mobilker_content (key, value) VALUES
  -- Global
  ('global.logo_url', 'https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/mobilker-logo-removebg-preview.png'),
  ('global.tagline', 'Vákuumformázás & Autó Vizsgáztatás'),

  -- Autó elérhetőség
  ('auto.phone', '+36 XX XXX XXXX'),
  ('auto.email', 'info@mobilker.hu'),
  ('auto.address', 'Vámospércs, Ady Endre u. 1, 4287'),

  -- Vákuum elérhetőség
  ('vakuum.phone', '+36 XX XXX XXXX'),
  ('vakuum.email', 'info@mobilker.hu'),
  ('vakuum.address', 'Budapest, [Cím]'),

  -- Auto Vizsgáztatás
  ('auto.hero.title', 'Autó Vizsgáztatás'),
  ('auto.hero.subtitle', 'Megbízható • Gyors • Pontos'),
  ('auto.service1.title', 'Műszaki Vizsgáztatás'),
  ('auto.service1.description', 'Teljes körű műszaki vizsga lebonyolítása'),
  ('auto.service1.modal_body', E'Teljes körű műszaki vizsga lebonyolítása gyorsan és megbízhatóan.\n\nA vizsgálat tartalmazza a jármű teljes műszaki állapotfelmérését a hatályos jogszabályok szerint.\n\nÁr: 22 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.'),
  ('auto.service2.title', 'Eredetiség Vizsgálat'),
  ('auto.service2.description', 'Gépjármű eredetiség ellenőrzése szakértői vizsgálattal'),
  ('auto.service2.modal_body', E'Gépjármű eredetiség ellenőrzése szakértői vizsgálattal, hivatalos dokumentációval.\n\nA vizsgálat kiterjed a jármű alvázszámának, motorszámának és egyéb azonosítóinak ellenőrzésére.\n\nÁr: 45 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.'),
  ('auto.service3.title', 'Adminisztráció'),
  ('auto.service3.description', 'Komplett ügyintézés egy helyen'),

  -- Vákuumformázás - Hero
  ('vakuum.hero.title', 'Vákuumformázás'),
  ('vakuum.hero.title2', 'Új Dimenzióban'),
  ('vakuum.hero.subtitle', '15+ év tapasztalat • 500+ projekt • CNC precizitás'),
  ('vakuum.hero.cta', 'Ingyenes Konzultáció'),
  ('vakuum.video_url', 'https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/veo-studio-creation-compressed.mp4'),
  ('vakuum.video.title', 'Lásd Működés Közben'),

  -- Vákuumformázás - Why
  ('vakuum.why.title', 'Miért Válaszd a Vákuumformázást?'),
  ('vakuum.why.desc', 'A vákuumformázás rugalmas, költséghatékony megoldás bármilyen méretű projekthez'),
  ('vakuum.why.card1.title', 'Sokféle Termék'),
  ('vakuum.why.card1.desc', 'Csomagolás, burkolat, doboz – bármilyen forma'),
  ('vakuum.why.card2.title', 'Rövid Gyártási Idő'),
  ('vakuum.why.card2.desc', 'Egyszerre több termék is készülhet'),
  ('vakuum.why.card3.title', 'Alacsony Szerszámköltség'),
  ('vakuum.why.card3.desc', 'Gazdaságosabb mint a fröccsöntés'),
  ('vakuum.why.card4.title', 'Kis Sorozat'),
  ('vakuum.why.card4.desc', 'Már 10 darabtól megéri'),

  -- Vákuumformázás - Technology
  ('vakuum.tech.title', 'Technológia'),
  ('vakuum.tech.stat1.number', '±0.1mm'),
  ('vakuum.tech.stat1.label', 'Pontosság'),
  ('vakuum.tech.stat2.number', '4-5'),
  ('vakuum.tech.stat2.label', 'Tengelyes CNC'),
  ('vakuum.tech.stat3.number', 'ISO'),
  ('vakuum.tech.stat3.label', 'Minősítés'),
  ('vakuum.tech.cnc_title', 'CNC Vezérelt Precizitás'),
  ('vakuum.tech.cnc_desc', '4 és 5 tengelyes CNC marógépeink bármilyen forma megmunkálását képesek elvégezni a legmagasabb precizitással.'),

  -- Vákuumformázás - Process
  ('vakuum.process.title', 'Hogyan Dolgozunk?'),
  ('vakuum.process.step1.title', 'Konzultáció'),
  ('vakuum.process.step1.desc', 'Megbeszéljük az elképzeléseket'),
  ('vakuum.process.step2.title', 'Tervezés'),
  ('vakuum.process.step2.desc', 'CAD modellezés és szerszámtervezés'),
  ('vakuum.process.step3.title', 'Gyártás'),
  ('vakuum.process.step3.desc', 'CNC marás és vákuumformázás'),
  ('vakuum.process.step4.title', 'Szállítás'),
  ('vakuum.process.step4.desc', 'Minőségellenőrzés és csomagolás'),

  -- Vákuumformázás - References
  ('vakuum.ref.title', 'Referenciák'),
  ('vakuum.ref.project1.title', 'Hét Próba'),
  ('vakuum.ref.project1.subtitle', 'Csillagösvény'),
  ('vakuum.ref.project1.category', 'Játék kellék'),
  ('vakuum.ref.project2.title', 'Honfoglaló'),
  ('vakuum.ref.project2.subtitle', 'Kiállítási elem'),
  ('vakuum.ref.project2.category', 'Múzeum'),
  ('vakuum.ref.project3.title', 'Őseink Nyomában'),
  ('vakuum.ref.project3.subtitle', 'Interaktív kiállítás'),
  ('vakuum.ref.project3.category', 'Oktatás'),

  -- Vákuumformázás - Materials
  ('vakuum.materials.title', 'Anyagok'),
  ('vakuum.materials.mat1.name', 'ABS'),
  ('vakuum.materials.mat1.props', 'Ütésálló, tartós'),
  ('vakuum.materials.mat2.name', 'PETG'),
  ('vakuum.materials.mat2.props', 'Áttetsző, erős'),
  ('vakuum.materials.mat3.name', 'PS'),
  ('vakuum.materials.mat3.props', 'Gazdaságos'),
  ('vakuum.materials.mat4.name', 'PC'),
  ('vakuum.materials.mat4.props', 'Hőálló, prémium'),

  -- Vákuumformázás - Equipment
  ('vakuum.equipment.title', 'Gépparkunk'),
  ('vakuum.equipment.item1.title', 'Vákuumszívó Gépek'),
  ('vakuum.equipment.item1.desc', 'Többféle méretben és részben vagy teljesen automatizáltan végzik a feladatukat. Precíz, megbízható gépek a tökéletes eredményért.'),
  ('vakuum.equipment.item2.title', 'CNC Marógépek'),
  ('vakuum.equipment.item2.desc', '4 és 5 tengelyes CNC vezérelt marógépeink bármilyen forma megmunkálását képesek elvégezni a legmagasabb pontossággal.'),

  -- Vákuumformázás - Form & Footer
  ('vakuum.form.title', 'Kérj Ingyenes Árajánlatot'),
  ('vakuum.form.desc', 'Küldd el az elképzeléseidet és hamarosan felvesszük veled a kapcsolatot!'),
  ('vakuum.footer.tagline', 'Vákuumformázás szakértők'),
  ('vakuum.footer.address', 'Budapest, [Cím]')
ON CONFLICT (key) DO NOTHING;
