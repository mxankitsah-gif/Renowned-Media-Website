/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { ActiveTab } from '../types';
import ServiceIcon from './ServiceIcon';
import { Check, ArrowRight, Shield, Award, Zap, Sparkles } from 'lucide-react';
import EditableText from './builder/EditableText';

interface ServicesViewProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onTabChange?: (tab: ActiveTab) => void;
  onRequestQuote?: () => void;
}

export default function ServicesView({ 
  onSelectServiceForQuote, 
  onTabChange, 
  onRequestQuote 
}: ServicesViewProps) {

  // Features for Why Choose SECTION 3
  const features = [
    {
      title: 'Media Expertise',
      description: 'Years of experience working with journalists, media houses and public figures.',
      highlight: 'High Authority'
    },
    {
      title: 'Performance Driven',
      description: 'Every campaign is focused on measurable outcomes and business growth.',
      highlight: 'Direct ROI'
    },
    {
      title: 'Political Campaign Experience',
      description: 'Proven experience managing large-scale digital outreach and election-focused campaigns.',
      highlight: 'Scale & Reach'
    },
    {
      title: 'Full-Service Execution',
      description: 'Strategy, content, media, advertising and execution under one roof.',
      highlight: 'Seamless Delivery'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-6 space-y-24">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="max-w-4xl mx-auto text-center space-y-6" id="services-hero">
        <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-4 py-2 rounded-full uppercase tracking-wider block w-fit mx-auto">
          <EditableText idKey="services-badge" defaultText="OUR SERVICES" />
        </span>
        <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          <EditableText idKey="services-hero-title1" defaultText="Digital Marketing, Media & " />
          <span className="text-[#1d4ed8]">
            <EditableText idKey="services-hero-highlight" defaultText="Political Outreach" />
          </span>
          <EditableText idKey="services-hero-title2" defaultText=" Solutions" />
        </h1>
        <div className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          <EditableText 
            idKey="services-hero-desc" 
            defaultText="We help brands, influencers, political leaders, public figures and organizations build visibility, authority and measurable growth through strategic digital marketing, content production, media management and performance campaigns." 
            multiline 
          />
        </div>
      </section>

      {/* SECTION 2: THE 7 SERVICE CARDS */}
      <section className="max-w-7xl mx-auto" id="services-cards-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, index) => {
            const isPolitical = srv.id === 'political-campaigns';
            const numLabel = String(index + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={srv.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group min-h-[500px] border-2 ${
                  isPolitical
                    ? 'border-red-500 shadow-[0_15px_30px_rgba(220,38,38,0.06)]'
                    : 'border-slate-100 hover:border-[#1d4ed8]/30 shadow-[0_10px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_15px_35px_rgba(29,78,216,0.04)]'
                }`}
                id={`service-card-${srv.id}`}
              >
                <div>
                  {/* Top Header Row of Card */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isPolitical
                        ? 'bg-red-50 text-[#dc2626] border border-red-100'
                        : 'bg-blue-50 text-[#1d4ed8] border border-blue-100'
                    }`}>
                      <ServiceIcon id={srv.id} className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-3xl font-extrabold text-slate-200 group-hover:text-[#1d4ed8]/10 transition-colors">
                      {numLabel}
                    </span>
                  </div>

                  {/* Title and Badge */}
                  <div className="space-y-2 mb-4">
                    {isPolitical && (
                      <span className="inline-block font-mono text-[9px] font-extrabold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Specialty Service
                      </span>
                    )}
                    <h3 className="font-sans text-xl font-extrabold text-slate-900 leading-tight">
                      <EditableText idKey={`srv-pg-title-${srv.id}`} defaultText={srv.title} />
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                    <EditableText idKey={`srv-pg-desc-${srv.id}`} defaultText={srv.description} multiline />
                  </div>

                  {/* Included List */}
                  <div className="space-y-3 mb-8">
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Services Included
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPolitical 
                              ? 'bg-red-50 text-red-600 border border-red-100' 
                              : 'bg-blue-50 text-[#1d4ed8] border border-blue-100'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-sans text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                            <EditableText idKey={`srv-pg-deliv-${srv.id}-${dIdx}`} defaultText={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                  <span className="font-mono text-[10px] text-slate-500 font-medium">
                    <EditableText idKey={`srv-pg-dur-${srv.id}`} defaultText={srv.duration} />
                  </span>
                  <button
                    onClick={() => onSelectServiceForQuote(srv.id)}
                    className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-white bg-[#dc2626] hover:bg-[#b91c1c] px-4.5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                    id={`service-cta-btn-${srv.id}`}
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE RENOWNED MEDIA */}
      <section className="py-20 bg-slate-50 rounded-2xl border border-slate-200/60 max-w-7xl mx-auto px-6 sm:px-12 md:px-16" id="why-choose-us">
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-[#1d4ed8] leading-normal uppercase tracking-wider block">
              <EditableText idKey="services-why-badge" defaultText="Proven Capabilities" />
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              <EditableText idKey="services-why-title" defaultText="Why Choose Renowned Media" />
            </h2>
            <div className="font-sans text-sm text-slate-600 leading-relaxed">
              <EditableText idKey="services-why-desc" defaultText="We align top-tier strategies with surgical execution to ensure your brand stands apart." multiline />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => {
              let IconComponent = Zap;
              if (idx === 0) IconComponent = Award;
              if (idx === 1) IconComponent = Sparkles;
              if (idx === 2) IconComponent = Shield;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#1d4ed8]/20 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1d4ed8] border border-blue-100 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] font-bold text-[#1d4ed8] uppercase tracking-wider block">
                        <EditableText idKey={`srv-feat-hl-${idx}`} defaultText={feat.highlight} />
                      </span>
                      <h4 className="font-sans text-base font-extrabold text-slate-900">
                        <EditableText idKey={`srv-feat-title-${idx}`} defaultText={feat.title} />
                      </h4>
                    </div>
                    <div className="font-sans text-xs text-slate-600 leading-relaxed">
                      <EditableText idKey={`srv-feat-desc-${idx}`} defaultText={feat.description} multiline />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-16 max-w-4xl mx-auto text-center space-y-8" id="services-final-cta">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            <EditableText idKey="services-cta-title" defaultText="Ready To Grow Your Brand?" />
          </h2>
          <div className="font-sans text-slate-600 max-w-xl mx-auto">
            <EditableText idKey="services-cta-desc" defaultText="Let's build a digital strategy that drives visibility, engagement and real business results." multiline />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onRequestQuote && (
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white font-mono text-[11px] font-bold uppercase tracking-widest py-4 px-8 rounded-lg shadow-[0_4px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="services-final-request-btn"
            >
              Request Consultation
            </button>
          )}

          {onTabChange && (
            <button
              onClick={() => onTabChange('portfolio')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest py-3.5 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="services-final-portfolio-btn"
            >
              View Portfolio
            </button>
          )}
        </div>
      </section>

    </div>
  );
}
