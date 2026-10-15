'use client';

import React, { useState } from 'react';
import { SHOWCASE_PROJECTS, ProjectShowcase } from '@/data/content';
import { Check, ArrowRight, ExternalLink, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface PortfolioViewProps {
  onOpenConsultation: () => void;
  onSelectProject: (project: ProjectShowcase) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onOpenConsultation,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'AI & Agents', 'Cloud DevOps', 'Cyber Defense'];

  const filteredProjects = activeFilter === 'All'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="bg-wave-gradient py-24 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00d2ff] mb-2 block">
            Enterprise Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Case Studies &amp; Showcase
          </h1>
          <p className="mt-3 text-white/90 text-sm md:text-base max-w-xl mx-auto">
            Discover how Fortune 500 leaders and high-growth enterprises modernise legacy workflows using Brivora.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#0055ff] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative overflow-hidden h-60 bg-slate-900">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={project.image}
                  />
                  <span
                    className={`absolute top-4 right-4 ${project.categoryColor} text-[10px] font-bold px-3 py-1 rounded-md tracking-wider uppercase shadow-xs`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="p-3 bg-blue-50/70 rounded-xl mb-4 text-xs font-semibold text-blue-900 border border-blue-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#0055ff] text-slate-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Have a high-scale architecture project?</h3>
            <p className="text-sm text-slate-400">
              Our principal engineers will design a custom feasibility study and technical blueprint.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-full bg-[#00d2ff] hover:bg-[#00b5dc] text-slate-950 font-bold text-sm tracking-wide transition shadow-lg flex-shrink-0 cursor-pointer"
          >
            Request Technical Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
