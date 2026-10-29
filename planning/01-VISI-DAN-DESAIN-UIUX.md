# 🎨 01. Visi Desain UI/UX & Design System

## 1. Filosofi & Visi Estetika

Portofolio ini mengusung arah desain **"Technical Editorial & Neo-Minimalist Engineering"**.
Tujuannya adalah menciptakan kesan bahwa pemilik portofolio adalah seorang **software engineer modern, pemikir sistem, dan pembelajar yang disiplin**.

- **Bukan desain template umum:** Menggunakan elemen visual khas engineer (grid lines tipis, aksen badge monospace, status indikator live, data visual cards).
- **Harmoni Visual & Informasi:** Teks padat dan bermakna dari `info.md` disajikan dengan tipografi bertingkat (*hierarchy*), tidak membuat pembaca lelah (*wall of text*), melainkan penasaran untuk menelusuri tiap babak.
- **Karakter:** Elegan, presisi, tenang, berwibawa, dan modern.

---

## 2. Palet Warna (Color Palette Tokens)

Desain difokuskan pada mode **Dark Mode First** (karena sangat cocok untuk profil backend & AI), dengan fleksibilitas adaptasi Light Mode yang bersih.

### Dark Mode (Utama)
| Token | Hex Value | Penggunaan |
| :--- | :--- | :--- |
| `bg-primary` | `#0A0D14` (Deep Obsidian) | Latar belakang kanvas utama |
| `bg-surface` | `#121722` (Dark Slate Card) | Kartu proyek, kontainer chapter, modal |
| `bg-surface-elevated`| `#1A2234` | Hover state, dropdown, badge latar |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Garis batas antar komponen & grid divider |
| `border-accent` | `rgba(59, 130, 246, 0.4)` | Border fokus, highlight aktif |
| `text-primary` | `#F1F5F9` (Slate 100) | Judul utama, heading, angka metrik |
| `text-secondary` | `#94A3B8` (Slate 400) | Deskripsi, paragraf narasi, metadata |
| `text-muted` | `#64748B` (Slate 500) | Tanggal, footnote, kategori kecil |
| `accent-primary` | `#38BDF8` (Sky/Cyan Tech) | Highlight AI & Backend, link aktif |
| `accent-secondary`| `#34D399` (Emerald Green) | Status badge "Available/Completed", live demo |
| `accent-amber` | `#FBBF24` (Amber Warm) | Badge eksplorasi ide / on-progress |

---

## 3. Tipografi (Typography Hierarchy)

Kombinasi antara **Modern Sans** (untuk kenyamanan membaca narasi panjang) dan **Monospace** (untuk detail teknis, kode, tanggal, dan nomor chapter):

1. **Body & Headings:** `Plus Jakarta Sans`, `Inter`, atau `Geist Sans`
   - *Display Hero:* 3.5rem (56px), Semi-bold / Bold, letter-spacing -0.03em.
   - *Section Heading:* 2rem (32px), Bold, letter-spacing -0.02em.
   - *Card Title:* 1.25rem (20px), Semi-bold.
   - *Body Narrative:* 1rem (16px), Regular/Medium, line-height 1.7 (sangat nyaman dibaca).
2. **Code & Technical Accents:** `JetBrains Mono` atau `Geist Mono`
   - *Chapter Badge:* `CHAPTER 01 // UNIVERSITY` (0.75rem, uppercase, tracking-wider).
   - *Tech Tags:* `FastAPI`, `Docker`, `Qdrant` (0.8rem, Medium).
   - *Metrics / Dates:* `2026.02 - 2026.04` (0.85rem).

---

## 4. Komponen Kunci & Micro-Interactions

### A. Dynamic Status Bar (Header)
- Header melayang transparan bertekstur *backdrop-blur-md*.
- Indikator status denyut hijau (Pulsing Green Dot): `"Open for Collaborations / Backend & AI Roles"`.
- Quick Nav: *Journey*, *Projects*, *Skills*, *Philosophy*, *Contact*.

### B. Storytelling Chapter Cards (Section "Perjalanan Saya")
- Format **Interactive Timeline / Accordion-Bento Box**.
- Setiap chapter memiliki visual framing:
  - Header chapter monospace (`Chapter 01`, `Chapter 02`, dst.).
  - Ringkasan narasi filosofis & insight kepemimpinan / belajar.
  - Slot visual foto asli (dokumentasi kampus, KADA, BBPVP, tim) dengan caption berbingkai polaroid-digital.
  - Tombol ekspansi ("Baca refleksi lengkap" atau modal dialog preview).

### C. Project Showcase Cards dengan "Live Badges"
- Badge pembeda status yang tegas:
  - 🟢 **Flagship / Production** (LENTERA, Absensi PSA)
  - 🔵 **Prototype / Exploration** (Alistair, LMS, OrbFood)
  - 🟡 **Concept / Digital Service** (Project Hunter, OrbWeb Studio)
- Quick Action: `Live Demo ↗`, `Source Code ↗`, `Architecture Modal 🔍`.
- Card Hover Effect: Border halus menyala (*glow gradient subtle*) saat kursor berada di atas kartu.

### D. Interactive Tech Radar / Skill Matrix
- Dikelompokkan rapi dalam kategori:
  1. *Backend & APIs*
  2. *AI & Semantic Systems*
  3. *Frontend & UI*
  4. *Databases & Caching*
  5. *DevOps & Infrastructure*
- Setiap item menampilkan level aplikasi nyata (bukan sekadar daftar nama tanpa konteks).

### E. Quick Action Contact & Terminal-like Copy Pill
- Tombol email satu kali klik copy (`irfan@...`) dengan feedback *"Copied to clipboard!"*.
- Tombol download Resume / CV ringkas.

