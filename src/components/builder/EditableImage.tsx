/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useBuilder } from '../../context/BuilderContext';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface EditableImageProps {
  idKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  idKey,
  defaultSrc,
  alt,
  className = 'w-full h-full object-cover',
  wrapperClassName = 'relative group/img-edit overflow-hidden',
}) => {
  const { isBuilderMode, getImage, openImagePicker } = useBuilder();
  const currentSrc = getImage(idKey, defaultSrc);

  return (
    <div className={wrapperClassName}>
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        referrerPolicy="no-referrer"
      />
      {isBuilderMode && (
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img-edit:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2 z-20 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openImagePicker(idKey, currentSrc);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-900 font-sans text-xs font-bold rounded-lg shadow-xl border border-slate-200 hover:scale-105 transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#1d4ed8]" />
            Change Photo
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableImage;
