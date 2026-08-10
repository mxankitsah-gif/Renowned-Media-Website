/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ArrowRight, Sparkles, Award, Star, Trophy, Clock, Coins, Flame, 
  TrendingUp, Headset, BookOpen, ExternalLink, Calendar, ArrowUpRight, 
  Share2, Video, Search, Megaphone, Palette, Mic, Users 
} from 'lucide-react';
import { SERVICES, PROJECTS, HERO_IMAGE } from '../data';
import { ProjectItem, ActiveTab } from '../types';
import { useBuilder } from '../context/BuilderContext';
import { EditableText } from './builder/EditableText';
import { EditableImage } from './builder/EditableImage';
import { SectionWrapper } from './builder/SectionWrapper';
import { DynamicCustomSection } from './builder/DynamicCustomSection';

const HOME_SERVICES = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Build a powerful digital presence through strategic social media management. From content planning and publishing to audience engagement and growth campaigns, we manage your brand across all major platforms.',
    icon: Share2,
  },
  {
    id: 'content-production',
    title: 'Content Production & Video Editing',
    description: 'Professional content creation for YouTube, podcasts, brands and influencers. We transform ideas into engaging visual stories that capture attention and drive results.',
    icon: Video,
  },
  {
    id: 'performance-marketing',
    title: 'Paid Advertising & Lead Generation',
    description: 'Data-driven Meta, Google and YouTube advertising campaigns designed to generate leads, sales and measurable business growth.',
    icon: TrendingUp,
  },
  {
    id: 'political-campaigns',
    title: 'Political Digital Campaigns',
    description: 'Comprehensive digital campaign management for political leaders, candidates and organizations. We combine content, outreach and technology to maximize voter engagement and digital influence.',
    icon: Award,
  },
  {
    id: 'seo-website',
    title: 'SEO & Website Management',
    description: 'Improve online visibility and search rankings through strategic SEO, technical optimization, website management and GEO-ready content structures.',
    icon: Search,
  },
  {
    id: 'public-relations',
    title: 'Public Relations & Media Management',
    description: 'Strengthen your reputation through media relations, press coverage, reputation management and strategic communication campaigns.',
    icon: Megaphone,
  },
  {
    id: 'branding-design',
    title: 'Branding & Creative Design',
    description: 'Develop a memorable brand identity through logo design, visual systems, marketing creatives, presentation decks and brand communication assets.',
    icon: Palette,
  },
  {
    id: 'podcast-production',
    title: 'Podcast Production & Distribution',
    description: 'End-to-end podcast production including recording consultation, editing, thumbnail design, platform distribution, YouTube optimization and audience growth strategies.',
    icon: Mic,
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding & Influencer Management',
    description: 'Build authority and visibility for entrepreneurs, journalists, creators, politicians and public figures through strategic content, media positioning and personal brand development.',
    icon: Users,
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Fast Delivery',
    icon: Clock,
    desc: 'Rapid execution with professional quality while maintaining strict delivery timelines.',
  },
  {
    title: 'Affordable Pricing',
    icon: Coins,
    desc: 'Flexible and transparent pricing models suitable for creators, startups, businesses and public figures.',
  },
  {
    title: 'Strategy Before Execution',
    icon: TrendingUp,
    desc: 'Every project begins with audience research, planning and platform-specific strategy before implementation.',
  },
  {
    title: 'Content That Performs',
    icon: Flame,
    desc: 'Content designed for reach, engagement, retention and measurable business outcomes.',
  },
  {
    title: 'PR & Media Understanding',
    icon: Megaphone,
    desc: 'Strong expertise in media visibility, reputation management, public relations and communication strategy.',
  },
  {
    title: 'SEO Focus',
    icon: Search,
    desc: 'Technical SEO, content optimization and search visibility strategies designed for long-term organic growth.',
  },
  {
    title: 'Direct Client Support',
    icon: Headset,
    desc: 'Dedicated communication and regular project updates throughout the engagement.',
  },
  {
    title: 'End-to-End Execution',
    icon: Award,
    desc: 'From planning and production to publishing, promotion and reporting — everything managed under one roof.',
  },
];

interface HomeViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export default function HomeView({ onTabChange, onSelectProject, onRequestQuote }: HomeViewProps) {
  const [activeWhyChooseIndex, setActiveWhyChooseIndex] = useState(0);
  const { homeSectionOrder, customSections, getImage } = useBuilder();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWhyChooseIndex((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  const heroTags = ['SEO', 'Social Media', 'Video Editing', 'Production', 'Branding'];

  const heroBgImage = getImage('hero-bg-photo', HERO_IMAGE);

  const renderSectionById = (sectionId: string) => {
    // 1. HERO SECTION
    if (sectionId === 'hero') {
      return (
        <SectionWrapper id="hero" label="Hero Banner Section">
          <section 
            className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-cover bg-center rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.88), #ffffff), url(${heroBgImage})`,
            }}
            id="home-hero-section"
          >
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
              <div className="max-w-3xl space-y-8">
                <span className="font-serif text-xl lg:text-2xl text-[#1d4ed8] font-semibold tracking-normal italic block">
                  <EditableText idKey="hero-tagline" defaultText="Visibility Is The New Currency." />
                </span>
                
                <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  <EditableText idKey="hero-headline-1" defaultText="Grow " />
                  <span className="text-[#1d4ed8] relative inline-block">
                    <EditableText idKey="hero-headline-highlight" defaultText="Faster" />
                    <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-red-600 opacity-65"></span>
                  </span>{' '}
                  <EditableText idKey="hero-headline-2" defaultText="In The Digital World" />
                </h1>
     
                {/* Tags array */}
                <div className="flex flex-wrap gap-2.5">
                  {heroTags.map((tag, idx) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-bold bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-wider"
                    >
                      <EditableText idKey={`hero-tag-${idx}`} defaultText={tag} />
                    </span>
                  ))}
                </div>
     
                <div className="space-y-4">
                  <div className="font-sans text-lg text-slate-800 font-bold tracking-wide">
                    <EditableText idKey="hero-subline-bold" defaultText="No compromise. Your brand deserves elite representation." />
                  </div>
                  <div className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                    <EditableText 
                      idKey="hero-description" 
                      defaultText="At Renowned Media, we combine strategy, execution, and master craftsmanship — helping modern brands dominate search, captivate audiences, and secure their digital authority with high-recall prestige." 
                      multiline 
                    />
                  </div>
                </div>
     
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={onRequestQuote}
                    className="bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_25px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_35px_rgba(220,38,38,0.4)] cursor-pointer"
                    id="hero-growing-btn"
                  >
                    <EditableText idKey="hero-cta-btn1" defaultText="Let's Grow Together" />
                  </button>
                  <button
                    onClick={() => onTabChange('blog')}
                    className="bg-transparent hover:bg-slate-50 text-[#1d4ed8] hover:text-[#1e40af] border border-[#1d4ed8]/35 hover:border-[#1d4ed8] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    id="hero-read-blog-btn"
                  >
                    <EditableText idKey="hero-cta-btn2" defaultText="Read Our Blog" /> <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </section>
        </SectionWrapper>
      );
    }

    // 2. SERVICES BENTO GRID
    if (sectionId === 'services-bento') {
      return (
        <SectionWrapper id="services-bento" label="Services Grid Section">
          <section className="py-24 bg-slate-50/50 border-y border-slate-100 rounded-3xl my-4" id="home-bento-services">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <EditableText idKey="services-bento-badge" defaultText="Bespoke Creative Capabilities" />
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <EditableText idKey="services-bento-title-1" defaultText="Services That Build " />
                  <span className="text-[#1d4ed8]">
                    <EditableText idKey="services-bento-title-highlight" defaultText="Prestige" />
                  </span>
                </h2>
                <div className="font-sans text-sm text-slate-600 leading-relaxed">
                  <EditableText 
                    idKey="services-bento-desc" 
                    defaultText="From digital PR to cinematic content production, Renowned Media helps premium brands grow visibility and authority with extreme precision." 
                    multiline 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {HOME_SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => onTabChange('services')}
                    className="bg-white border border-slate-200/60 hover:border-blue-500 rounded-xl p-8 hover:-translate-y-1.5 transition-all duration-500 ease-out group cursor-pointer hover:shadow-[0_12px_30px_rgba(29,78,216,0.06)] flex flex-col justify-between h-full text-left"
                    id={`home-service-card-${srv.id}`}
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300 shrink-0">
                        <srv.icon className="w-6 h-6" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-[#1d4ed8] transition-colors duration-200">
                          <EditableText idKey={`srv-title-${srv.id}`} defaultText={srv.title} />
                        </h4>
                        <div className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <EditableText idKey={`srv-desc-${srv.id}`} defaultText={srv.description} multiline />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionWrapper>
      );
    }

    // 3. FEATURED PROJECTS SECTION
    if (sectionId === 'featured-projects') {
      return (
        <SectionWrapper id="featured-projects" label="Featured Projects Section">
          <section className="py-16 bg-white my-4 rounded-3xl" id="home-projects">
            <div className="max-w-7xl mx-auto px-6 space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <EditableText idKey="projects-section-badge" defaultText="Selected Showcase" />
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <EditableText idKey="projects-section-title1" defaultText="Featured Client " />
                  <span className="text-[#1d4ed8]">
                    <EditableText idKey="projects-section-title2" defaultText="Projects & Success Stories" />
                  </span>
                </h2>
                <div className="font-sans text-sm text-slate-600 leading-relaxed">
                  <EditableText 
                    idKey="projects-section-desc" 
                    defaultText="Explore our tactical organic achievements, cinematic campaigns, and conversion-optimized systems engineered for market leaders." 
                    multiline 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {PROJECTS.slice(0, 3).map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="group relative rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-500 hover:shadow-[0_12px_35px_rgba(29,78,216,0.06)] transition-all duration-500 ease-out cursor-pointer bg-white flex flex-col justify-between"
                    id={`home-project-card-${proj.id}`}
                    style={{ height: '380px' }}
                  >
                    <div className="relative h-40 overflow-hidden shrink-0">
                      <EditableImage idKey={`proj-img-${proj.id}`} defaultSrc={proj.img} alt={proj.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
                      <span className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-sm text-[#1d4ed8] border border-blue-100 text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-md z-10">
                        {proj.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2 text-left">
                        <span className="font-mono text-[9px] text-[#dc2626] uppercase tracking-widest block">
                          {proj.clientIndustry || 'B2B Enterprise'}
                        </span>
                        
                        <h3 className="font-sans text-sm sm:text-base font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-[#1d4ed8] transition-colors duration-200 line-clamp-2">
                          <EditableText idKey={`proj-title-${proj.id}`} defaultText={proj.title} />
                        </h3>

                        <div className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          <EditableText idKey={`proj-desc-${proj.id}`} defaultText={proj.description} multiline />
                        </div>
                      </div>

                      {proj.servicesDelivered && proj.servicesDelivered.length > 0 && (
                        <div className="space-y-1.5 pt-2 border-t border-slate-100 text-left">
                          <div className="flex flex-wrap gap-1 leading-none">
                            {proj.servicesDelivered.slice(0, 3).map((sd, sIdx) => (
                              <span key={sIdx} className="bg-slate-50 border border-slate-200/50 text-slate-600 text-[9px] px-2 py-1 rounded">
                                {sd}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => onTabChange('portfolio')}
                  className="bg-white hover:bg-[#dc2626] text-[#1d4ed8] hover:text-white border border-[#1d4ed8]/35 hover:border-transparent px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_2px_15px_rgba(29,78,216,0.05)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.2)]"
                  id="explore-more-projects-btn"
                >
                  <EditableText idKey="projects-btn-explore" defaultText="Explore Full Case Studies" />
                </button>
              </div>
            </div>
          </section>
        </SectionWrapper>
      );
    }

    // 4. WHY CHOOSE US
    if (sectionId === 'why-choose-us') {
      return (
        <SectionWrapper id="why-choose-us" label="Why Choose Us Section">
          <section className="py-24 bg-slate-50/50 border-t border-slate-100 my-4 rounded-3xl" id="home-why-choose">
            <div className="max-w-7xl mx-auto px-6 space-y-16">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <EditableText idKey="why-choose-badge" defaultText="Exclusive Value Proposition" />
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <EditableText idKey="why-choose-title1" defaultText="Why Choose " />
                  <span className="text-[#1d4ed8]">
                    <EditableText idKey="why-choose-title2" defaultText="Renowned Media" />
                  </span>
                </h2>
                <div className="font-sans text-sm text-slate-600 leading-relaxed">
                  <EditableText 
                    idKey="why-choose-desc" 
                    defaultText="We engineer premier growth and content experiences for leading Indian creators, startups, local businesses, and SMEs." 
                    multiline 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {WHY_CHOOSE_ITEMS.map((item, idx) => {
                  const isActive = idx === activeWhyChooseIndex;
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all duration-500 text-left h-full ${
                        isActive
                          ? 'border-[#1d4ed8] shadow-[0_4px_25px_rgba(29,78,216,0.12)] scale-[1.01]'
                          : 'border-slate-200/80 hover:border-[#1d4ed8]/40 shadow-sm hover:shadow-md'
                      }`}
                      id={`why-choose-card-${idx}`}
                    >
                      <div className="space-y-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-[#1d4ed8] text-white border border-[#1d4ed8]' : 'bg-blue-50 text-[#1d4ed8] border border-blue-100'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-sans font-extrabold text-base text-[#0f172a] leading-tight">
                            <EditableText idKey={`why-item-title-${idx}`} defaultText={item.title} />
                          </h4>
                          <div className="font-sans text-xs text-slate-600 leading-relaxed min-h-[48px]">
                            <EditableText idKey={`why-item-desc-${idx}`} defaultText={item.desc} multiline />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </SectionWrapper>
      );
    }

    // 5. CALL TO ACTION / BLOG INSIGHTS
    if (sectionId === 'call-to-action') {
      return (
        <SectionWrapper id="call-to-action" label="Call To Action Banner">
          <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden rounded-3xl my-4" id="home-latest-insights-cta">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1d4ed8]/3 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
              <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> <EditableText idKey="cta-insights-badge" defaultText="Direct Industry Insights" />
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                <EditableText idKey="cta-insights-title" defaultText="Read Our Latest Insights" />
              </h2>
              <div className="font-sans text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                <EditableText 
                  idKey="cta-insights-desc" 
                  defaultText="Delve deeper into our official publications, strategic advice, and comprehensive case studies updated regularly on our official publishing stream." 
                  multiline 
                />
              </div>
              <div className="pt-2">
                <a
                  href="https://renownedmedia.blogspot.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.4)] cursor-pointer"
                  id="visit-blog-cta-btn"
                >
                  <EditableText idKey="cta-insights-btn" defaultText="Visit Our Blog" /> <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </section>
        </SectionWrapper>
      );
    }

    // Render Added Custom Sections
    if (customSections[sectionId]) {
      return (
        <SectionWrapper id={sectionId} label={`Custom ${customSections[sectionId].type.toUpperCase()} Block`} isCustom={true}>
          <DynamicCustomSection section={customSections[sectionId]} />
        </SectionWrapper>
      );
    }

    return null;
  };

  return (
    <div className="space-y-0 text-on-surface">
      {homeSectionOrder.map((secId) => (
        <div key={secId}>{renderSectionById(secId)}</div>
      ))}
    </div>
  );
}
