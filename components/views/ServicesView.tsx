'use client';

import React from 'react';
import {
  Brain,
  Cloud,
  Shield,
  Layers,
  Code2,
  Server,
  Network,
  Cpu,
  FileCheck2,
  Check,
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="w-full bg-white font-sans">
      {/* BEGIN: HeroBanner */}
      <section className="relative w-full bg-wave-gradient py-28 text-center text-white overflow-hidden shadow-inner">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
            Next-generation enterprise intelligence, hyperscale cloud engineering, and resilient IT operations.
          </p>
        </div>

        {/* Background Wave Overlays */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
          <svg
            className="w-full h-full object-cover"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#ffffff"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </section>
      {/* END: HeroBanner */}

      {/* BEGIN: MainServiceShowcase */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 space-y-24">
        {/* Showcase Row 1: Enterprise AI & Machine Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Container with UI Mockup Graphic Overlay */}
          <div className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-slate-50 aspect-[16/11]">
              <img
                alt="Developer working on Enterprise AI solutions"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiuW3lums_1C2pZ1Om2y497cGeOKXJiKsCi0Oi9XFJ9o6nJ2aN5w1PPh5JZ4chH-AIgOqAP7qe3Y2aK22lr5pxXvNsHC7iEh0HmgrMp2Sc4haHk2sR0XC6fU_EZuIXJ_qWiTKwZNe-tf3uwqFi404udmjhENo08wYk0T4tBGJK9TsPuvgBibmQYj53H7oEf4DFblmuxMfSbzQVd0-sfPdeKG86c-sWz3KVnc8PiEdVS1r2Xe5AUiiTXw"
              />
              {/* Code / UI Card Graphic Overlay */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-3.5 rounded-lg border border-white/80 shadow-md max-w-[200px] space-y-2 pointer-events-none">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded w-4/5"></div>
                <div className="h-1.5 bg-sky-200 rounded w-full"></div>
                <div className="h-1.5 bg-slate-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066f5] text-xs font-bold uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5" />
              <span>Core Specialization</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Enterprise AI &amp; Machine Learning
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Tailored LLM fine-tuning, RAG pipelines, predictive analytics, and automated multi-agent workflow systems built for enterprise scale and maximum operational efficiency.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Custom LLM &amp; Generative AI Models</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Autonomous Agentic Workflows</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Predictive Analytics &amp; ML Ops</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Enterprise Data Intelligence</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 rounded-full bg-[#0066f5] text-white text-xs font-bold hover:bg-[#0052cc] transition shadow-sm cursor-pointer"
              >
                Discuss AI Architecture
              </button>
            </div>
          </div>
        </div>

        {/* Showcase Row 2: Cloud Architecture & DevOps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Container */}
          <div className="lg:col-span-6 relative group order-last lg:order-first">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-slate-50 aspect-[16/11]">
              <img
                alt="Engineering team collaborating on Cloud Architecture & DevOps"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmdgVHPnEGt9AL2cYoVTftSLvF_CoS2jfNHbBzQcRC0LchpQ7lRdvYMTq3yuV6-b54zdbl6g1ZmtdyEXRE4TQ4Q6EjPKQNuRFADGXWFSkcU5N_klcNRDpRGZY95KWP-RCdTeTZybkJ-p3auWi6SCbuFbLj3fT1X4_Taz6romGwEbir3KYcNsFbo6SRJETNmXOGkjM-u3lOO76Cb0CYSVlJl3bO5_KnWmUP9ICZtFFDmsJCHCDMukNIFg"
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066f5] text-xs font-bold uppercase tracking-wider">
              <Cloud className="w-3.5 h-3.5" />
              <span>Infrastructure Scale</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Cloud Architecture &amp; DevOps
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              End-to-end multi-cloud infrastructure orchestration, containerized Kubernetes deployments, and automated zero-downtime CI/CD pipelines engineered to scale your systems effortlessly.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Multi-Cloud (AWS, Azure, GCP) Architecture</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Kubernetes &amp; Microservices Orchestration</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Zero-Downtime CI/CD Pipelines</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Infrastructure as Code (Terraform)</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 rounded-full bg-[#0066f5] text-white text-xs font-bold hover:bg-[#0052cc] transition shadow-sm cursor-pointer"
              >
                Plan Cloud Migration
              </button>
            </div>
          </div>
        </div>

        {/* Showcase Row 3: Managed IT & Cybersecurity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Container with Speech / Support Overlays */}
          <div className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-slate-50 aspect-[16/11]">
              <img
                alt="Cybersecurity and IT consultant on a support call"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhFFxEKmjX-fBMXkpptlyDolh0W2LO_IlpSSKsi9CqqyQR2mDnNDEznR3ctDuyR1y3-HVdH3nKny0Mj02srm7rgzZuhjlP18ws76Ss1z9QCszxOQOvclA5HCMlNvvwLnW-705t0LpDmL7Y4iFYqDacr_A74sJ0sm6uJcg9o8w7PHFgKhp13lPwibDkMsTkcoubJfxaMKb4yEc9s2w3Frie1sEYQKCJOVghcPyEFLBs5MkogHNWtA7bxw"
              />
              {/* Visual Tech Speech Bubble Overlays */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/70 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Threat Neutralized: 100%</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/70 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0052cc]"></span>
                <span>24/7 SOC Online</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066f5] text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Zero-Trust Perimeter</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Managed IT &amp; Cybersecurity
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Proactive 24/7 IT system monitoring, SOC-2 compliant zero-trust architectures, and dedicated enterprise technical support designed to secure and empower your digital perimeter.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>24/7 Managed NOC &amp; SOC Monitoring</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Zero-Trust Network Defense</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Compliance &amp; Disaster Recovery</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="text-[#0052cc] font-bold">✓</span>
                <span>Cloud Cost Optimization</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-2.5 rounded-full bg-[#0066f5] text-white text-xs font-bold hover:bg-[#0052cc] transition shadow-sm cursor-pointer"
              >
                Inquire Managed Security
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: MainServiceShowcase */}

      {/* BEGIN: ExtendedServicesGrid */}
      <section className="max-w-[1200px] mx-auto px-6 pt-10 pb-28">
        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            And even more...
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Complementary engineering disciplines that round out your complete digital transformation.
          </p>
        </div>

        {/* 6-Grid Service Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {/* Service Card 1 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <Layers className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Project Management &amp; Advisory
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Agile delivery pipelines, solution scoping, and strategic technical governance for complex multi-disciplinary software roadmaps.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <Code2 className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Custom Software Engineering
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                High-concurrency cloud backend architectures, bespoke enterprise web portals, and microservices crafted with precision.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <Server className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Enterprise Cloud Hosting
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Resilient bare-metal setups, fault-tolerant edge server clusters, and hyperscale environments guaranteeing 99.99% uptime SLAs.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <Shield className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Digital &amp; Network Security
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Multi-layered threat surface defense, DDoS prevention, advanced penetration testing, and zero-trust identity authentication.
              </p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <Network className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Multi-Cloud Services
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Unified cross-cloud data migrations, hybrid connectivity pipelines, and synchronized multi-region redundancy deployments.
              </p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="tech-grid-card flex items-start gap-4">
            <div className="text-[#0052cc] flex-shrink-0 mt-0.5">
              <FileCheck2 className="w-8 h-8 stroke-[1.6]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-[16px] mb-2">
                Infrastructure &amp; Code Audit
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Comprehensive security posture reviews, bottleneck discovery, code health benchmarking, and cloud spend optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: ExtendedServicesGrid */}

      {/* BEGIN: PreFooterCTA */}
      <section className="w-full bg-wave-gradient py-24 text-center text-white relative overflow-hidden">
        {/* Background Wave Glow Element */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00D2D3]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-9">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
            Join hundreds of enterprises accelerating<br className="hidden sm:inline" /> their future with Brivora.ai!
          </h2>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-slate-900 bg-[#00D2D3] hover:bg-[#02e3e4] hover:shadow-lg transition-all duration-200 text-sm cursor-pointer"
            >
              Contact us online
            </button>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-blue-700/60 border border-white/20 hover:bg-blue-700/80 hover:border-white/40 transition-all duration-200 text-sm cursor-pointer"
            >
              Request a call back
            </button>
          </div>
        </div>
      </section>
      {/* END: PreFooterCTA */}
    </div>
  );
};
