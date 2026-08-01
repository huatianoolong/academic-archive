import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LandingTimeline } from './components/LandingTimeline';
import { SubjectView } from './components/SubjectView';
import { FilePreviewModal } from './components/FilePreviewModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AboutModal } from './components/AboutModal';
import { UploadModal } from './components/UploadModal';

import { ACADEMIC_YEARS, SUBJECTS, SAMPLE_FILES } from './data/academicData';
import { Subject, AcademicFile } from './types';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'landing' | 'subject'>('landing');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedYearId, setSelectedYearId] = useState<string>('foundation');

  // File Repository State (initialized with sample data + stored user files)
  const [allFiles, setAllFiles] = useState<AcademicFile[]>(() => {
    const saved = localStorage.getItem('academic_archive_files');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading saved files', e);
      }
    }
    return SAMPLE_FILES;
  });

  // Save files to localStorage on change
  useEffect(() => {
    localStorage.setItem('academic_archive_files', JSON.stringify(allFiles));
  }, [allFiles]);

  // Modal States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<AcademicFile | null>(null);

  // Selected Objects
  const selectedSubject = SUBJECTS.find((s) => s.id === selectedSubjectId) || null;
  const currentYearObj = ACADEMIC_YEARS.find((y) => y.id === (selectedSubject?.yearId || selectedYearId)) || ACADEMIC_YEARS[0];

  // Navigation Handlers
  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubjectId(subject.id);
    setSelectedYearId(subject.yearId);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectYear = (yearId: string) => {
    setSelectedYearId(yearId);
    const firstSubjectInYear = SUBJECTS.find((s) => s.yearId === yearId);
    if (firstSubjectInYear) {
      handleSelectSubject(firstSubjectInYear);
    }
  };

  const handleNavigateHome = () => {
    setCurrentView('landing');
    setSelectedSubjectId(null);
  };

  // Add User Custom File
  const handleAddFile = (newFile: AcademicFile) => {
    setAllFiles((prev) => [newFile, ...prev]);
    // Navigate to that file's subject if not there
    const fileSubject = SUBJECTS.find((s) => s.id === newFile.subjectId);
    if (fileSubject) {
      handleSelectSubject(fileSubject);
    }
  };

  // Real File Download Handler
  const handleDownloadFile = (file: AcademicFile) => {
    // Generate actual file blob download
    const content = file.contentPreview || `Academic Archive File: ${file.fileName}\nTopic: ${file.description}\nSource: GitHub Academic Portfolio Repository`;
    const mimeType = file.fileType === 'code' ? 'text/plain' : 'application/pdf';
    
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-paper text-[#2C2825] font-sans flex flex-col antialiased selection:bg-[#FEF08A]">
      
      {/* Top Bar Header */}
      <Header
        currentYear={currentView === 'subject' ? currentYearObj : undefined}
        currentSubject={currentView === 'subject' ? selectedSubject || undefined : undefined}
        onNavigateHome={handleNavigateHome}
        onNavigateYear={handleSelectYear}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* MAIN VIEW SWITCHER */}
      <main className="flex-1">
        {currentView === 'landing' ? (
          <LandingTimeline
            years={ACADEMIC_YEARS}
            subjects={SUBJECTS}
            onSelectSubject={handleSelectSubject}
            onSelectYear={handleSelectYear}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        ) : selectedSubject ? (
          <SubjectView
            subject={selectedSubject}
            year={currentYearObj}
            files={allFiles.filter((f) => f.subjectId === selectedSubject.id)}
            onBack={handleNavigateHome}
            onPreviewFile={(f) => setPreviewFile(f)}
            onDownloadFile={handleDownloadFile}
            onOpenUpload={() => setIsUploadOpen(true)}
          />
        ) : null}
      </main>

      {/* MODALS */}
      <FilePreviewModal
        file={previewFile}
        subject={selectedSubject || undefined}
        onClose={() => setPreviewFile(null)}
        onDownload={handleDownloadFile}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={SUBJECTS}
        years={ACADEMIC_YEARS}
        files={allFiles}
        onSelectSubject={handleSelectSubject}
        onSelectFile={(f, s) => {
          handleSelectSubject(s);
          setPreviewFile(f);
        }}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        subjects={SUBJECTS}
        years={ACADEMIC_YEARS}
        onAddFile={handleAddFile}
      />
    </div>
  );
}
