# Mobilker

## Mi ez?

(A projekt leírása később kerül ide.)

## Technológia

| Stack         | Verzió  | Megjegyzés                    |
|---------------|---------|-------------------------------|
| Next.js       | 16.1.6  | App Router                    |
| React         | 19.2.3  |                               |
| Tailwind CSS  | v4      | CSS-first, nincs config fájl  |
| TypeScript    | 5       | Strict mód                    |
| Supabase      | —       | Backend + adatbázis           |

## Indítás

```bash
cd mobilker
npm install
npm run dev
```

Böngésző: http://localhost:3006

## Mappastruktúra

```
mobilker/
├── README.md              – Ez a fájl
├── SZABALYZAT.md          – Fejlesztési szabályok
├── tree.md                – Projekt fa
├── generate_tree.py       – Tree generáló script
├── package.json           – Függőségek (port 3006)
├── next.config.ts         – Next.js konfig
├── tsconfig.json          – TypeScript konfig
├── postcss.config.mjs     – Tailwind v4
├── supabase/migrations/   – Adatbázis migrációk
└── src/
    └── app/               – Oldalak és komponensek
```

## Következő lépések

- [ ] Projekt koncepció leírása
- [ ] Domain kiválasztása
- [ ] Alapvető oldalstruktúra kialakítása

---

Verzió: 0.1 | Dátum: 2026-02-07
