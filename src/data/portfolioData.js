export const projectCategories = ['All', 'Web App', 'Game', 'AI', 'Mobile', 'Library']

export const projects = [
  {
    title: 'CareFund',
    category: 'Web App',
    description: 'Platform crowdfunding medis full-stack (React.js + Node.js/Express). Kolaborasi tim dengan dosen sebagai stakeholder utama. Fitur campaign management, donasi, dan auth.',
    github: 'https://github.com/orgs/group4pbl-carefund/repositories',
    live: 'https://frontend-wine-kappa-76.vercel.app/'
  },
  {
    title: 'LG-Exambot',
    category: 'AI',
    description: 'Sistem generator soal ujian otomatis berbasis AI bernilai komersial Rp2.500.000. Multi-AI fallback: Gemini API, DeepSeek, Groq. Laravel + AI Integration.',
    github: 'https://github.com/sternnaufal/LG-exambot'
  },
  {
    title: 'GreenEvent',
    category: 'Web App',
    description: 'Platform manajemen acara lingkungan hidup. Produk andalan kompetisi Creanomic Vokasi UB 2025. Laravel + Blade + MySQL.',
    github: 'https://github.com/sternnaufal/greenEvent',
    live: 'https://greenevent.infinityfree.me'
  },
  {
    title: 'Telegram Bot Reminder',
    category: 'AI',
    description: 'Bot pengingat jadwal otomatis terintegrasi Google Calendar API. Skrip Python untuk manajemen waktu personal via Telegram.',
    github: 'https://github.com/sternnaufal/bot-calendar-python-telegram'
  },
  {
    title: 'Catatanku',
    category: 'Web App',
    description: 'Aplikasi catatan digital untuk pelajar & mahasiswa. PHP Native + MySQL dengan fitur CRUD catatan, autentikasi, admin panel, dan ekspor PDF.',
    github: 'https://github.com/sternnaufal/catatanku',
    caseStudy: '/projects/catatanku.html'
  },
  {
    title: 'Sakurapai (CMS Video)',
    category: 'Web App',
    description: 'Content Management System video streaming dengan fitur login, manajemen konten, dan MySQL. PHP Native.',
    github: 'https://github.com/sternnaufal/cmsvideo',
    caseStudy: '/projects/sakurapai.html'
  },
  {
    title: 'Alphascript',
    category: 'Library',
    description: 'JavaScript library open-source untuk mempercepat manipulasi DOM sederhana.',
    github: 'https://github.com/sternnaufal/alphascript',
    caseStudy: '/projects/alphascript.html'
  },
  {
    title: 'Keepsimple',
    category: 'Library',
    description: 'CSS framework minimalis fokus pada kecepatan muat halaman dan kebersihan UI.',
    github: 'https://github.com/sternnaufal/keepsimple',
    caseStudy: '/projects/keepsimple.html'
  },
  {
    title: 'Flag Quiz Master',
    category: 'Mobile',
    description: 'Game edukasi tebak bendera negara native Android. 60+ unduhan awal.',
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.seninterus.flagquizapps'
  },
  {
    title: 'Sortiverse',
    category: 'Mobile',
    description: 'Game puzzle edukasi sorting untuk Android. 60+ unduhan awal.',
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.seninterus.sortiverse'
  }
]

export const analytics = [
  { label: 'YouTube Subscribers', value: 700, suffix: '+', icon: 'Play', color: 'bg-red-500' },
  { label: 'Blog Readers', value: 4000, suffix: '+', icon: 'PenLine', color: 'bg-blue-500' },
  { label: 'Google Play Downloads', value: 60, suffix: '+', icon: 'Smartphone', color: 'bg-green-500' },
  { label: 'itch.io Views', value: 3070, suffix: '+', icon: 'Gamepad2', color: 'bg-pink-500' },
]

export const skillCategories = [
  {
    name: 'Front-End',
    items: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 75 },
      { name: 'Vite', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 80 },
    ]
  },
  {
    name: 'Back-End & Database',
    items: [
      { name: 'Node.js (Express)', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'PHP', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 70 },
    ]
  },
  {
    name: 'Programming Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Kotlin', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
    ]
  },
  {
    name: 'Game Development',
    items: [
      { name: 'Kotlin (Android)', level: 75 },
      { name: 'Twine', level: 85 },
      { name: 'Unity / C#', level: 60 },
      { name: 'Godot', level: 50 },
    ]
  },
  {
    name: 'Networking & Security',
    items: [
      { name: 'Cisco', level: 70 },
      { name: 'MikroTik', level: 75 },
      { name: 'Linux Server', level: 80 },
      { name: 'Fiber Optic (OTDR)', level: 85 },
      { name: 'CTF Methodologies', level: 65 },
    ]
  },
  {
    name: 'DevOps & Tools',
    items: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel / Railway', level: 85 },
      { name: 'cPanel / Nginx', level: 75 },
    ]
  }
]

export const education = [
  {
    title: 'Universitas Brawijaya',
    major: 'D3 Teknologi Informasi',
    year: '2025 – sekarang',
    description: 'IPK 4.00/4.00 (Semester 2 berjalan). Aktif di BEM Vokasi (Kominfo), PSIK Vokasi, Provoks, dan GDGoC UB.'
  },
  {
    title: 'SMKN 1 Bukittinggi',
    major: 'Teknik Komputer dan Jaringan',
    year: '2022 – 2025',
    description: 'Wakil Ketua OSIS, Ketua Math Club, Anggota English Club.'
  }
]

export const experience = [
  {
    title: 'Lead Game Developer & Founder – Senin Terus Studio',
    items: [
      '3.070+ total views game web visual novel di itch.io secara organik',
      '2 game edukasi native Android (Flag Quiz Master & Sortiverse) di Google Play — 60+ unduhan awal',
      'Mengelola publikasi dari GitHub, Google Play Console, hingga Vercel'
    ]
  },
  {
    title: 'Backend Developer (Staff Ahli) – BEM Vokasi UB',
    items: [
      'RESTful API 25+ endpoints untuk User, Role, Permission, Menu (Laravel, Full CRUD + Pagination)',
      'Sistem autentikasi Bearer Token dan otorisasi menu dinamis',
      'Kolaborasi Front-End untuk integrasi data real-time'
    ]
  },
  {
    title: 'Web Dev & Administrator – PSIK Vokasi UB',
    items: [
      'Maintenance, optimalisasi performa, dan backup server internal',
      'Audit kode dan security review sistem administrasi web kampus'
    ]
  },
  {
    title: 'Helpdesk Assurance – PT Telkom Akses',
    items: [
      '30–50 tiket gangguan per hari untuk seluruh wilayah Sumatera Barat',
      'Validasi dan approval tiket dengan akurasi 98%'
    ]
  },
  {
    title: 'Teknisi Fiber Optik – PT Golden Fiber',
    items: [
      'Instalasi FTTH untuk 5 area perumahan dan perkantoran baru',
      'Splicing dan pengujian OTDR dengan tingkat keberhasilan 100%'
    ]
  }
]

export const organizations = [
  { title: 'BEM Vokasi UB (Kementerian Kominfo)', role: 'Staff Ahli Backend Developer', year: '2026 – sekarang' },
  { title: 'PSIK Vokasi Universitas Brawijaya', role: 'Web Development & Administrator', year: '2026 – sekarang' },
  { title: 'Provoks (Programmer Vokasi)', role: 'Scout Officer', year: '2026 – sekarang' },
  { title: 'GDGoC Universitas Brawijaya', role: 'Member', year: '2025 – sekarang' },
  { title: 'Senin Terus Studio', role: 'Lead Game Developer & Founder', year: '2024 – sekarang' },
  { title: 'Forum Anak Kota Bukittinggi', role: 'Divisi Database', year: '2023 – 2025' },
  { title: 'OSIS SMKN 1 Bukittinggi', role: 'Wakil Ketua (2024-2025) / Sekretaris 1 (2022-2024)', year: '2022 – 2025' },
  { title: 'Math Club SMKN 1 Bukittinggi', role: 'Ketua', year: '2023 – 2025' },
  { title: 'English Club SMKN 1 Bukittinggi', role: 'Anggota', year: '2023 – 2024' }
]

export const achievements = [
  { title: 'Kompetitor', event: 'Zero Day National CTF 2026 (Digital Social Group)', year: '2026' },
  { title: 'Kompetitor', event: 'picoCTF 2026 — Carnegie Mellon University', year: '2026' },
  { title: 'Finalis', event: 'MTQ UB XIX — Cabang Desain Aplikasi Al-Qur\'an', year: '2026' },
  { title: 'Finalis Nasional', event: '5th Ediverse Math Competition', year: '2024' },
  { title: 'Finalis Nasional', event: '4th Ediverse Math Competition', year: '2023' },
  { title: 'Juara 2', event: 'Kihajar STEM Provinsi Sumatera Barat', year: '2024' },
  { title: 'Top 5', event: 'Kihajar STEM Provinsi Sumatera Barat', year: '2023' }
]

export const certificates = [
  { title: 'Web Programmer (React JS)', provider: 'Telkom Indonesia', image: '/images/cert.svg' },
  { title: 'Junior Web Programmer', provider: 'BNSP', image: '/images/cert.svg' },
  { title: 'Cloud Computing Fundamentals', provider: 'AWS / Dicoding', image: '/images/cert.svg' },
  { title: 'IT & Computer Networking Support', provider: 'LSP', image: '/images/cert.svg' },
  { title: 'Python Developer', provider: 'Google / Dicoding', image: '/images/cert.svg' },
  { title: 'Pemrograman Python', provider: 'Dicoding', image: '/images/cert.svg' }
]

export const studio = {
  name: 'Senin Terus Studio',
  url: 'https://seninterusstudio.vercel.app',
  description: 'Game indie studio yang berfokus pada pengalaman naratif dan edukasi interaktif berbasis web & Android.'
}

export const games = [
  {
    title: 'Flag Quiz Master!',
    description: 'Test your knowledge of world flags in this fun and educational quiz game! Tersedia di itch.io dan Google Play.',
    platform: 'Android + Web',
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.seninterus.flagquizapps' },
      { label: 'itch.io', url: 'https://seninterus.itch.io/flag-quiz-master' },
    ],
    icon: 'Flag',
    stats: 'Dirilis Maret 2026',
    tag: 'Puzzle'
  },
  {
    title: 'Sortiverse',
    description: 'A fun sorting puzzle game. Tersedia di Google Play Store.',
    platform: 'Android',
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.seninterus.sortiverse' },
    ],
    icon: 'Puzzle',
    stats: 'Dirilis Mei 2026',
    tag: 'Puzzle'
  },
  {
    title: '30 Days: Tsundere Girl',
    description: 'Visual novel where you meet a tsundere girl over 30 days. Free version available!',
    platform: 'Web',
    links: [
      { label: 'itch.io', url: 'https://seninterus.itch.io/30-days-meet-tsundere-girl-free-version' },
    ],
    icon: 'Heart',
    stats: 'Dirilis Juni 2023',
    tag: 'Visual Novel'
  }
]
