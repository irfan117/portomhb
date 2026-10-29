export const constellationSkills = [
  {
    id: "python",
    name: "Python",
    category: "Backend & AI",
    brandColor: "#38bdf8",
    level: "Tingkat Lanjut",
    experience: "Inti rekayasa pipeline RAG LENTERA, skrip OCR EasyOCR, dan pemodelan data asinkronus.",
    symbol: "Py",
    coords: { x: 22, y: 28 }
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend API",
    brandColor: "#05998b",
    level: "Tingkat Lanjut",
    experience: "Membangun REST API asinkronus berkecepatan tinggi, dependency injection, dan Swagger docs di KADA Komdigi.",
    symbol: "FA",
    coords: { x: 38, y: 18 }
  },
  {
    id: "rag",
    name: "RAG Architecture",
    category: "Artificial Intelligence",
    brandColor: "#10b981",
    level: "Spesialisasi Terapan",
    experience: "Chunking teks dinamis, ekstraksi dokumen, vector embedding, dan semantic similarity scoring.",
    symbol: "RAG",
    coords: { x: 52, y: 32 }
  },
  {
    id: "qdrant",
    name: "Qdrant Vector DB",
    category: "AI Database",
    brandColor: "#f43f5e",
    level: "Terampil",
    experience: "Pengindeksan koleksi vektor, filter payload dokumen, dan pencarian semantik pada proyek LENTERA & Alistair.",
    symbol: "Qd",
    coords: { x: 68, y: 20 }
  },
  {
    id: "react",
    name: "React",
    category: "Frontend Modern",
    brandColor: "#61dafb",
    level: "Tingkat Lanjut",
    experience: "Arsitektur komponen modular, custom hooks reaktif, dan integrasi API pada BBPVP & Web Absensi PSA.",
    symbol: "Re",
    coords: { x: 32, y: 55 }
  },
  {
    id: "nodejs",
    name: "Node.js (ESM)",
    category: "Full-Stack Web",
    brandColor: "#22c55e",
    level: "Mahir",
    experience: "Backend RESTful API dengan sintaks modern ES Modules, Express, dan interkoneksi database relasional.",
    symbol: "Node",
    coords: { x: 48, y: 68 }
  },
  {
    id: "docker",
    name: "Docker & VPS",
    category: "Infrastruktur",
    brandColor: "#0284c7",
    level: "Mahir",
    experience: "Kontainerisasi microservices, setup multi-container Dockerfile, dan server maintenance Linux VPS.",
    symbol: "Dk",
    coords: { x: 65, y: 56 }
  },
  {
    id: "mysql",
    name: "MySQL & Supabase",
    category: "Basis Data",
    brandColor: "#f59e0b",
    level: "Tingkat Lanjut",
    experience: "Normalisasi database relasional kompleks, indexing performa kueri, dan sistem arsip Sekda Jabar.",
    symbol: "SQL",
    coords: { x: 78, y: 40 }
  },
  {
    id: "laravel",
    name: "PHP / Laravel",
    category: "Backend MVC",
    brandColor: "#ef4444",
    level: "Mahir",
    experience: "Arsitektur MVC, Eloquent ORM, RBAC autentikasi multi-peran, dan PortalSchool sistem rapor.",
    symbol: "Lv",
    coords: { x: 18, y: 65 }
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System",
    brandColor: "#38bdf8",
    level: "Tingkat Lanjut",
    experience: "Desain antarmuka responsif pixel-perfect, mode gelap elegan, dan animasi interaktif modern.",
    symbol: "TW",
    coords: { x: 82, y: 72 }
  }
];

export const skillsData = [
  {
    category: "Backend & Systems",
    items: [
      { name: "Python", context: "FastAPI, Data Extraction, Scripting" },
      { name: "FastAPI", context: "Async RESTful APIs, Swagger, Dependency Injection" },
      { name: "Node.js", context: "ES Modules, Express, REST Services" },
      { name: "PHP / Laravel", context: "MVC, Eloquent ORM, RBAC Auth" }
    ]
  },
  {
    category: "AI & Intelligent Applications",
    items: [
      { name: "RAG Architecture", context: "Document Chunking, Context Injection, Prompt Handling" },
      { name: "Qdrant Vector DB", context: "Semantic Search, Vector Similarity, Payload Filters" },
      { name: "EasyOCR", context: "Text extraction & document digitization pipeline" },
      { name: "Semantic Search", context: "Embedding Generation & Relevance Ranking" }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL & Supabase", context: "Relational Modeling, Row-Level Security" },
      { name: "MySQL", context: "Database normalization, indexing, complex queries" },
      { name: "MongoDB", context: "Document data store, metadata indexing" },
      { name: "Redis", context: "Caching layer & fast key-value storage" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", context: "Hooks, modern state, modular component systems" },
      { name: "Next.js", context: "App router, server-side data fetching" },
      { name: "Tailwind CSS", context: "Design tokens, responsive layouts, dark themes" },
      { name: "TypeScript", context: "Type-safe interfaces & component props" }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Docker", context: "Containerization, Dockerfile, multi-container apps" },
      { name: "Linux / VPS", context: "Server administration, systemd, SSH, bash tooling" },
      { name: "Git & GitHub", context: "Version control, branching workflows, collaboration" },
      { name: "Vercel", context: "Automated CI/CD deployments for frontend & full-stack" }
    ]
  },
  {
    category: "Pendidikan & Kredensial Resmi",
    items: [
      { name: "Sertifikat Kompetensi BNSP — Web Developer", context: "Badan Nasional Sertifikasi Profesi · No. Reg TIK.2609.000043.2026" },
      { name: "Backend Developer Chatbot BPT Komdigi", context: "Sertifikat Penghargaan BPT Komdigi No. 755/2026 (BSrE BSSN)" },
      { name: "KADA Phase 3 (250 Jam Pelatihan AI & Web)", context: "Korea-ASEAN Digital Academy · ID: KADA-B3-2026-51" },
      { name: "Google Developer Groups — #JuaraVibeCoding", context: "Vibe Coding Study Jam · Verifikasi: JVC2605-YVCS-MMSY" },
      { name: "S1 Teknik Informatika (S.Kom, IPK 3.62)", context: "Universitas ARS · Predikat Sangat Memuaskan" }
    ]
  }
];

export const engineeringPrinciples = [
  {
    title: "Systems Thinking",
    description:
      "Memahami keterhubungan sistem dari hulu ke hilir—mulai dari kebutuhan bisnis, arsitektur data, keandalan API, hingga pemeliharaan jangka panjang di lingkungan produksi."
  },
  {
    title: "Practical Pragmatism",
    description:
      "Memilih teknologi berdasarkan masalah nyata yang harus diselesaikan, bukan sekadar mengikuti tren sesaat. Mengutamakan performa, kemudahan pemeliharaan, dan kejelasan kode."
  },
  {
    title: "Honest Reflection & Continuous Learning",
    description:
      "Pengalaman memimpin organisasi mahasiswa dan berkolaborasi dalam tim teknis mengajarkan bahwa software yang hebat dibangun lewat komunikasi terbuka, kerendahan hati, dan proses evaluasi berkesinambungan."
  }
];
