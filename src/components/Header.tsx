import React from 'react';
import { Search, Info, PlusCircle, Github, Sparkles } from 'lucide-react';
import { AcademicYear, Subject } from '../types';

interface HeaderProps {
  currentYear?: AcademicYear;
  currentSubject?: Subject;
  activeCategoryName?: string;
  onNavigateHome: () => void;
  onNavigateYear: (yearId: string) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onOpenUpload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentYear,
  currentSubject,
  activeCategoryName,
  onNavigateHome,
  onNavigateYear,
  onOpenSearch,
  onOpenAbout,
  onOpenUpload,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b-2 border-[#2C2825] px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Branding & Breadcrumbs */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-md bg-[#2C2825] text-[#FAF7F2] flex items-center justify-center font-sketch text-lg font-bold shadow-sm group-hover:rotate-[-4deg] transition-transform">
              A
            </div>
            <div>
              <span className="font-sketch font-bold text-lg md:text-xl tracking-wide text-[#2C2825] block leading-none">
                ACADEMIC ARCHIVE
              </span>
              <span className="font-hand text-xs text-[#666055] hidden sm:block">
                Foundation → Degree Year 3
              </span>
            </div>
          </button>

          {/* Breadcrumb path */}
          {(currentYear || currentSubject) && (
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-[#555045] bg-[#EFE9DD] px-3 py-1 rounded-full border border-[#D4CDBF]">
              <span className="text-[#888070]">/</span>
              <button
                onClick={onNavigateHome}
                className="hover:underline text-[#2C2825] cursor-pointer"
              >
                Timeline
              </button>

              {currentYear && (
                <>
                  <span className="text-[#888070]">/</span>
                  <button
                    onClick={() => onNavigateYear(currentYear.id)}
                    className="hover:underline text-[#2C2825] cursor-pointer"
                  >
                    {currentYear.name}
                  </button>
                </>
              )}

              {currentSubject && (
                <>
                  <span className="text-[#888070]">/</span>
                  <span
                    className="font-semibold px-2 py-0.5 rounded text-xs"
                    style={{
                      backgroundColor: `${currentSubject.color}15`,
                      color: currentSubject.color,
                      border: `1px solid ${currentSubject.color}40`,
                    }}
                  >
                    {currentSubject.name}
                  </span>
                </>
              )}

              {activeCategoryName && (
                <>
                  <span className="text-[#888070]">/</span>
                  <span className="text-[#2C2825] font-hand text-base font-bold">
                    {activeCategoryName}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Global Search Button */}
          <button
            onClick={onOpenSearch}
            className="sketch-btn flex items-center gap-2 bg-[#FAF7F2] hover:bg-[#F3EDE2] text-[#2C2825] px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer"
            title="Search academic materials (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#2C2825]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden lg:inline-block text-[10px] bg-[#EAE2D2] text-[#666055] px-1.5 py-0.5 rounded border border-[#C8BEAA]">
              ⌘K
            </kbd>
          </button>

          {/* Add Material Button */}
          <button
            onClick={onOpenUpload}
            className="sketch-btn hidden sm:flex items-center gap-1.5 bg-[#FEF08A] hover:bg-[#FDE047] text-[#2C2825] px-3 py-1.5 rounded-lg text-sm font-bold cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add File</span>
          </button>

          {/* GitHub Repo Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 text-xs text-[#555045] hover:text-[#111111] bg-[#FAF7F2] hover:bg-[#EFE9DD] px-2.5 py-1.5 rounded-lg border border-[#2C2825] transition-colors"
            title="View original GitHub repository"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="font-mono">GitHub Repo</span>
          </a>

          {/* About Archive Button */}
          <button
            onClick={onOpenAbout}
            className="sketch-btn p-1.5 bg-[#FAF7F2] hover:bg-[#EFE9DD] text-[#2C2825] rounded-lg cursor-pointer"
            title="About this academic archive"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
