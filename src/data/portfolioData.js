/**
 * ==============================================================================
 * MASTER CONTENT & CONFIGURATION FILE (Pusat Manajemen Konten Website)
 * ==============================================================================
 * Seluruh konten website statis ini dikelola dalam satu file ini:
 * 1. BIODATA & KONTAK (personalData, socialLinks)
 * 2. HERO ROLES (heroRoles - teks berputar di header)
 * 3. SKILLS & TECH STACK (techStackList)
 * 4. PENDIDIKAN & AKADEMIK (educationList)
 * 5. PROYEK / PORTOFOLIO (projects)
 * 6. KEGIATAN & SERTIFIKAT (activities)
 * 7. TERJEMAHAN BAHASA / UI STRINGS (translations: EN & ID)
 * ==============================================================================
 */

// ==============================================================================
// 1. BIODATA & KONTAK UTAMA
// ==============================================================================
export const personalData = {
  name: "Bayu Tri Prayitno",
  title: "Fresh Graduate",
  location: "Indonesia",
  email: "treeprayitno12@gmail.com",
  phone: "+62 857 2504 0030",
  bio: "Memiliki fokus dan antusiasme dalam pengembangan aplikasi Web & Mobile, sistem IoT, serta eksplorasi Pengolahan Citra dan AI untuk menciptakan solusi teknologi yang inovatif.",
  motto: "Belajar tanpa henti, berkembang tanpa batas.",
  image: "/assets/profile/foto.png",      // Foto Profil Utama (ada di folder /public)
  profileCardImage: "/assets/profile/foto1.png", // Foto untuk About Me Card
  resume: "/CV_ATS.pdf",                 // File CV PDF (ada di folder /public)
};

// Tautan Sosial Media & Kontak Cepat
export const socialLinks = {
  github: "https://github.com/bayu3prayitno",
  linkedin: "https://linkedin.com/in/bayu3prayitno",
  whatsapp: "https://wa.me/6285725040030",
  instagram: "https://instagram.com/triprytn",
  email: "mailto:treeprayitno12@gmail.com",
};

// ==============================================================================
// 2. HERO ROTATING ROLES (Teks Badge 3D yang Berputar di Halaman Depan)
// ==============================================================================
export const heroRoles = [
  "Mobile Development",
  "Web Development",
  "IT Support",
  "IoT Engineer",
];

// ==============================================================================
// 3. SKILLS & TECH STACK
// (Icon didukung: React, Nextjs, JavaScript, Tailwind, Nodejs, MySQL, Git, Python,
//  Laravel, Firebase, Postman, Figma, Canva, Flutter, VSCode, GitHub, Gemini, IoT, AI, Antigravity)
// ==============================================================================
export const techStackList = [
  { name: "React", icon: "React" },
  { name: "Next.js", icon: "Nextjs" },
  { name: "JavaScript", icon: "JavaScript" },
  { name: "Tailwind", icon: "Tailwind" },
  { name: "Node.js", icon: "Nodejs" },
  { name: "MySQL", icon: "MySQL" },
  { name: "Git", icon: "Git" },
  { name: "Python", icon: "Python" },
  { name: "Laravel", icon: "Laravel" },
  { name: "Firebase", icon: "Firebase" },
  { name: "Postman", icon: "Postman" },
  { name: "Figma", icon: "Figma" },
  { name: "Canva", icon: "Canva" },
  { name: "Flutter", icon: "Flutter" },
  { name: "VS Code", icon: "VSCode" },
  { name: "GitHub", icon: "GitHub" },
  { name: "Google Gemini", icon: "Gemini" },
  { name: "IoT & Hardware", icon: "IoT" },
  { name: "AI & Image Processing", icon: "AI" },
  { name: "Antigravity", icon: "Antigravity" },
];

export const skills = {
  technical: [
    { name: "JavaScript", category: "Programming" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Programming" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Git", category: "Tools" },
    { name: "MySQL", category: "Database" },
    { name: "Firebase", category: "Backend" },
    { name: "Flutter", category: "Programming" },
    { name: "IOT", category: "Programming" },
  ],
  soft: [
    "Problem Solving",
    "Kolaborasi Tim",
    "Komunikasi",
    "Manajemen Waktu",
    "Pemikiran Kritis",
    "Adaptabilitas",
    "Kepemimpinan",
    "Pemikiran Kreatif",
  ],
};

// ==============================================================================
// 4. RIWAYAT PENDIDIKAN & AKADEMIK
// ==============================================================================
export const educationList = [
  {
    id: "polines",
    institution: "Politeknik Negeri Semarang",
    degree: "Applied Bachelor (D4) — Teknologi Rekayasa Komputer",
    period: "2022 — 2026",
    level: "HIGHER EDUCATION",
    gpa: "3.74",
    maxGpa: "4.00",
    honors: "Cum Laude Standing",
    thesis: "Pengembangan Sistem Berbasis IoT, AI & Computer Vision untuk Smart Automation",
    domains: ["IoT & Embedded C++", "Computer Vision & AI", "Full-Stack Web", "Microcontroller Architecture"],
    accentColor: "emerald",
    serialNumber: "POLINES-TK-2022",
  },
  {
    id: "smkn1",
    institution: "SMK Negeri 1 Batang",
    degree: "Vocational Diploma — Teknik Komputer dan Jaringan",
    period: "2019 — 2022",
    level: "VOCATIONAL FOUNDATION",
    honors: "Network & Hardware Major",
    thesis: "Administrasi Infrastruktur Jaringan, Routing Switching, dan Troubleshooting Server",
    domains: ["Computer Networking", "MikroTik & Cisco", "Linux Server Admin", "Hardware Troubleshooting"],
    accentColor: "blue",
    serialNumber: "SMKN1B-TKJ-2019",
  },
];

// Alias backward-compatibility
export const education = educationList;

// ==============================================================================
// 5. PROYEK / PORTOFOLIO
// ==============================================================================
export const projects = [
  {
    id: 1,
    title: "Restaurant App",
    category: "Web Application",
    description: "Aplikasi web pencarian dan rekomendasi restoran interaktif yang dinamis dan responsif.",
    technologies: ["HTML", "CSS", "JS"],
    techText: "HTML, CSS, JS",
    image: "/assets/Projects/pbl/1.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 2,
    title: "My Portofolio",
    category: "Web Application",
    description: "Website portofolio interaktif dengan 3D ID Card, animasi lanyard, dan dark studio lighting.",
    technologies: ["React", "Vite", "Tailwind"],
    techText: "React, Tailwind, Vite",
    image: "/assets/Projects/pbl/2.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 3,
    title: "Air Canvas AI",
    category: "Gesture Drawing",
    description: "Sistem menggambar di udara berbasis computer vision dan pelacakan gestur tangan secara real-time.",
    technologies: ["Python", "Computer Vision", "OpenCV"],
    techText: "Python, Computer Vision",
    image: "/assets/Projects/pbl/3.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 4,
    title: "GameWeb Application",
    category: "Web + IoT",
    description: "Aplikasi permainan web interaktif yang terhubung langsung dengan controller hardware IoT ESP32.",
    technologies: ["HTML", "CSS", "JS", "C++", "ESP32"],
    techText: "HTML, CSS, JS, C++, ESP32",
    image: "/assets/Projects/pbl/4.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 5,
    title: "Dasai Mochi Robot",
    category: "IoT",
    description: "Robot desktop cerdas berbasis ESP32 dengan display ekspresi animasi dan sensor interaktif.",
    technologies: ["ESP32", "C++", "Hardware Design"],
    techText: "ESP32, C++",
    image: "/assets/Projects/mobile/4.jpg",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 6,
    title: "Pendeteksi Basi (MBG)",
    category: "Web + IoT",
    description: "Sistem pendeteksi kesegaran makanan otomatis berbasis sensor gas dan dashboard monitoring.",
    technologies: ["Java", "ESP8266", "IoT Sensor"],
    techText: "Java Console App, IoT",
    image: "/assets/Projects/mobile/1.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 7,
    title: "Ecommerce Web",
    category: "Website Application",
    description: "Platform e-commerce modern dengan katalog produk dinamis, keranjang belanja, dan checkout terintegrasi.",
    technologies: ["Laravel", "HTML", "CSS", "JS"],
    techText: "Laravel, HTML, CSS, JS",
    image: "/assets/Projects/pbl/5.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
  {
    id: 8,
    title: "LMS Website App",
    category: "Website Application",
    description: "Learning Management System lengkap dengan manajemen materi belajar, kuis, dan portal siswa.",
    technologies: ["Laravel", "HTML", "CSS", "JS", "Filament"],
    techText: "Laravel, HTML, CSS, JS",
    image: "/assets/Projects/mobile/5.png",
    github: "https://github.com/bayu3prayitno",
    liveDemo: "https://github.com/bayu3prayitno",
    featured: true,
  },
];

// ==============================================================================
// 6. KEGIATAN, PENGALAMAN & SERTIFIKAT
// ==============================================================================
export const activities = [
  {
    id: 1,
    title: "TECHCOMFEST 2025",
    type: "Volunteer",
    date: "2025",
    description:
      "Menjadi panitia dalam acara tahunan TECHCOMFEST 2025 sebagai Sie Publikasi, Dokumentasi, dan Dekorasi.",
    image: "/assets/kegiatan/TECHCOMFEST2025.jpg",
    certificate: "/assets/doc/TECHCOMFEST2025.pdf",
  },
  {
    id: 2,
    title: "Web Development Bootcamp | Python Django Web Course",
    type: "Training",
    date: "2025",
    description:
      "Mengikuti pelatihan online Web Development Bootcamp | Python Django Web Course yang diselenggarakan oleh Udemy.",
    image: "/assets/kegiatan/udemy.png",
    certificate: "/assets/doc/Dev-Python-Django.pdf",
  },
  {
    id: 3,
    title: "Pimpinan Ranting IPNU Tragung",
    type: "Organisasi",
    date: "2020-2022",
    description: "Aktif dalam organisasi pelajar IPNU di tingkat ranting sebagai Sekretaris.",
    image: "/assets/kegiatan/ipnu.jpg",
    certificate: null,
  },
  {
    id: 4,
    title: "Pengembangan Sistem Monitoring Kualitas Udara Ruangan Berbasis Iot Menggunakan Sensor Mq135 Dan Dht11.",
    type: "JOURNAL PUBLICATION",
    date: "2024",
    description: "Merupakan publikasi jurnal ilmiah tentang sistem monitoring kualitas udara berbasis IoT.",
    image: "/assets/kegiatan/jurnal.png",
    certificate: null,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Developer",
    company: "Tech Company",
    content: "Excellent developer with strong problem-solving skills and great attention to detail.",
    image: "/testimonial1.jpg",
  },
];

// ==============================================================================
// 7. MULTI-LANGUAGE TRANSLATIONS (EN & ID)
// ==============================================================================
export const translations = {
  en: {
    nav: {
      home: "Home",
      profile: "About",
      skills: "Tech Stack",
      projects: "Projects",
      activities: "Activities",
      contact: "Contact",
    },
    hero: {
      status: "Ready for Full-Time Opportunities",
      greeting: "I'm",
      title: "Fresh Graduate",
      description: "Applied Bachelor of Computer Engineering Technology from Politeknik Negeri Semarang. Passionate about Web Development, IoT Solutions, and Artificial Intelligence.",
      exploreBtn: "Explore Projects",
      cvBtn: "Download CV",
      roles: ["Mobile Development", "Web Development", "IT Support", "IoT Engineering"],
      cardRole: "Applied Bachelor of Computer Engineering",
      cardBackName: "Name",
      cardBackGraduation: "Graduation",
      cardBackGraduationValue: "Applied Bachelor of Computer Engineering Technology",
      cardBackInstitution: "Institution",
      cardBackInstitutionValue: "Politeknik Negeri Semarang",
    },
    about: {
      badge: "ABOUT ME",
      headline: "DISCIPLINED & ADAPTIVE COMPUTER ENGINEERING GRADUATE.",
      bio: "A disciplined, responsible, and open-minded Applied Bachelor of Computer Engineering Technology graduate from Politeknik Negeri Semarang. I possess practical experience and a broad technology engineering portfolio, ranging from developing integrated web applications and implementing Artificial Intelligence (AI) for smart analysis, to designing IoT-based automation systems. Backed by a solid internship track record and adaptive problem-solving skills, I am ready to fully contribute to an innovative professional work environment.",
      stats: {
        gpa: "GPA / 4.00",
        projects: "Completed Projects",
        domains: "Core Tech Domains",
      },
      touchBtn: "Get In Touch",
      githubBtn: "View GitHub",
      onlineStatus: "Available for Work",
      contactMe: "Contact Me",
    },
    skills: {
      title: "Tools & Tech Stack",
      subtitle: "Technologies and tools I use to build scalable applications and digital solutions.",
    },
    education: {
      milestone: "Academic Milestones",
      titlePrefix: "Educational",
      titleHighlight: "Journey",
      subtitle: "Academic foundation and development of computer engineering competencies.",
      scoreLabel: "Cumulative GPA Score",
      foundationTrack: "Core Foundation Track",
      focusLabel: "Focus & Applied Engineering:",
      foundationDesc: "Building deep understanding of computer networking architectures, routing protocols, and hardware system assembling.",
    },
    projects: {
      titlePrefix: "My",
      titleHighlight: "Projects",
      subtitle: "A showcase of engineering and software projects I have built.",
      sourceCode: "Source Code",
      livePreview: "Live Preview",
      techUsed: "Technologies Used:",
      items: [
        {
          id: 1,
          title: "Restaurant App",
          category: "Web Application",
          description: "Interactive restaurant discovery and recommendation web application with dynamic search, responsive design, and fluid filtering.",
          techText: "HTML, CSS, JS",
        },
        {
          id: 2,
          title: "My Portofolio",
          category: "Web Application",
          description: "Interactive 3D ID card portfolio website with damped physics lanyard swinging, studio spotlight lighting, and multi-language support.",
          techText: "React, Tailwind, Vite",
        },
        {
          id: 3,
          title: "Air Canvas AI",
          category: "Gesture Drawing",
          description: "Real-time contactless air-drawing system powered by computer vision, OpenCV, and hand landmark tracking algorithms.",
          techText: "Python, Computer Vision",
        },
        {
          id: 4,
          title: "GameWeb Application",
          category: "Web + IoT",
          description: "Interactive browser-based game integrated directly with real hardware ESP32 microcontrollers and physical button controllers.",
          techText: "HTML, CSS, JS, C++, ESP32",
        },
        {
          id: 5,
          title: "Dasai Mochi Robot",
          category: "IoT",
          description: "Smart desktop companion robot built on ESP32 featuring expressive animated OLED face reactions and interactive sensor response.",
          techText: "ESP32, C++",
        },
        {
          id: 6,
          title: "Food Freshness Detector",
          category: "Web + IoT",
          description: "Automated smart food freshness analysis system with gas and temperature sensors linked to a real-time web monitoring dashboard.",
          techText: "Java Console App, IoT",
        },
        {
          id: 7,
          title: "Ecommerce Web",
          category: "Website Application",
          description: "Full-featured modern e-commerce web platform with dynamic product catalogs, cart management, and seamless checkout workflow.",
          techText: "Laravel, HTML, CSS, JS",
        },
        {
          id: 8,
          title: "LMS Website App",
          category: "Website Application",
          description: "Comprehensive Learning Management System with lesson content management, interactive quizzes, and student portals.",
          techText: "Laravel, HTML, CSS, JS",
        },
      ],
    },
    activities: {
      titlePrefix: "Activities &",
      titleHighlight: "Experiences",
      subtitle: "Organizational leadership, certified technical bootcamps, and scientific research publications.",
      viewDoc: "View Certificate / Document",
      filters: {
        all: "ALL",
        voulenteer: "VOLUNTEER",
        volunteer: "VOLUNTEER",
        training: "TRAINING",
        organisasi: "ORGANIZATION",
        organization: "ORGANIZATION",
        "journal publication": "JOURNAL PUBLICATION",
      },
      items: [
        {
          id: 1,
          title: "TECHCOMFEST 2025",
          type: "Volunteer",
          date: "2025",
          description: "Served as organizing committee for TECHCOMFEST 2025 in the Publication, Documentation, and Event Decoration division.",
        },
        {
          id: 2,
          title: "Web Development Bootcamp | Python Django Web Course",
          type: "Training",
          date: "2025",
          description: "Completed intensive technical training on Python Django Full-Stack Web Development hosted by Udemy.",
        },
        {
          id: 3,
          title: "IPNU Tragung Student Organization",
          type: "Organization",
          date: "2020 - 2022",
          description: "Actively served as General Secretary in the IPNU student organization at the branch level, managing administrative workflows.",
        },
        {
          id: 4,
          title: "Indoor Air Quality Monitoring System Research",
          type: "Journal Publication",
          date: "2024",
          description: "Published scientific paper on developing an IoT-based indoor air quality monitoring system using MQ135 and DHT11 sensors.",
        },
      ],
    },
    contact: {
      titlePrefix: "Let's",
      titleHighlight: "Connect",
      subtitle: "Have an interesting idea or looking for a fast-learning engineer? Send a message and I'll respond promptly.",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderMessage: "Your Message",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      waIntro: "Hello Bayu, my name is",
      copyright: "Built with React & Tailwind",
    },
    footer: {
      brandBio: "Applied Bachelor of Computer Engineering Technology graduate. Passionate about Web Development, IoT, and Artificial Intelligence.",
      quickLinksTitle: "Quick Navigation",
      connectTitle: "Direct Contact",
      copyrightText: "All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      profile: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      activities: "Kegiatan",
      contact: "Kontak",
    },
    hero: {
      status: "Siap Untuk Peluang Kerja Profesional",
      greeting: "Saya",
      title: "Fresh Graduate",
      description: "Lulusan Sarjana Terapan Teknologi Rekayasa Komputer dari Politeknik Negeri Semarang. Antusias dalam Web Development, Sistem IoT, dan Artificial Intelligence.",
      exploreBtn: "Lihat Proyek",
      cvBtn: "Unduh CV",
      roles: ["Pengembangan Mobile", "Pengembangan Web", "Dukungan TI (IT Support)", "Rekayasa IoT"],
      cardRole: "Sarjana Terapan Rekayasa Komputer",
      cardBackName: "Nama",
      cardBackGraduation: "Kelulusan",
      cardBackGraduationValue: "Sarjana Terapan Teknologi Rekayasa Komputer",
      cardBackInstitution: "Institusi",
      cardBackInstitutionValue: "Politeknik Negeri Semarang",
    },
    about: {
      badge: "TENTANG SAYA",
      headline: "LULUSAN REKAYASA KOMPUTER YANG DISIPLIN & ADAPTIF.",
      bio: "Lulusan Sarjana Terapan Teknologi Rekayasa Komputer dari Politeknik Negeri Semarang yang berdedikasi, disiplin, dan terbuka terhadap perkembangan teknologi. Memiliki pengalaman praktis dalam membangun aplikasi web terintegrasi, penerapan Artificial Intelligence (AI) untuk analisis cerdas, hingga perancangan otomasi berbasis IoT. Didukung rekam jejak magang yang solid dan keterampilan pemecahan masalah yang adaptif, saya siap berkontribusi secara profesional di lingkungan kerja inovatif.",
      stats: {
        gpa: "IPK / 4.00",
        projects: "Proyek Selesai",
        domains: "Pilar Teknologi",
      },
      touchBtn: "Hubungi Saya",
      githubBtn: "Lihat GitHub",
      onlineStatus: "Siap Bekerja",
      contactMe: "Hubungi Saya",
    },
    skills: {
      title: "Tools & Tech Stack",
      subtitle: "Teknologi dan tools yang saya gunakan untuk membangun aplikasi dan solusi digital.",
    },
    education: {
      milestone: "Pencapaian Akademik",
      titlePrefix: "Perjalanan",
      titleHighlight: "Pendidikan",
      subtitle: "Fondasi akademik dan pembentukan keahlian rekayasa teknologi komputasi.",
      scoreLabel: "Skor IPK Kumulatif",
      foundationTrack: "Fondasi Utama",
      focusLabel: "Fokus & Penerapan Rekayasa:",
      foundationDesc: "Membangun pemahaman mendalam tentang arsitektur jaringan komputer, routing protokol, dan perakitan sistem perangkat keras.",
    },
    projects: {
      titlePrefix: "Proyek",
      titleHighlight: "Saya",
      subtitle: "Beberapa project rekayasa perangkat lunak & hardware yang pernah saya kerjakan.",
      sourceCode: "Kode Sumber",
      livePreview: "Demo Langsung",
      techUsed: "Teknologi Digunakan:",
      items: [
        {
          id: 1,
          title: "Restaurant App",
          category: "Web Application",
          description: "Aplikasi web pencarian dan rekomendasi restoran interaktif yang dinamis, terstruktur, dan responsif.",
          techText: "HTML, CSS, JS",
        },
        {
          id: 2,
          title: "My Portofolio",
          category: "Web Application",
          description: "Website portofolio interaktif dengan 3D ID Card, animasi lanyard fisika, dark studio lighting, dan dukungan multi-bahasa.",
          techText: "React, Tailwind, Vite",
        },
        {
          id: 3,
          title: "Air Canvas AI",
          category: "Gesture Drawing",
          description: "Sistem menggambar di udara secara nirsentuh berbasis computer vision dan pelacakan gestur tangan secara real-time.",
          techText: "Python, Computer Vision",
        },
        {
          id: 4,
          title: "GameWeb Application",
          category: "Web + IoT",
          description: "Aplikasi permainan web interaktif yang terhubung langsung dengan controller hardware IoT ESP32.",
          techText: "HTML, CSS, JS, C++, ESP32",
        },
        {
          id: 5,
          title: "Dasai Mochi Robot",
          category: "IoT",
          description: "Robot desktop cerdas berbasis ESP32 dengan display ekspresi animasi dan respon sensor interaktif.",
          techText: "ESP32, C++",
        },
        {
          id: 6,
          title: "Pendeteksi Basi (MBG)",
          category: "Web + IoT",
          description: "Sistem pendeteksi kesegaran makanan otomatis berbasis sensor gas dan dashboard pemantauan real-time.",
          techText: "Java Console App, IoT",
        },
        {
          id: 7,
          title: "Ecommerce Web",
          category: "Website Application",
          description: "Platform e-commerce modern dengan katalog produk dinamis, keranjang belanja, dan alur checkout terintegrasi.",
          techText: "Laravel, HTML, CSS, JS",
        },
        {
          id: 8,
          title: "LMS Website App",
          category: "Website Application",
          description: "Learning Management System lengkap dengan manajemen materi belajar, kuis interaktif, dan portal siswa.",
          techText: "Laravel, HTML, CSS, JS",
        },
      ],
    },
    activities: {
      titlePrefix: "Kegiatan &",
      titleHighlight: "Pengalaman",
      subtitle: "Pengalaman organisasi, pelatihan bersertifikat, dan kontribusi publikasi ilmiah.",
      viewDoc: "Lihat Sertifikat / Dokumen",
      filters: {
        all: "SEMUA",
        voulenteer: "VOLUNTEER",
        volunteer: "VOLUNTEER",
        training: "PELATIHAN",
        organisasi: "ORGANISASI",
        organization: "ORGANISASI",
        "journal publication": "PUBLIKASI JURNAL",
      },
      items: [
        {
          id: 1,
          title: "TECHCOMFEST 2025",
          type: "Volunteer",
          date: "2025",
          description: "Menjadi panitia dalam acara tahunan TECHCOMFEST 2025 sebagai Sie Publikasi, Dokumentasi, dan Dekorasi.",
        },
        {
          id: 2,
          title: "Web Development Bootcamp | Python Django Web Course",
          type: "Pelatihan",
          date: "2025",
          description: "Mengikuti pelatihan online intensif Web Development Bootcamp | Python Django Web Course oleh Udemy.",
        },
        {
          id: 3,
          title: "Pimpinan Ranting IPNU Tragung",
          type: "Organisasi",
          date: "2020 - 2022",
          description: "Aktif dalam organisasi pelajar IPNU di tingkat ranting sebagai Sekretaris, mengelola tata kelola administrasi.",
        },
        {
          id: 4,
          title: "Pengembangan Sistem Monitoring Kualitas Udara Ruangan",
          type: "Publikasi Jurnal",
          date: "2024",
          description: "Publikasi jurnal ilmiah tentang sistem monitoring kualitas udara ruangan berbasis IoT menggunakan sensor MQ135 dan DHT11.",
        },
      ],
    },
    contact: {
      titlePrefix: "Mari",
      titleHighlight: "Terhubung",
      subtitle: "Punya ide menarik atau membutuhkan engineer yang cepat belajar? Kirimkan pesan dan saya akan membalasnya sesegera mungkin.",
      placeholderName: "Nama Anda",
      placeholderEmail: "Email Anda",
      placeholderMessage: "Tuliskan pesan Anda di sini...",
      sendBtn: "Kirim Pesan",
      sendingBtn: "Mengirim...",
      waIntro: "Halo Bayu, nama saya",
      copyright: "Dibuat dengan React & Tailwind",
    },
    footer: {
      brandBio: "Lulusan Sarjana Terapan Teknologi Rekayasa Komputer. Antusias dalam Web Development, IoT, dan Artificial Intelligence.",
      quickLinksTitle: "Navigasi Cepat",
      connectTitle: "Kontak Langsung",
      copyrightText: "Hak cipta dilindungi undang-undang.",
    },
  },
};
