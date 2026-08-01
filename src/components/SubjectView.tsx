import React, { useState } from 'react';
import { Subject, CategoryId, AcademicFile, MaterialCategory, AcademicYear } from '../types';
import { MATERIAL_CATEGORIES } from '../data/academicData';
import { FileCard } from './FileCard';
import { ArrowLeft, BookOpen, Edit3, Terminal, FolderKanban, StickyNote, Search, Filter, Sparkles, Folder, Plus } from 'lucide-react';

interface SubjectViewProps {
  subject: Subject;
  year: AcademicYear;
  files: AcademicFile[];
  onBack: () => void;
  onPreviewFile: (file: AcademicFile) => void;
  onDownloadFile: (file: AcademicFile) => void;
  onOpenUpload: () => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({
  subject,
  year,
  files,
  onBack,
  onPreviewFile,
  onDownloadFile,
  onOpenUpload,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fileTypeFilter, setFileTypeFilter] = useState<string>('all');

  // Icon mapping for categories
  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'lecture-notes':
        return <BookOpen className="w-4 h-4" />;
      case 'tutorial-exercises':
        return <Edit3 className="w-4 h-4" />;
      case 'practical':
        return <Terminal className="w-4 h-4" />;
      case 'assignments':
        return <FolderKanban className="w-4 h-4" />;
      case 'side-notes':
        return <StickyNote className="w-4 h-4" />;
    }
  };

  // Filter files by active category, search query, and file type
  const filteredFiles = files.filter((f) => {
    const matchesCategory = activeCategoryId === 'all' || f.categoryId === activeCategoryId;
    const matchesSearch =
      f.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.topics && f.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesType = fileTypeFilter === 'all' || f.fileType === fileTypeFilter;

    return matchesCategory && matchesSearch && matchesType;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="sketch-btn flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#FAF7F2] text-[#2C2825] px-3.5 py-1.5 rounded-lg text-sm font-bold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Academic Archive</span>
        </button>

        <span className="font-hand text-base text-[#776E5E]">
          {year.name} • Subject Archive
        </span>
      </div>

      {/* SUBJECT HERO HEADER */}
      <div
        className="bg-[#FFFFFF] border-2 border-[#2C2825] rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_#2C2825] relative overflow-hidden"
        style={{
          borderTop: `8px solid ${subject.color}`,
        }}
      >
        <div className="max-w-3xl space-y-3 relative z-10">
          
          {/* Level & Code Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#2C2825] bg-[#FAF7F2]">
              {year.name}
            </span>
            <span
              className="font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#2C2825]"
              style={{
                backgroundColor: subject.bgLight,
                color: subject.color,
              }}
            >
              {subject.code}
            </span>
            <span className="font-hand text-sm text-[#776E5E]">
              {files.length} materials archived
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-sketch text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: subject.color }}
          >
            {subject.name}
          </h1>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#555045] leading-relaxed max-w-2xl">
            "{subject.description}"
          </p>
        </div>

        {/* Corner Decorative Doodle */}
        <div
          className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: subject.color }}
        />
      </div>

      {/* CATEGORY SELECTOR TABS (5 Material Categories) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-sketch text-xl font-bold text-[#2C2825]">
            Material Categories
          </h2>
          <span className="font-hand text-sm text-[#776E5E]">
            Filter by topic or type
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {/* All Button */}
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`p-3 rounded-xl border-1.5 text-left font-sans text-xs font-bold transition-all cursor-pointer flex flex-col justify-between h-20 ${
              activeCategoryId === 'all'
                ? 'bg-[#2C2825] text-white border-[#2C2825] shadow-[3px_3px_0px_#2C2825] -translate-y-0.5'
                : 'bg-[#FFFFFF] text-[#2C2825] border-[#2C2825]/30 hover:border-[#2C2825]'
            }`}
          >
            <Folder className="w-4 h-4" />
            <div>
              <span className="block font-bold">All Files</span>
              <span className="font-mono text-[10px] opacity-80">{files.length} items</span>
            </div>
          </button>

          {/* 5 Specific Material Categories */}
          {MATERIAL_CATEGORIES.map((cat) => {
            const isSelected = activeCategoryId === cat.id;
            const catCount = files.filter((f) => f.categoryId === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-3 rounded-xl border-1.5 text-left font-sans text-xs font-bold transition-all cursor-pointer flex flex-col justify-between h-20 ${
                  isSelected
                    ? 'border-[#2C2825] shadow-[3px_3px_0px_#2C2825] -translate-y-0.5'
                    : 'bg-[#FFFFFF] text-[#2C2825] border-[#2C2825]/30 hover:border-[#2C2825]'
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: subject.color,
                        color: '#FFFFFF',
                      }
                    : {}
                }
              >
                <div className="flex items-center justify-between">
                  {getCategoryIcon(cat.id)}
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-current opacity-90">
                    {catCount}
                  </span>
                </div>
                <span className="block font-bold truncate leading-tight">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER & SEARCH TOOLBAR */}
      <div className="bg-[#FFFFFF] border-1.5 border-[#2C2825] rounded-xl p-3 shadow-[3px_3px_0px_#2C2825] flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search inside subject */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#776E5E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search in ${subject.name}...`}
            className="w-full bg-[#FAF7F2] border border-[#2C2825] rounded-lg pl-9 pr-3 py-1.5 text-xs font-medium text-[#2C2825] focus:outline-none focus:ring-2 focus:ring-[#2C2825]"
          />
        </div>

        {/* File Type Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#555045]">
            <Filter className="w-3.5 h-3.5" />
            <span>Format:</span>
          </div>

          <select
            value={fileTypeFilter}
            onChange={(e) => setFileTypeFilter(e.target.value)}
            className="bg-[#FAF7F2] border border-[#2C2825] rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#2C2825] focus:outline-none"
          >
            <option value="all">All Formats</option>
            <option value="pdf">PDF Documents</option>
            <option value="code">Source Code (.py, .java, .sql)</option>
            <option value="ppt">Slides (.pptx)</option>
            <option value="doc">Documents (.docx)</option>
            <option value="zip">ZIP Archives</option>
          </select>

          <button
            onClick={onOpenUpload}
            className="sketch-btn flex items-center gap-1 bg-[#FEF08A] hover:bg-[#FDE047] text-[#2C2825] px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add File</span>
          </button>
        </div>
      </div>

      {/* FILE GRID */}
      {filteredFiles.length === 0 ? (
        <div className="bg-[#FFFFFF] border-2 border-dashed border-[#2C2825]/40 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF7F2] border border-[#2C2825] flex items-center justify-center text-[#776E5E]">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-sketch text-2xl font-bold text-[#2C2825]">
            No materials found
          </h3>
          <p className="font-hand text-base text-[#666055] max-w-md mx-auto">
            {searchQuery
              ? `No files matching "${searchQuery}" in this view.`
              : 'No notes uploaded for this category yet.'}
          </p>
          <button
            onClick={onOpenUpload}
            className="sketch-btn inline-flex items-center gap-1.5 bg-[#FEF08A] hover:bg-[#FDE047] text-[#2C2825] px-4 py-2 rounded-lg font-bold text-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Upload or Add Note</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFiles.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              subject={subject}
              onPreview={onPreviewFile}
              onDownload={onDownloadFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};
