'use client';

import React from 'react';
import { ArrowRight, Code, Server, ShieldCheck, Check } from 'lucide-react';
import { SHOWCASE_PROJECTS, TESTIMONIALS, ProjectShowcase } from '@/data/content';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
  onSelectProject?: (project: ProjectShowcase) => void;
}

/* Core service pillars — content preserved from the existing site. */
const SERVICES = [
  {
    icon: Code,
    title: 'AI Engineering & LLM Solutions',
    description:
      'End-to-end custom agentic workflows, fine-tuned LLMs, predictive machine learning, and automated data intelligence pipelines tailored for scale.',
    linkLabel: 'Explore AI services',
  },
  {
    icon: Server,
    title: 'Cloud Architecture & DevOps',
    description:
      'Automated Kubernetes orchestration, multi-cloud migrations (AWS, Azure, GCP), CI/CD pipelines, and zero-downtime infrastructure operations.',
    linkLabel: 'Discover cloud solutions',
  },
  {
    icon: ShieldCheck,
    title: 'Managed IT & Enterprise Security',
    description:
      '24/7 infrastructure monitoring, SOC-2 compliance, zero-trust network perimeter defense, and dedicated incident mitigation engineering support.',
    linkLabel: 'Managed IT support',
  },
];

/* Benefit checklist — content preserved from the existing site. */
const BENEFITS = [
  '99.9% Infrastructure Uptime SLA',
  '150+ Enterprise AI & Cloud Deployments',
  'Zero-Trust Security & SOC-2 Compliance Certified',
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
}) => {
  return (
    <div className="w-full">
      {/* BEGIN: HeroSection */}
      <section className="hero-wave-bg relative overflow-hidden text-white" aria-labelledby="hero-heading">
        {/* Subtle abstract shapes */}
        <div className="pointer-events-none absolute -left-32 -top-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[380px] w-[380px] rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-32 pt-16 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pb-36">
          {/* Copy + CTAs */}
          <div>
            <span className="mb-5 inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              Enterprise IT, AI &amp; Cloud
            </span>
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]"
            >
              Next-Gen Enterprise AI &amp; Managed IT Services
            </h1>
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Custom Generative AI models, resilient multi-cloud architecture, DevOps, and 24/7
              managed IT operations engineered for scalable modern enterprises.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold tracking-wide text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 cursor-pointer"
              >
                Explore Solutions
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Single hero visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <img
                src="https://brivora.pages.dev/team-1.jpg"
                alt="Brivora engineers collaborating on cloud and AI infrastructure in a modern IT workspace"
                width={720}
                height={460}
                fetchPriority="high"
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>

        {/* Organic wave divider */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-none">
          <svg
            className="relative block h-12 w-full text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            aria-hidden="true"
          >
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: ServicesSection */}
      <section id="services" className="bg-white py-24 sm:py-28" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066f5]">
              Our Expertise &amp; Services
            </span>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              A full range of modern AI &amp; creative IT services for your enterprise
            </h2>
          </div>

          {/* Minimal service columns */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {SERVICES.map(({ icon: Icon, title, description, linkLabel }) => (
              <div key={title} className="group">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#0066f5] transition-colors duration-300 group-hover:bg-[#0066f5] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
                  {description}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#0066f5] transition-colors hover:text-blue-800 focus:outline-none focus-visible:underline cursor-pointer"
                >
                  {linkLabel}
                  <ArrowRight
                    className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: ServicesSection */}

      {/* BEGIN: WhoWeAreSection */}
      <section id="about" className="border-y border-slate-100 bg-slate-50 py-24 sm:py-28" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066f5]">
              Who We Are
            </span>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              A team of specialists, passionate about new technologies &amp; progress
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl border border-white shadow-xl">
              <img
                src="https://brivora.pages.dev/team-2.jpg"
                alt="The Brivora IT team collaborating on enterprise AI and cloud projects"
                width={720}
                height={420}
                loading="lazy"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div>
              <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                We provide comprehensive enterprise IT and custom AI engineering architectures that
                streamline processes, fortify security, and supercharge workplace productivity. From
                automated multi-agent loops to global cloud networking, we architect resilient
                digital pipelines.
              </p>

              <ul className="mt-8 space-y-3.5">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-[#0066f5]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="mt-9 inline-flex items-center text-sm font-bold text-[#0066f5] transition-colors hover:text-blue-800 focus:outline-none focus-visible:underline cursor-pointer"
              >
                Learn more about our methodology
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: WhoWeAreSection */}

      {/* BEGIN: TestimonialsSection */}
      <section className="bg-white py-24 sm:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066f5]">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Trusted by enterprise teams worldwide
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure key={index} className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="mx-auto h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-white"
                />
                <blockquote className="mt-5 text-sm font-normal italic leading-relaxed text-slate-600">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4">
                  <div className="text-sm font-bold text-slate-900">{testimonial.name}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{testimonial.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      {/* END: TestimonialsSection */}

      {/* BEGIN: MetricsSection */}
      <section id="metrics" className="border-y border-slate-100 bg-slate-50 py-24 sm:py-28" aria-labelledby="metrics-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066f5]">
              Why Choose Us
            </span>
            <h2
              id="metrics-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Modern approach &amp; sustainable results
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            <div>
              <div className="flex items-baseline text-4xl font-extrabold text-[#0066f5] sm:text-5xl">
                <span className="mr-2 text-lg font-bold tracking-normal text-blue-400">est.</span>
                2018
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">6+ Years of Innovation</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
                Pioneering reliable AI and cloud automation since 2018, delivering high-performance
                software systems tailored for enterprise resilience.
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-[#0066f5] sm:text-5xl">
                150<span className="text-cyan-400">+</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Completed Projects</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
                Over 150 successful enterprise deployments spanning multinational banks, e-commerce
                giants, healthcare networks, and scale-up unicorns.
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-[#0066f5] sm:text-5xl">
                99.9<span className="text-cyan-400">%</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Satisfied Enterprise Customers</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-600">
                Industry-leading SLA commitments and client retention rates sustained through
                proactive engineering and 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: MetricsSection */}

      {/* BEGIN: ShowcaseSection */}
      <section id="showcase" className="bg-white py-24 sm:py-28" aria-labelledby="showcase-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066f5]">
              Showcase
            </span>
            <h2
              id="showcase-heading"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Check out our latest projects
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {SHOWCASE_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={480}
                    height={208}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute right-4 top-4 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${project.categoryColor}`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-[#0066f5]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-medium text-slate-400">{project.metrics}</span>
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectProject) {
                            onSelectProject(project);
                          } else {
                            onNavigate('portfolio');
                          }
                        }}
                        className="inline-flex items-center text-xs font-bold text-[#0066f5] transition-colors hover:text-blue-800 focus:outline-none focus-visible:underline cursor-pointer"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* END: ShowcaseSection */}

      {/* BEGIN: PreFooterCTA */}
      <section
        className="cta-wave-bg relative overflow-hidden py-20 text-center text-white sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="pointer-events-none absolute -top-12 left-1/4 h-72 w-72 rounded-full bg-blue-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 right-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h2
            id="cta-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Join hundreds of business owners &amp; companies who trust Brivora.ai!
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="rounded-full bg-cyan-400 px-8 py-3.5 text-sm font-bold tracking-wide text-slate-950 shadow-lg transition-transform duration-200 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              Request a Callback
            </button>
          </div>
        </div>
      </section>
      {/* END: PreFooterCTA */}
    </div>
  );
};
