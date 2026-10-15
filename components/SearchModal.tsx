'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Layers, Briefcase, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, SHOWCASE_PROJECTS, BlogPost, ProjectShowcase } from '@/data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (post: BlogPost) => void;
  onSelectProject: (project: ProjectShowcase) => void;
  onNavigate: (page: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onSelectProject,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  const services = [
    { title: 'Enterprise AI & Machine Learning', page: 'services' },
    { title: 'Cloud Architecture & DevOps', page: 'services' },
    { title: 'Managed IT & Cybersecurity', page: 'services' },
    { title: 'Custom Software Engineering', page: 'services' },
    { title: 'Multi-Cloud Kubernetes Migration', page: 'services' },
  ];

  const trimmed = query.trim().toLowerCase();

  const filteredBlogPosts = trimmed
    ? BLOG_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.summary.toLowerCase().includes(trimmed)
      )
    : [];

  const filteredProjects = trimmed
    ? SHOWCASE_PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      )
    : [];

  const filteredServices = trimmed
    ? services.filter((s) => s.title.toLowerCase().includes(trimmed))
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI research, cloud architecture, services, case studies..."
            className="w-full text-sm outline-none text-slate-900 placeholder:text-slate-400 bg-transparent font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!query.trim() ? (
            <div className="text-center py-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['RAG Architecture', 'Kubernetes Multi-Cloud', 'SOC-2 Compliance', 'Autonomous Agents', 'Predictive Analytics'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#0055ff] text-xs text-slate-600 font-medium transition cursor-pointer"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {/* Blog Posts */}
              {filteredBlogPosts.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#0055ff]" />
                    <span>Articles & Insights ({filteredBlogPosts.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredBlogPosts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => {
                          onSelectArticle(post);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[#0055ff]">
                            {post.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {post.category} · {post.date}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0055ff] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Showcase Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Case Studies ({filteredProjects.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredProjects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectProject(p);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                            {p.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {p.category} · {p.metrics}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {filteredServices.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Services ({filteredServices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredServices.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigate(s.page);
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition flex items-center justify-between group cursor-pointer"
                      >
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#0055ff]">
                          {s.title}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0055ff] transition" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredBlogPosts.length === 0 &&
                filteredProjects.length === 0 &&
                filteredServices.length === 0 && (
                  <div className="text-center py-10 text-slate-400 text-sm">
                    No results found for &ldquo;{query}&rdquo;. Try searching for &ldquo;AI&rdquo;, &ldquo;Cloud&rdquo;, or &ldquo;Kubernetes&rdquo;.
                  </div>
                )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search Brivora Knowledge Base</span>
          <span>Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
};
