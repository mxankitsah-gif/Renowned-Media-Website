/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, Check } from 'lucide-react';

const PRESET_PHOTOS = [
  { label: 'Production Studio', url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Podcast Microphone', url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Digital Agency Team', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Strategy Workspace', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Real Estate Architecture', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Campaign Leadership', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Video Post Production', url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80' },
  { label: 'PR Press Conference', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80' },
];

export const ImagePickerModal: React.FC = () => {
  const { activeImagePickerKey, closeImagePicker, setImage } = useBuilder();
  if (!activeImagePickerKey) return null;

  const [urlInput, setUrlInput] = useState(activeImagePickerKey.currentUrl || '');
  const [activeTab, setActiveTab] = useState<'presets' | 'url' | 'upload'>('presets');

  const handleApply = (selectedUrl: string) => {
    if (!selectedUrl) return;
    setImage(activeImagePickerKey.key, selectedUrl);
    closeImagePicker();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          handleApply(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
        onClick={closeImagePicker}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 text-[#1d4ed8] rounded-lg">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-slate-900 text-lg">Select or Upload Photo</h3>
              <p className="font-sans text-xs text-slate-500">Choose a high-resolution photo or upload from your device</p>
            </div>
          </div>
          <button
            onClick={closeImagePicker}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-100 my-4 gap-2">
          <button
            onClick={() => setActiveTab('presets')}
            className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'presets'
                ? 'bg-[#1d4ed8] text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Media Library Presets
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'url'
                ? 'bg-[#1d4ed8] text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5 inline mr-1" /> Image Web Link URL
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-colors cursor-pointer ${
              activeTab === 'upload'
                ? 'bg-[#1d4ed8] text-white'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Upload className="w-3.5 h-3.5 inline mr-1" /> Upload File
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto min-h-[250px] py-2">
          {activeTab === 'presets' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PRESET_PHOTOS.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => handleApply(photo.url)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-slate-200 hover:border-[#1d4ed8] hover:shadow-md cursor-pointer transition-all"
                >
                  <img
                    src={photo.url}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-2">
                    <span className="font-sans text-[10px] font-bold text-white leading-tight">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-4 pt-2">
              <label className="block font-sans text-xs font-bold text-slate-700">
                Paste Image Web Link (Direct URL):
              </label>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 outline-none focus:border-[#1d4ed8]"
              />
              {urlInput && (
                <div className="aspect-video w-full max-w-sm rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img src={urlInput} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <button
                onClick={() => handleApply(urlInput)}
                disabled={!urlInput}
                className="w-full py-3 bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                Apply Image Link
              </button>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 hover:bg-blue-50/30 transition-colors cursor-pointer text-center space-y-3">
              <Upload className="w-10 h-10 text-[#1d4ed8]" />
              <div className="space-y-1">
                <p className="font-sans text-sm font-bold text-slate-800">Click or Drag & Drop Photo Here</p>
                <p className="font-sans text-xs text-slate-500">Supports JPG, PNG, WEBP, GIF up to 10MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-file-upload-input"
              />
              <label
                htmlFor="image-file-upload-input"
                className="px-5 py-2.5 bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-sm"
              >
                Browse Files
              </label>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
          <button
            onClick={closeImagePicker}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
