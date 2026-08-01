import React, { useState, useEffect } from 'react';
import { AcademicFile, Subject, AcademicYear } from '../types';
import { Search, X, BookOpen, ArrowRight, FileText, CornerDownLeft } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  years: AcademicYear[];
  files: AcademicFile[];
  onSelectSubject: (subject: Subject) => void;
  onSelectFile: (file: AcademicFile, subject: Subject) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  subjects,
  years,
  files,
  onSelectSubject,
  onSelectFile,
}) => {
  const [query, setQuery] = useState('');

  // Key shortcut to listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          /* Trigger open handled via parent or prop */
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter matching subjects
  const matchingSubjects = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.code.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase())
  );

  // Filter matching files
  const matchingFiles = files.filter(
    (f) =>
      f.fileName.toLowerCase().includes(query.toLowerCase()) ||
      f.description.toLowerCase().includes(query.toLowerCase()) ||
      (f.topics && f.topics.some((t) => t.toLowerCase().includes(query.toLowerCase())))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-[#2C2825]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] border-2 border-[#2C2825] rounded-2xl shadow-[8px_8px_0px_#2C2825] w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* SEARCH INPUT BAR */}
        <div className="bg-[#FFFFFF] border-b-2 border-[#2C2825] p-3.5 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#2C2825] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search files, subjects, topics (e.g. 'SQL', 'binary tree', 'calculus')..."
            className="w-full bg-transparent text-sm sm:text-base font-bold text-[#2C2825] placeholder-[#888070] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#EFE9DD] rounded-lg text-[#2C2825] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEARCH RESULTS LIST */}
        <div className="p-4 overflow-y-auto space-y-5 flex-1">
          
          {/* Quick Subject Suggestions */}
          {query.trim() === '' ? (
            <div className="space-y-3">
              <span className="font-hand text-sm font-bold text-[#776E5E] block">
                Popular Academic Topics
              </span>
              <div className="flex flex-wrap gap-2">
                {['Calculus', 'SQL Queries', 'DOM Manipulation', 'Binary Search Tree', 'Process Scheduling', 'ER Diagram'].map(
                  (topic) => (
                    <button
                      key={topic}
                      onClick={() => setQuery(topic)}
                      className="sketch-btn text-xs font-bold text-[#2C2825] bg-[#FFFFFF] hover:bg-[#FEF08A] px-3 py-1.5 rounded-lg border border-[#2C2825] cursor-pointer"
                    >
                      #{topic}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <>
              {/* SUBJECTS RESULTS */}
              {matchingSubjects.length > 0 && (
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#888070] uppercase">
                    Matching Subjects ({matchingSubjects.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchingSubjects.map((subject) => {
                      const yearObj = years.find((y) => y.id === subject.yearId);
                      return (
                        <button
                          key={subject.id}
                          onClick={() => {
                            onSelectSubject(subject);
                            onClose();
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-[#2C2825] bg-white hover:bg-[#FEF9C3] text-left cursor-pointer transition-colors"
                        >
                          <div>
                            <span className="font-mono text-[10px] text-[#666055] font-bold block">
                              {yearObj?.name} • {subject.code}
                            </span>
                            <span
                              className="font-sans text-xs font-bold block"
                              style={{ color: subject.color }}
                            >
                              {subject.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#2C2825]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* FILES RESULTS */}
              {matchingFiles.length > 0 && (
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#888070] uppercase">
                    Matching Files ({matchingFiles.length})
                  </span>
                  <div className="space-y-2">
                    {matchingFiles.map((file) => {
                      const subject = subjects.find((s) => s.id === file.subjectId);
                      if (!subject) return null;

                      return (
                        <div
                          key={file.id}
                          onClick={() => {
                            onSelectFile(file, subject);
                            onClose();
                          }}
                          className="p-3 rounded-xl border border-[#2C2825] bg-white hover:bg-[#F0F9FF] text-left cursor-pointer transition-colors flex items-center justify-between gap-3"
                        >
                          <div className="flex items-start gap-2.5 min-w-0">
                            <FileText className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                            <div className="min-w-0">
                              <h4 className="font-sans font-bold text-xs sm:text-sm text-[#2C2825] truncate">
                                {file.fileName}
                              </h4>
                              <p className="font-sans text-[11px] text-[#555045] line-clamp-1">
                                {file.description}
                              </p>
                              <span
                                className="font-mono text-[10px] font-bold"
                                style={{ color: subject.color }}
                              >
                                {subject.name} ({file.fileSize})
                              </span>
                            </div>
                          </div>

                          <span className="sketch-btn text-[10px] font-bold px-2 py-1 bg-[#FAF7F2] border border-[#2C2825] rounded shrink-0">
                            Open
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {matchingSubjects.length === 0 && matchingFiles.length === 0 && (
                <div className="text-center py-8 text-[#776E5E]">
                  <p className="font-sketch text-lg font-bold">No results found for "{query}"</p>
                  <p className="font-hand text-sm">Try searching for subjects or topics like 'Calculus', 'Java', or 'SQL'</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="bg-[#EFE9DD] p-2.5 text-center text-xs font-mono text-[#666055] border-t border-[#2C2825]/20 flex items-center justify-between px-4">
          <span>Global Academic Search</span>
          <span className="flex items-center gap-1">
            Press <kbd className="bg-white px-1 rounded border border-[#2C2825]/30">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
