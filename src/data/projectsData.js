export const projectsData = [
  {
    id: "lentera",
    title: "LENTERA",
    subtitle: "RAG Chatbot Dokumen Institusi Pemerintah",
    category: "AI & Backend",
    featured: true,
    accentColor: "#10b981",
    bentoSpan: "md:col-span-2 lg:col-span-2",
    badge: "KADA Batch 3 · Komdigi",
    period: "Feb – Apr 2026",
    organization: "Korean ASEAN Developer Academy & BPT Komdigi",
    shortDescription:
      "Sistem RAG berbasis Google Cloud Platform (GCP) dan AI Gemini untuk pencarian informasi kontekstual dokumen regulasi pemerintah secara akurat.",
    description:
      "Dalam program KADA Batch 3, saya dipercaya sebagai Backend Developer dalam perancangan dan rekayasa LENTERA—sebuah platform chatbot berbasis Retrieval-Augmented Generation (RAG) yang memanfaatkan ekosistem Google Cloud Platform (GCP) dan model AI Gemini untuk mengolah ribuan halaman regulasi dan dokumen institusi di BPT Komdigi. Sistem ini terintegrasi sebagai widget resmi di situs bpt.komdigi.go.id.",
    problemStatement:
      "Dokumen regulasi institusi pemerintah berjumlah ribuan halaman dengan format PDF dan scan fisik yang sulit ditelusuri manual. Pengguna kesulitan menemukan pasal atau aturan spesifik secara cepat, sementara model LLM standar rentan berhalusinasi jika tidak diberi konteks dokumen internal yang valid.",
    solutionApproach:
      "Saya merancang pipeline RAG yang menggabungkan ekstraksi OCR otomatis, pemecahan teks (chunking) cerdas, penyimpanan embedding pada database vektor Qdrant, dan backend API asinkronus dengan FastAPI untuk menyajikan jawaban dengan latensi rendah.",
    contribution: [
      "Saya merancang dan mengembangkan asynchronous REST API berkecepatan tinggi menggunakan Python dan FastAPI",
      "Saya membangun pipeline OCR otomatis untuk mengekstrak teks dari berkas PDF scan fisik menggunakan EasyOCR",
      "Saya mengintegrasikan vector database Qdrant untuk penelusuran kemiripan semantik (semantic similarity search)",
      "Saya menata skema basis data percakapan di MongoDB serta mengimplementasikan caching Redis",
      "Saya mengelola kontainerisasi sistem menggunakan Docker dan proses deployment pada server VPS Linux"
    ],
    techStack: ["Python", "FastAPI", "GCP", "Gemini AI", "Qdrant", "EasyOCR", "MongoDB", "Redis", "Docker", "Linux VPS"],
    demoUrl: "https://bpt.komdigi.go.id/Home",
    githubUrl: "https://github.com/irfan117/chatbodbptkomdigi",
    highlight: "Widget Chatbot resmi terpasang di bpt.komdigi.go.id dengan backend FastAPI dan pipeline RAG.",
    // Hanya foto momen asli lapangan untuk preview & galeri cerita
    images: [
      "/galeryporto/kada/IMG-20260416-WA0240.jpg",
      "/galeryporto/kada/20260414_141248.jpg",
      "/galeryporto/kada/IMG-20260416-WA0214.jpg",
      "/galeryporto/kada/IMG-20260416-WA0225.jpg"
    ],
    // Sertifikat dipisahkan khusus
    certificates: [
      {
        title: "Sertifikat Penghargaan Backend Developer Komdigi",
        issuer: "Balai Pelatihan Talenta Komunikasi dan Digital (BPT Komdigi)",
        number: "755/BPT.32/DL.01.01/07/2026 (BSrE BSSN)",
        src: "/sertif/sertifikat-komdigi-backend.png"
      },
      {
        title: "Certificate of Completion KADA Phase 3 (250 Jam)",
        issuer: "Korea-ASEAN Digital Academy, Elice Inc., NIPA & ASEAN",
        number: "KADA-B3-2026-51",
        src: "/sertif/sertifikat-kada-completion.png"
      }
    ]
  },
  {
    id: "identifikasi-ras",
    title: "Sistem Identifikasi Ras",
    subtitle: "Klasifikasi Citra Wajah Berbasis Deep Learning CNN",
    category: "AI & Backend",
    featured: true,
    accentColor: "#a855f7",
    bentoSpan: "md:col-span-1 lg:col-span-1",
    badge: "Computer Vision · CNN",
    period: "2025",
    organization: "Universitas ARS — Computer Vision Study",
    shortDescription:
      "Penerapan Convolutional Neural Network (CNN) untuk klasifikasi kategori ras berdasarkan citra wajah sebagai studi kasus deep learning.",
    description:
      "Saya merancang dan melatih model deep learning Convolutional Neural Network (CNN) untuk mendeteksi dan mengidentifikasi kategori ras berdasarkan fitur wajah. Proyek ini mencakup alur lengkap machine learning: pengumpulan dan pra-pemrosesan citra, augmentasi dataset, perancangan layer konvolusi, serta evaluasi akurasi model.",
    problemStatement:
      "Klasifikasi citra wajah memerlukan model yang tahan terhadap variasi pencahayaan, sudut pose wajah, dan noise pada dataset agar terhindar dari overfitting.",
    solutionApproach:
      "Saya menerapkan arsitektur CNN dengan teknik data augmentation, dropout regularization, serta evaluasi metrik precision/recall untuk memastikan generalisasi model yang baik.",
    contribution: [
      "Saya melakukan pengumpulan, kurasi, dan pra-pemrosesan dataset citra wajah manusia",
      "Saya merancang arsitektur model Convolutional Neural Network (CNN) dan hyperparameter tuning",
      "Saya melakukan evaluasi performa model menggunakan data uji dan confusion matrix",
      "Saya mempublikasikan kode eksperimen secara terbuka di GitHub dengan dokumentasi lengkap"
    ],
    techStack: ["Python", "CNN", "Computer Vision", "TensorFlow / Keras", "OpenCV", "Deep Learning"],
    demoUrl: null,
    githubUrl: "https://github.com/irfan117/identifikasi-ras",
    highlight: "Model CNN dengan pipeline preprocessing dan evaluasi data uji yang terukur.",
    images: [],
    certificates: []
  },
  {
    id: "sekda-arsip",
    title: "Web Manajemen Arsip & Pegawai Masjid",
    subtitle: "Biro Kesra Sekretariat Daerah Provinsi Jawa Barat",
    category: "Full-Stack Web",
    featured: true,
    accentColor: "#f59e0b",
    bentoSpan: "md:col-span-1 lg:col-span-1",
    badge: "Magang Biro Kesra Setda Jabar",
    period: "Mar – Jun 2025",
    organization: "Biro Kesejahteraan Rakyat, Setda Pemprov Jawa Barat (Gedung Sate)",
    shortDescription:
      "Sistem web manajemen arsip dokumen dinas dan data pegawai masjid berbasis Laravel dan MySQL untuk mengoptimalkan administrasi birokrasi.",
    description:
      "Saat menjalani magang di Biro Kesejahteraan Rakyat (Kesra) Sekretariat Daerah Provinsi Jawa Barat, saya bertugas mengembangkan dan memelihara aplikasi web manajemen arsip surat dinas serta data pegawai masjid. Sistem ini merapikan alur administrasi persuratan dan pengarsipan digital.",
    problemStatement:
      "Tingginya volume dokumen dinas dan data kepegawaian masjid menuntut sistem terpusat yang aman agar pencarian data fisik tidak memakan waktu berlebih.",
    solutionApproach:
      "Saya merancang struktur basis data relasional MySQL dan membangun fitur CRUD terintegrasi menggunakan framework Laravel untuk memastikan alur kerja administrasi lebih cepat dan akurat.",
    contribution: [
      "Saya menganalisis kebutuhan operasional tata usaha persuratan dan data pegawai masjid",
      "Saya merancang skema database MySQL yang terstruktur dan aman",
      "Saya membangun fitur CRUD, pencarian terindeks, dan antarmuka web dengan Laravel",
      "Saya melakukan uji coba fungsionalitas dan mendampingi staf sekretariat dalam pemanfaatan sistem"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade", "Database Management"],
    demoUrl: null,
    githubUrl: null,
    highlight: "Sistem informasi pengelolaan arsip dan data kepegawaian terintegrasi di Gedung Sate.",
    images: [
      "/galeryporto/sekda jabar atau gedung sate/IMG_20250624_152934_587.jpg"
    ],
    certificates: []
  },
  {
    id: "smam-lms",
    title: "Louis — Learning Management System",
    subtitle: "Sistem Pembelajaran Digital Terintegrasi",
    category: "Full-Stack Web",
    featured: true,
    accentColor: "#38bdf8",
    bentoSpan: "md:col-span-2 lg:col-span-2",
    badge: "Live Repo · SMA Muhammadiyah",
    period: "2025",
    organization: "SMA Muhammadiyah Cililin",
    shortDescription:
      "Platform LMS web untuk manajemen kelas, materi pembelajaran digital, penugasan, penilaian, dan absensi daring terpusat.",
    description:
      "Saya mengembangkan platform Learning Management System (LMS) berbasis web untuk mendukung kegiatan belajar-mengajar digital di SMA Muhammadiyah Cililin. Sistem ini mencakup manajemen kelas daring, distribusi modul ajar, penugasan tugas siswa, rekapitulasi penilaian, dan absensi kehadiran.",
    problemStatement:
      "Sekolah membutuhkan platform terpusat agar pengumpulan materi dan tugas siswa tidak tercecer dalam pesan grup chat, sekaligus mempermudah dewan guru memantau progres akademik.",
    solutionApproach:
      "Saya merancang alur sistem dari analisis kebutuhan pengguna hingga pengujian fungsi agar proses pembelajaran lebih terstruktur, mudah dipantau, dan ramah bagi guru maupun siswa.",
    contribution: [
      "Saya merancang arsitektur sistem LMS dan struktur data pembelajaran",
      "Saya membangun modul manajemen materi, penugasan tugas, dan rekap absensi",
      "Saya terjun langsung ke laboratorium komputer mendampingi guru dan siswa dalam praktik komputasi",
      "Saya mempublikasikan kode sumber di repositori GitHub 'Louis LMS'"
    ],
    techStack: ["LMS Architecture", "Web Development", "Database Management", "Teaching Assistance", "Educational Technology"],
    demoUrl: null,
    githubUrl: "https://github.com/mirfan1q1-lgtm/louis",
    highlight: "Implementasi platform LMS riil yang dipadukan dengan pengajaran langsung di laboratorium sekolah.",
    images: [
      "/galeryporto/smam cililin/IMG_20251029_093715_199.jpg",
      "/galeryporto/smam cililin/IMG_20251107_111922_185.jpg",
      "/galeryporto/smam cililin/IMG_20251114_135317_118.jpg",
      "/galeryporto/smam cililin/IMG_20251029_093619_293.jpg"
    ],
    certificates: []
  },
  {
    id: "absensi-psa",
    title: "Web Absensi PSA",
    subtitle: "Sistem Presensi & Manajemen Kehadiran Karyawan",
    category: "Full-Stack Web",
    featured: false,
    accentColor: "#38bdf8",
    bentoSpan: "md:col-span-1 lg:col-span-1",
    badge: "Live Production · Open Source",
    period: "2026",
    organization: "PSA Project",
    shortDescription:
      "Platform web presensi real-time untuk pencatatan absensi harian dan rekapitulasi data kehadiran yang cepat dan transparan.",
    description:
      "Saya membangun aplikasi web full-stack ini untuk memodernisasi pencatatan absensi harian karyawan dan monitoring riwayat kehadiran secara real-time. Aplikasi dirancang ringan, responsif pada perangkat smartphone, dan terhubung langsung ke basis data cloud.",
    problemStatement:
      "Pencatatan presensi manual rentan terhadap rekapitulasi yang lambat, keterlambatan pelaporan, dan kesulitan verifikasi lokasi kehadiran karyawan di lapangan.",
    solutionApproach:
      "Saya mengintegrasikan antarmuka reaktif berbasis React dengan endpoint REST API backend, memanfaatkan infrastruktur serverless Vercel untuk memastikan ketersediaan tinggi dan biaya operasional yang efisien.",
    contribution: [
      "Saya merancang arsitektur sistem frontend–backend dan struktur data presensi",
      "Saya membangun antarmuka pengguna yang bersih dan mobile-friendly dengan React dan Tailwind CSS",
      "Saya mengintegrasikan REST API untuk pencatatan lokasi, waktu kehadiran, dan rekapitulasi riwayat",
      "Saya mengelola setup deployment otomatis (CI/CD) pada cloud platform Vercel",
      "Saya mempublikasikan kode sumber di GitHub dengan standar dokumentasi yang rapi"
    ],
    techStack: ["React", "Node.js", "Tailwind CSS", "REST API", "Vercel"],
    demoUrl: "https://absensi-psa-krq1.vercel.app/",
    githubUrl: "https://github.com/punyaskillakademi888/absensiPSA",
    highlight: "Sistem absensi aktif di cloud Vercel dengan repositori publik di GitHub.",
    images: [
      "/galeryporto/psa/IMG-20261021-WA0065.jpg",
      "/galeryporto/psa/IMG-20261021-WA0067.jpg"
    ],
    certificates: []
  },
  {
    id: "alistair",
    title: "Alistair",
    subtitle: "The Virtual Book Keeper & Semantic Discovery",
    category: "AI & Backend",
    featured: false,
    accentColor: "#ec4899",
    bentoSpan: "md:col-span-1 lg:col-span-1",
    badge: "Prototype · Live Demo",
    period: "2026",
    organization: "Personal Project",
    shortDescription:
      "Eksplorasi antarmuka rekomendasi dan kurasi buku/komik berbasis minat membaca menggunakan pencarian semantik vektor.",
    description:
      "Saya merancang proyek eksperimental ini untuk menjelajahi bagaimana model semantic search dan vector database dapat meningkatkan relevansi kurasi buku dan komik. Alih-alih mencocokkan kata kunci judul secara kaku, sistem mencocokkan kemiripan makna berdasarkan preferensi pembaca.",
    problemStatement:
      "Pencarian buku konvensional sering gagal memahami preferensi pengguna jika kata kunci yang diketik tidak persis sama dengan database.",
    solutionApproach:
      "Saya memanfaatkan vector database Qdrant untuk menyimpan embedding sinopsis buku dan mencocokkannya dengan kueri bahasa alami dari pembaca.",
    contribution: [
      "Saya membangun antarmuka web eksploratif menggunakan React dan DaisyUI",
      "Saya menyusun arsitektur backend Node.js menggunakan sintaks modern JavaScript ES Modules",
      "Saya mengeksplorasi integrasi pencarian berbasis kemiripan makna dengan Qdrant vector database"
    ],
    techStack: ["React", "DaisyUI", "Node.js (ESM)", "Qdrant", "Vercel"],
    demoUrl: "https://alistair-tgqo.vercel.app/explore",
    githubUrl: null,
    highlight: "Eksplorasi kurasi konten berbasis makna teks dan preferensi pembaca.",
    images: [],
    certificates: []
  },
  {
    id: "orbfood",
    title: "OrbFood",
    subtitle: "Platform Pemesanan Makanan Ringan Cepat",
    category: "Konsep & Riset",
    featured: false,
    accentColor: "#f97316",
    bentoSpan: "md:col-span-1 lg:col-span-1",
    badge: "Live Web · Full-Stack",
    period: "2026",
    organization: "OrbFood Team",
    shortDescription:
      "Platform pemesanan makanan ringan cepat berbasis Svelte dan Cloudinary CDN, aktif secara live di orbfood.my.id.",
    description:
      "Saya membangun platform pemesanan makanan cepat OrbFood untuk memberikan pengalaman belanja kuliner yang instan dan responsif. Berbasis Svelte dan Supabase, aplikasi ini mengoptimalkan delivery media beresolusi tinggi menggunakan Cloudinary CDN.",
    problemStatement:
      "Aplikasi e-commerce kuliner sering kali lambat diakses di koneksi seluler karena beban gambar menu yang berat dan overhead JavaScript yang besar.",
    solutionApproach:
      "Saya menguji pendekatan compiler-first dengan Svelte untuk memangkas ukuran bundle JavaScript serta mengoptimalkan gambar secara otomatis menggunakan Cloudinary CDN.",
    contribution: [
      "Saya mengeksplorasi rendering antarmuka ringan dan efisien menggunakan Svelte",
      "Saya mengintegrasikan pipeline pengunggahan dan kompresi media melalui Cloudinary CDN",
      "Saya merancang arsitektur data transaksi dan alur keranjang belanja pengguna",
      "Saya mengelola integrasi deployment live di domain orbfood.my.id"
    ],
    techStack: ["Svelte", "Supabase", "Cloudinary", "Vercel", "Tailwind CSS"],
    demoUrl: "https://www.orbfood.my.id/",
    githubUrl: "https://github.com/orbefood3/orbfood",
    highlight: "Aplikasi aktif di orbfood.my.id dengan repositori publik di GitHub.",
    images: [
      "/galeryporto/orbfood/Screenshot_20260112-185440.jpg",
      "/galeryporto/orbfood/IMG_20260112_150526_839.jpg",
      "/galeryporto/orbfood/IMG_20260112_141857_322.jpg"
    ],
    certificates: []
  }
];
