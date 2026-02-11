"use client";

import { useCallback, useEffect, useState } from "react";
import { FALLBACK_CONTENT } from "@/lib/content";

type FieldDef = {
  key: string;
  label: string;
  multiline?: boolean;
  type?: "image" | "video";
};

type Section = {
  id: string;
  label: string;
  keys: FieldDef[];
};

const SECTIONS: Section[] = [
  {
    id: "global",
    label: "Globális",
    keys: [
      { key: "global.logo_url", label: "Logó", type: "image" },
      { key: "global.tagline", label: "Szlogen" },
      { key: "auto.phone", label: "Telefon — Autó Vizsgáztatás" },
      { key: "auto.email", label: "Email — Autó Vizsgáztatás" },
      { key: "auto.address", label: "Cím — Autó Vizsgáztatás" },
      { key: "vakuum.phone", label: "Telefon — Vákuumformázás" },
      { key: "vakuum.email", label: "Email — Vákuumformázás" },
      { key: "vakuum.address", label: "Cím — Vákuumformázás" },
    ],
  },
  {
    id: "auto",
    label: "Autó Vizsgáztatás",
    keys: [
      { key: "auto.hero.title", label: "Hero cím" },
      { key: "auto.hero.subtitle", label: "Hero alcím" },
      { key: "auto.service1.title", label: "Szolgáltatás 1 - Cím" },
      { key: "auto.service1.description", label: "Szolgáltatás 1 - Leírás" },
      { key: "auto.service1.modal_body", label: "Szolgáltatás 1 - Modal szöveg", multiline: true },
      { key: "auto.service2.title", label: "Szolgáltatás 2 - Cím" },
      { key: "auto.service2.description", label: "Szolgáltatás 2 - Leírás" },
      { key: "auto.service2.modal_body", label: "Szolgáltatás 2 - Modal szöveg", multiline: true },
      { key: "auto.service3.title", label: "Szolgáltatás 3 - Cím" },
      { key: "auto.service3.description", label: "Szolgáltatás 3 - Leírás" },
    ],
  },
  {
    id: "vakuum-hero",
    label: "Vákuum - Hero",
    keys: [
      { key: "vakuum.hero.title", label: "Hero cím 1. sor" },
      { key: "vakuum.hero.title2", label: "Hero cím 2. sor (színes)" },
      { key: "vakuum.hero.subtitle", label: "Hero alcím" },
      { key: "vakuum.hero.cta", label: "CTA gomb szöveg" },
      { key: "vakuum.hero.bg_image", label: "Hero háttérkép", type: "image" },
    ],
  },
  {
    id: "vakuum-video",
    label: "Vákuum - Videó",
    keys: [
      { key: "vakuum.video_url", label: "Videó", type: "video" },
      { key: "vakuum.video.title", label: "Videó szekció cím" },
    ],
  },
  {
    id: "vakuum-why",
    label: "Vákuum - Miért?",
    keys: [
      { key: "vakuum.why.title", label: "Szekció cím" },
      { key: "vakuum.why.desc", label: "Szekció leírás" },
      { key: "vakuum.why.bg_image", label: "Szekció háttérkép", type: "image" },
      { key: "vakuum.why.card1.title", label: "Kártya 1 - Cím" },
      { key: "vakuum.why.card1.desc", label: "Kártya 1 - Leírás" },
      { key: "vakuum.why.card2.title", label: "Kártya 2 - Cím" },
      { key: "vakuum.why.card2.desc", label: "Kártya 2 - Leírás" },
      { key: "vakuum.why.card3.title", label: "Kártya 3 - Cím" },
      { key: "vakuum.why.card3.desc", label: "Kártya 3 - Leírás" },
      { key: "vakuum.why.card4.title", label: "Kártya 4 - Cím" },
      { key: "vakuum.why.card4.desc", label: "Kártya 4 - Leírás" },
    ],
  },
  {
    id: "vakuum-tech",
    label: "Vákuum - Technológia",
    keys: [
      { key: "vakuum.tech.title", label: "Szekció cím" },
      { key: "vakuum.tech.stat1.number", label: "Stat 1 - Szám" },
      { key: "vakuum.tech.stat1.label", label: "Stat 1 - Címke" },
      { key: "vakuum.tech.stat2.number", label: "Stat 2 - Szám" },
      { key: "vakuum.tech.stat2.label", label: "Stat 2 - Címke" },
      { key: "vakuum.tech.stat3.number", label: "Stat 3 - Szám" },
      { key: "vakuum.tech.stat3.label", label: "Stat 3 - Címke" },
      { key: "vakuum.tech.cnc_title", label: "CNC szekció cím" },
      { key: "vakuum.tech.cnc_desc", label: "CNC leírás", multiline: true },
      { key: "vakuum.tech.cnc_image", label: "CNC kártya háttérkép", type: "image" },
    ],
  },
  {
    id: "vakuum-process",
    label: "Vákuum - Folyamat",
    keys: [
      { key: "vakuum.process.title", label: "Szekció cím" },
      { key: "vakuum.process.step1.title", label: "Lépés 1 - Cím" },
      { key: "vakuum.process.step1.desc", label: "Lépés 1 - Leírás" },
      { key: "vakuum.process.step2.title", label: "Lépés 2 - Cím" },
      { key: "vakuum.process.step2.desc", label: "Lépés 2 - Leírás" },
      { key: "vakuum.process.step3.title", label: "Lépés 3 - Cím" },
      { key: "vakuum.process.step3.desc", label: "Lépés 3 - Leírás" },
      { key: "vakuum.process.step4.title", label: "Lépés 4 - Cím" },
      { key: "vakuum.process.step4.desc", label: "Lépés 4 - Leírás" },
    ],
  },
  {
    id: "vakuum-ref",
    label: "Vákuum - Referenciák",
    keys: [
      { key: "vakuum.ref.title", label: "Szekció cím" },
      { key: "vakuum.ref.project1.image", label: "Projekt 1 - Kép", type: "image" },
      { key: "vakuum.ref.project1.title", label: "Projekt 1 - Cím" },
      { key: "vakuum.ref.project1.subtitle", label: "Projekt 1 - Alcím" },
      { key: "vakuum.ref.project1.category", label: "Projekt 1 - Kategória" },
      { key: "vakuum.ref.project2.image", label: "Projekt 2 - Kép", type: "image" },
      { key: "vakuum.ref.project2.title", label: "Projekt 2 - Cím" },
      { key: "vakuum.ref.project2.subtitle", label: "Projekt 2 - Alcím" },
      { key: "vakuum.ref.project2.category", label: "Projekt 2 - Kategória" },
      { key: "vakuum.ref.project3.image", label: "Projekt 3 - Kép", type: "image" },
      { key: "vakuum.ref.project3.title", label: "Projekt 3 - Cím" },
      { key: "vakuum.ref.project3.subtitle", label: "Projekt 3 - Alcím" },
      { key: "vakuum.ref.project3.category", label: "Projekt 3 - Kategória" },
    ],
  },
  {
    id: "vakuum-materials",
    label: "Vákuum - Anyagok",
    keys: [
      { key: "vakuum.materials.title", label: "Szekció cím" },
      { key: "vakuum.materials.mat1.name", label: "Anyag 1 - Név" },
      { key: "vakuum.materials.mat1.props", label: "Anyag 1 - Tulajdonságok" },
      { key: "vakuum.materials.mat2.name", label: "Anyag 2 - Név" },
      { key: "vakuum.materials.mat2.props", label: "Anyag 2 - Tulajdonságok" },
      { key: "vakuum.materials.mat3.name", label: "Anyag 3 - Név" },
      { key: "vakuum.materials.mat3.props", label: "Anyag 3 - Tulajdonságok" },
      { key: "vakuum.materials.mat4.name", label: "Anyag 4 - Név" },
      { key: "vakuum.materials.mat4.props", label: "Anyag 4 - Tulajdonságok" },
    ],
  },
  {
    id: "vakuum-equipment",
    label: "Vákuum - Géppark",
    keys: [
      { key: "vakuum.equipment.title", label: "Szekció cím" },
      { key: "vakuum.equipment.item1.image", label: "Gép 1 - Kép", type: "image" },
      { key: "vakuum.equipment.item1.title", label: "Gép 1 - Cím" },
      { key: "vakuum.equipment.item1.desc", label: "Gép 1 - Leírás", multiline: true },
      { key: "vakuum.equipment.item2.image", label: "Gép 2 - Kép", type: "image" },
      { key: "vakuum.equipment.item2.title", label: "Gép 2 - Cím" },
      { key: "vakuum.equipment.item2.desc", label: "Gép 2 - Leírás", multiline: true },
      { key: "vakuum.equipment.item3.image", label: "Gép 3 - Kép", type: "image" },
      { key: "vakuum.equipment.item3.title", label: "Gép 3 - Cím" },
      { key: "vakuum.equipment.item3.desc", label: "Gép 3 - Leírás", multiline: true },
      { key: "vakuum.equipment.item4.image", label: "Gép 4 - Kép", type: "image" },
      { key: "vakuum.equipment.item4.title", label: "Gép 4 - Cím" },
      { key: "vakuum.equipment.item4.desc", label: "Gép 4 - Leírás", multiline: true },
      { key: "vakuum.equipment.item5.image", label: "Gép 5 - Kép", type: "image" },
      { key: "vakuum.equipment.item5.title", label: "Gép 5 - Cím" },
      { key: "vakuum.equipment.item5.desc", label: "Gép 5 - Leírás", multiline: true },
      { key: "vakuum.equipment.item6.image", label: "Gép 6 - Kép", type: "image" },
      { key: "vakuum.equipment.item6.title", label: "Gép 6 - Cím" },
      { key: "vakuum.equipment.item6.desc", label: "Gép 6 - Leírás", multiline: true },
    ],
  },
  {
    id: "vakuum-form",
    label: "Vákuum - Kapcsolat & Lábléc",
    keys: [
      { key: "vakuum.form.title", label: "Űrlap cím" },
      { key: "vakuum.form.desc", label: "Űrlap leírás" },
      { key: "vakuum.footer.tagline", label: "Lábléc szlogen" },
    ],
  },
];

export default function AdminDashboardPage() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [editedContent, setEditedContent] = useState<Record<string, string>>({});
  const [activeSection, setActiveSection] = useState("global");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const token = typeof window !== "undefined" ? sessionStorage.getItem("admin_token") : null;

  const loadContent = useCallback(async () => {
    const res = await fetch("/api/content", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setContent(data);
      setEditedContent(data);
    }
  }, [token]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const getValue = (key: string): string => {
    return editedContent[key] ?? content[key] ?? FALLBACK_CONTENT[key] ?? "";
  };

  const handleChange = (key: string, value: string) => {
    setEditedContent((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (section: Section) => {
    setSaving(true);
    setSaveStatus(null);

    const entries = section.keys.map((k) => ({
      key: k.key,
      value: getValue(k.key),
    }));

    const res = await fetch("/api/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ entries }),
    });

    if (res.ok) {
      setSaveStatus("Mentve!");
      setContent((prev) => {
        const updated = { ...prev };
        for (const e of entries) {
          updated[e.key] = e.value;
        }
        return updated;
      });
    } else {
      setSaveStatus("Hiba történt!");
    }

    setSaving(false);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleImageUpload = async (key: string, file: File) => {
    setUploading(true);
    setSaveStatus(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("key", key);

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setSaveStatus(`Kép feltöltési hiba: ${err.error || res.status}`);
        setUploading(false);
        return;
      }

      const data = await res.json();
      handleChange(key, data.url);

      // Auto-save to content table
      const saveRes = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ entries: [{ key, value: data.url }] }),
      });

      if (saveRes.ok) {
        setContent((prev) => ({ ...prev, [key]: data.url }));
        setSaveStatus("Kép feltöltve és mentve!");
      } else {
        setSaveStatus("Kép feltöltve, de mentés sikertelen!");
      }
    } catch {
      setSaveStatus("Kép feltöltési hiba!");
    }

    setUploading(false);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    window.location.href = "/admin";
  };

  const currentSection = SECTIONS.find((s) => s.id === activeSection)!;

  const sidebarGroups = [
    { label: "Általános", items: SECTIONS.filter((s) => s.id === "global") },
    { label: "Autó Vizsgáztatás", items: SECTIONS.filter((s) => s.id === "auto") },
    {
      label: "Vákuumformázás",
      items: SECTIONS.filter((s) => s.id.startsWith("vakuum")),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 border-r border-gray-800 flex flex-col min-h-screen">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">Mobilker CMS</h1>
          <p className="text-gray-500 text-xs mt-1">Tartalom kezelés</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {sidebarGroups.map((group) => (
            <div key={group.label}>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 px-3">
                {group.label}
              </p>
              {group.items.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-600/20 text-blue-400"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-red-400 transition-colors"
          >
            Kijelentkezés
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {currentSection.label}
            </h2>
            <div className="flex items-center gap-3">
              {saveStatus && (
                <span
                  className={`text-sm ${
                    saveStatus.includes("Hiba") ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {saveStatus}
                </span>
              )}
              <button
                onClick={() => handleSave(currentSection)}
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {saving ? "Mentés..." : "Mentés"}
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {currentSection.keys.map((field) => {
              const isImage = field.type === "image";
              const isVideo = field.type === "video";

              return (
                <div key={field.key} className="space-y-1.5">
                  <label className="block text-sm text-gray-400">
                    {field.label}
                    <span className="text-gray-600 ml-2 text-xs">{field.key}</span>
                  </label>

                  {/* Image field */}
                  {isImage && (
                    <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                      {getValue(field.key) ? (
                        <div className="mb-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={getValue(field.key)}
                            alt="Preview"
                            className="max-h-40 w-auto rounded border border-gray-700"
                          />
                        </div>
                      ) : (
                        <div className="mb-3 h-24 rounded border border-dashed border-gray-600 flex items-center justify-center text-gray-500 text-sm">
                          Nincs kép
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <label className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          {uploading ? "Feltöltés..." : "Kép feltöltése"}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) handleImageUpload(field.key, f);
                            }}
                          />
                        </label>
                        {getValue(field.key) && (
                          <button
                            onClick={() => handleChange(field.key, "")}
                            className="text-sm text-red-400 hover:text-red-300 transition-colors"
                          >
                            Törlés
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={getValue(field.key)}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        placeholder="vagy URL beillesztése..."
                        className="mt-3 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white text-xs outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  )}

                  {/* Video field */}
                  {isVideo && (
                    <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                      {getValue(field.key) && (
                        <div className="mb-3">
                          <video
                            src={getValue(field.key)}
                            className="max-h-40 w-auto rounded border border-gray-700"
                            muted
                            playsInline
                            controls
                          />
                        </div>
                      )}
                      <input
                        type="text"
                        value={getValue(field.key)}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        placeholder="Videó URL..."
                        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white text-sm outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  )}

                  {/* Multiline text */}
                  {!isImage && !isVideo && field.multiline && (
                    <textarea
                      value={getValue(field.key)}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      rows={5}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition-colors resize-y"
                    />
                  )}

                  {/* Regular text input */}
                  {!isImage && !isVideo && !field.multiline && (
                    <input
                      type="text"
                      value={getValue(field.key)}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white text-sm outline-none focus:border-blue-500 transition-colors"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
