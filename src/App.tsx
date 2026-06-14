/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  BookOpen, 
  Briefcase, 
  Phone, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Award, 
  Instagram, 
  TrendingUp, 
  Smile, 
  Rocket, 
  ArrowUpRight, 
  MapPin, 
  Bookmark, 
  CheckCircle,
  FileText
} from 'lucide-react';

import ResumePDF from './components/ResumePDF';
import InstagramSimulator from './components/InstagramSimulator';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import SkillsViewer from './components/SkillsViewer';
import ContactForm from './components/ContactForm';

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<'instagram' | 'bazar'>('instagram');
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('diya_profile_picture') || 'https://images.unsplash.com/photo-1629425733761-caae3b5f495b?q=80&w=600&auto=format&fit=crop';
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('diya_profile_picture', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e0e0e0] selection:bg-zinc-700 selection:text-white font-sans antialiased relative">
      <header className="sticky top-0 z-40 bg-[#080808]/85 backdrop-blur-md border-b border-zinc-900 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 text-zinc-100 flex items-center justify-center font-serif italic tracking-wider text-sm">
              DD
            </div>
            <a href="#" className="font-serif italic tracking-tight text-white hover:text-zinc-300 transition text-base">
              Diya Dubey
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="flex items-center gap-2 bg-transparent hover:bg-white hover:text-[#080808] text-white border border-zinc-800 font-bold py-2 px-4 rounded text-[10px] uppercase tracking-[0.15em] transition active:scale-95 cursor-pointer"
              id="header-btn-export-pdf"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-[#080808] border-b border-zinc-900 py-12 md:py-20 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left intro text info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] font-bold text-zinc-300 uppercase tracking-[0.25em] leading-none">
                <Sparkles className="w-3 h-3 text-zinc-400 animate-spin-slow" />
                <span>E-Commerce MBA Specialized</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif italic tracking-tighter text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                  Diya Dubey
                </h1>
                <p className="font-sans text-xs uppercase tracking-[0.3em] font-medium text-zinc-400">
                  Digital Marketing & Social Media Strategist
                </p>
                <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed font-light">
                  Passionate digital marketing student focusing on <strong className="text-white font-medium">SEO parameters</strong>, <strong className="text-white font-medium">Instagram aesthetics</strong>, and <strong className="text-white font-medium">high-performance advertising reels</strong>. Completing a 5-year integrated MBA in E-commerce to optimize modern digital business structures.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="#contact" 
                  className="bg-white hover:bg-zinc-200 text-[#080808] font-bold py-3 px-6 rounded text-[10px] uppercase tracking-[0.2em] transition hover:-translate-y-0.5 shadow-md shadow-black/40 cursor-pointer"
                  id="hero-btn-connect"
                >
                  Let&apos;s Connect
                </a>
                <button 
                  onClick={() => setIsPrintModalOpen(true)}
                  className="bg-transparent hover:bg-zinc-900 text-white border border-zinc-800 font-bold py-3 px-6 rounded text-[10px] uppercase tracking-[0.2em] transition hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
                  id="hero-btn-resume"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </button>
              </div>

              {/* Contacts Quick list */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-[11px] uppercase tracking-[0.15em] font-medium text-zinc-500 border-t border-zinc-905 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-600" />
                  <span className="text-zinc-400">Indore, M.P. (India)</span>
                </div>
                <a href="mailto:diyadubey1977@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                  <Mail className="w-4 h-4 text-zinc-600" />
                  <span className="text-zinc-400">diyadubey1977@gmail.com</span>
                </a>
                <a href="tel:+916262938054" className="flex items-center gap-2 hover:text-white transition">
                  <Phone className="w-4 h-4 text-zinc-600" />
                  <span className="text-zinc-400">+91 6262938054</span>
                </a>
              </div>
            </div>

            {/* Right visual graphics card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-zinc-900/30 p-2 shadow-2xl border border-zinc-900 overflow-hidden group">
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative background grids */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-60"></div>
                  
                  {/* Circle matching her resume photo frame style */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    title="Click to upload your image"
                    className="w-48 h-48 rounded-full border-4 border-zinc-800 bg-zinc-950 relative shadow-md flex items-center justify-center overflow-hidden z-10 transition duration-300 hover:scale-105 cursor-pointer"
                  >
                    <img 
                      src={profileImage} 
                      alt="Diya Dubey" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <input 
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Active Beacon status Badge */}
                  <div className="absolute bottom-4 left-4 z-15 bg-zinc-900/90 backdrop-blur px-3 py-1.5 rounded border border-zinc-800 shadow-sm flex items-center gap-1.5 font-sans">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-bold text-zinc-405 tracking-[0.2em] uppercase">Open to Recruit</span>
                  </div>

                  {/* Top-Right Mini Award Shield */}
                  <div className="absolute top-4 right-4 z-15 bg-zinc-900 text-zinc-300 p-2 rounded border border-zinc-800 shadow-md flex items-center justify-center">
                    <Award className="w-5 h-5 text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic decorative backdrop shape */}
        <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-zinc-900/5 rounded-bl-[10vw] z-0 hidden lg:block -skew-x-6"></div>
      </section>

      {/* Stats Ribbon Block */}
      <section className="bg-zinc-950 text-white py-8 border-b border-zinc-900 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center select-none">
            <div className="py-2">
              <p className="text-3xl font-serif italic tracking-tighter text-white">3rd place</p>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-[0.25em] font-mono">Brand Bazar Award Winner</p>
            </div>
            <div className="py-2 border-zinc-900 sm:border-x">
              <p className="text-3xl font-serif italic tracking-tighter text-white">5 Years</p>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-[0.25em] font-mono">Specialized E-Commerce MBA</p>
            </div>
            <div className="py-2">
              <p className="text-3xl font-serif italic tracking-tighter text-white">100%</p>
              <p className="text-[10px] text-zinc-500 mt-1 uppercase font-bold tracking-[0.25em] font-mono">Result & Growth Mindset</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20 no-print">
        
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* About text and objective */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.25em]">01 / Profile Overview</span>
                <h2 className="text-3xl font-serif italic text-white tracking-tight">About Me & Objectives</h2>
              </div>
              <div className="text-zinc-405 space-y-4 max-w-none text-sm sm:text-base leading-relaxed font-light">
                <p>
                  As an aspiring digital marketer, I study the intersection of business automation and social media algorithms. I focus heavily on optimizing page aesthetics and visual hierarchies to retain viewer interest and boost overall client conversions.
                </p>
                <div className="bg-zinc-900/50 border-l-2 border-zinc-500 p-5 rounded my-6">
                  <p className="italic font-light text-zinc-300 text-sm leading-relaxed">
                    &ldquo;I aspire to become a digital marketing expert, helping brands optimize their online presence and drive business growth.&rdquo;
                  </p>
                  <span className="block mt-2 text-[9px] font-bold font-mono tracking-[0.2em] uppercase text-zinc-500">
                    — Core Professional Objective
                  </span>
                </div>
              </div>
            </div>

            {/* Strengths Cards */}
            <div className="lg:col-span-4 bg-zinc-905 border border-zinc-900 rounded p-6 space-y-4 shadow-sm">
              <div>
                <h4 className="font-serif italic text-lg text-zinc-200">My Strengths</h4>
                <p className="text-[11px] text-zinc-500 mt-1">Foundational attributes backing my campaign execution</p>
              </div>

              <div className="space-y-3">
                {/* Self-motivated */}
                <div className="flex items-start gap-4 p-3 bg-zinc-950/40 rounded border border-zinc-900/60 hover:bg-zinc-900 transition-all">
                  <div className="p-2 bg-zinc-900 border border-zinc-805 text-zinc-300 rounded">
                    <Rocket className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <h5 className="font-serif italic text-sm text-zinc-200">Self-motivated</h5>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-light">Pragmatic self-starter who launches social handles with zero lag.</p>
                  </div>
                </div>

                {/* Positive attitude */}
                <div className="flex items-start gap-4 p-3 bg-zinc-950/40 rounded border border-zinc-905 hover:bg-zinc-900 transition-all">
                  <div className="p-2 bg-zinc-900 border border-zinc-805 text-zinc-300 rounded">
                    <Smile className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <h5 className="font-serif italic text-sm text-zinc-200">Positive attitude</h5>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-light">Maintains a strong solution-oriented mindset across tight contest pressures.</p>
                  </div>
                </div>

                {/* Quick learner */}
                <div className="flex items-start gap-4 p-3 bg-zinc-950/40 rounded border border-zinc-905 hover:bg-zinc-900 transition-all">
                  <div className="p-2 bg-zinc-900 border border-zinc-805 text-zinc-300 rounded">
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </div>
                  <div>
                    <h5 className="font-serif italic text-sm text-zinc-200">Quick learner</h5>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-light">Absorbs complex software suites and accounting dashboards rapidly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Timeline Section */}
        <section id="education" className="scroll-mt-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-zinc-505 uppercase tracking-[0.25em]">02 / Academic Journey</span>
              <h2 className="text-3xl font-serif italic text-white tracking-tight">Academic Foundations</h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-900 rounded p-6 md:p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                <div className="md:col-span-3 text-zinc-500 font-mono text-xs font-bold tracking-[0.15em] pt-1 flex items-center gap-1.5 uppercase">
                  <BookOpen className="w-4 h-4 text-zinc-400" />
                  <span>2023 — 2028</span>
                </div>
                <div className="md:col-span-9 space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="font-serif italic text-xl md:text-2xl text-white">
                      Integrated 5-Years MBA Course in E-Commerce
                    </h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-450">
                      Institute of Management Studies, Devi Ahilya Vishwavidyalaya, College, Indore (M.P.)
                    </p>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl font-light">
                    Specializing deeply in e-commerce strategy, digital accounting, and business system models. Coursework combines advanced accounting, digital content marketing, consumer behavior, and online search structures.
                  </p>
                  
                  {/* Grid coursework highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs">
                    <div className="flex items-center gap-2 text-zinc-300 bg-zinc-950/40 px-3 py-2 rounded border border-zinc-900">
                      <CheckCircle className="w-4 h-4 text-zinc-400" />
                      <span>E-commerce Platform Layouts</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300 bg-zinc-950/40 px-3 py-2 rounded border border-zinc-900">
                      <CheckCircle className="w-4 h-4 text-zinc-400" />
                      <span>Consumer SEO Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* background watermark */}
              <div className="absolute right-4 bottom-2 text-zinc-950 font-serif italic text-8xl md:text-9xl select-none pointer-events-none opacity-20">
                DAVV
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.25em]">03 / Tool Mastery</span>
              <h2 className="text-3xl font-serif italic text-white tracking-tight">Skills & Certifications</h2>
            </div>
            
            {/* Embedded skills component */}
            <SkillsViewer />
          </div>
        </section>

        {/* Projects Showcase with Switchable Interactive Panels */}
        <section id="projects" className="scroll-mt-24">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.25em]">04 / Portfolio Ventures</span>
                <h2 className="text-3xl font-serif italic text-white tracking-tight">Campaign Projects</h2>
              </div>
              
              {/* Section Project Tabs selectors */}
              <div className="flex bg-zinc-950 p-1 rounded border border-zinc-900 w-fit self-start">
                <button
                  onClick={() => setActiveProjectTab('instagram')}
                  className={`px-4 py-2 rounded text-xs font-bold transition select-none cursor-pointer flex items-center gap-1.5 ${activeProjectTab === 'instagram' ? 'bg-zinc-900 text-white border border-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}
                  id="tab-btn-instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>@hairtalesofficial</span>
                </button>
                <button
                  onClick={() => setActiveProjectTab('bazar')}
                  className={`px-4 py-2 rounded text-xs font-bold transition select-none cursor-pointer flex items-center gap-1.5 ${activeProjectTab === 'bazar' ? 'bg-zinc-900 text-white border border-zinc-800' : 'text-zinc-500 hover:text-zinc-300'}`}
                  id="tab-btn-brand-bazar"
                >
                  <Award className="w-3.5 h-3.5 text-zinc-450" />
                  <span>Brand Bazar Campaign</span>
                </button>
              </div>
            </div>

            {/* Display correct interactive element */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeProjectTab === 'instagram' ? (
                  <motion.div
                    key="instagram-panel"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Project 1 overview block */}
                    <div className="bg-zinc-900 border border-zinc-900 rounded p-6 md:p-8 mb-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h4 className="font-serif italic text-xl text-white">
                          Instagram Marketing Assignment — @hairtalesofficial
                        </h4>
                        <span className="bg-[#ff007f]/5 border border-[#ff007f]/20 text-[#ff007f] text-[10px] font-bold px-3 py-1 rounded uppercase tracking-[0.15em] font-mono">
                          Social Branding
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">
                        Tasked with creating an online commercial presence from scratch as part of an academic digital marketing assignment. We designed and managed an Instagram catalog page entirely dedicated to hair accessories including cute clips and bows.
                      </p>
                    </div>

                    <InstagramSimulator />
                  </motion.div>
                ) : (
                  <motion.div
                    key="bazar-panel"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Project 2 overview block */}
                    <div className="bg-zinc-900 border border-zinc-900 rounded p-6 md:p-8 mb-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h4 className="font-serif italic text-xl text-white">
                          Academic Event Campaign — Brand Bazar Selection
                        </h4>
                        <span className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-[10px] font-bold px-3 py-1 rounded uppercase tracking-[0.15em] font-mono">
                          Competition Winner
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed font-light">
                        Earned <strong className="text-white font-medium">3rd place</strong> in &apos;Brand Bazar&apos; as an active Social Media Team Member. Designed product launch aesthetics, curated viral reels, designed visual countdown cues, and achieved outstanding engagement among university contestants.
                      </p>
                    </div>

                    <AnalyticsDashboard />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.25em]">05 / Get in Touch</span>
              <h2 className="text-3xl font-serif italic text-white tracking-tight">Contact & Collaboration</h2>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* Declaration Foot Block */}
        <section className="pt-8 border-t border-zinc-900">
          <div className="bg-zinc-900/40 border border-zinc-900 p-6 md:p-8 rounded text-center space-y-3 relative overflow-hidden">
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest font-bold">Formal Affirmation</p>
            <h4 className="font-serif font-light text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto italic">
              &ldquo;I Diya Dubey, hereby confirm that the information given above is true to the best of my knowledge.&rdquo;
            </h4>
            
            {/* Visual signature seal */}
            <div className="pt-2 flex justify-center items-center gap-1.5 text-xs text-zinc-500">
              <CheckCircle className="w-4 h-4 text-zinc-400" />
              <span className="font-bold tracking-wider uppercase text-[10px] text-zinc-400">Verified Web Document</span>
            </div>
          </div>
        </section>

      </main>

      {/* Corporate Footers */}
      <footer className="bg-[#080808] border-t border-zinc-900 py-8 text-zinc-550 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Diya Dubey. All resume data synchronized via A4 PDF standards.</p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/d1yadubey" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition flex items-center gap-1"
              id="footer-link-linkedin"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:diyadubey1977@gmail.com" 
              className="hover:text-white transition flex items-center gap-1"
              id="footer-link-email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Hidden Print-Ready Absolute Container for window.print() */}
      <div className="hidden print:block absolute inset-0 z-50">
        <ResumePDF isOpen={true} onClose={() => {}} profileImage={profileImage} />
      </div>

      {/* Interactive print modal triggers */}
      <ResumePDF 
        isOpen={isPrintModalOpen} 
        onClose={() => setIsPrintModalOpen(false)} 
        profileImage={profileImage}
        onProfileImageChange={setProfileImage}
      />

    </div>
  );
}
