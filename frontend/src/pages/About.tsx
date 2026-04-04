export default function About() {
  return (
    <main className="pt-24 pb-20 max-w-[1440px] mx-auto px-8 min-h-screen">
      <div className="mb-12">
        <h1 className="text-[48px] font-bold tracking-tight text-on-surface leading-none mb-2">About JoByte</h1>
        <p className="text-secondary text-[15px]">Precision in careers. Re-engineering talent acquisition with the architectural curator mindset.</p>
      </div>
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/15 p-10 mt-8">
        <h2 className="text-[24px] font-bold text-on-surface mb-4">Our Mission</h2>
        <p className="text-secondary text-[15px] leading-relaxed max-w-3xl">
          Unlike traditional job portals that feel cluttered and transactional, this system treats career opportunities as high-end artifacts.
          We move away from the "list-heavy" template look and toward a sophisticated, MNC-grade editorial experience.
        </p>
      </div>
    </main>
  );
}
