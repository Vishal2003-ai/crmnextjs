export const courseDetails = [
  // 1. Python & Django
  {
    slug: "python-django",
    title: "Python Programming & Frameworks",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    tools: ["PyCharm", "VS Code", "SQLite", "Postman"],
    syllabus: [
      "Python Basics: Variables, Loops & Functions",
      "Object-Oriented Programming (OOPS)",
      "Data Handling with NumPy & Pandas",
      "Django Framework: Models, Views & Templates",
      "REST API Development",
      "Database Integration & Deployment"
    ],
    jobRoles: ["Python Developer", "Backend Developer", "Data Analyst"]
  },

  // 2. AI & ML
  {
    slug: "ai-ml",
    title: "AI & Machine Learning Specialist",
    duration: "6 Months",
    level: "Advanced",
    tools: ["Jupyter", "TensorFlow", "Scikit-Learn", "Keras"],
    syllabus: [
      "Mathematics for Machine Learning",
      "Supervised & Unsupervised Learning",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Computer Vision Basics",
      "Real-world AI Project Deployment"
    ],
    jobRoles: ["ML Engineer", "AI Specialist", "Data Scientist"]
  },

  // 3. Web Development (Frontend Mastery)
  {
    slug: "html-css-js-react",
    title: "Frontend Mastery (React & Next.js)",
    duration: "4 Months",
    level: "Beginner to Advanced",
    tools: ["VS Code", "GitHub", "Vite", "Tailwind CSS"],
    syllabus: [
      "HTML5 & Modern CSS3 Layouts",
      "JavaScript ES6+ & DOM Manipulation",
      "React.js: Hooks, Props & State",
      "Next.js 14 App Router & SEO",
      "Vite & Package Management",
      "Responsive UI Design with Tailwind"
    ],
    jobRoles: ["Frontend Developer", "UI Developer", "React Specialist"]
  },

  // 4. ADCA (Advance Diploma)
  {
    slug: "adca",
    title: "ADCA (Advance Diploma in Computer Applications)",
    duration: "12 Months",
    level: "Comprehensive",
    tools: ["MS Office", "Tally Prime", "Photoshop", "Internet"],
    syllabus: [
      "Computer Fundamentals & OS",
      "MS Office (Word, Excel, PowerPoint)",
      "Financial Accounting with Tally Prime",
      "Graphic Design Basics (DTP)",
      "Web Designing Fundamentals",
      "C & C++ Programming Basics"
    ],
    jobRoles: ["Office Administrator", "Computer Operator", "Lab Instructor"]
  },

  // 5. O Level (NIELIT)
  {
    slug: "o-level",
    title: "O Level (NIELIT Certification)",
    duration: "12 Months",
    level: "Government Certified",
    tools: ["Python", "LibreOffice", "HTML Editor", "IoT Kits"],
    syllabus: [
      "M1: IT Tools & Network Basics",
      "M2: Web Designing & Publishing",
      "M3: Programming through Python",
      "M4: Internet of Things (IoT)",
      "Practical Assignments",
      "Project Work & Viva"
    ],
    jobRoles: ["Govt. Job Eligibility", "Web Designer", "Assistant Programmer"]
  },

  // 6. CCC
  {
    slug: "ccc",
    title: "CCC (Course on Computer Concepts)",
    duration: "3 Months",
    level: "Basic",
    tools: ["Windows", "LibreOffice", "Web Browsers"],
    syllabus: [
      "Introduction to GUI Operating Systems",
      "Word Processing (Writer)",
      "Spreadsheets (Calc)",
      "Presentation (Impress)",
      "Digital Financial Services",
      "Cyber Security Basics"
    ],
    jobRoles: ["Data Entry Operator", "Govt. Clerk Exams", "Basic Computer Expert"]
  },

  // 7. Tally Prime with GST
  {
    slug: "tally-prime-gst",
    title: "Professional Accounting with Tally Prime",
    duration: "3 Months",
    level: "Skill-based",
    tools: ["Tally Prime", "GST Portal", "MS Excel"],
    syllabus: [
      "Accounting Fundamentals",
      "Voucher Entry & Ledger Creation",
      "GST, TDS & TCS Management",
      "Inventory & Payroll Management",
      "Banking & Reconciliations",
      "Generating Financial Reports"
    ],
    jobRoles: ["Accountant", "GST Consultant", "Audit Assistant"]
  },

  // 8. Advance Excel
  {
    slug: "advance-excel",
    title: "Super Advance Excel & Data Analytics",
    duration: "2 Months",
    level: "Intermediate",
    tools: ["Excel 365", "Power BI Basics", "Solver"],
    syllabus: [
      "Lookup Functions (VLOOKUP, XLOOKUP)",
      "Pivot Tables & Dynamic Charts",
      "Macros & Basic VBA",
      "Power Query & Data Cleaning",
      "Dashboard Creation",
      "Statistical Analysis"
    ],
    jobRoles: ["Data Analyst", "MIS Executive", "Business Analyst"]
  },

  // 9. Video & Canva Editing
  {
    slug: "video-editing-canva",
    title: "Creative Video & Canva Design",
    duration: "2 Months",
    level: "Beginner",
    tools: ["Premiere Pro/VN", "Canva", "CapCut", "Photoshop"],
    syllabus: [
      "Video Editing Principles",
      "Social Media Content Creation",
      "Canva Pro for Graphic Design",
      "Audio Syncing & Color Correction",
      "YouTube Thumbnail & Branding",
      "Short-form Video Content (Reels)"
    ],
    jobRoles: ["Video Editor", "Content Creator", "Graphic Designer"]
  },
  {
    slug: "html-css-js-react",
    title: "Full Stack Web Development",
    category: "Web Development",
    duration: "6 Months",
    icon: "🌐",
    details: "Master HTML, CSS, JavaScript, React, and Next.js to build modern websites.",
    syllabus: ["HTML5 & CSS3", "JavaScript ES6+", "React Hooks", "Next.js App Router", "Tailwind CSS", "Deployment"],
    tools: ["VS Code", "GitHub", "Vercel"],
    jobRoles: ["Frontend Developer", "Web Designer"]
  },
  // TALLY & ACCOUNTING CATEGORY
  {
    slug: "tally-prime-gst",
    title: "Tally Prime with GST",
    category: "Tally & Accounting",
    duration: "3 Months",
    icon: "📊",
    details: "Complete professional accounting with GST, TDS, and Payroll management.",
    syllabus: ["Accounting Basics", "Inventory Management", "GST Returns", "TDS/TCS", "Balance Sheet", "Voucher Entry"],
    tools: ["Tally Prime", "MS Excel", "GST Portal"],
    jobRoles: ["Accountant", "Accounts Manager"]
  },
  // GRAPHIC DESIGN CATEGORY
  {
    slug: "video-editing-canva",
    title: "Graphic Design & Video Editing",
    category: "Graphic Design",
    duration: "3 Months",
    icon: "🎨",
    details: "Learn professional designing using Canva, Photoshop, and Video Editing tools.",
    syllabus: ["Color Theory", "Typography", "Canva Pro Tips", "Photoshop Basics", "Video Transitions", "Social Media Branding"],
    tools: ["Canva", "Photoshop", "Premiere Pro"],
    jobRoles: ["Graphic Designer", "Video Editor", "Content Creator"]
  }
];