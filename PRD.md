PT. Louis Pandame Siregar - Product Requirements Document1. Project OverviewAplikasi ini adalah sebuah Website Company Profile statis modern untuk PT. Louis Pandame Siregar, sebuah perusahaan yang bergerak di bidang kontraktor. Tujuan utama dari website ini adalah untuk menonjolkan profesionalisme perusahaan, membangun kepercayaan calon klien, dan secara elegan memamerkan galeri portofolio proyek-proyek yang telah dikerjakan. Website dirancang tanpa sistem backend/database kompleks demi menjamin performa maksimal (kecepatan loading tinggi) dan keamanan absolut.2. Target Audience, User Roles \& Route ProtectionRole: Publik / Pengunjung Umum: Dapat melihat seluruh informasi perusahaan, layanan, portofolio, dan melakukan kontak.Role Admin: TIDAK ADA. Sesuai kebutuhan MVP, tidak ada sistem autentikasi, login, atau panel admin.Keamanan \& Middleware: Tidak diperlukan route protection khusus karena semua halaman bersifat publik.3. Core Features (MVP) \& LogicAplikasi ini mengadopsi pendekatan One-Page Layout (dengan navigasi smooth scrolling) atau Multi-page statis dengan bagian-bagian utama berikut:Hero Section (Beranda): Menyambut pengunjung dengan tagline profesionalisme perusahaan, elemen visual konstruksi, dan Call-to-Action (CTA) "Lihat Portofolio" atau "Hubungi Kami".Tentang Kami (About Us): Penjelasan profil PT. Louis Pandame Siregar, visi, misi, dan nilai profesionalisme.Layanan (Services): Menampilkan daftar spesialisasi jasa kontraktor yang ditawarkan.Portofolio (Galeri Proyek): Grid layout responsif untuk memamerkan foto-foto proyek. Data proyek diambil dari file lokal (.json), dan gambar disimpan di dalam direktori /public/assets/ di Next.js.Kontak (Contact Us) \& Integrasi:WhatsApp Direct: Tombol CTA yang langsung membuka WhatsApp menggunakan nomor 085779991402.Format URL WA yang wajib digunakan: https://wa.me/6285779991402?text=Halo%20tim%20PT.%20Louis%20Pandame%20Siregar,%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20proyek%20konstruksi%20saya.Email Direct: Tombol atau tautan mailto:louispandame@gmail.com.4. Tech Stack \& LibrariesFrontend Framework: Next.js (App Router, React 18+).Bahasa: TypeScript (Wajib strict mode).Styling \& UI: Tailwind CSS.Color Palette: Tema warna kustom wajib disetel di tailwind.config.ts:Primary: Kuning Konstruksi (misal: #eab308 atau varian yellow-500 / yellow-600).Secondary/Background: Abu-abu Baja (misal: #334155 varian slate-700 atau #1e293b).Text: Putih atau Abu-abu terang untuk background gelap, dan Slate-800 untuk background terang.Dark Mode: TIDAK ADA. Wajib hardcode konfigurasi UI ke mode "Light" atau satu skema warna statis. DILARANG menginstal atau mengkonfigurasi next-themes.Icons: Lucide React.Database \& Backend: DITIADAKAN. Semua data dinamis menggunakan Local JSON.5. Local Data Schema (Pengganti Database)Karena tidak menggunakan database eksternal/ORM, AI Agent WAJIB membuat file data/portfolio.json dan data/services.json dengan skema interface TypeScript berikut sebagai acuan render:// types/index.ts

export interface Service {

&#x20; id: string;

&#x20; title: string;

&#x20; description: string;

&#x20; iconName: string; // Referensi nama icon dari Lucide React

}



export interface Project {

&#x20; id: string;

&#x20; title: string;

&#x20; category: string; // e.g., "Konstruksi Baja", "Bangunan Komersial"

&#x20; description: string;

&#x20; imageUrl: string; // e.g., "/images/portfolio/project-1.jpg"

&#x20; year: number;

}

6\. User Interface \& Routing (Struktur Halaman)/ (Root / Landing Page):Navbar (Sticky, menampilkan logo dan menu jangkar/anchor: Beranda, Tentang, Layanan, Portofolio, Kontak).<HeroSection /><AboutSection /><ServicesSection /><PortfolioSection /><ContactSection /> (Berisi tombol interaktif WhatsApp dan Email)Footer (Informasi hak cipta dan detail kontak singkat).7. Step-by-Step Implementation Plan (Untuk Prompting AI)Berikan langkah-langkah ini secara bertahap kepada AI Coding Agent Anda:Langkah 1 (Setup Next.js \& Konfigurasi Desain): Inisialisasi Next.js (App Router, TypeScript, Tailwind). Buka tailwind.config.ts, tambahkan palet warna kustom "Abu Baja" dan "Kuning Konstruksi". Pastikan pengaturan dark mode dimatikan sepenuhnya. Setup direktori /public/images untuk tempat menaruh gambar.Langkah 2 (Struktur Data Lokal): Buat direktori /types dan /data. Definisikan interface TypeScript untuk Project dan Service. Buat file portfolio.json dan services.json berisi 3-4 data dummy awal dengan path gambar menunjuk ke /images/....Langkah 3 (Komponen UI Dasar): Buat komponen Navbar.tsx (dengan smooth scrolling ke section ID) dan Footer.tsx. Gunakan warna Abu Baja untuk header/footer agar terlihat kokoh dan profesional.Langkah 4 (Pembuatan Sections Halaman): Bangun dan rakit komponen <Hero />, <About />, <Services /> (mapping data services.json), dan <Portfolio /> (mapping data portfolio.json menggunakan CSS Grid). Gunakan aksen Kuning Konstruksi untuk tombol, garis bawah (underline), atau ikon.Langkah 5 (Integrasi Kontak \& Finalisasi): Buat komponen <Contact />. Implementasikan tombol WhatsApp dengan hyperlink API WhatsApp yang memuat nomor 6285779991402 beserta template pesan bawaan, dan tombol Email dengan mailto:louispandame@gmail.com. Periksa responsivitas (mobile-friendly) di seluruh halaman.

