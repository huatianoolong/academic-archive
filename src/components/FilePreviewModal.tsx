import React, { useState, useEffect } from 'react';
import { AcademicFile, Subject } from '../types';
import { X, Download, Copy, Check, ZoomIn, ZoomOut, Printer, FileText, Code, FileSpreadsheet, ExternalLink, Sparkles } from 'lucide-react';

interface FilePreviewModalProps {
  file: AcademicFile | null;
  subject?: Subject;
  onClose: () => void;
  onDownload: (file: AcademicFile) => void;
}

export const FilePreviewModal: React.FC<FilePreviewModalProps> = ({
  file,
  subject,
  onClose,
  onDownload,
}) => {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!file) return null;

  const handleCopyContent = () => {
    if (file.contentPreview) {
      navigator.clipboard.writeText(file.contentPreview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2C2825]/70 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Modal Card Container */}
      <div className="bg-[#FAF7F2] border-2 border-[#2C2825] rounded-2xl shadow-[8px_8px_0px_#2C2825] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* MODAL HEADER */}
        <div className="bg-[#FFFFFF] border-b-2 border-[#2C2825] p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#2C2825] shrink-0 uppercase"
              style={
                subject
                  ? { backgroundColor: subject.bgLight, color: subject.color }
                  : { backgroundColor: '#E0E7FF', color: '#3730A3' }
              }
            >
              {file.fileExtension}
            </span>

            <div className="min-w-0">
              <h2 className="font-sketch font-bold text-lg sm:text-xl text-[#2C2825] truncate leading-tight">
                {file.fileName}
              </h2>
              <div className="flex items-center gap-2 font-hand text-xs text-[#776E5E]">
                <span>{file.fileSize}</span>
                <span>•</span>
                <span>Updated {file.updatedAt}</span>
                {subject && (
                  <>
                    <span>•</span>
                    <span className="font-bold" style={{ color: subject.color }}>
                      {subject.name}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="sketch-btn p-1.5 bg-[#FAF7F2] hover:bg-[#EFE9DD] text-[#2C2825] rounded-lg cursor-pointer"
            title="Close Preview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL TOOLBAR */}
        <div className="bg-[#EFE9DD] border-b border-[#2C2825]/20 px-4 py-2 flex items-center justify-between text-xs font-sans text-[#2C2825]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(70, z - 10))}
              className="p-1 hover:bg-[#DED7C8] rounded border border-[#2C2825]/30 cursor-pointer"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono w-12 text-center font-bold">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
              className="p-1 hover:bg-[#DED7C8] rounded border border-[#2C2825]/30 cursor-pointer"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {file.contentPreview && (
              <button
                onClick={handleCopyContent}
                className="sketch-btn flex items-center gap-1 bg-[#FAF7F2] hover:bg-[#FFFFFF] text-[#2C2825] px-2.5 py-1 rounded font-bold cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code/Text'}</span>
              </button>
            )}

            <button
              onClick={() => onDownload(file)}
              className="sketch-btn flex items-center gap-1 bg-[#2C2825] text-white hover:bg-[#1A1816] px-3 py-1 rounded font-bold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original</span>
            </button>
          </div>
        </div>

        {/* MODAL BODY PREVIEW CONTENT */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-ruled-paper">
          <div
            className="max-w-3xl mx-auto bg-white border-2 border-[#2C2825] rounded-xl p-6 shadow-[4px_4px_0px_#2C2825] transition-transform origin-top"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          >
            {/* FILE TOPIC HEADER */}
            <div className="pb-4 border-b-2 border-dashed border-[#E2DACD] mb-4 flex justify-between items-start">
              <div>
                <span className="font-mono text-xs font-bold text-[#888070] uppercase">
                  DOCUMENT PREVIEW
                </span>
                <h3 className="font-sketch text-2xl font-bold text-[#2C2825]">
                  {file.fileName}
                </h3>
              </div>
              <span className="font-hand text-sm font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                Verified GitHub File
              </span>
            </div>

            {/* PREVIEW RENDERING BY FILE TYPE */}
            {file.fileType === 'code' ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#666055]">
                  <span>Source Code Snippet ({file.fileExtension})</span>
                  <span>UTF-8</span>
                </div>
                <pre className="font-mono text-xs bg-[#1E1E1E] text-[#D4D4D4] p-4 rounded-lg overflow-x-auto leading-relaxed border border-[#2C2825]">
                  <code>{file.contentPreview || `// Sample code preview for ${file.fileName}\nSystem.out.println("Academic archive code file");`}</code>
                </pre>
              </div>
            ) : file.contentPreview ? (
              <div className="prose prose-stone max-w-none font-sans text-sm text-[#2C2825] space-y-3 whitespace-pre-line leading-relaxed">
                {file.contentPreview}
              </div>
            ) : (
              <div className="text-center py-12 space-y-3">
                <FileText className="w-12 h-12 mx-auto text-[#776E5E]" />
                <h4 className="font-sketch text-xl text-[#2C2825] font-bold">
                  Document Ready for Download
                </h4>
                <p className="font-sans text-xs text-[#555045] max-w-md mx-auto">
                  {file.description}
                </p>
                <button
                  onClick={() => onDownload(file)}
                  className="sketch-btn inline-flex items-center gap-2 bg-[#FEF08A] hover:bg-[#FDE047] text-[#2C2825] px-4 py-2 rounded-lg font-bold text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {file.fileName}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="bg-[#FFFFFF] border-t-2 border-[#2C2825] p-3 text-center text-xs font-hand text-[#776E5E]">
          Academic Archive Document Reader • Press <kbd className="font-mono bg-[#EFE9DD] px-1 rounded">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};
