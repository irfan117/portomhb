# 🚀 05. Fase Eksekusi Bertahap (Sprint Roadmap)

Rencana aksi bertahap ini dibagi ke dalam **5 Sprint Terfokus**. Setiap fase memiliki target (*deliverable*) yang jelas sehingga progres pembangunan portofolio dapat dipantau dengan teratur.

---

```
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 1: PONDASI & DESIGN SYSTEM                                        │
│ Setup Tailwind, Icon Pack, Tipografi, Palet Warna & Kerangka Dasar    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 2: HERO SECTION & NARRATIVE STORYTELLING (5 CHAPTERS)             │
│ Komponen Hero memikat + Visualisasi Babak Perjalanan Hidup Irfan      │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 3: INTERACTIVE PROJECTS SHOWCASE (TIER 1 - TIER 3)                │
│ Kurasi proyek, filter kategori, kartu teknis, & studi kasus modal     │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 4: SKILL MATRIX, ENGINEERING MINDSET & CONTACT                   │
│ Pengelompokan teknologi, filosofi kerja, tombol salin email instan    │
└────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 5: REFINEMENT, TESTING, SEO & PRODUCTION BUILD                    │
│ Polish animasi mikro, uji responsif mobile, audit linter & build vite │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🏃 Detail Sprint & Checklist

### 🏁 Fase 1: Pondasi & Design System
*Estimasi Fokus: Membangun fondasi visual dan struktur komponen.*

- [ ] Konfigurasi Tailwind CSS di proyek Vite.
- [ ] Instalasi dependensi pembantu (`lucide-react`, `clsx`, `tailwind-merge`).
- [ ] Impor font modern (misal: Plus Jakarta Sans / Inter & JetBrains Mono untuk monospace).
- [ ] Setup palet warna token dark mode (`#0A0D14`, `#121722`, `#38BDF8`, dll.) di CSS/Tailwind.
- [ ] Pembuatan komponen dasar atomik:
  - `Navbar.jsx` (dengan blur dan status availability)
  - `Badge.jsx` (tag status & teknologi)
  - `Button.jsx` (varian primary, secondary, outline)
  - `SectionHeader.jsx` (judul seragam dengan aksen monospace)

---

### 📖 Fase 2: Hero Section & Storytelling 5 Chapter
*Estimasi Fokus: Menghidupkan personal branding dan narasi perjalanan.*

- [ ] Ekstraksi data profil dan babak perjalanan ke dalam `src/data/journeyData.js`.
- [ ] Pembangunan **Hero Section**:
  - Headline kuat & sub-headline positioning Backend/AI.
  - Quick action buttons (Lihat Proyek, Hubungi, Salin Email).
  - Tiga micro-metrics status (IPK 3.62, KADA Batch 3, BBPVP).
- [ ] Pembangunan **Section 5 Chapters (The Narrative)**:
  - Chapter 01: S1 Informatika Univ ARS (Awal Mula & Pemahaman Dasar).
  - Chapter 02: UKM Fatabiqul Khairat (Eksperimen Organisasi & Seni Kepemimpinan).
  - Chapter 03: KADA Komdigi (Kolaborasi Tim & Proyek LENTERA RAG).
  - Chapter 04: BBPVP Bandung (Disiplin Web Dev & Pengalaman OJT).
  - Chapter 05: The Work (Jembatan Menuju Karya).
- [ ] Penyediaan slot kontainer foto dan tata letak responsif (desktop 2-kolom / mobile stacked).

---

### 💻 Fase 3: Interactive Project Showcase
*Estimasi Fokus: Memamerkan karya teknis secara transparan dan menarik.*

- [ ] Ekstraksi data 8 proyek dari `info.md` ke dalam `src/data/projectsData.js`.
- [ ] Implementasi filter kategori tab: `Semua`, `AI & Backend`, `Full-Stack Web`, `Eksplorasi Konsep`.
- [ ] Pembangunan komponen **ProjectCard**:
  - Badge Tier (Flagship vs Prototype vs Concept).
  - Deskripsi masalah & **kontribusi spesifik Irfan** yang jelas.
  - Deretan badge stack teknologi dengan icon.
  - Tombol aksi eksternal (`Live Demo`, `Repository`, `Studi Kasus`).
- [ ] Pembangunan komponen modal / expandable detail untuk **LENTERA** dan **Web Absensi PSA** (menampilkan arsitektur backend, OCR, dan vector database).

---

### ⚡ Fase 4: Skills Matrix, Filosofi & Kontak
*Estimasi Fokus: Menegaskan kapabilitas teknis dan kemudahan komunikasi.*

- [ ] Pembangunan **Skills Matrix Section**:
  - Dikelompokkan rapi ke dalam Backend, AI/Data, Frontend, Database, dan DevOps.
  - Gaya visual badge teknis yang rapi dan mudah dipindai mata rekruter.
- [ ] Pembangunan **Engineering Philosophy Section**:
  - 3 kartu prinsip utama: *Systems Thinking*, *Relentless Curiosity*, *Reliable Teamwork*.
  - Slogan penutup: *"Still learning. Still building."*
- [ ] Pembangunan **Contact & Footer Section**:
  - Komponen `CopyPill` untuk salin alamat email satu kali klik dengan animasi umpan balik.
  - Tautan ke GitHub, LinkedIn, dan tombol unduh resume.
  - Copyright minimalis dan status tahun aktif.

---

### 💎 Fase 5: Visual Polish, SEO & Final Build
*Estimasi Fokus: Menjamin kualitas kode prima dan performa terbaik.*

- [ ] Audit responsivitas pada layar mobile (375px), tablet (768px), dan desktop (1280px+).
- [ ] Pengecekan kontras warna teks terhadap latar belakang (WCAG standard).
- [ ] Tambahkan metadata SEO & OpenGraph pada `index.html` (Title, Meta Description, Favicon GomgangHub).
- [ ] Jalankan `npm run lint` (Oxlint) untuk memastikan tidak ada syntax warning/error.
- [ ] Jalankan `npm run build` untuk menguji hasil bundling produksi Vite.
- [ ] Siap dideploy ke Vercel / Netlify / VPS dengan performa maksimal.

