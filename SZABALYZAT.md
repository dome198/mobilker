# Mobilker – Fejlesztési szabályzat

Verzió: 0.1 | Dátum: 2026-02-07

---

## 1. Általános elvek

- **Source of truth = fájlok.** Semmi nem él "fejben" vagy "memóriában"
- Minden fejlesztési feladat előtt: olvasd el a releváns docs-ot
- Minden feladat után: frissítsd a releváns docs-ot
- Ha nincs dokumentáció egy funkcióhoz → először azt hozd létre

## 2. AI (Claude) munkarend

- Ne törölj fájlt jóváhagyás nélkül
- Ne indíts szervert/buildot automatikusan
- Feladat előtt olvasd el: README → SZABALYZAT → releváns szekció
- Feladat után frissítsd: README.md szekció táblát + tree.md-t
- **NE olvass .env fájlokat** — soha, kérés nélkül
- Ha bizonytalan vagy, kérdezz

## 3. Kód szabályok

### 3.1 Next.js / React komponensek

- Max 200 sor / szekció komponens
- Max 300 sor / oldal komponens (page.tsx)
- `"use client"` direktíva minden interaktív komponensben
- Minden szekció saját fájlban

### 3.2 Stílus

- Tailwind CSS v4 (CSS-first, `@import "tailwindcss"`)
- Sötét téma alapértelmezett
- Hover animációk: `transition-all duration-300`

### 3.3 Képek

- Lazy loading: `loading="lazy"` minden `<img>` tagen
- Alt text kötelező

## 4. Supabase / Adatbázis

- Migrációs fájlok helye: `supabase/migrations/`
- Fájlnév formátum: `YYYYMMDD_HHMMSS_leiras.sql`
- Minden séma módosítás migrációs fájlként mentendő
- Soha ne módosítsd a DB-t kézzel anélkül, hogy migráció ne készülne róla
- A migrációk sorrendje számít — mindig időrendben

## 5. Dokumentációs workflow

```
1. FELADAT ELŐTT:
   → Olvasd el a README.md-t
   → Értsd meg a struktúrát

2. FEJLESZTÉS KÖZBEN:
   → Új szekció → azonnal add hozzá a README.md-hez
   → DB módosítás → migráció fájl a supabase/migrations/ mappába

3. FELADAT UTÁN:
   → Frissítsd a README.md-t
   → Frissítsd a tree.md-t (python generate_tree.py)
```

## 6. Git workflow

- Branch: `main` (stabil)
- Commit formátum: `[scope]: leírás`
- Scope prefixek: `[ui]`, `[api]`, `[db]`, `[style]`, `[docs]`, `[config]`
- Ne commitolj .env fájlokat, titkokat

## 7. Port szabályok

| Projekt        | Port  |
|----------------|-------|
| FlowOS         | 3000  |
| RoboGrow       | 3001  |
| Domeland       | 3002  |
| Varinsul       | 3003  |
| Yoa            | 3004  |
| DivinDesign    | 3005  |
| **Mobilker**   | **3006** |

---

## Státusz értékek

`Tervezés` → `Fejlesztés` → `Kész` → `Éles`

Jelenlegi státusz: **Tervezés**
