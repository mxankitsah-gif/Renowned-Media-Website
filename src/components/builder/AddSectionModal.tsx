/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { CustomSectionType } from '../../types/builder';
import { X, LayoutTemplate, Layers, Image as ImageIcon, MessageSquare, HelpCircle, FileText, Sparkles, Send } from 'lucide-react';

const SECTION_TEMPLATES: {
  type: CustomSectionType;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}[] = [
  {
    type: 'hero',
    title: 'Hero Banner Section',
    description: 'High-impact headline, category badge, action buttons, and background banner.',
    icon: LayoutTemplate,
  },
  {
    type: 'features',
    title: 'Services / Capabilities Grid',
    description: '3-column feature cards highlighting specialized capabilities and value props.',
    icon: Layers,
  },
  {
    type: 'banner_image',
    title: 'Full-Width Image & Video Banner',
    description: 'Visual brand banner with dark overlay, display typography, and CTA.',
    icon: ImageIcon,
  },
  {
    type: 'text_block',
    title: 'Rich Editorial Article / Text Block',
    description: 'Press releases, brand stories, executive summaries, or thought leadership.',
    icon: FileText,
  },
  {
    type: 'cta',
    title: 'High-Conversion CTA Banner',
    description: 'Call-to-action box with consultation booking buttons and contact prompts.',
    icon: Send,
  },
  {
    type: 'testimonials',
    title: 'Testimonials & Reviews Grid',
    description: 'Client endorsements, review quotes, founder names, and authority badges.',
    icon: MessageSquare,
  },
  {
    type: 'faq',
    title: 'FAQ Accordion Block',
    description: 'Answers to client questions, pricing structure details, and process steps.',
    icon: HelpCircle,
  },
];

export const AddSectionModal: React.FC = () => {
  const { isAddSectionOpen, closeAddSectionModal, addCustomSection } = useBuilder();

  if (!isAddSectionOpen) return null;

  const handleSelect = (type: CustomSectionType) => {
    addCustomSection(type);
    closeAddSectionModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
        onClick={closeAddSectionModal}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full p-6 z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-[#1d4ed8] rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-slate-900 text-xl">WordPress Block Library</h3>
              <p className="font-sans text-xs text-slate-500">Choose a custom section template to insert into your live page</p>
            </div>
          </div>
          <button
            onClick={closeAddSectionModal}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Template Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 overflow-y-auto max-h-[60vh]">
          {SECTION_TEMPLATES.map((tpl) => {
            const Icon = tpl.icon;
            return (
              <div
                key={tpl.type}
                onClick={() => handleSelect(tpl.type)}
                className="p-5 rounded-xl border border-slate-200 hover:border-[#1d4ed8] hover:bg-blue-50/30 transition-all cursor-pointer group flex gap-4 items-start shadow-sm hover:shadow-md text-left"
              >
                <div className="p-3 bg-slate-100 group-hover:bg-[#1d4ed8] group-hover:text-white rounded-xl text-slate-700 transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-slate-900 group-hover:text-[#1d4ed8] transition-colors text-base">
                    {tpl.title}
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {tpl.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={closeAddSectionModal}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
