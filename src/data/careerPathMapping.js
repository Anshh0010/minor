export const careerPathMappings = {
  science: {
    paths: [
      {
        id: 1,
        title: "Medical Career Path",
        stages: [
          { level: "12th", course: "PCB (Physics, Chemistry, Biology)", duration: "2 years" },
          { level: "UG", course: "MBBS", duration: "5.5 years", exams: ["NEET UG"] },
          { level: "PG", course: "MD/MS", duration: "3 years", exams: ["NEET PG"] },
          { level: "Career", course: "Doctor/Specialist", duration: "Lifetime", salary: "₹8-50 LPA" }
        ]
      },
      {
        id: 2,
        title: "Engineering Career Path",
        stages: [
          { level: "12th", course: "PCM (Physics, Chemistry, Math)", duration: "2 years" },
          { level: "UG", course: "B.Tech/B.E.", duration: "4 years", exams: ["JEE Main", "JEE Advanced"] },
          { level: "PG", course: "M.Tech/MBA", duration: "2 years", exams: ["GATE", "CAT"] },
          { level: "Career", course: "Engineer/Manager", duration: "Lifetime", salary: "₹6-30 LPA" }
        ]
      },
      {
        id: 3,
        title: "Research Scientist Path",
        stages: [
          { level: "12th", course: "PCM/PCB", duration: "2 years" },
          { level: "UG", course: "B.Sc.", duration: "3 years", exams: ["CUET", "University Exams"] },
          { level: "PG", course: "M.Sc.", duration: "2 years", exams: ["JAM", "University Exams"] },
          { level: "PhD", course: "Ph.D.", duration: "3-5 years", exams: ["UGC NET", "CSIR NET"] },
          { level: "Career", course: "Research Scientist", duration: "Lifetime", salary: "₹5-25 LPA" }
        ]
      }
    ]
  },
  commerce: {
    paths: [
      {
        id: 1,
        title: "Chartered Accountant Path",
        stages: [
          { level: "12th", course: "Commerce/Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Com + CA Foundation", duration: "3 years", exams: ["CA Foundation"] },
          { level: "Intermediate", course: "CA Intermediate", duration: "2 years", exams: ["CA Intermediate"] },
          { level: "Final", course: "CA Final + Articleship", duration: "3 years", exams: ["CA Final"] },
          { level: "Career", course: "Chartered Accountant", duration: "Lifetime", salary: "₹8-40 LPA" }
        ]
      },
      {
        id: 2,
        title: "MBA Career Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Com/BBA/Any Degree", duration: "3 years", exams: ["CUET", "University Exams"] },
          { level: "PG", course: "MBA", duration: "2 years", exams: ["CAT", "MAT", "XAT"] },
          { level: "Career", course: "Manager/Consultant", duration: "Lifetime", salary: "₹10-50 LPA" }
        ]
      },
      {
        id: 3,
        title: "Banking & Finance Path",
        stages: [
          { level: "12th", course: "Commerce/Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Com/BBA Finance", duration: "3 years", exams: ["CUET"] },
          { level: "Certification", course: "CFA/FRM", duration: "1-2 years", exams: ["CFA", "FRM"] },
          { level: "Career", course: "Financial Analyst/Banker", duration: "Lifetime", salary: "₹6-35 LPA" }
        ]
      }
    ]
  },
  technology: {
    paths: [
      {
        id: 1,
        title: "Software Developer Path",
        stages: [
          { level: "12th", course: "PCM/Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Tech CSE/IT", duration: "4 years", exams: ["JEE Main", "State CET"] },
          { level: "Skills", course: "Programming + Projects", duration: "Ongoing", exams: ["Coding Interviews"] },
          { level: "Career", course: "Software Engineer", duration: "Lifetime", salary: "₹8-60 LPA" }
        ]
      },
      {
        id: 2,
        title: "Data Science Path",
        stages: [
          { level: "12th", course: "PCM/Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Tech/B.Sc. Data Science", duration: "3-4 years", exams: ["JEE Main", "CUET"] },
          { level: "PG", course: "M.Sc. Data Science", duration: "2 years", exams: ["GATE", "University Exams"] },
          { level: "Career", course: "Data Scientist", duration: "Lifetime", salary: "₹10-45 LPA" }
        ]
      },
      {
        id: 3,
        title: "Cybersecurity Path",
        stages: [
          { level: "12th", course: "PCM/Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Tech Cybersecurity", duration: "4 years", exams: ["JEE Main"] },
          { level: "Certification", course: "CISSP/CEH", duration: "1 year", exams: ["Security Certifications"] },
          { level: "Career", course: "Security Analyst", duration: "Lifetime", salary: "₹7-40 LPA" }
        ]
      }
    ]
  },
  arts: {
    paths: [
      {
        id: 1,
        title: "Journalism Career Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "BA Journalism/Mass Comm", duration: "3 years", exams: ["CUET", "University Exams"] },
          { level: "PG", course: "MA Journalism", duration: "2 years", exams: ["University Exams"] },
          { level: "Career", course: "Journalist/Editor", duration: "Lifetime", salary: "₹4-25 LPA" }
        ]
      },
      {
        id: 2,
        title: "Civil Services Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "BA/Any Degree", duration: "3 years", exams: ["CUET"] },
          { level: "Preparation", course: "UPSC Preparation", duration: "1-3 years", exams: ["UPSC CSE"] },
          { level: "Career", course: "IAS/IPS/IFS Officer", duration: "Lifetime", salary: "₹8-30 LPA" }
        ]
      },
      {
        id: 3,
        title: "Creative Arts Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "BFA/BA Fine Arts", duration: "3-4 years", exams: ["CUET", "NID DAT"] },
          { level: "PG", course: "MFA", duration: "2 years", exams: ["University Exams"] },
          { level: "Career", course: "Artist/Designer", duration: "Lifetime", salary: "₹3-20 LPA" }
        ]
      }
    ]
  },
  design: {
    paths: [
      {
        id: 1,
        title: "UX/UI Designer Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Des/BFA", duration: "4 years", exams: ["NID DAT", "UCEED"] },
          { level: "Skills", course: "Portfolio + Internships", duration: "1-2 years", exams: ["Portfolio Review"] },
          { level: "Career", course: "UX/UI Designer", duration: "Lifetime", salary: "₹6-35 LPA" }
        ]
      },
      {
        id: 2,
        title: "Fashion Designer Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Des Fashion", duration: "4 years", exams: ["NIFT", "NID DAT"] },
          { level: "PG", course: "M.Des Fashion", duration: "2 years", exams: ["CEED"] },
          { level: "Career", course: "Fashion Designer", duration: "Lifetime", salary: "₹4-30 LPA" }
        ]
      },
      {
        id: 3,
        title: "Interior Designer Path",
        stages: [
          { level: "12th", course: "Any Stream", duration: "2 years" },
          { level: "UG", course: "B.Des Interior", duration: "4 years", exams: ["NID DAT", "UCEED"] },
          { level: "Certification", course: "Professional Certification", duration: "6 months", exams: ["Industry Certifications"] },
          { level: "Career", course: "Interior Designer", duration: "Lifetime", salary: "₹5-25 LPA" }
        ]
      }
    ]
  }
};