export default function Companies() {
  return (
    <main className="pt-24 pb-20 max-w-[1440px] mx-auto px-8 min-h-screen">
      <div className="mb-12">
        <h1 className="text-[48px] font-bold tracking-tight text-on-surface leading-none mb-2">Companies</h1>
        <p className="text-secondary text-[15px]">Discover the worlds leading employers inside our ecosystem.</p>
      </div>
      <div className="flex flex-col items-center justify-center h-64 bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/15 text-secondary">
        <p className="text-lg">No companies listed yet.</p>
      </div>
    </main>
  );
}
