import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

// ─── MOCK DATA ────────────────────────────────────────────────────────────────

const JOBS = [
  {
    id: "j1",
    title: "Senior Frontend Engineer",
    company: "Razorpay",
    location: "Bengaluru",
    type: "Full-time",
    experience: "3-5 years",
    skills: ["React", "TypeScript", "GraphQL", "Figma", "Node.js"],
    salary: "28–40 LPA",
    openings: 3,
    deadline: "2024-09-15",
    matchScore: 91,
    posted: "2 days ago",
    description:
      "We're looking for a Senior Frontend Engineer to lead the development of Razorpay's merchant dashboard. You'll work closely with product, design, and backend teams to deliver high-quality user experiences that serve millions of merchants across India.",
    contact: "careers@razorpay.com",
  },
  {
    id: "j2",
    title: "ML Engineer – NLP",
    company: "Sarvam AI",
    location: "Bengaluru",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Python", "PyTorch", "Transformers", "RLHF"],
    salary: "30–50 LPA",
    openings: 2,
    deadline: "2024-09-20",
    matchScore: 78,
    posted: "5 days ago",
    description:
      "Join Sarvam AI's core NLP team to build next-generation Indic language models. You'll work on pre-training, fine-tuning, and RLHF pipelines for models that serve 1B+ language speakers.",
    contact: "hiring@sarvam.ai",
  },
  {
    id: "j3",
    title: "Backend Engineer – Payments",
    company: "PhonePe",
    location: "Pune",
    type: "Full-time",
    experience: "3-6 years",
    skills: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    salary: "25–38 LPA",
    openings: 5,
    deadline: "2024-10-01",
    matchScore: 63,
    posted: "1 week ago",
    description:
      "PhonePe is hiring a Backend Engineer to work on high-throughput payments infrastructure. You'll design and maintain services processing 100M+ transactions daily.",
    contact: "careers@phonepe.com",
  },
  {
    id: "j4",
    title: "Product Manager – Growth",
    company: "Zepto",
    location: "Mumbai",
    type: "Full-time",
    experience: "4-7 years",
    skills: ["Product Strategy", "SQL", "A/B Testing", "Figma"],
    salary: "32–45 LPA",
    openings: 1,
    deadline: "2024-09-30",
    matchScore: 55,
    posted: "3 days ago",
    description:
      "Lead Zepto's growth product initiatives. You'll define the roadmap for acquisition, activation, and retention, working with engineering and data science to run rapid experiments.",
    contact: "pm-hiring@zepto.team",
  },
  {
    id: "j5",
    title: "DevOps Engineer",
    company: "Freshworks",
    location: "Chennai",
    type: "Full-time",
    experience: "2-5 years",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD"],
    salary: "18–28 LPA",
    openings: 4,
    deadline: "2024-10-10",
    matchScore: 84,
    posted: "4 days ago",
    description:
      "Freshworks is scaling its cloud infrastructure. As a DevOps Engineer you'll own CI/CD pipelines, Kubernetes clusters, and cloud cost optimization across GCP and AWS.",
    contact: "devops-careers@freshworks.com",
  },
  {
    id: "j6",
    title: "Data Analyst – Business Intelligence",
    company: "Meesho",
    location: "Bengaluru",
    type: "Full-time",
    experience: "1-3 years",
    skills: ["SQL", "Python", "Tableau", "dbt"],
    salary: "12–20 LPA",
    openings: 6,
    deadline: "2024-09-28",
    matchScore: 42,
    posted: "6 days ago",
    description:
      "Build the data layer that powers Meesho's seller and buyer insights. You'll design dashboards, define metrics, and partner with product teams to make data-driven decisions.",
    contact: "data-jobs@meesho.com",
  },
];

const APPLICATIONS = [
  {
    id: "a1",
    company: "Razorpay",
    role: "Senior Frontend Engineer",
    type: "Proposal",
    date: "2024-08-12",
    status: "Verified",
  },
  {
    id: "a2",
    company: "Sarvam AI",
    role: "ML Engineer – NLP",
    type: "Simulation",
    date: "2024-08-18",
    status: "Pending",
  },
  {
    id: "a3",
    company: "PhonePe",
    role: "Backend Engineer – Payments",
    type: "Proposal",
    date: "2024-08-20",
    status: "Rejected",
  },
  {
    id: "a4",
    company: "Freshworks",
    role: "DevOps Engineer",
    type: "Proposal",
    date: "2024-08-25",
    status: "Pending",
  },
];

const EMPLOYER_JOBS = [
  {
    id: "ej1",
    title: "Senior React Developer",
    status: "Active",
    openings: 2,
    applicants: 14,
    deadline: "2024-09-25",
  },
  {
    id: "ej2",
    title: "Data Engineer",
    status: "Active",
    openings: 1,
    applicants: 8,
    deadline: "2024-10-05",
  },
  {
    id: "ej3",
    title: "QA Automation Engineer",
    status: "Closed",
    openings: 3,
    applicants: 22,
    deadline: "2024-08-01",
  },
];

const APPLICANTS = [
  {
    id: "ap1",
    name: "Arjun Mehta",
    skills: ["React", "TypeScript", "Node.js"],
    matchScore: 93,
    type: "Simulation",
    proposal:
      "I have 4 years of experience building scalable React applications. I led the frontend rewrite at my previous company, reducing bundle size by 40%...",
    status: "pending",
  },
  {
    id: "ap2",
    name: "Priya Nair",
    skills: ["React", "GraphQL", "Figma"],
    matchScore: 87,
    type: "Proposal",
    proposal:
      "As a frontend engineer at Swiggy for 3 years, I shipped multiple high-traffic features. I'm passionate about design systems and accessibility...",
    status: "pending",
  },
  {
    id: "ap3",
    name: "Rohan Sharma",
    skills: ["Vue.js", "TypeScript", "CSS"],
    matchScore: 71,
    type: "Proposal",
    proposal:
      "I have a strong foundation in JavaScript frameworks. While my primary stack is Vue, I have completed 2 production React projects and am confident in the transition...",
    status: "pending",
  },
  {
    id: "ap4",
    name: "Sneha Krishnamurthy",
    skills: ["React", "Redux", "AWS"],
    matchScore: 65,
    type: "Proposal",
    proposal:
      "Full-stack developer with 2 years of experience, primarily focused on React frontends with Node.js backends. Eager to specialize in frontend at scale...",
    status: "pending",
  },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function Navbar({ showLinks = true }) {
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            HireAxis
          </span>
        </Link>
        {showLinks && (
          <div className="flex items-center gap-3">
            <Link
              to="/auth"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 rounded-lg hover:bg-slate-50"
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function AppNav() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            HireAxis
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            to="/feed"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Browse Jobs
          </Link>
          <Link
            to="/track"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            My Applications
          </Link>
          <Link
            to="/employer/dashboard"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Employer
          </Link>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ml-2 cursor-pointer">
            <span className="text-blue-700 font-semibold text-sm">D</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function TagInput({ tags, setTags, placeholder = "Type and press Enter" }) {
  const [input, setInput] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };
  return (
    <div className="border border-slate-200 rounded-lg p-2 flex flex-wrap gap-2 min-h-12 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
        >
          {tag}
          <button
            type="button"
            onClick={() => setTags(tags.filter((t) => t !== tag))}
            className="text-blue-400 hover:text-blue-700 transition-colors"
          >
            ×
          </button>
        </span>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-1 min-w-32 outline-none text-sm text-slate-700 placeholder-slate-400 bg-transparent"
      />
    </div>
  );
}

function MatchBadge({ score }) {
  let bg = "bg-slate-100 text-slate-500";
  if (score >= 80) bg = "bg-green-100 text-green-700";
  else if (score >= 60) bg = "bg-blue-100 text-blue-700";
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${bg}`}>
      {score}% match
    </span>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-slate-100 text-slate-600",
    Verified: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-600",
  };
  const icons = { Pending: "○", Verified: "✓", Rejected: "✕" };
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${styles[status]}`}
    >
      {icons[status]} {status}
    </span>
  );
}

function Label({ children, required }) {
  return (
    <label className="block text-sm font-medium text-slate-700 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${className}`}
      {...props}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none ${className}`}
      {...props}
    />
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <select
      className={`w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

function Btn({ variant = "primary", className = "", children, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 font-medium text-sm rounded-lg px-4 py-2.5 transition-all cursor-pointer";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "text-slate-600 hover:bg-slate-100",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// ─── 1. LANDING PAGE ──────────────────────────────────────────────────────────

function LandingPage() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      desc: "Our model analyzes your skills, experience, and preferences to surface roles you'll actually land — not just any open listing.",
    },
    {
      icon: "📊",
      title: "Application Tracking",
      desc: "A clean, real-time view of every application you've submitted. Know exactly where you stand at every stage.",
    },
    {
      icon: "✅",
      title: "Verified Hiring",
      desc: "Every job on HireAxis is monitored under our anti-ghost-hiring policy. Real roles, real companies, real opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          AI-Matched Job Discovery
        </div>
        <h1 className="text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
          Find the right fit.
          <br />
          Every time.
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          HireAxis uses intelligent matching to connect Indian talent with the
          roles they're built for — and helps employers find candidates who
          actually qualify.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/feed"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
          >
            Find Jobs
          </Link>
          <Link
            to="/employer/dashboard"
            className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-3.5 rounded-xl border border-slate-200 transition-all text-sm"
          >
            Hire Talent
          </Link>
        </div>
        {/* Social proof */}
        <div className="mt-16 flex items-center justify-center gap-10 text-center">
          {[["12,400+", "Active Jobs"], ["3.2L+", "Candidates"], ["98%", "Verified Listings"]].map(
            ([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-slate-900">{num}</div>
                <div className="text-sm text-slate-500 mt-1">{label}</div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              Ready to get started?
            </h2>
            <p className="text-slate-500 text-sm">
              Join thousands of candidates and employers already on HireAxis.
            </p>
          </div>
          <Link
            to="/auth"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-sm"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

// ─── 2. AUTH PAGE ─────────────────────────────────────────────────────────────

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("candidate");
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "register") {
      navigate(role === "candidate" ? "/onboarding/candidate" : "/onboarding/employer");
    } else {
      navigate("/feed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Navbar showLinks={false} />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm w-full max-w-md p-8">
          {/* Toggle */}
          <div className="flex bg-slate-100 rounded-lg p-1 mb-8">
            {["login", "register"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  mode === m
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {m === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-1">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {mode === "login"
              ? "Log in to continue to HireAxis"
              : "Get started — it's free"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <Label required>Full Name</Label>
                <Input
                  placeholder="Arjun Mehta"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            )}
            <div>
              <Label required>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <Label required>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {mode === "register" && (
              <div>
                <Label required>I am</Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "candidate", label: "Looking for a job", icon: "🔍" },
                    { val: "employer", label: "Hiring talent", icon: "🏢" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setRole(opt.val)}
                      className={`border-2 rounded-xl p-4 text-left transition-all ${
                        role === opt.val
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-xl mb-1">{opt.icon}</div>
                      <div
                        className={`text-sm font-medium ${
                          role === opt.val ? "text-blue-700" : "text-slate-700"
                        }`}
                      >
                        {opt.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Btn variant="primary" className="w-full mt-2">
              {mode === "login" ? "Log in" : "Create Account"}
            </Btn>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── 3. CANDIDATE ONBOARDING ──────────────────────────────────────────────────

function CandidateOnboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", location: "", bio: "",
    skills: [], preferredRoles: "", experience: "",
    education: "", resumeLink: "",
  });

  const STEPS = ["Personal Info", "Skills & Experience", "Education & Resume"];

  const update = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    i + 1 < step
                      ? "bg-green-600 text-white"
                      : i + 1 === step
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${
                    i + 1 === step ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <div
                    className={`h-0.5 w-16 mx-2 ${
                      i + 1 < step ? "bg-green-600" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            {STEPS[step - 1]}
          </h2>

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <Label required>Full Name</Label>
                <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Priya Nair" />
              </div>
              <div>
                <Label required>Location</Label>
                <Input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Bengaluru, Karnataka" />
              </div>
              <div>
                <Label>Bio</Label>
                <Textarea rows={4} value={form.bio} onChange={(e) => update("bio", e.target.value)} placeholder="A brief intro about yourself..." />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <Label required>Skills</Label>
                <TagInput
                  tags={form.skills}
                  setTags={(v) => update("skills", v)}
                  placeholder="Type a skill, press Enter..."
                />
              </div>
              <div>
                <Label>Preferred Roles</Label>
                <Input value={form.preferredRoles} onChange={(e) => update("preferredRoles", e.target.value)} placeholder="Frontend Engineer, Full-stack Developer" />
              </div>
              <div>
                <Label required>Years of Experience</Label>
                <Select value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                  <option value="">Select experience</option>
                  <option>0–1 years (Fresher)</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–8 years</option>
                  <option>8+ years</option>
                </Select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div>
                <Label>Education</Label>
                <Input value={form.education} onChange={(e) => update("education", e.target.value)} placeholder="B.Tech CSE, IIT Bombay, 2022" />
              </div>
              <div>
                <Label>Resume Link</Label>
                <Input type="url" value={form.resumeLink} onChange={(e) => update("resumeLink", e.target.value)} placeholder="https://drive.google.com/..." />
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-blue-700 font-medium mb-1">You're almost done!</p>
                <p className="text-sm text-blue-600">After submitting, we'll analyze your profile and show you AI-matched job recommendations.</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <Btn
              variant="secondary"
              onClick={() => step === 1 ? navigate("/auth") : setStep(step - 1)}
            >
              {step === 1 ? "Back" : "← Previous"}
            </Btn>
            <Btn
              variant="primary"
              onClick={() => step === 3 ? navigate("/feed") : setStep(step + 1)}
            >
              {step === 3 ? "Complete Profile" : "Next Step →"}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 4. CANDIDATE FEED ────────────────────────────────────────────────────────

function CandidateFeed() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({ type: "", location: "", exp: "" });

  const filtered = JOBS.filter((j) => {
    if (filters.type && j.type !== filters.type) return false;
    if (filters.location && j.location !== filters.location) return false;
    return true;
  });

  const locations = [...new Set(JOBS.map((j) => j.location))];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm sticky top-20">
            <h3 className="font-semibold text-slate-900 mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <Label>Role Type</Label>
                <Select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
                  <option value="">All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </Select>
              </div>
              <div>
                <Label>Location</Label>
                <Select value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
                  <option value="">All Locations</option>
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </Select>
              </div>
              <div>
                <Label>Experience</Label>
                <Select value={filters.exp} onChange={(e) => setFilters({ ...filters, exp: e.target.value })}>
                  <option value="">Any</option>
                  <option>0–1 years</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </Select>
              </div>
              <button
                onClick={() => setFilters({ type: "", location: "", exp: "" })}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-slate-900">
              {filtered.length} jobs matched
            </h1>
            <span className="text-sm text-slate-500">Sorted by match score</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filtered
              .sort((a, b) => b.matchScore - a.matchScore)
              .map((job) => (
                <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
              ))}
          </div>
        </main>
      </div>

      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

function JobCard({ job, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-slate-900 text-base leading-snug">{job.title}</h3>
          <p className="text-sm text-slate-500 mt-0.5">{job.company}</p>
        </div>
        <MatchBadge score={job.matchScore} />
      </div>
      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
        <span>📍 {job.location}</span>
        <span>• {job.type}</span>
        <span>• {job.experience}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.slice(0, 3).map((s) => (
          <span key={s} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
            {s}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="bg-slate-100 text-slate-400 text-xs px-2.5 py-1 rounded-full">
            +{job.skills.length - 3}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{job.salary}</span>
        <span>{job.posted}</span>
      </div>
    </div>
  );
}

// ─── 5. JOB DETAIL MODAL ─────────────────────────────────────────────────────

function JobDetailModal({ job, onClose }) {
  const [showProposal, setShowProposal] = useState(false);
  const [proposal, setProposal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-end"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white h-full w-full max-w-xl overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">{job.title}</h2>
            <p className="text-sm text-slate-500">{job.company}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 text-2xl transition-colors">×</button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Meta */}
          <div className="grid grid-cols-2 gap-3">
            {[
              ["📍 Location", job.location],
              ["💼 Type", job.type],
              ["⏱ Experience", job.experience],
              ["💰 Salary", job.salary],
              ["👥 Openings", `${job.openings} position${job.openings > 1 ? "s" : ""}`],
              ["📅 Deadline", new Date(job.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })],
            ].map(([label, val]) => (
              <div key={label} className="bg-slate-50 rounded-lg p-3">
                <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                <div className="text-sm font-medium text-slate-900">{val}</div>
              </div>
            ))}
          </div>

          {/* Match */}
          <div className="flex items-center gap-2">
            <MatchBadge score={job.matchScore} />
            <span className="text-xs text-slate-500">based on your profile</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">About the Role</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          {!submitted ? (
            <div className="space-y-3 border-t border-slate-100 pt-4">
              <h3 className="font-semibold text-slate-900 text-sm">Apply Now</h3>

              {!showProposal ? (
                <div className="space-y-3">
                  <Btn variant="primary" className="w-full" onClick={() => setShowProposal(true)}>
                    Apply via Proposal — Free
                  </Btn>
                  <div className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-800">Apply via Simulation</span>
                      <span className="text-sm font-bold text-slate-900">₹299</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                      Complete a 30-minute AI-simulated task that proves your skills. Verified results are shown to the employer.
                    </p>
                    <Btn variant="secondary" className="w-full">
                      Pay ₹299 & Start Simulation
                    </Btn>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <Textarea
                    rows={5}
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    placeholder="Tell the employer why you're a great fit. Mention relevant experience, projects, and skills..."
                  />
                  <div className="flex gap-2">
                    <Btn variant="secondary" onClick={() => setShowProposal(false)} className="flex-1">
                      Cancel
                    </Btn>
                    <Btn variant="primary" onClick={() => setSubmitted(true)} className="flex-1">
                      Submit Proposal
                    </Btn>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">✓</div>
              <p className="font-semibold text-green-800 mb-1">Application Submitted!</p>
              <p className="text-sm text-green-700">You can track this in your Applications tab.</p>
            </div>
          )}

          {/* Contact */}
          <div className="border-t border-slate-100 pt-4">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Contact</h3>
            <p className="text-sm text-blue-600">{job.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 6. APPLICATION TRACKER ───────────────────────────────────────────────────

function ApplicationTracker() {
  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">My Applications</h1>
          <p className="text-slate-500 text-sm mt-1">Track the status of all your submissions</p>
        </div>

        {APPLICATIONS.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
            <div className="text-4xl mb-4">📭</div>
            <p className="font-semibold text-slate-900 mb-1">No applications yet</p>
            <p className="text-sm text-slate-500">Start exploring jobs and submit your first application.</p>
            <Link to="/feed" className="mt-4 inline-block">
              <Btn variant="primary">Browse Jobs</Btn>
            </Link>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  {["Company", "Role", "Type", "Submitted", "Status"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-5 py-3.5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {APPLICATIONS.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-slate-900 text-sm">{app.company}</td>
                    <td className="px-5 py-4 text-slate-700 text-sm">{app.role}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        app.type === "Simulation" ? "bg-purple-50 text-purple-700" : "bg-slate-100 text-slate-600"
                      }`}>
                        {app.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-500 text-sm">
                      {new Date(app.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={app.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 7. EMPLOYER DASHBOARD ────────────────────────────────────────────────────

function EmployerDashboard() {
  const navigate = useNavigate();

  const totalApplicants = EMPLOYER_JOBS.reduce((s, j) => s + j.applicants, 0);
  const pendingReviews = EMPLOYER_JOBS.filter((j) => j.status === "Active").reduce((s, j) => s + j.applicants, 0);

  return (
    <div className="min-h-screen bg-slate-50 relative" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Employer Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your job postings and applicants</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-8">
          {[
            { label: "Jobs Posted", value: EMPLOYER_JOBS.length, color: "text-slate-900" },
            { label: "Total Applicants", value: totalApplicants, color: "text-blue-700" },
            { label: "Pending Reviews", value: pendingReviews, color: "text-amber-700" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-sm text-slate-500 mb-1">{s.label}</p>
              <p className={`text-4xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Jobs Table */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Posted Jobs</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                {["Title", "Status", "Openings", "Applicants", "Deadline", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wide px-5 py-3.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {EMPLOYER_JOBS.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-slate-900 text-sm">{job.title}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      job.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-700 text-sm">{job.openings}</td>
                  <td className="px-5 py-4 text-slate-700 text-sm font-medium">{job.applicants}</td>
                  <td className="px-5 py-4 text-slate-500 text-sm">
                    {new Date(job.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </td>
                  <td className="px-5 py-4">
                    <Btn
                      variant="secondary"
                      onClick={() => navigate(`/employer/applicants/${job.id}`)}
                      className="text-xs py-1.5 px-3"
                    >
                      View Applicants
                    </Btn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => navigate("/employer/post")}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3.5 shadow-lg font-semibold text-sm transition-all flex items-center gap-2 hover:shadow-xl"
      >
        + Post New Job
      </button>
    </div>
  );
}

// ─── 8. POST JOB FORM ────────────────────────────────────────────────────────

function PostJobForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "", description: "",
    skills: [], niceToHave: [],
    experience: "", location: "", type: "",
    salaryMin: "", salaryMax: "",
    openings: "", deadline: "",
  });

  const update = (k, v) => setForm({ ...form, [k]: v });
  const ghostWarning = parseInt(form.openings) > 50;

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <button onClick={() => navigate("/employer/dashboard")} className="text-sm text-slate-500 hover:text-slate-700 mb-3 flex items-center gap-1">
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold text-slate-900">Post a New Job</h1>
          <p className="text-slate-500 text-sm mt-1">Fill in the details to publish your role on HireAxis</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5">
          <div>
            <Label required>Job Title</Label>
            <Input value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Senior Backend Engineer" />
          </div>
          <div>
            <Label required>Description</Label>
            <Textarea rows={5} value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Describe the role, responsibilities, and what makes it great..." />
          </div>
          <div>
            <Label required>Required Skills</Label>
            <TagInput tags={form.skills} setTags={(v) => update("skills", v)} placeholder="e.g. Python, press Enter" />
          </div>
          <div>
            <Label>Nice to Have</Label>
            <TagInput tags={form.niceToHave} setTags={(v) => update("niceToHave", v)} placeholder="e.g. Docker, press Enter" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label required>Experience Required</Label>
              <Select value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                <option value="">Select</option>
                <option>0–1 years</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5–8 years</option>
                <option>8+ years</option>
              </Select>
            </div>
            <div>
              <Label required>Role Type</Label>
              <Select value={form.type} onChange={(e) => update("type", e.target.value)}>
                <option value="">Select</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </Select>
            </div>
          </div>
          <div>
            <Label>Location</Label>
            <Input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Bengaluru / Remote" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Salary Min (LPA)</Label>
              <Input type="number" value={form.salaryMin} onChange={(e) => update("salaryMin", e.target.value)} placeholder="e.g. 12" />
            </div>
            <div>
              <Label>Salary Max (LPA)</Label>
              <Input type="number" value={form.salaryMax} onChange={(e) => update("salaryMax", e.target.value)} placeholder="e.g. 20" />
            </div>
          </div>
          <div>
            <Label required>Number of Openings</Label>
            <Input
              type="number"
              min="1"
              value={form.openings}
              onChange={(e) => update("openings", e.target.value)}
              placeholder="e.g. 3"
              className={ghostWarning ? "border-amber-400 focus:ring-amber-500" : ""}
            />
            {ghostWarning && (
              <div className="mt-2 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <span className="text-amber-500 mt-0.5">⚠</span>
                <p className="text-sm text-amber-800">
                  <strong>Large hiring claims are monitored</strong> under our anti-ghost-hiring policy. Postings with unusually high openings are subject to manual verification.
                </p>
              </div>
            )}
          </div>
          <div>
            <Label>Application Deadline</Label>
            <Input type="date" value={form.deadline} onChange={(e) => update("deadline", e.target.value)} />
          </div>

          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <Btn variant="secondary" onClick={() => navigate("/employer/dashboard")} className="flex-1">
              Cancel
            </Btn>
            <Btn variant="primary" onClick={() => navigate("/employer/dashboard")} className="flex-1">
              Publish Job
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 9. APPLICANT REVIEW PAGE ─────────────────────────────────────────────────

function ApplicantReviewPage() {
  const { jobId } = useParams();
  const job = EMPLOYER_JOBS.find((j) => j.id === jobId) || EMPLOYER_JOBS[0];
  const [applicants, setApplicants] = useState(APPLICANTS);

  const handle = (id, action) => {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: action } : a))
    );
  };

  const shortlisted = applicants.filter((a) => a.status === "shortlisted");
  const pending = applicants.filter((a) => a.status === "pending");
  const rejected = applicants.filter((a) => a.status === "rejected");

  const ApplicantCard = ({ ap, showActions = true }) => (
    <div className={`bg-white border rounded-xl p-5 shadow-sm ${
      ap.status === "shortlisted" ? "border-green-200" : ap.status === "rejected" ? "border-red-100 opacity-70" : "border-slate-200"
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
            {ap.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-sm">{ap.name}</p>
            <p className="text-xs text-slate-500">{ap.type} Application</p>
          </div>
        </div>
        <MatchBadge score={ap.matchScore} />
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {ap.skills.map((s) => (
          <span key={s} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-0.5 rounded-full">{s}</span>
        ))}
      </div>
      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
        {ap.proposal}
      </p>
      {showActions && ap.status === "pending" && (
        <div className="flex gap-2">
          <Btn variant="success" className="flex-1 text-xs py-2" onClick={() => handle(ap.id, "shortlisted")}>
            ✓ Shortlist
          </Btn>
          <Btn variant="danger" className="flex-1 text-xs py-2" onClick={() => handle(ap.id, "rejected")}>
            ✕ Reject
          </Btn>
        </div>
      )}
      {ap.status === "shortlisted" && (
        <div className="flex items-center gap-2 text-green-700 text-xs font-medium">
          <span>✓</span> Shortlisted
        </div>
      )}
      {ap.status === "rejected" && (
        <div className="flex items-center gap-2 text-red-600 text-xs font-medium">
          <span>✕</span> Rejected
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link to="/employer/dashboard" className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 mb-3">
            ← Back to Dashboard
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{job.title}</h1>
              <p className="text-slate-500 text-sm mt-1">
                {applicants.length} applicants · {job.openings} openings
              </p>
            </div>
            <div className="flex gap-3 text-sm text-slate-500">
              <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold">{shortlisted.length} Shortlisted</span>
              <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full text-xs font-semibold">{pending.length} Pending</span>
              <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-full text-xs font-semibold">{rejected.length} Rejected</span>
            </div>
          </div>
        </div>

        {/* Shortlisted */}
        {shortlisted.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Shortlisted ({shortlisted.length})
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {shortlisted.map((ap) => <ApplicantCard key={ap.id} ap={ap} showActions={false} />)}
            </div>
          </div>
        )}

        {/* Pending */}
        {pending.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              Review ({pending.length})
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {pending.map((ap) => <ApplicantCard key={ap.id} ap={ap} />)}
            </div>
          </div>
        )}

        {/* Rejected */}
        {rejected.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              Rejected ({rejected.length})
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {rejected.map((ap) => <ApplicantCard key={ap.id} ap={ap} showActions={false} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── EMPLOYER ONBOARDING ──────────────────────────────────────────────────────

function EmployerOnboarding() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ company: "", website: "", location: "", about: "", size: "" });
  const update = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <AppNav />
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Set up your company</h1>
          <p className="text-slate-500 text-sm mt-1">Tell us about your organisation to start hiring</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5">
          <div>
            <Label required>Company Name</Label>
            <Input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="e.g. Acme Technologies" />
          </div>
          <div>
            <Label>Website</Label>
            <Input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yourcompany.com" />
          </div>
          <div>
            <Label required>Headquarters Location</Label>
            <Input value={form.location} onChange={(e) => update("location", e.target.value)} placeholder="Bengaluru, Karnataka" />
          </div>
          <div>
            <Label required>Company Size</Label>
            <Select value={form.size} onChange={(e) => update("size", e.target.value)}>
              <option value="">Select size</option>
              <option>1–10 employees</option>
              <option>11–50 employees</option>
              <option>51–200 employees</option>
              <option>201–1000 employees</option>
              <option>1000+ employees</option>
            </Select>
          </div>
          <div>
            <Label>About the Company</Label>
            <Textarea rows={4} value={form.about} onChange={(e) => update("about", e.target.value)} placeholder="What does your company do? What's your mission?" />
          </div>
          <Btn variant="primary" className="w-full" onClick={() => navigate("/employer/dashboard")}>
            Complete Setup →
          </Btn>
        </div>
      </div>
    </div>
  );
}

// ─── APP & ROUTER ─────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/onboarding/candidate" element={<CandidateOnboarding />} />
        <Route path="/onboarding/employer" element={<EmployerOnboarding />} />
        <Route path="/feed" element={<CandidateFeed />} />
        <Route path="/track" element={<ApplicationTracker />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/employer/post" element={<PostJobForm />} />
        <Route path="/employer/applicants/:jobId" element={<ApplicantReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
