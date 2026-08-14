const materials = [
  {
    title: "Hiragana Dasar",
    description:
      "Mengenal 46 huruf Hiragana dasar dan cara membacanya.",
    level: "Pemula",
  },
  {
    title: "Hiragana Dakuon",
    description:
      "Belajar huruf Hiragana dengan tanda dakuten seperti が, じ, づ, dan ば.",
    level: "Pemula",
  },
  {
    title: "Hiragana Handakuon",
    description:
      "Belajar kombinasi huruf dengan handakuten seperti ぱ, ぴ, ぷ, ぺ, dan ぽ.",
    level: "Pemula",
  },
  {
    title: "Hiragana Yōon",
    description:
      "Belajar kombinasi seperti きゃ, きゅ, きょ dan kombinasi lainnya.",
    level: "Pemula",
  },
];

export default function HiraganaPage() {
  return (
    <main className="min-h-screen bg-[#faf7f0]">

      {/* Header */}
      <header className="border-b border-[#e8e2d7] bg-[#faf7f0]">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <a
            href="/"
            className="text-sm font-semibold text-[#6f8f72]"
          >
            ← Kembali ke Beranda
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <p className="text-sm font-semibold tracking-widest text-[#6f8f72]">
          MATERIAL · PEMULA
        </p>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
            🌸
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#405743]">
              Hiragana
            </h1>

            <p className="mt-1 text-[#777c75]">
              Belajar dasar huruf Hiragana Bahasa Jepang.
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#405743]">
              Materi Hiragana
            </h2>

            <p className="mt-2 text-sm text-[#777c75]">
              Pilih materi yang ingin kamu pelajari.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {materials.map((material, index) => (
              <div
                key={material.title}
                className="rounded-3xl border border-[#e8e2d7] bg-[#faf7f0] p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <span className="text-sm text-[#6f8f72]">
                      Materi {index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-[#405743]">
                      {material.title}
                    </h3>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#6f8f72]">
                    {material.level}
                  </span>

                </div>

                <p className="mt-4 text-sm leading-6 text-[#777c75]">
                  {material.description}
                </p>

                <a
  href="/materi/hiragana/hiragana-dasar.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block rounded-xl bg-[#6f8f72] px-5 py-3 text-sm font-semibold text-white"
>
  Buka Materi →
</a>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e2d7] px-6 py-8 text-center text-sm text-[#858a82]">
        © 2026 アディト · Japanese Lesson Fighter Archive
      </footer>

    </main>
  );
}