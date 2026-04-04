import { Link } from 'react-router-dom';

export default function EmployerDashboard() {
  return (
    <div className="font-body bg-surface text-on-surface antialiased min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-[0_12px_40px_rgba(13,13,13,0.04)] h-16 flex items-center">
        <div className="flex justify-between items-center px-8 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#191c1d] dark:text-white">
              <span className="text-primary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              JoByte
            </Link>
            <div className="hidden md:flex gap-6 items-center">
              <Link to="/jobs" className="text-[#b7131a] font-semibold border-b-2 border-[#b7131a] pb-1 font-['Inter'] text-[15px] leading-[1.6]">Jobs</Link>
              <Link to="/companies" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">Companies</Link>
              <Link to="/assessments" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">Assessments</Link>
              <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">About</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth" className="text-neutral-600 dark:text-neutral-400 font-medium hover:opacity-80 transition-all duration-150 ease-in-out">Sign In</Link>
            <Link to="/auth" className="bg-primary text-white px-5 py-2 rounded font-semibold hover:opacity-80 transition-all duration-150 ease-in-out">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Sidebar Wrapper */}
      <div className="flex pt-16">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col border-r border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex flex-col gap-1 py-6">
            <Link to="/dashboard/employer" className="flex items-center gap-3 bg-[#FFF1F0] dark:bg-[#b7131a]/10 text-[#b7131a] font-bold border-l-4 border-[#b7131a] px-4 py-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
              <span>Dashboard</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <span className="material-symbols-outlined">work</span>
              <span>Applications</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <span className="material-symbols-outlined">bookmark</span>
              <span>Saved Jobs</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <span className="material-symbols-outlined">assignment</span>
              <span>Assessments</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <span className="material-symbols-outlined">mail</span>
              <span>Messages</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </Link>
          </div>

          <div className="mt-auto p-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high">
                <img alt="User Profile" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjy2T24Cb3lhpg0gVo4aaKWZG2Fidlp_AbrC05u0Y0E6K3Cl03tArpYx0AnILebyQyp6wEHSiMjyBphiZeEvYAYYYkIA5xE3mn7OS3abJ-tZakG8mvxq7vwCnDJYMS67URQbyS_nwnSrnSwrxUJmC1Prf6XStzPGnkmQUXHyk2sIey3Y_F9GwYGGhcsrY9NT9zJ17Y_GweMnl7980ph40dHBNICR-ov8ZrAte8O80Mz5AEV_iM0sJhpeiRLAhECu_YWGZidv2-q7U" />
              </div>
              <div>
                <div className="font-bold text-sm">JoByte Dashboard</div>
                <div className="text-xs text-neutral-500">Professional Hub</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="ml-64 w-full min-h-[calc(100vh-64px)] p-8" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Card */}
            <section className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_12px_40px_rgba(13,13,13,0.04)] relative overflow-hidden">
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back, Talent Acquisition Team</h1>
                  <p className="text-secondary max-w-xl">Precision hiring in progress. You have <span className="text-primary font-bold">12 new applicants</span> for the Senior Product Designer role since yesterday.</p>
                </div>
                <button className="bg-primary text-white px-6 py-3 rounded font-bold shadow-lg hover:translate-y-[-2px] transition-transform flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Post New Job
                </button>
              </div>
              {/* Decorative background accent */}
              <div className="absolute right-[-5%] top-[-20%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </section>

            {/* Overview Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border border-outline-variant/15 p-6 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-1">42</div>
                <div className="text-secondary text-sm font-bold uppercase tracking-wider">Active Jobs</div>
              </div>
              <div className="bg-white border border-outline-variant/15 p-6 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-1">1,284</div>
                <div className="text-secondary text-sm font-bold uppercase tracking-wider">Total Applicants</div>
              </div>
              <div className="bg-white border border-outline-variant/15 p-6 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-1">8.4%</div>
                <div className="text-secondary text-sm font-bold uppercase tracking-wider">Interview Rate</div>
              </div>
              <div className="bg-white border border-outline-variant/15 p-6 rounded-lg">
                <div className="text-primary text-4xl font-bold mb-1">15</div>
                <div className="text-secondary text-sm font-bold uppercase tracking-wider">Time to Hire (Days)</div>
              </div>
            </div>

            {/* Chart and Top Jobs Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart Area */}
              <div className="lg:col-span-2 bg-white p-8 rounded-lg border border-outline-variant/15">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Application Trends</h2>
                  <select className="text-sm border-none bg-surface-container-low rounded px-3 py-1 font-semibold">
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="h-64 flex items-end gap-2 relative">
                  {/* Simple SVG Visualization */}
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <path d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,30" fill="none" stroke="#b7131a" strokeWidth="3"></path>
                    <rect className="grid-lines" fill="transparent" height="100" width="400"></rect>
                    {/* Simplified grid lines */}
                    <line stroke="#edeeef" strokeWidth="1" x1="0" x2="400" y1="25" y2="25"></line>
                    <line stroke="#edeeef" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
                    <line stroke="#edeeef" strokeWidth="1" x1="0" x2="400" y1="75" y2="75"></line>
                  </svg>
                </div>
              </div>

              {/* Top Jobs Table */}
              <div className="bg-white rounded-lg border border-outline-variant/15 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold">Top Performing Jobs</h2>
                </div>
                <table className="w-full text-sm">
                  <thead className="text-left border-b border-surface-container">
                    <tr>
                      <th className="px-6 py-3 text-secondary font-bold uppercase text-[10px]">Title</th>
                      <th className="px-6 py-3 text-secondary font-bold uppercase text-[10px]">Applicants</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-semibold">Product Designer</td>
                      <td className="px-6 py-4 text-primary font-bold">342</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="px-6 py-4 font-semibold">Frontend Engineer</td>
                      <td className="px-6 py-4 text-primary font-bold">218</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-semibold">Marketing Lead</td>
                      <td className="px-6 py-4 text-primary font-bold">156</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="px-6 py-4 font-semibold">HR Manager</td>
                      <td className="px-6 py-4 text-primary font-bold">89</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Candidates Section */}
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">Recent Candidates</h2>
                <div className="flex gap-4">
                  <div className="relative">
                    <input className="bg-white border border-neutral-200 rounded-lg px-4 py-2 text-sm w-64 shadow-sm focus:ring-2 focus:ring-primary" placeholder="Filter by name..." type="text" />
                  </div>
                  <button className="bg-white border border-outline-variant/15 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">filter_list</span>
                    Advanced Filter
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Candidate Card 1 */}
                <div className="bg-white p-6 rounded-lg border border-outline-variant/15 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">JS</div>
                      <div>
                        <div className="font-bold text-lg">James Sullivan</div>
                        <div className="text-secondary text-sm">Senior Frontend Developer</div>
                      </div>
                    </div>
                    <span className="bg-[#ffdad6] text-[#93000a] px-2 py-1 rounded text-[10px] font-bold">SEB 92%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>MATCH SCORE</span>
                      <span className="text-primary">88%</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">React.js</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">Tailwind CSS</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">TypeScript</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 border border-outline-variant/30 text-secondary py-2 rounded text-sm font-bold hover:bg-surface-container transition-colors">View Resume</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="material-symbols-outlined">check</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                </div>

                {/* Candidate Card 2 */}
                <div className="bg-white p-6 rounded-lg border border-outline-variant/15 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container text-secondary flex items-center justify-center font-bold text-lg">AM</div>
                      <div>
                        <div className="font-bold text-lg">Anya Markova</div>
                        <div className="text-secondary text-sm">UX Designer</div>
                      </div>
                    </div>
                    <span className="bg-surface-variant text-secondary px-2 py-1 rounded text-[10px] font-bold">SEB 74%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>MATCH SCORE</span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">Figma</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">Design Systems</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">Accessibility</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 border border-outline-variant/30 text-secondary py-2 rounded text-sm font-bold hover:bg-surface-container transition-colors">View Resume</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="material-symbols-outlined">check</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                </div>

                {/* Candidate Card 3 */}
                <div className="bg-white p-6 rounded-lg border border-outline-variant/15 shadow-sm space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">DL</div>
                      <div>
                        <div className="font-bold text-lg">David Lee</div>
                        <div className="text-secondary text-sm">Fullstack Architect</div>
                      </div>
                    </div>
                    <span className="bg-[#ffdad6] text-[#93000a] px-2 py-1 rounded text-[10px] font-bold">SEB 88%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>MATCH SCORE</span>
                      <span className="text-primary">76%</span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">Node.js</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">PostgreSQL</span>
                    <span className="bg-[#FFF1F0] text-primary px-3 py-1 rounded-full text-[11px] font-bold">AWS</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 border border-outline-variant/30 text-secondary py-2 rounded text-sm font-bold hover:bg-surface-container transition-colors">View Resume</button>
                    <button className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="material-symbols-outlined">check</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Listings Section */}
            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">Active Job Listings</h2>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                  View All Jobs
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
              <div className="bg-white rounded-lg border border-outline-variant/15 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-surface-container-low text-left">
                    <tr>
                      <th className="px-8 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Role Name</th>
                      <th className="px-8 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Status</th>
                      <th className="px-8 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Applicants</th>
                      <th className="px-8 py-4 text-xs font-bold text-secondary uppercase tracking-widest">Date Posted</th>
                      <th className="px-8 py-4 text-xs font-bold text-secondary uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr>
                      <td className="px-8 py-5 font-bold">Senior Product Designer</td>
                      <td className="px-8 py-5">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[11px] font-bold">Active</span>
                      </td>
                      <td className="px-8 py-5 text-secondary">342</td>
                      <td className="px-8 py-5 text-secondary">Oct 12, 2023</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-primary material-symbols-outlined">edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-8 py-5 font-bold">Junior Frontend Dev (Contract)</td>
                      <td className="px-8 py-5">
                        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[11px] font-bold">Draft</span>
                      </td>
                      <td className="px-8 py-5 text-secondary">0</td>
                      <td className="px-8 py-5 text-secondary">Nov 01, 2023</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-primary material-symbols-outlined">edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-8 py-5 font-bold">Product Marketing Specialist</td>
                      <td className="px-8 py-5">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-[11px] font-bold">Closed</span>
                      </td>
                      <td className="px-8 py-5 text-secondary">156</td>
                      <td className="px-8 py-5 text-secondary">Sep 20, 2023</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-primary material-symbols-outlined">edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 max-w-[1440px] mx-auto ml-64">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-bold text-[#b7131a]">JoByte</div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">Precision in Careers. Engineered for the modern professional.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Product</h4>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/features">Features</Link>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/pricing">Pricing</Link>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/app">Mobile App</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Support</h4>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/help">Help Center</Link>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/contact">Contact Us</Link>
            <Link className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors text-sm" to="/legal">Legal</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Connect</h4>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-neutral-500 hover:text-[#b7131a] cursor-pointer">share</span>
              <span className="material-symbols-outlined text-neutral-500 hover:text-[#b7131a] cursor-pointer">groups</span>
            </div>
          </div>
        </div>
        <div className="px-12 py-8 border-t border-neutral-100 dark:border-neutral-800 text-center text-xs text-neutral-400 ml-64">
          © 2024 JoByte. Precision in Careers.
        </div>
      </footer>
    </div>
  );
}
