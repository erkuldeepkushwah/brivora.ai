import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Sparkles, Cloud, ShieldAlert, BarChart3, Headphones } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '@/data/content';

interface AboutViewProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // We display 4 members at a time; carousel can shift
  const totalMembers = TEAM_MEMBERS.length;
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, totalMembers - itemsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleMembers = TEAM_MEMBERS.slice(carouselIndex, carouselIndex + itemsPerPage);
  // If wrapped around
  if (visibleMembers.length < itemsPerPage) {
    visibleMembers.push(...TEAM_MEMBERS.slice(0, itemsPerPage - visibleMembers.length));
  }

  return (
    <div className="w-full bg-white">
      {/* BEGIN: HeroBanner */}
      <section
        className="curved-banner-bg py-20 lg:py-24 relative flex items-center justify-center text-center text-white overflow-hidden"
        data-purpose="hero-section"
      >
        <div className="wave-blob-1"></div>
        <div className="wave-blob-2"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-normal">
            About Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/90 font-medium tracking-wide max-w-xl mx-auto">
            Pioneering Intelligent AI &amp; Next-Gen IT Services
          </p>
        </div>
      </section>
      {/* END: HeroBanner */}

      {/* BEGIN: CompanyOverviewAndStats */}
      <section className="py-24 bg-white" data-purpose="overview-and-stats">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Collage Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px]">
                {/* Main Office Team Photo */}
                <div className="relative z-0 shadow-lg rounded-sm overflow-hidden bg-gray-100">
                  <img
                    alt="Team collaboration over laptop"
                    className="w-full h-[360px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjLlNHkcCYYMlN6N3R3onmHGV5-1_Cxtwhj84uJ2YVuggQcndtf6BLpz3Po74kfCvEc8U52-DFPkrt3jErSd3_ATfLpi9MvnaOgJGVLThGfxOp1hMro9kBSPTiWHUmJeIXZ26lPrzZnpTf9vDlpfw120WjYZbAiIN5gWn4sCnTYvTzH-P6EmoBIxwbaePqT0HYSSOUn-CtzPBHvuY9tKHOeZyeCixfF-JeWvrWXzG"
                  />
                </div>
                {/* Floating Chat Bubble Accents */}
                <div className="absolute -top-4 right-10 bg-purple-200/90 w-16 h-7 rounded-2xl flex items-center justify-center shadow-sm z-10">
                  <span className="w-2 h-2 bg-purple-400 rounded-full inline-block"></span>
                </div>
                <div className="absolute top-6 right-3 bg-purple-400/90 w-20 h-7 rounded-2xl flex items-center justify-center shadow-sm z-10">
                  <span className="w-8 h-2 bg-white/70 rounded-full inline-block"></span>
                </div>
                {/* Inset Secondary Photo (Developer Desk Setup) */}
                <div className="absolute -bottom-10 -right-6 w-52 sm:w-56 shadow-2xl rounded-sm overflow-hidden border-4 border-white z-20">
                  <img
                    alt="Professional programmer at modern workspace"
                    className="w-full h-44 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbfIvPS9NMcMaBXZV3k2E4hr0sAJhQCxoTVZnlPPU5Wahl_Lri0CXgaSdvARg_P-l0o02BW6yHa8_qkaz8dmh65w_qEcTPKvUHXO2XzcUEQS63ZC-JklIESO15KgJBdx99ItTmUl77pqiSfG36ww69IH_S8K3yLPd7LC_VyM0g4A3Rq4UiVsH7-yDUOdnrryLEtfIaw-e16p7y8sr9h1XdVkoFSS1moDC8-eRI2Zz"
                  />
                </div>
              </div>
            </div>

            {/* Description and Metrics Column (7 cols) */}
            <div className="lg:col-span-7 lg:pl-6 pt-8 lg:pt-0">
              <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-snug">
                A team of engineers &amp; innovators shaping enterprise AI and digital infrastructure
              </h2>
              <p className="mt-5 text-[13px] leading-relaxed text-slate-500 font-normal">
                At Brivora, we architect autonomous AI agents, resilient cloud infrastructure, and enterprise-grade IT solutions. From custom Large Language Model integrations to proactive cyber defense and DevOps pipelines, our multidisciplinary team empowers global organizations to automate complex workflows and scale sustainably with confidence.
              </p>

              {/* Numerical Metrics */}
              <div className="mt-9 flex flex-wrap items-baseline gap-12 sm:gap-20">
                <div>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-xs font-bold text-[#0066f5] tracking-wide">est.</span>
                    <span className="text-4xl sm:text-[42px] font-extrabold text-[#0066f5] tracking-tight">2018</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 font-medium">Pioneering Tech Evolution</p>
                </div>
                <div>
                  <div className="flex items-start">
                    <span className="text-4xl sm:text-[42px] font-extrabold text-[#0066f5] tracking-tight leading-none">150</span>
                    <span className="text-xl font-bold text-[#0066f5] -top-1 relative">+</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 font-medium">AI &amp; IT Deployments</p>
                </div>
                <div>
                  <div className="flex items-start">
                    <span className="text-4xl sm:text-[42px] font-extrabold text-[#0066f5] tracking-tight leading-none">99.9</span>
                    <span className="text-xl font-bold text-[#0066f5] -top-1 relative">%</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 font-medium">Uptime &amp; Precision SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: CompanyOverviewAndStats */}

      {/* BEGIN: FeaturesAndValuesSection */}
      <section className="py-20 bg-white" data-purpose="features-grid">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-[28px] font-bold text-center text-slate-900 tracking-tight mb-16">
            Modern approach &amp; sustainable results
          </h2>

          {/* Feature Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <Users className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Top AI Specialists &amp; Architects</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  Senior AI researchers and infrastructure architects delivering tailored enterprise intelligence models with verified ROI.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <Sparkles className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Generative AI &amp; LLM Engineering</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  Custom fine-tuning, RAG frameworks, and autonomous multi-agent systems securely tailored to your private proprietary data.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <Cloud className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Cloud Infrastructure &amp; DevOps</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  High-availability multi-cloud architecture, automated Kubernetes orchestration, and rapid CI/CD deployment pipelines.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <ShieldAlert className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Enterprise Cybersecurity &amp; SLA</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  Zero-trust architecture, automated threat detection, continuous compliance, and ironclad 99.9% uptime SLA commitments.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <BarChart3 className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Predictive Analytics &amp; ML Ops</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  Real-time inference engines, automated model monitoring, and data pipelines transforming raw analytics into decisive action.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-[#0066f5] pt-0.5">
                <Headphones className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">24/7 Managed IT Support</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-500 font-normal">
                  Proactive system monitoring, rapid incident response, and continuous infrastructure maintenance by dedicated engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: FeaturesAndValuesSection */}

      {/* BEGIN: TeamCarouselSection */}
      <section className="py-24 bg-white" data-purpose="team-section">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-2xl sm:text-[28px] font-bold text-center text-slate-900 tracking-tight mb-14">
            Meet our passionate &amp; smart team
          </h2>

          {/* Team Members Carousel Container with Navigation Arrows */}
          <div className="relative flex items-center justify-between">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous member"
              className="p-2 text-slate-300 hover:text-slate-600 transition-colors focus:outline-none cursor-pointer"
              type="button"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* 4 Team Member Profiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 w-full px-2">
              {visibleMembers.map((member, index) => (
                <div key={`${member.name}-${index}`} className="flex flex-col items-center text-center group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 shadow-sm bg-slate-100 ring-4 ring-slate-50 group-hover:ring-blue-100 transition-all">
                    <img
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      src={member.image}
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-[11px] font-medium text-[#0066f5]">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next member"
              className="p-2 text-slate-300 hover:text-slate-600 transition-colors focus:outline-none cursor-pointer"
              type="button"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </section>
      {/* END: TeamCarouselSection */}

      {/* BEGIN: PreFooterCTA */}
      <section
        className="curved-banner-bg py-20 px-6 text-center text-white relative overflow-hidden"
        data-purpose="call-to-action"
      >
        <div className="wave-blob-1"></div>
        <div className="wave-blob-2"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-normal leading-tight">
            Join hundreds of enterprises accelerating their future<br className="hidden sm:inline" /> with Brivora AI &amp; IT Services!
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#00c9cc] text-slate-900 hover:bg-[#00b2b5] transition-colors shadow-sm cursor-pointer"
            >
              Schedule AI Consultation
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#004ec4] text-white hover:bg-[#0042a8] border border-blue-400/40 transition-colors cursor-pointer"
            >
              Explore IT Solutions
            </button>
          </div>
        </div>
      </section>
      {/* END: PreFooterCTA */}
    </div>
  );
};
