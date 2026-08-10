/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, PUBLIC_FIGURES } from '../data';
import { ProjectItem } from '../types';
import EditableText from './builder/EditableText';
import EditableImage from './builder/EditableImage';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote?: () => void;
}

export default function PortfolioView({ onSelectProject, onRequestQuote }: PortfolioViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PUBLIC_FIGURES.length) % PUBLIC_FIGURES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PUBLIC_FIGURES.length);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-24">
      
      {/* SECTION 1: Featured Public Figures & Media Personalities */}
      <section
        className="space-y-10"
        id="portfolio-public-figures"
      >
        {/* Section Title */}
        <div className="text-left border-l-4 border-[#1d4ed8] pl-4 space-y-2">
          <span className="font-mono text-[10px] font-bold text-[#1d4ed8] uppercase tracking-wider block">
            <EditableText idKey="pf-badge" defaultText="INDIVIDUAL BRANDS & REPRESENTATION" />
          </span>
          <h2 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
            <EditableText idKey="pf-title" defaultText="Featured Public Figures & Media Personalities" />
          </h2>
          <div className="font-sans text-sm text-slate-600 max-w-3xl">
            <EditableText idKey="pf-desc" defaultText="Selected public figures, journalists, creators and personalities associated with our media, PR, content and digital visibility work." multiline />
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-5xl mx-auto select-none pt-4">
          <div className="overflow-hidden bg-slate-50/50 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-[0_15px_50px_rgba(15,23,42,0.05)] p-6 sm:p-8 md:p-10 relative min-h-[380px] md:min-h-[320px] flex items-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full"
              >
                {/* Left Column: Styled Avatar Portrait Placeholder */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center shrink-0 group">
                    
                    {/* Blue & Red corner design accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 bg-[#1d4ed8]" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#dc2626]" />
                    
                    {PUBLIC_FIGURES[currentSlide].img ? (
                      <EditableImage
                        idKey={`pf-img-${PUBLIC_FIGURES[currentSlide].name}`}
                        defaultSrc={PUBLIC_FIGURES[currentSlide].img}
                        alt={PUBLIC_FIGURES[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-slate-300/60 border border-slate-300 flex items-center justify-center text-slate-500 group-hover:scale-105 group-hover:bg-[#1d4ed8]/10 group-hover:text-[#1d4ed8] transition-all duration-300">
                          <User className="w-8 h-8" />
                        </div>

                        <div className="mt-4 space-y-1 col-auto">
                          <p className="font-mono text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                            Portrait Placeholder
                          </p>
                          <p className="font-sans text-[10px] text-slate-400 max-w-[160px] leading-relaxed mx-auto">
                            Ready for future representative photo
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Category Pill Overlaid on Photo */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-slate-700 px-3.5 py-1.5 rounded-lg text-center">
                      <span className="font-sans text-[9px] font-bold text-white uppercase tracking-wider">
                        <EditableText idKey={`pf-cat-${currentSlide}`} defaultText={PUBLIC_FIGURES[currentSlide].category} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Profile details */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-5 text-left text-slate-900">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold text-[#dc2626] uppercase tracking-widest block">
                      MEDIA & PUBLIC REPRESENTATION
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      <EditableText idKey={`pf-name-${currentSlide}`} defaultText={PUBLIC_FIGURES[currentSlide].name} />
                    </h3>
                  </div>

                  {/* Services Grid */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Delivered Core Services
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PUBLIC_FIGURES[currentSlide].services.map((service, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2.5 bg-white border border-slate-200/40 rounded-lg py-2 px-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                          <div className="w-4 h-4 rounded-full bg-[#1d4ed8]/5 border border-[#1d4ed8]/10 flex items-center justify-center text-[#1d4ed8]">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="font-sans text-xs sm:text-sm font-medium text-slate-700">
                            <EditableText idKey={`pf-srv-${currentSlide}-${sIdx}`} defaultText={service} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Navigation Chevrons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#1d4ed8] shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous Profile"
            id="public-figures-carousel-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 w-11 h-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#1d4ed8] shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next Profile"
            id="public-figures-carousel-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Bullet Indicators */}
          <div className="flex justify-center items-center gap-2.5 pt-6">
            {PUBLIC_FIGURES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#1d4ed8]' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to profile ${idx + 1}`}
                id={`public-figures-carousel-dot-${idx}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: Client Success & Case Studies */}
      <section className="space-y-10" id="portfolio-case-studies">
        <div className="text-left border-l-4 border-[#1d4ed8] pl-4 space-y-2">
          <span className="font-mono text-[10px] font-bold text-[#1d4ed8] uppercase tracking-wider block">
            <EditableText idKey="port-cs-badge" defaultText="CORPORATE BRAND SHOWCASE" />
          </span>
          <h2 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
            <EditableText idKey="port-cs-title" defaultText="Client Success & Case Studies" />
          </h2>
          <div className="font-sans text-sm text-slate-600 max-w-3xl">
            <EditableText idKey="port-cs-desc" defaultText="Explore our tactical corporate achievements, organic search rankings, and conversion-engineered digital brand properties. Click on any card below to view extensive operational insights." multiline />
          </div>
        </div>
        
        {/* Projects Grid */}
        <motion.section 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-500 hover:shadow-[0_12px_25px_rgba(29,78,216,0.06)] transition-all cursor-pointer bg-white flex flex-col justify-between"
                id={`portfolio-card-${proj.id}`}
                style={{ height: '520px' }}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <EditableImage
                    idKey={`proj-img-${proj.id}`}
                    defaultSrc={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1d4ed8] border border-blue-100 text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-md z-10">
                    <EditableText idKey={`proj-cat-${proj.id}`} defaultText={proj.category} />
                  </span>
                </div>

                {/* Content Space */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    {/* Industry */}
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">
                      <EditableText idKey={`proj-ind-${proj.id}`} defaultText={proj.clientIndustry || 'B2B Enterprise'} />
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-sans text-base font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-[#1d4ed8] transition-colors duration-200 line-clamp-2">
                      <EditableText idKey={`proj-title-${proj.id}`} defaultText={proj.title} />
                    </h3>

                    {/* Brief description */}
                    <div className="font-sans text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      <EditableText idKey={`proj-desc-${proj.id}`} defaultText={proj.description} multiline />
                    </div>

                    {/* Services Delivered */}
                    {proj.servicesDelivered && proj.servicesDelivered.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[9px] font-mono text-[#1d4ed8]/70 uppercase tracking-wider block">Services Delivered:</span>
                        <div className="flex flex-wrap gap-1 leading-none">
                          {proj.servicesDelivered.slice(0, 3).map((sd, sIdx) => (
                            <span key={sIdx} className="bg-blue-50/50 border border-blue-100/30 text-slate-600 text-[9px] px-1.5 py-0.5 rounded">
                              <EditableText idKey={`proj-sd-${proj.id}-${sIdx}`} defaultText={sd} />
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Performance metric and CTA tag */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">Key Results</span>
                      <span className="bg-red-50 text-[#dc2626] border border-red-100 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded">
                        <EditableText idKey={`proj-met-${proj.id}`} defaultText={proj.metrics} />
                      </span>
                    </div>

                    <div 
                      className="w-full text-center bg-[#1d4ed8] group-hover:bg-[#dc2626] text-white py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-1.5 animate-none"
                    >
                      View Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.section>
      </section>

    </div>
  );
}
