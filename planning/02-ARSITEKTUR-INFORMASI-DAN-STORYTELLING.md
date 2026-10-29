# 📖 02. Arsitektur Informasi & Storytelling

Dokumen ini memetakan seluruh isi `info.md` ke dalam tata letak dan alur halaman web yang terstruktur, padat, dan mengalir secara alami bagi pembaca (rekruter, calon klien, atau kolaborator).

---

## 🗺️ Peta Alur Halaman (Single-Page Seamless Flow)

```
[ Navbar: Logo, Navigation, Status Pill, Resume Link ]
       ↓
[ 1. Hero Section: Persona, Value Proposition, High-Impact Summary ]
       ↓
[ 2. The Narrative: 5 Chapters Perjalanan (Visual & Storytelling) ]
       ↓
[ 3. Selected Projects Showcase: Flagship, System Deep Dive, Live Links ]
       ↓
[ 4. Technical Skills & Architecture Competencies ]
       ↓
[ 5. Engineering Philosophy & Mindset: "Still learning. Still building." ]
       ↓
[ 6. Contact & Footer: Direct Email Copy, Social Profiles ]
```

---

## 📐 Bedah Detail Setiap Bagian

### 1. Hero Section (First Impression)
*Tujuan: Menjelaskan siapa Irfan dalam 5 detik pertama dengan daya pikat kuat.*

- **Top Badge:** `Software Developer · Backend & AI Applications`
- **Main Heading:**
  > *"Membangun sistem perangkat lunak yang andal, mengeksplorasi AI terapan, dan menyatukan kode dengan kebutuhan nyata."*
- **Sub-headline (dari info.md):**
  > "Lulusan Teknik Informatika (IPK 3,62) dengan fokus pada backend engineering, integrasi sistem AI/RAG, dan arsitektur web modern."
- **CTAs:**
  - `[Lihat Karya Unggulan ↓]` (Scroll ke Proyek)
  - `[Jelajahi Perjalanan ➔]` (Scroll ke Chapters)
  - `[Salin Email 📋]`
- **Quick Stat Pills (Micro Metrics):**
  - `🎓 S1 Teknik Informatika (IPK 3.62)`
  - `🤖 KADA Batch 3 Graduate (BPT Komdigi)`
  - `⚡ BBPVP Web Specialist (Node.js & React)`

---

### 2. Section "Perjalanan Saya" (The 5 Chapters of Growth)
*Tujuan: Menampilkan sisi kepemimpinan, proses belajar bertahap, dan etos kerja yang otentik.*

Format UI yang direkomendasikan adalah **Interactive Chapter Cards / Stepper**:

| Chapter | Judul & Subjudul | Poin Kunci & Narasi | Slot Visual / Media |
| :--- | :--- | :--- | :--- |
| **01** | **University: The Beginning**<br>*S1 Teknik Informatika · Univ ARS* | Titik awal mendalami software engineering, memahami dasar komputasi, dan menyadari membangun software lebih dari sekadar mengetik sintaks. | Foto perkuliahan, kampus, suasana pengerjaan tugas akhir / lab. |
| **02** | **UKM Fatabiqul Khairat: Learning to Lead**<br>*Kepemimpinan & Dinamika Manusia* | Refleksi kepemimpinan: eksperimen merestrukturisasi organisasi mengajarkan pentingnya empati, mendengarkan, komunikasi, dan membangun kepercayaan. | Dokumentasi kepengurusan, forum anggota, foto kegiatan organisasi. |
| **03** | **KADA: Building Beyond Classroom**<br>*Korean ASEAN Developer Academy · Komdigi* | Kolaborasi lintas disiplin intensif. Kontribusi backend, OCR (EasyOCR), dan Qdrant vector database pada proyek **LENTERA (RAG Chatbot)**. | Foto pelatihan KADA, tim proyek, sesi presentasi LENTERA. |
| **04** | **BBPVP Bandung: Learning by Building**<br>*Smart Creative IT Skills · Node.js & React* | Pelatihan intensif & OJT (Agt - Okt 2026). Memperdalam full-stack modern, disiplin arsitektur komponen, dan pengerjaan terstruktur. | Suasana kelas praktik BBPVP, rekan sejawat, sertifikat/momen OJT. |
| **05** | **The Work: Turning Knowledge into Systems**<br>*Dari Proses Belajar Menuju Karya* | Titik temu seluruh pengalaman menjadi portofolio produk nyata yang solutif dan terus berevolusi. | Cuplikan arsitektur sistem, terminal code, dan transisi ke proyek. |

---

### 3. Section "Selected Projects"
*Tujuan: Membuktikan kompetensi teknis dengan informasi yang transparan dan dapat diverifikasi.*

- **Filter Kategori Cepat:** `Semua` | `AI & Backend` | `Full-Stack Web` | `Konsep & Riset`
- **Tampilan Proyek:** Menggunakan format **Engineering Case Study Card**:
  - Judul proyek + Tag Kategori.
  - Ringkasan masalah yang diselesaikan.
  - **Kontribusi Spesifik Irfan** (misal: "FastAPI Backend, Document Processing, Qdrant Vector Integration").
  - Stack tags (misal: `FastAPI`, `EasyOCR`, `Qdrant`, `Docker`).
  - Action link: `Live Demo` (jika aktif), `Repository`, atau `Detail Arsitektur`.

---

### 4. Section "Technical Skills & Ecosystem"
*Tujuan: Menampilkan kapabilitas teknologi secara terorganisir.*

- **Backend:** Python, FastAPI, Node.js, REST API, Express.
- **AI & Intelligent Systems:** RAG Architecture, Vector DB (Qdrant), Semantic Search, Embeddings, EasyOCR.
- **Frontend:** React, Next.js, Svelte, Tailwind CSS, TypeScript.
- **Database & Storage:** PostgreSQL, Supabase, MySQL, MongoDB, TiDB, Redis.
- **DevOps & Environments:** Docker, VPS Deployment, Linux Terminal, Git/GitHub, Vercel.

---

### 5. Section "Engineering Philosophy"
*Tujuan: Menunjukkan kedewasaan cara berpikir (Engineering Mindset).*

- Tiga pilar utama dari `info.md`:
  1. **Systems Thinking:** Memahami sistem dari hulu ke hilir (kebutuhan pengguna $\rightarrow$ arsitektur $\rightarrow$ pipeline data $\rightarrow$ deployment).
  2. **Relentless Curiosity:** Memperdalam pemahaman dengan membaca source code, mengevaluasi trade-off, dan memperbaiki bug hingga ke akarnya.
  3. **Reliable Team Player:** Membangun kepercayaan tim lewat kerja yang dapat diandalkan dan komunikasi yang transparan.
- Motto Penutup: *"Still learning. Still building."*

---

### 6. Section "Contact & Collaboration"
- Heading yang hangat: *"Tertarik berdiskusi tentang backend, AI terapan, atau proyek baru?"*
- Tombol satu klik copy email dengan animasi sukses.
- Tautan LinkedIn, GitHub, dan Resume PDF.

