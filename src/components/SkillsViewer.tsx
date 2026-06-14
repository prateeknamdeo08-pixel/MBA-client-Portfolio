/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Book, Award, FileSpreadsheet, Percent, Users, MessageSquareCode } from 'lucide-react';
import { Skill } from '../types';

export default function SkillsViewer() {
  const categories = [
    { id: 'marketing', name: 'Digital Marketing & SEO', icon: Compass },
    { id: 'tech', name: 'Tech & Financial Systems', icon: FileSpreadsheet },
    { id: 'soft', name: 'Strengths & Leadership', icon: Users }
  ] as const;

  const [activeCategory, setActiveCategory] = useState<'marketing' | 'tech' | 'soft'>('marketing');

  const skills: Skill[] = [
    // Marketing
    { name: 'SEO & Search Optimization', level: 85, category: 'marketing' },
    { name: 'Instagram & Social Feed Aesthetics', level: 90, category: 'marketing' },
    { name: 'Online Advertising & Reels Campaigns', level: 88, category: 'marketing' },
    { name: 'E-commerce Brand Strategies', level: 82, category: 'marketing' },
    
    // Tech & Fintech
    { name: 'Certified Tally Accounting Suite', level: 95, category: 'tech' },
    { name: 'Advanced Microsoft Excel & Analytics', level: 88, category: 'tech' },
    { name: 'Microsoft PowerPoint & Word Formatting', level: 90, category: 'tech' },
    { name: 'Digital Media Design & Poster Creation', level: 78, category: 'tech' },

    // Soft & Leadership
    { name: 'Self-Motivated & Driven Campaign Planning', level: 95, category: 'soft' },
    { name: 'Positive Professional Team Collaboration', level: 92, category: 'soft' },
    { name: 'Quick Adaptive Learner for Systems & Tools', level: 96, category: 'soft' },
    { name: 'Public Speaking & Event Presentation', level: 80, category: 'soft' }
  ];

  const filteredSkills = skills.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Tab Selectors */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-zinc-900 pb-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded text-xs font-semibold cursor-pointer select-none transition ${isActive ? 'bg-[#18181b] text-white border border-zinc-700 shadow-sm' : 'bg-transparent text-zinc-400 border border-zinc-900 hover:bg-zinc-900 hover:text-white'}`}
              id={`btn-skill-cat-${cat.id}`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 border border-zinc-900 p-5 rounded shadow-sm space-y-3.5 hover:border-zinc-800 hover:shadow-md transition duration-200"
            >
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif italic text-sm text-zinc-200">{skill.name}</span>
                <span className="font-mono text-zinc-400 font-semibold bg-zinc-950 border border-zinc-900 px-2.5 py-0.5 rounded">
                  {skill.level}% Proficient
                </span>
              </div>
              <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-gradient-to-r from-zinc-300 to-zinc-400 h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Extra Skill Badges certifications */}
      <div className="bg-zinc-900/40 border border-zinc-900 p-5 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-350 rounded">
            <Award className="w-5 h-5 text-zinc-400" />
          </div>
          <div>
            <h5 className="font-serif italic text-sm text-zinc-200">Academic & System Accreditations</h5>
            <p className="text-[11px] text-zinc-400">Tally and Digital Marketing standards verified under Institute of management studies guidelines</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] font-semibold text-zinc-450">
          <span className="bg-zinc-950 border border-zinc-850 px-3 py-1 rounded uppercase tracking-wider font-mono text-[9px]">Tally Certified</span>
          <span className="bg-zinc-950 border border-zinc-850 px-3 py-1 rounded uppercase tracking-wider font-mono text-[9px]">MS Office Expert</span>
          <span className="bg-zinc-950 border border-zinc-850 px-3 py-1 rounded uppercase tracking-wider font-mono text-[9px]">E-Commerce MBA Specialized</span>
        </div>
      </div>
    </div>
  );
}
