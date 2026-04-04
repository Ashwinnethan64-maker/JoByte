export default function JobListings() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[100vh]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Sidebar Filters */}
      <aside className="w-[260px] min-h-[100vh] lg:h-auto lg:sticky lg:top-16 lg:max-h-[calc(100vh-64px)] overflow-y-auto bg-white p-6 border-r border-neutral-100 hidden lg:block z-10 pt-8">
        <div className="space-y-8">
          {/* Search */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase tracking-wider text-secondary">Search keywords</label>
            <div className="relative group">
              <input className="w-full bg-surface border-none border-b-2 border-outline-variant/15 focus:border-primary focus:ring-0 transition-all text-sm py-2 px-0 outline-none" placeholder="Design, Engineering..." type="text" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-secondary">Category</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input defaultChecked className="w-4 h-4 rounded-sm border-neutral-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-on-surface group-hover:text-primary transition-colors">Engineering</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-neutral-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-on-surface group-hover:text-primary transition-colors">Product Design</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-neutral-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-on-surface group-hover:text-primary transition-colors">Marketing</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-neutral-300 text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm text-on-surface group-hover:text-primary transition-colors">Operations</span>
              </label>
            </div>
          </div>
          
          {/* Job Type */}
          <div className="space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-secondary">Job Type</h4>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">Full-time</button>
              <button className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-variant/30 text-secondary border border-transparent hover:border-primary transition-all">Contract</button>
              <button className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-variant/30 text-secondary border border-transparent hover:border-primary transition-all">Remote</button>
            </div>
          </div>
          
          {/* Salary Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-secondary">Salary Range</h4>
              <span className="text-xs font-bold text-primary">$80k - $150k</span>
            </div>
            <input className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary custom-slider" type="range" />
            <style>{`
              .custom-slider::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 16px;
                  height: 16px;
                  background: #b7131a;
                  border-radius: 50%;
                  cursor: pointer;
              }
            `}</style>
          </div>
          
          {/* Location */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase tracking-wider text-secondary">Location</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400 text-lg">location_on</span>
              <input className="w-full bg-transparent border-none border-b-2 border-outline-variant/15 focus:border-primary focus:ring-0 text-sm py-2 pl-6 outline-none" placeholder="San Francisco, CA" type="text" />
            </div>
          </div>
          
          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 p-8 pt-20 lg:pt-24 max-w-[1100px] mx-auto lg:mx-0 w-full overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h1 className="text-[32px] font-semibold tracking-tight text-on-surface">Available Opportunities</h1>
            <p className="text-secondary mt-1">Showing 142 precision-matched roles for you.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 text-on-surface">Newest First <span className="material-symbols-outlined">expand_more</span></button>
          </div>
        </div>
        
        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          
          {/* Job Card 1 (Featured) */}
          <div className="group relative bg-white rounded-lg border border-neutral-100 p-6 transition-all hover:border-t-[3px] hover:border-t-primary shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
            <div className="absolute top-4 right-4 px-2 py-1 bg-[#fff8e1] text-[#b45309] text-[10px] font-bold rounded uppercase tracking-tighter flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> Featured
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary font-bold text-lg">
                G
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">Global Solutions</p>
                <p className="text-xs text-neutral-400">Palo Alto, CA</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Senior Product Engineer</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 rounded bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold uppercase">$140k - $180k</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">Full-time</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">Hybrid</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">React</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">Node.js</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">AWS</span>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
              <span className="text-xs text-neutral-400 italic">Posted 3 days ago</span>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-xs font-bold text-secondary border border-outline-variant/20 rounded hover:bg-neutral-50 transition-colors">Know More</button>
                <button className="px-4 py-2 text-xs font-bold text-white bg-primary rounded hover:opacity-90 transition-opacity">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 2 (Standard) */}
          <div className="group relative bg-white rounded-lg border border-neutral-100 p-6 transition-all hover:border-t-[3px] hover:border-t-primary shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary font-bold text-lg">
                N
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">Neural Labs</p>
                <p className="text-xs text-neutral-400">Remote</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">ML Research Scientist</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 rounded bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold uppercase">$160k - $220k</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">Full-time</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">Remote</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">Python</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">PyTorch</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">NLP</span>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
              <span className="text-xs text-neutral-400 italic">Posted 1 day ago</span>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-xs font-bold text-secondary border border-outline-variant/20 rounded hover:bg-neutral-50 transition-colors">Know More</button>
                <button className="px-4 py-2 text-xs font-bold text-white bg-primary rounded hover:opacity-90 transition-opacity">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 3 (Locked/Paywall) */}
          <div className="group relative bg-white rounded-lg border border-neutral-100 p-6 transition-all hover:border-t-[3px] hover:border-t-primary shadow-[0_12px_40px_rgba(13,13,13,0.04)] overflow-hidden">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-2xl border border-neutral-100 text-center max-w-[280px] scale-100 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <h4 className="font-bold text-on-surface mb-2">Unlock Full Details</h4>
                <p className="text-xs text-secondary mb-4">Complete our standardized technical assessment to view premium compensation and perks.</p>
                <button className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                  Take SEB Assessment <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="opacity-30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-200"></div>
                <div className="h-4 w-24 bg-neutral-100 rounded"></div>
              </div>
              <div className="h-6 w-48 bg-neutral-100 rounded mb-4"></div>
              <div className="flex gap-2 mb-6">
                <div className="h-6 w-16 bg-neutral-100 rounded"></div>
                <div className="h-6 w-16 bg-neutral-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="group relative bg-white rounded-lg border border-neutral-100 p-6 transition-all hover:border-t-[3px] hover:border-t-primary shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-lg">
                M
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">Matrix Data</p>
                <p className="text-xs text-neutral-400">New York, NY</p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Lead Data Architect</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-1 rounded bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold uppercase">$190k - $240k</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">Contract</span>
              <span className="px-2 py-1 rounded bg-surface-container-low text-secondary text-[10px] font-bold uppercase">On-site</span>
            </div>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">Snowflake</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">SQL</span>
              <span className="px-3 py-1 rounded bg-[#FFF1F0] text-primary text-xs font-semibold">Kafka</span>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
              <span className="text-xs text-neutral-400 italic">Posted 5 days ago</span>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-xs font-bold text-secondary border border-outline-variant/20 rounded hover:bg-neutral-50 transition-colors">Know More</button>
                <button className="px-4 py-2 text-xs font-bold text-white bg-primary rounded hover:opacity-90 transition-opacity">Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button className="p-2 rounded-lg border border-neutral-100 text-secondary hover:bg-white transition-colors disabled:opacity-30" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-neutral-100 text-on-surface font-medium hover:border-primary transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg bg-white border border-neutral-100 text-on-surface font-medium hover:border-primary transition-colors">3</button>
          </div>
          <button className="p-2 rounded-lg border border-neutral-100 text-secondary hover:bg-white transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
}
