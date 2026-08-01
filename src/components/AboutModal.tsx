import React from 'react';
import { X, BookOpen, Heart, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { TapeAccent, HandStar, HandDoodleSparkle } from './DoodleDecorations';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2825]/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] border-2 border-[#2C2825] rounded-2xl shadow-[8px_8px_0px_#2C2825] w-full max-w-xl overflow-hidden flex flex-col relative">
        
        {/* Tape Accent */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <TapeAccent />
        </div>

        {/* Modal Header */}
        <div className="bg-[#FFFFFF] border-b-2 border-[#2C2825] p-5 pt-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HandDoodleSparkle color="#DC2626" />
            <h2 className="font-sketch font-bold text-2xl text-[#2C2825]">
              About This Archive
            </h2>
          </div>
          <button
            onClick={onClose}
            className="sketch-btn p-1.5 bg-[#FAF7F2] hover:bg-[#EFE9DD] rounded-lg text-[#2C2825] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 font-sans text-sm text-[#2C2825] overflow-y-auto max-h-[70vh]">
          <div className="bg-[#FEF3C7] border border-[#2C2825] p-4 rounded-xl shadow-[2px_2px_0px_#2C2825]">
            <p className="font-hand text-lg font-bold text-[#2C2825] leading-relaxed">
              "This website is my personal academic archive — a central place where I keep the notes, exercises, practical labs, group assignments, and little discoveries collected throughout my studies."
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-sketch text-lg font-bold text-[#2C2825]">
              Design Identity: Hand-drawn Portfolio Minimalism
            </h3>
            <p className="text-xs text-[#555045] leading-relaxed">
              Built to feel like an interactive student knowledge notebook rather than a generic cloud drive or SaaS dashboard. Every subject maintains its own distinct color identity, matching handwritten tags, sketch-style borders, and paper texture details.
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-dashed border-[#E2DACD]">
            <h3 className="font-sketch text-base font-bold text-[#2C2825]">
              Core Archive Structure
            </h3>
            <ul className="space-y-1.5 text-xs text-[#555045]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Foundation Stage:</strong> 9 subjects spanning math, computing, programming & general skills.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Degree Year 1:</strong> 10 computer science subjects including OOP, OS, Databases & Data Structures.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Degree Year 2 & 3:</strong> Scalable sections designed for future course updates.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FFFFFF] border-t-2 border-[#2C2825] p-3 text-center text-xs font-hand text-[#776E5E] flex items-center justify-between px-6">
          <span>Crafted for Learning & Portfolio Showcase</span>
          <button
            onClick={onClose}
            className="sketch-btn font-bold px-3 py-1 bg-[#2C2825] text-white rounded-md cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
