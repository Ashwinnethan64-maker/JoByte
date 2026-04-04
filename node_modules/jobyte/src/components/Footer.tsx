import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 max-w-[1440px] mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-bold text-[#b7131a] mb-6">JoByte</div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
            Precision-engineered career platform for the modern technical landscape. We build the bridges between ambition and execution.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-neutral-400 cursor-pointer hover:text-primary transition-colors">public</span>
            <span className="material-symbols-outlined text-neutral-400 cursor-pointer hover:text-primary transition-colors">mail</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-neutral-400">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/jobs" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Browse Jobs</Link></li>
            <li><Link to="/assessments" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Assessments</Link></li>
            <li><Link to="/salaries" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Salaries</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-neutral-400">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">About Us</Link></li>
            <li><Link to="/careers" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Careers</Link></li>
            <li><Link to="/press" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Press</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-neutral-400">Support</h4>
          <ul className="space-y-4">
            <li><Link to="/help" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Help Center</Link></li>
            <li><Link to="/privacy" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-neutral-500 dark:text-neutral-400 hover:text-[#b7131a] transition-colors font-['Inter'] text-[15px]">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-neutral-100 dark:border-neutral-800 text-center text-neutral-400 text-sm">
        © 2024 JoByte. Precision in Careers.
      </div>
    </footer>
  );
}
