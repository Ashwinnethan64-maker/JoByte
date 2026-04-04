import { Link } from 'react-router-dom';

export default function ApplicantOnboarding() {
  return (
    <div className="font-body text-on-surface antialiased min-h-screen flex flex-col bg-[#f8f9fa]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Header / Suppression of Main Nav for Focused Onboarding */}
      <header className="w-full h-20 flex items-center justify-between px-8 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-primary font-bold text-2xl tracking-tighter">JoByte</Link>
        </div>
        <div className="flex items-center gap-2 text-secondary font-medium">
          <span className="text-sm">Step 2 of 3</span>
          <div className="h-1 w-12 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary w-2/3"></div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[560px] bg-surface-container-lowest rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/15 p-8 lg:p-12">
          {/* Stepper Progress Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative mb-4">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-primary -translate-y-1/2 z-0"></div>
              
              {/* Step 1: Active/Done */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold ring-4 ring-white">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </div>
              
              {/* Step 2: Current */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold ring-4 ring-white">2</div>
              
              {/* Step 3: Upcoming */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary text-xs font-bold ring-4 ring-white">3</div>
            </div>
            <div className="flex justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Personal Info</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Skills &amp; Preferences</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">Resume</span>
            </div>
          </div>

          {/* Content Area: Preferences & Skills (Step 2) */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-on-surface tracking-tight">Refine your profile</h1>
              <p className="text-secondary text-sm">Precision helps us match you with high-performance career paths.</p>
            </div>

            {/* Skills Tag Input */}
            <div className="space-y-3">
              <label className="text-[12px] font-bold uppercase tracking-tight text-on-surface-variant">Core Skills</label>
              <div className="flex flex-wrap gap-2 p-3 bg-surface border-b-2 border-outline-variant/30 focus-within:border-primary transition-colors">
                <div className="flex items-center gap-1 bg-primary text-white text-xs font-medium px-2 py-1 rounded-sm">
                  Product Design
                  <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                </div>
                <div className="flex items-center gap-1 bg-primary text-white text-xs font-medium px-2 py-1 rounded-sm">
                  React
                  <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                </div>
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-0 min-w-[120px]" placeholder="Type skill + Enter" type="text" />
              </div>
            </div>

            {/* Job Type Selection */}
            <div className="space-y-3">
              <label className="text-[12px] font-bold uppercase tracking-tight text-on-surface-variant">Job Type Preference</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-full border border-primary bg-primary-fixed text-on-primary-fixed text-xs font-bold transition-all">Full-time</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-xs font-bold hover:border-primary transition-all">Contract</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-xs font-bold hover:border-primary transition-all">Part-time</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-xs font-bold hover:border-primary transition-all">Freelance</button>
              </div>
            </div>

            {/* Salary Range */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-[12px] font-bold uppercase tracking-tight text-on-surface-variant">Expected Salary (Annual)</label>
                <span className="text-primary font-semibold text-sm">$85k — $140k</span>
              </div>
              <div className="relative h-6 flex items-center">
                <div className="w-full h-[3px] bg-surface-container rounded-full relative">
                  <div className="absolute left-[30%] right-[20%] h-full bg-primary"></div>
                  <div className="absolute left-[30%] -top-[6px] w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm cursor-pointer"></div>
                  <div className="absolute right-[20%] -top-[6px] w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm cursor-pointer"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-secondary font-medium">
                <span>$40k</span>
                <span>$250k+</span>
              </div>
            </div>

            {/* Resume Upload Mockup for context (usually next step, but shown as preview) */}
            <div className="pt-4 opacity-50 pointer-events-none">
              <label className="text-[12px] font-bold uppercase tracking-tight text-on-surface-variant">Resume Upload</label>
              <div className="mt-2 border-2 border-dashed border-outline-variant/50 rounded-lg p-6 flex flex-col items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                <span className="text-sm text-secondary">Drop resume here or <span className="text-primary font-bold">Browse</span></span>
              </div>
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-surface-container-high">
            <button className="flex items-center gap-2 px-6 py-3 text-secondary font-bold text-sm hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(183,19,26,0.2)]">
              Continue to Resume
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer Suppression (Simple Version) */}
      <footer className="w-full py-8 text-center text-secondary border-t border-surface-container-high mt-12">
        <p className="text-[13px]">© 2024 JoByte. Precision in Careers.</p>
      </footer>
    </div>
  );
}
