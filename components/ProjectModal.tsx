'use client';

import React from 'react';
import { X, CheckCircle, ShieldCheck, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectShowcase } from '@/data/content';

interface ProjectModalProps {
  project: ProjectShowcase | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase ${project.categoryColor}`}>
              {project.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-semibold">{project.metrics}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {project.title}
          </h1>

          <div className="rounded-xl overflow-hidden aspect-[16/9] shadow-md bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Challenge &amp; Architecture
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {project.description} The client required a zero-downtime, fault-tolerant infrastructure capable of handling tens of millions of concurrent events while complying with strict SOC-2 Type II standards and data sovereignty mandates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                Verified Outcomes
              </span>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{project.metrics}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Zero unplanned downtime throughout deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Full automated CI/CD pipeline verification</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold rounded-md shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-6 py-2 rounded-full bg-[#0066f5] hover:bg-[#0052cc] text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>Request Similar Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
