export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden dot-grid">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <span className="material-symbols-outlined absolute text-4xl text-neutral-400" style={{ top: '20%', left: '15%' }}>database</span>
          <span className="material-symbols-outlined absolute text-5xl text-neutral-400" style={{ top: '15%', right: '20%' }}>code</span>
          <span className="material-symbols-outlined absolute text-3xl text-neutral-400" style={{ bottom: '30%', left: '10%' }}>smartphone</span>
          <span className="material-symbols-outlined absolute text-4xl text-neutral-400" style={{ bottom: '20%', right: '15%' }}>settings</span>
          <span className="material-symbols-outlined absolute text-3xl text-neutral-400" style={{ top: '60%', right: '5%' }}>description</span>
          <span className="material-symbols-outlined absolute text-4xl text-neutral-400" style={{ top: '40%', left: '5%' }}>lightbulb</span>
          <span className="material-symbols-outlined absolute text-3xl text-neutral-400" style={{ bottom: '10%', left: '45%' }}>public</span>
        </div>
        <div className="relative z-10 w-full max-w-[1440px] px-8 flex justify-center">
          <div className="bg-white border border-neutral-200 rounded-[16px] shadow-[0_12px_40px_rgba(13,13,13,0.06)] p-12 md:p-20 text-center max-w-4xl backdrop-blur-sm">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
              Find Your Next <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              JoByte connects top talent with world-class companies through intelligent assessments and real-time tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-neutral-200 rounded-lg font-bold text-on-surface hover:bg-neutral-50 transition-all active:scale-95">
                <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBytHpLV_w8GakejT6ysxOrJx9j06nPTeoqSap_zxWQc_34LYMOWtX6n0iBUEbphD7JZ-tx1YIwfx7v5q0mUloiETV-22GrBb40rU6a5NVtX_XBDPtqCaYc8kQMxtdDIrjHOaYIOUkEGhDhlv0rddZU-TGVwWKOMigUSe4D9YnnvtURsxvrFFC76WEx5rzHtBenpG_JV0TbYvWiCtftDhpkdquEB29MpwnjxLYwYngrW_4fN96fuXwcDgX9TSGpe3gTG4qFrxz5AeA" />
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
                Explore Jobs
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-20 border-y border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform">10K+</div>
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Active Jobs</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Companies</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Match Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform">48hr</div>
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Engineered for Career Velocity</h2>
            <p className="text-neutral-600 text-lg">We've removed the friction from traditional job hunting with architectural precision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-neutral-200 rounded-lg hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Skill Assessments</h3>
              <p className="text-neutral-600 leading-relaxed">Prove your expertise with our rigorous, industry-vetted technical assessments designed for elite performance.</p>
            </div>
            <div className="p-8 bg-white border border-neutral-200 rounded-lg hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">radar</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Real-time Tracking</h3>
              <p className="text-neutral-600 leading-relaxed">Never wonder about your application status again. Get instant updates as hiring managers review your profile.</p>
            </div>
            <div className="p-8 bg-white border border-neutral-200 rounded-lg hover:border-primary transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">handshake</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">Direct Connection</h3>
              <p className="text-neutral-600 leading-relaxed">Bypass the black hole. We establish direct pathways between verified talent and high-growth organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        {/* For Applicants */}
        <div className="flex-1 bg-[#0D0D0D] text-white p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-12">For Applicants</h2>
          <div className="relative space-y-16">
            <div className="absolute left-6 top-8 bottom-8 border-l border-dashed border-primary/40 hidden md:block"></div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Build Profile</h4>
                <p className="text-neutral-400">Import your credentials and showcase your technical narrative.</p>
              </div>
            </div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Take Assessments</h4>
                <p className="text-neutral-400">Validate your skills through precision-engineered technical tasks.</p>
              </div>
            </div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 bg-primary text-white rounded-full flex items-center justify-center font-bold z-10">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Get Hired</h4>
                <p className="text-neutral-400">Receive offers from companies that value verifiable excellence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* For Employers */}
        <div className="flex-1 bg-white text-on-surface p-12 md:p-24 flex flex-col justify-center border-l border-neutral-100">
          <h2 className="text-4xl font-bold mb-12">For Employers</h2>
          <div className="relative space-y-16">
            <div className="absolute left-6 top-8 bottom-8 border-l border-dashed border-primary/20 hidden md:block"></div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold z-10">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Post Positions</h4>
                <p className="text-neutral-500">Define your requirements with architectural detail.</p>
              </div>
            </div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold z-10">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Screen Talent</h4>
                <p className="text-neutral-500">Access pre-vetted candidates with verified skill metrics.</p>
              </div>
            </div>
            <div className="relative flex gap-8">
              <div className="w-12 h-12 shrink-0 border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold z-10">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Scale Fast</h4>
                <p className="text-neutral-500">Reduce time-to-hire by 60% with intelligent matching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-20">Voices of the Network</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-10 bg-white border border-neutral-100 rounded-lg shadow-[0_12px_40px_rgba(13,13,13,0.03)] flex flex-col">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
              </div>
              <p className="text-neutral-700 italic mb-8 leading-relaxed">"JoByte's assessment framework finally gave me a way to prove my worth without the resume fluff."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">AS</div>
                <div>
                  <div className="font-bold">Alex Simmons</div>
                  <div className="text-xs text-neutral-400 uppercase font-bold tracking-wider">Frontend Engineer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-10 bg-white border border-neutral-100 rounded-lg shadow-[0_12px_40px_rgba(13,13,13,0.03)] flex flex-col">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
              </div>
              <p className="text-neutral-700 italic mb-8 leading-relaxed">"The real-time tracking is a game-changer. I knew exactly where I stood in the hiring pipeline every single day."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">ML</div>
                <div>
                  <div className="font-bold">Maria Lopez</div>
                  <div className="text-xs text-neutral-400 uppercase font-bold tracking-wider">Product Designer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-10 bg-white border border-neutral-100 rounded-lg shadow-[0_12px_40px_rgba(13,13,13,0.03)] flex flex-col">
              <div className="flex gap-1 mb-6">
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
                <span className="material-symbols-outlined text-primary text-sm">star</span>
              </div>
              <p className="text-neutral-700 italic mb-8 leading-relaxed">"We reduced our screening time by nearly 70% using their pre-vetted candidate pools. Remarkable ROI."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">TK</div>
                <div>
                  <div className="font-bold">Tom Kendrick</div>
                  <div className="text-xs text-neutral-400 uppercase font-bold tracking-wider">Head of Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
