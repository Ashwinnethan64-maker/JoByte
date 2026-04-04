import { Link } from 'react-router-dom';

export default function ApplicantDashboard() {
  return (
    <div className="text-on-surface bg-[#f8f9fa] min-h-screen" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-[1440px] mx-auto">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#191c1d]">
            <span className="material-symbols-outlined text-[#b7131a]" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            <span>JoByte</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/jobs" className="text-[#b7131a] font-semibold border-b-2 border-[#b7131a] pb-1 font-['Inter'] text-[15px]">Jobs</Link>
            <Link to="/companies" className="text-neutral-600 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Companies</Link>
            <Link to="/assessments" className="text-neutral-600 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Assessments</Link>
            <Link to="/about" className="text-neutral-600 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/auth" className="text-neutral-600 font-medium text-[15px] hover:opacity-80 transition-all">Sign In</Link>
            <Link to="/auth" className="bg-[#b7131a] text-white px-5 py-2 rounded-lg font-medium text-[15px] hover:opacity-90 active:scale-[0.98] transition-all">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Side Navigation Bar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-neutral-100 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img alt="User Profile" className="w-10 h-10 rounded-full bg-neutral-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Kbh3hhGUY7sA2LpLXJblKpzHaJ5bMIRKyV1tIeE7YjoljJRbY8eN_Gu-qTcDf-GufxkdV9ZHcLoWzBTR9nMkJvbsRCA0jyDTJTmED8vY51aEavQIsj_sEot8vCBQ7fmbriNsp08hfAaj9YHEdNpXJWH7DnH1pvhnSMfss2gis_ZHU--hET5Hc3XYIXRl4zxWBa21buw3qGMNBXFEImsH0LJ2jr271TnZzvbkLm6jF8znDaJ4rJIgbNB1f0TfwM9HwoZLhxFX6Ns" />
            <div>
              <p className="font-bold text-[15px] text-[#191c1d]">Priya Sharma</p>
              <p className="text-xs text-neutral-500">Professional Hub</p>
            </div>
          </div>
        </div>
        <nav className="flex-1">
          <Link to="/dashboard/applicant" className="flex items-center gap-3 bg-[#FFF1F0] text-[#b7131a] font-bold border-l-4 border-[#b7131a] px-6 py-4 transition-all duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[15px]">Dashboard</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 text-neutral-600 px-6 py-4 hover:bg-neutral-50 transition-all duration-200">
            <span className="material-symbols-outlined">work</span>
            <span className="text-[15px]">Applications</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 text-neutral-600 px-6 py-4 hover:bg-neutral-50 transition-all duration-200">
            <span className="material-symbols-outlined">bookmark</span>
            <span className="text-[15px]">Saved Jobs</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 text-neutral-600 px-6 py-4 hover:bg-neutral-50 transition-all duration-200">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-[15px]">Assessments</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 text-neutral-600 px-6 py-4 hover:bg-neutral-50 transition-all duration-200">
            <span className="material-symbols-outlined">mail</span>
            <span className="text-[15px]">Messages</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 text-neutral-600 px-6 py-4 hover:bg-neutral-50 transition-all duration-200 mt-auto">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[15px]">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 p-8 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Hero Card */}
          <section className="relative overflow-hidden bg-[#eef2f5] rounded-2xl p-8 shadow-[0_12px_40px_rgba(13,13,13,0.04)] border border-white">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative flex justify-between items-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-[#b7131a]">Hi Priya</h2>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/60 backdrop-blur rounded-full text-xs font-bold text-secondary uppercase tracking-wider">Applicant</span>
                  <span className="text-on-surface-variant font-medium">Applied 12 Jobs</span>
                </div>
              </div>

              {/* Floating Company Card */}
              <div className="hidden md:block">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded bg-neutral-900 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase">Latest Activity</p>
                    <p className="font-bold text-[#191c1d]">Stellar Systems</p>
                    <p className="text-sm text-neutral-500">Interview Scheduled</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: My Applications (Timeline) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#191c1d]">My Applications</h3>
                <button className="text-[#b7131a] text-sm font-semibold hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {/* Timeline Item 1 */}
                <div className="relative pl-8 pb-4 group">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 group-last:bg-transparent"></div>
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#b7131a]"></div>
                  <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between border border-transparent hover:border-[#b7131a]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-neutral-400">cloud</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[16px]">Senior UX Designer</h4>
                        <p className="text-sm text-neutral-500">CloudLink Technologies • 2 days ago</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 uppercase tracking-tighter">Pending</span>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8 pb-4 group">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 group-last:bg-transparent"></div>
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#b7131a]"></div>
                  <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between border border-transparent hover:border-[#b7131a]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-neutral-400">payments</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[16px]">Product Manager</h4>
                        <p className="text-sm text-neutral-500">FinGo Bank • 1 week ago</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 uppercase tracking-tighter">Interview</span>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8 group">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 group-last:bg-transparent"></div>
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#b7131a]"></div>
                  <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between border border-transparent hover:border-[#b7131a]/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-neutral-400">bolt</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[16px]">Junior React Developer</h4>
                        <p className="text-sm text-neutral-500">Volt Labs • 2 weeks ago</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-700 uppercase tracking-tighter">Accepted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Actions (3x3 Grid) */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-bold text-[#191c1d]">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">search</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Browse Jobs</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">description</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">My Apps</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">quiz</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">SEB Test</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">bookmark</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Saved</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">account_circle</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Profile</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">mail</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Messages</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">article</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Resources</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">insights</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Analytics</span>
                </button>
                <button className="bg-white border border-neutral-100 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[#b7131a] hover:bg-[#FFF1F0]/30 transition-all group">
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-[#b7131a]">help</span>
                  <span className="text-[12px] font-bold uppercase tracking-tight text-neutral-600 group-hover:text-[#b7131a]">Support</span>
                </button>
              </div>

              {/* Promo/Upgrade Card */}
              <div className="mt-8 bg-neutral-900 rounded-2xl p-6 text-white overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-xs font-bold text-[#b7131a] uppercase mb-1">Upgrade to Pro</p>
                  <h4 className="text-lg font-bold mb-4">Unlock AI Career Coaching</h4>
                  <button className="w-full bg-[#b7131a] py-3 rounded-lg text-[14px] font-bold hover:opacity-90 transition-all">Get Pro Now</button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">rocket_launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="ml-64 w-[calc(100%-16rem)] border-t border-neutral-100 bg-white">
        <div className="grid grid-cols-4 gap-8 px-12 py-16 max-w-[1440px]">
          <div>
            <div className="text-lg font-bold text-[#b7131a] mb-4">JoByte</div>
            <p className="text-neutral-500 text-sm leading-relaxed">© 2024 JoByte. Precision in Careers.</p>
          </div>
          <div>
            <h5 className="text-[15px] font-bold mb-4">Product</h5>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a className="hover:text-[#b7131a]" href="#">Job Search</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Assessments</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Salary Insights</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[15px] font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a className="hover:text-[#b7131a]" href="#">About Us</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Careers</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[15px] font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a className="hover:text-[#b7131a]" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#b7131a]" href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
