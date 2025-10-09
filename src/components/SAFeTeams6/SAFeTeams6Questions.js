// SAFe for Teams 6.0 Practice Exam Questions
// This question bank covers the three core competencies:
// 1. Team Agility (35% - ~70 questions)
// 2. Technical Agility (35% - ~70 questions)  
// 3. Business Agility (30% - ~60 questions)

export const safeTeams6Questions = [
  // TEAM AGILITY QUESTIONS (35% - Target: 70 questions)
  
  // Scrum Foundations & Team Practices
  {
    id: 1,
    question: "What is the primary purpose of the Daily Stand-up in SAFe?",
    options: [
      "To report progress to management",
      "To synchronize the team and identify impediments",
      "To assign new work to team members",
      "To review and approve completed work"
    ],
    correctAnswer: 1,
    explanation: "The Daily Stand-up (Daily Scrum) is a synchronization event where team members coordinate their work, identify impediments, and plan their day. It's not a status report to management but a team coordination mechanism.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "What is the recommended duration for a SAFe Team Iteration?",
    options: [
      "1 week",
      "2 weeks", 
      "3 weeks",
      "4 weeks"
    ],
    correctAnswer: 1,
    explanation: "SAFe recommends 2-week iterations as the standard timeframe. This provides a good balance between planning overhead and feedback frequency, allowing teams to deliver value incrementally while maintaining sustainable pace.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 3,
    question: "Who is responsible for managing the Team Backlog in SAFe?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Development Team",
      "The Release Train Engineer"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is responsible for managing the Team Backlog, working with stakeholders to prioritize features and stories that deliver the most customer value. They ensure the backlog is refined and ready for iteration planning.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 4,
    question: "What is the primary goal of Iteration Planning?",
    options: [
      "To assign tasks to individual team members",
      "To estimate the entire product backlog",
      "To commit to iteration goals and create a plan",
      "To review the previous iteration's performance"
    ],
    correctAnswer: 2,
    explanation: "Iteration Planning is where the team commits to a set of iteration goals and creates a plan to achieve them. The team selects stories from the Team Backlog and breaks them down into tasks, creating their iteration commitment.",
    domain: "Team Agility", 
    difficulty: "Foundation"
  },
  {
    id: 5,
    question: "During the Iteration Review, what is the team's main focus?",
    options: [
      "Identifying what went wrong during the iteration",
      "Planning the next iteration's work",
      "Demonstrating completed functionality to stakeholders",
      "Updating project documentation"
    ],
    correctAnswer: 2,
    explanation: "The Iteration Review (Sprint Review) focuses on demonstrating the completed, working functionality to stakeholders and getting feedback. It's an opportunity to inspect the increment and adapt the product based on stakeholder input.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 6,
    question: "What is the purpose of the Iteration Retrospective?",
    options: [
      "To demonstrate completed features",
      "To plan the next iteration's work",
      "To inspect and adapt team processes",
      "To report progress to management"
    ],
    correctAnswer: 2,
    explanation: "The Iteration Retrospective is where the team reflects on their process and identifies improvements. It's focused on continuous improvement of how the team works together, their practices, and their environment.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 7,
    question: "In SAFe, what does 'Story Acceptance Criteria' define?",
    options: [
      "The technical implementation approach",
      "The conditions that must be met for a story to be done",
      "The priority order of user stories",
      "The effort estimation for the story"
    ],
    correctAnswer: 1,
    explanation: "Story Acceptance Criteria define the specific conditions that must be satisfied for a user story to be considered complete. They provide clear, testable conditions that guide development and acceptance testing.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 8,
    question: "What is the role of the Scrum Master in SAFe teams?",
    options: [
      "To assign work to team members",
      "To make technical decisions for the team",
      "To facilitate team events and remove impediments", 
      "To manage the product backlog"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master is a servant leader who facilitates team events, coaches the team in Agile practices, and works to remove impediments that block the team's progress. They don't manage people or make technical decisions.",
    domain: "Team Agility",
    difficulty: "Foundation"
  },
  {
    id: 9,
    question: "What characterizes a high-performing Agile team?",
    options: [
      "Individual specialization and handoffs",
      "Cross-functional collaboration and shared ownership",
      "Strict adherence to predefined processes",
      "Minimal interaction with stakeholders"
    ],
    correctAnswer: 1,
    explanation: "High-performing Agile teams are characterized by cross-functional collaboration, shared ownership of outcomes, continuous learning, and the ability to self-organize around delivering value to customers.",
    domain: "Team Agility",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    question: "How should SAFe teams handle changing requirements within an iteration?",
    options: [
      "Reject all changes until the next iteration",
      "Accept all changes regardless of impact",
      "Evaluate changes against iteration goals and capacity",
      "Escalate all change requests to management"
    ],
    correctAnswer: 2,
    explanation: "Teams should evaluate change requests against their iteration goals and current capacity. While Agile embraces change, teams need to protect their iteration commitment and maintain sustainable pace.",
    domain: "Team Agility",
    difficulty: "Intermediate"
  },

  // TECHNICAL AGILITY QUESTIONS (35% - Target: 70 questions)
  
  // Built-in Quality & Engineering Practices
  {
    id: 11,
    question: "Which Built-in Quality practice helps teams 'shift left' on testing?",
    options: [
      "Code reviews after development is complete",
      "Test-Driven Development (TDD)",
      "Manual testing at the end of iterations",
      "Quality assurance by a separate QA team"
    ],
    correctAnswer: 1,
    explanation: "Test-Driven Development (TDD) shifts testing left by writing tests before code, ensuring quality is built in from the start rather than tested in later. This practice helps catch defects early and drives better design.",
    domain: "Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 12,
    question: "What does the Definition of Done ensure for a SAFe team?",
    options: [
      "All features meet customer expectations",
      "Work items meet agreed quality standards",
      "The team completes all planned work",
      "Management approves all deliverables"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done is a shared understanding of what it means for work to be complete, ensuring consistent quality standards. It includes criteria like testing, code review, and documentation requirements that must be met.",
    domain: "Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 13,
    question: "What is the primary benefit of Continuous Integration (CI)?",
    options: [
      "Faster individual development",
      "Early detection of integration issues",
      "Reduced need for testing",
      "Elimination of code reviews"
    ],
    correctAnswer: 1,
    explanation: "Continuous Integration's primary benefit is early detection of integration issues by frequently integrating code changes. This reduces the risk and cost of fixing problems, leading to higher quality and faster delivery.",
    domain: "Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 14,
    question: "In pair programming, what is the role of the 'Navigator'?",
    options: [
      "To write all the code",
      "To review and guide the overall approach",
      "To test the code as it's written",
      "To document the code being written"
    ],
    correctAnswer: 1,
    explanation: "In pair programming, the Navigator reviews code as it's written, thinks about the overall approach, considers edge cases, and helps guide the direction. The Driver focuses on the tactical coding while the Navigator thinks strategically.",
    domain: "Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 15,
    question: "What is the main purpose of refactoring in Agile development?",
    options: [
      "To add new features to the system",
      "To improve code structure without changing behavior",
      "To fix bugs in the existing code",
      "To optimize system performance"
    ],
    correctAnswer: 1,
    explanation: "Refactoring improves the internal structure and readability of code without changing its external behavior. This makes code easier to understand, modify, and extend while reducing technical debt.",
    domain: "Technical Agility",
    difficulty: "Foundation"
  },

  // BUSINESS AGILITY QUESTIONS (30% - Target: 60 questions)
  
  // PI Planning, Value Delivery & Lean Thinking
  {
    id: 16,
    question: "During PI Planning, what is the team's primary responsibility?",
    options: [
      "To estimate the entire PI backlog",
      "To create detailed technical specifications",
      "To commit to PI Objectives with business value",
      "To assign work to individual team members"
    ],
    correctAnswer: 2,
    explanation: "During PI Planning, teams work with their Product Owner to understand features, break them down, estimate, and commit to PI Objectives that deliver business value. The focus is on commitment and value delivery, not detailed assignment.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 17,
    question: "What is the purpose of assigning business value to PI Objectives?",
    options: [
      "To calculate team performance metrics",
      "To prioritize objectives and guide trade-off decisions",
      "To determine team bonuses",
      "To estimate development costs"
    ],
    correctAnswer: 1,
    explanation: "Business value assigned to PI Objectives helps prioritize work and guides trade-off decisions when adjustments are needed. It ensures teams focus on delivering the highest value outcomes for the business.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    question: "In Lean thinking, what does 'flow' refer to?",
    options: [
      "The speed of individual developers",
      "The smooth movement of work through the system",
      "The number of features delivered",
      "The quality of deliverables"
    ],
    correctAnswer: 1,
    explanation: "Flow refers to the smooth, uninterrupted movement of work through the value stream. Optimizing flow involves removing delays, bottlenecks, and waste to deliver value more efficiently.",
    domain: "Business Agility",
    difficulty: "Foundation"
  },
  {
    id: 19,
    question: "What is the primary purpose of the System Demo?",
    options: [
      "To test individual team contributions",
      "To demonstrate integrated system functionality",
      "To review technical architecture decisions",
      "To plan the next increment's work"
    ],
    correctAnswer: 1,
    explanation: "The System Demo demonstrates the integrated functionality of the entire system, showing how all teams' work comes together to deliver value. It provides stakeholders with visibility into progress and integrated capabilities.",
    domain: "Business Agility",
    difficulty: "Foundation"
  },
  {
    id: 20,
    question: "How should teams approach dependencies during PI Planning?",
    options: [
      "Ignore dependencies and focus on their own work",
      "Identify, visualize, and plan to resolve dependencies",
      "Escalate all dependencies to management",
      "Postpone work that has dependencies"
    ],
    correctAnswer: 1,
    explanation: "Teams should actively identify dependencies, make them visible on the program board, and work with other teams to plan resolution. Managing dependencies is crucial for successful PI execution.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  }
];