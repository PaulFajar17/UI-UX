import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto bg-ink text-cream rounded-t-[40px]">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl font-bold">Kelompok 4</p>
          <p className="text-cream/60 text-sm mt-1">Pendidikan Teknik Informatika<br />Fakultas Teknik · Universitas Negeri Malang</p>
        </div>
        <div className="flex gap-2">
          {[
            { name: "Tim", href: "/#tim" },
            { name: "Karya", href: "/karya" },
          ].map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-cream/20 hover:bg-sun hover:text-ink hover:border-sun transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-cream/40 text-xs pb-8">&copy; {new Date().getFullYear()} Kelompok 4</p>
    </footer>
  );
}
