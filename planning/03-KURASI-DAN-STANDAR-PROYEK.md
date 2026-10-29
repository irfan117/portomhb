# 🎯 03. Kurasi & Standar Showcase Proyek

Sesuai dengan prinsip transparansi dan profesionalisme pada `info.md`, proyek harus dikurasi secara terstruktur agar calon perekrut atau klien dapat membedakan mana sistem yang **telah diimplementasikan dan dideploy**, mana yang **berupa prototipe/eksplorasi**, dan mana yang **berupa konsep produk**.

---

## 🏗️ Hierarki 3-Tier Proyek

```
┌────────────────────────────────────────────────────────┐
│ TIER 1: FLAGSHIP & PRODUCTION                          │
│ Sistem terintegrasi, kontribusi nyata, live/production │
│ • LENTERA (RAG Chatbot BPT Komdigi)                    │
│ • Web Absensi PSA (Full-Stack Attendance System)       │
└────────────────────────────────────────────────────────┘
                           │
┌────────────────────────────────────────────────────────┐
│ TIER 2: EXPLORATIONS & FUNCTIONAL PROTOTYPES           │
│ Implementasi teknis terarah & uji coba arsitektur      │
│ • Alistair (The Virtual Book Keeper - Semantic Search) │
│ • PortalSchool (Laravel School Management)             │
│ • LMS (React + Supabase Learning Management)           │
└────────────────────────────────────────────────────────┘
                           │
┌────────────────────────────────────────────────────────┐
│ TIER 3: PRODUCT CONCEPTS & VENTURES                    │
│ Eksplorasi gagasan produk, UI, & model layanan         │
│ • OrbFood (Food Ordering Platform with Svelte)         │
│ • Project Hunter (Gamified Self-Development Concept)   │
│ • OrbWeb Studio (Web Development Service Platform)     │
└────────────────────────────────────────────────────────┘
```

---

## 📋 Data Matrix Setiap Proyek

### 1. LENTERA — RAG Chatbot BPT Komdigi ⭐ (Flagship)
- **Kategori:** AI Application · Backend Engineering
- **Status Badge:** `Production / Team Project (KADA Batch 3)`
- **Periode:** 2 Feb – 17 Apr 2026
- **Problem Statement:** Kesulitan pengguna dalam menemukan informasi spesifik secara cepat dan akurat di dalam ribuan halaman dokumen regulasi/institusi.
- **Solusi Teknis:** Pipeline Retrieval-Augmented Generation (RAG) yang memproses dokumen institusi, mengekstrak teks, membuat embeddings, dan menyajikan jawaban kontekstual.
- **Kontribusi Khusus Irfan:**
  - Perancangan dan pengembangan backend menggunakan **FastAPI**.
  - Pipeline pemrosesan dokumen dan ekstraksi teks dengan **EasyOCR**.
  - Integrasi vector store semantik dengan **Qdrant**.
  - Orkestrasi penyimpanan metadata dengan MongoDB & caching via Redis.
  - Deployment containerized menggunakan Docker pada server VPS.
- **Tech Stack:** Python, FastAPI, Qdrant, EasyOCR, MongoDB, Redis, Next.js, Docker, Linux VPS.
- **Aset Visual:** Diagram alur RAG, cuplikan terminal/API docs FastAPI, foto demo presentasi KADA.

---

### 2. Web Absensi PSA ⭐ (Flagship)
- **Kategori:** Web Application · Full-Stack Development
- **Status Badge:** `Live Production & Open Source`
- **Problem Statement:** Kebutuhan sistem absensi digital yang presisi, ringan, dan mudah dioperasikan oleh organisasi/karyawan.
- **Kontribusi Khusus Irfan:**
  - Perancangan arsitektur sistem dan pemilihan stack teknologi.
  - Integrasi frontend-backend untuk pengelolaan pencatatan kehadiran real-time.
  - Setup deployment dan optimasi reliabilitas aplikasi.
- **Links:**
  - Demo: [absensi-psa-krq1.vercel.app](https://absensi-psa-krq1.vercel.app/)
  - Repository: [github.com/punyaskillakademi888/absensiPSA](https://github.com/punyaskillakademi888/absensiPSA)
- **Tech Stack:** React, Node.js, Vercel, REST API.
- **Aset Visual:** Mockup dashboard antarmuka absensi pada desktop & mobile.

---

### 3. Alistair — The Virtual Book Keeper (Tier 2)
- **Kategori:** AI Application · Recommendation System
- **Status Badge:** `Interactive Prototype / Live Demo`
- **Deskripsi:** Eksplorasi aplikasi rekomendasi buku & komik berdasarkan minat pembaca menggunakan pendekatan semantic search.
- **Implementasi Nyata:**
  - Antarmuka modular menggunakan React + DaisyUI.
  - Backend Node.js dengan JavaScript ES Modules modern.
  - Eksplorasi pencarian semantik buku dengan Qdrant.
- **Links:** Demo [alistair-tgqo.vercel.app/explore](https://alistair-tgqo.vercel.app/explore)
- **Catatan Kejujuran Portofolio:** Tampilkan status fitur yang sudah aktif vs fitur yang masih tahap mockup/pengembangan.

---

### 4. PortalSchool — School Management System (Tier 2)
- **Kategori:** Web Application · Information System
- **Status Badge:** `Completed Academic System`
- **Deskripsi:** Aplikasi manajemen sekolah terintegrasi dengan Laravel untuk pengelolaan pengguna, guru, siswa, bobot penilaian, dan pelaporan rapor.
- **Sorotan:** Struktur relasi database relasional yang kompleks dan kontrol hak akses multi-role (Admin, Guru, Siswa).
- **Tech Stack:** Laravel, PHP, MySQL, Blade.
- **Aset Visual:** Screenshot halaman rekap nilai dan data master.

---

### 5. LMS — Learning Management System (Tier 2)
- **Kategori:** Full-Stack Web Development
- **Status Badge:** `Technical Prototype`
- **Deskripsi:** Eksplorasi sistem manajemen pembelajaran modern untuk pengelolaan profil pengajar dan silabus materi.
- **Tech Stack:** React, TypeScript, Supabase (Auth & DB), Vercel.

---

### 6. OrbFood — Food Ordering Platform (Tier 3)
- **Kategori:** Product Exploration · Full-Stack Web
- **Status Badge:** `In-Development Prototype`
- **Deskripsi:** Eksplorasi antarmuka cepat pemesanan makanan menggunakan Svelte, Supabase, dan Cloudinary.
- **Tech Stack:** Svelte, Supabase, Cloudinary, Vercel.

---

### 7. Project Hunter & OrbWeb Studio (Tier 3)
- **Project Hunter:** Konsep platform pengembangan diri berbasis misi (gamified self-improvement).
- **OrbWeb Studio:** Konsep layanan digital web development berbasis arsitektur terukur.
- **Penyajian:** Ditampilkan dalam section *"Eksplorasi Ide & Konsep Produk"* sebagai bukti kemampuan *product thinking* dan eksplorasi peluang bisnis digital.

