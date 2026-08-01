import React from 'react';
import { AcademicFile, Subject } from '../types';
import { FileText, Download, Eye, FileCode, FileSpreadsheet, FileArchive, FileImage, Tag, Sparkles } from 'lucide-react';

interface FileCardProps {
  file: AcademicFile;
  subject: Subject;
  onPreview: (file: AcademicFile) => void;
  onDownload: (file: AcademicFile) => void;
}

export const FileCard: React.FC<FileCardProps> = ({
  file,
  subject,
  onPreview,
  onDownload,
}) => {
  // Helper for icon based on file type
  const getFileIcon = () => {
    switch (file.fileType) {
      case 'code':
        return <FileCode className="w-5 h-5 text-indigo-600" />;
      case 'ppt':
        return <FileSpreadsheet className="w-5 h-5 text-amber-600" />;
      case 'zip':
        return <FileArchive className="w-5 h-5 text-purple-600" />;
      case 'img':
        return <FileImage className="w-5 h-5 text-teal-600" />;
      default:
        return <FileText className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <div
      className="sketch-card p-4 rounded-xl flex flex-col justify-between gap-3 relative group"
      style={{
        borderLeft: `5px solid ${subject.color}`,
      }}
    >
      {/* File Header */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          {/* Extension Badge */}
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-[#2C2825] shadow-2xs uppercase"
              style={{
                backgroundColor: subject.bgLight,
                color: subject.color,
              }}
            >
              {file.fileExtension}
            </span>
            <span className="font-mono text-[11px] text-[#666055]">
              {file.fileSize}
            </span>
          </div>

          <div className="p-1 rounded bg-[#FAF7F2] border border-[#2C2825]/20">
            {getFileIcon()}
          </div>
        </div>

        {/* File Name */}
        <h3 className="font-sans font-bold text-sm sm:text-base text-[#2C2825] leading-snug group-hover:text-blue-900 line-clamp-2 mb-1.5">
          {file.fileName}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs text-[#555045] line-clamp-2 leading-relaxed mb-3">
          {file.description}
        </p>

        {/* Topic Tags */}
        {file.topics && file.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {file.topics.map((topic, i) => (
              <span
                key={i}
                className="font-mono text-[10px] text-[#555045] bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E2DACD]"
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* File Card Footer / Actions */}
      <div className="pt-3 border-t border-dashed border-[#E2DACD] flex items-center justify-between gap-2">
        <span className="font-hand text-xs text-[#888070]">
          Updated {file.updatedAt}
        </span>

        <div className="flex items-center gap-2">
          {file.previewSupported && (
            <button
              onClick={() => onPreview(file)}
              className="sketch-btn flex items-center gap-1 bg-[#FAF7F2] hover:bg-[#EFE9DD] text-[#2C2825] px-2.5 py-1 rounded-md font-sans font-semibold text-xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-blue-700" />
              <span>Preview</span>
            </button>
          )}

          <button
            onClick={() => onDownload(file)}
            className="sketch-btn flex items-center gap-1 text-white px-2.5 py-1 rounded-md font-sans font-bold text-xs cursor-pointer"
            style={{
              backgroundColor: subject.color,
            }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};
