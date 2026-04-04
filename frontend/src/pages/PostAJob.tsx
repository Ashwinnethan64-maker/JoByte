export default function PostAJob() {
  return (
    <div className="pt-8 pb-20 max-w-[1440px] mx-auto px-8" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <div className="mb-12">
        <h1 className="text-[48px] font-bold tracking-tight text-on-surface leading-none mb-2">Create a Job Opening</h1>
        <p className="text-secondary text-[15px]">Precision-engineered hiring starts with the perfect job description.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Form (55%) */}
        <div className="w-full lg:w-[55%] space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-10 border border-outline-variant/15 shadow-[0_12px_40px_rgba(13,13,13,0.04)] bg-white/90 backdrop-blur-md">
            <form className="space-y-10">
              {/* Job Core Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-2">
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2">Job Title</label>
                  <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-3 text-[15px] transition-colors outline-none" placeholder="e.g. Senior Software Architect" type="text" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2">Department</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-3 text-[15px] transition-colors outline-none">
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Product</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2">Location</label>
                  <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-3 text-[15px] transition-colors outline-none" placeholder="City, Country" type="text" />
                </div>
              </div>

              {/* Remote Toggle & Employment Type */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-semibold">Remote Position</h3>
                    <p className="text-[13px] text-secondary">Is this role available for remote candidates?</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-secondary-container peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-4">Employment Type</label>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-full border border-primary bg-primary-fixed text-on-primary-fixed text-[13px] font-semibold" type="button">Full-time</button>
                    <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-[13px] font-semibold hover:border-primary/50" type="button">Part-time</button>
                    <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-[13px] font-semibold hover:border-primary/50" type="button">Contract</button>
                    <button className="px-4 py-2 rounded-full border border-outline-variant/30 text-secondary text-[13px] font-semibold hover:border-primary/50" type="button">Internship</button>
                  </div>
                </div>
              </div>

              {/* Salary & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-2">
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-6">Salary Range (Annual USD)</label>
                  <input className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer accent-primary" max="300" min="50" step="5" type="range" />
                  <div className="flex justify-between mt-2 text-[13px] font-medium text-secondary">
                    <span>$50k</span>
                    <span className="text-primary font-bold">$120k - $160k</span>
                    <span>$300k+</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-2">Required Experience</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-3 text-[15px] outline-none">
                    <option>Entry Level</option>
                    <option>Mid-Level (3-5 years)</option>
                    <option>Senior (5-8 years)</option>
                    <option>Lead / Director</option>
                  </select>
                </div>
              </div>

              {/* Skills Tags */}
              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-secondary mb-4">Core Competencies</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-[12px] font-bold rounded-lg uppercase">
                    React.js <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-[12px] font-bold rounded-lg uppercase">
                    Tailwind CSS <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-[12px] font-bold rounded-lg uppercase">
                    System Design <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                  </span>
                </div>
                <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 px-0 py-3 text-[15px] outline-none" placeholder="Type a skill and press Enter" type="text" />
              </div>

              <div className="pt-6">
                <button className="w-full py-5 bg-primary text-white rounded-lg text-[16px] font-bold tracking-tight hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(183,19,26,0.2)] active:scale-[0.98]" type="button">
                  Publish Job Opening
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Live Preview (45%, sticky) */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-28">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Live Preview</span>
            <span className="text-[12px] text-secondary">Auto-saving...</span>
          </div>
          
          <div className="border-2 border-dashed border-outline-variant/40 rounded-xl p-8 bg-surface/50 bg-white/50 backdrop-blur-sm">
            {/* Real-time Job Card Preview */}
            <div className="bg-white p-8 rounded-lg shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-outline-variant/10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center text-primary border border-outline-variant/20">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>business</span>
                </div>
                <div className="bg-primary-fixed px-3 py-1 rounded text-[11px] font-bold text-on-primary-fixed uppercase tracking-wide bg-[#ffdad6] text-[#410002]">
                  NEW OPENING
                </div>
              </div>

              <h2 className="text-[24px] font-bold text-on-surface mb-1">Senior Software Architect</h2>
              <div className="flex items-center gap-4 text-secondary text-[14px] mb-6">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> San Francisco, CA</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">payments</span> $120k - $160k</span>
              </div>

              <div className="flex gap-2 mb-8">
                <span className="bg-surface-container-low px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary">Full Time</span>
                <span className="bg-surface-container-low px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary">Remote</span>
                <span className="bg-surface-container-low px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary">Senior</span>
              </div>

              <div className="space-y-4">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-secondary">About the Role</h4>
                <p className="text-[15px] leading-relaxed text-on-surface/80">
                  As a Senior Software Architect at JoByte, you will lead the evolution of our high-performance career infrastructure. We are looking for a visionary engineer who balances technical excellence with strategic product thinking.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-secondary mb-4">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-outline-variant/30 rounded text-[12px] font-medium text-secondary">React.js</span>
                  <span className="px-3 py-1 border border-outline-variant/30 rounded text-[12px] font-medium text-secondary">Tailwind CSS</span>
                  <span className="px-3 py-1 border border-outline-variant/30 rounded text-[12px] font-medium text-secondary">System Design</span>
                  <span className="px-3 py-1 border border-outline-variant/30 rounded text-[12px] font-medium text-secondary">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Company Context Card */}
            <div className="mt-6 bg-[#2e3132] text-white p-6 rounded-lg flex items-center gap-4">
              <img className="w-12 h-12 rounded-full object-cover" alt="professional workspace with minimalist desk setup and high-end technical equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXuKkJKnHm_ZN7FRcmGEqYTBwOYqC5_coG95oQF9SdXRwR6cX4znGWn1AgVAhJn78E7VnjU6kw6Xwv7c59TJ-Lh_S5PbNIZbxQJuoHyYKXzx7jbvWja6TzarQkkl2b-NihmD3rRaORBU3htXf35L3sYgWjCbtL9B18F1dDqshYJjD4ry9r5exvOc3J6HHRKrHij5SQfFNtBxuVDORw8-dLt6_5Wpz-vAgPAgVJd1VHMxbPXKXt7X6mdhVzM3TKRwutqqyNLEHfZAY" />
              <div>
                <p className="text-[13px] font-semibold text-white/70">Published by</p>
                <p className="text-[15px] font-bold">JoByte Engineering Team</p>
              </div>
              <div className="ml-auto">
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-white px-8 py-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-outline-variant/20 hidden">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
          <span className="material-symbols-outlined font-bold">check</span>
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-on-surface">Job Published!</h4>
          <p className="text-[13px] text-secondary">Your opening is now live and tracking applicants.</p>
        </div>
        <button className="ml-8 text-primary font-bold text-[13px] uppercase tracking-wider">View Post</button>
      </div> */}
    </div>
  );
}
