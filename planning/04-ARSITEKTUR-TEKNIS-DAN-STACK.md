# 💻 04. Arsitektur Teknis & Tech Stack

## 1. Stack Teknologi yang Direkomendasikan

Repositori saat ini sudah menggunakan **Vite 8 + React 19**. Untuk mencapai estetika tingkat tinggi (*high polish*) dan performa kilat, stack diperkaya dengan pustaka berikut:

| Pustaka / Alat | Versi / Tipe | Peran & Alasan Pemilihan |
| :--- | :--- | :--- |
| **Vite + React 19** | Core Framework | Super cepat, modern, reaktif, dan standar industri terdepan. |
| **Tailwind CSS** | Styling System | Utility-first untuk presisi token warna dark mode, typography, dan fluid layout. |
| **Lucide React** | Icon Pack | Set ikon bergaya clean technical monospace/minimalis yang seragam. |
| **Framer Motion / Motion** | Animasi Interaktif | Animasi transisi antar chapter yang mulus, modal preview, dan efek hover kartu. |
| **Oxlint** | Linter | Sudah terpasang, menjaga kode tetap bersih dan bebas error. |

---

## 2. Struktur Direktori `src/` yang Terorganisir

```
src/
├── assets/
│   ├── images/
│   │   ├── chapters/          # Foto 5 Chapter (Kampus, UKM, KADA, BBPVP, Work)
│   │   ├── projects/          # Cuplikan antarmuka & arsitektur proyek
│   │   └── avatar/            # Foto profil profesional Irfan
│   └── icons/                 # Logo / SVG khusus bila diperlukan
│
├── components/
│   ├── common/
│   │   ├── Badge.jsx          # Tag status (Flagship, In-Progress, Tech Stack)
│   │   ├── Button.jsx         # Tombol varian (Primary, Ghost, Outline, Pill)
│   │   ├── CopyPill.jsx       # Tombol salin email dengan animasi checklist
│   │   ├── Modal.jsx          # Dialog detail studi kasus proyek
│   │   └── SectionHeader.jsx  # Heading seragam dengan nomor section monospace
│   │
│   ├── layout/
│   │   ├── Navbar.jsx         # Navigasi melayang dengan blur backdrop
│   │   ├── Footer.jsx         # Minimalist copyright, status, & link sosial
│   │   └── BackgroundGrid.jsx # Background subtle technical grid/dots
│   │
│   ├── sections/
│   │   ├── HeroSection.jsx        # First impression, headline, call to actions
│   │   ├── JourneySection.jsx     # Narasi 5 Chapter dengan visual foto
│   │   ├── ProjectsSection.jsx    # Showcase proyek bertingkat (Tier 1, 2, 3)
│   │   ├── SkillsSection.jsx      # Matriks kompetensi teknis (Backend, AI, Web)
│   │   ├── PhilosophySection.jsx  # Mindset & nilai engineering
│   │   └── ContactSection.jsx     # Penutup & ajakan kolaborasi
│   │
│   └── ui/
│       ├── BentoCard.jsx      # Kartu asimetris modern untuk chapter
│       ├── ProjectCard.jsx    # Kartu proyek dengan efek border glow
│       └── TerminalCard.jsx   # Elemen visual bergaya terminal Linux/API
│
├── data/
│   ├── profileData.js         # Informasi personal, headline, sosmed
│   ├── journeyData.js         # Teks narasi lengkap & referensi foto 5 chapter
│   ├── projectsData.js        # Data detail seluruh proyek & tautan
│   └── skillsData.js          # Pengelompokan teknologi & tools
│
├── hooks/
│   ├── useClipboard.js        # Hook reusable untuk copy teks (email/link)
│   └── useScrollSpy.js        # Deteksi posisi section yang sedang aktif di layar
│
├── index.css                  # Konfigurasi Tailwind, font variables, utility classes
├── App.jsx                    # Root assembler seluruh komponen
└── main.jsx                   # Entry point aplikasi
```

---

## 3. Skema Data (Clean Separation of Content)

Dengan memisahkan data ke folder `src/data/`, pembaruan konten di kemudian hari dapat dilakukan tanpa merusak tata letak visual UI.

### Contoh Format Objek Proyek (`projectsData.js`):
```javascript
export const projects = [
  {
    id: "lentera-rag",
    title: "LENTERA",
    subtitle: "RAG Chatbot BPT Komdigi",
    category: "AI Application · Backend Engineering",
    tier: 1, // 1: Flagship, 2: Prototype, 3: Concept
    featured: true,
    period: "Feb – Apr 2026",
    summary: "Chatbot berbasis RAG untuk membantu pencarian informasi dari dokumen institusi secara presisi.",
    contribution: [
      "Perancangan dan implementasi backend API dengan FastAPI",
      "Pipeline ekstraksi teks dokumen dengan EasyOCR",
      "Integrasi semantic vector search menggunakan Qdrant",
      "Containerization dan deployment Docker pada VPS"
    ],
    techStack: ["Python", "FastAPI", "Qdrant", "EasyOCR", "MongoDB", "Redis", "Docker"],
    links: {
      demo: null,
      github: null,
      caseStudy: "#"
    },
    badge: "KADA Batch 3"
  },
  // ...proyek lainnya
];
```

---

## 4. Strategi Optimasi Performa & Aksesibilitas

1. **Responsif Multi-Device:** Didesain *mobile-first*, optimal di smartphone, tablet, maupun layar ultrawide.
2. **Asset Optimization:** Konversi foto ke format modern WebP/AVIF dengan `loading="lazy"` agar website memuat instan.
3. **Semantic HTML:** Struktur semantik (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) demi SEO dan ramah screen reader.
4. **Subtle Motion:** Mengutamakan animasi mikro yang fungsional (durasi 150-250ms), tanpa efek berlebihan yang memperlambat rendering.

