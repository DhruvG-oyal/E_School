import React from 'react';
import Navbar from '../components/Navbars/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

/* ─── design tokens ──────────────────────────────────────
   bg-deep   : #05080f   (page bg)
   bg-card   : #0d1424   (card bg)
   bg-raised : #111c30   (hover / raised)
   border    : #1a2744   (subtle border)
   accent    : #3b82f6   (blue-500)
   accent-hi : #60a5fa   (blue-400, readable on dark)
   text-hi   : #f1f5f9   (slate-100)
   text-mid  : #94a3b8   (slate-400)
   text-lo   : #475569   (slate-600)
──────────────────────────────────────────────────────── */

const T = {
  deep:    '#05080f',
  card:    '#0d1424',
  raised:  '#111c30',
  border:  '#1e3a5f',
  accent:  '#3b82f6',
  accentHi:'#60a5fa',
  hi:      '#f1f5f9',
  mid:     '#cbd5e1',   // slate-300 — clearly readable on dark
  lo:      '#94a3b8',   // slate-400 — secondary text, still visible
};

/* ── Navbar ──────────────────────────────────────────── */
const LandingNavbar = () => {
  const navigate = useNavigate();
  return (
    <header style={{ background: T.deep, borderBottom: `1px solid ${T.border}` }}
      className="sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none">E</div>
          <span style={{ color: T.hi }} className="font-bold text-[17px] tracking-tight">E-School</span>
        </div>
        <nav className="hidden md:flex items-center gap-7">
          {['Features', 'Courses', 'How it works'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`}
              style={{ color: T.mid }} className="text-[14px] hover:text-white transition cursor-pointer">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/login')}
            style={{ color: T.hi, background: 'transparent' }}
            className="text-[14px] font-medium hover:text-blue-400 transition cursor-pointer px-3 py-1.5">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

/* ── Hero ────────────────────────────────────────────── */
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section style={{ background: T.deep }} className="relative overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(${T.border} 1px,transparent 1px),linear-gradient(90deg,${T.border} 1px,transparent 1px)`, backgroundSize: '56px 56px', opacity: 0.35 }} />
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 flex flex-col lg:flex-row items-center gap-16">
        {/* left */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[12px] font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(59,130,246,0.12)', border: `1px solid rgba(59,130,246,0.3)`, color: T.accentHi }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
            Community-driven learning platform
          </div>

          <h1 style={{ color: T.hi }} className="font-extrabold text-[52px] lg:text-[64px] leading-[1.05] tracking-tight mb-6">
            Learn smarter.<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)' }}>
              Grow together.
            </span>
          </h1>

          <p style={{ color: T.mid }} className="text-[18px] leading-relaxed max-w-[480px] mb-10 mx-auto lg:mx-0">
            Structured courses, real-time peer chat, and a personal knowledge dashboard — everything a developer needs to level up.
          </p>

          <div className="flex justify-center lg:justify-start mt-2">
            <button onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition text-[15px] cursor-pointer shadow-lg shadow-blue-900/40 w-fit">
              Start learning now
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-10 mt-12 justify-center lg:justify-start">
            {[['6', 'Courses'], ['3', 'Pages each'], ['Real-time', 'Chat']].map(([v, l]) => (
              <div key={l}>
                <div style={{ color: T.hi }} className="font-bold text-[26px] leading-none">{v}</div>
                <div style={{ color: T.lo }} className="text-[13px] mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right — 2×2 feature cards */}
        <div className="flex-1 w-full max-w-[420px]">
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '📚', color: '#1d4ed8', title: 'Structured Courses', desc: 'Multi-page modules with code, thinkboxes & images' },
              { icon: '💬', color: '#7c3aed', title: 'Real-time Chat',     desc: 'Connect with learners via Socket.IO messaging' },
              { icon: '🏷️', color: '#0891b2', title: 'Smart Tags',         desc: 'Filter the library by topic in one click' },
              { icon: '🗂️', color: '#059669', title: 'Personal Dashboard', desc: 'Build your own private knowledge base' },
            ].map(f => (
              <div key={f.title}
                style={{ background: T.card, border: `1px solid ${T.border}` }}
                className="rounded-2xl p-5 hover:border-blue-700/60 transition group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background: `${f.color}22` }}>
                  {f.icon}
                </div>
                <div style={{ color: T.hi }} className="font-semibold text-[13px] mb-1 group-hover:text-blue-400 transition">{f.title}</div>
                <div style={{ color: T.mid }} className="text-[12px] leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Trusted by strip ────────────────────────────────── */
const TrustStrip = () => (
  <div style={{ background: T.card, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}
    className="py-4">
    <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10">
      {[
        { icon: '⚡', label: 'Instant course access' },
        { icon: '🔒', label: 'JWT authentication' },
        { icon: '📡', label: 'Live Socket.IO chat' },
        { icon: '🎨', label: 'Syntax-highlighted code' },
        { icon: '🗄️', label: 'MongoDB persistence' },
      ].map(i => (
        <div key={i.label} className="flex items-center gap-2" style={{ color: T.mid }}>
          <span className="text-[16px]">{i.icon}</span>
          <span className="text-[13px] font-medium">{i.label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Features ────────────────────────────────────────── */
const Features = () => {
  const features = [
    { icon: '📖', color: '#1d4ed8', title: 'Rich content pages',    desc: 'Every course page has a main title, subtitles, descriptions, syntax-highlighted code blocks, and thinkboxes for key insights.' },
    { icon: '💬', color: '#7c3aed', title: 'Per-course comments',   desc: 'Leave questions or insights directly on any course page. Build a collaborative knowledge base with the community.' },
    { icon: '🗨️', color: '#0891b2', title: 'Real-time messaging',   desc: 'Chat with any user instantly. Powered by Socket.IO with live online presence indicators in the sidebar.' },
    { icon: '🗂️', color: '#059669', title: 'Personal dashboard',    desc: 'Create your own learning cards with custom tags, descriptions, and linked content — your private knowledge base.' },
    { icon: '🔍', color: '#d97706', title: 'Tag-based discovery',   desc: 'Every course is tagged. Filter the entire library by technology or topic with a single click.' },
    { icon: '🔐', color: '#dc2626', title: 'Secure & stateless',    desc: 'JWT authentication on every protected route. Stateless sessions scale horizontally without shared state.' },
  ];
  return (
    <section id="features" style={{ background: T.deep }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: T.accentHi }} className="text-[12px] font-bold uppercase tracking-widest mb-3">Features</p>
          <h2 style={{ color: T.hi }} className="font-extrabold text-[38px] lg:text-[46px] leading-tight">Everything you need to learn</h2>
          <p style={{ color: T.mid }} className="mt-4 text-[17px] max-w-xl mx-auto">A full-stack MERN platform built with production-grade features.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.title}
              style={{ background: T.card, border: `1px solid ${T.border}` }}
              className="rounded-2xl p-6 hover:border-blue-700/50 transition group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${f.color}20` }}>
                {f.icon}
              </div>
              <h3 style={{ color: T.hi }} className="font-bold text-[16px] mb-2 group-hover:text-blue-400 transition">{f.title}</h3>
              <p style={{ color: T.mid }} className="text-[14px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Courses ─────────────────────────────────────────── */
const Courses = () => {
  const navigate = useNavigate();
  const courses = [
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', title: 'JavaScript Fundamentals', tags: ['JavaScript', 'Beginner'], color: '#f59e0b' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',      title: 'React.js Complete Guide',    tags: ['React', 'Frontend'],    color: '#38bdf8' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',    title: 'Node.js & Express',          tags: ['Node.js', 'Backend'],   color: '#4ade80' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',                 title: 'Data Structures & Algorithms', tags: ['DSA', 'Interview'],   color: '#a78bfa' },
    { icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',                         title: 'MongoDB & Mongoose',         tags: ['MongoDB', 'Database'],  color: '#34d399' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',                 title: 'System Design',              tags: ['Architecture', 'Advanced'], color: '#fb923c' },
  ];
  return (
    <section id="courses" style={{ background: T.card }} className="pt-24 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: T.accentHi }} className="text-[12px] font-bold uppercase tracking-widest mb-3">Course library</p>
          <h2 style={{ color: T.hi }} className="font-extrabold text-[38px] lg:text-[46px] leading-tight">What you'll learn</h2>
          <p style={{ color: T.mid }} className="mt-4 text-[17px] max-w-xl mx-auto">Hand-crafted courses covering the full MERN stack and beyond.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(c => (
            <div key={c.title}
              style={{ background: T.deep, border: `1px solid ${T.border}` }}
              className="rounded-2xl p-5 flex items-center gap-4 hover:border-blue-600/60 transition group cursor-pointer"
              onClick={() => navigate('/login')}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 p-2"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                <img src={c.icon} alt={c.title} className="w-7 h-7 object-contain" />
              </div>
              <div className="min-w-0">
                <div style={{ color: T.hi }} className="font-semibold text-[14px] truncate group-hover:text-blue-400 transition mb-1.5">{c.title}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {c.tags.map(t => (
                    <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}30` }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ color: T.lo }} className="ml-auto text-[18px] group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0">→</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => navigate('/signup')}
            style={{ border: `2px solid #1e3a5f`, color: '#f1f5f9', background: T.deep, display: 'inline-block', padding: '12px 32px', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', letterSpacing: '0.01em' }}>
            View all courses after signing up →
          </button>
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials ────────────────────────────────────── */
const Testimonials = () => {
  const items = [
    { name: 'Priya S.',    role: 'Frontend Developer',    text: 'The JavaScript and React courses are exactly what I needed. The code examples are clear and the thinkboxes really make you stop and think.' },
    { name: 'Rahul M.',    role: 'CS Student',             text: 'DSA course helped me crack my placement interviews. The real-time chat feature is a bonus — I could ask questions to other learners instantly.' },
    { name: 'Ananya K.',   role: 'Backend Engineer',       text: 'System Design and MongoDB courses are top-notch. The personal dashboard lets me keep my own notes alongside the course content.' },
  ];
  return (
    <section style={{ background: T.card }} className="pt-10 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ color: T.accentHi }} className="text-[12px] font-bold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 style={{ color: T.hi }} className="font-extrabold text-[38px] lg:text-[46px] leading-tight">What learners say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map(t => (
            <div key={t.name}
              style={{ background: T.deep, border: `1px solid ${T.border}` }}
              className="rounded-2xl p-6 flex flex-col gap-4">
              {/* stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-[14px]">★</span>)}
              </div>
              <p style={{ color: T.mid }} className="text-[14px] leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: `1px solid ${T.border}` }}>
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ color: T.hi }} className="font-semibold text-[13px]">{t.name}</div>
                  <div style={{ color: T.lo }} className="text-[12px]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CTA ─────────────────────────────────────────────── */
const CTA = () => {
  const navigate = useNavigate();
  return (
    <section style={{ background: T.deep }} className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-3xl p-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(99,102,241,0.1) 100%)', border: `1px solid rgba(59,130,246,0.3)` }}>
          {/* glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)' }} />
          <div className="relative">
            <h2 style={{ color: T.hi }} className="font-extrabold text-[38px] lg:text-[46px] leading-tight mb-4">
              Ready to start learning?
            </h2>
            <p style={{ color: T.mid }} className="text-[17px] mb-8">Join the community and start learning today.</p>
            <button onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl transition text-[16px] cursor-pointer shadow-xl shadow-blue-900/40">
              Create your free account →
            </button>
            <p style={{ color: T.lo }} className="mt-5 text-[13px]">
              Already have an account?{' '}
              <span style={{ color: T.accentHi }} className="cursor-pointer hover:underline" onClick={() => navigate('/login')}>Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Footer ──────────────────────────────────────────── */
const LandingFooter = () => {
  const navigate = useNavigate();
  return (
    <footer style={{ background: T.card, borderTop: `1px solid ${T.border}` }} className="py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">E</div>
          <span style={{ color: T.hi }} className="font-bold text-[16px]">E-School</span>
        </div>
        <p style={{ color: T.lo }} className="text-[13px] text-center">
          Full-stack MERN learning platform · React · Node.js · Express · MongoDB · Socket.IO
        </p>
        <div></div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 text-center text-[12px]"
        style={{ borderTop: `1px solid ${T.border}`, color: T.lo }}>
        © {new Date().getFullYear()} E-School. All rights reserved.
      </div>
    </footer>
  );
};

/* ── Page ────────────────────────────────────────────── */
const WinterSchool = () => (
  <div style={{ background: T.deep }} className="w-full min-h-screen overflow-x-hidden flex flex-col">
    <LandingNavbar />
    <main className="flex-grow">
      <Hero />
      <TrustStrip />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
    </main>
    <LandingFooter />
  </div>
);

export default WinterSchool;
