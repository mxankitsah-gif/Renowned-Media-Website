/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CustomSection, CustomSectionType } from '../types/builder';

const STORAGE_KEY = 'renowned_wp_builder_v1';

interface BuilderContextType {
  isBuilderMode: boolean;
  setIsBuilderMode: (value: boolean) => void;
  toggleBuilderMode: () => void;
  
  // Direct Text Editing
  textOverrides: Record<string, string>;
  getText: (key: string, defaultValue: string) => string;
  setText: (key: string, value: string) => void;
  
  // Photo Changing
  imageOverrides: Record<string, string>;
  getImage: (key: string, defaultValue: string) => string;
  setImage: (key: string, value: string) => void;
  
  // Section Management
  homeSectionOrder: string[];
  setHomeSectionOrder: React.Dispatch<React.SetStateAction<string[]>>;
  moveHomeSection: (id: string, direction: 'up' | 'down') => void;
  
  customSections: Record<string, CustomSection>;
  addCustomSection: (type: CustomSectionType) => string;
  updateCustomSection: (id: string, updated: Partial<CustomSection>) => void;
  deleteCustomSection: (id: string) => void;
  
  // Image Picker Dialog state
  activeImagePickerKey: { key: string; currentUrl: string } | null;
  openImagePicker: (key: string, currentUrl: string) => void;
  closeImagePicker: () => void;

  // Add Section Modal state
  isAddSectionOpen: boolean;
  openAddSectionModal: () => void;
  closeAddSectionModal: () => void;
  
  // Persistence Actions
  saveAndPublish: () => void;
  resetToDefault: () => void;
  exportConfig: () => void;
  importConfig: (jsonString: string) => boolean;
  
  isPublished: boolean;
  lastSavedAt: string | null;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const DEFAULT_HOME_SECTIONS = [
  'hero',
  'services-bento',
  'featured-projects',
  'why-choose-us',
  'call-to-action'
];

const BuilderContext = createContext<BuilderContextType | null>(null);

export const BuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBuilderMode, setIsBuilderMode] = useState<boolean>(false);
  const [textOverrides, setTextOverrides] = useState<Record<string, string>>({});
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [homeSectionOrder, setHomeSectionOrder] = useState<string[]>(DEFAULT_HOME_SECTIONS);
  const [customSections, setCustomSections] = useState<Record<string, CustomSection>>({});
  
  const [activeImagePickerKey, setActiveImagePickerKey] = useState<{ key: string; currentUrl: string } | null>(null);
  const [isAddSectionOpen, setIsAddSectionOpen] = useState<boolean>(false);
  
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [lastSavedAt, setLastSavedAt] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on initial render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.textOverrides) setTextOverrides(parsed.textOverrides);
        if (parsed.imageOverrides) setImageOverrides(parsed.imageOverrides);
        if (parsed.homeSectionOrder && Array.isArray(parsed.homeSectionOrder)) {
          setHomeSectionOrder(parsed.homeSectionOrder);
        }
        if (parsed.customSections) setCustomSections(parsed.customSections);
        if (parsed.lastSavedAt) setLastSavedAt(parsed.lastSavedAt);
      }
    } catch (e) {
      console.error('Failed to load builder state from localStorage:', e);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const toggleBuilderMode = () => {
    setIsBuilderMode((prev) => !prev);
    showToast(!isBuilderMode ? '✏️ Visual Live Builder Mode Activated! Click any text or image to edit.' : '👁️ Preview Mode Activated.');
  };

  const getText = (key: string, defaultValue: string) => {
    return textOverrides[key] !== undefined ? textOverrides[key] : defaultValue;
  };

  const setText = (key: string, value: string) => {
    setTextOverrides((prev) => {
      const updated = { ...prev, [key]: value };
      persistToStorage({ textOverrides: updated });
      return updated;
    });
  };

  const getImage = (key: string, defaultValue: string) => {
    return imageOverrides[key] !== undefined ? imageOverrides[key] : defaultValue;
  };

  const setImage = (key: string, value: string) => {
    setImageOverrides((prev) => {
      const updated = { ...prev, [key]: value };
      persistToStorage({ imageOverrides: updated });
      return updated;
    });
  };

  const persistToStorage = (partial: Partial<any>) => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : {};
      const updated = {
        textOverrides,
        imageOverrides,
        homeSectionOrder,
        customSections,
        lastSavedAt: new Date().toLocaleTimeString(),
        ...parsed,
        ...partial,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving builder state:', e);
    }
  };

  const moveHomeSection = (id: string, direction: 'up' | 'down') => {
    setHomeSectionOrder((prev) => {
      const idx = prev.indexOf(id);
      if (idx === -1) return prev;
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (targetIdx < 0 || targetIdx >= prev.length) return prev;
      
      const nextOrder = [...prev];
      const temp = nextOrder[idx];
      nextOrder[idx] = nextOrder[targetIdx];
      nextOrder[targetIdx] = temp;

      persistToStorage({ homeSectionOrder: nextOrder });
      return nextOrder;
    });
  };

  const addCustomSection = (type: CustomSectionType): string => {
    const newId = `custom-section-${Date.now()}`;
    let newSection: CustomSection;

    switch (type) {
      case 'hero':
        newSection = {
          id: newId,
          type: 'hero',
          title: 'Your Custom High-Impact Banner Heading',
          subtitle: 'PREMIUM BRANDING & DIGITAL GROWTH',
          description: 'Custom paragraph text describing your flagship offerings, strategy, and business vision.',
          btnText: 'Explore More',
          btnLink: '/service',
          imgUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
        };
        break;
      case 'features':
        newSection = {
          id: newId,
          type: 'features',
          title: 'Specialized Capabilities',
          subtitle: 'WHY WE LEAD THE MARKET',
          description: 'Highlight key features, strengths, and deliverables for your audience.',
          items: [
            { id: '1', title: 'Strategic Execution', description: 'Audience-first planning and data-backed performance marketing.' },
            { id: '2', title: 'Cinematic Production', description: 'High-end post production, color grading and broadcast standards.' },
            { id: '3', title: 'Organic Growth', description: 'Comprehensive SEO structures and viral content engineering.' },
          ],
        };
        break;
      case 'banner_image':
        newSection = {
          id: newId,
          type: 'banner_image',
          title: 'Visual Excellence In Every Campaign',
          subtitle: 'CREATIVE DIRECTION',
          description: 'Elevate your visual identity with custom photographic and video assets.',
          imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
        };
        break;
      case 'cta':
        newSection = {
          id: newId,
          type: 'cta',
          title: 'Ready To Take Your Brand To The Next Level?',
          subtitle: 'GET STARTED TODAY',
          description: 'Schedule a discovery call with our media team and unlock immediate growth.',
          btnText: 'Book Strategy Call',
          btnLink: '/contact',
        };
        break;
      case 'testimonials':
        newSection = {
          id: newId,
          type: 'testimonials',
          title: 'Client Words & Endorsements',
          subtitle: 'TESTIMONIALS',
          description: 'Hear from industry leaders, public figures, and high-growth brands.',
          items: [
            { id: 't1', title: 'Outstanding Quality', description: 'Renowned Media transformed our digital outreach within weeks.', author: 'Industry Client', role: 'CEO, Enterprise' },
            { id: 't2', title: 'Flawless Production', description: 'The video editing and podcast growth surpassed all our expectations.', author: 'Creator Brand', role: 'Founder & Host' },
          ],
        };
        break;
      case 'faq':
        newSection = {
          id: newId,
          type: 'faq',
          title: 'Frequently Asked Questions',
          subtitle: 'NEED HELP?',
          description: 'Answers to common questions about our services, turnaround times, and onboarding.',
          items: [
            { id: 'f1', title: 'How fast can we start a project?', description: 'We usually kick off discovery and campaign setup within 24–48 hours.' },
            { id: 'f2', title: 'Do you offer customized packages?', description: 'Yes, every brand receives a tailored strategy based on goals and platforms.' },
          ],
        };
        break;
      case 'text_block':
      default:
        newSection = {
          id: newId,
          type: 'text_block',
          title: 'Editorial Article & Brand Story',
          subtitle: 'INSIGHTS & PERSPECTIVES',
          description: 'Share detailed company updates, strategy breakdowns, press releases, or thought leadership content directly on your page.',
        };
        break;
    }

    setCustomSections((prev) => {
      const updated = { ...prev, [newId]: newSection };
      persistToStorage({ customSections: updated });
      return updated;
    });

    setHomeSectionOrder((prev) => {
      const updatedOrder = [...prev, newId];
      persistToStorage({ homeSectionOrder: updatedOrder });
      return updatedOrder;
    });

    showToast(`✨ New ${type.toUpperCase()} section added to the page!`);
    return newId;
  };

  const updateCustomSection = (id: string, updated: Partial<CustomSection>) => {
    setCustomSections((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev, [id]: { ...prev[id], ...updated } };
      persistToStorage({ customSections: next });
      return next;
    });
  };

  const deleteCustomSection = (id: string) => {
    setHomeSectionOrder((prev) => {
      const nextOrder = prev.filter((item) => item !== id);
      persistToStorage({ homeSectionOrder: nextOrder });
      return nextOrder;
    });
    setCustomSections((prev) => {
      const next = { ...prev };
      delete next[id];
      persistToStorage({ customSections: next });
      return next;
    });
    showToast('🗑️ Section removed.');
  };

  const openImagePicker = (key: string, currentUrl: string) => {
    if (!isBuilderMode) return;
    setActiveImagePickerKey({ key, currentUrl });
  };

  const closeImagePicker = () => {
    setActiveImagePickerKey(null);
  };

  const openAddSectionModal = () => setIsAddSectionOpen(true);
  const closeAddSectionModal = () => setIsAddSectionOpen(false);

  const saveAndPublish = () => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastSavedAt(timestamp);
    setIsPublished(true);
    const dataToSave = {
      textOverrides,
      imageOverrides,
      homeSectionOrder,
      customSections,
      lastSavedAt: timestamp,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    showToast('🚀 All changes saved & published live successfully!');
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all text edits, custom sections, and photos back to original defaults?')) {
      localStorage.removeItem(STORAGE_KEY);
      setTextOverrides({});
      setImageOverrides({});
      setHomeSectionOrder(DEFAULT_HOME_SECTIONS);
      setCustomSections({});
      setLastSavedAt(null);
      setIsPublished(false);
      showToast('🔄 Website reset to original defaults.');
    }
  };

  const exportConfig = () => {
    const config = {
      textOverrides,
      imageOverrides,
      homeSectionOrder,
      customSections,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `renowned-site-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📥 Site JSON configuration downloaded.');
  };

  const importConfig = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.textOverrides) setTextOverrides(parsed.textOverrides);
      if (parsed.imageOverrides) setImageOverrides(parsed.imageOverrides);
      if (parsed.homeSectionOrder) setHomeSectionOrder(parsed.homeSectionOrder);
      if (parsed.customSections) setCustomSections(parsed.customSections);
      persistToStorage(parsed);
      showToast('📤 Configuration imported successfully!');
      return true;
    } catch (e) {
      alert('Invalid JSON configuration file.');
      return false;
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        isBuilderMode,
        setIsBuilderMode,
        toggleBuilderMode,
        textOverrides,
        getText,
        setText,
        imageOverrides,
        getImage,
        setImage,
        homeSectionOrder,
        setHomeSectionOrder,
        moveHomeSection,
        customSections,
        addCustomSection,
        updateCustomSection,
        deleteCustomSection,
        activeImagePickerKey,
        openImagePicker,
        closeImagePicker,
        isAddSectionOpen,
        openAddSectionModal,
        closeAddSectionModal,
        saveAndPublish,
        resetToDefault,
        exportConfig,
        importConfig,
        isPublished,
        lastSavedAt,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};
