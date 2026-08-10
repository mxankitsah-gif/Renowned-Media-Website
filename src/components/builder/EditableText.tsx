/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { Edit3, Check, X } from 'lucide-react';

interface EditableTextProps {
  idKey: string;
  defaultText: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a' | 'button';
  className?: string;
  multiline?: boolean;
  style?: React.CSSProperties;
}

export const EditableText: React.FC<EditableTextProps> = ({
  idKey,
  defaultText,
  as = 'span',
  className = '',
  multiline = false,
  style,
}) => {
  const { isBuilderMode, getText, setText } = useBuilder();
  const currentValue = getText(idKey, defaultText);

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(currentValue);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setDraft(currentValue);
  }, [currentValue]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if ('select' in inputRef.current) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  const handleSave = () => {
    setText(idKey, draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(currentValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const Component = as;

  if (!isBuilderMode) {
    return <Component className={className} style={style}>{currentValue}</Component>;
  }

  if (isEditing) {
    return (
      <div className="relative inline-block w-full max-w-full z-20 group/edit text-left my-1">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full min-h-[90px] p-2.5 text-slate-900 bg-white border-2 border-[#1d4ed8] rounded-lg shadow-xl font-sans text-sm outline-none resize-y"
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-2 text-slate-900 bg-white border-2 border-[#1d4ed8] rounded-md shadow-xl font-sans outline-none font-bold"
          />
        )}
        <div className="flex items-center gap-1.5 mt-1.5">
          <button
            onClick={handleSave}
            type="button"
            className="flex items-center gap-1 px-3 py-1 bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs rounded shadow cursor-pointer font-bold"
          >
            <Check className="w-3.5 h-3.5" /> Save
          </button>
          <button
            onClick={handleCancel}
            type="button"
            className="flex items-center gap-1 px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-mono text-xs rounded cursor-pointer"
          >
            <X className="w-3.5 h-3.5" /> Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <Component
      onClick={(e) => {
        if (isBuilderMode) {
          e.stopPropagation();
          setIsEditing(true);
        }
      }}
      className={`${className} relative inline-block cursor-pointer hover:outline-2 hover:outline-dashed hover:outline-[#1d4ed8] hover:bg-blue-50/50 rounded px-1 -mx-1 transition-all group/text-edit`}
      style={style}
      title="Click to edit text"
    >
      {currentValue}
      <span className="opacity-0 group-hover/text-edit:opacity-100 transition-opacity ml-1.5 inline-flex items-center text-[10px] bg-[#1d4ed8] text-white px-1.5 py-0.5 rounded font-mono font-bold align-middle shadow-sm pointer-events-none">
        <Edit3 className="w-2.5 h-2.5 mr-0.5" /> Edit
      </span>
    </Component>
  );
};
