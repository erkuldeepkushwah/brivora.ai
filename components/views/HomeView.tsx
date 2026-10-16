'use client';

import React from 'react';
import { ArrowRight, Code, Server, ShieldCheck, Check } from 'lucide-react';
import { SHOWCASE_PROJECTS, TESTIMONIALS, ProjectShowcase } from '@/data/content';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onSelectProject?: (project: ProjectShowcase) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
}) => {
  return (
    <div className="w-full">
      {/* BEGIN: HeroSection */}
      <section className="hero-wave-bg relative text-white pt-16 pb-36 overflow-hidden">
        {/* Fluid Decorative Background Shapes */}
        <div className="absolute -left-32 top-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] tracking-tight">
              Next-Gen Enterprise AI &amp; Managed IT Services
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Custom Generative AI models, resilient multi-cloud architecture, DevOps, and 24/7 managed IT operations engineered for scalable modern enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                Explore Solutions
              </button>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composite Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Card 1: Senior Systems Engineer */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-slate-900 group">
                  <img
                    alt="AI Engineering Team"
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://brivora.pages.dev/team-1.jpg"
                  />
                </div>
                {/* Card 2: Modern Hardware & Infrastructure */}
                <div className="overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-slate-900 group">
                  <img
                    alt="Cloud Architect"
                    className="w-full h-44 object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://brivora.pages.dev/team-2.jpg"
                  />
                </div>
              </div>

              {/* Card 3 & 4 (Offset Column) */}
              <div className="space-y-4 pt-6">
                <div className="overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-slate-900 group">
                  <img
                    alt="DevOps Operations Screen"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://brivora.pages.dev/team-3.jpg"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-slate-900 group">
                  <img
                    alt="Team Coding Solutions"
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
                    src="https://brivora.pages.dev/team-4.jpg"
                  />
                </div>
              </div>

              {/* Floating Micro Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-slate-100">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                <div className="text-xs font-semibold">99.99% Cloud SLA Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-12 text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: ServicesSection */}
      <section className="py-24 bg-white relative" id="services">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Section Tag & Title */}
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            Our Expertise &amp; Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-2xl mx-auto leading-tight">
            A full range of modern AI &amp; creative IT services for your enterprise
          </h2>

          {/* 3 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {/* Service Item 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Code className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Engineering &amp; LLM Solutions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  End-to-end custom agentic workflows, fine-tuned LLMs, predictive machine learning, and automated data intelligence pipelines tailored for scale.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold group/link cursor-pointer"
              >
                <span>Explore AI services</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Service Item 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Server className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Cloud Architecture &amp; DevOps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  Automated Kubernetes orchestration, multi-cloud migrations (AWS, Azure, GCP), CI/CD pipelines, and zero-downtime infrastructure operations.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold group/link cursor-pointer"
              >
                <span>Discover cloud solutions</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Service Item 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Managed IT &amp; Enterprise Security
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  24/7 infrastructure monitoring, SOC-2 compliance, zero-trust network perimeter defense, and dedicated incident mitigation engineering support.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold group/link cursor-pointer"
              >
                <span>Managed IT support</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: ServicesSection */}

      {/* BEGIN: WhoWeAreSection */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="about">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-xl mx-auto">
              A team of specialists, passionate about new technologies &amp; progress
            </h2>
          </div>

          {/* Two-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white">
                <img
                  alt="Engineering Team Collab"
                  className="w-full h-[380px] object-cover"
                  src="https://brivora.pages.dev/team-5.jpg"
                />
              </div>
            </div>

            {/* Copy & Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base">
                We provide comprehensive enterprise IT and custom AI engineering architectures that streamline processes, fortify security, and supercharge workplace productivity. From automated multi-agent loops to global cloud networking, we architect resilient digital pipelines.
              </p>

              <ul className="space-y-3 font-semibold text-slate-800 text-sm">
                <li className="flex items-center space-x-3 text-slate-700">
                  <span className="text-blue-600 font-bold">✔</span>
                  <span>99.9% Infrastructure Uptime SLA</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-700">
                  <span className="text-blue-600 font-bold">✔</span>
                  <span>150+ Enterprise AI &amp; Cloud Deployments</span>
                </li>
                <li className="flex items-center space-x-3 text-slate-700">
                  <span className="text-blue-600 font-bold">✔</span>
                  <span>Zero-Trust Security &amp; SOC-2 Compliance Certified</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  Learn more about our methodology <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials / Quote Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            {TESTIMONIALS.map((t, index) => (
              <div key={index} className="text-center px-4">
                <img
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover ring-4 ring-white shadow-md mb-4"
                  src={t.image}
                />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                  {t.quote}
                </p>
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: WhoWeAreSection */}

      {/* BEGIN: MetricsSection */}
      <section className="py-24 bg-white text-center" id="metrics">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-xl mx-auto mb-16">
            Modern approach &amp; sustainable results
          </h2>

          {/* 3 Metrics Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* Metric 1 */}
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-blue-600 flex items-baseline">
                <span className="text-lg font-bold text-blue-400 mr-2 tracking-normal">est.</span>2018
              </div>
              <h3 className="text-lg font-bold text-slate-900">6+ Years of Innovation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pioneering reliable AI and cloud automation since 2018, delivering high-performance software systems tailored for enterprise resilience.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-blue-600">
                150<span className="text-cyan-400">+</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Completed Projects</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over 150 successful enterprise deployments spanning multinational banks, e-commerce giants, healthcare networks, and scale-up unicorns.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-3">
              <div className="text-4xl font-extrabold text-blue-600">
                99.9<span className="text-cyan-400">%</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Satisfied Enterprise Customers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Industry-leading SLA commitments and client retention rates sustained through proactive engineering and 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: MetricsSection */}

      {/* BEGIN: ShowcaseSection */}
      <section className="py-24 bg-slate-50 border-t border-slate-100" id="showcase">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 block mb-2">
              Showcase
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Check out our latest projects
            </h2>
          </div>

          {/* 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHOWCASE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative overflow-hidden h-52">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                      src={project.image}
                    />
                    <span
                      className={`absolute top-4 right-4 ${project.categoryColor} text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-xs`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-50 mt-2">
                  <span className="text-[11px] font-medium text-slate-400">
                    {project.metrics}
                  </span>
                  <button
                    onClick={() => {
                      if (onSelectProject) {
                        onSelectProject(project);
                      } else {
                        onNavigate('portfolio');
                      }
                    }}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <span>View case</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: ShowcaseSection */}

      {/* BEGIN: PreFooterCTA */}
      <section className="cta-wave-bg relative py-20 text-white overflow-hidden text-center">
        {/* Subtle Ambient Circles */}
        <div className="absolute -top-12 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
            Join hundreds of business owners &amp; companies who trust Brivora.ai!
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-lg transition-transform active:scale-95 duration-200 cursor-pointer"
            >
              Contact us online
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 cursor-pointer"
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
