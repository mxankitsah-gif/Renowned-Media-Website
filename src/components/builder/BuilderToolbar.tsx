/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { 
  Sparkles, 
  Edit3, 
  Eye, 
  Plus, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle2, 
  Globe, 
  Settings, 
  Sliders
} from 'lucide-react';

export const BuilderToolbar: React.FC = () => {
  const {
    isBuilderMode,
    toggleBuilderMode,
    openAddSectionModal,
    saveAndPublish,
    resetToDefault,
    exportConfig,
    importConfig,
    lastSavedAt,
    toastMessage,
  } = useBuilder();

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          importConfig(text);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      {/* Toast Floating Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-500/50 flex items-center gap-3 animate-bounce font-mono text-xs font-bold">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating WordPress Builder Control Panel */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-[92%] sm:w-auto">
        <div className="bg-slate-900/95 text-white backdrop-blur-xl border border-slate-700/80 rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          
          {/* Brand & Builder Mode Switch */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 rounded-xl font-extrabold text-white">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">WordPress Live Builder</span>
              <span className="sm:hidden">WP Builder</span>
            </div>

            <button
              onClick={toggleBuilderMode}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                isBuilderMode
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {isBuilderMode ? (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Editing Mode ON</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Builder Controls when Active */}
          {isBuilderMode && (
            <div className="flex items-center flex-wrap gap-2">
              <button
                onClick={openAddSectionModal}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>+ Section</span>
              </button>

              <button
                onClick={saveAndPublish}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded-xl transition-all cursor-pointer shadow-md hover:scale-105"
                title="Save changes to website"
              >
                <Save className="w-4 h-4" />
                <span>Publish</span>
              </button>

              <button
                onClick={() => setShowSettings((prev) => !prev)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                title="Builder Settings"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Last Saved Badge */}
          {lastSavedAt && (
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Published {lastSavedAt}</span>
            </div>
          )}
        </div>

        {/* Builder Settings Dropdown */}
        {showSettings && isBuilderMode && (
          <div className="mt-2 bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white shadow-2xl flex flex-wrap gap-3 items-center justify-between font-mono text-xs animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2">
              <button
                onClick={exportConfig}
                className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Export JSON
              </button>

              <label className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors cursor-pointer">
                <Upload className="w-3.5 h-3.5" /> Import JSON
                <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
              </label>
            </div>

            <button
              onClick={resetToDefault}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-950/80 hover:bg-red-900 text-red-300 rounded-xl transition-colors cursor-pointer border border-red-800/50"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
            </button>
          </div>
        )}
      </div>
    </>
  );
};
