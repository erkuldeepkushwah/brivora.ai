import React from 'react';
import { X, Calendar, User, Clock, Share2, Bookmark, Check } from 'lucide-react';
import { BlogPost } from '@/data/content';

interface ArticleReaderModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0055ff] uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition text-xs flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
              <User className="w-4 h-4 text-[#0055ff]" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-md bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 font-medium leading-relaxed">
            <strong>Executive Summary:</strong> {article.summary}
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Key Architectural Takeaways
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"></span>
                <span>Decouple business data from model weights using encrypted vector indices.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"></span>
                <span>Enforce least-privilege RBAC filtering at retrieval time, not at generation time.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"></span>
                <span>Continuous observability tracks embedding drift and semantic degradation over time.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Brivora Systems Engineering Lab</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white text-xs font-bold transition cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
