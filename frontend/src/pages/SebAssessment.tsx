import { Link } from 'react-router-dom';

export default function SebAssessment() {
  return (
    <div className="font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen bg-[#f8f9fa]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Top Bar Navigation (Assessment Shell) */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-[0_12px_40px_rgba(13,13,13,0.04)] h-16 flex items-center px-8 border-none">
        <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-extrabold tracking-tight text-on-surface">JoByte</Link>
            <div className="h-6 w-px bg-surface-variant mx-2"></div>
            <h2 className="text-[15px] font-semibold text-secondary">Senior UX Architect Assessment</h2>
          </div>
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#e1e3e4]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#e1e3e4]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#e1e3e4]"></div>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined text-[20px]">timer</span>
            <span className="tabular-nums">14:52</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 min-h-screen flex flex-col items-center px-6">
        {/* Question Card View */}
        <section className="w-full max-w-[680px] bg-white/90 backdrop-blur-md rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/15 p-8 md:p-12 transition-all">
          <div className="mb-8 flex justify-between items-start">
            <span className="bg-[#ffdad6] text-[#410002] text-[12px] font-bold tracking-wider px-3 py-1 rounded-full">QUESTION 2 OF 5</span>
            <span className="text-secondary text-[14px]">Technical Scenario</span>
          </div>
          <h3 className="text-[18px] font-semibold leading-[1.6] text-on-surface mb-10">
            You are tasked with redesigning a complex data dashboard for a global financial institution. The current user feedback suggests that the "Advanced Filters" section is overwhelming and prevents quick decision-making. Which architectural approach do you prioritize?
          </h3>
          <div className="space-y-4 mb-10">
            {/* Option A: Default */}
            <button className="w-full text-left p-5 rounded-lg border border-outline-variant/20 bg-white hover:border-l-4 hover:border-l-primary hover:bg-primary-fixed/30 transition-all group flex justify-between items-center outline-none">
              <span className="text-[15px] text-on-surface leading-tight">Implement a multi-step modal to isolate each filtering category.</span>
              <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity">chevron_right</span>
            </button>
            {/* Option B: Selected State */}
            <button className="w-full text-left p-5 rounded-lg border-2 border-primary bg-[#FFF1F0] transition-all flex justify-between items-center outline-none">
              <span className="text-[15px] font-semibold text-on-surface leading-tight">Utilize Progressive Disclosure with a semantic search bar and smart presets.</span>
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </button>
            {/* Option C */}
            <button className="w-full text-left p-5 rounded-lg border border-outline-variant/20 bg-white hover:border-l-4 hover:border-l-primary hover:bg-primary-fixed/30 transition-all group flex justify-between items-center outline-none">
              <span className="text-[15px] text-on-surface leading-tight">Maintain the current layout but use tooltips for all complex filter terminology.</span>
              <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity">chevron_right</span>
            </button>
            {/* Option D */}
            <button className="w-full text-left p-5 rounded-lg border border-outline-variant/20 bg-white hover:border-l-4 hover:border-l-primary hover:bg-primary-fixed/30 transition-all group flex justify-between items-center outline-none">
              <span className="text-[15px] text-on-surface leading-tight">Remove the filter section entirely and rely on AI-generated "Top Views".</span>
              <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-primary transition-opacity">chevron_right</span>
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-8 py-3.5 bg-primary text-white rounded-lg font-bold flex items-center gap-2 hover:bg-primary-container transition-all active:scale-[0.98]">
              Next Question
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Spacer for visual separation of stages in this preview */}
        <div className="h-24 w-full flex items-center justify-center opacity-20 my-8">
          <div className="w-1/2 h-px bg-on-surface"></div>
          <div className="mx-2 text-xs font-bold tracking-widest text-[#191c1d]">OR RESULT PREVIEW</div>
          <div className="w-1/2 h-px bg-on-surface"></div>
        </div>

        {/* Results Screen View (Mocking the final state) */}
        <section className="w-full max-w-[900px] bg-white/90 backdrop-blur-md rounded-xl shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/15 p-12 text-center">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Circular Progress Ring */}
            <div className="relative flex justify-center items-center">
              <svg className="w-64 h-64 -rotate-90">
                <circle className="text-[#edeeef]" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-primary" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" strokeDashoffset="90" strokeLinecap="round" strokeWidth="12"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-6xl font-extrabold text-primary tracking-tighter">87%</span>
                <span className="text-[14px] font-bold text-secondary tracking-widest uppercase mt-1">Match Score</span>
              </div>
            </div>

            {/* Radar Chart / Metrics */}
            <div className="text-left bg-surface-container-low p-8 rounded-xl relative overflow-hidden bg-[#f3f4f5]">
              <h4 className="text-[18px] font-bold mb-6 text-on-surface">Skill Archetype</h4>
              <div className="flex justify-center">
                <svg height="240" viewBox="0 0 200 200" width="240">
                  <style>{`
                    .radar-grid { stroke: #d9dadb; stroke-width: 1; fill: none; }
                    .radar-area { fill: rgba(183, 19, 26, 0.2); stroke: #b7131a; stroke-width: 2; }
                  `}</style>
                  {/* Polygons for Grid */}
                  <polygon className="radar-grid" points="100,20 180,75 160,165 40,165 20,75"></polygon>
                  <polygon className="radar-grid" points="100,40 164,84 148,156 52,156 36,84"></polygon>
                  <polygon className="radar-grid" points="100,60 148,93 136,147 64,147 52,93"></polygon>
                  {/* Data Area */}
                  <polygon className="radar-area" points="100,25 170,75 140,160 60,150 40,80"></polygon>
                  {/* Labels */}
                  <text className="text-[10px] font-bold fill-secondary" textAnchor="middle" x="100" y="15">ARCHITECTURE</text>
                  <text className="text-[10px] font-bold fill-secondary" textAnchor="start" x="190" y="80">RESEARCH</text>
                  <text className="text-[10px] font-bold fill-secondary" textAnchor="middle" x="160" y="180">UI DETAIL</text>
                  <text className="text-[10px] font-bold fill-secondary" textAnchor="middle" x="40" y="180">LOGIC</text>
                  <text className="text-[10px] font-bold fill-secondary" textAnchor="end" x="10" y="80">SPEED</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">You’re a High-Velocity Strategist</h1>
            <p className="text-[16px] text-secondary max-w-2xl mx-auto leading-relaxed">
              Based on your scenario responses and problem-solving speed, you align perfectly with senior leadership roles in architectural-heavy environments.
            </p>
          </div>

          {/* Job Recommendations Grid */}
          <div className="grid md:grid-cols-3 gap-6 text-left mb-16">
            {/* Job Card 1 */}
            <div className="group bg-white p-6 rounded-lg border border-outline-variant/15 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-on-surface flex items-center justify-center rounded bg-[#191c1d]">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                </div>
                <span className="text-[12px] font-bold text-primary">94% MATCH</span>
              </div>
              <h5 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Staff Product Designer</h5>
              <p className="text-[13px] text-secondary">Stripe • Remote</p>
            </div>

            {/* Job Card 2 */}
            <div className="group bg-white p-6 rounded-lg border border-outline-variant/15 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-on-surface flex items-center justify-center rounded bg-[#191c1d]">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                </div>
                <span className="text-[12px] font-bold text-primary">89% MATCH</span>
              </div>
              <h5 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Design Systems Lead</h5>
              <p className="text-[13px] text-secondary">Uber • San Francisco</p>
            </div>

            {/* Job Card 3 */}
            <div className="group bg-white p-6 rounded-lg border border-outline-variant/15 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-on-surface flex items-center justify-center rounded bg-[#191c1d]">
                  <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
                </div>
                <span className="text-[12px] font-bold text-primary">87% MATCH</span>
              </div>
              <h5 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Senior UX Architect</h5>
              <p className="text-[13px] text-secondary">Linear • New York</p>
            </div>
          </div>

          <Link to="/dashboard/applicant" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-container transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
            Go to Dashboard
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </section>
      </main>

      {/* Contextual Footer */}
      <footer className="w-full border-t border-neutral-100 bg-white py-12 px-8 mt-auto z-10 relative">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-lg font-bold text-primary">JoByte</span>
            <p className="text-[14px] text-neutral-500">© 2024 JoByte. Precision in Careers.</p>
          </div>
          <div className="flex gap-8">
            <Link className="text-neutral-500 hover:text-primary transition-colors text-[15px]" to="/product">Product</Link>
            <Link className="text-neutral-500 hover:text-primary transition-colors text-[15px]" to="/company">Company</Link>
            <Link className="text-neutral-500 hover:text-primary transition-colors text-[15px]" to="/support">Support</Link>
            <Link className="text-neutral-500 hover:text-primary transition-colors text-[15px]" to="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
