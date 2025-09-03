export const aptitudeQuestions = [
  {
    id: 1,
    question: "Which activity do you find most engaging?",
    type: "interest",
    options: [
      { text: "Solving mathematical problems", streams: { science: 3, technology: 2 } },
      { text: "Creating art or designing", streams: { arts: 3, design: 3 } },
      { text: "Analyzing business trends", streams: { commerce: 3 } },
      { text: "Building software applications", streams: { technology: 3 } },
      { text: "Writing stories or articles", streams: { arts: 3 } }
    ]
  },
  {
    id: 2,
    question: "What type of problem-solving appeals to you most?",
    type: "aptitude",
    options: [
      { text: "Logical and analytical thinking", streams: { science: 3, technology: 2 } },
      { text: "Creative and artistic solutions", streams: { arts: 3, design: 3 } },
      { text: "Strategic business planning", streams: { commerce: 3 } },
      { text: "Technical and systematic approach", streams: { technology: 3 } },
      { text: "Research and investigation", streams: { science: 2, arts: 1 } }
    ]
  },
  {
    id: 3,
    question: "Which subject did you enjoy most in school?",
    type: "academic",
    options: [
      { text: "Mathematics and Physics", streams: { science: 3, technology: 2 } },
      { text: "Literature and History", streams: { arts: 3 } },
      { text: "Economics and Business Studies", streams: { commerce: 3 } },
      { text: "Computer Science", streams: { technology: 3 } },
      { text: "Art and Design", streams: { design: 3, arts: 2 } }
    ]
  },
  {
    id: 4,
    question: "What kind of work environment do you prefer?",
    type: "personality",
    options: [
      { text: "Laboratory or research facility", streams: { science: 3 } },
      { text: "Creative studio or workshop", streams: { arts: 3, design: 3 } },
      { text: "Corporate office", streams: { commerce: 3 } },
      { text: "Tech company or startup", streams: { technology: 3 } },
      { text: "Flexible/remote work", streams: { technology: 2, design: 1 } }
    ]
  },
  {
    id: 5,
    question: "Which career outcome motivates you most?",
    type: "motivation",
    options: [
      { text: "Making scientific discoveries", streams: { science: 3 } },
      { text: "Creating beautiful designs", streams: { arts: 3, design: 3 } },
      { text: "Building successful businesses", streams: { commerce: 3 } },
      { text: "Developing innovative technology", streams: { technology: 3 } },
      { text: "Helping others through research", streams: { science: 2, arts: 1 } }
    ]
  },
  {
    id: 6,
    question: "How do you prefer to learn new concepts?",
    type: "learning",
    options: [
      { text: "Through experiments and observation", streams: { science: 3 } },
      { text: "Through hands-on creative projects", streams: { arts: 3, design: 3 } },
      { text: "Through case studies and analysis", streams: { commerce: 3 } },
      { text: "Through coding and building", streams: { technology: 3 } },
      { text: "Through reading and discussion", streams: { arts: 2, commerce: 1 } }
    ]
  },
  {
    id: 7,
    question: "What type of challenges excite you?",
    type: "challenge",
    options: [
      { text: "Complex scientific problems", streams: { science: 3 } },
      { text: "Creative design challenges", streams: { arts: 3, design: 3 } },
      { text: "Business strategy puzzles", streams: { commerce: 3 } },
      { text: "Technical coding problems", streams: { technology: 3 } },
      { text: "Research and analysis tasks", streams: { science: 2, arts: 1 } }
    ]
  },
  {
    id: 8,
    question: "Which tools or technologies interest you most?",
    type: "tools",
    options: [
      { text: "Scientific instruments and lab equipment", streams: { science: 3 } },
      { text: "Design software and art supplies", streams: { arts: 3, design: 3 } },
      { text: "Financial analysis tools", streams: { commerce: 3 } },
      { text: "Programming languages and frameworks", streams: { technology: 3 } },
      { text: "Research databases and libraries", streams: { science: 1, arts: 2 } }
    ]
  },
  {
    id: 9,
    question: "What type of impact do you want to make?",
    type: "impact",
    options: [
      { text: "Advance human knowledge through research", streams: { science: 3 } },
      { text: "Inspire people through creative work", streams: { arts: 3, design: 2 } },
      { text: "Drive economic growth and innovation", streams: { commerce: 3 } },
      { text: "Solve problems through technology", streams: { technology: 3 } },
      { text: "Preserve culture and heritage", streams: { arts: 2 } }
    ]
  },
  {
    id: 10,
    question: "Which activity would you choose for a weekend project?",
    type: "hobby",
    options: [
      { text: "Conducting a science experiment", streams: { science: 3 } },
      { text: "Creating artwork or crafts", streams: { arts: 3, design: 3 } },
      { text: "Starting a small business", streams: { commerce: 3 } },
      { text: "Building a mobile app", streams: { technology: 3 } },
      { text: "Writing a blog or story", streams: { arts: 2 } }
    ]
  }
];

export const streamInfo = {
  science: {
    name: "Science",
    description: "Perfect for analytical minds who love exploring the natural world",
    careers: ["Doctor", "Research Scientist", "Engineer", "Biotechnologist"],
    color: "#ef4444"
  },
  commerce: {
    name: "Commerce", 
    description: "Ideal for students interested in business and financial markets",
    careers: ["Accountant", "Business Analyst", "Financial Advisor", "Entrepreneur"],
    color: "#3b82f6"
  },
  technology: {
    name: "Technology",
    description: "Great for problem-solvers and tech enthusiasts",
    careers: ["Software Developer", "Data Scientist", "Cybersecurity Expert", "AI Engineer"],
    color: "#10b981"
  },
  arts: {
    name: "Arts",
    description: "Perfect for creative minds passionate about culture and expression",
    careers: ["Writer", "Journalist", "Historian", "Performer"],
    color: "#f59e0b"
  },
  design: {
    name: "Design",
    description: "Ideal for students who love creativity, aesthetics, and innovation",
    careers: ["Graphic Designer", "Fashion Designer", "Interior Designer", "UX Designer"],
    color: "#8b5cf6"
  }
};