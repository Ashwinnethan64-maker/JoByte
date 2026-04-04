import { Link } from 'react-router-dom';

export default function Authentication() {
  return (
    <main className="flex min-h-screen w-full bg-surface text-on-surface overflow-hidden">
      {/* Left Panel (40%) */}
      <section className="hidden lg:flex lg:w-[40%] bg-[#0D0D0D] relative flex-col p-12 justify-between overflow-hidden">
        {/* Grid Texture Overlay */}
        <div className="absolute inset-0 dark-grid opacity-30 pointer-events-none"></div>

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-white text-xl">work</span>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">JoByte</span>
        </div>

        {/* Value Proposition */}
        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
            One stop destination for Talent &amp; Companies.
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check</span>
              </div>
              <span className="text-surface-variant font-medium text-lg">Smart job matching</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check</span>
              </div>
              <span className="text-surface-variant font-medium text-lg">Real-time tracking</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check</span>
              </div>
              <span className="text-surface-variant font-medium text-lg">SEB assessment</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check</span>
              </div>
              <span className="text-surface-variant font-medium text-lg">Email status</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-sm">check</span>
              </div>
              <span className="text-surface-variant font-medium text-lg">Verified profiles</span>
            </li>
          </ul>
        </div>

        {/* Decorative Image */}
        <div className="relative z-10 mt-auto pt-12">
          <div className="w-full h-48 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <img className="w-full h-full object-cover" alt="Modern minimalist office space with floor to ceiling windows showing a city skyline at dusk with warm interior lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm4YAFPC46HDSjLYir8pUT_PAH43yXrB55BNWfJb48oXNNnN3lD1xlqjRw_faV3VIbsTDtwlb7zPvtPa23E_b5C-RC1haAoBbUyg8xX_xL_b_V-0CwvihYw6iIJIxSdx2Fw8Do1Axrx-NrlnTENsnTRVOBHVm5OZ7DroLiB4KD5aOuOSwDNdldYl1bLdvkRcGP-GkSg6hhSAy82zV3W3DC1eq3IwSYSl3dwGKFuAWpQ2RbNyy49Kgu6Vf6aVect_HNzA1PGycs6Do" />
          </div>
        </div>
      </section>

      {/* Right Panel (60%) */}
      <section className="w-full lg:w-[60%] bg-surface-container-lowest relative flex flex-col p-8 md:p-16 lg:p-20 overflow-y-auto">
        {/* Dot Grid Overlay */}
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>

        {/* Top Header */}
        <div className="relative z-10 flex justify-between items-center mb-12">
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
              <span className="material-symbols-outlined text-white text-xl">work</span>
            </div>
            <span className="text-on-surface text-xl font-bold tracking-tight">JoByte</span>
          </div>

          <div className="ml-auto text-sm font-semibold tracking-wider text-secondary flex items-center gap-3">
            <span className="text-primary-container">JoByte</span>
            <span className="text-outline-variant">|</span>
            <span className="text-on-surface-variant">Applicant App</span>
          </div>
        </div>

        {/* Auth Container */}
        <div className="relative z-10 max-w-md mx-auto w-full flex flex-col justify-center flex-grow py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">👋</span>
            <h1 className="text-3xl font-bold tracking-tight text-on-surface">Welcome to JoByte</h1>
          </div>
          <p className="text-secondary mb-10">Select your professional path to get started.</p>

          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="relative p-6 bg-surface border-2 border-primary-container rounded-lg text-left transition-all duration-200 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-container rounded-t-sm"></div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">person</span>
                <div>
                  <h4 className="font-bold text-on-surface">Applicant</h4>
                  <p className="text-xs text-secondary mt-1">Seeking Opportunities</p>
                </div>
              </div>
            </button>
            <button className="relative p-6 bg-surface border border-outline-variant hover:border-primary-container/30 rounded-lg text-left transition-all duration-200 group">
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-secondary group-hover:text-primary-container/60 text-3xl">corporate_fare</span>
                <div>
                  <h4 className="font-bold text-on-surface">Employer</h4>
                  <p className="text-xs text-secondary mt-1">Hiring Talent</p>
                </div>
              </div>
            </button>
          </div>

          {/* Google Login */}
          <button className="w-full h-12 bg-on-surface text-surface-container-lowest rounded-lg flex items-center justify-center gap-3 font-semibold mb-8 hover:bg-on-surface/90 transition-all active:scale-[0.98]">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path>
            </svg>
            Login with Google
          </button>

          {/* Tabs & Form */}
          <div className="mb-6 border-b border-outline-variant/30">
            <div className="flex gap-8">
              <button className="pb-3 text-sm font-bold border-b-2 border-primary-container text-primary-container">Login</button>
              <button className="pb-3 text-sm font-medium text-secondary hover:text-on-surface-variant transition-colors">Register</button>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-[12px] font-bold text-on-surface uppercase tracking-wider">Email Address</label>
              <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all outline-none" placeholder="name@company.com" type="email" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-bold text-on-surface uppercase tracking-wider">Password</label>
                <a className="text-[11px] font-bold text-primary hover:opacity-80 transition-opacity" href="#">FORGOT?</a>
              </div>
              <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all outline-none" placeholder="••••••••" type="password" />
            </div>

            <button className="w-full h-12 bg-primary-container text-white rounded-lg font-bold shadow-lg hover:shadow-primary-container/20 transition-all active:scale-[0.98] mt-4">
              Sign In to JoByte
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="relative z-10 mt-auto pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary font-medium">
            <span>© 2024 JoByte. Precision in Careers.</span>
            <div className="flex gap-6">
              <Link className="text-primary hover:underline underline-offset-4 decoration-2" to="/terms">Terms of Service</Link>
              <Link className="text-primary hover:underline underline-offset-4 decoration-2" to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
