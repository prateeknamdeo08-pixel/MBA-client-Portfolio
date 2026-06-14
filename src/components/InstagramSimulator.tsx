/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Grid, Film, User, Compass, Flame, TrendingUp, Users } from 'lucide-react';

interface Post {
  id: string;
  image: string;
  likes: number;
  commentsCount: number;
  caption: string;
  tags: string[];
  comments: { user: string; text: string }[];
  isLiked: boolean;
}

export default function InstagramSimulator() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 'post-1',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=600&auto=format&fit=crop',
      likes: 184,
      commentsCount: 22,
      caption: 'Introducing our Velvet Bow Series 🎀 Double-layered, ultra-soft velvet bows that hold perfectly. Elevate your everyday look with the perfect pastel hair accessories!',
      tags: ['#hairtalesofficial', '#velvetbows', '#handmade', '#hairaccessories'],
      comments: [
        { user: 'ria_sharma', text: 'Stunning ribbons! Just ordered the lavender one!' },
        { user: 'creative_styling', text: 'The texture looks so rich! Perfect photography.' }
      ],
      isLiked: false
    },
    {
      id: 'post-2',
      image: 'https://images.unsplash.com/photo-1590156221122-c44ab6b0a09b?q=80&w=600&auto=format&fit=crop',
      likes: 247,
      commentsCount: 31,
      caption: 'Organizing your styling collection has never been prettier ✨ Pearl-encrusted claw clips that match with every outfit. Gentle on hair, strong on hold!',
      tags: ['#pearlclips', '#hairtalesofficial', '#clawclips', '#aestheticfeed'],
      comments: [
        { user: 'priya.g', text: 'Are these in stock right now? OMG!' },
        { user: 'diya_support', text: 'Yes! Link in bio to purchase! ✨' }
      ],
      isLiked: false
    },
    {
      id: 'post-3',
      image: 'https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=600&auto=format&fit=crop',
      likes: 312,
      commentsCount: 45,
      caption: 'Unboxing aesthetic happiness! Packages are on their way 🌸 Hand-tied satin ribbons ready to add that magical vintage touch to your hair styles.',
      tags: ['#vintageaesthetic', '#unboxing', '#hairfashion', '#aestheticvibes'],
      comments: [
        { user: 'marketing_girl', text: 'The branding, thank you cards, and aesthetic packaging are top tier!' },
        { user: 'sneha_10', text: 'Literally the cutest bows ever.' }
      ],
      isLiked: false
    }
  ]);

  const [activeTab, setActiveTab] = useState<'posts' | 'reels'>('posts');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
    // If the liked post is currently selected, update its state too
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(prev => prev ? {
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked
      } : null);
    }
  };

  const handleAddComment = (id: string) => {
    if (!newComment.trim()) return;
    setPosts(posts.map(post => {
      if (post.id === id) {
        const updatedComments = [...post.comments, { user: 'visitor_recruit', text: newComment }];
        return {
          ...post,
          comments: updatedComments,
          commentsCount: post.commentsCount + 1
        };
      }
      return post;
    }));
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(prev => prev ? {
        ...prev,
        comments: [...prev.comments, { user: 'visitor_recruit', text: newComment }],
        commentsCount: prev.commentsCount + 1
      } : null);
    }
    setNewComment('');
  };

  return (
    <div className="bg-[#0b0b0d] text-zinc-100 rounded p-6 md:p-8 shadow-sm border border-zinc-900/60">
      {/* Simulation Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-900 pb-5 mb-6 gap-4">
        <div>
          <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-850 px-3 py-1 rounded-sm uppercase tracking-[0.2em] font-semibold">
            Live Campaign Simulator
          </span>
          <h3 className="text-xl md:text-2xl font-serif italic text-white mt-3">
            Instagram Feed Showcase
          </h3>
          <p className="text-sm text-zinc-400 mt-1 font-light">
            Demo layout crafted for assigning & testing digital marketing strategy.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-zinc-950 p-2 rounded border border-zinc-900">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-zinc-300 font-mono">
            <Users className="w-4 h-4 text-zinc-500" />
            <span className="font-bold text-white">1,420+</span> <span className="text-zinc-500">Followers</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-zinc-300 font-mono">
            <TrendingUp className="w-4 h-4 text-zinc-400" />
            <span className="font-bold text-white">8.4%</span> <span className="text-zinc-500">Eng. Rate</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Instagram Mobile Shell Container */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full max-w-[370px] aspect-[9/19] bg-black rounded border border-zinc-800 p-4 shadow-2xl flex flex-col relative overflow-hidden">
            {/* Phone notch */}
            <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
              <div className="w-28 h-3.5 bg-zinc-800 rounded-b-md"></div>
            </div>

            {/* Instagram Bar */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mt-4 text-zinc-100">
              <span className="font-serif italic font-semibold text-sm text-zinc-200 tracking-wide">
                hairtalesofficial
              </span>
              <div className="flex gap-3 text-zinc-400">
                <Compass className="w-4 h-4 cursor-pointer hover:text-white transition" />
                <Flame className="w-4 h-4 cursor-pointer hover:text-white transition" />
              </div>
            </div>

            {/* Feed Scroll area */}
            <div className="flex-1 overflow-y-auto no-scrollbar py-2 space-y-4">
              {/* Profile card on mock feed */}
              <div className="flex items-center justify-between bg-zinc-950 p-2.5 rounded border border-zinc-900">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full p-[1px] bg-zinc-800 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center font-serif italic text-xs text-white">
                      HT
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-zinc-200">hairtalesofficial</h4>
                    <p className="text-[9px] text-zinc-500">Hair clips, bows & beauty 🌸</p>
                  </div>
                </div>
                <button className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-semibold text-[9px] px-2.5 py-1 rounded transition select-none cursor-pointer">
                  Following
                </button>
              </div>

              {/* Toggle Feed Style Tabs */}
              <div className="flex border-b border-zinc-900">
                <button 
                  onClick={() => setActiveTab('posts')}
                  className={`flex-1 flex justify-center items-center py-2 border-b cursor-pointer transition ${activeTab === 'posts' ? 'border-zinc-300 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveTab('reels')}
                  className={`flex-1 flex justify-center items-center py-2 border-b cursor-pointer transition ${activeTab === 'reels' ? 'border-zinc-300 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
                >
                  <Film className="w-4 h-4" />
                </button>
              </div>

              {activeTab === 'posts' ? (
                /* Grid of simulated posts */
                <div className="grid grid-cols-3 gap-1.5">
                  {posts.map(post => (
                    <div 
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="aspect-square relative rounded overflow-hidden group cursor-pointer border border-zinc-900"
                    >
                      <img 
                        src={post.image} 
                        alt={post.caption} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                      {/* Grid Hover stats overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2.5 text-[10px] font-bold text-white">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3 fill-current text-white" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 fill-current text-white" />
                          {post.commentsCount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Simulated Reels View */
                <div className="space-y-4">
                  <div className="aspect-[9/16] bg-zinc-900 rounded relative overflow-hidden flex items-center justify-center border border-zinc-800">
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" 
                      alt="Reel placeholder bg" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div className="z-10 text-center p-4">
                      <Film className="w-8 h-8 text-zinc-300 mx-auto animate-pulse" />
                      <p className="text-xs font-serif italic mt-2.5 text-white">Aesthetic Bow Box Reel</p>
                      <p className="text-[10px] text-zinc-500 mt-1">Managed reel strategy yielding 14,230 views</p>
                      <button className="mt-4 text-[9px] font-bold bg-white text-black px-4 py-2 rounded-sm cursor-pointer hover:bg-zinc-200 transition uppercase tracking-widest">
                        Launch View
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Base toolbar */}
            <div className="flex justify-between items-center border-t border-zinc-900 pt-2 text-zinc-650">
              <Grid className="w-4 h-4 text-zinc-300" />
              <Film className="w-4 h-4 hover:text-white transition" />
              <User className="w-4 h-4 hover:text-white transition" />
            </div>
          </div>
        </div>

        {/* Post Inspector / Strategy Insights */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 p-5 rounded border border-zinc-900">
          {selectedPost ? (
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
                  <h4 className="font-serif italic text-sm flex items-center gap-1.5 text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                    Post Inspector
                  </h4>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-[10px] text-zinc-500 uppercase tracking-wider hover:text-white underline cursor-pointer"
                  >
                    Clear view
                  </button>
                </div>

                <div className="mt-3 flex gap-3">
                  <div className="w-16 h-16 rounded overflow-hidden border border-zinc-900 flex-shrink-0">
                    <img 
                      src={selectedPost.image} 
                      alt="Mini preview" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-300 font-sans line-clamp-3 font-light leading-relaxed">
                      {selectedPost.caption}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {selectedPost.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[9px] text-zinc-400 font-mono bg-zinc-900 border border-zinc-850 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated Like & Interactive buttons */}
                <div className="flex gap-4 border-y border-zinc-900 py-2.5 mt-4">
                  <button 
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition cursor-pointer font-medium"
                  >
                    <Heart className={`w-4 h-4 ${selectedPost.isLiked ? 'fill-white text-white' : 'text-zinc-500'}`} />
                    <span>{selectedPost.likes} Likes</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                    <MessageCircle className="w-4 h-4 text-zinc-500" />
                    <span>{selectedPost.comments.length} Comments</span>
                  </div>
                </div>

                {/* Submissions of comments list */}
                <div className="mt-4 space-y-2.5 max-h-[160px] overflow-y-auto pr-1 no-scrollbar">
                  <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-mono font-bold">Feed Comments</p>
                  {selectedPost.comments.map((c, i) => (
                    <div key={i} className="text-xs bg-zinc-900/40 p-2.5 rounded border border-zinc-900">
                      <span className="font-semibold text-zinc-200">@{c.user}</span>: <span className="text-zinc-400 font-light">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add a comment */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Write a test comment..." 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddComment(selectedPost.id);
                    }}
                    className="flex-1 bg-zinc-900 border border-zinc-850 rounded-sm px-3 py-2 text-xs focus:outline-none focus:border-zinc-500 text-white font-light"
                    id={`input-insta-${selectedPost.id}`}
                  />
                  <button 
                    onClick={() => handleAddComment(selectedPost.id)}
                    className="p-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded border border-zinc-700 transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-zinc-550 mt-1.5 italic text-center font-light">
                  Your comment will simulate a real feed reply in local state!
                </p>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 border border-dashed border-zinc-900 rounded">
              <Grid className="w-8 h-8 text-zinc-600 mb-3" />
              <h5 className="font-serif italic text-sm text-zinc-300">Select an Instagram Post</h5>
              <p className="text-xs text-zinc-555 max-w-[240px] mt-1.5 leading-relaxed font-light">
                Click on any of the posts in the Instagram grid on the left to inspect detailed comments, simulated likes, and digital marketing strategy.
              </p>
            </div>
          )}

          {/* Fixed bottom Digital Marketing Strategy box */}
          <div className="mt-6 pt-4 border-t border-zinc-900 text-xs">
            <h5 className="font-mono font-bold text-zinc-400 uppercase tracking-widest text-[9px] mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-zinc-405 rounded-full"></span>
              Applied Marketing Tactics
            </h5>
            <ul className="space-y-2 text-zinc-400 text-[11px] font-light">
              <li className="flex gap-1.5">
                <span className="text-zinc-500">•</span>
                <span><strong className="text-zinc-200">Aesthetic branding</strong> matching soft pastel accessories & visual story guidelines.</span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-zinc-500">•</span>
                <span><strong className="text-zinc-200">SEO Keyword Research</strong> for localized tags, reels content & product categorization.</span>
              </li>
              <li className="flex gap-1.5">
                <span className="text-zinc-500">•</span>
                <span><strong className="text-zinc-200">Organic micro-influencer</strong> outreach to showcase hair-bands and claw clips.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
