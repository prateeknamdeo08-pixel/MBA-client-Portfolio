/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Zap, TrendingUp, BarChart, RefreshCw, Layers, CheckCircle } from 'lucide-react';

interface CampaignStrategy {
  id: string;
  name: string;
  reach: number;
  engagement: number;
  reelsViews: number;
  conversionRate: number;
  description: string;
  isWonMetric: boolean;
}

export default function AnalyticsDashboard() {
  const strategies: CampaignStrategy[] = [
    {
      id: 'strat-1',
      name: 'Reels Campaign & Video Teasers (Core)',
      reach: 22400,
      engagement: 14.8,
      reelsViews: 45000,
      conversionRate: 6.2,
      description: 'The highest driver of awareness! Short, entertaining clips highlighting behind-the-scenes event prep, product sneak peaks, and student booth hype.',
      isWonMetric: true
    },
    {
      id: 'strat-2',
      name: 'Meme Marketing & Regional Humor',
      reach: 12500,
      engagement: 18.2,
      reelsViews: 18000,
      conversionRate: 3.1,
      description: 'High-sharing comedy templates tailored to local university life. Drove rapid bookmarks and story reposts across Indore colleges.',
      isWonMetric: false
    },
    {
      id: 'strat-3',
      name: 'Interactive Quizzes & Countdown Polls',
      reach: 8400,
      engagement: 22.5,
      reelsViews: 0,
      conversionRate: 8.5,
      description: 'Instagram story sticky questions ("Guess the prize!", "Which brand is this?"). Highly interactive, prompting direct contact messages and inbox leads.',
      isWonMetric: false
    },
    {
      id: 'strat-4',
      name: 'Collab Posts & Brand Ambassadors',
      reach: 18900,
      engagement: 11.2,
      reelsViews: 32000,
      conversionRate: 4.8,
      description: 'Coordinated joint posts with student clubs and micro-influencers. Built cross-audience trust, validating brand presence.',
      isWonMetric: false
    }
  ];

  const [selectedStratId, setSelectedStratId] = useState<string>('strat-1');
  const activeStrat = strategies.find(s => s.id === selectedStratId) || strategies[0];

  return (
    <div className="bg-[#0b0b0d] text-zinc-100 rounded p-6 md:p-8 shadow-sm border border-zinc-900/60">
      {/* Dashboard title header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-900 pb-5 mb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-850 px-3 py-1 rounded flex items-center gap-1.5 w-fit uppercase tracking-[0.2em] font-semibold">
            <Award className="w-3.5 h-3.5 text-zinc-400" />
            3rd Place Winner Campaign Award
          </span>
          <h3 className="text-xl md:text-2xl font-serif italic text-white mt-3">
            Brand Bazar Campaign Dashboard
          </h3>
          <p className="text-sm text-zinc-404 mt-1 font-light">
            Explore the real stats from Diya&apos;s award-winning Brand Bazar project strategies.
          </p>
        </div>
        <button 
          onClick={() => setSelectedStratId('strat-1')}
          className="flex items-center gap-1.5 bg-zinc-950 border border-zinc-900 hover:bg-zinc-900 text-[10px] px-3.5 py-1.5 rounded cursor-pointer text-zinc-400 tracking-wider uppercase font-semibold transition"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset View</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Playbook Strategies panel */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold px-1">
            Choose Strategy Playbook
          </p>
          <div className="space-y-2.5">
            {strategies.map((strat) => {
              const isSelected = strat.id === selectedStratId;
              return (
                <button
                  key={strat.id}
                  onClick={() => setSelectedStratId(strat.id)}
                  className={`w-full text-left p-4 rounded border transition cursor-pointer select-none flex flex-col gap-1.5 ${isSelected ? 'bg-[#18181b] border-zinc-700 text-white shadow-sm' : 'bg-zinc-950/80 border border-zinc-900 hover:bg-zinc-900 hover:border-zinc-800 text-zinc-400'}`}
                  id={`btn-playbook-${strat.id}`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-serif italic text-sm font-medium">
                      {strat.name}
                    </span>
                    {strat.isWonMetric && (
                      <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-[8px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-widest leading-none">
                        Best reach
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-1 font-light">
                    {strat.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Visualizer metrics */}
        <div className="lg:col-span-7 bg-zinc-950 p-6 rounded border border-zinc-900 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-zinc-400 animate-pulse" />
                <h4 className="font-serif italic text-sm text-zinc-200">Campaign Strategy Active Metrics</h4>
              </div>
              <span className="text-[9px] bg-zinc-900 border border-zinc-850 font-mono text-zinc-500 px-2.5 py-0.5 rounded tracking-wide font-semibold">
                Live Calculator
              </span>
            </div>

            {/* Metric widgets block */}
            <div className="grid grid-cols-2 gap-4">
              {/* Reach widget */}
              <div className="bg-zinc-900 border border-zinc-900 p-4 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.2em] font-semibold">Estimated Reach</p>
                  <h5 className="text-2xl font-semibold font-mono mt-1 text-white">
                    {activeStrat.reach.toLocaleString()}
                  </h5>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden mt-3.5">
                  <div 
                    className="bg-zinc-300 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(activeStrat.reach / 25000) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Engagement rate */}
              <div className="bg-zinc-900 border border-zinc-900 p-4 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.2em] font-semibold">Engagement Rate</p>
                  <h5 className="text-2xl font-semibold font-mono mt-1 text-zinc-200">
                    {activeStrat.engagement}%
                  </h5>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden mt-3.5">
                  <div 
                    className="bg-zinc-400 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(activeStrat.engagement / 25) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Reels video views */}
              <div className="bg-zinc-900 border border-zinc-900 p-4 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.2em] font-semibold">Campaign Video Views</p>
                  <h5 className="text-2xl font-semibold font-mono mt-1 text-white">
                    {activeStrat.reelsViews > 0 ? activeStrat.reelsViews.toLocaleString() : 'N/A'}
                  </h5>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden mt-3.5">
                  <div 
                    className="bg-zinc-300 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(activeStrat.reelsViews / 50000) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Conversion rate */}
              <div className="bg-zinc-900 border border-zinc-900 p-4 rounded flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-[0.2em] font-semibold">Lead Conversion</p>
                  <h5 className="text-2xl font-semibold font-mono mt-1 text-zinc-200 font-mono">
                    {activeStrat.conversionRate}%
                  </h5>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden mt-3.5">
                  <div 
                    className="bg-zinc-400 h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(activeStrat.conversionRate / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Playbook writeup */}
            <div className="p-4 bg-zinc-900 border border-zinc-900 rounded">
              <h6 className="text-[10px] font-bold text-zinc-305 uppercase tracking-[0.2em] font-mono flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-zinc-400" />
                Strategic Action Summary
              </h6>
              <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed font-light">
                {activeStrat.description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-350 rounded">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div className="text-[11px] text-zinc-450 leading-relaxed font-light font-sans">
                <strong className="text-zinc-200">Key takeaway:</strong> Integrating dynamic content platforms (Reels Views coupled with Story Countdown Quizzes) created a robust lead funnel, establishing a <strong className="text-zinc-250 font-semibold">3rd place victory</strong> out of diverse competitive university brands.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
