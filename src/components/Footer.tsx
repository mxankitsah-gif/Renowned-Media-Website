/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AGENCY_DETAILS } from '../data';
import { ActiveTab } from '../types';
import RenownedLogo from './RenownedLogo';
import { Instagram, Youtube, Facebook, BookOpen, MapPin, Shield } from 'lucide-react';
import EditableText from './builder/EditableText';
import { useBuilder } from '../context/BuilderContext';

interface FooterProps {
  onTabChange: (tab: ActiveTab) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const { openAdminModal, isAdminLoggedIn } = useBuilder();
  
  const companyLinks: { label: string; id: ActiveTab }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube,
    },
    {
      name: 'Facebook',
      url: '#',
      icon: Facebook,
    },
    {
      name: 'Blog',
      url: 'https://renownedmedia.blogspot.com',
      icon: BookOpen,
    },
  ];

  return (
    <footer className="bg-slate-50 w-full py-16 border-t border-slate-200" id="global-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center justify-start cursor-pointer transition-all hover:opacity-80 pb-2"
            id="footer-logo-btn"
          >
            <RenownedLogo className="h-10 w-auto" />
          </button>
          <div className="font-sans text-xs text-slate-600 leading-relaxed">
            <EditableText idKey="footer-summary" defaultText={AGENCY_DETAILS.fullSummary} multiline />
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-slate-900 uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs font-sans">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onTabChange(link.id)}
                  className="text-slate-600 hover:text-[#1d4ed8] transition-colors cursor-pointer text-left focus:outline-none"
                  id={`footer-company-link-${link.id}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-slate-900 uppercase tracking-wider">
            Follow Us
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-center gap-2.5 h-12 w-full rounded-lg border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-[#1d4ed8] bg-white hover:bg-blue-50 transition-all transform hover:-translate-y-0.5 shadow-sm duration-300"
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 stroke-[1.5] text-[#1d4ed8] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Get In Touch */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-slate-900 uppercase tracking-wider">
            Get In Touch
          </h4>
          <address className="font-sans text-xs text-slate-600 not-italic space-y-3.5">
            <a
              href="https://maps.google.com/?q=887+Nitikhand-1+Indirapuram+Ghaziabad+201014"
              target="_blank"
              rel="noopener noreferrer"
              className="group/loc flex flex-col gap-1.5 p-3.5 rounded-lg border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 transition-all duration-300 block text-left cursor-pointer shadow-sm"
              id="footer-location-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#1d4ed8] uppercase tracking-wider font-bold">Office Address</span>
                <MapPin className="w-3.5 h-3.5 text-[#1d4ed8] group-hover/loc:scale-110 transition-transform duration-300 stroke-[2]" />
              </div>
              <p className="leading-relaxed font-sans text-xs text-slate-600 group-hover/loc:text-slate-900 transition-colors">
                887, Nitikhand-1, Indirapuram,<br />
                Ghaziabad, Uttar Pradesh 201014
              </p>
            </a>
            
            <div className="space-y-2 pt-1">
              <div className="block">
                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="text-[#1d4ed8] hover:text-[#1e40af] transition-all font-bold block"
                >
                  <EditableText idKey="footer-email" defaultText={AGENCY_DETAILS.email} />
                </a>
              </div>
              <div className="space-y-1 block">
                <a
                  href={`tel:${AGENCY_DETAILS.phone1}`}
                  className="hover:text-[#1d4ed8] text-slate-600 transition-colors block font-mono font-medium"
                >
                  <EditableText idKey="footer-phone1" defaultText={AGENCY_DETAILS.phone1} />
                </a>
                <a
                  href={`tel:${AGENCY_DETAILS.phone2}`}
                  className="hover:text-[#1d4ed8] text-slate-600 transition-colors block font-mono font-medium"
                >
                  <EditableText idKey="footer-phone2" defaultText={AGENCY_DETAILS.phone2} />
                </a>
              </div>
            </div>
          </address>
        </div>

      </div>

      {/* Baseline Footers */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-xs text-slate-500 text-center md:text-left">
          © 2026 Renowned Media Agency. All rights reserved.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-slate-500">
          <a href="#privacy" className="hover:text-[#1d4ed8] transition-all">Privacy Policy</a>
          <span className="text-slate-200">|</span>
          <a href="#terms" className="hover:text-[#1d4ed8] transition-all">Terms of Service</a>
          <span className="text-slate-200">|</span>
          <a href="#cookies" className="hover:text-[#1d4ed8] transition-all">Cookie Policy</a>
          <span className="text-slate-200">|</span>
          <a href="#sitemap" className="hover:text-[#1d4ed8] transition-all">Sitemap</a>
          <span className="text-slate-200">|</span>
          <button
            onClick={openAdminModal}
            className="hover:text-[#1d4ed8] transition-all text-slate-400 hover:underline flex items-center gap-1 font-mono text-[11px] cursor-pointer"
            title="Access WordPress Backend Builder"
          >
            <Shield className="w-3 h-3 text-blue-600" />
            <span>{isAdminLoggedIn ? 'WP-Admin Dashboard' : 'WP-Admin Login'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
