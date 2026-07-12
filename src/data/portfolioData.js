export const projectCategories = ['All', 'Web App', 'Game', 'AI', 'Mobile', 'Library', 'Backend', 'Tools']

export const projects = [
  {
    title: 'CareFund',
    category: 'Web App',
    description: 'Platform crowdfunding medis full-stack (React.js + Node.js/Express). Kolaborasi tim dengan dosen sebagai stakeholder utama. Fitur campaign management, donasi, dan auth.',
    github: 'https://github.com/orgs/group4pbl-carefund/repositories',
    live: 'https://frontend-wine-kappa-76.vercel.app/',
    image: '/images/projects/carefund.png',
    tech: ['React.js', 'Node.js', 'Express', 'MySQL']
  },
  {
    title: 'LG-Exambot',
    category: 'AI',
    description: 'Sistem generator soal ujian otomatis berbasis AI bernilai komersial Rp2.500.000. Multi-AI fallback: Gemini API, DeepSeek, Groq. Laravel + AI Integration.',
    github: 'https://github.com/sternnaufal/LG-exambot',
    live: 'https://exambot.l-glearning.com/',
    image: '/images/projects/lg-exambot.png',
    tech: ['Laravel', 'Gemini API', 'DeepSeek', 'Groq']
  },
  {
    title: 'GreenEvent',
    category: 'Web App',
    description: 'Platform manajemen acara lingkungan hidup. Produk andalan kompetisi Creanomic Vokasi UB 2025. Laravel + Blade + MySQL.',
    github: 'https://github.com/sternnaufal/greenEvent',
    live: 'https://greenevent.infinityfree.me',
    image: '/images/projects/greenevent.png',
    tech: ['Laravel', 'Blade', 'MySQL']
  },
  {
    title: 'Telegram Bot Reminder',
    category: 'AI',
    description: 'Bot pengingat jadwal otomatis terintegrasi Google Calendar API. Skrip Python untuk manajemen waktu personal via Telegram.',
    github: 'https://github.com/sternnaufal/bot-calendar-python-telegram',
    image: '/images/projects/bot-telegram.png',
    tech: ['Python', 'Google Calendar API']
  },
  {
    title: 'Catatanku',
    category: 'Web App',
    description: 'Aplikasi catatan digital untuk pelajar & mahasiswa. PHP Native + MySQL dengan fitur CRUD catatan, autentikasi, admin panel, dan ekspor PDF.',
    github: 'https://github.com/sternnaufal/catatanku',
    caseStudy: '/projects/catatanku.html',
    image: '/images/projects/catatanku.png',
    tech: ['PHP', 'MySQL']
  },
  {
    title: 'Alphascript',
    category: 'Library',
    description: 'JavaScript library open-source untuk mempercepat manipulasi DOM sederhana.',
    github: 'https://github.com/sternnaufal/alphascript',
    caseStudy: '/projects/alphascript.html',
    image: '/images/projects/alphascript.png',
    tech: ['JavaScript']
  },
  {
    title: 'Sakurapai (CMS Video)',
    category: 'Web App',
    description: 'Content Management System video streaming dengan fitur login, manajemen konten, dan MySQL. PHP Native.',
    github: 'https://github.com/sternnaufal/cmsvideo',
    caseStudy: '/projects/sakurapai.html',
    image: '/images/projects/sakurapai.png',
    tech: ['PHP', 'MySQL']
  },
  {
    title: 'Flag Quiz Master',
    category: 'Mobile',
    description: 'Game edukasi tebak bendera negara native Android. 60+ unduhan awal.',
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.seninterus.flagquizapps',
    image: '/images/projects/flagquiz.png',
    tech: ['Kotlin', 'Android']
  },
  {
    title: 'Sortiverse',
    category: 'Mobile',
    description: 'Game puzzle edukasi sorting untuk Android. 60+ unduhan awal.',
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.seninterus.sortiverse',
    image: '/images/projects/sortiverse.png',
    tech: ['Kotlin', 'Android']
  },
  {
    title: 'Todos API',
    category: 'Backend',
    description: 'RESTful API manajemen todos dengan Express.js + TypeScript. Fitur pagination, filter multi-parameter, kategorisasi, prioritas, dan statistik. Deployed di Vercel.',
    github: 'https://github.com/sternnaufal/api',
    live: 'https://api-three-self-56.vercel.app/',
    image: '/images/projects/todos-api.png',
    tech: ['Express.js', 'TypeScript', 'Vercel']
  },
  {
    title: 'Hanekawa Bot v4',
    category: 'AI',
    description: 'Discord bot serbaguna v4 berbasis JavaScript dengan fitur moderasi, musik, tiket, translasi, dan lainnya.',
    github: 'https://github.com/sternnaufal/hanekawa-bot-v4',
    image: '/images/projects/hanekawa-bot.png',
    tech: ['JavaScript', 'Discord.js']
  },
  {
    title: 'Keepsimple',
    category: 'Library',
    description: 'CSS framework minimalis fokus pada kecepatan muat halaman dan kebersihan UI.',
    github: 'https://github.com/sternnaufal/keepsimple',
    caseStudy: '/projects/keepsimple.html',
    image: '/images/projects/keepsimple.png',
    tech: ['CSS']
  },
  {
    title: 'Sterntools',
    category: 'Tools',
    description: 'Toolkit CTF untuk analisis forensika digital. Koleksi skrip otomatisasi bedah file, ekstraksi artefak, dan investigasi sistem.',
    github: 'https://github.com/sternnaufal/sterntools',
    image: '/images/projects/sterntools.png',
    tech: ['Shell', 'Linux']
  },
  {
    title: 'Website Duta Anak Kota Bukittinggi 2025',
    category: 'Web App',
    description: 'Landing page resmi profil Duta Anak Kota Bukittinggi. Dibangun dengan Bootstrap untuk tampilan responsif dan modern.',
    github: 'https://github.com/sternnaufal/website-duta-anak',
    image: '/images/project-placeholder.svg',
    tech: ['Bootstrap', 'HTML5', 'CSS3']
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
      { name: 'RESTful API Architecture', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 70 },
    ]
  },
  {
    name: 'Programming Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'PHP', level: 85 },
      { name: 'Kotlin', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'SQL', level: 80 },
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
      { name: 'Linux Server (Debian)', level: 80 },
      { name: 'Fiber Optic (OTDR & Splicing)', level: 85 },
      { name: 'CTF Methodologies', level: 65 },
    ]
  },
{
    name: 'DevOps & Tools',
    items: [
      { name: 'Azure AI Foundry', level: 75 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel / Railway', level: 85 },
      { name: 'cPanel / Nginx', level: 75 },
      { name: 'Apache', level: 70 },
      { name: 'Postman', level: 85 },
    ]
  }
]

export const education = [
  {
    title: 'Universitas Brawijaya',
    major: 'D3 Teknologi Informasi',
    year: '2025 – sekarang',
    description: 'IPK: 4.00 / 4.00 (Semester 1, Ongoing Semester 2). Aktif di BEM Vokasi (Kominfo), PSIK Vokasi, Provoks, dan GDGoC UB.'
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
    duration: 'Januari 2024 – Sekarang',
    items: [
      'Menginisiasi dan membangun studio game independen; produksi game berbasis web interaktif (Twine + JavaScript) & mobile (Android)',
      '3.070+ total views game visual novel di itch.io secara organik',
      '2 game edukasi native Android (Flag Quiz Master & Sortiverse) di Google Play — 60+ unduhan awal',
      'Mengelola seluruh siklus publikasi: source code GitHub, kepatuhan Google Play Console, hingga situs resmi studio di Vercel'
    ]
  },
  {
    title: 'Backend Developer (Staff Ahli) – Website BEM Vokasi UB',
    duration: 'Maret 2026 – Sekarang',
    items: [
      'Arsitektur core system website resmi BEM di bawah Kementerian Kominfo',
      'RESTful API 25+ endpoints untuk User, Role, Permission, Menu (Laravel, Full CRUD + Pagination)',
      'Sistem autentikasi Bearer Token dan otorisasi menu dinamis',
      'Kolaborasi Front-End untuk integrasi data real-time minim latensi'
    ]
  },
  {
    title: 'Web Development & Administrator – PSIK Vokasi UB',
    duration: 'April 2026 – Sekarang',
    items: [
      'Maintenance rutin, optimalisasi performa, dan backup berkala server internal PSIK Vokasi UB',
      'Audit kode dan security review sistem administrasi web kampus'
    ]
  },
  {
    title: 'Helpdesk Assurance Intern – PT Telkom Akses',
    duration: 'November 2024 – Maret 2025',
    items: [
      'Memproses pemulihan gangguan jaringan 30–50 tiket per hari untuk regional Sumatera Barat',
      'Validasi, analisis teknis awal, dan approval tiket dengan akurasi 98%'
    ]
  },
  {
    title: 'Teknisi Fiber Optik Intern – PT Golden Fiber',
    duration: 'Januari 2024 – Juni 2024',
    items: [
      'Instalasi jaringan FTTH untuk 5 area perumahan dan perkantoran pelanggan baru',
      'Splicing kabel dan pengujian redaman OTDR dengan tingkat keberhasilan 100%'
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
  { title: 'Finalis', event: 'Zero Day National CTF 2026 (Digital Social Group)', year: '2026' },
  { title: 'Kompetitor', event: 'picoCTF 2026 — Carnegie Mellon University (Web Exploitation, Cryptography, Forensics)', year: '2026' },
  { title: 'Kompetitor', event: 'OLIVIA XI 2026 — Konsorsium Vokasi Indonesia (Cybersecurity)', year: '2026' },
  { title: 'Finalis', event: 'MTQ UB XIX — Cabang Desain Aplikasi Al-Qur\'an', year: '2026' },
  { title: 'Finalis Nasional', event: '5th Ediverse Math Competition', year: '2024' },
  { title: 'Finalis Nasional', event: '4th Ediverse Math Competition', year: '2023' },
  { title: 'Juara 2', event: 'Kihajar STEM Provinsi Sumatera Barat', year: '2024' },
  { title: 'Top 5', event: 'Kihajar STEM Provinsi Sumatera Barat', year: '2023' }
]

export const certificates = [
  { title: 'Introduction to IoT', provider: 'Cisco Networking Academy', year: '2026', image: '/images/cert.svg' },
  { title: 'Membangun Aplikasi Gen AI dengan Microsoft Azure', provider: 'Dicoding x Microsoft', year: '2026', image: '/images/cert.svg' },
  { title: 'Belajar Penerapan Data Science dengan Microsoft Fabric', provider: 'Dicoding x Microsoft', year: '2026', image: '/images/cert.svg' },
  { title: 'Networking Basics', provider: 'Cisco Networking Academy', year: '2025', image: '/images/cert.svg' },
  { title: 'Introduction to Cybersecurity', provider: 'Cisco Networking Academy', year: '2025', image: '/images/cert.svg' },
  { title: 'Python for Data Science', provider: 'Cognitive Class with IBM', year: '2025', image: '/images/cert.svg' },
  { title: 'Junior Web Programmer', provider: 'BNSP', year: '2025', image: '/images/cert.svg' },
  { title: 'Web Programmer (React JS)', provider: 'Telkom Indonesia', year: '2025', image: '/images/cert.svg' },
  { title: 'Belajar Dasar Cloud dan Gen AI di AWS', provider: 'AWS / Dicoding', year: '2025', image: '/images/cert.svg' },
  { title: 'Belajar Membuat Front-End Web untuk Pemula', provider: 'Dicoding', year: '2025', image: '/images/cert.svg' },
  { title: 'Belajar Dasar Pemrograman Web', provider: 'Dicoding', year: '2025', image: '/images/cert.svg' },
  { title: 'Belajar Dasar Pemrograman JavaScript', provider: 'Dicoding', year: '2025', image: '/images/cert.svg' },
  { title: 'Memulai Pemrograman dengan Python', provider: 'Dicoding', year: '2024', image: '/images/cert.svg' },
  { title: 'Belajar Dasar AI', provider: 'Dicoding', year: '2024', image: '/images/cert.svg' },
  { title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)', provider: 'Dicoding', year: '2024', image: '/images/cert.svg' },
  { title: 'Legacy Responsive Web Design V8', provider: 'freeCodeCamp', year: '2022', image: '/images/cert.svg' }
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
