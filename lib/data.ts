/**
 * Semua konten web ada di file ini.
 * Ganti peran anggota, foto, dan gambar layar di sini saja.
 */

export const TEAM_NAME = "Kelompok 4";
export const TEAM_ORIGIN = "Pendidikan Teknik Informatika · Fakultas Teknik · Universitas Negeri Malang";

export type Member = {
  name: string;
  nim: string;
  role: string; // ganti dengan role masing-masing, misal "UI Designer"
  color: string; // warna aksen kartu
  tint: string; // warna latar section saat kartu ini di depan
  photo?: string; // contoh: "/tim/nabigh.jpg" (taruh file di folder public/tim, rasio 3:4)
};

export const members: Member[] = [
  { name: "Nabigh Nailur Ridho", nim: "240533608084", role: "Role belum diisi", color: "#ff6b57", tint: "#ffe3dc" },
  { name: "Nazwa Hilmia Zida", nim: "240533604545", role: "Role belum diisi", color: "#22c3a4", tint: "#d6f5ee" },
  { name: "Paul Fajar Sabatino", nim: "240533609596", role: "Role belum diisi", color: "#ffc23d", tint: "#fff0c9" },
  { name: "Yemima Natasha Henna", nim: "240533607246", role: "Role belum diisi", color: "#8b77ff", tint: "#e7e2ff" },
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  status: "selesai" | "segera";
  color: string;
  tags: string[];
  thumbs?: string[];
};

export const projects: Project[] = [
  {
    slug: "wisata",
    title: "LENGANG",
    kicker: "Wisata Government · Proposal UI/UX Industri",
    summary:
      "Layanan informasi keramaian wisata alam dari pemerintah daerah untuk Kota Batu dan Kabupaten Malang, supaya wisatawan rentan bisa memilih waktu dan tempat yang lebih tenang.",
    status: "selesai",
    color: "#24563f",
    tags: ["Figma", "Design Thinking", "Tourism Crowd Intelligence"],
    thumbs: ["/lengang/01-beranda.jpg", "/lengang/02-detail-destinasi.jpg", "/lengang/03-rencana-b.jpg"],
  },
  {
    slug: "pendidikan",
    title: "Pendidikan",
    kicker: "Proyek berikutnya",
    summary: "Proyek UI/UX berikutnya. Saat ini masih dalam tahap persiapan.",
    status: "segera",
    color: "#8b77ff",
    tags: ["Segera hadir"],
  },
];

/* ------------------------------------------------------------------ */
/* LENGANG                                                             */
/* ------------------------------------------------------------------ */

export const LENGANG = {
  fullTitle:
    "Perancangan Layanan Informasi LENGANG Berbasis Tourism Crowd Intelligence untuk Keramaian dan Alternatif Destinasi Wisata Alam bagi Wisatawan Rentan di Kota Batu dan Kabupaten Malang",
  figmaFile: "https://www.figma.com/design/6VF9F3FwooXDK0563AEKTX/LENGANG?node-id=0-1",
  protoWisatawan:
    "https://www.figma.com/proto/6VF9F3FwooXDK0563AEKTX/LENGANG?node-id=3-2&starting-point-node-id=3-2&scaling=contain",
  protoPemda:
    "https://www.figma.com/proto/6VF9F3FwooXDK0563AEKTX/LENGANG?node-id=20-2&starting-point-node-id=20-2&scaling=contain",
};

export const lengangProblems = [
  { title: "Tidak menjawab “ramai atau tidak?”", body: "Layanan wisata yang ada menampilkan tiket, lokasi, dan kuliner, tapi bukan kepadatan per destinasi." },
  { title: "Tidak ada rencana cadangan", body: "Saat sudah terlanjur berangkat, wisatawan tidak punya info cepat soal alternatif sejenis yang lebih sepi." },
  { title: "Wisatawan rentan paling terdampak", body: "Lansia, keluarga dengan balita, ibu hamil, penyandang disabilitas, dan yang sensitif keramaian." },
  { title: "Pemerintah tidak melihat sebaran", body: "Data kunjungan umumnya tahunan, tidak menunjukkan titik mana yang padat dan jam berapa." },
];

export const lengangStats = [
  { value: "10,8 jt", label: "kunjungan Kota Batu 2024 (data sementara)" },
  { value: "5 jt", label: "wisatawan Kabupaten Malang 2025 (BPS)" },
  { value: "21", label: "layar high-fidelity di Figma" },
  { value: "12", label: "fitur, didukung 4 modul AI" },
];

export const lengangStatus = [
  { label: "Lengang", color: "#d8eedf", ink: "#1f5b3c" },
  { label: "Sedang", color: "#fbefc4", ink: "#7a5a00" },
  { label: "Ramai", color: "#fde0cf", ink: "#9a3f12" },
  { label: "Padat", color: "#f9d5d5", ink: "#9b1c24" },
  { label: "Belum ada info", color: "#ececec", ink: "#4a4a4a" },
];

export const lengangAI = [
  { name: "Crowd Prediction", body: "Memprediksi kepadatan destinasi dan titik kawasan berdasarkan hari, jam, musim, event, dan histori.", example: "Area air terjun Coban Rondo diperkirakan padat pukul 10.00–13.00" },
  { name: "Hotspot Detection", body: "Menemukan titik yang konsisten jadi pusat konsentrasi, bukan ramai sesaat.", example: "Area air terjun dan area parkir Coban Rondo adalah hotspot tetap" },
  { name: "Pattern Detection", body: "Mengaitkan waktu, hari, cuaca, atau event dengan pergerakan pengunjung.", example: "Sabtu–Minggu cuaca cerah → padat 10.00–13.00" },
  { name: "Recommendation", body: "Alternatif lebih sepi untuk wisatawan, dan usulan pengelolaan untuk pemerintah.", example: "Sama-sama air terjun, diperkirakan lebih sepi" },
];

export const lengangFeatures = [
  "Profil Kenyamanan",
  "Status Keramaian per destinasi & per titik",
  "Prakiraan Jam Sepi",
  "Peta Keramaian",
  "Rencana B",
  "Pantau Destinasi",
  "Lapor Kondisi",
  "Pengumuman Resmi",
  "Ringkasan Kepadatan & Tabel Hotspot",
  "Panel Pola Terdeteksi",
  "Panel Rekomendasi Pengelolaan",
  "Panel Pengelola",
];

export const lengangSteps = [
  { name: "Empathize", body: "Data kunjungan, penelitian daya dukung, berita libur panjang, dan telaah aplikasi sejenis." },
  { name: "Define", body: "Masalah inti dipecah jadi 4 akar masalah dan 3 pertanyaan desain." },
  { name: "Ideate", body: "12 fitur dan 4 modul AI, dipetakan ke tiap pertanyaan desain." },
  { name: "Prototype", body: "Mockup high-fidelity jadi prototipe interaktif Figma dengan 2 alur." },
  { name: "Test", body: "Penelusuran skenario, evaluasi heuristik, dan pemeriksaan WCAG 2.2 AA." },
];

export type Screen = {
  title: string;
  note: string;
  image?: string;
};

export type ScreenGroup = {
  id: string;
  label: string;
  accent: string;
  proto?: string;
  screens: Screen[];
};

/**
 * Layar dari file Figma LENGANG (halaman "Layar penuh (statis)").
 * Untuk menambah layar: ekspor frame dari Figma ke public/lengang/, lalu tambahkan di sini.
 * Layar panjang bisa digulir di dalam bingkai HP.
 */
export const lengangGroups: ScreenGroup[] = [
  {
    id: "awal",
    label: "Alur awal",
    accent: "#2f6b4f",
    proto: LENGANG.protoWisatawan,
    screens: [
      { title: "Splash", note: "Layar pembuka LENGANG, layanan informasi wisata Pemda.", image: "/lengang/00-splash.jpg" },
      { title: "Pengenalan 1", note: "Layar pengenalan pertama dari tiga: apa itu LENGANG.", image: "/lengang/0a-pengenalan-1.jpg" },
      { title: "Pengenalan 2", note: "Layar pengenalan kedua dari tiga.", image: "/lengang/0b-pengenalan-2.jpg" },
      { title: "Pengenalan 3", note: "Layar pengenalan ketiga sebelum masuk akun.", image: "/lengang/0c-pengenalan-3.jpg" },
      { title: "Masuk (login dummy)", note: "Masuk akun atau lanjut sebagai tamu. Akun contoh sudah terisi untuk prototipe.", image: "/lengang/0d-masuk.jpg" },
      { title: "Atur Profil Kenyamanan", note: "Opsional: kebutuhan rombongan diisi sekali untuk menyaring rekomendasi.", image: "/lengang/0e-atur-profil.jpg" },
      { title: "Izin Lokasi Anonim", note: "Opsional: berbagi lokasi hanya di dalam kawasan wisata, tanpa identitas.", image: "/lengang/0f-izin-lokasi.jpg" },
    ],
  },
  {
    id: "wisatawan",
    label: "Aplikasi wisatawan",
    accent: "#24563f",
    proto: LENGANG.protoWisatawan,
    screens: [
      { title: "Beranda", note: "Pencarian, filter coban/sumber/camping, info resmi Dinas, dan destinasi yang sedang lengang.", image: "/lengang/01-beranda.jpg" },
      { title: "Detail Destinasi (Padat)", note: "Kondisi sekarang dengan label sumber, keramaian per titik kawasan, prakiraan jam sepi, dan akses jalur.", image: "/lengang/02-detail-destinasi.jpg" },
      { title: "Rencana B", note: "Alternatif sejenis yang lebih sepi, lengkap dengan alasan dari AI.", image: "/lengang/03-rencana-b.jpg" },
      { title: "Peta Keramaian", note: "Pin berstatus di peta, bisa dialihkan ke tampilan daftar.", image: "/lengang/04-peta-keramaian.jpg" },
      { title: "Pantau", note: "Kabar otomatis saat destinasi pilihan diperkirakan lengang.", image: "/lengang/05-pantau.jpg" },
      { title: "Pantau (kosong)", note: "Tampilan saat belum ada destinasi yang dipantau.", image: "/lengang/05b-pantau-kosong.jpg" },
      { title: "Profil", note: "Profil Kenyamanan, pengaturan lokasi anonim, dan pintu masuk petugas Pemda (demo).", image: "/lengang/06-profil.jpg" },
      { title: "Kondisi Data", note: "Variasi tampilan saat data lengkap, kurang, atau belum ada info.", image: "/lengang/07-kondisi-data.jpg" },
      { title: "Laporkan Kondisi", note: "Pengunjung melaporkan keramaian di lokasi, dikirim tanpa nama.", image: "/lengang/08-laporkan-kondisi.jpg" },
      { title: "Pengumuman Resmi", note: "Imbauan dari Dinas Pariwisata dengan label Info resmi, diarahkan ke Rencana B.", image: "/lengang/09-pengumuman-resmi.jpg" },
    ],
  },
  {
    id: "pemda",
    label: "Pemerintah daerah",
    accent: "#1b3a2d",
    proto: LENGANG.protoPemda,
    screens: [
      { title: "Masuk Petugas", note: "Akses untuk Dinas Pariwisata dan pengelola destinasi.", image: "/lengang/g0-masuk-petugas.jpg" },
      { title: "Ringkasan & Hotspot", note: "Jumlah titik per status, dan tabel hotspot yang paling sering padat.", image: "/lengang/g1-ringkasan-hotspot.jpg" },
      { title: "Detail Hotspot (AI)", note: "Prediksi per jam, pola terdeteksi, dan usulan pengelolaan berlabel Usulan AI.", image: "/lengang/g2-detail-hotspot.jpg" },
      { title: "Panel Pengelola", note: "Pengelola memperbarui status dengan satu ketukan, menggantikan perkiraan AI.", image: "/lengang/g3-panel-pengelola.jpg" },
    ],
  },
];
