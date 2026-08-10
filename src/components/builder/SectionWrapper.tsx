/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { ChevronUp, ChevronDown, Trash2, GripVertical, Plus } from 'lucide-react';

interface SectionWrapperProps {
  id: string;
  label: string;
  children: React.ReactNode;
  isCustom?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  label,
  children,
  isCustom = false,
}) => {
  const { isBuilderMode, moveHomeSection, deleteCustomSection, openAddSectionModal } = useBuilder();

  if (!isBuilderMode) {
    return <>{children}</>;
  }

  return (
    <div className="relative group/section my-4 border-2 border-dashed border-blue-400/50 hover:border-[#1d4ed8] rounded-2xl transition-all duration-200 p-2 bg-blue-50/20">
      {/* Section Top Controls Bar */}
      <div className="flex items-center justify-between bg-slate-900 text-white px-4 py-2 rounded-xl mb-2 text-xs font-mono font-bold shadow-md">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-blue-400 cursor-grab" />
          <span className="text-blue-300 uppercase tracking-wider">{label}</span>
          {isCustom && (
            <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] px-2 py-0.5 rounded">
              Custom Block
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => moveHomeSection(id, 'up')}
            className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Move Section Up"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => moveHomeSection(id, 'down')}
            className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Move Section Down"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {isCustom && (
            <button
              onClick={() => deleteCustomSection(id)}
              className="p-1 hover:bg-red-900/50 text-red-400 hover:text-red-200 rounded transition-colors ml-2 cursor-pointer"
              title="Delete Section"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Render Actual Section Content */}
      <div className="relative z-10">{children}</div>

      {/* Quick Add Section Button directly below */}
      <div className="flex justify-center my-3 opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={openAddSectionModal}
          className="flex items-center gap-1.5 px-4 py-1.5 bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs font-bold rounded-full shadow-md cursor-pointer transition-transform hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Add Section Here
        </button>
      </div>
    </div>
  );
};
