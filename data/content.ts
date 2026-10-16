export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'ARTIFICIAL INTELLIGENCE' | 'CLOUD & DEVOPS' | 'CYBERSECURITY' | 'ENTERPRISE IT' | 'DATA SCIENCE' | 'MANAGED IT';
  date: string;
  image: string;
  aspect: 'aspect-[16/10]' | 'aspect-[4/5]' | 'aspect-[1/1]';
  summary: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  description: string;
  metrics: string;
  techStack: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jonathan Brown',
    role: 'Chief AI Architect',
    image: 'https://brivora.pages.dev/team-1.jpg',
    bio: 'Former DeepMind staff researcher specializing in multi-agent orchestration and private enterprise LLM alignment.'
  },
  {
    name: 'Jeremy Jefferson',
    role: 'Head of IT Infrastructure & Cloud',
    image: 'https://brivora.pages.dev/team-2.jpg',
    bio: '15+ years architecting hyperscale Kubernetes clusters and zero-downtime multi-cloud transitions.'
  },
  {
    name: 'Gregory Brown',
    role: 'VP of Cybersecurity & Operations',
    image: 'https://brivora.pages.dev/team-3.jpg',
    bio: 'Certified CISSP and zero-trust perimeter specialist leading enterprise threat intelligence and SOC-2 audits.'
  },
  {
    name: 'Jessica Sandstone',
    role: 'AI Product Delivery Lead',
    image: 'https://brivora.pages.dev/team-4.jpg',
    bio: 'Oversees agile AI solution lifecycles, ensuring seamless integration between R&D models and business operations.'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Principal ML Research Scientist',
    image: 'https://brivora.pages.dev/team-5.jpg',
    bio: 'Specialist in low-latency RAG architectures and distributed inference optimizations.'
  },
  {
    name: 'Marcus Vance',
    role: 'Director of DevOps & SRE',
    image: 'https://brivora.pages.dev/team-6.jpg',
    bio: 'Expert in multi-region failover, Terraform infrastructure-as-code, and 99.999% SLA deployments.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'enterprise-llm-rag',
    title: 'Optimizing Enterprise LLMs with Retrieval-Augmented Generation',
    category: 'ARTIFICIAL INTELLIGENCE',
    date: 'January 25, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtv8A7KYEnSaSF_RxfU0Ujy8-afBv0p4PdcUqDSTE5jAh2QTXFKURB6o3PE_jZ9qpBVacQU1I10peYrQYwT1B0wItfEkdjhThwe9-XmWVLoWHYzC-5LC66TgJwn48njN90MvY_bpEPM9DdG1BxCgFV3I9NPt4fM0fx3vWpQBtWAQcdVqLd0WsEnQvm_jo1h2EEiOss_HURDjV_LzNqXOaAyadd9-lpYyr3aIXAH5NHIpbMGXAho1yyhQ',
    aspect: 'aspect-[16/10]',
    readTime: '6 min read',
    author: 'Jonathan Brown',
    summary: 'How enterprises achieve 99.4% factual precision and strict confidentiality using hybrid vector embeddings and dynamic rerankers.',
    content: [
      'Enterprise adoption of generative AI frequently collides with three critical barriers: hallucination risk, compliance with data privacy standards, and stale foundational training datasets. Retrieval-Augmented Generation (RAG) resolves these fundamental shortcomings.',
      'By decoupling internal business facts from the model weights themselves, organizations can maintain absolute data provenance. Sensitive proprietary knowledge bases remain strictly confined to encrypted vector databases with role-based access controls.',
      'In our recent deployments across Tier-1 financial institutions, transitioning from standard cosine similarity searches to multi-stage dense-sparse retrieval coupled with reciprocal rank fusion (RRF) reduced query latency by 42% while elevating citation accuracy to over 99%.'
    ]
  },
  {
    id: 'autonomous-agents-workflow',
    title: 'Autonomous Agents in Modern Enterprise Workflow Automation',
    category: 'ARTIFICIAL INTELLIGENCE',
    date: 'January 9, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2F-NwVS6ZsoY9X4TmNbNCgNane1TAGzj-PnPSI9rPv1CiFd2k_Bdo_6-qKPT7KIV-N9emPRn3Qt1C0H8sCEKq_5cpSt6k_Mw80Yy_jK-TsXzrMjv1LCrGJEgtf4VtF-TgjToJ-Jpso5rwWKxvumd_-fTkfimsIU4A9X8AR1sAHp7RHkUiBuqtq8nA8rvqcppjnt6XgqgOrJ0hAFAhPr8FlG3YVdGnhfI1jSxaoLB4O9r4v_IhqcHhQ',
    aspect: 'aspect-[4/5]',
    readTime: '8 min read',
    author: 'Jessica Sandstone',
    summary: 'Moving beyond simple prompts into self-correcting multi-agent loops that plan, validate, and execute mission-critical corporate workloads.',
    content: [
      'The modern enterprise is shifting from passive chatbot conversational interfaces to agentic systems capable of autonomous execution, cross-API tool calling, and self-verifying iterative loops.',
      'Rather than relying on a solitary massive prompt, Brivora architectures instantiate specialized agent roles: Planner, Executor, Verifier, and Security Guardrail. Each agent possesses bounded authority and clear interfaces.',
      'This multi-agent synergy allows complex operational flows—such as automated invoice reconciliation, multi-system compliance checks, and customer service escalation—to resolve in seconds with human-in-the-loop oversight.'
    ]
  },
  {
    id: 'spatial-computing-twins',
    title: 'Next-Gen Spatial Computing & Digital Twin Infrastructure',
    category: 'ENTERPRISE IT',
    date: 'January 2, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp2MhN8WOPEaOWs9F0xK6bICFlMObk_qMsBEfM4SFdHT4yb0PMnlBBL8-l3U4dJ9sgP_RQNZjRDvcSPUg5iLQhsqsAP_sQ1TtL_Ybxsgy3Syl47MMEay05G1YvbZEQaPIz417QQqvJW8zV53Sa9ERk5KAYRTkxzQWPX0NesyfFqX6GL1wRATKTHRr2hXUbPCBHgiFrePHu5wQCw255JLUi4L2hzfKnh2bSu1F-VQwENKDiaE7K7VAQeg',
    aspect: 'aspect-[16/10]',
    readTime: '5 min read',
    author: 'Jeremy Jefferson',
    summary: 'Bridging physical facilities and digital telemetries with sub-millisecond edge synchronization and real-time 3D simulation.',
    content: [
      'Digital twin technology is no longer confined to static CAD models. Today, high-throughput IoT edge telemetry feeds directly into real-time physics and spatial computing engines.',
      'Our team integrates spatial computation with automated predictive anomaly detection. Operators don XR headsets or interactive browser dashboards to inspect global server racks and facility metrics in real time.',
      'The outcome is an 80% decrease in physical dispatch overhead and near-instant triage of critical environmental anomalies.'
    ]
  },
  {
    id: 'predictive-ai-cloud-analytics',
    title: 'The Evolution of Predictive AI Models in Cloud Analytics',
    category: 'DATA SCIENCE',
    date: 'January 23, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJxP6f-1_NDwvjyMLwmwiCmr7atWPgXLduUOo-sgmFYmROkHrqg3vIOTOyX5eEzf0PRV0dnuQPC1lKX5JGMxhaBC973_n1c6nIWzVU4ZPLfgqanYI6GRM95AmsmhbIQkmpWbAxM7k5TeL0aYVRmtII8ncbd3NA6aSJVLzaaMn1Q21S1B2jvWzeE-WlD6o4LZAV6t7J6m5jpjbdYnMmEp_nbUfUPYbHMBVKaPbl9uEXsZR7AmBww2Fvkw',
    aspect: 'aspect-[1/1]',
    readTime: '7 min read',
    author: 'Dr. Elena Rostova',
    summary: 'Transforming petabytes of raw streaming telemetry into continuous operational foresight with zero latency overhead.',
    content: [
      'Traditional business intelligence answered "what happened yesterday." Predictive analytics answers "what will happen in three hours and how do we prepare right now."',
      'Through federated learning frameworks and real-time feature stores, Brivora enables enterprises to forecast customer demand curves, compute capacity shortages, and supply chain bottlenecks with unmatched reliability.',
      'By baking automated remediation rules directly into the machine learning pipeline, systems can proactively auto-scale cloud clusters before sudden spikes manifest.'
    ]
  },
  {
    id: 'zero-trust-threat-vectors',
    title: 'Zero-Trust Architecture: Mitigating Threat Vectors in Hybrid Cloud',
    category: 'CYBERSECURITY',
    date: 'January 3, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBtIOEtHevAeh2o9286Ev0sjyx6sAX2NiLO4kT31maSP3TM4nJnHp6lQDjRTIH7mXVfUG3kG8MRfY53Uo6tYMvg_-8V3byFRuPO8vkCkLhPBPwfaUIYrFYgqe-uRLGCRgqBp1ReV1TYvEvH5fMP8osDMBNdxBNyJ4iaB8ezOQjx1teIM5_CQv1UfbEMjKep0GFyJaUEoq3iAX-_8tpOzCfhLMhBnrs_G4o_YmmwsZ46dLz5Z8Azg7_XQ',
    aspect: 'aspect-[16/10]',
    readTime: '6 min read',
    author: 'Gregory Brown',
    summary: 'Never trust, always verify: implementing continuous biometric validation and micro-segmented perimeter policies.',
    content: [
      'The traditional corporate castle-and-moat security perimeter is obsolete. Modern workforce distribution and hybrid cloud fabrics demand a continuous zero-trust evaluation model.',
      'Every connection request—whether originating from an internal office workstation or an executive phone roaming internationally—is dynamically evaluated on identity, device posture, anomaly velocity, and cryptographic proof.',
      'Brivora assists global enterprises in transitioning to least-privilege access, eliminating lateral movement vectors and maintaining full SOC-2 Type II audit trails.'
    ]
  },
  {
    id: 'sustainable-green-cloud',
    title: 'Sustainable Green Cloud: Reducing Carbon Footprint in Data Centers',
    category: 'CLOUD & DEVOPS',
    date: 'January 2, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEFrTFoJUYYDsqCJ4xSS_koZTsqkQ3MzaFnSwyXIfsHsKi27ImJr7_5vXCKPQureKxWWRp84V64TFuPAhdC7vWJDIc07YhJAlb1piiBjoQs2YMb5A5q2bXCOtD5qJUDppQwfwdaHJeWpWwipjv7S2wB7lnmcJAWceSRiJ0pkJrkW_64gaXTNwNTbg21dxJFiUW2s5pULLkjxRGTiDeASgdAtc9JsaGzPQ3oh-IkIaimGHKa3-1p_yjtQ',
    aspect: 'aspect-[16/10]',
    readTime: '4 min read',
    author: 'Jeremy Jefferson',
    summary: 'How intelligent workload scheduling and serverless architecture drive both environmental sustainability and dramatic cost reductions.',
    content: [
      'High-performance enterprise computation does not need to come at the expense of environmental responsibility. By aligning algorithmic execution with low-carbon grid intervals, energy consumption drops significantly.',
      'Brivora builds carbon-aware Kubernetes schedulers that migrate asynchronous ML batch training runs to renewable-heavy regions in real time.',
      'Organizations implementing green cloud strategies with Brivora typically observe an immediate 28% decrease in cloud infrastructure operational expenditure alongside quantifiable ESG compliance benefits.'
    ]
  },
  {
    id: 'multi-cloud-kubernetes',
    title: 'Multi-Cloud Kubernetes Orchestration at Global Scale',
    category: 'CLOUD & DEVOPS',
    date: 'January 10, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDPbrAB4qjcBL0nfbXKmToLaPN3-yG6zMN19nlSEcXhPvTV-RBw7zaOpb-o6GyVTQg059ByDRpeTdQXYDWpyyVbv6irM1xP7Cp8GM4znE6BpQNuLRKTfUv0VPXIh4j4hgM4dNj1rP9PM2qx208VOMUbF0NRctDYUuKkXWDvT7JkYNOsJ07Otoqu9ecLEmTkKpBuucjrqjqaMuHX-oC3G0KQOhN6bc9iYr3RR-Kfe1S1lcOaDNeDFSkkw',
    aspect: 'aspect-[16/10]',
    readTime: '7 min read',
    author: 'Marcus Vance',
    summary: 'Architecting resilient service meshes and GitOps pipelines that span AWS, Google Cloud, and Microsoft Azure without lock-in.',
    content: [
      'Vendor lock-in represents one of the largest strategic liabilities for global tech leaders. A genuine multi-cloud architecture decouples application services from proprietary cloud primitives.',
      'Utilizing unified service mesh technology and GitOps declarative state management via ArgoCD, our engineers achieve seamless traffic shifting between cloud providers.',
      'If an entire cloud region encounters an outage, automated DNS failover redirects live enterprise transactions to secondary clouds within 1.2 seconds, preserving continuous revenue continuity.'
    ]
  },
  {
    id: 'soc2-compliance-roadmapping',
    title: 'Strategic Roadmapping for Cloud Migration and SOC-2 Compliance',
    category: 'ENTERPRISE IT',
    date: 'January 2, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu9Ljh69f-m5vNqJKtg1L5C5e4RHfLVSU87Go5U6vis_Qxi_s2kkLr_-QjKIwRVCinSH0V8kCtVvNCuKB-H4qvgExcMP8lBisV0wEEwaAkKE1Ll5TqxFBc6k36-4D0COoewE7ymuBJtm-aqKz8JTK6UBgI-wbvWrigvyN5LTPc5ThATO5hDPfJxWgKEOPTG-xrEb6JSBPnr7vX0_A_zQv7tUtDkYW6e-tCQlkJlmulUWncVEDaYCpIuQ',
    aspect: 'aspect-[16/10]',
    readTime: '6 min read',
    author: 'Gregory Brown',
    summary: 'A step-by-step executive playbook for modernizing legacy monolithic applications while satisfying rigorous security governance.',
    content: [
      'Migrating mission-critical enterprise workloads into modern cloud infrastructure involves far more than simply "lift and shift." It demands deep re-platforming and strict adherence to regulatory standards.',
      'Brivora provides structured cloud roadmaps incorporating continuous infrastructure-as-code audits, automated compliance tracking, and zero-trust identity gates.',
      'Our clients attain clean SOC-2 Type II certification reports in under 90 days, unlocking lucrative enterprise tier customer relationships without friction.'
    ]
  },
  {
    id: 'self-healing-infrastructure',
    title: 'Self-Healing Infrastructure & Automated Incident Mitigation',
    category: 'MANAGED IT',
    date: 'January 1, 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbVsBRJLuFUU4RqTKzhoNb4hqQjQ_drwRBkZN63hpSAF0l9Z4CetbVic6mGdWIMR1k_JEs-I7g009YHaf9KlnxGMqEX1s0yv7YbsFTtfvG91xvMfG6MpoiKbx9m9UuUJav7zM0NstR-s8tYShgUMSq9pVlx3y3k7nJAGehR7Kdd80UEBczSg3bwkqaBNRa7m8OQPlGgP37GeKORSsdwa5IMoXfx74Zxfr1vAh1rHIxyngMhFuqZVmOyQ',
    aspect: 'aspect-[1/1]',
    readTime: '5 min read',
    author: 'Jeremy Jefferson',
    summary: 'Autonomous node recycling, real-time deadlock resolution, and proactive anomaly intervention for 24/7 reliability.',
    content: [
      'Pager fatigue among DevOps and engineering teams is a symptom of reactive infrastructure. With AI-driven observability, servers detect their own impending degradation before users ever notice.',
      'Brivora deploys autonomous remediation daemons that detect memory leaks, thread starvation, and cascading microservice dependencies in real time.',
      'Automated rolling node recycling and intelligent routing adjustments keep enterprise systems operating at 99.99% availability year-round.'
    ]
  }
];

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'autonomous-ai-risk-engine',
    title: 'Autonomous AI Risk Engine',
    category: 'AI & Agents',
    categoryColor: 'bg-[#00d2ff] text-slate-950',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBejVMGiTxqdAVmcFe7fLavPzUBrocnPD6T5CchaFTfOMTruud1x8-sBsZXbCxDx6J2zZc0Ud12oLyRY4NGx5F3q4Tdv5Eo_HL3q4P1wqWC5dFCs4BnZ0xEPKQLU_Z_SVAy8DFcjRlixtHvx-F4APBPUKTpgHpCQIrnfEIUsVYReqdVsJTEkFbyx2gVP3cmMDbI81GGlnIGK_h3jiagX66q0QmQZ01YJmNJUxsJDNX4J59tQzpeahR04Q',
    description: 'Scalable RAG pipeline and predictive analytics for multinational banking compliance.',
    metrics: '99.4% Factual Precision · 68% Cost Reduction',
    techStack: ['Python', 'FastAPI', 'pgvector', 'Next.js', 'Claude & Gemini Hybrid']
  },
  {
    id: 'multi-region-kubernetes',
    title: 'Multi-Region Kubernetes',
    category: 'Cloud DevOps',
    categoryColor: 'bg-blue-600 text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxypB9nMN1aEP8lHYFpHGhPsWHX9LgrMldTrjs-DRptnwoFxswAd3ZgLbAWOGIkR4wDnt2zvzUO6ehof51S45xj_dUL4TJRVpwVXaDFuek2tQ-Hy9xPj-cBh9_4GgLm9GgenURRFlIGxYRsp4lZqd9-EYcIMGED_MTnjU5EPLx8YQ5hAxyA9q_GlDSQOupRfMabBaXZ1G0fmocoC2_ipyguCUZmTYS-IDQafxYPErFvxoTYP2rfr-sjg',
    description: 'Zero-downtime microservices re-architecture for high-scale global commerce platforms.',
    metrics: '99.999% SLA Uptime · 42ms Global Latency',
    techStack: ['Kubernetes', 'Terraform', 'Istio Mesh', 'AWS & GCP', 'Prometheus']
  },
  {
    id: 'zero-trust-defense-platform',
    title: 'Zero-Trust Defense Platform',
    category: 'Cyber Defense',
    categoryColor: 'bg-[#00d2ff] text-slate-950',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1FiIq0LmTvo4QDoaOzrl9iMxI2Ar2VDGsvcfAhHtwcVynOD5Y925ELOnNAHZo0D32QXH6A3arOG66lmeV2JYHCdVEArysolGrkT1EJfCpq66fd1-wn-a__aKkAbRPNiPG0ohfPIRVVS7HW_ivPNEku37vmMAaiVXegf4EEznrJ0mfVftfEY4Y8M1qYW7pfi02kO0aAvfllVzjlQpn-feh7a-YPZHSxjPB9uSJGiJiTR0KffLZWYFqWg',
    description: 'Enterprise identity verification and real-time automated threat mitigation architecture.',
    metrics: 'Zero Breaches · SOC-2 Type II Certified',
    techStack: ['Zero-Trust', 'OAuth2 / OIDC', 'eBPF', 'WAF Automation', 'Vault']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, Finovate Global',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXmbDx0YtbmH2facc60A9zjBrdChhXejgvelO7EElofBTzndk89gWZaQwRiLmkfISFYFAsLxbY-YpwQ1vszu6aOekxbqYdtCbDIenxnNudR1oXRaUa5tOY2qiY-OU7MyHUEAWDp2p7FIh6j-paVLNxnPGLMPes1QCpmsKxCo8KSB-A9s-StFNW1dDx1ph2ldIWlU8PI8pxMaf49TYpe-8qMR8XcuT0MiNYC1SRbbOIFu1rDCa-N9e1A',
    quote: '"Brivora transformed our legacy systems into a modern cloud powerhouse with zero downtime. Unbelievable precision."'
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Product, DataSphere',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXTXlWIHThmv_RyOeQ6GIz1QDUK3oAaKL4LGsNrjXHyogoMNBWtNnYGejzXh1jQnGZenfQclmgFksZBNVWjH8TIZvd6euXhdm6SGm433SzIrwkl2TD3yUw9uvvWnnu8lkCx0tEGFaX-j6c1YBtWlF0ML2eOKvCD2Df2zqq2XYo_QT1kB1T2C21muXgu3Rx3BoWdn1fOqG3kwgOcOPrgfMpz7gBe6VRoxQNLaV5E5ANEXxJOQeuHJNsdQ',
    quote: '"Their generative AI agents automated 70% of our enterprise support workflow within the first 90 days."'
  },
  {
    name: 'David Kross',
    role: 'Managing Director, Apex Group',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqwOEl0ahEZcDvMkD8k03Q5KQG5n0_ET_E9alNolzv-Iv-vVkEy4KTwXmCFkSdA3lyOIDUDYJQRhECnrltTmVhJC6u1ApfHzqFOP0Rqwh2sOfCPh-J8Tq2jZGdjiRAB_lSoIzjp-5CBMpe-zR_nTkKPtmVWO0hE6A6RM8ghhnq8sxQ2Rv2-VJq2EE4tlvMSEMfsN6EWTmmsQJjCuPmE_d8qiyjYTOxLpSONT86zyUOUYfwQkLU2Os_qw',
    quote: '"Unmatched managed IT responsiveness and cyber resilience. They genuinely feel like an extension of our in-house team."'
  }
];
