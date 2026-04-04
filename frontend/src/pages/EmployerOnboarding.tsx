import { Link } from 'react-router-dom';

export default function EmployerOnboarding() {
  return (
    <div className="font-body text-on-surface antialiased min-h-screen flex items-center justify-center py-12 px-4 bg-[#f8f9fa]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#191c1d] dark:text-white">
            <span className="text-[#b7131a] material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            JoByte
          </div>
          <div className="flex gap-4">
            <button className="text-neutral-600 dark:text-neutral-400 font-normal text-[15px] hover:text-[#b7131a] transition-colors">Save for later</button>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-2xl mt-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-on-surface">Employer Onboarding</h1>
              <p className="text-secondary text-sm">Step 2 of 3: Company Presence</p>
            </div>
            <span className="text-primary font-bold text-lg">66%</span>
          </div>
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3 transition-all duration-500"></div>
          </div>
        </div>

        {/* Main Card UI */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] p-10 border border-outline-variant/15">
          {/* Step 2 Content */}
          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Build your company profile</h2>
              <p className="text-secondary text-sm">Help talent understand your mission and workspace.</p>
            </div>

            {/* Logo Upload */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-secondary">Company Logo</label>
              <div className="group relative flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-outline-variant/30 rounded-lg bg-surface-container-low hover:border-primary transition-colors cursor-pointer overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-outline mb-2">domain</span>
                <p className="text-[11px] text-secondary font-medium">Upload Icon</p>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* HQ City */}
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs font-bold uppercase tracking-wider text-secondary bg-transparent px-0 z-10">HQ City</label>
                <div className="flex items-center gap-3 border-b-2 border-outline-variant/20 focus-within:border-primary py-3 transition-colors">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline-variant/60 outline-none" placeholder="e.g. San Francisco, CA" type="text" />
                </div>
              </div>

              {/* Company Description */}
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-xs font-bold uppercase tracking-wider text-secondary bg-transparent px-0 z-10">Company Description</label>
                <div className="flex items-start gap-3 border-b-2 border-outline-variant/20 focus-within:border-primary py-3 transition-colors">
                  <span className="material-symbols-outlined text-secondary mt-1">description</span>
                  <textarea className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface placeholder:text-outline-variant/60 resize-none outline-none" placeholder="Share your company's mission, values, and what makes it a great place to work..." rows={4}></textarea>
                </div>
              </div>
            </div>

            {/* Form Navigation */}
            <div className="pt-6 flex items-center justify-between">
              <button className="flex items-center gap-2 text-secondary font-semibold hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back
              </button>
              <button className="bg-primary text-white px-10 py-3.5 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98]">
                Next Step
              </button>
            </div>
          </section>
        </div>

        {/* Success Visual Example (Hidden initially) */}
        <div className="mt-24 bg-white/90 backdrop-blur-md rounded-xl shadow-[0_32px_64px_rgba(183,19,26,0.1)] p-12 border border-primary/10 max-w-lg mx-auto text-center hidden">
          <div className="mb-6 relative inline-block">
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center">
              <span className="text-primary text-6xl material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
              <span className="material-symbols-outlined text-green-600 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Company Verified ✓</h2>
          <p className="text-secondary text-sm mb-8 leading-relaxed">Your professional hub is ready. You can now start attracting top-tier talent from around the globe.</p>
          <button className="w-full bg-primary text-white py-4 rounded-lg font-extrabold text-sm flex items-center justify-center gap-3 hover:bg-primary-container transition-all group">
            Start Posting Jobs
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-center mt-8 text-secondary/60 text-[12px] font-medium tracking-tight">
          © 2024 JoByte. Precision in Careers.
        </p>
      </main>

      {/* Side Content for desktop */}
      <aside className="hidden xl:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col gap-6 w-72">
        <div className="bg-white p-6 rounded-lg border border-outline-variant/15 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Why a complete profile?</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <p className="text-sm text-secondary leading-snug"><span className="font-bold text-on-surface">3x Higher Trust.</span> Verified profiles receive significantly more applications.</p>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-xl">groups</span>
              <p className="text-sm text-secondary leading-snug"><span className="font-bold text-on-surface">Better Matches.</span> Description keywords help our ATS find the right talent.</p>
            </li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden h-48 relative">
          <img className="w-full h-full object-cover" alt="modern minimalist office building with floor to ceiling glass windows reflecting blue sky and soft warm light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfzhVAfqBxPXqvxY9i6UMcd9ReqVcdoC_fmBJ8oN2TNCALQYiMeqyIlIwtj0CpT5MoxfIIc1jUpAD9Uy-7qehX6M0sl2TNs0IFwBhSAWOFbZKhfj-09Cj5dSPfJcuQs6fS9v8mzBoYdF4VmoGDxT8dJXxHNi00OeABnZcmO7fiOebzF1JuhHCB4b2LSAQM8zFOJr7fGwBZem1uIZd7SxAX25s4fxGG44FgR6X64E9DhkEjpdDQYi0JJLMhyTCk5eQWFeBufrMxExU" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-4">
            <p className="text-white text-[11px] font-medium leading-tight">Join 500+ top companies hiring on JoByte</p>
          </div>
        </div>
      </aside>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 z-50">
        <div className="flex justify-between items-center px-12 py-4 max-w-[1440px] mx-auto">
          <div className="text-[12px] text-neutral-500 dark:text-neutral-400">© 2024 JoByte. Precision in Careers.</div>
          <div className="flex gap-6">
            <Link className="text-[12px] text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors" to="/privacy">Privacy</Link>
            <Link className="text-[12px] text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors" to="/support">Support</Link>
            <Link className="text-[12px] text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors" to="/company">Company</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
