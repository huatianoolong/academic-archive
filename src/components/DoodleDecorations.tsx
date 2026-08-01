import React from 'react';

// Hand-drawn arrow pointing down or right
export const HandArrow: React.FC<{ className?: string; color?: string; direction?: 'right' | 'down' | 'curved' }> = ({
  className = '',
  color = '#2C2825',
  direction = 'right',
}) => {
  if (direction === 'curved') {
    return (
      <svg className={`w-12 h-12 ${className}`} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 C 40 5, 80 10, 85 50" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M72 42 L 85 50 L 92 36" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  if (direction === 'down') {
    return (
      <svg className={`w-8 h-10 ${className}`} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5 C 18 20, 22 35, 20 50" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 40 L 20 52 L 30 40" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={`w-12 h-6 ${className}`} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20 C 25 18, 50 22, 70 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M58 10 L 72 20 L 58 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Hand-drawn sketchy star
export const HandStar: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#EAB308' }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 3 L 24 14 L 36 15 L 27 23 L 30 35 L 20 28 L 10 35 L 13 23 L 4 15 L 16 14 Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Handwritten circle annotation
export const HandCircle: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#DC2626' }) => (
  <svg className={`absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none ${className}`} viewBox="0 0 120 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 30 C 5 10, 50 5, 105 15 C 118 28, 100 50, 50 55 C 10 58, 2 35, 15 25"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Notebook Tape/Sticker Accent
export const TapeAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-16 h-5 bg-[#F5E8C7]/80 border border-dashed border-[#D4C49D] shadow-xs rotate-[-3deg] pointer-events-none ${className}`} />
);

// Hand-drawn spark/doodle
export const HandDoodleSparkle: React.FC<{ className?: string; color?: string }> = ({ className = '', color = '#2563EB' }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5 V 35 M5 20 H 35 M9 9 L 31 31 M31 9 L 9 31" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
