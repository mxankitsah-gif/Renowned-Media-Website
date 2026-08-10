/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomSection } from '../../types/builder';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';

interface DynamicCustomSectionProps {
  section: CustomSection;
}

export const DynamicCustomSection: React.FC<DynamicCustomSectionProps> = ({ section }) => {
  const { id, type, title, subtitle, description, badge, btnText, btnLink, imgUrl, items } = section;

  switch (type) {
    case 'hero':
      return (
        <div className="relative py-20 px-6 bg-slate-900 text-white rounded-3xl my-8 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="inline-block px-3.5 py-1 bg-blue-500/20 text-blue-400 border border-blue-400/30 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'FEATURED SECTION'} />
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white leading-tight">
                <EditableText idKey={`${id}-title`} defaultText={title} multiline />
              </h2>
              <div className="font-sans text-base text-slate-300 leading-relaxed">
                <EditableText idKey={`${id}-desc`} defaultText={description || ''} multiline />
              </div>
              <div>
                <a
                  href={btnLink || '#'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1d4ed8] hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg"
                >
                  <EditableText idKey={`${id}-btn`} defaultText={btnText || 'Learn More'} />
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            {imgUrl && (
              <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <EditableImage idKey={`${id}-img`} defaultSrc={imgUrl} alt="Custom Hero" />
              </div>
            )}
          </div>
        </div>
      );

    case 'features':
      return (
        <div className="py-16 px-6 bg-slate-50/80 rounded-3xl my-8 border border-slate-200/80">
          <div className="max-w-6xl mx-auto space-y-12 text-center">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'OUR CAPABILITIES'} />
              </span>
              <h3 className="font-sans text-3xl font-extrabold text-slate-900">
                <EditableText idKey={`${id}-title`} defaultText={title} />
              </h3>
              <div className="font-sans text-sm text-slate-600">
                <EditableText idKey={`${id}-desc`} defaultText={description || ''} multiline />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {(items || []).map((item, idx) => (
                <div key={item.id || idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-extrabold text-lg text-slate-900">
                    <EditableText idKey={`${id}-item-title-${idx}`} defaultText={item.title || 'Feature Title'} />
                  </h4>
                  <div className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <EditableText idKey={`${id}-item-desc-${idx}`} defaultText={item.description || 'Feature description'} multiline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'banner_image':
      return (
        <div className="relative py-24 px-6 rounded-3xl my-8 overflow-hidden min-h-[350px] flex items-center justify-center text-center text-white shadow-xl">
          <div className="absolute inset-0 z-0">
            <EditableImage idKey={`${id}-img`} defaultSrc={imgUrl || ''} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-blue-400/30">
              <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'CREATIVE BANNER'} />
            </span>
            <h3 className="font-sans text-3xl md:text-5xl font-extrabold text-white">
              <EditableText idKey={`${id}-title`} defaultText={title} multiline />
            </h3>
            <div className="font-sans text-base text-slate-200 max-w-2xl mx-auto">
              <EditableText idKey={`${id}-desc`} defaultText={description || ''} multiline />
            </div>
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="py-16 px-8 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl my-8 border border-blue-800/40 text-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs font-bold text-red-400 bg-red-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-red-500/30">
            <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'CALL TO ACTION'} />
          </span>
          <h3 className="font-sans text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto">
            <EditableText idKey={`${id}-title`} defaultText={title} multiline />
          </h3>
          <div className="font-sans text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            <EditableText idKey={`${id}-desc`} defaultText={description || ''} multiline />
          </div>
          <div>
            <a
              href={btnLink || '/contact'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <EditableText idKey={`${id}-btn`} defaultText={btnText || 'Contact Us Now'} />
            </a>
          </div>
        </div>
      );

    case 'testimonials':
      return (
        <div className="py-16 px-6 bg-slate-100/70 rounded-3xl my-8 border border-slate-200">
          <div className="max-w-5xl mx-auto space-y-10 text-center">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'CLIENT TESTIMONIALS'} />
              </span>
              <h3 className="font-sans text-3xl font-extrabold text-slate-900">
                <EditableText idKey={`${id}-title`} defaultText={title} />
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {(items || []).map((item, idx) => (
                <div key={item.id || idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                  <MessageSquare className="w-6 h-6 text-[#1d4ed8]" />
                  <div className="font-sans text-sm text-slate-700 italic leading-relaxed">
                    "<EditableText idKey={`${id}-t-quote-${idx}`} defaultText={item.description || ''} multiline />"
                  </div>
                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                    <span className="font-sans font-bold text-slate-900">
                      <EditableText idKey={`${id}-t-author-${idx}`} defaultText={item.author || 'Client'} />
                    </span>
                    <span className="font-mono text-slate-500">
                      <EditableText idKey={`${id}-t-role-${idx}`} defaultText={item.role || 'Executive'} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'faq':
      return (
        <div className="py-16 px-6 bg-white rounded-3xl my-8 border border-slate-200">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs font-bold text-[#1d4ed8] uppercase tracking-wider">
                <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'FREQUENTLY ASKED'} />
              </span>
              <h3 className="font-sans text-3xl font-extrabold text-slate-900">
                <EditableText idKey={`${id}-title`} defaultText={title} />
              </h3>
            </div>
            <div className="space-y-4 text-left">
              {(items || []).map((item, idx) => (
                <div key={item.id || idx} className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
                  <h4 className="font-sans font-bold text-base text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <EditableText idKey={`${id}-faq-q-${idx}`} defaultText={item.title || 'Question'} />
                  </h4>
                  <div className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    <EditableText idKey={`${id}-faq-a-${idx}`} defaultText={item.description || 'Answer'} multiline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'text_block':
    default:
      return (
        <div className="py-16 px-8 bg-white rounded-3xl my-8 border border-slate-200 text-left space-y-6">
          <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            <EditableText idKey={`${id}-subtitle`} defaultText={subtitle || 'EDITORIAL BLOCK'} />
          </span>
          <h3 className="font-sans text-3xl font-extrabold text-slate-900">
            <EditableText idKey={`${id}-title`} defaultText={title} />
          </h3>
          <div className="font-sans text-base text-slate-700 leading-relaxed">
            <EditableText idKey={`${id}-desc`} defaultText={description || ''} multiline />
          </div>
        </div>
      );
  }
};
