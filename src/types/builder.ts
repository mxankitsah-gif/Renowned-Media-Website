/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CustomSectionType = 
  | 'hero'
  | 'features'
  | 'banner_image'
  | 'text_block'
  | 'cta'
  | 'testimonials'
  | 'faq'
  | 'stats';

export interface CustomSectionItem {
  id: string;
  title?: string;
  description?: string;
  icon?: string;
  img?: string;
  author?: string;
  role?: string;
  value?: string;
  label?: string;
}

export interface CustomSection {
  id: string;
  type: CustomSectionType;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  btnText?: string;
  btnLink?: string;
  imgUrl?: string;
  bgColor?: string;
  items?: CustomSectionItem[];
}

export interface BuilderState {
  isEditing: boolean;
  sectionsOrder: string[]; // List of section IDs on the current view
  customSections: Record<string, CustomSection>; // Map of added custom sections
  textOverrides: Record<string, string>; // Map of element key -> overridden text
  imageOverrides: Record<string, string>; // Map of image key -> overridden image URL
}
