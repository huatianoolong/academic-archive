export type AcademicYearId = 'foundation' | 'year1' | 'year2' | 'year3';

export type CategoryId = 'lecture-notes' | 'tutorial-exercises' | 'practical' | 'assignments' | 'side-notes';

export interface AcademicYear {
  id: AcademicYearId;
  name: string;
  period: string;
  status: 'active' | 'coming_soon';
  description: string;
  subjectsCount: number;
}

export interface Subject {
  id: string;
  name: string;
  yearId: AcademicYearId;
  color: string;       // HEX primary accent e.g. #DC2626
  bgLight: string;     // Tailwind or CSS light tint background
  border: string;      // CSS border color
  description: string;
  iconName: string;
  code: string;        // e.g. "MAT101"
}

export interface MaterialCategory {
  id: CategoryId;
  name: string;
  iconName: string;
  description: string;
  badgeBg: string;
}

export interface AcademicFile {
  id: string;
  subjectId: string;
  categoryId: CategoryId;
  yearId: AcademicYearId;
  fileName: string;
  fileType: 'pdf' | 'doc' | 'ppt' | 'code' | 'txt' | 'zip' | 'img';
  fileExtension: string; // .pdf, .py, .java, .pptx, .docx, .zip, .png
  fileSize: string;
  updatedAt: string;
  description: string;
  previewSupported: boolean;
  contentPreview?: string; // Markdown / code / formula summary content for preview viewer
  topics?: string[];
  githubPath?: string;
  downloadsCount?: number;
}

export interface SearchResult {
  file: AcademicFile;
  subject: Subject;
  year: AcademicYear;
}
