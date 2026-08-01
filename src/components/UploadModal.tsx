import React, { useState } from 'react';
import { Subject, CategoryId, AcademicYear, AcademicFile } from '../types';
import { MATERIAL_CATEGORIES } from '../data/academicData';
import { X, Upload, Plus, FileText, Check } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  years: AcademicYear[];
  onAddFile: (newFile: AcademicFile) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  subjects,
  years,
  onAddFile,
}) => {
  const [fileName, setFileName] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id || '');
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>('lecture-notes');
  const [description, setDescription] = useState('');
  const [fileExtension, setFileExtension] = useState('.pdf');
  const [contentPreview, setContentPreview] = useState('');
  const [topicsText, setTopicsText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileName.trim()) return;

    const selectedSubject = subjects.find((s) => s.id === selectedSubjectId);
    if (!selectedSubject) return;

    const newFile: AcademicFile = {
      id: `custom-file-${Date.now()}`,
      subjectId: selectedSubject.id,
      categoryId: selectedCategoryId,
      yearId: selectedSubject.yearId,
      fileName: fileName.endsWith(fileExtension) ? fileName : `${fileName}${fileExtension}`,
      fileType: fileExtension === '.py' || fileExtension === '.java' || fileExtension === '.sql' || fileExtension === '.cpp' ? 'code' : fileExtension === '.pptx' ? 'ppt' : 'pdf',
      fileExtension: fileExtension,
      fileSize: '1.5 MB',
      updatedAt: new Date().toISOString().split('T')[0],
      description: description || 'User archived academic note material.',
      previewSupported: true,
      contentPreview: contentPreview || `# ${fileName}\n\nUser created academic note.`,
      topics: topicsText ? topicsText.split(',').map((t) => t.trim()) : ['User Note'],
      downloadsCount: 1,
    };

    onAddFile(newFile);
    onClose();
    // Reset form
    setFileName('');
    setDescription('');
    setContentPreview('');
    setTopicsText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2825]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] border-2 border-[#2C2825] rounded-2xl shadow-[8px_8px_0px_#2C2825] w-full max-w-lg overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#FFFFFF] border-b-2 border-[#2C2825] p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-700" />
            <h2 className="font-sketch font-bold text-xl text-[#2C2825]">
              Add Academic Material
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#EFE9DD] rounded-lg text-[#2C2825] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto max-h-[75vh] font-sans text-xs">
          
          {/* File Name */}
          <div>
            <label className="block font-bold text-[#2C2825] mb-1">
              File Title / Name *
            </label>
            <input
              type="text"
              required
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="e.g. Chapter 02 — Data Structures Notes"
              className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#2C2825]"
            />
          </div>

          {/* Subject & File Extension */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#2C2825] mb-1">
                Target Subject *
              </label>
              <select
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-medium text-[#2C2825] focus:outline-none"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.code} — {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#2C2825] mb-1">
                File Extension *
              </label>
              <select
                value={fileExtension}
                onChange={(e) => setFileExtension(e.target.value)}
                className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-medium text-[#2C2825] focus:outline-none"
              >
                <option value=".pdf">.pdf (PDF Document)</option>
                <option value=".py">.py (Python Code)</option>
                <option value=".java">.java (Java Code)</option>
                <option value=".sql">.sql (SQL Query)</option>
                <option value=".pptx">.pptx (Presentation)</option>
                <option value=".docx">.docx (Word Document)</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block font-bold text-[#2C2825] mb-1">
              Material Category *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MATERIAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`p-2 rounded-lg border text-left cursor-pointer transition-colors ${
                    selectedCategoryId === cat.id
                      ? 'bg-[#2C2825] text-white border-[#2C2825] font-bold'
                      : 'bg-white text-[#2C2825] border-[#2C2825]/30'
                  }`}
                >
                  <span className="block font-medium truncate">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block font-bold text-[#2C2825] mb-1">
              Short Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of file contents..."
              className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-medium text-[#2C2825] focus:outline-none"
            />
          </div>

          {/* Topic Tags */}
          <div>
            <label className="block font-bold text-[#2C2825] mb-1">
              Topics / Keywords (Comma separated)
            </label>
            <input
              type="text"
              value={topicsText}
              onChange={(e) => setTopicsText(e.target.value)}
              placeholder="Revision, Formulas, Exam Prep"
              className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-medium text-[#2C2825] focus:outline-none"
            />
          </div>

          {/* Markdown / Code Preview Text */}
          <div>
            <label className="block font-bold text-[#2C2825] mb-1">
              Note Content / Code Preview
            </label>
            <textarea
              rows={4}
              value={contentPreview}
              onChange={(e) => setContentPreview(e.target.value)}
              placeholder="Enter markdown note content or source code snippet here..."
              className="w-full bg-white border border-[#2C2825] rounded-lg p-2 font-mono text-xs text-[#2C2825] focus:outline-none"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-2 flex items-center justify-end gap-2 border-t border-dashed border-[#E2DACD]">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-[#2C2825] font-bold text-[#2C2825] hover:bg-[#EFE9DD] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="sketch-btn flex items-center gap-1.5 bg-[#FEF08A] hover:bg-[#FDE047] text-[#2C2825] px-4 py-1.5 rounded-lg font-bold cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Archive Material</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
