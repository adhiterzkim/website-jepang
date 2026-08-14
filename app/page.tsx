const categories = [
  {
    icon: "🌸",
    title: "Hiragana",
    description: "Belajar huruf Hiragana dari dasar.",
  },
  {
    icon: "🩷",
    title: "Katakana",
    description: "Belajar huruf Katakana dan penggunaannya.",
  },
  {
    icon: "📖",
    title: "Grammar",
    description: "Pelajari pola kalimat Bahasa Jepang.",
  },
  {
    icon: "📚",
    title: "Vocabulary",
    description: "Kumpulan kosakata Bahasa Jepang.",
  },
  {
    icon: "漢",
    title: "Kanji",
    description: "Belajar Kanji berdasarkan level.",
  },
  {
    icon: "🎧",
    title: "Listening",
    description: "Latihan mendengarkan Bahasa Jepang.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[#e8e2d7] bg-[#faf7f0]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-bold text-[#405743]">
              にほんごノート
            </h1>
            <p className="text-xs text-[#7b8178]">
              Japanese Learning Archive
            </p>
          </div>

          <div className="hidden gap-8 text-sm font-medium text-[#596057] md:flex">
            <a href="#materi">Materi</a>
            <a href="#tentang">Tentang</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[#6f8f72]">
            日本語を楽しく学ぼう
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#405743] md:text-6xl">
            Belajar Bahasa Jepang
            <br />
            dengan lebih menyenangkan.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#6b7168] md:text-lg">
            Kumpulan materi belajar Bahasa Jepang yang dapat diakses
            secara gratis. Mulai dari Hiragana, Katakana, Grammar,
            Vocabulary, hingga Kanji.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-2xl items-center rounded-2xl border border-[#ded8cb] bg-white px-5 py-4 shadow-sm">
            <span className="mr-3 text-xl">🔎</span>

            <input
              type="text"
              placeholder="Cari materi belajar..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#a2a69f]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="materi"
        className="bg-white px-6 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-widest text-[#6f8f72]">
              MATERIALS
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#405743]">
              Pilih materi belajarmu
            </h2>

            <p className="mt-3 text-[#777c75]">
              Temukan materi yang ingin kamu pelajari.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-[#e8e2d7] bg-[#faf7f0] p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-[#405743]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777c75]">
                  {category.description}
                </p>

                <a
  href={
    category.title === "Hiragana"
      ? "/materi/hiragana"
      : "#"
  }
  className="mt-6 inline-block text-sm font-semibold text-[#6f8f72]"
>
  Lihat materi →
</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="tentang"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#405743] px-8 py-12 text-center text-white md:px-16">
          <p className="text-3xl">🌱</p>

          <h2 className="mt-4 text-3xl font-bold">
            Belajar sedikit demi sedikit.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#e4eadf]">
            にほんごノート dibuat sebagai tempat untuk mengarsipkan
            dan berbagi materi belajar Bahasa Jepang secara gratis.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e2d7] px-6 py-8 text-center text-sm text-[#858a82]">
        © 2026 アディト · Japanese Lesson Fighter Archive
      </footer>
    </main>
  );
}