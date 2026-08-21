/**
 * ==============================================================================
 * STATIC DATABASE ADAPTER (src/data/portfolioData.js)
 * ==============================================================================
 * Seluruh data mentah tersimpan dalam format Database Statis JSON:
 * 👉 `src/data/db.json`
 *
 * File ini mengimpor `db.json` dan menyediakannya secara modular ke komponen React.
 * Untuk menambah/mengedit data, cukup ubah file `src/data/db.json`!
 * ==============================================================================
 */

import db from './db.json';

// 1. BIODATA & KONTAK UTAMA
export const personalData = {
  ...db.personal,
  bio: typeof db.personal.bio === 'object' ? db.personal.bio.id : db.personal.bio,
};

// 2. SOCIAL MEDIA LINKS
export const socialLinks = db.socials;

// 3. HERO ROLES (Teks berputar di banner utama)
export const heroRoles = db.hero.roles.id || db.hero.roles.en || [];

// 4. TECH STACK & SKILLS
export const techStackList = db.techStack || [];
export const skills = {
  technical: db.techStack.map(item => ({ name: item.name, category: "Tech Stack" })),
  soft: [
    "Problem Solving",
    "Kolaborasi Tim",
    "Komunikasi",
    "Manajemen Waktu",
    "Pemikiran Kritis",
    "Adaptabilitas",
    "Kepemimpinan",
    "Pemikiran Kreatif"
  ],
};

// 5. RIWAYAT PENDIDIKAN
export const educationList = db.education || [];
export const education = educationList;

// 6. PROYEK / PORTOFOLIO (Default ID fallback)
export const projects = (db.projects || []).map(proj => ({
  ...proj,
  title: typeof proj.title === 'object' ? proj.title.id || proj.title.en : proj.title,
  category: typeof proj.category === 'object' ? proj.category.id || proj.category.en : proj.category,
  description: typeof proj.description === 'object' ? proj.description.id || proj.description.en : proj.description,
}));

// 7. KEGIATAN & SERTIFIKAT (Default ID fallback)
export const activities = (db.activities || []).map(act => ({
  ...act,
  title: typeof act.title === 'object' ? act.title.id || act.title.en : act.title,
  type: typeof act.type === 'object' ? act.type.id || act.type.en : act.type,
  description: typeof act.description === 'object' ? act.description.id || act.description.en : act.description,
}));

export const testimonials = db.testimonials || [];

// 8. MULTI-LANGUAGE TRANSLATIONS (EN & ID) DIBANGUN OTOMATIS DARI db.json
const buildTranslation = (lang) => {
  const ui = db.ui[lang] || db.ui.id;
  return {
    nav: ui.nav,
    hero: {
      status: db.hero.status[lang] || db.hero.status.id,
      greeting: db.hero.greeting[lang] || db.hero.greeting.id,
      title: db.hero.title[lang] || db.hero.title.id,
      description: db.hero.description[lang] || db.hero.description.id,
      exploreBtn: lang === 'en' ? "Explore Projects" : "Lihat Proyek",
      cvBtn: lang === 'en' ? "Download CV" : "Unduh CV",
      roles: db.hero.roles[lang] || db.hero.roles.id,
      cardRole: db.hero.cardRole[lang] || db.hero.cardRole.id,
      cardBackName: db.hero.cardBackName[lang] || db.hero.cardBackName.id,
      cardBackGraduation: db.hero.cardBackGraduation[lang] || db.hero.cardBackGraduation.id,
      cardBackGraduationValue: db.hero.cardBackGraduationValue[lang] || db.hero.cardBackGraduationValue.id,
      cardBackInstitution: db.hero.cardBackInstitution[lang] || db.hero.cardBackInstitution.id,
      cardBackInstitutionValue: db.hero.cardBackInstitutionValue[lang] || db.hero.cardBackInstitutionValue.id,
    },
    about: {
      ...ui.about,
      bio: typeof db.personal.bio === 'object' ? db.personal.bio[lang] || db.personal.bio.id : db.personal.bio,
    },
    skills: ui.skills,
    education: ui.education,
    projects: {
      ...ui.projects,
      items: (db.projects || []).map(p => ({
        id: p.id,
        title: typeof p.title === 'object' ? p.title[lang] || p.title.id : p.title,
        category: typeof p.category === 'object' ? p.category[lang] || p.category.id : p.category,
        description: typeof p.description === 'object' ? p.description[lang] || p.description.id : p.description,
        techText: p.techText || (p.technologies ? p.technologies.join(', ') : ''),
      })),
    },
    activities: {
      ...ui.activities,
      items: (db.activities || []).map(a => ({
        id: a.id,
        title: typeof a.title === 'object' ? a.title[lang] || a.title.id : a.title,
        type: typeof a.type === 'object' ? a.type[lang] || a.type.id : a.type,
        description: typeof a.description === 'object' ? a.description[lang] || a.description.id : a.description,
      })),
    },
    contact: ui.contact,
    footer: ui.footer,
  };
};

export const translations = {
  en: buildTranslation('en'),
  id: buildTranslation('id'),
};

// Export raw database object if needed
export default db;
