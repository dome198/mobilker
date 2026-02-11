import { supabase } from "./supabase";

export const FALLBACK_CONTENT: Record<string, string> = {
  // Global
  "global.logo_url": "https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/mobilker-logo-removebg-preview.png",
  "global.tagline": "Vákuumformázás & Autó Vizsgáztatás",

  // Autó elérhetőség
  "auto.phone": "+36 XX XXX XXXX",
  "auto.email": "info@mobilker.hu",
  "auto.address": "Vámospércs, Ady Endre u. 1, 4287",

  // Vákuum elérhetőség
  "vakuum.phone": "+36 XX XXX XXXX",
  "vakuum.email": "info@mobilker.hu",
  "vakuum.address": "Budapest, [Cím]",

  // Auto Vizsgáztatás
  "auto.hero.title": "Autó Vizsgáztatás",
  "auto.hero.subtitle": "Megbízható • Gyors • Pontos",
  "auto.service1.title": "Műszaki Vizsgáztatás",
  "auto.service1.description": "Teljes körű műszaki vizsga lebonyolítása",
  "auto.service1.modal_body": "Teljes körű műszaki vizsga lebonyolítása gyorsan és megbízhatóan.\n\nA vizsgálat tartalmazza a jármű teljes műszaki állapotfelmérését a hatályos jogszabályok szerint.\n\nÁr: 22 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.",
  "auto.service2.title": "Eredetiség Vizsgálat",
  "auto.service2.description": "Gépjármű eredetiség ellenőrzése szakértői vizsgálattal",
  "auto.service2.modal_body": "Gépjármű eredetiség ellenőrzése szakértői vizsgálattal, hivatalos dokumentációval.\n\nA vizsgálat kiterjed a jármű alvázszámának, motorszámának és egyéb azonosítóinak ellenőrzésére.\n\nÁr: 45 000 Ft\n\nIdőpont egyeztetés telefonon vagy személyesen.",
  "auto.service3.title": "Adminisztráció",
  "auto.service3.description": "Komplett ügyintézés egy helyen",

  // Vákuumformázás
  "vakuum.hero.title": "Vákuumformázás",
  "vakuum.hero.title2": "Új Dimenzióban",
  "vakuum.hero.subtitle": "15+ év tapasztalat • 500+ projekt • CNC precizitás",
  "vakuum.hero.cta": "Ingyenes Konzultáció",
  "vakuum.video_url": "https://pub-5936efa7ffdc4787bace059ff6c47de1.r2.dev/veo-studio-creation-compressed.mp4",
  "vakuum.video.title": "Lásd Működés Közben",
  "vakuum.why.title": "Miért Válaszd a Vákuumformázást?",
  "vakuum.why.desc": "A vákuumformázás rugalmas, költséghatékony megoldás bármilyen méretű projekthez",
  "vakuum.why.card1.title": "Sokféle Termék",
  "vakuum.why.card1.desc": "Csomagolás, burkolat, doboz – bármilyen forma",
  "vakuum.why.card2.title": "Rövid Gyártási Idő",
  "vakuum.why.card2.desc": "Egyszerre több termék is készülhet",
  "vakuum.why.card3.title": "Alacsony Szerszámköltség",
  "vakuum.why.card3.desc": "Gazdaságosabb mint a fröccsöntés",
  "vakuum.why.card4.title": "Kis Sorozat",
  "vakuum.why.card4.desc": "Már 10 darabtól megéri",
  "vakuum.tech.title": "Technológia",
  "vakuum.tech.stat1.number": "±0.1mm",
  "vakuum.tech.stat1.label": "Pontosság",
  "vakuum.tech.stat2.number": "4-5",
  "vakuum.tech.stat2.label": "Tengelyes CNC",
  "vakuum.tech.stat3.number": "ISO",
  "vakuum.tech.stat3.label": "Minősítés",
  "vakuum.tech.cnc_title": "CNC Vezérelt Precizitás",
  "vakuum.tech.cnc_desc": "4 és 5 tengelyes CNC marógépeink bármilyen forma megmunkálását képesek elvégezni a legmagasabb precizitással.",
  "vakuum.process.title": "Hogyan Dolgozunk?",
  "vakuum.process.step1.title": "Konzultáció",
  "vakuum.process.step1.desc": "Megbeszéljük az elképzeléseket",
  "vakuum.process.step2.title": "Tervezés",
  "vakuum.process.step2.desc": "CAD modellezés és szerszámtervezés",
  "vakuum.process.step3.title": "Gyártás",
  "vakuum.process.step3.desc": "CNC marás és vákuumformázás",
  "vakuum.process.step4.title": "Szállítás",
  "vakuum.process.step4.desc": "Minőségellenőrzés és csomagolás",
  "vakuum.ref.title": "Referenciák",
  "vakuum.ref.project1.title": "Hét Próba",
  "vakuum.ref.project1.subtitle": "Csillagösvény",
  "vakuum.ref.project1.category": "Játék kellék",
  "vakuum.ref.project2.title": "Honfoglaló",
  "vakuum.ref.project2.subtitle": "Kiállítási elem",
  "vakuum.ref.project2.category": "Múzeum",
  "vakuum.ref.project3.title": "Őseink Nyomában",
  "vakuum.ref.project3.subtitle": "Interaktív kiállítás",
  "vakuum.ref.project3.category": "Oktatás",
  "vakuum.materials.title": "Anyagok",
  "vakuum.materials.mat1.name": "ABS",
  "vakuum.materials.mat1.props": "Ütésálló, tartós",
  "vakuum.materials.mat2.name": "PETG",
  "vakuum.materials.mat2.props": "Áttetsző, erős",
  "vakuum.materials.mat3.name": "PS",
  "vakuum.materials.mat3.props": "Gazdaságos",
  "vakuum.materials.mat4.name": "PC",
  "vakuum.materials.mat4.props": "Hőálló, prémium",
  "vakuum.equipment.title": "Gépparkunk",
  "vakuum.equipment.item1.title": "Vákuumszívó Gép I.",
  "vakuum.equipment.item1.desc": "Nagy méretű vákuumszívó gépünk ipari méretű termékek formázására alkalmas. Félautomata működéssel, pontos hőmérséklet-szabályozással.",
  "vakuum.equipment.item2.title": "Vákuumszívó Gép II.",
  "vakuum.equipment.item2.desc": "Kisebb szériák és prototípusok gyártására optimalizált vákuumszívó gép. Gyors szerszámcsere, rugalmas beállítások.",
  "vakuum.equipment.item3.title": "4 Tengelyes CNC Marógép",
  "vakuum.equipment.item3.desc": "4 tengelyes CNC vezérlésű marógép komplex formák precíz megmunkálásához. Ideális szerszámok és minták készítéséhez.",
  "vakuum.equipment.item4.title": "5 Tengelyes CNC Marógép",
  "vakuum.equipment.item4.desc": "5 tengelyes CNC marógépünk a legösszetettebb térbeli formák megmunkálását is lehetővé teszi egyetlen befogásból, maximális pontossággal.",
  "vakuum.equipment.item5.title": "Stanc Gép",
  "vakuum.equipment.item5.desc": "Stancoló gépünk a vákuumformázott termékek pontos kivágására, szélezésére szolgál. Gyors, ismételhető és tiszta vágáséleket biztosít.",
  "vakuum.equipment.item6.title": "CO₂ Lézer Vágó",
  "vakuum.equipment.item6.desc": "CO₂ lézer vágó gépünk precíz, érintésmentes vágást tesz lehetővé műanyag, fa és egyéb anyagokon. Komplex kontúrok és gravírozás egyaránt.",
  "vakuum.form.title": "Kérj Ingyenes Árajánlatot",
  "vakuum.form.desc": "Küldd el az elképzeléseidet és hamarosan felvesszük veled a kapcsolatot!",
  "vakuum.footer.tagline": "Vákuumformázás szakértők",
  "vakuum.footer.address": "Budapest, [Cím]",
};

let contentCache: Record<string, string> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 30_000; // 30 seconds

export async function getContent(key: string): Promise<string> {
  const all = await getAllContent();
  return all[key] ?? FALLBACK_CONTENT[key] ?? "";
}

export async function getContentByPrefix(prefix: string): Promise<Record<string, string>> {
  const all = await getAllContent();
  const result: Record<string, string> = {};

  // First fill in fallbacks
  for (const [k, v] of Object.entries(FALLBACK_CONTENT)) {
    if (k.startsWith(prefix)) {
      result[k] = v;
    }
  }

  // Override with DB values
  for (const [k, v] of Object.entries(all)) {
    if (k.startsWith(prefix)) {
      result[k] = v;
    }
  }

  return result;
}

export async function getAllContent(): Promise<Record<string, string>> {
  const now = Date.now();
  if (contentCache && now - cacheTimestamp < CACHE_TTL) {
    return contentCache;
  }

  try {
    const { data, error } = await supabase
      .from("mobilker_content")
      .select("key, value");

    if (error || !data) {
      return FALLBACK_CONTENT;
    }

    const map: Record<string, string> = {};
    for (const row of data) {
      map[row.key] = row.value;
    }

    contentCache = map;
    cacheTimestamp = now;
    return map;
  } catch {
    return FALLBACK_CONTENT;
  }
}

export function invalidateCache() {
  contentCache = null;
  cacheTimestamp = 0;
}
