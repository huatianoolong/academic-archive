import { AcademicYear, Subject, MaterialCategory, AcademicFile } from '../types';

export const ACADEMIC_YEARS: AcademicYear[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    period: '2023 - 2024',
    status: 'active',
    description: 'Core foundational principles of computing, mathematics, programming basics, and general academic skills.',
    subjectsCount: 9,
  },
  {
    id: 'year1',
    name: 'Degree Year 1',
    period: '2024 - 2025',
    status: 'active',
    description: 'Deepening computer science fundamentals: data structures, OOP, operating systems, database architecture, and software design.',
    subjectsCount: 10,
  },
  {
    id: 'year2',
    name: 'Degree Year 2',
    period: '2025 - 2026',
    status: 'coming_soon',
    description: 'Advanced software development, mobile apps, web frameworks, network security, and machine learning principles.',
    subjectsCount: 0,
  },
  {
    id: 'year3',
    name: 'Degree Year 3',
    period: '2026 - 2027',
    status: 'coming_soon',
    description: 'Final Year Capstone Project, industry internship, cloud architecture, distributed systems, and specialization modules.',
    subjectsCount: 0,
  },
];

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: 'lecture-notes',
    name: 'Lecture Notes',
    iconName: 'BookOpen',
    description: 'Slides, annotated lecture transcripts, key formula sheets, and chapter summaries.',
    badgeBg: '#FEF3C7',
  },
  {
    id: 'tutorial-exercises',
    name: 'Tutorial Exercises',
    iconName: 'Edit3',
    description: 'Weekly tutorial question sets, solved practice problems, and step-by-step solutions.',
    badgeBg: '#E0E7FF',
  },
  {
    id: 'practical',
    name: 'Practical',
    iconName: 'Terminal',
    description: 'Lab exercise workbooks, source code snippets, database queries, and environment configs.',
    badgeBg: '#DCFCE7',
  },
  {
    id: 'assignments',
    name: 'Assignments / Projects',
    iconName: 'FolderKanban',
    description: 'Coursework submissions, group project documentation, research reports, and presentation decks.',
    badgeBg: '#FCE7F3',
  },
  {
    id: 'side-notes',
    name: 'Side Notes',
    iconName: 'StickyNote',
    description: 'Personal study cheat sheets, revision diagrams, exam tips, and quick reference summaries.',
    badgeBg: '#F3E8FF',
  },
];

export const SUBJECTS: Subject[] = [
  // --- FOUNDATION (9 Subjects) ---
  {
    id: 'f-info-system',
    name: 'Intro to Information System',
    yearId: 'foundation',
    color: '#65A30D', // Olive Green
    bgLight: '#F7FEE7',
    border: '#A3E635',
    description: 'Fundamentals of information processing, enterprise systems, data hierarchy, business intelligence, and IT infrastructure.',
    iconName: 'Database',
    code: 'FND101',
  },
  {
    id: 'f-english-2',
    name: 'English II',
    yearId: 'foundation',
    color: '#E11D48', // Rose Red
    bgLight: '#FFF1F2',
    border: '#FDA4AF',
    description: 'Academic writing techniques, technical essay drafting, critical literature analysis, and professional presentation skills.',
    iconName: 'PenTool',
    code: 'FND102',
  },
  {
    id: 'f-computing',
    name: 'Intro to Computing',
    yearId: 'foundation',
    color: '#0284C7', // Sky Blue
    bgLight: '#F0F9FF',
    border: '#7DD3FC',
    description: 'Hardware concepts, binary representations, digital logic gates, operating system components, and history of computing.',
    iconName: 'Cpu',
    code: 'FND103',
  },
  {
    id: 'f-comp-math',
    name: 'Intro to Computing Mathematics',
    yearId: 'foundation',
    color: '#6366F1', // Indigo
    bgLight: '#EEF2FF',
    border: '#A5B4FC',
    description: 'Set theory, matrix algebra, boolean logic, modular arithmetic, and mathematical foundations for computer science.',
    iconName: 'Binary',
    code: 'FND104',
  },
  {
    id: 'f-algorithm',
    name: 'Intro to Algorithm',
    yearId: 'foundation',
    color: '#7C3AED', // Purple
    bgLight: '#F5F3FF',
    border: '#C4B5FD',
    description: 'Problem-solving logic, flowcharting, pseudocode construction, control flow structures, and introductory sorting/searching.',
    iconName: 'GitBranch',
    code: 'FND105',
  },
  {
    id: 'f-critical-thinking',
    name: 'Critical and Creative Thinking Skills',
    yearId: 'foundation',
    color: '#CA8A04', // Golden Mustard
    bgLight: '#FEFCE8',
    border: '#FDE047',
    description: 'Cognitive biases, inductive & deductive reasoning, lateral thinking techniques, root-cause analysis, and structured problem decomposition.',
    iconName: 'Lightbulb',
    code: 'FND106',
  },
  {
    id: 'f-mathematics',
    name: 'Mathematics',
    yearId: 'foundation',
    color: '#DC2626', // Bright Crimson Red
    bgLight: '#FEF2F2',
    border: '#FCA5A5',
    description: 'Algebraic functions, differential and integral calculus, trigonometry, coordinate geometry, and sequence & series.',
    iconName: 'Sigma',
    code: 'FND107',
  },
  {
    id: 'f-practical-it',
    name: 'Practical IT Skills',
    yearId: 'foundation',
    color: '#0D9488', // Teal
    bgLight: '#CCFBF1',
    border: '#5EEAD4',
    description: 'Hands-on exposure to productivity software, spreadsheet formulas, web publishing, basic shell operations, and document formatting.',
    iconName: 'Laptop',
    code: 'FND108',
  },
  {
    id: 'f-web-programming',
    name: 'Web Programming',
    yearId: 'foundation',
    color: '#D97706', // Warm Amber
    bgLight: '#FFFBEB',
    border: '#FCD34D',
    description: 'HTML5 semantic markup, CSS3 styling & Flexbox layouts, JavaScript DOM manipulation, and responsive web design basics.',
    iconName: 'Code',
    code: 'FND109',
  },

  // --- DEGREE YEAR 1 (10 Subjects) ---
  {
    id: 'y1-computer-arch',
    name: 'Computer Architecture and Organisation',
    yearId: 'year1',
    color: '#D946EF', // Fuchsia
    bgLight: '#FDF4FF',
    border: '#F0ABFC',
    description: 'CPU microarchitecture, instruction set architecture (ISA), memory hierarchy, cache mapping, I/O organization, and pipelining.',
    iconName: 'HardDrive',
    code: 'CSC201',
  },
  {
    id: 'y1-oop',
    name: 'Object Oriented Programming',
    yearId: 'year1',
    color: '#2563EB', // Royal Blue
    bgLight: '#EFF6FF',
    border: '#93C5FD',
    description: 'Encapsulation, inheritance, polymorphism, abstraction, interface design, exception handling, and Java application development.',
    iconName: 'Box',
    code: 'CSC202',
  },
  {
    id: 'y1-discrete-struct',
    name: 'Discrete Structure',
    yearId: 'year1',
    color: '#4F46E5', // Deep Blue-Indigo
    bgLight: '#EEF2FF',
    border: '#818CF8',
    description: 'Graph theory, trees, mathematical proofs, relations and functions, recurrence relations, combinatorics, and automata basics.',
    iconName: 'Network',
    code: 'CSC203',
  },
  {
    id: 'y1-database-sys',
    name: 'Database System',
    yearId: 'year1',
    color: '#0284C7', // Ocean Blue
    bgLight: '#F0F9FF',
    border: '#38BDF8',
    description: 'Entity-Relationship (ER) modeling, relational database design, SQL querying, 1NF/2NF/3NF normalization, and transaction processing.',
    iconName: 'Table',
    code: 'CSC204',
  },
  {
    id: 'y1-software-eng',
    name: 'Principle of Software Engineering',
    yearId: 'year1',
    color: '#4338CA', // Deep Indigo
    bgLight: '#EEF2FF',
    border: '#A5B4FC',
    description: 'Software development lifecycles (Agile/Waterfall), requirements engineering, UML modeling, software testing, and maintenance.',
    iconName: 'Layers',
    code: 'CSC205',
  },
  {
    id: 'y1-adv-programming',
    name: 'Advanced Programming',
    yearId: 'year1',
    color: '#0891B2', // Deep Cyan
    bgLight: '#ECFEFF',
    border: '#67E8F9',
    description: 'C++ memory management, pointers, templates, multi-threading, file I/O operations, design patterns, and standard template library (STL).',
    iconName: 'TerminalSquare',
    code: 'CSC206',
  },
  {
    id: 'y1-operating-system',
    name: 'Operating System',
    yearId: 'year1',
    color: '#059669', // Emerald Green
    bgLight: '#ECFDF5',
    border: '#6EE7B7',
    description: 'Process scheduling, concurrency & deadlocks, virtual memory management, page replacement algorithms, and file system architecture.',
    iconName: 'Sliders',
    code: 'CSC207',
  },
  {
    id: 'y1-system-analysis',
    name: 'System Analysis and Design',
    yearId: 'year1',
    color: '#DB2777', // Deep Pink
    bgLight: '#FDF2F8',
    border: '#F472B6',
    description: 'System feasibility study, data flow diagrams (DFD), use case scenarios, interface design, prototype evaluation, and system specification.',
    iconName: 'Workflow',
    code: 'CSC208',
  },
  {
    id: 'y1-data-structure',
    name: 'Data Structure and Analysis',
    yearId: 'year1',
    color: '#B45309', // Deep Amber
    bgLight: '#FFFBEB',
    border: '#FBBF24',
    description: 'Arrays, linked lists, stacks, queues, binary search trees, AVL trees, hash tables, asymptotic notation (Big-O analysis), and graph algorithms.',
    iconName: 'Share2',
    code: 'CSC209',
  },
  {
    id: 'y1-social-innovation',
    name: 'Social Innovation Projects (MPU)',
    yearId: 'year1',
    color: '#16A34A', // Forest Green
    bgLight: '#F0FDF4',
    border: '#86EFAC',
    description: 'Community service initiatives, sustainable social innovation proposals, project budgeting, group teamwork, and social impact measurement.',
    iconName: 'Users',
    code: 'MPU201',
  },
];

export const SAMPLE_FILES: AcademicFile[] = [
  // --- MATHEMATICS (Foundation) ---
  {
    id: 'f-math-ln1',
    subjectId: 'f-mathematics',
    categoryId: 'lecture-notes',
    yearId: 'foundation',
    fileName: 'Week 01 — Fundamentals of Functions & Graphs.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '3.4 MB',
    updatedAt: '2023-10-12',
    description: 'Comprehensive lecture slides covering domain, range, composite functions, and inverse functions with step-by-step graphical proofs.',
    previewSupported: true,
    topics: ['Functions', 'Domain & Range', 'Inverse Functions', 'Graphs'],
    githubPath: 'Foundation/Mathematics/Lecture Notes/Week 01 — Fundamentals of Functions & Graphs.pdf',
    downloadsCount: 142,
    contentPreview: `# Week 01 — Fundamentals of Functions & Graphs

## Key Formulas & Concepts

### 1. Function Definition
A relation $f: A \\to B$ is a function if every element $x \\in A$ is mapped to exactly one unique element $y \\in B$.

### 2. Composite Functions
For $f(x) = 2x + 3$ and $g(x) = x^2 - 1$:
$$(f \\circ g)(x) = f(g(x)) = 2(x^2 - 1) + 3 = 2x^2 + 1$$

### 3. Inverse Function Derivation
To find $f^{-1}(x)$ for $y = \\frac{2x - 1}{x + 3}$:
1. Swap $x$ and $y$: $x = \\frac{2y - 1}{y + 3}$
2. Solve for $y$: $x(y + 3) = 2y - 1 \\implies xy + 3x = 2y - 1$
3. $y(x - 2) = -1 - 3x \\implies f^{-1}(x) = \\frac{3x + 1}{2 - x}$

---
*Note: Always check domain restriction where $x \\neq 2$.*`,
  },
  {
    id: 'f-math-ln2',
    subjectId: 'f-mathematics',
    categoryId: 'lecture-notes',
    yearId: 'foundation',
    fileName: 'Week 04 — Differential Calculus & Rates of Change.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '4.2 MB',
    updatedAt: '2023-11-04',
    description: 'Derivatives, power rule, product rule, quotient rule, chain rule, and physical applications to motion and optimization.',
    previewSupported: true,
    topics: ['Calculus', 'Derivatives', 'Chain Rule', 'Optimization'],
    githubPath: 'Foundation/Mathematics/Lecture Notes/Week 04 — Differential Calculus.pdf',
    downloadsCount: 218,
    contentPreview: `# Week 04 — Differential Calculus

## Differentiation Rules Summary

- **Power Rule:** $\\frac{d}{dx}(x^n) = n x^{n-1}$
- **Product Rule:** $\\frac{d}{dx}(u \\cdot v) = u'v + uv'$
- **Quotient Rule:** $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}$
- **Chain Rule:** $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$

### Worked Example: Product Rule
Differentiate $f(x) = x^3 \\sin(x)$:
$$f'(x) = 3x^2 \\sin(x) + x^3 \\cos(x) = x^2(3\\sin x + x\\cos x)$$`,
  },
  {
    id: 'f-math-tut1',
    subjectId: 'f-mathematics',
    categoryId: 'tutorial-exercises',
    yearId: 'foundation',
    fileName: 'Tutorial 03 — Trigonometric Identities Solved.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '1.8 MB',
    updatedAt: '2023-10-28',
    description: 'Handwritten solution set for Tutorial 3 covering double angle formulas and solving trigonometric equations in the range [0, 2π].',
    previewSupported: true,
    topics: ['Trigonometry', 'Double Angle Formulas', 'Equations'],
    githubPath: 'Foundation/Mathematics/Tutorial Exercises/Tutorial 03 Solved.pdf',
    downloadsCount: 95,
    contentPreview: `# Tutorial 03 — Trigonometric Identities Solutions

### Question 4
Prove that $\\frac{\\sin 2\\theta}{1 + \\cos 2\\theta} = \\tan \\theta$.

**Proof:**
LHS = $\\frac{2\\sin\\theta\\cos\\theta}{1 + (2\\cos^2\\theta - 1)}$
LHS = $\\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta =$ RHS. Q.E.D.`,
  },
  {
    id: 'f-math-sn1',
    subjectId: 'f-mathematics',
    categoryId: 'side-notes',
    yearId: 'foundation',
    fileName: 'Calculus Cheat Sheet & Quick Exam Tips.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '950 KB',
    updatedAt: '2023-12-01',
    description: 'Handcrafted 2-page revision summary containing common standard integrals, trigonometric substitutions, and common integration mistakes.',
    previewSupported: true,
    topics: ['Calculus', 'Exam Tips', 'Integration', 'Cheat Sheet'],
    githubPath: 'Foundation/Mathematics/Side Notes/Calculus Cheat Sheet.pdf',
    downloadsCount: 310,
    contentPreview: `# Calculus Final Exam Quick Reference

## Integration by Parts
$$\\int u \\, dv = uv - \\int v \\, du$$
*Mnemonic for choosing $u$: **LIATE***
- **L**: Logarithmic ($ln x$)
- **I**: Inverse trig ($\\arctan x$)
- **A**: Algebraic ($x^2, 3x$)
- **T**: Trig ($\\sin x, \\cos x$)
- **E**: Exponential ($e^x$)`,
  },

  // --- WEB PROGRAMMING (Foundation) ---
  {
    id: 'f-web-prac1',
    subjectId: 'f-web-programming',
    categoryId: 'practical',
    yearId: 'foundation',
    fileName: 'Lab 05 — Interactive DOM Calculator.zip',
    fileType: 'zip',
    fileExtension: '.zip',
    fileSize: '1.2 MB',
    updatedAt: '2023-11-15',
    description: 'Complete source package containing index.html, style.css, and app.js implementing an interactive browser calculator with history logging.',
    previewSupported: true,
    topics: ['JavaScript', 'DOM Manipulation', 'CSS Grid', 'Events'],
    githubPath: 'Foundation/Web Programming/Practical/Lab 05 DOM Calculator.zip',
    downloadsCount: 88,
    contentPreview: `// app.js snippet - Event listener registration
const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-val');
    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});`,
  },
  {
    id: 'f-web-assign1',
    subjectId: 'f-web-programming',
    categoryId: 'assignments',
    yearId: 'foundation',
    fileName: 'Final Project — Personal Academic Portfolio Design.docx',
    fileType: 'doc',
    fileExtension: '.docx',
    fileSize: '2.7 MB',
    updatedAt: '2023-12-10',
    description: 'Project proposal document detailing wireframes, color palette selections, accessibility scores, and responsive mobile testing logs.',
    previewSupported: true,
    topics: ['Portfolio Proposal', 'UI/UX Wireframes', 'HTML5/CSS3'],
    githubPath: 'Foundation/Web Programming/Assignments/Final Project Proposal.docx',
    downloadsCount: 164,
  },

  // --- INTRO TO ALGORITHM (Foundation) ---
  {
    id: 'f-algo-ln1',
    subjectId: 'f-algorithm',
    categoryId: 'lecture-notes',
    yearId: 'foundation',
    fileName: 'Chapter 03 — Flowcharts & Pseudocode Conventions.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '2.9 MB',
    updatedAt: '2023-10-18',
    description: 'Standard ANSI flowchart symbols, structured decision trees, pseudocode indentation rules, and loop invariants.',
    previewSupported: true,
    topics: ['Pseudocode', 'Flowcharts', 'Control Structures'],
    githubPath: 'Foundation/Intro to Algorithm/Lecture Notes/Chapter 03 Pseudocode.pdf',
    downloadsCount: 130,
    contentPreview: `# Chapter 03 — Pseudocode Conventions

## Standard Loop Syntax

\`\`\`text
BEGIN FindMax(Array A, Integer N)
  SET maxVal = A[0]
  FOR i = 1 TO N - 1 DO
    IF A[i] > maxVal THEN
      SET maxVal = A[i]
    END IF
  END FOR
  RETURN maxVal
END FindMax
\`\`\``,
  },
  {
    id: 'f-algo-prac1',
    subjectId: 'f-algorithm',
    categoryId: 'practical',
    yearId: 'foundation',
    fileName: 'sorting_visualizer_demo.py',
    fileType: 'code',
    fileExtension: '.py',
    fileSize: '18 KB',
    updatedAt: '2023-11-20',
    description: 'Python script implementing Bubble Sort, Selection Sort, and Insertion Sort with step-by-step array state printing.',
    previewSupported: true,
    topics: ['Python', 'Sorting Algorithms', 'Bubble Sort', 'Insertion Sort'],
    githubPath: 'Foundation/Intro to Algorithm/Practical/sorting_visualizer.py',
    downloadsCount: 175,
    contentPreview: `# sorting_visualizer.py
def bubble_sort(arr):
    n = len(arr)
    print(f"Initial Array: {arr}")
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        print(f"Pass {i+1}: {arr}")
        if not swapped:
            break
    return arr

if __name__ == "__main__":
    sample = [64, 34, 25, 12, 22, 11, 90]
    print("--- Bubble Sort Step-By-Step ---")
    bubble_sort(sample)`,
  },

  // --- DATABASE SYSTEM (Degree Year 1) ---
  {
    id: 'y1-db-ln1',
    subjectId: 'y1-database-sys',
    categoryId: 'lecture-notes',
    yearId: 'year1',
    fileName: 'Module 02 — ER Modeling & Relational Schema Mapping.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '3.8 MB',
    updatedAt: '2024-03-05',
    description: 'Entity sets, relationship cardinalities (1:1, 1:N, M:N), weak entities, ternary relationships, and conversion to relational tables.',
    previewSupported: true,
    topics: ['ER Diagram', 'Database Schema', 'Cardinality', 'Keys'],
    githubPath: 'Degree Year 1/Database System/Lecture Notes/Module 02 ER Modeling.pdf',
    downloadsCount: 240,
    contentPreview: `# Module 02 — Entity-Relationship (ER) Modeling

## Cardinality Ratios
- **1 : 1 (One-to-One):** e.g., Employee $\\leftrightarrow$ Managed Department.
- **1 : N (One-to-Many):** e.g., Department $\\leftrightarrow$ Employees. Foreign key goes into the 'Many' side.
- **M : N (Many-to-Many):** e.g., Student $\\leftrightarrow$ Course. Requires an associative junction table (e.g. Enrollment).

## Converting M:N to Relational Schema
\`\`\`sql
CREATE TABLE Enrollment (
    student_id INT,
    course_id INT,
    grade VARCHAR(2),
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(id),
    FOREIGN KEY (course_id) REFERENCES Course(id)
);
\`\`\``,
  },
  {
    id: 'y1-db-prac1',
    subjectId: 'y1-database-sys',
    categoryId: 'practical',
    yearId: 'year1',
    fileName: 'Lab_04_Complex_SQL_Queries.sql',
    fileType: 'code',
    fileExtension: '.sql',
    fileSize: '12 KB',
    updatedAt: '2024-04-10',
    description: 'SQL script with INNER/LEFT JOINs, subqueries, GROUP BY, HAVING clauses, window functions, and view definitions.',
    previewSupported: true,
    topics: ['SQL', 'Joins', 'Aggregations', 'Subqueries'],
    githubPath: 'Degree Year 1/Database System/Practical/Lab_04_Queries.sql',
    downloadsCount: 198,
    contentPreview: `-- Lab 04 Complex SQL Queries Solution
-- Find top 3 students by GPA per department using DENSE_RANK()

WITH RankedStudents AS (
    SELECT 
        s.student_id,
        s.first_name,
        s.last_name,
        d.department_name,
        s.gpa,
        DENSE_RANK() OVER (PARTITION BY s.department_id ORDER BY s.gpa DESC) as rank
    FROM Students s
    JOIN Departments d ON s.department_id = d.department_id
)
SELECT student_id, first_name, last_name, department_name, gpa
FROM RankedStudents
WHERE rank <= 3;`,
  },
  {
    id: 'y1-db-sn1',
    subjectId: 'y1-database-sys',
    categoryId: 'side-notes',
    yearId: 'year1',
    fileName: 'Normalization Quick Guide (1NF to 3NF & BCNF).pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '1.1 MB',
    updatedAt: '2024-05-02',
    description: 'Concise 3-page guide explaining functional dependencies, partial dependencies, transitive dependencies, and normal form rules.',
    previewSupported: true,
    topics: ['Normalization', '1NF', '2NF', '3NF', 'BCNF'],
    githubPath: 'Degree Year 1/Database System/Side Notes/Normalization Cheat Sheet.pdf',
    downloadsCount: 420,
    contentPreview: `# Database Normalization Rules Summary

### 1NF (First Normal Form)
- All attribute values must be **atomic** (no multi-valued or composite attributes).
- Every record must be uniquely identifiable by a primary key.

### 2NF (Second Normal Form)
- Must be in **1NF**.
- No **partial functional dependency**: every non-prime attribute must depend on the *entire* primary key (relevant when PK is composite).

### 3NF (Third Normal Form)
- Must be in **2NF**.
- No **transitive dependency**: $A \\to B$ and $B \\to C \\implies$ non-key attributes cannot determine other non-key attributes.`,
  },

  // --- OBJECT ORIENTED PROGRAMMING (Degree Year 1) ---
  {
    id: 'y1-oop-prac1',
    subjectId: 'y1-oop',
    categoryId: 'practical',
    yearId: 'year1',
    fileName: 'LibraryManagementSystem.java',
    fileType: 'code',
    fileExtension: '.java',
    fileSize: '24 KB',
    updatedAt: '2024-02-22',
    description: 'Object-oriented Java application utilizing polymorphism, interfaces, generic collections, and file persistence for library operations.',
    previewSupported: true,
    topics: ['Java', 'OOP Principles', 'Interfaces', 'Generics'],
    githubPath: 'Degree Year 1/Object Oriented Programming/Practical/LibraryManagementSystem.java',
    downloadsCount: 165,
    contentPreview: `// LibraryManagementSystem.java
import java.util.*;

abstract class LibraryItem {
    private String id;
    private String title;
    private boolean isBorrowed;

    public LibraryItem(String id, String title) {
        this.id = id;
        this.title = title;
        this.isBorrowed = false;
    }

    public abstract double calculateLateFee(int daysOverdue);

    public String getTitle() { return title; }
    public boolean isBorrowed() { return isBorrowed; }
    public void setBorrowed(boolean status) { this.isBorrowed = status; }
}

class Book extends LibraryItem {
    private String author;

    public Book(String id, String title, String author) {
        super(id, title);
        this.author = author;
    }

    @Override
    public double calculateLateFee(int daysOverdue) {
        return daysOverdue * 0.50; // $0.50 per day
    }
}`,
  },

  // --- OPERATING SYSTEM (Degree Year 1) ---
  {
    id: 'y1-os-ln1',
    subjectId: 'y1-operating-system',
    categoryId: 'lecture-notes',
    yearId: 'year1',
    fileName: 'Chapter 05 — CPU Process Scheduling Algorithms.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '4.5 MB',
    updatedAt: '2024-03-28',
    description: 'First-Come First-Served (FCFS), Shortest Job First (SJF), Priority Scheduling, Round Robin (RR), and Gantt Chart calculation metrics.',
    previewSupported: true,
    topics: ['CPU Scheduling', 'Gantt Chart', 'Round Robin', 'Turnaround Time'],
    githubPath: 'Degree Year 1/Operating System/Lecture Notes/Chapter 05 CPU Scheduling.pdf',
    downloadsCount: 310,
    contentPreview: `# Chapter 05 — CPU Process Scheduling

## Key Performance Metrics
1. **CPU Utilization:** Percentage of time CPU is active.
2. **Throughput:** Number of processes completed per unit time.
3. **Turnaround Time ($T_{at}$):** $T_{completion} - T_{arrival}$
4. **Waiting Time ($T_w$):** $T_{turnaround} - T_{burst}$

### Round Robin (Quantum = 4ms)
For processes P1(burst=24), P2(burst=3), P3(burst=3):
- **Gantt Chart:** [ P1 (0-4) | P2 (4-7) | P3 (7-10) | P1 (10-30) ]
- **Average Waiting Time:** $\\frac{(10-4) + (4-0) + (7-0)}{3} = \\frac{17}{3} = 5.67\\text{ ms}$`,
  },
  {
    id: 'y1-os-prac1',
    subjectId: 'y1-operating-system',
    categoryId: 'practical',
    yearId: 'year1',
    fileName: 'Lab_06_POSIX_Pthreads_Synchronization.c',
    fileType: 'code',
    fileExtension: '.cpp',
    fileSize: '15 KB',
    updatedAt: '2024-04-18',
    description: 'C code resolving Producer-Consumer problem using POSIX threads (pthread), mutex locks, and semaphores.',
    previewSupported: true,
    topics: ['C Language', 'Multithreading', 'Semaphores', 'Mutex'],
    githubPath: 'Degree Year 1/Operating System/Practical/Pthreads_Semaphores.c',
    downloadsCount: 140,
    contentPreview: `// Pthreads_Semaphores.c - Producer Consumer Solution
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

#define BUFFER_SIZE 5

int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty;
sem_t full;
pthread_mutex_t mutex;

void* producer(void* arg) {
    for(int i = 0; i < 10; i++) {
        sem_wait(&empty);
        pthread_mutex_lock(&mutex);
        
        buffer[in] = i * 10;
        printf("Producer inserted %d at %d\\n", buffer[in], in);
        in = (in + 1) % BUFFER_SIZE;
        
        pthread_mutex_unlock(&mutex);
        sem_post(&full);
    }
    return NULL;
}`,
  },

  // --- DATA STRUCTURE AND ANALYSIS (Degree Year 1) ---
  {
    id: 'y1-ds-ln1',
    subjectId: 'y1-data-structure',
    categoryId: 'lecture-notes',
    yearId: 'year1',
    fileName: 'Chapter 07 — Binary Search Trees & AVL Rotation Rules.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '3.6 MB',
    updatedAt: '2024-04-02',
    description: 'BST insertion/deletion operations, tree traversals (In-order, Pre-order, Post-order), balance factors, LL, RR, LR, RL AVL rotations.',
    previewSupported: true,
    topics: ['Trees', 'Binary Search Tree', 'AVL Tree', 'Rotations'],
    githubPath: 'Degree Year 1/Data Structure and Analysis/Lecture Notes/Chapter 07 BST AVL.pdf',
    downloadsCount: 285,
    contentPreview: `# Chapter 07 — AVL Tree Rotations

## Balance Factor Definition
$$BF(node) = Height(LeftSubtree) - Height(RightSubtree)$$
*An AVL tree requires $BF \\in \\{-1, 0, 1\\}$ for all nodes.*

### Rotation Types
1. **Left-Left (LL) Unbalance:** Single Right Rotation
2. **Right-Right (RR) Unbalance:** Single Left Rotation
3. **Left-Right (LR) Unbalance:** Double Rotation (Left rotate child, then Right rotate parent)
4. **Right-Left (RL) Unbalance:** Double Rotation (Right rotate child, then Left rotate parent)`,
  },
  {
    id: 'y1-ds-sn1',
    subjectId: 'y1-data-structure',
    categoryId: 'side-notes',
    yearId: 'year1',
    fileName: 'Big-O Time Complexity Summary Chart.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '820 KB',
    updatedAt: '2024-05-15',
    description: 'Comparison matrix of time & space complexities for Array, LinkedList, Stack, Queue, Hash Table, BST, Heaps, QuickSort, MergeSort, and Dijkstra.',
    previewSupported: true,
    topics: ['Big-O Notation', 'Time Complexity', 'Algorithm Analysis'],
    githubPath: 'Degree Year 1/Data Structure and Analysis/Side Notes/Big O Summary.pdf',
    downloadsCount: 512,
    contentPreview: `# Big-O Complexity Quick Matrix

| Data Structure | Access | Search | Insertion | Deletion |
| :--- | :--- | :--- | :--- | :--- |
| **Array** | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ |
| **Singly Linked List** | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| **Hash Table** | N/A | $O(1)$ avg | $O(1)$ avg | $O(1)$ avg |
| **BST (Balanced)** | $O(\\log n)$ | $O(\\log n)$ | $O(\\log n)$ | $O(\\log n)$ |
| **Stack / Queue** | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |`,
  },

  // --- DISCRETE STRUCTURE (Degree Year 1) ---
  {
    id: 'y1-discrete-ln1',
    subjectId: 'y1-discrete-struct',
    categoryId: 'lecture-notes',
    yearId: 'year1',
    fileName: 'Unit 04 — Graph Theory, Euler & Hamilton Paths.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '3.1 MB',
    updatedAt: '2024-02-28',
    description: 'Vertices, edges, degrees, Handshaking Lemma, planar graphs, Euler paths, Hamiltonian cycles, and graph coloring theorems.',
    previewSupported: true,
    topics: ['Graph Theory', 'Handshaking Lemma', 'Euler Path'],
    githubPath: 'Degree Year 1/Discrete Structure/Lecture Notes/Unit 04 Graph Theory.pdf',
    downloadsCount: 178,
  },

  // --- COMPUTER ARCHITECTURE (Degree Year 1) ---
  {
    id: 'y1-arch-tut1',
    subjectId: 'y1-computer-arch',
    categoryId: 'tutorial-exercises',
    yearId: 'year1',
    fileName: 'Tutorial 05 — Cache Memory Mapping & Hit Ratio Calculations.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '2.1 MB',
    updatedAt: '2024-03-14',
    description: 'Direct Mapping, Associative Mapping, and Set-Associative Mapping problem solutions with block offset and tag length derivations.',
    previewSupported: true,
    topics: ['Cache Memory', 'Direct Mapping', 'Hit Ratio'],
    githubPath: 'Degree Year 1/Computer Architecture/Tutorial Exercises/Tutorial 05 Cache.pdf',
    downloadsCount: 154,
  },

  // --- PRINCIPLE OF SOFTWARE ENGINEERING (Degree Year 1) ---
  {
    id: 'y1-se-assign1',
    subjectId: 'y1-software-eng',
    categoryId: 'assignments',
    yearId: 'year1',
    fileName: 'Group Project SRS Document — Academic Materials Platform.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '5.2 MB',
    updatedAt: '2024-04-25',
    description: 'Software Requirements Specification (SRS) following IEEE 830 standard including functional requirements, non-functional constraints, and use cases.',
    previewSupported: true,
    topics: ['Software Requirements', 'SRS IEEE 830', 'UML Use Cases'],
    githubPath: 'Degree Year 1/Principle of Software Engineering/Assignments/SRS Document.pdf',
    downloadsCount: 220,
  },

  // --- SYSTEM ANALYSIS AND DESIGN (Degree Year 1) ---
  {
    id: 'y1-sad-ln1',
    subjectId: 'y1-system-analysis',
    categoryId: 'lecture-notes',
    yearId: 'year1',
    fileName: 'Chapter 04 — Data Flow Diagrams (Context Level & Level 0).pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '2.8 MB',
    updatedAt: '2024-03-18',
    description: 'Rules for drawing DFDs (Yourdon & DeMarco notation), process decomposition, data store balancing, and common modeling errors.',
    previewSupported: true,
    topics: ['Data Flow Diagram', 'DFD Level 0', 'Process Decomposition'],
    githubPath: 'Degree Year 1/System Analysis and Design/Lecture Notes/Chapter 04 DFD.pdf',
    downloadsCount: 190,
  },

  // --- SOCIAL INNOVATION PROJECTS (Degree Year 1) ---
  {
    id: 'y1-mpu-assign1',
    subjectId: 'y1-social-innovation',
    categoryId: 'assignments',
    yearId: 'year1',
    fileName: 'Community Literacy Outreach Final Impact Report.pdf',
    fileType: 'pdf',
    fileExtension: '.pdf',
    fileSize: '6.1 MB',
    updatedAt: '2024-05-10',
    description: 'Summary of community engagement project, beneficiary feedback surveys, financial breakdown, and sustainable continuity plan.',
    previewSupported: true,
    topics: ['Community Service', 'Social Innovation', 'Impact Report'],
    githubPath: 'Degree Year 1/Social Innovation Projects/Assignments/Final Impact Report.pdf',
    downloadsCount: 110,
  },
];
