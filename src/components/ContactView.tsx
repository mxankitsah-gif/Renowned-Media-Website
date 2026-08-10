/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DETAILS } from '../data';
import { trackFormSubmission } from '../lib/analytics';
import EditableText from './builder/EditableText';

export default function ContactView() {
  // FAQ states
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you host on-site production shoots?',
      a: 'Yes, absolutely. We coordinate on-site and in-studio multi-camera shoots. Fred Buster, our Director of Operations, handles complete logistics including set layout, lighting, acoustic rigs, and raw asset collection.'
    },
    {
      q: 'What is the standard onboarding timeline?',
      a: 'Typically, we can formalize a strategy blueprint, agree on asset cadences, and launch search engineering optimization workflows within 5-7 business days of booking confirmation.'
    },
    {
      q: 'Are your SEO strategies monthly or lump sum?',
      a: 'Continuous organic search authority requires monthly execution (on-page updates, crawl logging, pillar construction). Therefore, we offer transparent standard or velocity-scale monthly retainers.'
    }
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Intro Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-sans text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto">
          <EditableText idKey="contact-badge" defaultText="Get In Touch" />
        </span>
        <h1 className="font-sans text-4xl font-extrabold text-slate-900 tracking-tight">
          <EditableText idKey="contact-title" defaultText="Initiate Your Growth Routine" />
        </h1>
        <div className="font-sans text-base text-slate-600 leading-relaxed">
          <EditableText 
            idKey="contact-desc" 
            defaultText="Ready to elevate your digital presence, coordinate premium photography shoots, or establish organic search authority? We partner with leading Indian creators, startups, coaches, local businesses, and SMEs to orchestrate elite digital growth channels." 
            multiline 
          />
        </div>
      </section>

      {/* Main Form & details blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact details & Map block */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 space-y-6">
            <h3 className="font-sans font-extrabold text-lg text-slate-900">
              <EditableText idKey="contact-inquiry-title" defaultText="Direct Inquiry Channels" />
            </h3>
            
            <div className="space-y-4 text-xs font-sans">
              {/* Mail */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <Mail className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Mail Address</span>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline">
                    <EditableText idKey="contact-email" defaultText={AGENCY_DETAILS.email} />
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <Phone className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Operations Phone</span>
                  <div className="space-y-1">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline block font-sans">
                      <EditableText idKey="contact-phone1" defaultText={AGENCY_DETAILS.phone1} />
                    </a>
                    <a href={`tel:${AGENCY_DETAILS.phone2}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline block font-sans">
                      <EditableText idKey="contact-phone2" defaultText={AGENCY_DETAILS.phone2} />
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Chat Option */}
              <a 
                href="https://wa.me/918828998296?text=Hi%20Renowned%20Media%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-green-300 transition-colors shadow-sm cursor-pointer group"
                id="whatsapp-direct-card"
              >
                <svg
                  className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">WHATSAPP CHAT</span>
                  <span className="text-xs font-semibold text-[#1d4ed8] group-hover:text-[#1e40af] group-hover:underline block font-sans">
                    <EditableText idKey="contact-whatsapp" defaultText="+91-882-899-8296" />
                  </span>
                </div>
              </a>

              {/* Headquarters Location */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <MapPin className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Headquarters Location</span>
                  <span className="text-slate-600 font-semibold block leading-relaxed font-sans">
                    <EditableText idKey="contact-address" defaultText={AGENCY_DETAILS.address} multiline />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location details card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 text-center space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#1d4ed8]/4 select-none pointer-events-none" />
            <div className="relative space-y-2">
              <span className="font-sans text-[10px] text-[#1d4ed8] font-bold uppercase tracking-widest block">
                <EditableText idKey="contact-hub-tag" defaultText="Global Operations Hub" />
              </span>
              <h4 className="font-sans font-bold text-base text-slate-900">
                <EditableText idKey="contact-hub-city" defaultText="Ghaziabad, Uttar Pradesh" />
              </h4>
              <div className="font-sans text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                <EditableText idKey="contact-hub-desc" defaultText="Coordinating high-end digital authority, search strategy, and premium digital assets for corporate sectors internationally." multiline />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form block */}
        <div 
          className="lg:col-span-8 bg-white border border-slate-200/80 shadow-[0_12px_35px_rgba(29,78,216,0.04)] p-6 sm:p-10 space-y-8 hover:border-blue-400 transition-colors duration-300"
          style={{ borderRadius: '20px' }}
        >
          {/* Form Header */}
          <div className="border-b border-slate-100 pb-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                <EditableText idKey="contact-form-title" defaultText="Request a Consultation" />
              </h3>
              <div className="text-xs text-slate-600 leading-relaxed">
                <EditableText idKey="contact-form-sub" defaultText="Tell us about your project and our team will get back to you." />
              </div>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?usp=header" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => trackFormSubmission('direct_form_link_click')}
              className="text-xs text-[#1d4ed8] hover:text-[#1e40af] font-mono font-bold uppercase tracking-widest flex items-center gap-2 underline shrink-0 cursor-pointer self-start sm:self-auto transition-colors"
            >
              Open Direct Form <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Clean website-styled contact CTA card */}
          <div 
            className="w-full bg-slate-50 border border-slate-200 py-16 px-6 text-center space-y-6 flex flex-col items-center justify-center relative overflow-hidden"
            style={{ borderRadius: '15px' }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 bg-[#1d4ed8]/5 border border-[#1d4ed8]/10 rounded-full flex items-center justify-center mx-auto text-[#1d4ed8]">
                <ExternalLink className="w-5 h-5" />
              </div>
              
              <h4 className="font-sans font-extrabold text-xl text-slate-900 tracking-tight">
                Submit Your Project Inquiry
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click the button below to open our secure consultation form in a new tab.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackFormSubmission('direct_form_button_click')}
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.3)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  Open Direct Form <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured FAQ accordion section */}
      <section className="space-y-8 border-t border-slate-100 pt-16">
        <div className="text-center max-w-md mx-auto space-y-2">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">
            <EditableText idKey="faq-title" defaultText="Frequently Queried Parameters" />
          </h3>
          <div className="text-xs text-slate-600">
            <EditableText idKey="faq-sub" defaultText="Review standard operational methodologies prior to blueprint validation." />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" id="faq-accordions">
          {faqs.map((faq, idx) => {
            const isFaqExpanded = expandedFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/85 rounded-lg overflow-hidden transition-all shadow-sm hover:border-blue-300"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaqIdx(isFaqExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-sm font-sans font-bold text-slate-900 hover:bg-slate-50/50 transition-colors cursor-pointer focus:outline-none"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>
                      <EditableText idKey={`faq-q-${idx}`} defaultText={faq.q} />
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isFaqExpanded ? 'rotate-180 text-[#1d4ed8]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isFaqExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-11 pb-4 pt-1 text-xs text-slate-600 font-sans leading-relaxed border-t border-slate-100">
                        <EditableText idKey={`faq-a-${idx}`} defaultText={faq.a} multiline />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
