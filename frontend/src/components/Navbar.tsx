import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-[0_12px_40px_rgba(13,13,13,0.04)]">
      <div className="flex justify-between items-center px-8 h-16 w-full max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#191c1d] dark:text-white">
          <span className="text-[#b7131a] material-symbols-outlined text-3xl">work</span>
          <span>JoByte</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/jobs" className="text-[#b7131a] font-semibold border-b-2 border-[#b7131a] pb-1 font-['Inter'] text-[15px] leading-[1.6]">Jobs</Link>
          <Link to="/companies" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">Companies</Link>
          <Link to="/assessments" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">Assessments</Link>
          <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px] leading-[1.6]">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" className="text-neutral-600 font-semibold px-4 py-2 hover:opacity-80 transition-all">Sign In</Link>
          <Link to="/auth" className="bg-[#b7131a] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 active:scale-[0.98] transition-all">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}
