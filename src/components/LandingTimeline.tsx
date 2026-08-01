import React, { useState } from 'react';
import { AcademicYear, Subject } from '../types';
import { HandArrow, HandStar, TapeAccent, HandDoodleSparkle } from './DoodleDecorations';
import { BookOpen, Sparkles, ArrowRight, Lock, ChevronRight, Folder } from 'lucide-react';

interface LandingTimelineProps {
  years: AcademicYear[];
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
  onSelectYear: (yearId: string) => void;
  onOpenSearch: () => void;
}

export const LandingTimeline: React.FC<LandingTimelineProps> = ({
  years,
  subjects,
  onSelectSubject,
  onSelectYear,
  onOpenSearch,
}) => {
  // Currently active/hovered year ID on the timeline
  const [hoveredYearId, setHoveredYearId] = useState<string | null>('foundation');

  // Filter subjects for the active period
  const getSubjectsForYear = (yearId: string) => {
    return subjects.filter((s) => s.yearId === yearId);
  };

  const activeYearObj = years.find((y) => y.id === (hoveredYearId || 'foundation')) || years[0];
  const activeYearSubjects = getSubjectsForYear(activeYearObj.id);

  return (
    <div className="relative w-full min-h-[calc(100vh-65px)] flex flex-col justify-between items-center px-4 py-4 md:py-8 bg-paper overflow-hidden select-none">
      
      {/* Decorative notebook page margin lines */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-red-300/40 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 left-8 sm:left-14 w-[1px] bg-red-300/20 pointer-events-none hidden md:block" />

      {/* Top Doodles */}
      <div className="absolute top-4 left-16 hidden lg:flex items-center gap-2 pointer-events-none">
        <TapeAccent />
        <span className="font-hand text-base text-[#776E5E] rotate-[-4deg]">
          Personal Learning Archive
        </span>
      </div>

      <div className="absolute top-4 right-12 hidden lg:flex items-center gap-2 pointer-events-none">
        <HandDoodleSparkle color="#DC2626" />
        <span className="font-hand text-base text-[#DC2626] rotate-[2deg]">
          Foundation to Degree
        </span>
      </div>

      {/* CENTER CONTENT: Welcome Headline & Subtitle */}
      <div className="max-w-3xl text-center space-y-3 z-10 my-auto">
        
        {/* Handwritten Tag */}
        <div className="inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#2C2825] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#2C2825] mb-1 transform -rotate-1">
          <HandStar className="w-4 h-4 text-amber-600" />
          <span className="font-hand text-lg md:text-xl font-bold text-[#2C2825]">
            Interactive Student Portfolio & Library
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-sketch text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C2825] tracking-tight leading-none">
          WELCOME TO MY <br />
          <span className="relative inline-block scribble-underline text-[#B91C1C]">
            ACADEMIC ARCHIVE
          </span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#555045] max-w-xl mx-auto leading-relaxed">
          Everything I’ve studied, written, practiced, and created — collected in one place.
          Explore materials across Foundation and Degree Year 1.
        </p>
      </div>

      {/* HORIZONTAL ACADEMIC TIMELINE CONTAINER */}
      <div className="w-full max-w-5xl my-auto z-20">
        
        {/* Timeline Header Label */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2">
            <span className="font-hand text-xl font-bold text-[#2C2825]">
              Academic Timeline
            </span>
            <HandArrow direction="right" className="hidden sm:block text-[#2C2825]" />
          </div>

          <span className="font-hand text-sm text-[#776E5E]">
            Hover or tap a stage to explore subjects
          </span>
        </div>

        {/* TIMELINE TRACK */}
        <div className="relative bg-[#FFFFFF] border-2 border-[#2C2825] rounded-2xl p-2 sm:p-3 shadow-[4px_4px_0px_#2C2825]">
          
          {/* Main Connecting Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[3px] bg-[#E2DACD] -translate-y-1/2 -z-0 rounded-full" />

          {/* Timeline Nodes (Foundation -> Year 1 -> Year 2 -> Year 3) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 relative z-10">
            {years.map((year, index) => {
              const isSelected = hoveredYearId === year.id;
              const isAvailable = year.status === 'active';

              return (
                <div
                  key={year.id}
                  onMouseEnter={() => setHoveredYearId(year.id)}
                  onClick={() => {
                    setHoveredYearId(year.id);
                    if (isAvailable) onSelectYear(year.id);
                  }}
                  className={`relative p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#FEF9C3] border-[#2C2825] shadow-[3px_3px_0px_#2C2825] -translate-y-1'
                      : 'bg-[#FAF7F2] border-[#2C2825]/40 hover:border-[#2C2825] hover:bg-[#FFFFFF]'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-[#2C2825] bg-[#FFFFFF] text-[#2C2825]">
                      0{index + 1}
                    </span>

                    {year.status === 'coming_soon' ? (
                      <span className="flex items-center gap-1 font-hand text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                        <Lock className="w-3 h-3" />
                        Soon
                      </span>
                    ) : (
                      <span className="font-hand text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        {year.subjectsCount} Subjects
                      </span>
                    )}
                  </div>

                  {/* Year Title */}
                  <h3 className="font-sketch text-base sm:text-lg font-bold text-[#2C2825] leading-tight">
                    {year.name}
                  </h3>

                  <p className="font-mono text-[11px] text-[#666055]">
                    {year.period}
                  </p>

                  {/* Selected Indicator Pin */}
                  {isSelected && (
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2C2825] rotate-45 rounded-xs" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SCRAPBOOK FLOATING SUBJECTS PANEL */}
        <div className="mt-4 bg-[#FFFFFF] border-2 border-[#2C2825] rounded-2xl p-4 md:p-5 shadow-[5px_5px_0px_#2C2825] transition-all duration-200">
          
          <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-[#E2DACD] mb-4">
            <div>
              <span className="font-hand text-xs font-bold tracking-widest text-[#888070] uppercase">
                {activeYearObj.period} Archive
              </span>
              <h2 className="font-sketch text-xl sm:text-2xl font-extrabold text-[#2C2825] flex items-center gap-2">
                <span>{activeYearObj.name}</span>
                {activeYearObj.status === 'active' && (
                  <button
                    onClick={() => onSelectYear(activeYearObj.id)}
                    className="font-hand text-sm font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View All {activeYearSubjects.length} Subjects <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </h2>
            </div>

            {activeYearObj.status === 'active' ? (
              <span className="font-hand text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300">
                Active Library
              </span>
            ) : (
              <span className="font-hand text-sm font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-300">
                Under Construction
              </span>
            )}
          </div>

          {/* ACTIVE SUBJECT BUTTONS GRID OR COMING SOON */}
          {activeYearObj.status === 'coming_soon' ? (
            <div className="text-center py-8 px-4 bg-[#FAF7F2] rounded-xl border border-dashed border-[#2C2825]/40 space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center text-amber-700">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-sketch text-2xl text-[#2C2825] font-bold">
                More chapters are being written.
              </h3>
              <p className="font-hand text-base text-[#666055] max-w-md mx-auto">
                {activeYearObj.name} materials will be archived here as coursework and notes progress.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[220px] sm:max-h-[260px] overflow-y-auto pr-1">
              {activeYearSubjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => onSelectSubject(subject)}
                  className="group flex items-center justify-between p-2.5 rounded-xl border-1.5 text-left transition-all duration-150 cursor-pointer hover:shadow-sm"
                  style={{
                    backgroundColor: subject.bgLight,
                    borderColor: subject.border,
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 border border-[#2C2825]"
                      style={{ backgroundColor: subject.color }}
                    />
                    <div className="truncate">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#666055] block">
                        {subject.code}
                      </span>
                      <span className="font-sans text-xs sm:text-sm font-bold text-[#2C2825] truncate block group-hover:underline">
                        {subject.name}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: subject.color }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM FOOTER / QUICK HINT */}
      <div className="w-full max-w-5xl flex items-center justify-between pt-2 pb-1 text-xs text-[#776E5E] font-hand">
        <span>Hand-drawn Portfolio Minimalism • Central Learning Archive</span>
        <button
          onClick={onOpenSearch}
          className="hover:underline flex items-center gap-1 font-bold text-[#2C2825] cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" /> Quick Material Search
        </button>
      </div>
    </div>
  );
};
