import React, { useRef } from 'react';
import { X, Download, Mail, Phone, Linkedin, Award, CheckCircle } from 'lucide-react';

interface ResumePDFProps {
  isOpen: boolean;
  onClose: () => void;
  profileImage?: string;
  onProfileImageChange?: (image: string) => void;
}

export default function ResumePDF({ isOpen, onClose, profileImage, onProfileImageChange }: ResumePDFProps) {
  const pdfFileInputRef = useRef<HTMLInputElement>(null);
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 no-print">
      <div 
        className="relative bg-zinc-950 w-full max-w-4xl rounded border border-zinc-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="bg-zinc-950 text-white px-6 py-4 flex items-center justify-between border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded">
              <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24 " stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif italic text-lg text-white">Interactive PDF Resume Generator</h2>
              <p className="text-[11px] text-zinc-400">Print-ready A4 document layout optimized for recruitment</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-white hover:bg-zinc-200 text-black font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              id="btn-print-resume"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            {onClose && (
              <button 
                onClick={onClose}
                className="p-1.5 hover:bg-zinc-900 rounded transition text-zinc-400 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Outer scrolling container for on-screen preview */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-zinc-900 flex justify-center border-t border-zinc-900">
          {/* Printable Resume Document Grid */}
          <div 
            id="printable-resume-container"
            className="w-[210mm] min-h-[297mm] bg-white text-zinc-800 p-8 shadow-md rounded relative flex flex-row font-sans text-sm border border-zinc-200"
            style={{ boxSizing: 'border-box' }}
          >
            {/* Top curved greyish graphic ribbon from screenshot */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#eef2f6] rounded-b-xl z-0 pointer-events-none"></div>
            
            {/* Left Column (Greyish background sidebar) */}
            <div className="w-[35%] bg-[#f7f9fc] rounded-lg -ml-2 -mt-2 -mb-2 p-6 flex flex-col gap-6 border-r border-zinc-100 relative z-10">
              
              {/* Profile Image Wrap */}
              <div className="flex flex-col items-center text-center mt-3">
                <div 
                  onClick={() => onProfileImageChange && pdfFileInputRef.current?.click()}
                  title={onProfileImageChange ? "Click to upload your image" : undefined}
                  className={`relative w-36 h-36 rounded-full border-4 border-[#3b82f6]/40 bg-white overflow-hidden mb-4 shadow-sm flex items-center justify-center ${onProfileImageChange ? 'cursor-pointer hover:scale-105' : ''} transition-transform duration-200`}
                >
                  <img 
                    src={profileImage || "https://images.unsplash.com/photo-1629425733761-caae3b5f495b?q=80&w=600&auto=format&fit=crop"} 
                    alt="Diya Dubey" 
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {onProfileImageChange && (
                  <input 
                    type="file"
                    ref={pdfFileInputRef}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          const base64String = reader.result as string;
                          onProfileImageChange(base64String);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                )}
                <div className="inline-block py-0.5 px-3 bg-zinc-200/60 rounded-full text-[9px] font-bold text-zinc-700 tracking-widest uppercase">
                  MBA STUDENT
                </div>
              </div>

              {/* ABOUT ME section */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider border-b-2 border-[#1e3a8a]/20 pb-1">
                  About Me
                </h3>
                <p className="text-[11.5px] leading-relaxed text-zinc-600 font-light">
                  I am passionate about digital marketing and eager to explore its potential in shaping businesses. With a keen interest in SEO, social media, and online advertising, I aim to enhance my skills in this dynamic field.
                </p>
              </div>

              {/* CAREER OBJECTIVES section */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider border-b-2 border-[#1e3a8a]/20 pb-1">
                  Career Objectives
                </h3>
                <p className="text-[11.5px] leading-relaxed text-zinc-600 italic font-light">
                  &ldquo;I aspire to become a digital marketing expert, helping brands optimize their online presence and drive business growth.&rdquo;
                </p>
              </div>

              {/* MY STRENGTHS section */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider border-b-2 border-[#1e3a8a]/20 pb-1">
                  My Strengths
                </h3>
                <ul className="text-[11.5px] space-y-1.5 text-zinc-600 font-light pl-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] inline-block"></span>
                    <span>Self-motivated</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] inline-block"></span>
                    <span>Positive attitude</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] inline-block"></span>
                    <span>Quick learner</span>
                  </li>
                </ul>
              </div>

              {/* CONTACT section */}
              <div className="space-y-2 mt-auto pt-4">
                <h3 className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider border-b-2 border-[#1e3a8a]/20 pb-1">
                  Contact
                </h3>
                <div className="text-[11px] space-y-2 text-zinc-650">
                  <div>
                    <span className="block font-bold text-zinc-700 tracking-wider text-[9px] uppercase">Phone:</span>
                    <span className="font-mono text-zinc-600">6262938054</span>
                  </div>
                  <div>
                    <span className="block font-bold text-zinc-700 tracking-wider text-[9px] uppercase">Linked In:</span>
                    <a 
                      href="https://www.linkedin.com/in/d1yadubey" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-blue-600 hover:underline break-all"
                    >
                      https://www.linkedin.com/in/d1yadubey
                    </a>
                  </div>
                  <div>
                    <span className="block font-bold text-zinc-700 tracking-wider text-[9px] uppercase">Email:</span>
                    <span className="text-zinc-600">diyadubey1977@gmail.com</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Core resume context) */}
            <div className="flex-1 pl-6 flex flex-col gap-6 pt-6 relative z-10">
              
              {/* Header Titles */}
              <div className="mb-4">
                <h1 className="text-4xl font-extrabold text-[#111827] tracking-wider leading-none">
                  DIYA
                </h1>
                <h1 className="text-4xl font-extrabold text-[#111827] tracking-wider mt-1 leading-none">
                  DUBEY
                </h1>
                <p className="text-[12px] uppercase tracking-[0.65em] text-[#3b82f6] font-semibold mt-3.5 mb-1 pl-0.5">
                  s t u d e n t
                </p>
              </div>

              {/* EDUCATION Section */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold text-[#1e3a8a] uppercase tracking-widest border-b-2 border-[#3b82f6]/30 pb-0.5">
                  Education
                </h3>
                <div className="space-y-1">
                  <p className="font-bold text-[12.5px] text-zinc-900 leading-tight">
                    Devi Ahilya Vishwavidyalaya, University,
                  </p>
                  <p className="font-bold text-[12.5px] text-zinc-900 leading-tight">
                    Institute of management studies, College, Indore (M.P.)
                  </p>
                  <p className="text-[11px] font-mono text-zinc-500 font-medium tracking-wide">
                    {`{2023-2028}`}
                  </p>
                  <p className="text-[12px] text-zinc-600 italic font-light mt-1">
                    Integrated 5 years MBA course in e-commerce
                  </p>
                </div>
              </div>

              {/* SKILLS SUMMARY Section */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold text-[#1e3a8a] uppercase tracking-widest border-b-2 border-[#3b82f6]/30 pb-0.5">
                  Skills Summary
                </h3>
                <ul className="space-y-2 text-[12px] text-zinc-700 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3b82f6] font-bold mt-0.5">▪</span>
                    <span className="font-light">Certified knowledge of <strong className="font-semibold text-zinc-800">Tally</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3b82f6] font-bold mt-0.5">▪</span>
                    <span className="font-light">Good knowledge of <strong className="font-semibold text-zinc-800">Microsoft office</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3b82f6] font-bold mt-0.5">▪</span>
                    <span className="font-light">Certified knowledge of <strong className="font-semibold text-zinc-800">digital marketing tools</strong></span>
                  </li>
                </ul>
              </div>

              {/* PROJECTS Section */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold text-[#1e3a8a] uppercase tracking-widest border-b-2 border-[#3b82f6]/30 pb-0.5">
                  Projects
                </h3>
                <div className="space-y-4 text-[12px] text-zinc-700 pl-1">
                  
                  {/* Project 1 */}
                  <div className="space-y-1">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#3b82f6] font-bold mt-0.5">▪</span>
                      <p className="font-bold text-[12.5px] text-[#1e3a8a]">
                        Instagram marketing project- @hairtalesofficial
                      </p>
                    </div>
                    <p className="pl-4 text-zinc-600 leading-relaxed font-light text-[11.5px]">
                      As part of a digital marketing assignment, we created and managed an Instagram page, <strong className="font-medium text-zinc-800">@hairtalesofficial</strong>, dedicated to hair accessories like clips and bows.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-1">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#3b82f6] font-bold mt-0.5">▪</span>
                      <p className="font-bold text-[12.5px] text-[#1e3a8a]">
                        Marketing event-brand bazar
                      </p>
                    </div>
                    <p className="pl-4 text-zinc-600 leading-relaxed font-light text-[11.5px]">
                      &ldquo;Earned 3rd place in &apos;Brand Bazar&apos; as a Social Media Team Member, driving product campaign through effective social media strategies, including creating posts, reels, and managing handles.&rdquo;
                    </p>
                  </div>

                </div>
              </div>

              {/* DECLARATION Section */}
              <div className="space-y-2.5 mt-auto pt-6">
                <h3 className="text-sm font-extrabold text-[#1e3a8a] uppercase tracking-widest border-b-2 border-[#3b82f6]/30 pb-0.5">
                  Declaration
                </h3>
                <p className="text-[11.5px] text-zinc-600 italic leading-relaxed font-light pl-1">
                  I Diya Dubey, hereby confirm that the information given above is true to the best of my knowledge.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
