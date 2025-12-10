// Professional Agile Leadership I (PAL-I) Practice Exam Questions
// Based on Scrum.org PAL-I certification content
// Focus areas: Leadership mindset, Agile culture, Empiricism, Value delivery, Organizational design

const paliQuestions = [
  {
    id: 1,
    question: "What is the primary responsibility of Agile leaders in an organization?",
    options: [
      "Creating conditions where people and teams can thrive and deliver value",
      "Managing project timelines and ensuring deliverables are completed on schedule",
      "Making all important technical and business decisions for the teams",
      "Eliminating all conflict and ensuring teams always agree on approaches"
    ],
    correctAnswer: 0,
    explanation: "Agile leaders create the environment and conditions for success. They don't micromanage or make all decisions, but instead enable teams to be effective through psychological safety, clear goals, and removing impediments.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "An organization wants to 'become Agile.' What should leadership focus on first?",
    options: [
      "Mandate specific Agile practices and frameworks across all teams",
      "Understanding and embracing Agile values and principles in their own behavior",
      "Hire external Agile consultants to implement the transformation",
      "Send all employees to Agile certification training programs"
    ],
    correctAnswer: 1,
    explanation: "Agile transformation starts with leadership. Leaders must model Agile values and principles themselves before expecting others to adopt them. The change must begin at the top with genuine understanding and behavioral change.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 3,
    question: "How should Agile leaders approach decision-making in complex domains?",
    options: [
      "Make quick decisions based on past experience to maintain momentum",
      "Delegate all decisions to teams since they are self-organizing",
      "Use experiments, gather feedback, and adapt based on what is learned",
      "Conduct extensive analysis upfront to ensure the right decision is made"
    ],
    correctAnswer: 2,
    explanation: "In complex domains (which software development is), empiricism is key. Leaders should enable safe-to-fail experiments, create feedback loops, and be willing to adapt based on evidence rather than relying solely on prediction or past experience.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    question: "What does it mean for leaders to 'be Agile' rather than 'do Agile'?",
    options: [
      "Attending all Scrum ceremonies and following the process strictly",
      "Using Agile terminology in all communications and meetings",
      "Implementing all Agile practices exactly as prescribed in frameworks",
      "Embodying Agile values in their behavior, decisions, and interactions"
    ],
    correctAnswer: 3,
    explanation: "'Being Agile' is about mindset and values manifesting in behavior - transparency, collaboration, adaptation, respect for people. 'Doing Agile' is just following practices without understanding or embodying the underlying principles.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 5,
    question: "A team consistently fails to meet Sprint Goals. What should leadership do?",
    options: [
      "Investigate systemic impediments and work with the team to address root causes",
      "Replace team members with more experienced developers",
      "Reduce Sprint Goals to ensure the team experiences success",
      "Implement stricter monitoring and reporting requirements"
    ],
    correctAnswer: 0,
    explanation: "Leaders should look for systemic causes - unrealistic expectations, external interruptions, technical debt, lack of skills, poor collaboration. The solution is addressing root causes, not punishing people or lowering standards artificially.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 6,
    question: "How can leadership best support organizational agility?",
    options: [
      "Establish detailed processes and procedures that all teams must follow consistently",
      "Create autonomous teams with clear purpose and minimize dependencies between them",
      "Centralize decision-making to ensure alignment and prevent mistakes",
      "Focus on individual performance metrics and incentivize high achievers"
    ],
    correctAnswer: 1,
    explanation: "Agility requires autonomy, clear purpose, and fast feedback loops. Dependencies slow down delivery. Leaders should organize around value streams with minimal handoffs and empower teams to make decisions close to the work.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    question: "What role does psychological safety play in Agile organizations?",
    options: [
      "It ensures no one feels uncomfortable or challenged in their work",
      "It guarantees job security regardless of performance or outcomes",
      "It enables people to take interpersonal risks without fear of negative consequences",
      "It eliminates the need for accountability and performance standards"
    ],
    correctAnswer: 2,
    explanation: "Psychological safety means people can speak up, share ideas, admit mistakes, and challenge thinking without fear of humiliation or punishment. This is essential for learning, innovation, and effective empiricism. It doesn't eliminate accountability.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 8,
    question: "Leadership observes that teams are optimizing locally but creating bottlenecks in the overall system. What should they do?",
    options: [
      "Reward teams that show the best individual metrics and performance",
      "Allow each team to continue optimizing independently for maximum efficiency",
      "Create stricter coordination meetings to control team activities",
      "Apply systems thinking to optimize for overall flow and value delivery"
    ],
    correctAnswer: 3,
    explanation: "Local optimization often creates global sub-optimization. Leaders need systems thinking - understanding how the parts interact and optimizing the whole system's value delivery rather than individual team metrics.",
    domain: "Systems Thinking",
    difficulty: "Intermediate"
  },
  {
    id: 9,
    question: "How should Agile leaders view failure in their organization?",
    options: [
      "Failures are learning opportunities when approached with transparency and reflection",
      "Failures should be minimized through careful planning and risk avoidance",
      "Failures are acceptable only if they don't impact delivery timelines",
      "Failures indicate poor performance and should result in consequences"
    ],
    correctAnswer: 0,
    explanation: "In complex domains, some failures are inevitable and valuable. Agile leaders create an environment where failures are surfaced quickly, examined transparently, and turned into learning. The fear of failure prevents innovation and hides problems.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 10,
    question: "What is the leadership responsibility regarding organizational impediments?",
    options: [
      "Document impediments for teams to work around while maintaining current structures",
      "Actively remove organizational impediments that teams cannot address themselves",
      "Expect teams to solve their own impediments as part of self-organization",
      "Prioritize impediments based on which teams complain the most loudly"
    ],
    correctAnswer: 1,
    explanation: "Teams can solve many impediments, but organizational structure, policies, and systemic issues require leadership action. Leaders should actively work to remove impediments beyond team control and create conditions for team effectiveness.",
    domain: "Creating High-Performing Teams",
    difficulty: "Foundation"
  },
  {
    id: 11,
    question: "An Agile transformation is struggling after six months. What should leadership examine first?",
    options: [
      "Whether teams are following Agile practices and ceremonies correctly",
      "If the organization hired enough Scrum Masters and Agile Coaches",
      "Their own leadership behaviors and whether they model Agile values",
      "Whether the chosen Agile framework is the right fit for the organization"
    ],
    correctAnswer: 2,
    explanation: "Leadership behavior is the biggest factor in transformation success. If leaders haven't changed their mindset and behaviors, no amount of training, coaches, or process changes will create lasting change. Leadership must go first.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 12,
    question: "How should leaders measure the success of Agile teams?",
    options: [
      "Track velocity trends and ensure teams are increasing story points delivered",
      "Measure adherence to Agile practices and completion of ceremonies",
      "Compare teams against each other to identify top and bottom performers",
      "Focus on business outcomes, value delivered, and customer satisfaction"
    ],
    correctAnswer: 3,
    explanation: "The purpose of Agile is delivering value, not following processes or maximizing output metrics. Leaders should focus on outcomes - customer satisfaction, business results, quality, and sustainable pace - not activity metrics like velocity.",
    domain: "Evidence-Based Management",
    difficulty: "Foundation"
  },
  {
    id: 13,
    question: "What does 'servant leadership' mean in an Agile context?",
    options: [
      "Leaders serve by removing obstacles and creating conditions for team success",
      "Leaders should do whatever teams request without question or guidance",
      "Leaders take on administrative tasks so teams can focus on development",
      "Leaders serve stakeholders by ensuring teams deliver what was promised"
    ],
    correctAnswer: 0,
    explanation: "Servant leadership means the leader's primary focus is enabling others' success. This includes removing impediments, providing direction and purpose, and creating the right environment. It doesn't mean abdicating leadership or blindly doing whatever is asked.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 14,
    question: "How should leadership handle conflicts between teams in an Agile organization?",
    options: [
      "Make decisions to resolve conflicts quickly and move forward",
      "Facilitate teams finding their own solutions through collaboration",
      "Escalate to a central governance board for resolution",
      "Separate teams completely to eliminate sources of conflict"
    ],
    correctAnswer: 1,
    explanation: "Leaders should facilitate conflict resolution, not dictate solutions. This builds collaboration skills and team maturity. Leaders provide guidance and ensure healthy conflict resolution, but teams should work through differences themselves when possible.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 15,
    question: "What is the relationship between autonomy and alignment in Agile organizations?",
    options: [
      "Autonomy and alignment are opposites - more of one means less of the other",
      "Autonomy is only possible after teams prove they can maintain alignment",
      "Teams need both strong alignment on goals and autonomy in how they achieve them",
      "Alignment should be prioritized over autonomy to ensure organizational coherence"
    ],
    correctAnswer: 2,
    explanation: "Effective Agile organizations balance autonomy and alignment. Clear alignment on vision, goals, and constraints enables autonomy in execution. This combination allows fast adaptation while maintaining coherence across the organization.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 16,
    question: "Leadership wants to increase transparency in the organization. What should they do first?",
    options: [
      "Implement more detailed reporting requirements and status meetings",
      "Install project management tools that provide visibility into all work",
      "Require teams to provide daily written status updates to management",
      "Model transparency themselves by sharing information openly including challenges"
    ],
    correctAnswer: 3,
    explanation: "Transparency starts at the top. Leaders must model the behavior they want - sharing both good and bad news, admitting uncertainty, and being open about challenges. If leaders hoard information or hide problems, teams will do the same.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 17,
    question: "How should Agile leaders approach long-term planning?",
    options: [
      "Set strategic direction while accepting plans will evolve based on learning",
      "Create detailed multi-year plans and hold teams accountable to them",
      "Avoid long-term planning entirely since it conflicts with Agile principles",
      "Let teams determine their own direction without leadership guidance"
    ],
    correctAnswer: 0,
    explanation: "Agile doesn't mean no planning. Leaders should provide strategic direction, vision, and longer-term goals. However, detailed execution plans should remain flexible and adapt as teams learn. Plans are valuable; planning is essential; but plans should not be rigid.",
    domain: "Strategic Vision",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    question: "What is the leadership role in managing technical debt?",
    options: [
      "Technical debt is a technical issue that teams should handle themselves",
      "Understand technical debt impact and ensure time is allocated to address it",
      "Prevent all technical debt through mandatory code reviews and standards",
      "Accept technical debt as inevitable and focus on delivering features"
    ],
    correctAnswer: 1,
    explanation: "Leaders must understand that technical debt is a business issue affecting speed, quality, and sustainability. They should ensure teams have time to maintain quality and address debt, and make informed trade-offs between new features and sustainability.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 19,
    question: "How can leaders foster innovation in their organization?",
    options: [
      "Mandate innovation time and specific innovation processes for all teams",
      "Hire innovation consultants to generate new ideas for the organization",
      "Create psychological safety and allow time for experimentation and learning",
      "Set innovation targets and reward teams that achieve them"
    ],
    correctAnswer: 2,
    explanation: "Innovation requires safety to try new things and potentially fail, time to experiment, and an environment where ideas are welcomed. Leaders create these conditions rather than mandating innovation or trying to force it through processes or incentives.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 20,
    question: "What should leadership do when organizational policies conflict with Agile principles?",
    options: [
      "Require teams to follow organizational policies regardless of the conflict",
      "Allow teams to ignore policies that conflict with Agile principles",
      "Maintain policies until the Agile transformation is complete",
      "Examine policies and work to evolve those that impede organizational agility"
    ],
    correctAnswer: 3,
    explanation: "Leaders should examine why policies exist and whether they serve the organization's current needs. Many policies were created for different contexts. Leaders should work to evolve policies that impede agility rather than forcing teams to work around them.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 21,
    question: "How should Agile leaders think about organizational structure?",
    options: [
      "Organize around value streams and products rather than functions or projects",
      "Maintain traditional hierarchies but rename roles to Agile terminology",
      "Eliminate all hierarchy and create completely flat organizations",
      "Keep existing structures but add Agile practices within them"
    ],
    correctAnswer: 0,
    explanation: "Structure drives behavior. Organizing around value streams/products creates focus, reduces handoffs, enables autonomy, and improves flow. Functional silos and project-based structures create impediments to agility regardless of practices used.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 22,
    question: "What is the leadership responsibility for building Agile culture?",
    options: [
      "Define the desired culture and require everyone to adopt it",
      "Model desired behaviors consistently and recognize them in others",
      "Hire a culture consultant to implement the cultural transformation",
      "Focus on processes and practices while culture develops naturally"
    ],
    correctAnswer: 1,
    explanation: "Culture is shaped by what leaders model, tolerate, and reward. Leaders build culture through their own behavior, what they celebrate, what they address, and how they respond to both success and failure. Culture cannot be mandated or delegated.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 23,
    question: "A team wants to experiment with a new practice that deviates from organizational standards. What should leadership do?",
    options: [
      "Deny the request to maintain consistency across the organization",
      "Allow it only if other teams also want to try the same approach",
      "Support the experiment with clear hypotheses and review the results",
      "Require extensive documentation justifying the experiment before approval"
    ],
    correctAnswer: 2,
    explanation: "Empiricism and continuous improvement require experimentation. Leaders should support safe-to-fail experiments that have clear learning goals. This demonstrates trust and enables teams to discover better ways of working through experience.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 24,
    question: "How should leaders respond to pressure from stakeholders for more detailed commitments and predictions?",
    options: [
      "Pressure teams to provide detailed estimates and commit to delivery dates",
      "Create a buffer layer of project managers to shield teams from stakeholders",
      "Promise what stakeholders want to maintain relationships then adjust later",
      "Educate stakeholders on complexity, empiricism, and evidence-based forecasting"
    ],
    correctAnswer: 3,
    explanation: "Leaders should educate stakeholders on working in complexity - using empiricism, frequent delivery, and data-driven forecasting. This includes explaining why detailed long-term predictions are unreliable and how frequent delivery reduces risk.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 25,
    question: "What does 'respect for people' mean in Agile leadership?",
    options: [
      "Trusting people's capabilities while providing support and challenging growth",
      "Always agreeing with team decisions and never challenging their thinking",
      "Being polite and avoiding difficult conversations to maintain relationships",
      "Giving everyone equal say regardless of expertise or context"
    ],
    correctAnswer: 0,
    explanation: "Respect means trusting people as professionals, valuing their input, and treating them as capable adults. It also means caring enough to challenge thinking, provide honest feedback, and expect high standards. Respect isn't the same as permissiveness.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 26,
    question: "How can leadership best support Scrum Masters in the organization?",
    options: [
      "Give them authority to mandate Agile practices and hold teams accountable",
      "Remove organizational impediments and reinforce the importance of their role",
      "Measure their success by team velocity improvements and adherence to Scrum",
      "Use them as project managers to track and report on team progress"
    ],
    correctAnswer: 1,
    explanation: "Scrum Masters need leadership support to address organizational impediments and to have their role respected and understood. Leaders should reinforce that Scrum Masters are not project managers or taskmasters, but servant leaders focused on team effectiveness.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 27,
    question: "What role does feedback play in Agile leadership?",
    options: [
      "Feedback should be formalized in annual performance reviews",
      "Feedback should flow primarily from leadership down to teams",
      "Continuous feedback loops enable adaptation and learning at all levels",
      "Too much feedback creates overhead and should be minimized"
    ],
    correctAnswer: 2,
    explanation: "Agile organizations thrive on feedback loops - from customers, between team members, from teams to leaders, and about organizational effectiveness. Fast, multi-directional feedback enables empiricism and continuous improvement throughout the system.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 28,
    question: "How should leaders handle a team that is resistant to Agile adoption?",
    options: [
      "Replace the team with people who are more receptive to change",
      "Mandate Agile practices and set deadlines for compliance",
      "Allow them to continue working their current way to avoid conflict",
      "Understand their concerns, address root causes, and provide support"
    ],
    correctAnswer: 3,
    explanation: "Resistance often signals legitimate concerns - lack of understanding, fear of change, past bad experiences, or real impediments. Leaders should listen, understand root causes, address legitimate concerns, and provide support rather than forcing compliance.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 29,
    question: "What is the relationship between Agile leadership and command-and-control management?",
    options: [
      "Agile leadership adapts style to context but default to enabling over controlling",
      "They are completely incompatible and cannot coexist in any form",
      "Command-and-control is appropriate for Agile teams when deadlines are tight",
      "Agile leadership means never providing direction or making decisions"
    ],
    correctAnswer: 0,
    explanation: "Effective leaders understand when different approaches are needed. In true emergencies or very simple contexts, directive leadership may be appropriate. However, the default for complex knowledge work should be enabling, coaching, and facilitating rather than controlling.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 30,
    question: "How can leadership help teams focus on delivering value rather than just completing tasks?",
    options: [
      "Track output metrics like story points and lines of code written",
      "Ensure clear understanding of product vision and connect work to outcomes",
      "Provide detailed specifications so teams know exactly what to build",
      "Reward teams based on how many features they deliver each Sprint"
    ],
    correctAnswer: 1,
    explanation: "Value focus requires understanding 'why' - the vision, goals, and desired outcomes. Leaders ensure this context is clear and help teams connect their work to impact. This enables teams to make good decisions and optimize for outcomes rather than just completing tasks.",
    domain: "Value-Driven Delivery",
    difficulty: "Foundation"
  },
  {
    id: 31,
    question: "What should leadership do about teams that become overly reliant on external Agile coaches?",
    options: [
      "Continue providing coaches indefinitely to ensure Agile success",
      "Remove coaches immediately to force teams to become self-sufficient",
      "Develop internal coaching capability and gradually reduce external dependency",
      "Use coaches to enforce Agile compliance across all teams"
    ],
    correctAnswer: 2,
    explanation: "External coaches are valuable for initial transformation, but long-term dependency is unhealthy. Leaders should develop internal capability, enable teams to become self-improving, and view coaching as a temporary accelerator rather than a permanent need.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 32,
    question: "How should Agile leaders approach organizational metrics and measurement?",
    options: [
      "Minimize metrics since they can be gamed and create wrong behaviors",
      "Measure everything possible to have complete visibility into the organization",
      "Focus primarily on velocity and throughput to track productivity",
      "Use a balanced set of metrics focused on outcomes, quality, and health"
    ],
    correctAnswer: 3,
    explanation: "Metrics shape behavior, so they must be chosen carefully. Leaders should use balanced metrics covering business outcomes, quality, customer satisfaction, team health, and flow - not just output. Single metrics or too many metrics both create problems.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 33,
    question: "What is leadership's role in managing dependencies between teams?",
    options: [
      "Minimize dependencies through organizational design and architecture",
      "Create detailed coordination processes and regular synchronization meetings",
      "Assign a dependency manager to track and coordinate all inter-team work",
      "Accept dependencies as inevitable and focus on managing them efficiently"
    ],
    correctAnswer: 0,
    explanation: "The best approach to dependencies is eliminating them through thoughtful organizational design and architectural decisions. Leaders should structure teams and systems to minimize handoffs and enable autonomy, rather than accepting dependencies and layering on coordination.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 34,
    question: "How can leaders support Product Owners in delivering value?",
    options: [
      "Make product decisions for them to ensure alignment with business strategy",
      "Provide strategic context, stakeholder access, and protect from distractions",
      "Set specific feature delivery targets and hold them accountable to roadmaps",
      "Require detailed business cases and ROI projections before any work starts"
    ],
    correctAnswer: 1,
    explanation: "Product Owners need clear strategic direction, access to stakeholders and customers, and protection from organizational noise. Leaders should enable their decision-making by providing context and removing impediments rather than making decisions for them.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 35,
    question: "What does 'empirical process control' mean for leadership decision-making?",
    options: [
      "All decisions should be based on historical data and past experience",
      "Defer all decisions until sufficient data is available to ensure correctness",
      "Make decisions based on observation, experimentation, and adaptation",
      "Use statistical models and predictions to make all important decisions"
    ],
    correctAnswer: 2,
    explanation: "Empiricism in complex environments means making decisions based on what you observe, trying approaches, gathering feedback, and adapting. It's about transparency, inspection, and adaptation - not prediction or waiting for perfect information.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 36,
    question: "How should leaders respond when teams identify impediments beyond their control?",
    options: [
      "Acknowledge the impediments but expect teams to work around them",
      "Add the impediments to a backlog and address when time permits",
      "Challenge teams to find creative solutions rather than escalating",
      "Take ownership of removing organizational impediments promptly"
    ],
    correctAnswer: 3,
    explanation: "Organizational impediments require leadership action. While teams should solve what they can, leaders must take ownership of systemic issues, policies, and structural problems. Prompt action on impediments demonstrates commitment to team effectiveness.",
    domain: "Creating High-Performing Teams",
    difficulty: "Foundation"
  },
  {
    id: 37,
    question: "What is the leadership role in knowledge management in Agile organizations?",
    options: [
      "Create conditions for collaboration and knowledge sharing between people",
      "Maintain comprehensive documentation systems and enforce documentation standards",
      "Hire knowledge management specialists to capture and organize information",
      "Ensure all knowledge is written down to reduce dependency on individuals"
    ],
    correctAnswer: 0,
    explanation: "Knowledge in Agile organizations flows through collaboration, pair work, communities of practice, and team interactions - not primarily through documentation. Leaders create the conditions and culture where knowledge sharing happens naturally through human interaction.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 38,
    question: "How should Agile leaders think about efficiency vs. effectiveness?",
    options: [
      "Efficiency should be prioritized since it reduces costs and waste",
      "Focus on effectiveness (doing the right things) over efficiency (doing things right)",
      "Both are equally important and should be balanced at all times",
      "Effectiveness matters for strategy while efficiency matters for execution"
    ],
    correctAnswer: 1,
    explanation: "It's better to be effective (solving the right problems) than efficient at doing the wrong things. Leaders should optimize for delivering value and achieving outcomes rather than resource utilization or activity. Effectiveness enables strategy; efficiency can optimize tactics.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 39,
    question: "What should leadership do when Agile practices conflict with existing HR policies?",
    options: [
      "Maintain HR policies until the Agile transformation is fully successful",
      "Create exceptions for Agile teams while others follow standard policies",
      "Work with HR to evolve policies that support Agile ways of working",
      "Prioritize compliance with HR policies over Agile principles"
    ],
    correctAnswer: 2,
    explanation: "HR policies around performance reviews, compensation, career paths, and hiring often conflict with Agile values. Leaders should partner with HR to evolve policies that support collaboration, learning, team performance, and Agile culture rather than maintaining legacy approaches.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 40,
    question: "How can leaders foster continuous improvement in their organization?",
    options: [
      "Schedule annual improvement initiatives and improvement projects",
      "Set improvement targets and track progress against improvement goals",
      "Hire continuous improvement specialists to drive improvement programs",
      "Create a culture where reflection, experimentation, and learning are ongoing"
    ],
    correctAnswer: 3,
    explanation: "Continuous improvement is a mindset and culture, not a program. Leaders foster it by modeling learning behavior, creating safety for experimentation, celebrating learning from failures, and ensuring teams have time to reflect and improve regularly.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 41,
    question: "What is the relationship between leadership and self-organization in Agile teams?",
    options: [
      "Leaders set direction and boundaries while teams self-organize within them",
      "Leaders should step back completely to allow true self-organization",
      "Self-organization means teams make all decisions without leadership input",
      "Leaders guide self-organization by assigning work to team members"
    ],
    correctAnswer: 0,
    explanation: "Self-organization doesn't mean no leadership. Leaders provide vision, strategy, constraints, and support. Teams self-organize around how to achieve goals within these parameters. Leadership creates the container; teams organize the content.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 42,
    question: "How should leaders handle individual performance in team-based Agile organizations?",
    options: [
      "Maintain individual metrics to ensure accountability and identify top performers",
      "Focus on team performance and outcomes rather than individual metrics",
      "Eliminate all performance evaluation in favor of team-based assessment only",
      "Use peer reviews exclusively to determine individual performance"
    ],
    correctAnswer: 1,
    explanation: "While individuals matter, Agile emphasizes team performance and collaboration. Individual metrics can create competition, reduce knowledge sharing, and undermine teamwork. Leaders should focus on team effectiveness, outcomes, and fostering collaborative behaviors.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 43,
    question: "What should leadership prioritize when multiple teams need the same specialized skill?",
    options: [
      "Share specialists across teams to maximize their utilization efficiency",
      "Hire more specialists to ensure every team has dedicated coverage",
      "Develop the skill across teams to reduce dependency on specialists",
      "Create a pool of specialists managed centrally and assigned to teams"
    ],
    correctAnswer: 2,
    explanation: "Shared specialists create dependencies and bottlenecks that slow flow. Leaders should invest in developing skills more broadly across teams to enable autonomy and reduce wait times, even if it seems less efficient initially.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 44,
    question: "How should Agile leaders view quality?",
    options: [
      "Quality can be traded off against speed when deadlines are important",
      "Quality should be measured and tracked separately from delivery metrics",
      "Quality is the responsibility of QA teams and test automation",
      "Quality is non-negotiable and enables sustainable delivery speed"
    ],
    correctAnswer: 3,
    explanation: "Quality enables speed - high quality code is easier to change, has fewer bugs to fix, and allows teams to move fast sustainably. Leaders must understand that 'quality vs. speed' is a false trade-off and that quality is built in, not inspected in.",
    domain: "Value-Driven Delivery",
    difficulty: "Foundation"
  },
  {
    id: 45,
    question: "What is leadership's role in managing technical architecture decisions?",
    options: [
      "Create architectural guardrails while enabling team technical autonomy",
      "Make all significant architectural decisions to ensure alignment",
      "Hire an architecture team to make all technical decisions for teams",
      "Leave all technical decisions to teams since they own the architecture"
    ],
    correctAnswer: 0,
    explanation: "Leaders should ensure some architectural coherence through principles, standards, and strategic choices, while giving teams autonomy on implementation. Too much central control slows delivery; too little creates fragmentation and technical debt.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 46,
    question: "How can leaders identify whether their organization is truly becoming more Agile?",
    options: [
      "Count the number of teams using Agile practices and holding ceremonies",
      "Measure business outcomes, time to market, quality, and team satisfaction",
      "Survey employees about their knowledge of Agile frameworks and principles",
      "Track the number of certifications and training hours completed"
    ],
    correctAnswer: 1,
    explanation: "True agility shows in results - faster time to market, better quality, improved customer satisfaction, engaged teams, and ability to adapt. Measures of Agile adoption (ceremonies, practices, certifications) don't indicate actual organizational agility or value delivery.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 47,
    question: "What should leadership do when teams struggle with managing their own work?",
    options: [
      "Reintroduce project managers to help teams organize and track work",
      "Simplify work into smaller pieces that are easier to manage",
      "Provide coaching and support while teams develop self-management capabilities",
      "Set clear processes and procedures for how teams should manage work"
    ],
    correctAnswer: 2,
    explanation: "Self-management is a capability that develops over time with practice and support. Rather than rescuing teams or reverting to traditional management, leaders should provide coaching, patience, and learning opportunities while teams develop maturity.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 48,
    question: "How should Agile leaders approach budget and funding in their organization?",
    options: [
      "Maintain project-based funding and require detailed ROI calculations",
      "Give teams complete budget autonomy to allocate funds as they see fit",
      "Continue traditional annual budgeting cycles without changes",
      "Move toward funding value streams and products rather than projects"
    ],
    correctAnswer: 3,
    explanation: "Project-based funding creates overhead, delays, and forces detailed upfront planning. Funding products/value streams enables teams to adapt spending based on learning and focus on outcomes. This shift is essential for organizational agility.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 49,
    question: "What does 'leading by example' mean for Agile leaders?",
    options: [
      "Consistently demonstrating Agile values through visible behavior and decisions",
      "Doing technical work alongside teams to show leadership skills",
      "Being the first to adopt new Agile practices and tools in the organization",
      "Attending all team ceremonies to show support for Agile processes"
    ],
    correctAnswer: 0,
    explanation: "Leading by example means embodying Agile values in how you work - transparency in communication, admitting mistakes, collaborating openly, adapting based on feedback. People watch what leaders do more than what they say. Actions must match words.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 50,
    question: "How should leaders handle pressure to show detailed progress to senior stakeholders?",
    options: [
      "Create comprehensive status reports showing all work across all teams",
      "Focus on demonstrating working product increments and business outcomes",
      "Implement project tracking tools that provide real-time dashboards",
      "Have teams provide detailed status updates in regular review meetings"
    ],
    correctAnswer: 1,
    explanation: "The best progress measure is working product that delivers value. Leaders should shift stakeholder focus from activity and plans to actual results - working features, customer feedback, and business metrics. Demonstrate progress through outcomes, not status reports.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 51,
    question: "What is the leadership responsibility for team composition and stability?",
    options: [
      "Regularly rotate team members to spread knowledge and prevent silos",
      "Reorganize teams whenever new projects or initiatives are started",
      "Maintain stable teams to enable high performance and strong collaboration",
      "Allow teams to self-select members based on skill needs and preferences"
    ],
    correctAnswer: 2,
    explanation: "Stable teams develop strong working relationships, shared understanding, and high performance over time. Frequent reorganization or rotation destroys this and forces teams to repeatedly reform. Leaders should resist the urge to reorganize and protect team stability.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 52,
    question: "How should Agile leaders think about planning and predictability?",
    options: [
      "Eliminate planning since Agile is about responding to change",
      "Create detailed plans upfront and track variance as a quality metric",
      "Accept that complex work is unpredictable and avoid making commitments",
      "Use empirical evidence and frequent delivery to improve forecasting"
    ],
    correctAnswer: 3,
    explanation: "Planning is essential, but in complexity, detailed long-term plans are unreliable. Leaders should use empirical data from frequent delivery to forecast probabilistically. Predictability improves through evidence, not through detailed upfront planning.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 53,
    question: "What should leadership do when customer feedback conflicts with the product roadmap?",
    options: [
      "Treat feedback as valuable learning and be willing to adapt the roadmap",
      "Stick to the roadmap since it reflects strategic decisions and commitments",
      "Ask the Product Owner to decide without leadership involvement",
      "Gather more feedback to determine if the initial input is representative"
    ],
    correctAnswer: 0,
    explanation: "Roadmaps are hypotheses about what will deliver value. Customer feedback provides real evidence. Leaders should create a culture where learning from customers trumps sticking to plans, while ensuring changes are made thoughtfully, not reactively.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 54,
    question: "How can leaders support collaboration between distributed teams?",
    options: [
      "Require all teams to work from offices to enable face-to-face collaboration",
      "Invest in collaboration tools, practices, and intentional communication rhythms",
      "Minimize distributed work by co-locating all team members when possible",
      "Accept reduced collaboration as an inevitable cost of distributed teams"
    ],
    correctAnswer: 1,
    explanation: "While co-location can help, many successful Agile teams are distributed. Leaders should invest in enabling tools, establish working agreements, create communication rhythms, and foster a culture of transparency and over-communication to make distributed collaboration effective.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 55,
    question: "What is the leadership role in managing organizational change?",
    options: [
      "Announce changes and set deadlines for implementation and compliance",
      "Hire change management consultants to implement the transformation",
      "Create urgency, vision, and support while enabling bottom-up adaptation",
      "Change everything at once to prevent confusion from gradual evolution"
    ],
    correctAnswer: 2,
    explanation: "Effective change requires leadership to create urgency (why change), provide vision (where we're going), remove impediments, and support people through transition. Change happens through people, not through mandates. Leaders enable change; they don't just announce it.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 56,
    question: "How should Agile leaders view mistakes and failures in their organization?",
    options: [
      "Mistakes should be minimized through better processes and controls",
      "Failures should be documented to prevent them from recurring",
      "Leaders should shield teams from the consequences of failures",
      "Intelligent failures should be surfaced quickly and mined for learning"
    ],
    correctAnswer: 3,
    explanation: "In complex work, some failure is inevitable when taking intelligent risks. Leaders should create an environment where failures are surfaced quickly (psychological safety), examined transparently, and turned into learning. The fear of failure is more dangerous than failure itself.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 57,
    question: "What should leadership prioritize when scaling Agile across the organization?",
    options: [
      "Focus on leadership mindset and culture before adding coordination mechanisms",
      "Implement a standardized framework consistently across all teams",
      "Add coordination roles and processes to manage dependencies",
      "Ensure all teams are trained and certified before scaling further"
    ],
    correctAnswer: 0,
    explanation: "Scaling frameworks and coordination mechanisms don't create agility - leadership and culture do. Before adding coordination layers, leaders should ensure they and other leaders embody Agile values. Culture and mindset enable scaling; frameworks alone don't.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 58,
    question: "How can leaders ensure alignment without creating unnecessary overhead?",
    options: [
      "Implement regular cross-team meetings and coordination ceremonies",
      "Create clear vision, strategy, and objectives that guide team decisions",
      "Require teams to get approval for significant decisions",
      "Use a governance board to review and align all team activities"
    ],
    correctAnswer: 1,
    explanation: "The most effective alignment comes from clear vision, strategy, and objectives that enable distributed decision-making. When teams understand goals and constraints, they can align through their decisions without coordination overhead. Alignment through control creates bureaucracy.",
    domain: "Strategic Vision",
    difficulty: "Intermediate"
  },
  {
    id: 59,
    question: "What is leadership's role in managing conflicts between short-term pressures and long-term health?",
    options: [
      "Prioritize short-term delivery since long-term success requires surviving today",
      "Focus exclusively on long-term strategy and ignore short-term pressures",
      "Make explicit trade-offs and ensure some investment in long-term sustainability",
      "Let teams decide how to balance immediate needs with future considerations"
    ],
    correctAnswer: 2,
    explanation: "Leaders must balance short-term delivery with long-term sustainability. This means making trade-offs explicit, ensuring technical health isn't sacrificed repeatedly, and protecting time for sustainability work. Pure focus on either timeframe creates problems.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 60,
    question: "How should Agile leaders approach learning and development in their organization?",
    options: [
      "Provide formal training programs and require certification completion",
      "Hire people who already have all needed skills to avoid training costs",
      "Assign learning and development responsibilities to HR and L&D teams",
      "Create opportunities for learning through experience, experimentation, and reflection"
    ],
    correctAnswer: 3,
    explanation: "Learning in complex domains happens primarily through doing, experimenting, reflecting, and collaborating. While training has value, leaders should focus on creating an environment where learning happens continuously through work - experimentation, pairing, communities of practice.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 61,
    question: "What should leadership do when stakeholders request features that teams believe will not deliver value?",
    options: [
      "Facilitate dialogue to understand the underlying need and explore options",
      "Deliver what stakeholders request since they understand business needs",
      "Have the Product Owner make the decision without leadership involvement",
      "Run an experiment to prove whether the feature will deliver value"
    ],
    correctAnswer: 0,
    explanation: "Leaders should facilitate conversations between stakeholders and teams to uncover the real need behind requests. Often, different solutions better serve the underlying need. Leaders help stakeholders and teams collaborate rather than forcing either perspective.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 62,
    question: "How can leaders identify systemic impediments in their organization?",
    options: [
      "Review impediment lists that teams maintain and track",
      "Look for patterns in problems across multiple teams and products",
      "Conduct surveys asking people to identify organizational problems",
      "Hire consultants to perform an organizational assessment"
    ],
    correctAnswer: 1,
    explanation: "Systemic impediments show up as patterns - the same problems recurring across teams, products, or time. Leaders should look for patterns rather than treating each instance as unique. Systemic problems require systemic solutions, not team-by-team fixes.",
    domain: "Systems Thinking",
    difficulty: "Intermediate"
  },
  {
    id: 63,
    question: "What is the relationship between Agile leadership and trust?",
    options: [
      "Trust must be earned before leaders can delegate decisions to teams",
      "Trust takes years to develop and cannot be accelerated",
      "Leaders should extend trust first and create conditions where trust can grow",
      "Trust is less important than clear processes and accountability"
    ],
    correctAnswer: 2,
    explanation: "Leaders must extend trust first - trusting people to be professionals, make good decisions, and learn from mistakes. Trust grows through psychological safety, transparency, and consistent behavior. Without leadership trust, teams cannot develop maturity.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 64,
    question: "How should leaders handle requests to add more people to speed up delivery?",
    options: [
      "Add people immediately since more people means more capacity",
      "Never add people once teams are formed to maintain stability",
      "Add people only if teams specifically request additional members",
      "Understand constraints and consider whether adding people will help or hurt"
    ],
    correctAnswer: 3,
    explanation: "Adding people to teams or projects often slows things down (Brooks's Law) due to communication overhead and onboarding. Leaders should understand whether people are the constraint and whether adding them will actually help, considering ramp-up time and team dynamics.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 65,
    question: "What should leadership focus on to improve organizational flow?",
    options: [
      "Reduce batch sizes, minimize work in progress, and eliminate delays",
      "Maximize resource utilization by keeping everyone busy at all times",
      "Implement more efficient project management tools and tracking",
      "Measure and improve individual productivity across all team members"
    ],
    correctAnswer: 0,
    explanation: "Flow improves through smaller batches, limiting WIP, reducing handoffs, and eliminating delays - not through maximizing utilization. Leaders should optimize for throughput and cycle time of value delivery, not for keeping people busy.",
    domain: "Systems Thinking",
    difficulty: "Advanced"
  },
  {
    id: 66,
    question: "How can Agile leaders foster psychological safety without sacrificing accountability?",
    options: [
      "Reduce expectations and standards to ensure everyone feels safe",
      "Create safety for interpersonal risks while maintaining clear performance expectations",
      "Focus on accountability first and address psychological safety later",
      "Let teams determine their own standards and expectations"
    ],
    correctAnswer: 1,
    explanation: "Psychological safety is about interpersonal risk (speaking up, admitting mistakes, challenging ideas) not about low standards. Leaders create safety for honest conversation and learning while maintaining high expectations for professional performance and outcomes.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 67,
    question: "What is leadership's role in promoting cross-functional collaboration?",
    options: [
      "Organize teams by function to maintain specialization and efficiency",
      "Allow collaboration to emerge naturally without organizational intervention",
      "Structure teams cross-functionally and remove incentives for functional silos",
      "Create liaison roles to coordinate between functional departments"
    ],
    correctAnswer: 2,
    explanation: "Collaboration is influenced by structure and incentives. Leaders should organize cross-functional teams around value delivery and remove policies/incentives that reward functional optimization over team outcomes. Structure enables or prevents collaboration.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 68,
    question: "How should leaders respond to requests for more detailed reporting on team activities?",
    options: [
      "Implement the requested reporting to satisfy stakeholder needs",
      "Refuse the request since detailed reporting conflicts with Agile principles",
      "Have teams provide the reports even if it takes time from delivery work",
      "Question the underlying need and offer alternatives that provide insight with less overhead"
    ],
    correctAnswer: 3,
    explanation: "Detailed activity reporting creates overhead without adding value. Leaders should understand what stakeholders really need (predictability? confidence? visibility?) and offer alternatives - product demonstrations, outcome metrics, direct stakeholder engagement.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 69,
    question: "What does 'value-driven delivery' mean for Agile leadership?",
    options: [
      "Optimizing for business outcomes and customer value rather than output",
      "Delivering the maximum number of features possible in each release",
      "Ensuring every feature delivers measurable ROI before development",
      "Prioritizing high-value features and deferring low-value work indefinitely"
    ],
    correctAnswer: 0,
    explanation: "Value-driven delivery means focusing on outcomes - solving customer problems, achieving business goals, and validating value through feedback. It's about delivering the right things (effectiveness) not just delivering more things (efficiency).",
    domain: "Value-Driven Delivery",
    difficulty: "Foundation"
  },
  {
    id: 70,
    question: "How can leaders tell if their Agile transformation is superficial ('fake Agile')?",
    options: [
      "Teams are not using all the prescribed practices from chosen framework",
      "Business results and organizational behavior haven't meaningfully changed",
      "Some teams are adopting Agile faster than others",
      "Teams are adapting Agile practices rather than following them exactly"
    ],
    correctAnswer: 1,
    explanation: "Superficial adoption shows in lack of real change - same decision-making patterns, same behaviors, same problems, just with new terminology. Real agility shows in improved outcomes, faster adaptation, better collaboration, and changed behaviors at all levels.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 71,
    question: "What should leadership do when different teams choose different Agile approaches?",
    options: [
      "Standardize on one approach to ensure consistency across the organization",
      "Allow complete autonomy without any organizational standards or guidance",
      "Support teams choosing approaches that fit their context while ensuring alignment",
      "Have teams justify their approach and approve only those that meet standards"
    ],
    correctAnswer: 2,
    explanation: "Context matters - different teams may benefit from different approaches. Leaders should support contextual adaptation while ensuring some alignment on principles, values, and how teams work together. Variety in approaches is healthy; variance in values is not.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 72,
    question: "How should Agile leaders balance competing stakeholder interests?",
    options: [
      "Give all stakeholders equal influence over product decisions",
      "Make decisions themselves based on political and organizational factors",
      "Use voting or consensus to determine priorities among stakeholders",
      "Enable Product Owners to make decisions informed by stakeholder input"
    ],
    correctAnswer: 3,
    explanation: "Product Owners need to balance stakeholder interests and make decisions about value and priorities. Leaders support this by ensuring Product Owners have appropriate authority, protecting them from pressure, and helping stakeholders understand the Product Owner role.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 73,
    question: "What is the leadership responsibility for building technical excellence?",
    options: [
      "Create a culture that values quality, learning, and technical practices",
      "Hire senior technical people to make all technical decisions",
      "Implement mandatory technical standards and review processes",
      "Leave technical excellence to teams since leadership lacks technical expertise"
    ],
    correctAnswer: 0,
    explanation: "Leaders create the culture and conditions for technical excellence - valuing quality, providing time for learning, celebrating good practices, not forcing speed over quality. Leaders don't need to be technical experts, but they must create an environment where excellence can thrive.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 74,
    question: "How should leaders approach vendor and outsourcing relationships in Agile organizations?",
    options: [
      "Manage vendors through detailed contracts and scope specifications",
      "Build collaborative partnerships focused on outcomes rather than outputs",
      "Avoid outsourcing entirely since it conflicts with Agile principles",
      "Use vendors only for non-critical work that doesn't require collaboration"
    ],
    correctAnswer: 1,
    explanation: "Agile vendor relationships should be collaborative partnerships focused on outcomes, with frequent feedback and adaptation. Traditional fixed-scope contracts create impediments. Leaders should structure vendor relationships to enable agility, not prevent it.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 75,
    question: "What is the most important characteristic of effective Agile leadership?",
    options: [
      "Deep knowledge of Agile frameworks, practices, and techniques",
      "Charisma and ability to inspire people to follow their vision",
      "Consistency in modeling Agile values through behavior and decisions",
      "Decisiveness in making quick decisions when teams are uncertain"
    ],
    correctAnswer: 2,
    explanation: "While knowledge, inspiration, and decisiveness have value, the most important characteristic is consistently modeling Agile values through visible behavior. People follow what leaders do more than what they say. Consistent behavior over time builds culture and trust.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 76,
    question: "How should leaders approach the tension between empowerment and accountability?",
    options: [
      "Reduce accountability expectations when giving teams more autonomy",
      "Hold people accountable for following prescribed processes and approaches",
      "Wait until teams prove themselves before giving them meaningful autonomy",
      "Create clarity on outcomes expected while giving teams authority over how to achieve them"
    ],
    correctAnswer: 3,
    explanation: "True empowerment requires clear accountability for outcomes, not compliance with processes. Leaders define 'what' success looks like and hold teams accountable for results, while empowering them with autonomy over 'how' they achieve those outcomes.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 77,
    question: "What does 'working software over comprehensive documentation' mean for leadership priorities?",
    options: [
      "Focus investment on delivering working products rather than on planning and documentation processes",
      "Leaders should eliminate all documentation requirements from teams",
      "Documentation should only be created after software is completely finished",
      "Leaders should never ask teams to document their work"
    ],
    correctAnswer: 0,
    explanation: "The value statement doesn't eliminate documentation—it prioritizes working software. Leaders should focus resources and attention on value delivery while ensuring documentation serves a real purpose and is 'just enough' to be useful.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 78,
    question: "How can leaders best support teams dealing with technical debt?",
    options: [
      "Mandate a specific percentage of capacity for technical debt work",
      "Create visibility of technical debt impact and support teams in balancing it with feature work",
      "Tell teams to handle technical debt on their own time without affecting velocity",
      "Prioritize all customer features over technical debt until features are complete"
    ],
    correctAnswer: 1,
    explanation: "Leaders create transparency about technical debt and its business impact (slower delivery, more bugs, higher costs). They support teams in making these trade-offs visible and having conversations with stakeholders about balancing technical health with feature delivery.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 79,
    question: "What role should leaders play in team conflicts about technical approaches?",
    options: [
      "Stay completely out of technical discussions—teams must resolve these independently",
      "Make the final technical decisions when teams cannot agree quickly",
      "Ensure teams have skills and practices to resolve technical disagreements productively",
      "Bring in external experts to settle all technical disputes"
    ],
    correctAnswer: 2,
    explanation: "Leaders shouldn't micromanage technical decisions or stay completely hands-off. They ensure teams have the skills, practices (like architecture spikes, proofs of concept), and safety to have productive technical debates and make good decisions together.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 80,
    question: "How should leaders respond when Agile practices seem to be slowing teams down?",
    options: [
      "Immediately remove the practices causing friction",
      "Tell teams they must follow all practices exactly as prescribed in frameworks",
      "Replace the current framework with a different Agile approach",
      "Investigate the underlying problems and adapt practices to serve their intended purpose"
    ],
    correctAnswer: 3,
    explanation: "When practices feel burdensome, leaders should investigate why. Often the issue is how practices are being applied, misunderstanding their purpose, or underlying organizational impediments. Leaders help teams understand the 'why' and adapt practices intelligently.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 81,
    question: "What is the primary purpose of organizational transparency in Agile environments?",
    options: [
      "Enable informed decision-making and continuous improvement throughout the organization",
      "To identify and punish teams that are underperforming",
      "To satisfy compliance and regulatory reporting requirements",
      "Create competition between teams by making all metrics public"
    ],
    correctAnswer: 0,
    explanation: "Transparency in Agile serves learning and improvement, not surveillance or competition. When people can see the current state honestly, they can make better decisions, adapt quickly, and identify improvement opportunities. Transparency without trust becomes a weapon instead of a tool.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 82,
    question: "How should leaders balance standardization and team autonomy?",
    options: [
      "Standardize everything for consistency and efficiency across the organization",
      "Standardize only what must be consistent while maximizing team autonomy in execution",
      "Let every team do whatever they want with no organizational standards",
      "Rotate teams through different approaches to find the single best way"
    ],
    correctAnswer: 1,
    explanation: "Leaders distinguish between what genuinely needs consistency (often integration points, security standards, critical quality practices) and where teams benefit from autonomy. Over-standardization kills innovation; zero standards create chaos. The balance serves both coordination and creativity.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 83,
    question: "What does 'sustainable pace' mean for leadership decisions?",
    options: [
      "Teams should work exactly 40 hours per week with no exceptions",
      "Never ask teams to work extra hours under any circumstances",
      "Make decisions that enable long-term value delivery without burning out people",
      "Allow teams to work as many hours as they choose without leadership involvement"
    ],
    correctAnswer: 2,
    explanation: "Sustainable pace means the organization can maintain its delivery capability indefinitely. Leaders make decisions about commitments, deadlines, and workload that don't require chronic overtime. Occasional extra effort for critical situations is different from systemic overwork.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 84,
    question: "How should leaders approach skill gaps in Agile teams?",
    options: [
      "Only hire people who already have all the skills needed",
      "Send people to training courses but don't allocate time for applying new skills",
      "Replace team members who lack skills with more qualified people",
      "Create environments where learning is valued and supported as part of delivery work"
    ],
    correctAnswer: 3,
    explanation: "Agile leaders build learning organizations. They create safety for experimentation, allocate time for skill development, support pair programming and mentoring, and view learning as integral to delivery—not separate from it. Growing people's capabilities builds sustainable organizational capacity.",
    domain: "Creating High-Performing Teams",
    difficulty: "Foundation"
  },
  {
    id: 85,
    question: "What is the leadership role in establishing Definition of Done?",
    options: [
      "Support teams in creating appropriate standards while ensuring organizational needs are met",
      "Leaders should define the Definition of Done for all teams to ensure consistency",
      "Let teams define Done however they want without any leadership input",
      "Enforce the industry standard Definition of Done across all teams"
    ],
    correctAnswer: 0,
    explanation: "Leaders ensure teams understand organizational quality expectations and stakeholder needs, but teams define their specific Definition of Done. Leaders remove impediments to meeting high standards (like access to test environments) and address teams whose standards are insufficient.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 86,
    question: "How should leaders approach teams that resist Agile adoption?",
    options: [
      "Force compliance through mandates and performance management",
      "Understand their concerns, address legitimate issues, and help them see value in change",
      "Ignore resistance and wait for resistant people to leave the organization",
      "Immediately replace resistant team members with Agile-experienced people"
    ],
    correctAnswer: 1,
    explanation: "Resistance often signals legitimate concerns about how change is happening or fears about impacts. Leaders listen to understand, address real issues, involve people in shaping the change, and help them experience benefits. Forced compliance creates theater, not genuine agility.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 87,
    question: "What does 'lead by example' mean in Agile leadership?",
    options: [
      "Leaders should do the technical work alongside team members",
      "Leaders must have been Scrum Masters or coaches before leading",
      "Demonstrate Agile values and principles in your own leadership behavior",
      "Always attend every team ceremony to show commitment"
    ],
    correctAnswer: 2,
    explanation: "Leading by example means embodying the values you want to see: being transparent about challenges, adapting based on feedback, respecting people's expertise, focusing on outcomes over process compliance. Your behavior sets culture more powerfully than your words or policies.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 88,
    question: "How should leaders respond to requests for more predictability from stakeholders?",
    options: [
      "Return to traditional waterfall planning to provide detailed long-term plans",
      "Refuse all requests for forecasting since Agile means embracing uncertainty",
      "Pressure teams to commit to specific dates and deliverables regardless of uncertainty",
      "Help stakeholders understand probabilistic forecasting based on empirical data"
    ],
    correctAnswer: 3,
    explanation: "Leaders help stakeholders understand that predictability in complex work comes from empirical forecasting (using actual delivery data, not wishful thinking) and from frequent delivery that allows course correction. They educate on working with uncertainty rather than creating false confidence.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 89,
    question: "What is the impact of leadership visibility in Agile organizations?",
    options: [
      "Strategic visibility enables leaders to understand reality and remove impediments",
      "Leaders should minimize visibility to avoid influencing team decisions",
      "High visibility helps leaders spot problems and intervene quickly to fix them",
      "Leaders should be equally visible to all levels of the organization at all times"
    ],
    correctAnswer: 0,
    explanation: "Leaders need enough visibility to understand what's actually happening (not filtered through reports) and to build relationships that enable them to help. But too much presence or the wrong kind can stifle autonomy. Strategic visibility means going to where the work happens, listening to learn, and acting on systemic issues.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 90,
    question: "How should leaders approach innovation in Agile organizations?",
    options: [
      "Create separate innovation teams disconnected from delivery teams",
      "Build innovation into regular work through experimentation and learning cycles",
      "Only allow innovation after all planned features are delivered",
      "Mandate specific percentages of time for innovation projects"
    ],
    correctAnswer: 1,
    explanation: "Innovation thrives when it's integrated into regular work, not separated. Leaders create conditions where teams can experiment safely, learn from customers quickly, and evolve solutions. Innovation isn't a separate activity—it's how Agile teams work when given appropriate goals and autonomy.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 91,
    question: "What is the relationship between Agile leadership and budgeting?",
    options: [
      "Traditional annual budgeting cycles are incompatible with Agile and must be eliminated",
      "Budgeting should be completely decentralized to individual teams",
      "Leaders adapt funding models to enable flexibility and faster value delivery",
      "Agile organizations don't need budgets since they embrace change"
    ],
    correctAnswer: 2,
    explanation: "Leaders work to evolve funding from project-based to product/capability-based funding, from annual detailed budgets to adaptive funding with review points. They help finance understand the need for flexibility while maintaining appropriate governance. Complete elimination of budgets isn't realistic or necessary.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 92,
    question: "How should leaders address different maturity levels across teams?",
    options: [
      "Require all teams to advance at the same pace through standardized maturity levels",
      "Focus resources only on the most advanced teams to maximize ROI",
      "Force struggling teams to adopt practices from high-performing teams",
      "Provide differentiated support based on each team's context and needs"
    ],
    correctAnswer: 3,
    explanation: "Teams have different contexts, challenges, and starting points. Leaders provide coaching and resources appropriate to each team's situation while sharing learnings across teams. Cookie-cutter approaches ignore context; neglecting struggling teams creates systemic weakness.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 93,
    question: "What does 'inspect and adapt' mean for leadership practices?",
    options: [
      "Regularly examine leadership effectiveness and evolve based on feedback and outcomes",
      "Leaders should only inspect and adapt team-level practices, not their own",
      "Inspect team performance weekly and adapt resource allocation accordingly",
      "Leadership practices should remain stable to provide consistency for teams"
    ],
    correctAnswer: 0,
    explanation: "Leaders must apply empiricism to their own work. This means gathering feedback on leadership effectiveness, examining outcomes of leadership decisions, and adapting approaches. Leadership practices should evolve as the organization learns and changes.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 94,
    question: "How should leaders support teams working on exploratory or research work?",
    options: [
      "Require the same delivery cadence and metrics as feature development teams",
      "Provide autonomy with clear learning goals and appropriate evaluation of progress",
      "Separate research completely from delivery teams to avoid slowing down features",
      "Only allow research work after all feature commitments are met"
    ],
    correctAnswer: 1,
    explanation: "Exploratory work requires different measures than feature delivery. Leaders define clear learning objectives and evaluation criteria appropriate to the work, provide needed autonomy, and integrate learning back into delivery. Forcing inappropriate metrics distorts behavior without improving outcomes.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 95,
    question: "What role do leaders play in scaling Agile practices across the organization?",
    options: [
      "Select and mandate a specific scaling framework for everyone to follow uniformly",
      "Let each team independently choose any practices without coordination",
      "Guide principled scaling that maintains agility while enabling effective coordination",
      "Hire external consultants to design and implement the scaling approach"
    ],
    correctAnswer: 2,
    explanation: "Leaders help the organization scale intelligently by maintaining Agile principles at scale, enabling coordination where needed (integration, dependencies) while preserving team autonomy, and avoiding both chaos and over-prescription. Context and learning guide scaling decisions.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 96,
    question: "How should leaders approach tools and technology decisions in Agile environments?",
    options: [
      "Standardize all tools across the organization for consistency and cost savings",
      "Let teams use any tools they want without any organizational coordination",
      "Always choose the most popular or newest Agile tools in the market",
      "Support teams in selecting tools that serve their work while managing integration needs"
    ],
    correctAnswer: 3,
    explanation: "Leaders balance team autonomy with organizational needs. Teams should have input on tools that affect their daily work, but leaders consider integration, security, cost, and support. The goal is enabling effective work, not tool standardization for its own sake or unmanaged proliferation.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 97,
    question: "What does 'customer collaboration over contract negotiation' mean for leadership?",
    options: [
      "Focus on building partnerships and mutual success rather than just protecting legal interests",
      "Leaders should eliminate all contracts and formal agreements",
      "Contracts are unnecessary in Agile organizations since requirements change",
      "Always give customers everything they ask for without negotiation"
    ],
    correctAnswer: 0,
    explanation: "The value statement recognizes that contracts are necessary but shouldn't define the relationship. Leaders create contract structures that enable collaboration and adaptation while protecting both parties. The focus is on shared success, not adversarial protection.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 98,
    question: "How should leaders respond when team velocity decreases?",
    options: [
      "Immediately pressure teams to return to previous velocity levels",
      "Investigate underlying causes and address systemic issues affecting delivery",
      "Accept any velocity change without question since estimation is imperfect",
      "Replace the lowest-performing team members to improve overall velocity"
    ],
    correctAnswer: 1,
    explanation: "Velocity changes signal something worth understanding—technical debt accumulating, team composition changes, work complexity increasing, external dependencies growing. Leaders investigate with curiosity rather than judgment, addressing root causes rather than treating the symptom.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 99,
    question: "What is the leadership role in fostering a learning culture?",
    options: [
      "Send people to training courses but don't change work practices or time allocation",
      "Only reward successful outcomes, never failed experiments or learning attempts",
      "Create safety for experimentation, time for learning, and celebration of knowledge sharing",
      "Require everyone to spend a fixed percentage of time on learning activities"
    ],
    correctAnswer: 2,
    explanation: "Learning cultures require psychological safety to experiment and fail, explicit time for learning and reflection, systems for sharing knowledge, and recognition that learning drives improvement. Leaders model learning, ask about experiments, and ensure systems support rather than punish intelligent failure.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 100,
    question: "How should leaders balance team stability with organizational needs for flexibility?",
    options: [
      "Never change team composition once teams are formed",
      "Frequently rotate people between teams to maximize organizational flexibility",
      "Let individuals choose which team to join whenever they want",
      "Maintain team stability while making thoughtful changes when clearly beneficial"
    ],
    correctAnswer: 3,
    explanation: "Stable teams build high performance over time through trust, shared understanding, and optimized collaboration. But organizations also need flexibility for new initiatives or changing priorities. Leaders protect stability while making intentional changes when the value clearly outweighs the cost of disruption.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 101,
    question: "What does 'value-driven delivery' mean for prioritization decisions?",
    options: [
      "Make prioritization decisions based on holistic value including risk, learning, and outcomes",
      "Always work on the highest revenue-generating features first",
      "Let teams decide all prioritization based on technical considerations",
      "Prioritize based on which stakeholder has the most organizational influence"
    ],
    correctAnswer: 0,
    explanation: "Value is multidimensional—not just revenue but also risk reduction, learning, strategic positioning, customer satisfaction, and operational efficiency. Leaders help organizations make prioritization decisions considering all value dimensions and using empirical evidence to validate assumptions.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 102,
    question: "How should leaders support distributed or remote Agile teams?",
    options: [
      "Require all teams to be co-located to enable true Agile practices",
      "Adapt practices and provide tools that enable effective distributed collaboration",
      "Treat distributed teams exactly the same as co-located teams without adaptation",
      "Only allow asynchronous communication to accommodate all time zones"
    ],
    correctAnswer: 1,
    explanation: "Leaders acknowledge that distribution adds complexity but doesn't prevent agility. They invest in collaboration tools, adapt practices for distributed work (like ceremony timing and documentation), and focus on outcomes. They don't pretend distribution doesn't matter or give up on synchronous collaboration entirely.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 103,
    question: "What is the role of leadership in technical excellence?",
    options: [
      "Make all technical decisions to ensure consistent quality standards",
      "Stay completely out of technical matters since leaders aren't developers",
      "Create conditions and expectations that enable teams to maintain technical excellence",
      "Focus only on delivery speed and let teams manage quality on their own"
    ],
    correctAnswer: 2,
    explanation: "Leaders set expectations for technical quality, provide time and resources for excellence, and remove impediments (like inadequate test environments). They don't need to make technical decisions but must understand that technical excellence enables speed and that cutting corners creates future slowness.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 104,
    question: "How should leaders approach failure in Agile organizations?",
    options: [
      "Eliminate all failure through careful planning and risk management",
      "Never accept failure—hold individuals accountable for all negative outcomes",
      "Celebrate all failures equally since they represent learning opportunities",
      "Distinguish between intelligent experiments and careless mistakes in response"
    ],
    correctAnswer: 3,
    explanation: "Not all failures are equal. Intelligent experiments that fail teach valuable lessons and should be supported. Repeated careless mistakes or ignored warnings need different responses. Leaders create environments where people take smart risks while learning from failures and avoiding reckless behavior.",
    domain: "Agile Culture",
    difficulty: "Advanced"
  },
  {
    id: 105,
    question: "What does Systems Thinking mean for leadership decision-making?",
    options: [
      "Understand how decisions impact the whole system, not just local optimization",
      "Only make decisions after analyzing every possible system interaction",
      "Focus on optimizing individual team performance above all other concerns",
      "Delay all decisions until complete system information is available"
    ],
    correctAnswer: 0,
    explanation: "Systems thinking means seeing the organization as interconnected parts where local optimization often creates global problems. Leaders consider ripple effects of decisions, look for root causes rather than treating symptoms, and optimize for whole-system value flow rather than individual metrics.",
    domain: "Systems Thinking",
    difficulty: "Foundation"
  },
  {
    id: 106,
    question: "How should leaders support team autonomy while maintaining organizational alignment?",
    options: [
      "Provide detailed direction on both what to achieve and how to do the work",
      "Define clear strategic goals and constraints while empowering execution decisions",
      "Give complete autonomy without any organizational direction or constraints",
      "Rotate between tight control and full autonomy based on team performance"
    ],
    correctAnswer: 1,
    explanation: "Leaders create alignment through clarity on vision, strategy, and goals while empowering teams to determine how to achieve them. Clear constraints (regulatory, security, integration needs) provide necessary guardrails without micromanaging execution. This is autonomy with purpose, not chaos.",
    domain: "Strategic Vision",
    difficulty: "Intermediate"
  },
  {
    id: 107,
    question: "What is the leadership role in dependency management across teams?",
    options: [
      "Create detailed plans and schedules to coordinate all dependencies",
      "Eliminate all dependencies by making teams completely independent",
      "Make dependencies visible and help teams navigate them while reducing unnecessary coupling",
      "Assign a project manager to handle all cross-team dependencies"
    ],
    correctAnswer: 2,
    explanation: "Leaders help teams make dependencies visible and coordinate directly when possible. They also work to reduce unnecessary dependencies through organizational design and architecture. Some dependencies are inherent; the goal is visibility and effective management, not elimination at all costs.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 108,
    question: "How should leaders respond to requests for precise long-term roadmaps?",
    options: [
      "Create detailed 2-3 year roadmaps with specific features and dates",
      "Refuse to provide any forward-looking information since plans change",
      "Commit to detailed plans but frequently change them as you learn",
      "Provide vision with decreasing specificity over time horizons while explaining uncertainty"
    ],
    correctAnswer: 3,
    explanation: "Leaders provide appropriate fidelity at different time horizons: clear vision and strategy, probable themes and goals for nearer term, and acknowledge uncertainty further out. They educate stakeholders on working with uncertainty and adapting based on learning rather than creating false precision.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 109,
    question: "What does 'responding to change over following a plan' mean for leadership commitments?",
    options: [
      "Make commitments but adapt them based on learning and changing circumstances",
      "Never make any commitments since everything might change",
      "Once you commit to a plan, changing it shows weak leadership",
      "Only commit to very short-term plans to avoid ever changing commitments"
    ],
    correctAnswer: 0,
    explanation: "Leaders make meaningful commitments while acknowledging they're based on current understanding. As the organization learns or circumstances change, leaders transparently adapt commitments when appropriate. The value is in delivering the right outcomes, not following an outdated plan.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 110,
    question: "How should leaders build stakeholder understanding of Agile approaches?",
    options: [
      "Require all stakeholders to attend Agile training before engaging with teams",
      "Educate stakeholders on Agile value through involvement, transparency, and delivered outcomes",
      "Hide Agile practices from stakeholders and just deliver results",
      "Tell stakeholders they must trust the process without needing to understand it"
    ],
    correctAnswer: 1,
    explanation: "Leaders help stakeholders experience Agile benefits: frequent value delivery, visibility of progress, ability to influence direction. They explain the 'why' behind practices when it affects stakeholders, invite participation in reviews, and demonstrate value. Understanding comes from experience and results.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 111,
    question: "What is the impact of leadership patience in Agile transformations?",
    options: [
      "Leaders should be maximally patient, accepting any pace of change without pressure",
      "Demand immediate results from Agile adoption to justify the investment",
      "Balance patience for capability building with urgency for business results",
      "Give teams exactly six months to show results before reverting to previous approaches"
    ],
    correctAnswer: 2,
    explanation: "Transformations take time—changing culture and building capabilities doesn't happen overnight. But patience doesn't mean accepting no progress or improvement. Leaders balance supporting the learning journey with maintaining appropriate urgency and addressing resistance or lack of genuine effort.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 112,
    question: "How should leaders approach individual performance management in Agile environments?",
    options: [
      "Eliminate all individual performance assessment since Agile focuses on teams",
      "Rank individuals against each other to identify top and bottom performers",
      "Only assess individuals based on their output velocity or story points completed",
      "Measure individual contribution while recognizing collaboration and team success"
    ],
    correctAnswer: 3,
    explanation: "Leaders recognize individual contributions while understanding that value emerges from collaboration. Assessment considers how people enable team success, grow their capabilities, collaborate effectively, and contribute to outcomes. Simplistic individual metrics undermine teamwork; ignoring individual contribution undermines accountability.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 113,
    question: "What role should leaders play in team retrospectives?",
    options: [
      "Attend when invited, focus on listening, and act on systemic issues raised",
      "Attend all retrospectives to stay informed about team challenges",
      "Never attend retrospectives since they're team-owned activities",
      "Direct retrospectives to ensure teams identify the right improvement areas"
    ],
    correctAnswer: 0,
    explanation: "Leaders generally shouldn't attend team retrospectives unless invited—their presence can inhibit candor. But they should be visible enough that teams can request leadership presence for specific issues. Most importantly, leaders act on systemic impediments that teams surface.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 114,
    question: "How should leaders address pressure from above to deliver faster?",
    options: [
      "Pass the pressure directly to teams to motivate faster delivery",
      "Transparently share context while protecting teams from destructive pressure and helping address systemic constraints",
      "Shield teams completely from any awareness of business urgency",
      "Promise faster delivery without understanding what's possible or changing conditions"
    ],
    correctAnswer: 1,
    explanation: "Leaders don't simply transmit pressure or completely shield teams from reality. They share business context so teams understand urgency, protect against pressure to cut corners that creates future slowness, and address systemic issues (dependencies, unclear priorities, technical debt) that truly limit speed.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 115,
    question: "What does Evidence-Based Management mean for measuring success?",
    options: [
      "Only measure what can be precisely quantified and numerically tracked",
      "Success should be measured purely by stakeholder satisfaction surveys",
      "Use multiple indicators including outcomes, capabilities, and value delivered",
      "Avoid measuring success since it creates unhealthy competition"
    ],
    correctAnswer: 2,
    explanation: "Evidence-Based Management uses multiple perspectives: unrealized value (market opportunity), current value (customer satisfaction and business results), ability to innovate (organizational capability), and time to market (delivery speed). No single metric tells the whole story—leaders examine multiple indicators for holistic understanding.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 116,
    question: "How should leaders support teams facing unclear or conflicting requirements?",
    options: [
      "Tell teams to make their best guess and start building immediately",
      "Halt all work until requirements are completely clear and stable",
      "Assign business analysts to translate all stakeholder needs for teams",
      "Help teams engage directly with stakeholders to clarify through incremental delivery"
    ],
    correctAnswer: 3,
    explanation: "Leaders enable direct collaboration between teams and stakeholders to clarify requirements through conversations, early delivery, and feedback. Uncertainty is addressed through empiricism—building incrementally and learning—not through more upfront analysis or waiting for perfect clarity.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 117,
    question: "What is the relationship between Agile leadership and servant leadership?",
    options: [
      "Servant leadership is one valuable model aligned with Agile values but not the only approach",
      "They are identical concepts with no meaningful difference",
      "Agile leadership is a modern term replacing the outdated servant leadership concept",
      "Servant leadership contradicts Agile because leaders must also provide direction"
    ],
    correctAnswer: 0,
    explanation: "Servant leadership—prioritizing the growth and well-being of people and communities—aligns well with Agile values. But Agile leadership can incorporate multiple leadership styles. The key is leading in ways that enable empowerment, learning, and value delivery, which can include servant leadership and other approaches.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 118,
    question: "How should leaders respond when teams request additional resources or people?",
    options: [
      "Always approve resource requests to show support for teams",
      "Investigate whether additional resources address root causes or mask systemic issues",
      "Always deny resource requests to maintain cost discipline",
      "Grant resources only to teams with the highest current performance metrics"
    ],
    correctAnswer: 1,
    explanation: "Adding people often doesn't solve underlying problems and can make communication and coordination worse. Leaders investigate root causes: Are there skill gaps? Process bottlenecks? Unclear priorities? Too much work in progress? Address systemic issues before adding resources, which should be a deliberate strategic decision.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 119,
    question: "What does 'continuous attention to technical excellence' require from leadership?",
    options: [
      "Leaders must have deep technical expertise in the technologies teams use",
      "Technical excellence is the team's responsibility; leaders focus on business outcomes",
      "Create time, resources, and expectations that enable teams to maintain high technical standards",
      "Mandate specific technical practices that all teams must follow uniformly"
    ],
    correctAnswer: 2,
    explanation: "Leaders may not be technical experts but must understand that technical excellence enables sustainable speed and quality. They ensure teams have time for practices like refactoring, automated testing, and continuous integration. They understand technical debt as a business concern affecting future value delivery.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 120,
    question: "How should leaders approach organizational silos that impede agility?",
    options: [
      "Immediately restructure to eliminate all functional departments and silos",
      "Accept silos as inevitable in large organizations and work within them",
      "Fire managers who maintain silo boundaries and resist collaboration",
      "Create cross-functional collaboration and gradually evolve structures based on learning"
    ],
    correctAnswer: 3,
    explanation: "Silos often reflect legitimate specialization but create handoffs and delays. Leaders foster cross-functional collaboration through team composition, physical/virtual proximity, shared goals, and by addressing organizational incentives that reinforce silos. Structural change should be thoughtful, not reactive reorganization.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 121,
    question: "What is the leadership role when teams identify impediments beyond their control?",
    options: [
      "Own and actively work to resolve organizational impediments teams cannot address themselves",
      "Tell teams to work around impediments rather than waiting for resolution",
      "Add impediment resolution to the team's backlog as additional work",
      "Document impediments for future consideration but maintain current focus"
    ],
    correctAnswer: 0,
    explanation: "A core leadership responsibility in Agile is removing impediments beyond team control—organizational policies, resource access, cross-team coordination, executive decisions. Leaders don't delegate this back to teams or ignore it. Making impediments visible without addressing them breeds cynicism.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 122,
    question: "How should leaders support teams dealing with legacy systems and technical constraints?",
    options: [
      "Replace all legacy systems before attempting Agile practices",
      "Acknowledge constraints while supporting incremental improvement and strategic modernization",
      "Ignore technical constraints and expect teams to deliver at the same pace as greenfield projects",
      "Only allow Agile practices on new projects without legacy constraints"
    ],
    correctAnswer: 1,
    explanation: "Legacy systems are reality for most organizations. Leaders acknowledge constraints while investing in incremental improvement (refactoring, automated testing, API layers) and strategic modernization where it delivers value. They set realistic expectations while refusing to accept learned helplessness about technical debt.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 123,
    question: "What does 'individuals and interactions over processes and tools' mean for leadership investment?",
    options: [
      "Don't invest in processes or tools since people are all that matters",
      "Balance investment equally between people development and tool acquisition",
      "Invest primarily in people's growth and collaboration while keeping processes and tools lightweight",
      "Focus on processes and tools first to enable people to be effective"
    ],
    correctAnswer: 2,
    explanation: "The value statement prioritizes but doesn't eliminate processes and tools. Leaders invest most heavily in developing people's capabilities, building trust and collaboration, and creating effective culture. Processes and tools should be just enough to enable people, not constrain or replace human judgment.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 124,
    question: "How should leaders handle pressure to demonstrate ROI from Agile adoption?",
    options: [
      "Provide immediate ROI projections even without supporting data",
      "Argue that Agile value can't be measured so ROI questions aren't valid",
      "Wait at least two years before measuring any Agile transformation outcomes",
      "Define meaningful value measures and track improvement over time with transparency"
    ],
    correctAnswer: 3,
    explanation: "Leaders define what success looks like: faster time to market, higher quality, better employee engagement, increased customer satisfaction. They measure baseline and track changes transparently, acknowledging both progress and challenges. They educate on realistic timeframes for different improvements.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 125,
    question: "What is the most important leadership characteristic for sustaining Agile culture?",
    options: [
      "Consistent modeling of Agile values through daily decisions and behaviors",
      "Charismatic communication ability to inspire and motivate people",
      "Deep technical knowledge of Agile frameworks and practices",
      "Strong authority to mandate changes and overcome resistance"
    ],
    correctAnswer: 0,
    explanation: "Culture is shaped by what leaders consistently do, not what they say or mandate. Modeling values—transparency in decision-making, adapting based on feedback, trusting team expertise, focusing on outcomes—creates culture. People watch leadership behavior to understand what's truly valued.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 126,
    question: "How should leaders approach standardization of Agile practices across the organization?",
    options: [
      "Mandate a single framework and set of practices for everyone to follow",
      "Provide lightweight principles and practices while allowing contextual adaptation",
      "Let every team invent their own practices from scratch without guidance",
      "Implement industry best practices regardless of organizational context"
    ],
    correctAnswer: 1,
    explanation: "Leaders establish shared principles and minimum viable practices while empowering teams to adapt to their context. Too much standardization kills learning and adaptation; too little creates chaos and prevents scaling. Share practices through community of practice, not mandates.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 127,
    question: "What role do leaders play in product vision and strategy?",
    options: [
      "Define complete product vision and strategy for teams to execute",
      "Let teams independently determine product vision without leadership input",
      "Co-create compelling vision with teams and stakeholders while providing strategic direction",
      "Delegate all product decisions to product owners without leadership involvement"
    ],
    correctAnswer: 2,
    explanation: "Leaders provide strategic direction and business context while involving teams and product ownership in shaping compelling product vision. This creates both alignment and ownership. Leaders don't abdicate strategy or dictate all details—they guide direction while enabling those closest to the work to contribute.",
    domain: "Strategic Vision",
    difficulty: "Intermediate"
  },
  {
    id: 128,
    question: "How should leaders respond to teams gaming metrics or velocity?",
    options: [
      "Add more metrics and controls to prevent gaming behavior",
      "Immediately discipline team members who manipulate metrics",
      "Eliminate all metrics since they drive dysfunctional behavior",
      "Investigate why gaming is happening and address underlying incentives and fears"
    ],
    correctAnswer: 3,
    explanation: "Gaming metrics signals that people feel unsafe or that incentives are misaligned. Leaders investigate root causes: Are teams punished for lower velocity? Rewarded for numbers over outcomes? Lacking trust? Address the system that drives gaming rather than just punishing the symptom.",
    domain: "Agile Culture",
    difficulty: "Advanced"
  },
  {
    id: 129,
    question: "What does 'maximizing the amount of work not done' mean for leadership prioritization?",
    options: [
      "Only build what's truly valuable; ruthlessly eliminate low-value work",
      "Leaders should minimize all work to reduce costs and effort",
      "Do the minimum possible work to meet contractual obligations",
      "Focus on reducing team workload to prevent burnout"
    ],
    correctAnswer: 0,
    explanation: "This Agile principle means discovering the simplest solution that delivers value—not building features that sound good but don't get used, not adding complexity that doesn't serve users. Leaders create focus on high-value work and help organizations say no to the rest.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 130,
    question: "How should leaders support cross-functional collaboration across organizational boundaries?",
    options: [
      "Require all teams to include representatives from every organizational function",
      "Remove barriers, create forums for collaboration, and reward cross-boundary cooperation",
      "Maintain clear functional boundaries and use formal processes for cross-functional work",
      "Reorganize to eliminate all functional specialization and boundaries"
    ],
    correctAnswer: 1,
    explanation: "Leaders make collaboration easier than working in silos: co-locate or create virtual spaces for teams, address conflicting incentives across functions, create communities of practice, and celebrate cross-functional success. They reduce barriers without necessarily eliminating all organizational structure.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 131,
    question: "What is the leadership role in establishing team working agreements?",
    options: [
      "Define standard working agreements that all teams must adopt",
      "Stay completely uninvolved—working agreements are purely team-owned",
      "Support teams in creating their own agreements while ensuring alignment with organizational values",
      "Approve each team's working agreements before they can be implemented"
    ],
    correctAnswer: 2,
    explanation: "Teams should own their working agreements, but leaders ensure teams understand the value of agreements and that agreements align with organizational values (respect, transparency, safety). Leaders might surface concerns if agreements seem problematic but generally trust teams to self-organize.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 132,
    question: "How should leaders approach competition between teams?",
    options: [
      "Foster healthy competition to drive higher performance from all teams",
      "Eliminate all competition by making team metrics private and confidential",
      "Publicly rank teams against each other to identify best performers",
      "Create focus on shared organizational goals rather than team-versus-team competition"
    ],
    correctAnswer: 3,
    explanation: "Competition between teams often leads to local optimization, gaming metrics, and lack of collaboration. Leaders create shared purpose and goals, celebrate organizational wins, and foster collaboration over competition. They recognize team achievements without creating rivalry.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 133,
    question: "What does 'simplicity—the art of maximizing work not done' require from leaders?",
    options: [
      "Create space for teams to find simple solutions rather than rushing to build everything",
      "Leaders must become technical experts to identify unnecessary complexity",
      "Always choose the simplest possible solution regardless of long-term implications",
      "Reduce work by cutting quality standards and testing activities"
    ],
    correctAnswer: 0,
    explanation: "Simplicity requires time to think and design—not rushing to build. Leaders who demand immediate action get complex solutions. Leaders who ask 'What's the simplest thing that could work?' and give teams space to find elegant solutions enable simplicity. This isn't cutting corners but finding the essential core.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 134,
    question: "How should leaders address toxic behavior within Agile teams?",
    options: [
      "Let teams handle all behavioral issues themselves without leadership involvement",
      "Address toxic behavior directly and quickly while supporting healthy team dynamics",
      "Immediately remove anyone reported for toxic behavior without investigation",
      "Wait to see if team dynamics naturally resolve behavioral issues over time"
    ],
    correctAnswer: 1,
    explanation: "Leaders must address toxic behavior that undermines psychological safety and team effectiveness. This isn't micromanaging team dynamics but protecting the environment where teams thrive. Swift, fair action on behavioral issues demonstrates that cultural values are real, not just aspirational.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 135,
    question: "What is the impact of leadership communication style in Agile organizations?",
    options: [
      "Communication style doesn't matter as long as leaders make good decisions",
      "Leaders should use only inspirational, positive communication to maintain morale",
      "Transparent, two-way communication builds trust and enables adaptation",
      "Minimize communication to avoid influencing team autonomy"
    ],
    correctAnswer: 2,
    explanation: "Leaders who communicate transparently about challenges and uncertainties, listen genuinely, and engage in dialogue (not just broadcasts) build trust. This enables the transparency and adaptation central to Agile. Communication isn't separate from leadership—it's how leadership happens.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 136,
    question: "How should leaders support teams in setting realistic commitments?",
    options: [
      "Tell teams exactly what to commit to based on business needs",
      "Let teams commit to whatever they think they can achieve without guidance",
      "Push teams to commit to stretch goals to drive higher performance",
      "Help teams understand business needs while supporting data-driven forecasting"
    ],
    correctAnswer: 3,
    explanation: "Leaders provide business context and needs while supporting teams in using empirical data (past velocity, known risks) to make realistic forecasts. Forced commitments beyond team capacity create dysfunction. Leaders balance business urgency with sustainable pace and realistic planning.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 137,
    question: "What does 'building projects around motivated individuals' mean for hiring and team formation?",
    options: [
      "Find people with the right skills and create conditions where they can be motivated",
      "Only hire people who are already passionate about your specific domain",
      "Motivation is individual responsibility; leaders focus on outcomes not motivation",
      "Pay premium salaries to ensure all team members are highly motivated"
    ],
    correctAnswer: 0,
    explanation: "Leaders hire for capability and cultural fit, then create conditions for motivation: autonomy, mastery opportunities, purpose, psychological safety, and meaningful challenges. Motivation isn't just individual—it's shaped by environment. Trust and enable people rather than controlling them.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 138,
    question: "How should leaders balance local optimization with global optimization?",
    options: [
      "Always prioritize global optimization even if it harms individual teams",
      "Make optimization trade-offs visible and strategic based on organizational goals",
      "Let teams optimize locally; global optimization will emerge naturally",
      "Alternate focus between local and global optimization quarterly"
    ],
    correctAnswer: 1,
    explanation: "Leaders help the organization see when local optimization hurts overall value flow (like optimizing individual team utilization but increasing wait times). They make trade-offs based on strategic impact. Sometimes local optimization serves the system; sometimes it doesn't. Context and systems thinking guide decisions.",
    domain: "Systems Thinking",
    difficulty: "Advanced"
  },
  {
    id: 139,
    question: "What is the leadership role when teams have genuine skill gaps preventing value delivery?",
    options: [
      "Replace team members lacking skills with more qualified people",
      "Push teams to deliver anyway—they'll learn under pressure",
      "Provide learning opportunities, pairing, coaching while maintaining delivery expectations",
      "Stop all delivery work until comprehensive training is completed"
    ],
    correctAnswer: 2,
    explanation: "Leaders balance skill development with delivery needs. They might bring in temporary expertise for knowledge transfer, support pair programming and mentoring, provide training, or adjust scope temporarily. They don't abandon delivery or ignore genuine skill gaps—they address them strategically.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 140,
    question: "How should leaders respond when Agile practices conflict with existing organizational policies?",
    options: [
      "Always follow organizational policies regardless of impact on agility",
      "Tell teams to violate policies that interfere with Agile practices",
      "Immediately eliminate any policy that creates friction with Agile practices",
      "Work to evolve policies while finding interim approaches that balance compliance and agility"
    ],
    correctAnswer: 3,
    explanation: "Leaders examine why policies exist—often addressing real risks or needs. They work to evolve policies that impede agility while respecting legitimate concerns. This might mean adapting policies, finding compliant alternatives, or in rare cases, accepting constraints while addressing root policy issues.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 141,
    question: "What does 'at regular intervals, the team reflects' mean for leadership support?",
    options: [
      "Protect time for reflection and act on systemic issues teams identify",
      "Leaders should mandate specific reflection practices for all teams",
      "Reflection is a team activity that doesn't require leadership support",
      "Attend all team reflections to ensure they're productive"
    ],
    correctAnswer: 0,
    explanation: "Leaders ensure teams have time for retrospectives and continuous improvement, don't let 'urgent' work always displace reflection, and most importantly—act on organizational impediments teams surface. Reflection without action breeds cynicism. Leaders demonstrate that improvement is valued through support and action.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 142,
    question: "How should leaders support teams dealing with ambiguous or rapidly changing requirements?",
    options: [
      "Delay all work until requirements become clear and stable",
      "Enable frequent stakeholder interaction and incremental delivery to clarify through building",
      "Demand that stakeholders provide complete requirements upfront",
      "Have teams build everything stakeholders mention to avoid missing requirements"
    ],
    correctAnswer: 1,
    explanation: "Ambiguity is addressed through empiricism—build incrementally, get feedback, adapt. Leaders enable this by facilitating stakeholder access, supporting short iterations, and helping stakeholders understand that clarity emerges through delivery and learning, not exhaustive upfront analysis.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 143,
    question: "What is the leadership role in technical architecture decisions for Agile teams?",
    options: [
      "Make all architecture decisions to ensure consistency across teams",
      "Stay completely out of architecture—teams have full authority over all technical decisions",
      "Ensure architectural vision and constraints while empowering team-level technical decisions",
      "Hire an architecture team separate from delivery teams to make all technical decisions"
    ],
    correctAnswer: 2,
    explanation: "Leaders ensure there's architectural vision and guidance on integration, security, and key constraints, often through enabling architects who work with teams. But teams make most technical decisions within that guidance. Over-centralization slows teams; no guidance creates integration nightmares.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 144,
    question: "How should leaders approach organizational change fatigue from continuous transformation?",
    options: [
      "Pause all changes until people recover from previous transformation efforts",
      "Push through fatigue—organizations must continuously evolve to survive",
      "Only make changes when absolutely necessary to minimize disruption",
      "Balance transformation pace with organizational capacity while maintaining improvement momentum"
    ],
    correctAnswer: 3,
    explanation: "Continuous change is reality, but leaders distinguish between strategic changes and churn. They sequence transformation thoughtfully, celebrate progress, involve people in shaping change, and ensure changes root before adding more. Balance evolution with stability—both are needed.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 145,
    question: "What does servant leadership mean for decision-making authority?",
    options: [
      "Leaders make strategic decisions while empowering teams to make execution decisions",
      "Leaders should never make decisions—always defer to team consensus",
      "Serve teams by making all difficult decisions so they can focus on delivery",
      "Put all decisions to a vote and follow majority rule"
    ],
    correctAnswer: 0,
    explanation: "Servant leadership doesn't mean abdication of leadership responsibility. Leaders make decisions appropriate to their role (strategy, resource allocation, organizational design) while empowering teams on execution. Serving others includes providing clear direction when needed and making difficult calls when appropriate.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 146,
    question: "How should leaders support teams in improving their Definition of Done?",
    options: [
      "Mandate increasingly strict Definition of Done standards on a fixed schedule",
      "Encourage continuous improvement of standards while addressing impediments to higher quality",
      "Accept whatever Definition of Done teams propose without question",
      "Define the organizational Definition of Done and require all teams to adopt it immediately"
    ],
    correctAnswer: 1,
    explanation: "Leaders set expectations that Definition of Done should continuously improve as teams build capability and remove impediments. They support improvement by addressing organizational barriers (like access to production-like test environments) while respecting that teams need to build capability over time.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 147,
    question: "What is the leadership role when teams identify process improvements that require organizational change?",
    options: [
      "Tell teams to work within current processes and focus on their delivery",
      "Immediately implement every process change teams suggest",
      "Evaluate proposed changes considering impact and work to enable beneficial improvements",
      "Create a committee to study team improvement suggestions over 6-12 months"
    ],
    correctAnswer: 2,
    explanation: "Leaders take team improvement suggestions seriously—teams see where processes create waste or impediments. Leaders evaluate suggestions considering broader impact, work to enable beneficial changes, explain constraints when changes aren't possible, and avoid bureaucracy that kills improvement momentum.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 148,
    question: "How should leaders approach work-life balance in Agile environments?",
    options: [
      "Enforce strict 40-hour weeks with no exceptions to prevent burnout",
      "Let individuals decide their own hours and workload without leadership involvement",
      "Maximize flexibility—work-life balance is purely an individual responsibility",
      "Model healthy boundaries while recognizing occasional intensity during critical periods"
    ],
    correctAnswer: 3,
    explanation: "Leaders model sustainable pace and healthy boundaries while acknowledging that knowledge work sometimes has intensive periods. They watch for systemic overwork (sign of poor planning or unrealistic commitments), address it, and don't reward or expect chronic overtime. Sustainable pace is a leadership responsibility.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 149,
    question: "What does 'business people and developers must work together daily' require from leadership?",
    options: [
      "Create organizational structures and incentives that enable close collaboration",
      "Mandate daily meetings between all business stakeholders and developers",
      "Hire business analysts to translate between business and technical teams",
      "Co-locate all business and technical staff in the same physical space"
    ],
    correctAnswer: 0,
    explanation: "Leaders break down organizational barriers to collaboration: functional silos, conflicting priorities, communication obstacles. They might adjust structure, create cross-functional teams, align incentives, or enable virtual collaboration. The principle is ongoing collaboration, which structure should enable, not mandate specific daily meetings.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 150,
    question: "How should leaders sustain Agile transformation momentum after initial enthusiasm fades?",
    options: [
      "Launch new transformation initiatives to regenerate excitement",
      "Connect Agile practices to business results, celebrate wins, and address impediments consistently",
      "Accept that momentum naturally fades and reduced enthusiasm is inevitable",
      "Bring in new consultants to re-energize the transformation"
    ],
    correctAnswer: 1,
    explanation: "Sustaining transformation requires connecting practices to tangible value delivery, celebrating progress and wins, addressing impediments that frustrate people, and consistent leadership attention. It's about making agility deliver results, not just maintaining excitement about change for its own sake.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 151,
    question: "How should leaders respond when teams request specific tools or technologies?",
    options: [
      "Always approve tool requests to show trust in team judgment",
      "Deny all tool requests to maintain cost control and standardization",
      "Understand the problem teams are solving and evaluate options considering both team needs and organizational context",
      "Only approve tools that are already used by other teams in the organization"
    ],
    correctAnswer: 2,
    explanation: "Leaders should understand what problem the team is trying to solve with new tools. Sometimes the tool request is valid; sometimes there are better alternatives or existing solutions. Leaders consider team productivity, integration needs, security, support costs, and organizational context when evaluating requests.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 152,
    question: "What does 'emergent architecture' mean for leadership oversight?",
    options: [
      "Leaders should not be involved in architecture since it emerges from teams",
      "Architecture should be fully designed upfront before any team begins work",
      "Let each team develop their own architecture without coordination",
      "Provide architectural vision and constraints while allowing design to evolve through iterative development"
    ],
    correctAnswer: 3,
    explanation: "Emergent architecture doesn't mean no architecture thinking or leadership involvement. Leaders ensure there's architectural vision, guidance on key decisions (security, integration, scalability), and coordination across teams, while allowing design to evolve as teams learn rather than requiring complete upfront design.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 153,
    question: "How should leaders approach diversity and inclusion in Agile teams?",
    options: [
      "Build diverse teams and inclusive culture as enablers of innovation and better outcomes",
      "Diversity initiatives should be separate from Agile transformation efforts",
      "Focus only on diversity of Agile experience and technical skills",
      "Mandate diversity quotas for all teams regardless of context"
    ],
    correctAnswer: 0,
    explanation: "Diverse perspectives enable better problem-solving, innovation, and decision-making—critical for Agile success. Leaders build inclusive cultures where diverse voices are heard and valued, not just present. Diversity of thought, background, and experience strengthens teams when inclusion is genuine.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 154,
    question: "What is the leadership role in managing organizational risk in Agile environments?",
    options: [
      "Eliminate risk by returning to more predictable waterfall approaches",
      "Make risk visible and manage it through frequent inspection, adaptation, and incremental delivery",
      "Transfer all risk management responsibility to teams",
      "Accept all risks as unavoidable since Agile embraces uncertainty"
    ],
    correctAnswer: 1,
    explanation: "Agile approaches manage risk through transparency, frequent delivery, and adaptation—not by ignoring it. Leaders ensure risks are visible, help organizations respond to risks appropriately, and understand that incremental delivery reduces risk by enabling course correction and validating assumptions early.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 155,
    question: "How should leaders support Product Owners in their role?",
    options: [
      "Make product decisions for Product Owners to speed up the process",
      "Leave Product Owners completely alone to figure out their role independently",
      "Provide strategic context, remove impediments, and ensure Product Owners have necessary authority",
      "Assign multiple Product Owners to each team to share the workload"
    ],
    correctAnswer: 2,
    explanation: "Leaders empower Product Owners by providing business strategy and context, ensuring they have authority to make product decisions, removing organizational impediments, and protecting them from being overruled by stakeholders. A supported, empowered Product Owner is critical for team success.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 156,
    question: "What does 'empirical process control' mean for long-term planning?",
    options: [
      "Eliminate all long-term planning since you cannot predict the future",
      "Create detailed long-term plans and commit to executing them regardless of learning",
      "Plan in detail only for the next iteration with no forward-looking planning",
      "Develop long-term vision with increasingly lighter planning as time horizon extends"
    ],
    correctAnswer: 3,
    explanation: "Empiricism doesn't eliminate planning—it changes how you plan. Leaders maintain clear long-term vision and strategy, plan with appropriate detail for nearer term (high confidence), and acknowledge uncertainty further out. Plans become hypotheses that evolve as you learn, not commitments set in stone.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 157,
    question: "How should leaders handle geographically distributed stakeholders?",
    options: [
      "Establish clear communication patterns and leverage tools that enable effective distributed collaboration",
      "Require all stakeholders to be in the same location as teams",
      "Use only asynchronous communication to accommodate all time zones",
      "Have teams work stakeholder time zones regardless of team location"
    ],
    correctAnswer: 0,
    explanation: "Leaders acknowledge that distribution adds complexity but work to minimize its impact through clear communication norms, appropriate tools (video conferencing, shared workspaces), thoughtful meeting scheduling, and documentation where it adds value. They don't pretend distribution doesn't matter or make it impossible through poor planning.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 158,
    question: "What is the relationship between Agile leadership and organizational culture?",
    options: [
      "Culture should be defined through formal policy documents and value statements",
      "Leaders shape culture primarily through their consistent behaviors and decisions",
      "Culture change should be delegated to HR and organizational development teams",
      "Agile frameworks automatically create the right culture when implemented correctly"
    ],
    correctAnswer: 1,
    explanation: "Culture is created by what leaders consistently do, not what they say or write in value statements. People watch leadership behavior to understand what's truly valued. Leaders shape culture through their daily decisions, what they reward and punish, what they pay attention to, and how they respond to challenges.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 159,
    question: "How should leaders approach continuous improvement across the organization?",
    options: [
      "Mandate specific improvement initiatives for all teams to implement",
      "Leave all improvement to individual teams without organizational coordination",
      "Create systems for learning and sharing while empowering local improvement",
      "Focus improvement efforts only on underperforming teams"
    ],
    correctAnswer: 2,
    explanation: "Leaders create environments where improvement is expected and supported: time for retrospectives, communities of practice for sharing learnings, celebration of improvement, and resources for experimentation. They enable coordination without mandating uniform solutions, and they help spread effective practices discovered by teams.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 160,
    question: "What does 'outcome over output' mean for how leaders evaluate success?",
    options: [
      "Only measure business outcomes, never measure team output or velocity",
      "Output metrics are sufficient since outcomes take too long to measure",
      "Outcomes and outputs are interchangeable terms for measuring success",
      "Focus on whether delivered work achieves desired business and customer outcomes"
    ],
    correctAnswer: 3,
    explanation: "Leaders care most about outcomes—the business results and customer value achieved—not just output (features delivered, story points completed). Teams can deliver lots of output with poor outcomes. Leaders ask whether work is achieving intended impact, not just whether teams are busy or producing.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 161,
    question: "How should leaders support Scrum Masters and Agile coaches?",
    options: [
      "Model Agile values, act on impediments they surface, and visibly support their work",
      "Give them authority to mandate practices and enforce compliance",
      "Provide budget and resources but stay uninvolved in their work",
      "Assign them to multiple teams to maximize their utilization"
    ],
    correctAnswer: 0,
    explanation: "Leaders empower Scrum Masters and coaches by modeling behaviors they're trying to foster, taking action on organizational impediments they identify, publicly supporting their work, and protecting their time and focus. Leaders don't undermine them by overruling facilitation or bypassing their guidance.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 162,
    question: "What is the leadership role in establishing team size and composition?",
    options: [
      "Always maintain teams of exactly 7-9 people as prescribed by frameworks",
      "Guide team design considering communication overhead, skills needed, and team dynamics",
      "Let teams grow or shrink organically based on workload",
      "Maximize team size to increase total capacity and throughput"
    ],
    correctAnswer: 1,
    explanation: "Leaders understand that team size affects communication overhead and effectiveness. Smaller teams (5-9 people) generally work better than large ones. Leaders consider what skills are needed, how people work together, and the scope of the team's mission when establishing teams, while avoiding both too-small and too-large teams.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 163,
    question: "How should leaders respond to teams reporting impediments that leadership doesn't see as priorities?",
    options: [
      "Tell teams the impediments aren't important and to focus on delivery",
      "Immediately address every impediment teams report regardless of impact",
      "Engage in dialogue to understand impact and make transparent prioritization decisions",
      "Add all impediments to a backlog but never actually address them"
    ],
    correctAnswer: 2,
    explanation: "Leaders should understand why teams see something as an impediment and its impact on delivery. Sometimes leaders need to explain why certain impediments won't be addressed immediately. Transparent prioritization and genuine dialogue build trust even when leaders can't address everything teams request.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 164,
    question: "What does 'face-to-face conversation' as the most effective communication mean for distributed teams?",
    options: [
      "Distributed teams cannot effectively practice Agile since they lack face-to-face communication",
      "Rely exclusively on written documentation for all distributed team communication",
      "Require all distributed team members to travel for in-person meetings weekly",
      "Use rich synchronous communication (video) as much as practical for distributed teams"
    ],
    correctAnswer: 3,
    explanation: "The principle values rich, interactive communication over asynchronous, written-only communication. For distributed teams, video conversations provide much of the richness of in-person communication. Leaders ensure teams have tools and norms for synchronous communication, not just email and documentation.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 165,
    question: "How should leaders balance speed and quality in delivery?",
    options: [
      "Understand that sustainable speed requires quality; cutting quality slows future delivery",
      "Always prioritize speed—quality can be addressed later through bug fixes",
      "Always prioritize quality—deliver only when everything is perfect",
      "Alternate between speed and quality focus on different releases"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand that quality enables speed, not opposes it. Technical shortcuts create debt that slows future delivery. Sustainable speed comes from maintaining quality standards. The question isn't speed versus quality but how to achieve both through good practices like test automation, refactoring, and continuous integration.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 166,
    question: "What is the leadership role when teams have conflicts about ways of working?",
    options: [
      "Impose standard ways of working to eliminate conflicts",
      "Ensure teams have skills and support to resolve conflicts productively while intervening if needed",
      "Stay completely uninvolved—teams must resolve all conflicts independently",
      "Rotate team members to eliminate conflicting perspectives"
    ],
    correctAnswer: 1,
    explanation: "Leaders create conditions for healthy conflict resolution: psychological safety, facilitation skills, conflict resolution practices. Most conflicts teams resolve themselves. Leaders intervene when conflicts become destructive or unresolvable, or when teams need new skills to navigate disagreements productively.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 167,
    question: "How should leaders approach standardization of reporting and metrics?",
    options: [
      "Require identical metrics and reporting formats from all teams for easy comparison",
      "Let each team report whatever they choose in any format",
      "Define essential organizational metrics while allowing teams flexibility in how they track and report",
      "Eliminate all reporting since it contradicts Agile values"
    ],
    correctAnswer: 2,
    explanation: "Leaders identify what information the organization genuinely needs for decision-making and ensure it's available, but avoid over-prescribing how teams track work or creating reporting overhead that doesn't serve a purpose. Balance organizational needs with team autonomy and minimize waste in reporting.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 168,
    question: "What does 'self-organizing teams' mean for leadership accountability?",
    options: [
      "Leaders are no longer accountable once teams become self-organizing",
      "Self-organizing teams mean leaders should never provide direction or make decisions",
      "Teams become accountable only to themselves, not to leadership or stakeholders",
      "Leaders remain accountable for outcomes while teams self-organize around execution"
    ],
    correctAnswer: 3,
    explanation: "Self-organization means teams decide how to do their work, not that leadership abdicates accountability. Leaders remain accountable for organizational results, resource allocation, and strategic direction. They provide clear goals and constraints while empowering teams to determine their approach to achieving them.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 169,
    question: "How should leaders support teams dealing with unclear stakeholder priorities?",
    options: [
      "Facilitate stakeholder engagement and help make priorities transparent through collaboration",
      "Tell teams to wait until stakeholders provide clear, stable priorities",
      "Have teams guess at priorities and proceed without stakeholder input",
      "Assign project managers to translate stakeholder needs into clear requirements"
    ],
    correctAnswer: 0,
    explanation: "Leaders enable direct team-stakeholder collaboration, facilitate priority discussions when stakeholders conflict, and help create transparency around priority decisions. They don't let teams languish waiting for clarity or proceed blindly—they enable the conversations that bring clarity through incremental delivery and feedback.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 170,
    question: "What is the impact of leadership micromanagement on Agile teams?",
    options: [
      "Increases quality by ensuring leaders review all decisions",
      "Undermines autonomy, slows decision-making, and damages trust and engagement",
      "Has no impact since teams are self-organizing and can ignore leadership interference",
      "Is necessary during early stages of Agile adoption until teams prove themselves"
    ],
    correctAnswer: 1,
    explanation: "Micromanagement contradicts Agile principles and damages team effectiveness. It signals lack of trust, slows delivery as decisions route through leaders, prevents teams from learning and growing, and drives talented people away. Leaders provide clear goals and constraints but let teams determine execution.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 171,
    question: "How should leaders approach organizational metrics and KPIs in Agile environments?",
    options: [
      "Eliminate all metrics and KPIs since they drive dysfunctional behavior",
      "Maintain traditional project management metrics like planned vs actual dates",
      "Use metrics focused on outcomes, flow, quality, and learning rather than just activity",
      "Implement extensive metrics tracking for all team activities to maximize transparency"
    ],
    correctAnswer: 2,
    explanation: "Leaders choose metrics that drive desired behaviors: outcome achievement, delivery flow, customer satisfaction, technical health, team capability growth. They avoid metrics that optimize for local efficiency or activity over value. Metrics should enable learning and improvement, not just control or surveillance.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 172,
    question: "What does 'customer collaboration over contract negotiation' mean for internal stakeholders?",
    options: [
      "Internal stakeholders are not customers so this principle doesn't apply",
      "Create formal internal contracts and SLAs to manage internal stakeholder relationships",
      "Give internal stakeholders whatever they request without negotiation",
      "Build collaborative partnerships with internal stakeholders focused on shared success"
    ],
    correctAnswer: 3,
    explanation: "Internal stakeholders are customers of internal teams' work. Leaders foster collaborative relationships focused on shared organizational success rather than adversarial dynamics where each side protects their interests. Collaboration, trust, and adaptation serve the organization better than rigid internal contracts.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 173,
    question: "How should leaders respond when Agile transformation is not delivering expected results?",
    options: [
      "Investigate root causes, examine how Agile is being applied, and adapt the approach",
      "Abandon Agile and return to previous approaches",
      "Double down on Agile practices and frameworks without examining why results are lacking",
      "Hire new consultants and start the transformation over from scratch"
    ],
    correctAnswer: 0,
    explanation: "When results are lacking, leaders investigate why: Are practices being applied superficially? Are organizational impediments being ignored? Is training or support inadequate? They examine the transformation itself empirically, learn from what's not working, and adapt rather than giving up or blindly continuing.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 174,
    question: "What is the leadership role in establishing organizational values?",
    options: [
      "Values should be developed by teams without leadership input",
      "Co-create values with organizational input and model them consistently in decisions",
      "Leaders define values and require everyone to memorize and recite them",
      "Adopt values from Agile frameworks without customization for the organization"
    ],
    correctAnswer: 1,
    explanation: "Values are meaningful when people throughout the organization help shape them and when leaders consistently model them. Values become real through leadership behavior and decisions that demonstrate them, not through posters or policies. Leaders involve people in defining values and hold themselves accountable to them.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 175,
    question: "How should leaders support teams in managing technical debt?",
    options: [
      "Mandate a fixed percentage of team capacity for technical debt work",
      "Tell teams technical debt is their problem and shouldn't affect delivery commitments",
      "Make technical debt and its impact visible, support teams in balancing it with feature work",
      "Prohibit all technical debt by requiring perfect code from the beginning"
    ],
    correctAnswer: 2,
    explanation: "Leaders help teams make technical debt visible to stakeholders, explain its business impact (slower delivery, higher costs, more bugs), and support teams in making informed trade-offs between paying down debt and delivering features. They ensure technical health is considered a legitimate priority, not always deferred.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 176,
    question: "What does 'pull-based work' mean for leadership work assignment?",
    options: [
      "Leaders should never assign work—only allow teams to pull from backlog",
      "Pull-based systems don't apply to leadership, only to team-level work",
      "Have teams constantly pull more work to maximize throughput",
      "Limit work in progress and enable teams to pull new work when they have capacity"
    ],
    correctAnswer: 3,
    explanation: "Pull-based systems mean work starts when teams have capacity, not pushed before they're ready. Leaders understand limiting work in progress improves flow and quality. They help organizations move from pushing work onto teams to teams pulling work based on capacity, which creates smoother flow and better outcomes.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 177,
    question: "How should leaders approach team dependencies on external vendors or partners?",
    options: [
      "Make dependencies visible, work to improve collaboration, and reduce unnecessary coupling",
      "Eliminate all vendor dependencies before starting Agile practices",
      "Ignore vendor dependencies and expect teams to work around them",
      "Add long lead times to all plans to accommodate vendor delays"
    ],
    correctAnswer: 0,
    explanation: "Leaders acknowledge vendor dependencies as reality while working to improve them: clear communication channels, aligned incentives, reduced handoff delays, and architectural choices that minimize coupling. They make dependencies visible so teams can plan around them while reducing dependency costs over time.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 178,
    question: "What is the leadership role in knowledge management in Agile organizations?",
    options: [
      "Mandate comprehensive documentation of all decisions and work",
      "Enable just-enough documentation and knowledge sharing practices that serve learning",
      "Rely entirely on tacit knowledge in people's heads without any documentation",
      "Hire dedicated knowledge management specialists to document everything teams do"
    ],
    correctAnswer: 1,
    explanation: "Leaders ensure knowledge is shared effectively through communities of practice, pairing, documentation where it adds value, and systems that capture learning. They avoid both documentation for its own sake and complete lack of knowledge capture. The goal is enabling effective work and learning, not comprehensive documentation.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 179,
    question: "How should leaders respond to stakeholder requests to bypass teams for quick changes?",
    options: [
      "Always accommodate urgent stakeholder requests even if it disrupts team work",
      "Never allow any work that wasn't planned in advance",
      "Help stakeholders understand impact while having clear processes for urgent requests",
      "Tell stakeholders they must wait for the next planning cycle regardless of urgency"
    ],
    correctAnswer: 2,
    explanation: "Leaders balance stakeholder urgency with team stability. They ensure there's a way to handle genuinely urgent work while protecting teams from constant interruption. They help stakeholders understand the cost of disruption and work to reduce 'false urgency' while acknowledging some work genuinely cannot wait.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 180,
    question: "What does 'build quality in' mean for leadership expectations?",
    options: [
      "Have separate QA teams inspect quality into products after development",
      "Quality is expensive so accept lower quality to maintain delivery speed",
      "Only focus on quality after achieving target velocity levels",
      "Expect teams to build quality through practices like TDD, continuous integration, and refactoring"
    ],
    correctAnswer: 3,
    explanation: "Leaders establish expectations that quality is built in through engineering practices, not inspected in later. They ensure teams have time and skills for practices like automated testing, refactoring, code review, and continuous integration. They understand built-in quality enables sustainable speed.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 181,
    question: "How should leaders approach failure post-mortems and retrospectives?",
    options: [
      "Create safety to examine failures for learning while maintaining appropriate accountability",
      "Focus on identifying and holding individuals accountable for failures",
      "Skip retrospectives when things go well—only examine failures",
      "Celebrate all failures equally without distinguishing between types"
    ],
    correctAnswer: 0,
    explanation: "Leaders create environments where failures are examined for learning without witch hunts. They distinguish between intelligent experiments that didn't work out and careless mistakes. Post-mortems focus on systemic improvements, not just individual blame, while still maintaining accountability for reckless behavior.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 182,
    question: "What is the leadership role in scaling Agile beyond a single team?",
    options: [
      "Implement a specific scaling framework exactly as prescribed",
      "Apply Agile principles at scale while enabling necessary coordination and maintaining team autonomy",
      "Keep teams completely independent with no cross-team coordination",
      "Add layers of management and control to coordinate multiple teams"
    ],
    correctAnswer: 1,
    explanation: "Leaders scale by maintaining Agile principles (empiricism, autonomy, transparency) while enabling coordination where teams need it—shared vision, architectural alignment, dependency management. They avoid both chaotic independence and heavy coordination overhead. Context and learning guide scaling, not just framework adoption.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 183,
    question: "How should leaders support teams learning new technologies or practices?",
    options: [
      "Wait until people are fully trained before attempting new technologies",
      "Expect teams to learn entirely on their own time outside work hours",
      "Allocate time for learning, provide resources, and accept initial slower velocity",
      "Only allow proven technologies that teams already know"
    ],
    correctAnswer: 2,
    explanation: "Leaders who want teams to adopt new capabilities must provide time for learning within work hours, accept that velocity may temporarily drop as people learn, and provide resources like training, books, or expert coaching. Learning new skills takes time and effort that must be explicitly allocated.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 184,
    question: "What does 'responding to change over following a plan' mean for quarterly or annual commitments?",
    options: [
      "Never make any commitments beyond a single iteration",
      "Once quarterly or annual commitments are made, never change them",
      "Only make vague commitments that can't be held accountable",
      "Make commitments but adapt them transparently as circumstances and learning dictate"
    ],
    correctAnswer: 3,
    explanation: "Leaders make meaningful commitments at appropriate time horizons while acknowledging they're based on current understanding. When significant changes occur or when the organization learns something important, leaders transparently adapt commitments in collaboration with stakeholders. The goal is achieving the right outcomes, not blind adherence to outdated plans.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 185,
    question: "How should leaders address uneven capability levels across teams?",
    options: [
      "Share knowledge across teams while providing differentiated support based on needs",
      "Move all high performers to the same teams to create centers of excellence",
      "Ignore capability differences and treat all teams identically",
      "Rank teams publicly to shame lower performers into improving"
    ],
    correctAnswer: 0,
    explanation: "Leaders foster knowledge sharing through communities of practice, cross-team pairing, and internal conferences. They provide more coaching and support to less mature teams while helping high-performing teams continue improving. They avoid creating elite teams that hoard knowledge or ignoring teams that need help.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 186,
    question: "What is the leadership role in establishing organizational rhythm and cadence?",
    options: [
      "Mandate identical sprint lengths and schedules for all teams",
      "Enable team autonomy while establishing coordinating cadences where beneficial",
      "Let each team establish completely independent cadences without coordination",
      "Eliminate all fixed cadences since Agile means continuous flow"
    ],
    correctAnswer: 1,
    explanation: "Leaders allow teams to choose iteration lengths that suit their context while establishing organizational rhythms for planning, reviews, and coordination where it helps. Some synchronization enables cross-team planning and stakeholder engagement without forcing all teams into identical patterns.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 187,
    question: "How should leaders approach budget constraints during Agile transformation?",
    options: [
      "Wait for increased budgets before starting Agile adoption",
      "Demand additional budget for transformation or refuse to proceed",
      "Work within constraints while demonstrating value to justify future investment",
      "Cut all team capacity to fund transformation consultants and training"
    ],
    correctAnswer: 2,
    explanation: "Leaders work with real constraints while finding ways to demonstrate value that justifies future investment. They make strategic choices about where to invest limited resources, often starting with pilot teams and expanding as value is proven. Transformation doesn't require unlimited budget but does require thoughtful investment.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 188,
    question: "What does 'collective ownership' mean for leadership accountability?",
    options: [
      "No individual is accountable when ownership is collective",
      "Leaders should avoid collective ownership and always assign individual accountability",
      "Collective ownership only applies to code, not to business outcomes",
      "Teams collectively own their work while individuals contribute and can be held accountable"
    ],
    correctAnswer: 3,
    explanation: "Collective ownership means the team owns their work together, any team member can work on any part, and quality is everyone's responsibility. This doesn't eliminate individual accountability—people are accountable for their contributions and behaviors. Leaders hold both individuals and teams accountable appropriately.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 189,
    question: "How should leaders support teams in establishing sustainable pace?",
    options: [
      "Monitor for chronic overwork, address systemic causes, and model healthy boundaries",
      "Strictly enforce 40-hour weeks regardless of business needs",
      "Allow unlimited overtime—sustainable pace is each person's individual responsibility",
      "Accept occasional overtime as inevitable in software development"
    ],
    correctAnswer: 0,
    explanation: "Leaders watch for patterns of overwork which signal poor planning, unrealistic commitments, or inadequate capacity. They address root causes rather than just accepting chronic overtime. They model healthy boundaries themselves. Occasional intensity is different from systemic overwork that burns people out.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 190,
    question: "What is the most important factor in Agile leadership success?",
    options: [
      "Deep knowledge of specific Agile frameworks and certifications",
      "Genuine commitment to Agile values demonstrated through consistent behavior",
      "Charismatic personality that inspires teams to high performance",
      "Previous experience as a Scrum Master or Agile coach"
    ],
    correctAnswer: 1,
    explanation: "Leaders succeed in Agile transformations when they genuinely believe in and model Agile values: transparency, adaptation, respect for people, focus on value. Framework knowledge, charisma, and previous roles can help, but nothing replaces authentic commitment to values shown through daily behavior and decisions.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 191,
    question: "How should leaders approach team member performance issues in Agile environments?",
    options: [
      "Always address performance issues through the team without direct leadership involvement",
      "Use traditional performance management processes unchanged from waterfall environments",
      "Address performance issues directly while considering team dynamics and coaching needs",
      "Wait for annual reviews to address any performance concerns"
    ],
    correctAnswer: 2,
    explanation: "Leaders address performance issues thoughtfully: Is it skill gap, lack of clarity, team dynamics, or genuine performance problem? They provide coaching, clear expectations, and support while holding people accountable. They involve teams where appropriate but don't abdicate leadership responsibility for performance management.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 192,
    question: "What does 'maximize the work not done' mean for leadership scope decisions?",
    options: [
      "Always choose the smallest possible scope regardless of business value",
      "Eliminate work to minimize costs and effort for the organization",
      "Reduce team workload to prevent burnout",
      "Ruthlessly prioritize and eliminate low-value work to focus on highest impact"
    ],
    correctAnswer: 3,
    explanation: "This principle means discovering what's truly valuable and not building the rest. Leaders help organizations say no to low-value work, simplify solutions, and focus on essential value. It's about effectiveness (doing the right things) not just efficiency. Every feature not built is time available for high-value work.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 193,
    question: "How should leaders support teams dealing with legacy processes and governance?",
    options: [
      "Work to evolve processes while finding interim approaches that balance agility and governance needs",
      "Grant teams complete exemption from all legacy processes and governance",
      "Require full compliance with all existing processes regardless of impact",
      "Wait for complete process modernization before attempting Agile practices"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand why governance exists (risk management, compliance) and work to evolve it to support agility while meeting legitimate needs. They find interim solutions (like continuous compliance vs. gate reviews) and gradually modernize processes. They don't force compliance with dysfunctional process or grant blanket exemptions.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 194,
    question: "What is the leadership role in establishing cross-functional teams?",
    options: [
      "Ensure every team has exactly equal numbers from each function",
      "Design teams with skills needed to deliver value end-to-end with minimal handoffs",
      "Keep functional specialization and coordinate across specialized teams",
      "Rotate people between functional and cross-functional teams quarterly"
    ],
    correctAnswer: 1,
    explanation: "Leaders design teams that can deliver value with minimal dependencies on other teams. This means having needed skills within the team, though not necessarily covering every skill equally or perfectly. The goal is reducing handoffs and wait times that slow delivery while recognizing some specialization remains valuable.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 195,
    question: "How should leaders respond to pressure for detailed up-front estimates?",
    options: [
      "Provide detailed estimates even when there's high uncertainty",
      "Refuse to provide any estimates since Agile embraces change",
      "Explain uncertainty, provide ranges based on empirical data, and educate on probabilistic forecasting",
      "Give rough estimates but warn they will definitely change"
    ],
    correctAnswer: 2,
    explanation: "Leaders help stakeholders understand that detailed estimates in high uncertainty are fiction. They provide probabilistic forecasts based on actual delivery data, explain confidence levels and ranges, and educate on working with uncertainty. They don't provide false precision or refuse to forecast entirely.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 196,
    question: "What does 'trust and support' mean for leadership intervention?",
    options: [
      "Never intervene in team activities or decisions",
      "Constantly monitor and correct team decisions to ensure success",
      "Trust teams completely until they fail, then take over",
      "Provide support when needed while trusting teams to make most decisions"
    ],
    correctAnswer: 3,
    explanation: "Leaders balance trust with appropriate support and guardrails. They provide context, constraints, and help when teams need it without micromanaging. They trust teams to make most decisions while staying engaged enough to know when teams need leadership intervention or support.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 197,
    question: "How should leaders approach innovation time or exploratory work?",
    options: [
      "Build exploration and innovation into regular work as part of sustainable delivery",
      "Create separate innovation teams disconnected from delivery work",
      "Only allow innovation after all committed features are delivered",
      "Mandate fixed percentages of time for innovation regardless of context"
    ],
    correctAnswer: 0,
    explanation: "Leaders create space for exploration and innovation as part of normal work: trying new approaches, investigating emerging technologies, exploring solution alternatives. Innovation thrives when integrated with delivery, not separated. Leaders ensure teams have slack time for learning and experimentation without mandating rigid time allocations.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 198,
    question: "What is the leadership role in establishing team working environments?",
    options: [
      "Provide identical facilities for all teams without customization",
      "Understand team needs and provide environments that enable effective collaboration",
      "Let teams arrange their own space without any organizational support",
      "Always provide private offices to maximize individual productivity"
    ],
    correctAnswer: 1,
    explanation: "Leaders ensure teams have environments that enable their work: appropriate space for collaboration, tools for distributed work, quiet space for focus work, and whiteboards or digital collaboration tools. They understand environment affects team effectiveness and invest in conditions that enable high performance.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 199,
    question: "How should leaders support teams in saying no to stakeholders?",
    options: [
      "Teams should never say no to stakeholders—leaders say no on their behalf",
      "Teams must accept all stakeholder requests to maintain relationships",
      "Empower teams to have transparent conversations about capacity and priorities while providing leadership support when needed",
      "Shield teams from all stakeholder interaction to protect their focus"
    ],
    correctAnswer: 2,
    explanation: "Leaders empower teams to have honest conversations with stakeholders about capacity, priorities, and trade-offs. They support teams when stakeholders pressure them inappropriately and back teams in having difficult conversations. They don't force teams to accept unrealistic commitments or completely shield teams from stakeholders.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 200,
    question: "What does 'emergence' mean for leadership planning in Agile?",
    options: [
      "Leaders should not plan since solutions and approaches emerge organically",
      "Emergence means accepting whatever happens without strategic direction",
      "Create comprehensive long-term plans and allow only small tactical emergence",
      "Plan in detail for the short term while allowing longer-term plans to emerge through learning"
    ],
    correctAnswer: 3,
    explanation: "Emergence means solutions and understanding develop through iterative delivery and learning. Leaders plan with appropriate detail for nearer term while maintaining strategic direction and allowing plans to emerge for longer time horizons. They balance planning with adaptation, not abandoning planning or creating rigid long-term plans.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 201,
    question: "How should leaders measure the success of Agile transformation?",
    options: [
      "Measure business outcomes: faster delivery, quality, customer satisfaction, employee engagement",
      "Count how many teams are using Agile practices and frameworks",
      "Assess based on how well teams follow prescribed Agile ceremonies",
      "Wait at least 3 years before attempting to measure transformation success"
    ],
    correctAnswer: 0,
    explanation: "Transformation success is measured by business results and organizational capability improvement, not by practice adoption. Leaders track meaningful outcomes: time to market, quality metrics, customer satisfaction, employee engagement, and business value delivered. Process compliance without improved results isn't success.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 202,
    question: "What is the leadership role in managing organizational dependencies?",
    options: [
      "Eliminate all dependencies before starting Agile delivery",
      "Make dependencies visible, reduce unnecessary ones, and help teams navigate remaining dependencies",
      "Create detailed project plans to coordinate all dependencies",
      "Ignore dependencies and expect teams to work around them independently"
    ],
    correctAnswer: 1,
    explanation: "Leaders make dependencies visible through dependency mapping or planning events. They work to reduce unnecessary dependencies through architecture and team design. For inherent dependencies, they enable team coordination and remove impediments that make dependencies more costly than necessary.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 203,
    question: "How should leaders approach organizational change resistance?",
    options: [
      "Force change through regardless of resistance",
      "Abandon changes when people resist",
      "Understand concerns, involve people in shaping change, demonstrate value, and address legitimate issues",
      "Replace resistant people with change-ready employees"
    ],
    correctAnswer: 2,
    explanation: "Resistance often signals legitimate concerns or poor change process. Leaders listen to understand resistance, involve people in shaping change, address real issues, and help people experience benefits. They distinguish between thoughtful concern and resistance to any change, addressing each appropriately.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 204,
    question: "What does 'inspect and adapt' mean for leadership decisions?",
    options: [
      "Leaders should constantly change direction based on any new information",
      "Leadership decisions should remain stable to provide consistency",
      "Only inspect and adapt team-level decisions, not strategic leadership decisions",
      "Regularly examine results of leadership decisions and adapt based on learning"
    ],
    correctAnswer: 3,
    explanation: "Leaders apply empiricism to their own decisions: set direction, observe results, learn, adapt approach. This means examining whether leadership decisions are achieving intended outcomes and changing course when they're not. Balance adaptation with appropriate strategic consistency.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 205,
    question: "How should leaders support Product Owners in stakeholder management?",
    options: [
      "Ensure Product Owners have authority, remove impediments, and support them when stakeholders undermine decisions",
      "Make all stakeholder decisions to protect Product Owners from pressure",
      "Leave Product Owners to manage all stakeholder relationships independently",
      "Have Product Owners report all stakeholder interactions to leaders for approval"
    ],
    correctAnswer: 0,
    explanation: "Leaders empower Product Owners by ensuring they have real authority, addressing organizational impediments, and supporting them when stakeholders try to go around them or pressure them inappropriately. They don't make product decisions for Product Owners or leave them unsupported when facing difficult stakeholder dynamics.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 206,
    question: "What is the leadership role in technical excellence and engineering practices?",
    options: [
      "Technical excellence is team responsibility; leaders focus only on business outcomes",
      "Set expectations for technical quality, enable teams to maintain excellence, and invest in capability building",
      "Mandate specific technical practices for all teams to follow uniformly",
      "Accept whatever technical quality teams deliver to maximize feature velocity"
    ],
    correctAnswer: 1,
    explanation: "Leaders establish that technical excellence is expected and important, provide time and resources for quality practices, address impediments to excellence (like inadequate environments), and invest in building team technical capabilities. They understand technical quality enables sustainable business value delivery.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 207,
    question: "How should leaders balance team autonomy with organizational alignment?",
    options: [
      "Maximize autonomy even if it means teams work at cross-purposes",
      "Eliminate autonomy to ensure perfect organizational alignment",
      "Create clear strategic direction and constraints while empowering teams on execution decisions",
      "Alternate between tight control and full autonomy based on performance"
    ],
    correctAnswer: 2,
    explanation: "Leaders align teams through clear vision, strategy, and goals rather than controlling execution. They define what success looks like and critical constraints (architectural, regulatory, security) while empowering teams to determine how to achieve goals within those boundaries. This creates alignment with autonomy.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 208,
    question: "What does 'people over process' mean for when processes aren't working?",
    options: [
      "Never change processes since people matter more than process",
      "Always blame the people, never the process, when things go wrong",
      "Eliminate all processes to maximize focus on people",
      "Examine whether process serves people's effectiveness or creates unnecessary obstacles"
    ],
    correctAnswer: 3,
    explanation: "The value statement means processes should serve people's effectiveness, not constrain them unnecessarily. When processes create waste or impediments, leaders examine and evolve them. They don't blindly follow dysfunctional process or eliminate all process—they ensure process enables people.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 209,
    question: "How should leaders approach continuous delivery and deployment capabilities?",
    options: [
      "Support incremental improvement in deployment frequency and automation as strategic capability",
      "Mandate that all teams achieve continuous deployment immediately",
      "Focus only on features and ignore deployment capabilities",
      "Continuous deployment only matters for web applications, not other software"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand that deployment frequency and automation are strategic capabilities that reduce risk and enable faster feedback. They support teams in incrementally improving these capabilities through automation, reduced batch size, and better practices. They invest in infrastructure and skills that enable more frequent, safer deployment.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 210,
    question: "What is the most important leadership characteristic for sustaining organizational agility?",
    options: [
      "Deep technical knowledge of products and technologies",
      "Consistent modeling of agility: transparency, adaptation, learning, and respect",
      "Strong authority to mandate practices and overcome resistance",
      "Previous experience as a practitioner on Agile teams"
    ],
    correctAnswer: 1,
    explanation: "Leaders sustain agility by embodying it in their own behavior: being transparent about challenges and uncertainties, adapting based on feedback and learning, continuously improving leadership practices, and demonstrating respect for people. They model the culture they want to create. Behavior creates culture more than authority or knowledge.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 211,
    question: "How should leaders respond when multiple teams need the same specialized expertise?",
    options: [
      "Assign specialists to multiple teams simultaneously to maximize utilization",
      "Create a separate shared services team that all teams depend on",
      "Build capability within teams while providing temporary expert support during transitions",
      "Have teams wait in queue for shared specialists to become available"
    ],
    correctAnswer: 2,
    explanation: "Leaders work to build broad capability within teams to reduce dependency on scarce specialists. They might provide temporary expert support to teams while people learn, but avoid permanent dependencies on shared specialists that create bottlenecks and handoffs. Growing capability across teams creates organizational resilience.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 212,
    question: "What does 'value-driven' mean for prioritizing technical work versus features?",
    options: [
      "Always prioritize customer features over technical work since features deliver value",
      "Only do technical work when there's slack time after feature commitments",
      "Alternate iterations between feature work and technical work",
      "Technical work and features deliver different types of value and need balanced prioritization"
    ],
    correctAnswer: 3,
    explanation: "Leaders understand that technical work (architecture, refactoring, automation, infrastructure) enables future value delivery through sustainable speed and quality. Value-driven doesn't mean only customer-visible features. Technical health is valuable. Leaders ensure both feature and technical work receive appropriate priority based on their value contribution.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 213,
    question: "How should leaders support teams in establishing healthy relationships with operations and support teams?",
    options: [
      "Foster collaboration and shared responsibility while respecting needed specialization",
      "Keep development and operations completely separate with formal handoffs",
      "Merge all operations responsibilities into development teams immediately",
      "Have operations teams report to development managers to ensure alignment"
    ],
    correctAnswer: 0,
    explanation: "Leaders break down dev-ops silos by creating shared goals, collaboration forums, and mutual understanding. They might evolve toward DevOps practices where teams have more operational responsibility, but respect that some operational specialization provides value. The goal is collaboration and shared success, not necessarily full merger.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 214,
    question: "What is the leadership role when teams identify that organizational policies create waste?",
    options: [
      "Enforce compliance with all policies regardless of waste they create",
      "Examine policies to understand their purpose and evolve those that create waste without serving legitimate needs",
      "Grant teams exemptions from any policies they find problematic",
      "Tell teams to work around wasteful policies without formally changing them"
    ],
    correctAnswer: 1,
    explanation: "Leaders investigate why policies exist—often addressing real risks or needs. They work to evolve policies that create waste while addressing underlying concerns differently. They don't blindly enforce dysfunctional policy or grant blanket exemptions. They address the tension between agility and legitimate organizational needs thoughtfully.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 215,
    question: "How should leaders approach team celebration and recognition?",
    options: [
      "Only recognize individual achievements to maintain accountability",
      "Only recognize team achievements to reinforce collective ownership",
      "Recognize both individual contributions and team successes appropriately",
      "Avoid all recognition since it creates competition and status differences"
    ],
    correctAnswer: 2,
    explanation: "Leaders celebrate team successes to reinforce collaboration while also recognizing individual contributions and growth. They avoid forced rankings or competition between teams. Recognition reinforces desired behaviors and culture. Balance recognizing both individual and collective contributions builds both accountability and teamwork.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 216,
    question: "What does 'empirical process control' mean for governance and oversight?",
    options: [
      "Eliminate all governance since empiricism means adapting without controls",
      "Maintain traditional phase-gate governance with detailed upfront approval",
      "Only perform governance reviews at the end of work when it's complete",
      "Shift governance to focus on outcomes and learning through frequent inspection of working product"
    ],
    correctAnswer: 3,
    explanation: "Leaders evolve governance to focus on outcomes, not process compliance. Oversight happens through frequent inspection of working product, business results, and leading indicators rather than reviewing plans and documentation. This provides better risk management through transparency and adaptation while enabling speed.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 217,
    question: "How should leaders support teams dealing with unclear or conflicting stakeholder requests?",
    options: [
      "Facilitate stakeholder alignment while empowering Product Owners to make final priority decisions",
      "Make all priority decisions to protect teams from stakeholder conflicts",
      "Have teams implement all requests from all stakeholders regardless of conflicts",
      "Tell teams to ignore stakeholder requests and focus on technical priorities"
    ],
    correctAnswer: 0,
    explanation: "Leaders help stakeholders align on priorities and resolve conflicts, ensuring Product Owners have authority to make final decisions. They don't make all product decisions themselves or let teams be whipsawed by conflicting stakeholder demands. They enable the conversations and decisions that create clarity and alignment.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 218,
    question: "What is the leadership role in establishing organizational learning?",
    options: [
      "Learning is individual responsibility; leaders focus on delivery results",
      "Create systems, time, and culture that enable and value continuous learning",
      "Mandate specific learning activities and training for everyone",
      "Only invest in learning for high-potential employees"
    ],
    correctAnswer: 1,
    explanation: "Leaders build learning organizations by creating psychological safety for experimentation, allocating time for learning, providing resources (training, books, conferences), establishing communities of practice, and celebrating learning and knowledge sharing. They make learning a valued part of work, not separate from it.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 219,
    question: "How should leaders balance short-term delivery pressure with long-term organizational capability?",
    options: [
      "Always prioritize long-term capability even at the expense of near-term delivery",
      "Focus exclusively on short-term delivery and worry about capability later",
      "Make conscious trade-offs between short-term needs and building sustainable capability",
      "Alternate quarters between delivery focus and capability building focus"
    ],
    correctAnswer: 2,
    explanation: "Leaders balance delivering current value with building organizational capability for future value. Constant short-term focus creates organizational debt. Pure long-term focus without delivery results fails. Leaders make explicit trade-offs, ensuring some investment in capability (skills, practices, architecture, tools) while delivering value.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 220,
    question: "What does 'sustainable pace' mean for leadership commitment decisions?",
    options: [
      "Never commit to deadlines since sustainable pace is the only priority",
      "Make whatever commitments stakeholders want and pressure teams to deliver",
      "Always pad commitments by 50% to ensure sustainable pace",
      "Make commitments that the organization can meet without chronic overwork"
    ],
    correctAnswer: 3,
    explanation: "Leaders make realistic commitments based on empirical capacity rather than wishful thinking or stakeholder pressure. They understand that commitments requiring chronic overtime aren't sustainable and damage long-term capability. They negotiate what's possible within sustainable pace or adjust scope/timeline to match real capacity.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 221,
    question: "How should leaders approach cross-team knowledge sharing?",
    options: [
      "Create forums and practices for teams to share learnings and coordinate where valuable",
      "Mandate that all teams document and share every decision and learning",
      "Let teams work independently without any knowledge sharing mechanisms",
      "Assign knowledge management roles to document and distribute all information"
    ],
    correctAnswer: 0,
    explanation: "Leaders create mechanisms for knowledge sharing: communities of practice, internal conferences, cross-team retrospectives, architecture forums, and internal open source. They make sharing easy and valued without mandating comprehensive documentation. The goal is enabling teams to learn from each other, not central knowledge control.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 222,
    question: "What is the leadership role when Agile practices conflict with organizational culture?",
    options: [
      "Abandon Agile since it doesn't fit the culture",
      "Work to evolve both practices and culture, recognizing they must align for success",
      "Force Agile practices regardless of cultural fit",
      "Implement Agile practices identically and wait for culture to automatically change"
    ],
    correctAnswer: 1,
    explanation: "Leaders understand that sustainable Agile requires cultural alignment. They adapt practices to fit context while also intentionally evolving culture through their own behavior, what they reward, organizational changes, and addressing systemic issues. Both practices and culture must evolve together—neither can be ignored.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 223,
    question: "How should leaders support teams in establishing working agreements?",
    options: [
      "Provide standard working agreements that all teams must adopt",
      "Stay completely uninvolved since working agreements are purely team-owned",
      "Ensure teams create meaningful agreements that serve their work while aligning with organizational values",
      "Require formal approval of all team working agreements"
    ],
    correctAnswer: 2,
    explanation: "Leaders ensure teams understand the value of working agreements and create them, but don't prescribe specific agreements. They might surface concerns if agreements seem problematic or conflict with organizational values, but generally trust teams to establish norms that enable their effectiveness.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 224,
    question: "What does 'built-in quality' mean for leadership investment decisions?",
    options: [
      "Invest primarily in separate QA teams to ensure quality",
      "Quality is free so no specific investment is needed",
      "Only invest in quality improvement after velocity targets are met",
      "Invest in practices, tools, and skills that enable teams to build quality into their work"
    ],
    correctAnswer: 3,
    explanation: "Leaders invest in capabilities that enable built-in quality: test automation tools and skills, continuous integration systems, adequate test environments, time for refactoring and technical excellence, and quality-focused engineering practices. Quality isn't free but investing in built-in quality is more effective than inspection-based quality.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 225,
    question: "How should leaders approach the tension between standardization and innovation?",
    options: [
      "Balance necessary standardization with space for innovation and experimentation",
      "Maximize standardization to achieve efficiency and reduce costs",
      "Maximize innovation by avoiding all standards and constraints",
      "Separate teams into standardization-focused and innovation-focused groups"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand both values: standardization enables efficiency and reduces complexity where appropriate; innovation requires experimentation and diversity. They standardize what must be consistent (integration points, security practices) while creating space for innovation and experimentation. Context determines the right balance.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 226,
    question: "What is the leadership responsibility when organizational structure impedes value delivery?",
    options: [
      "Work within existing structure—organizational design is not a leadership concern",
      "Examine structure empirically and evolve it thoughtfully based on value flow",
      "Immediately restructure the entire organization to fix impediments",
      "Wait for executive leadership to mandate structural changes"
    ],
    correctAnswer: 1,
    explanation: "Leaders observe how structure affects value delivery and team effectiveness. They make intentional changes to reduce handoffs, enable autonomy, and improve flow. Restructuring should be purposeful and incremental based on learning, not reactive or delayed until perfect understanding. Structure should serve strategy and value delivery.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 227,
    question: "How should leaders balance transparency with confidentiality in Agile organizations?",
    options: [
      "Make everything transparent with no exceptions for true organizational agility",
      "Minimize transparency to protect sensitive information and maintain control",
      "Default to transparency while protecting legitimately confidential information",
      "Only share information on a strict need-to-know basis"
    ],
    correctAnswer: 2,
    explanation: "Leaders maximize transparency as it enables inspection, adaptation, and trust. Some information requires confidentiality (personal data, pending acquisitions, security details). The default is transparency; confidentiality is the exception with clear reasoning. Excessive secrecy damages trust and agility more than it protects.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 228,
    question: "What does 'pull system' mean for leadership resource allocation?",
    options: [
      "Leaders should never allocate resources—teams pull whatever they need",
      "Pull systems only apply to manufacturing, not knowledge work",
      "Leadership assigns work to teams regardless of current workload",
      "Teams pull work when they have capacity rather than having work pushed onto them"
    ],
    correctAnswer: 3,
    explanation: "Pull systems mean work starts when teams have capacity to take it on, not when someone wants to assign it. Leaders understand limiting work in progress improves flow and quality. They create systems where teams pull from prioritized backlogs based on capacity rather than having multiple work streams pushed simultaneously.",
    domain: "Systems Thinking",
    difficulty: "Advanced"
  },
  {
    id: 229,
    question: "How should leaders approach team requests for process or tool changes?",
    options: [
      "Understand the problem being solved and enable beneficial changes while considering organizational impact",
      "Approve all requests to show trust in team judgment",
      "Deny all requests to maintain consistency and control costs",
      "Create a formal change control board to evaluate all requests"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand why teams want changes—what problem are they solving? They enable improvements that serve team effectiveness while considering impacts on integration, security, support, and cost. They balance team autonomy with organizational concerns without bureaucracy or rubber-stamping everything.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 230,
    question: "What is the leadership role in establishing Definition of Ready?",
    options: [
      "Leaders should mandate specific Definition of Ready criteria for all teams",
      "Support teams in creating appropriate readiness criteria while avoiding excessive ceremony",
      "Definition of Ready is unnecessary bureaucracy that slows Agile teams",
      "Only Product Owners should define readiness without team or leadership input"
    ],
    correctAnswer: 1,
    explanation: "Definition of Ready helps ensure work is understood before teams commit to it. Leaders ensure teams don't create excessive ceremony (20 checkboxes) or skip readiness entirely (pulling poorly understood work). The balance is having enough clarity to start effectively without delaying work unnecessarily.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 231,
    question: "How should leaders respond to pressure for detailed resource utilization tracking?",
    options: [
      "Implement comprehensive time tracking for all activities to maximize visibility",
      "Refuse all resource tracking as it contradicts Agile values",
      "Focus on outcome delivery and flow efficiency rather than individual utilization",
      "Track utilization only for the lowest-performing team members"
    ],
    correctAnswer: 2,
    explanation: "Leaders help organizations understand that optimizing for 100% utilization creates bottlenecks and slows delivery. They shift focus to outcomes achieved, flow time, and quality rather than how busy people are. High utilization often correlates with poor flow and lower value delivery. Slack time enables learning and responding to urgent needs.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 232,
    question: "What does 'empiricism' mean for how leaders should respond to failure?",
    options: [
      "Immediately identify and punish those responsible for failures",
      "Ignore failures and focus only on successes to maintain team morale",
      "Document failures but take no action to avoid disrupting ongoing work",
      "Examine failures transparently to understand causes and adapt to prevent recurrence"
    ],
    correctAnswer: 3,
    explanation: "Empiricism requires transparent inspection of what happened, including failures. Leaders create safety to examine failures honestly, distinguish between intelligent experiments and careless errors, identify systemic causes rather than just blaming individuals, and adapt to prevent recurrence. Learning from failure is essential for improvement.",
    domain: "Empiricism and Agility",
    difficulty: "Foundation"
  },
  {
    id: 233,
    question: "How should leaders support Product Owners in dealing with technical constraints?",
    options: [
      "Enable collaboration where teams explain constraints and Product Owners make informed trade-offs",
      "Shield Product Owners from technical details so they focus only on business value",
      "Expect Product Owners to become technical experts in all implementation details",
      "Have technical leaders override Product Owner decisions when constraints exist"
    ],
    correctAnswer: 0,
    explanation: "Product Owners need enough technical understanding to make informed decisions but not to become architects. Leaders foster collaboration where teams explain technical realities, Product Owners understand business implications, and they jointly find the best path forward considering both business value and technical constraints.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 234,
    question: "What is the leadership role when teams report unrealistic stakeholder expectations?",
    options: [
      "Tell teams to meet expectations regardless of feasibility",
      "Facilitate transparent conversations about capacity, trade-offs, and realistic outcomes",
      "Tell stakeholders their expectations are wrong without understanding context",
      "Always side with teams over stakeholders to maintain team morale"
    ],
    correctAnswer: 1,
    explanation: "Leaders enable honest conversations between teams and stakeholders about what's realistic. They help make capacity visible, clarify priorities, discuss trade-offs (scope, quality, timeline), and find mutually acceptable outcomes. They don't simply transmit pressure or completely shield teams from business reality.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 235,
    question: "How should leaders approach the concept of 'technical debt' with business stakeholders?",
    options: [
      "Never mention technical debt—it's a technical concern not relevant to stakeholders",
      "Use fear about system collapse to justify unlimited technical debt reduction",
      "Help stakeholders understand technical debt as business risk and cost affecting future delivery",
      "Tell stakeholders technical debt will be addressed without involving them in prioritization"
    ],
    correctAnswer: 2,
    explanation: "Leaders make technical debt visible to stakeholders in business terms: increased bug rates, slower feature delivery, higher costs, business risk. They help stakeholders understand trade-offs between paying down debt and adding features, enabling informed prioritization. Technical debt is a business concern, not just a technical one.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 236,
    question: "What does 'self-organization' mean for accountability to external stakeholders?",
    options: [
      "Self-organizing teams are not accountable to anyone outside the team",
      "Self-organization eliminates the need for any external accountability",
      "Only individual team members are accountable, not leaders or the team collectively",
      "Leaders remain accountable to stakeholders while teams self-organize their work approach"
    ],
    correctAnswer: 3,
    explanation: "Self-organization means teams decide how to do their work, not that they're unaccountable. Leaders remain accountable to stakeholders for results and commitments. Teams are accountable for delivery and quality. Self-organization is about autonomy in execution, not freedom from accountability for outcomes.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 237,
    question: "How should leaders support Scrum Masters who face organizational impediments beyond their influence?",
    options: [
      "Own and actively work to resolve organizational impediments that Scrum Masters surface",
      "Tell Scrum Masters to focus only on team-level impediments they can resolve",
      "Expect Scrum Masters to resolve all impediments regardless of their organizational level",
      "Document impediments for future consideration but maintain current organizational state"
    ],
    correctAnswer: 0,
    explanation: "A core leadership responsibility is removing organizational impediments that teams and Scrum Masters cannot resolve themselves: policies, resources, cross-team coordination, executive decisions. Leaders don't delegate this back or ignore it. They act on impediments surfaced by those closest to the work.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 238,
    question: "What is the impact of leadership consistency on Agile culture?",
    options: [
      "Consistency doesn't matter as long as decisions are well-intentioned",
      "Consistent behavior and decisions build trust and reinforce cultural values",
      "Leaders should constantly change approaches to stay adaptive",
      "Consistency only matters for low-level decisions, not strategic choices"
    ],
    correctAnswer: 1,
    explanation: "Consistent leadership behavior builds trust and makes values real. When leaders consistently demonstrate transparency, adaptation, respect, and focus on value, these become cultural norms. Inconsistency—saying one thing and doing another—damages trust and creates cynicism about transformation. People watch what leaders do consistently, not what they say occasionally.",
    domain: "Agile Culture",
    difficulty: "Foundation"
  },
  {
    id: 239,
    question: "How should leaders approach capacity planning for Agile teams?",
    options: [
      "Plan for 100% capacity utilization to maximize productivity",
      "Don't plan capacity at all—let teams self-organize their commitments",
      "Plan for sustainable capacity with slack time for learning, innovation, and handling urgent issues",
      "Only plan capacity for billable or customer-facing work"
    ],
    correctAnswer: 2,
    explanation: "Leaders understand that planning for 100% utilization creates rigidity and bottlenecks. Healthy capacity planning includes slack for learning, technical debt reduction, innovation, handling urgent issues, and preventing burnout. Sustainable capacity enables both delivery and continuous improvement.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 240,
    question: "What does 'responding to change' mean for leadership stability and vision?",
    options: [
      "Leaders should constantly change direction to remain responsive",
      "Never change strategic direction once it's set to provide stability",
      "Only change direction when forced by external factors",
      "Maintain strategic vision while adapting approach as learning and circumstances evolve"
    ],
    correctAnswer: 3,
    explanation: "Leaders provide stable strategic vision and direction while remaining open to adapting how that vision is achieved. They don't thrash between strategies or rigidly stick to failing approaches. They balance providing stability with adapting to significant learning and changing circumstances. Vision and values remain stable; plans and approaches adapt.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 241,
    question: "How should leaders support teams in managing external dependencies?",
    options: [
      "Make dependencies visible, reduce unnecessary coupling, and help navigate remaining dependencies",
      "Eliminate all external dependencies before teams can start work",
      "Expect teams to manage all dependencies independently without leadership support",
      "Create detailed project plans that coordinate all external dependencies"
    ],
    correctAnswer: 0,
    explanation: "Leaders help teams identify dependencies early, work to reduce unnecessary ones through architecture and organizational design, and remove impediments that make dependencies more costly. For inherent dependencies, they enable direct team-to-team coordination and escalate blockers. Making dependencies visible enables proactive management.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 242,
    question: "What is the leadership role in establishing organizational metrics and dashboards?",
    options: [
      "Measure everything possible to maximize transparency and control",
      "Choose metrics that enable learning and improvement while driving desired behaviors",
      "Avoid all metrics since they drive gaming and dysfunctional behavior",
      "Implement industry-standard metrics regardless of organizational context"
    ],
    correctAnswer: 1,
    explanation: "Leaders select metrics that provide insight for improvement decisions: outcome achievement, flow efficiency, quality, customer satisfaction, team health. They avoid metrics that drive wrong behaviors (local optimization, gaming, activity over value). Metrics should serve learning and improvement, not just monitoring and control.",
    domain: "Evidence-Based Management",
    difficulty: "Advanced"
  },
  {
    id: 243,
    question: "How should leaders respond when teams request additional training or learning opportunities?",
    options: [
      "Approve all training requests to show support for team development",
      "Deny requests due to cost and time away from delivery",
      "Evaluate requests considering both capability development and delivery needs, finding appropriate balance",
      "Only provide training to high-performing teams as a reward"
    ],
    correctAnswer: 2,
    explanation: "Leaders invest in capability development as it builds organizational capacity. They evaluate training requests considering relevance, timing, and delivery impact. They find ways to enable learning (internal knowledge sharing, online courses, conference attendance) while balancing immediate delivery needs. Growing capabilities is a strategic investment, not an optional perk.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 244,
    question: "What does 'emergent requirements' mean for leadership commitment to stakeholders?",
    options: [
      "Never commit to anything since requirements constantly emerge",
      "Commit to detailed requirements upfront despite the principle of emergence",
      "Use emergence as an excuse for lack of planning or direction",
      "Commit to high-level outcomes while allowing detailed requirements to emerge through delivery"
    ],
    correctAnswer: 3,
    explanation: "Leaders commit to outcomes and value to be delivered while acknowledging that detailed understanding emerges through iterative delivery and feedback. They don't use emergence as an excuse for lack of vision or to avoid commitments. They help stakeholders understand that flexibility in details enables better outcomes than rigid detailed plans.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 245,
    question: "How should leaders approach compensation and rewards in Agile organizations?",
    options: [
      "Balance recognition of individual contribution with team collaboration and outcomes",
      "Compensate purely based on individual performance metrics",
      "Provide identical compensation to all team members to reinforce equality",
      "Only reward team performance, never individual contributions"
    ],
    correctAnswer: 0,
    explanation: "Leaders design compensation that recognizes both individual contributions and team success. They avoid forced rankings or individual metrics that undermine collaboration. They acknowledge that individuals contribute at different levels while valuing collaboration and team outcomes. Balance individual recognition with avoiding competition that damages teamwork.",
    domain: "Agile Culture",
    difficulty: "Advanced"
  },
  {
    id: 246,
    question: "What is the leadership role when Agile practices create tension with existing organizational norms?",
    options: [
      "Abandon Agile practices that conflict with existing norms",
      "Address tensions by examining both practices and norms, evolving what doesn't serve outcomes",
      "Force Agile practices regardless of organizational impact",
      "Ignore the tension and hope it resolves naturally over time"
    ],
    correctAnswer: 1,
    explanation: "Leaders acknowledge tension between Agile approaches and existing norms as opportunities for organizational learning. They examine whether existing norms serve current needs or represent outdated thinking. They adapt both Agile implementation and organizational norms based on what serves outcomes, not blindly following either Agile frameworks or legacy practices.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 247,
    question: "How should leaders support teams dealing with ambiguous or changing requirements?",
    options: [
      "Stop all work until requirements are completely clear and stable",
      "Pressure stakeholders to commit to fixed requirements upfront",
      "Enable iterative delivery and frequent feedback to clarify requirements through building",
      "Have teams build everything stakeholders mention to avoid missing requirements"
    ],
    correctAnswer: 2,
    explanation: "Leaders help teams and stakeholders embrace that clarity emerges through building and feedback in complex domains. They enable short iterations, frequent stakeholder engagement, and learning from working software rather than detailed upfront requirements. They educate stakeholders that this approach manages risk better than exhaustive planning.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 248,
    question: "What does 'swarming' on impediments mean for leadership resource allocation?",
    options: [
      "Always assign multiple people to every task regardless of need",
      "Never allow multiple people on the same work to maintain individual accountability",
      "Swarming only applies to bugs, not to other types of work",
      "Enable teams to temporarily focus multiple people on critical impediments to resolve them quickly"
    ],
    correctAnswer: 3,
    explanation: "Leaders support teams in swarming—temporarily focusing multiple team members on critical impediments or stuck work to resolve it quickly. This might mean other work pauses temporarily. Swarming prevents work from languishing blocked and reduces overall work in progress. It requires trusting teams to make good decisions about when to swarm.",
    domain: "Systems Thinking",
    difficulty: "Intermediate"
  },
  {
    id: 249,
    question: "How should leaders approach the balance between team autonomy and organizational standards?",
    options: [
      "Define minimum necessary standards while maximizing team autonomy within those guardrails",
      "Maximize autonomy with no organizational standards or constraints",
      "Establish comprehensive standards that all teams must follow uniformly",
      "Let the most senior technical people decide all standards for everyone"
    ],
    correctAnswer: 0,
    explanation: "Leaders identify what genuinely requires consistency across teams (security practices, integration interfaces, regulatory compliance) and standardize minimally. They maximize autonomy within those constraints. Over-standardization kills innovation and responsiveness; no standards creates chaos. Context and risk guide where standardization serves vs. hinders.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 250,
    question: "What is the leadership responsibility when teams identify waste in organizational processes?",
    options: [
      "Require compliance with all processes regardless of waste",
      "Investigate the waste, understand process purpose, and evolve processes that don't serve current needs",
      "Immediately eliminate any process teams identify as wasteful",
      "Tell teams to document waste but take no action to change processes"
    ],
    correctAnswer: 1,
    explanation: "Leaders take team observations of waste seriously—teams see where processes create unnecessary work or delays. They investigate why processes exist, whether they still serve their purpose, and evolve or eliminate those that create waste without addressing real needs. They balance reducing waste with meeting legitimate organizational requirements.",
    domain: "Leading Change",
    difficulty: "Intermediate"
  },
  {
    id: 251,
    question: "How should leaders support teams in establishing coding standards and technical practices?",
    options: [
      "Mandate identical coding standards and practices for all teams",
      "Leave all technical decisions entirely to individual developers",
      "Enable teams to establish appropriate standards while sharing practices across teams",
      "Have architects define all technical standards without team input"
    ],
    correctAnswer: 2,
    explanation: "Leaders support teams in establishing standards that serve quality and collaboration (code style, review practices, testing approaches). They enable sharing of practices across teams without rigid mandates. Some standards (security, accessibility) might be organizational. Leaders balance consistency where valuable with team autonomy and context-appropriate practices.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 252,
    question: "What does 'working software is the primary measure of progress' mean for leadership reporting?",
    options: [
      "Never report anything except completed features",
      "Working software is sufficient; no other progress measures are needed",
      "Create comprehensive reports of all team activities in addition to working software",
      "Focus on delivery of valuable working software over activity reports and phase completion"
    ],
    correctAnswer: 3,
    explanation: "Leaders focus on tangible outcomes—working software delivered, value realized—rather than activity metrics, phase gates completed, or plans followed. They help organizations measure progress by what's delivered and validated with users, not by how busy people are or adherence to plans. Working software provides the most reliable progress indicator.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 253,
    question: "How should leaders respond to requests for traditional project status reports?",
    options: [
      "Help stakeholders understand how Agile delivery provides better visibility while reducing report burden",
      "Refuse all traditional reporting since it contradicts Agile values",
      "Provide whatever reports stakeholders request regardless of value",
      "Create parallel traditional reports in addition to Agile practices"
    ],
    correctAnswer: 0,
    explanation: "Leaders educate stakeholders that transparency through working software, demos, and burn charts provides better visibility than status reports. They help stakeholders get information they need while reducing low-value reporting overhead. They don't refuse all reporting or maintain dual tracking systems. They evolve reporting to serve real needs efficiently.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 254,
    question: "What is the leadership role in fostering psychological safety?",
    options: [
      "Psychological safety is a team responsibility; leaders shouldn't interfere",
      "Model vulnerability, respond constructively to failure and disagreement, and address toxic behavior",
      "Eliminate all conflict and challenge to ensure people feel comfortable",
      "Psychological safety naturally emerges without specific leadership action"
    ],
    correctAnswer: 1,
    explanation: "Leaders create psychological safety by modeling vulnerability (admitting mistakes, asking for help), responding to failures with curiosity rather than blame, welcoming challenges to their ideas, and quickly addressing toxic behavior. They understand safety includes challenge and accountability, not just comfort. Their behavior sets the tone for organizational culture.",
    domain: "Creating High-Performing Teams",
    difficulty: "Foundation"
  },
  {
    id: 255,
    question: "How should leaders approach the principle of 'simplicity—maximizing work not done' in organizational design?",
    options: [
      "Minimize all organizational structure and roles to achieve simplicity",
      "Maintain comprehensive organizational layers to manage complexity",
      "Design organizations with just enough structure to enable coordination without creating unnecessary hierarchy",
      "Copy the simplest organizational structure from successful companies"
    ],
    correctAnswer: 2,
    explanation: "Leaders apply simplicity to organizational design: just enough structure, roles, and coordination mechanisms to enable effective work without creating unnecessary complexity, handoffs, or hierarchy. Over-simplified design creates chaos; over-complex design creates bureaucracy. Find the essential minimum that serves the organization's scale and needs.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 256,
    question: "What does 'continuous improvement' mean for leadership practices and approaches?",
    options: [
      "Leadership practices should remain stable to provide consistency for teams",
      "Leaders should constantly change their approaches to stay adaptive",
      "Continuous improvement only applies to teams, not to leadership",
      "Leaders regularly examine and improve their own practices based on feedback and outcomes"
    ],
    correctAnswer: 3,
    explanation: "Leaders apply continuous improvement to their own practices: seeking feedback on leadership effectiveness, examining outcomes of decisions, trying new approaches, and evolving based on learning. They model the improvement mindset they expect from teams. Leadership practices should evolve as the organization learns, not remain static or thrash constantly.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 257,
    question: "How should leaders support teams dealing with distributed or asynchronous collaboration challenges?",
    options: [
      "Invest in tools, practices, and norms that enable effective distributed collaboration",
      "Require all teams to be co-located to avoid distribution challenges",
      "Accept reduced effectiveness as inevitable with distributed teams",
      "Only allow synchronous communication to maintain team cohesion"
    ],
    correctAnswer: 0,
    explanation: "Leaders acknowledge distribution adds complexity but invest in making it work: collaboration tools, thoughtful meeting scheduling, documentation practices, clear communication norms, and team-building activities. They don't pretend distribution doesn't matter or give up on synchronous collaboration. They adapt practices to the reality of how teams work.",
    domain: "Organizational Design",
    difficulty: "Intermediate"
  },
  {
    id: 258,
    question: "What is the leadership role in managing technical architecture decisions that affect multiple teams?",
    options: [
      "Leaders should make all architecture decisions to ensure consistency",
      "Facilitate architectural collaboration while maintaining clear decision-making authority",
      "Each team makes independent architecture decisions without coordination",
      "Hire external architects to make all cross-team architecture decisions"
    ],
    correctAnswer: 1,
    explanation: "Leaders ensure architectural coordination happens through communities of practice, architecture review forums, or enabling architects who work with teams. They maintain clarity on who makes what decisions (teams for local, architects for cross-cutting concerns) while fostering collaboration. Balance team autonomy with necessary architectural coherence.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 259,
    question: "How should leaders approach the concept of 'failure' in Agile environments?",
    options: [
      "Celebrate all failures equally as learning opportunities",
      "Never accept failure; hold people accountable for all negative outcomes",
      "Distinguish between intelligent experiments and careless mistakes in response",
      "Hide failures to maintain stakeholder confidence and team morale"
    ],
    correctAnswer: 2,
    explanation: "Leaders differentiate responses based on failure type: intelligent experiments that didn't work out teach valuable lessons and should be supported; careless mistakes or ignored warnings need different responses. They create environments for smart risk-taking while maintaining accountability for recklessness. Not all failures are equal.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 260,
    question: "What does 'empirical process control' mean for how leaders should make strategic decisions?",
    options: [
      "Make strategic decisions based purely on data without considering intuition or experience",
      "Avoid strategic planning since empiricism means adapting without long-term direction",
      "Strategic decisions are too important for experimentation; only tactical decisions should be empirical",
      "Make strategic decisions informed by data and learning while acknowledging uncertainty"
    ],
    correctAnswer: 3,
    explanation: "Leaders apply empiricism to strategy: use available data and learning, make decisions acknowledging uncertainty, treat strategies as hypotheses to validate, and adapt based on results. They don't ignore intuition or experience, but test assumptions and adjust based on what they learn. Empiricism at all levels, including strategy, not just execution.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 261,
    question: "How should leaders support Product Owners in managing technical debt prioritization?",
    options: [
      "Enable collaboration where teams make technical debt visible and Product Owners balance it with feature work",
      "Technical debt decisions should be made by technical teams without Product Owner involvement",
      "Product Owners should prioritize all features over technical debt reduction",
      "Mandate fixed percentages of capacity for technical debt across all teams"
    ],
    correctAnswer: 0,
    explanation: "Leaders ensure technical debt is visible to Product Owners in business terms (slower delivery, more bugs, higher costs). They enable collaboration where teams explain technical debt impact and Product Owners make informed trade-offs between paying down debt and delivering features. Neither technical teams nor Product Owners own this decision alone.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 262,
    question: "What is the leadership responsibility when teams consistently miss their commitments?",
    options: [
      "Pressure teams to work harder and commit to less to ensure they meet targets",
      "Investigate root causes: planning issues, external impediments, skills gaps, or unrealistic pressure",
      "Accept missed commitments as normal in uncertain environments",
      "Replace team members who fail to deliver on commitments"
    ],
    correctAnswer: 1,
    explanation: "Leaders investigate why teams miss commitments: Are they overpromising under pressure? Are there external blockers? Skills gaps? Unclear requirements? Poor estimation practices? They address root causes rather than just pressuring teams. Consistent misses signal systemic issues that need leadership attention, not just team problems.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 263,
    question: "How should leaders approach innovation versus exploitation in product development?",
    options: [
      "Focus entirely on exploiting current products; innovation is too risky",
      "Focus entirely on innovation; mature products maintain themselves",
      "Balance investment between optimizing current value and exploring new opportunities",
      "Create separate innovation teams disconnected from product delivery"
    ],
    correctAnswer: 2,
    explanation: "Leaders balance exploitation (optimizing current products) with exploration (new products, markets, technologies). Pure exploitation leads to obsolescence; pure exploration never realizes value. The balance depends on market dynamics and organizational maturity. Both should be informed by customer feedback and learning, not arbitrary separation.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 264,
    question: "What does 'inspect and adapt' mean for leadership decision-making velocity?",
    options: [
      "Make decisions as quickly as possible to demonstrate agility",
      "Delay all decisions until complete information is available",
      "Use committees to slow down decision-making and increase deliberation",
      "Make decisions at the right pace considering reversibility, risk, and available information"
    ],
    correctAnswer: 3,
    explanation: "Leaders understand different decisions need different speeds: reversible decisions can be fast; irreversible ones need more deliberation. They don't rush critical decisions or delay reversible ones. They gather enough information to decide wisely without waiting for certainty. Decision-making velocity matches decision importance and reversibility.",
    domain: "Empiricism and Agility",
    difficulty: "Advanced"
  },
  {
    id: 265,
    question: "How should leaders support teams in establishing healthy boundaries with stakeholders?",
    options: [
      "Enable teams to have transparent conversations about capacity and sustainable pace",
      "Teams should accommodate all stakeholder requests regardless of impact",
      "Shield teams completely from all stakeholder interaction",
      "Leaders should make all stakeholder commitments without team input"
    ],
    correctAnswer: 0,
    explanation: "Leaders empower teams to have honest conversations with stakeholders about capacity, priorities, and trade-offs. They support teams in saying no to unrealistic demands and protecting sustainable pace. They don't completely shield teams from stakeholders or force teams to accept any request. Healthy boundaries require transparent two-way communication.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 266,
    question: "What is the leadership role in establishing communities of practice?",
    options: [
      "Mandate that everyone participate in communities of practice",
      "Enable and support communities through time, resources, and visible value recognition",
      "Let communities form organically without any leadership support or involvement",
      "Create formal reporting structures for all communities of practice"
    ],
    correctAnswer: 1,
    explanation: "Leaders support communities of practice by providing time for participation, resources for meetups or tools, and recognizing their value. They don't mandate participation or bureaucratize them with formal structures. They enable these organic knowledge-sharing networks while ensuring they have what they need to thrive.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 267,
    question: "How should leaders approach the tension between speed and learning?",
    options: [
      "Always maximize speed; learning happens naturally through delivery",
      "Always prioritize learning over speed to build long-term capability",
      "Understand that sustainable speed requires building in time for reflection and learning",
      "Alternate between speed-focused and learning-focused periods"
    ],
    correctAnswer: 2,
    explanation: "Leaders understand that sustainable speed requires learning and improvement. Teams that never reflect and improve plateau or slow down over time. Speed without learning creates inefficiency and technical debt. Learning without application delays value delivery. Build reflection and improvement into regular work rhythm, not as separate activities.",
    domain: "Agile Culture",
    difficulty: "Advanced"
  },
  {
    id: 268,
    question: "What does 'servant leadership' mean for difficult decisions and accountability?",
    options: [
      "Servant leaders avoid making difficult decisions to serve team harmony",
      "Servant leadership means always doing what teams want",
      "Servant leadership and accountability are incompatible concepts",
      "Servant leaders make difficult decisions when needed while prioritizing team growth and success"
    ],
    correctAnswer: 3,
    explanation: "Servant leadership doesn't mean avoiding difficult decisions or abdicating accountability. Servant leaders prioritize enabling others' success, but this includes making tough calls, holding people accountable, providing clear direction, and having difficult conversations when needed. Serving others sometimes means challenging them or making unpopular decisions.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 269,
    question: "How should leaders respond when stakeholders request detailed long-term feature roadmaps?",
    options: [
      "Provide product vision and near-term roadmap with decreasing specificity over time",
      "Provide detailed 12-18 month feature roadmaps with specific dates",
      "Refuse to provide any forward-looking information",
      "Commit to detailed features but acknowledge dates will change frequently"
    ],
    correctAnswer: 0,
    explanation: "Leaders help stakeholders understand appropriate planning horizons: clear vision and strategy, detailed plans for near term (high confidence), themes and goals for medium term, vision only for longer term. They educate on working with uncertainty and adapting plans as learning occurs rather than creating false precision in long-range detailed plans.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 270,
    question: "What is the leadership role in establishing retrospective culture?",
    options: [
      "Mandate retrospectives but don't interfere in team improvement decisions",
      "Protect time for retrospectives and act on organizational impediments that teams surface",
      "Attend all retrospectives to ensure they're productive and actionable",
      "Retrospectives are team-owned activities requiring no leadership involvement"
    ],
    correctAnswer: 1,
    explanation: "Leaders ensure retrospectives happen by protecting time for them and making clear they're valued. Most importantly, they act on organizational impediments teams identify. Leaders generally don't attend team retros (their presence inhibits candor) but make themselves accessible when teams need leadership help. Action on impediments shows retrospectives matter.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 271,
    question: "How should leaders balance employee autonomy with organizational needs for consistency?",
    options: [
      "Maximize consistency through standardization of all work approaches",
      "Maximize autonomy without any organizational standards or constraints",
      "Define clear outcomes and necessary constraints while empowering people on approach",
      "Rotate between periods of autonomy and periods of standardization"
    ],
    correctAnswer: 2,
    explanation: "Leaders clarify what outcomes are needed and what constraints are non-negotiable (regulatory, security, integration requirements) while giving autonomy in how people achieve outcomes within those boundaries. Over-standardization kills motivation and innovation; complete autonomy creates chaos. Clear outcomes and minimal necessary constraints enable both alignment and autonomy.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 272,
    question: "What does 'value-driven' prioritization mean when stakeholders disagree on value?",
    options: [
      "Leaders make all priority decisions when stakeholders disagree",
      "Implement everything all stakeholders request to avoid conflict",
      "Alternate implementation between different stakeholder priorities",
      "Facilitate transparent value discussions using clear criteria and data"
    ],
    correctAnswer: 3,
    explanation: "Leaders facilitate discussions where stakeholders clarify and debate value using evidence: customer data, business metrics, strategic alignment, risk reduction. They help establish clear prioritization criteria and decision-making processes. They ensure Product Owners have authority to make final calls after considering stakeholder input. Transparent process and criteria reduce conflict.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 273,
    question: "How should leaders support teams in managing interruptions and unplanned work?",
    options: [
      "Help teams establish processes for managing urgent requests while protecting planned work",
      "Prohibit all interruptions to protect team focus and commitments",
      "Accept all interruptions as normal and don't factor them into planning",
      "Assign dedicated team members to handle all interruptions"
    ],
    correctAnswer: 0,
    explanation: "Leaders help teams distinguish between genuine urgency and false urgency, establish processes for evaluating and responding to unplanned work, and account for historical interruption patterns in planning. They work to reduce unnecessary interruptions while acknowledging some unplanned work is inevitable. Balance responsiveness with stability.",
    domain: "Systems Thinking",
    difficulty: "Intermediate"
  },
  {
    id: 274,
    question: "What is the leadership responsibility when teams identify organizational policies that contradict Agile values?",
    options: [
      "Enforce all existing policies regardless of contradiction with Agile values",
      "Examine policy purpose and evolve policies to better serve organizational needs and Agile values",
      "Grant Agile teams exemptions from all contradicting policies",
      "Tell teams to follow contradicting policies while also implementing Agile practices"
    ],
    correctAnswer: 1,
    explanation: "Leaders investigate why policies exist—often addressing legitimate needs. They work to evolve policies that contradict Agile values while still meeting underlying needs differently. They don't blindly enforce dysfunctional policy or grant blanket exemptions. They address the tension by evolving both Agile implementation and organizational policies based on what serves outcomes.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 275,
    question: "How should leaders approach the balance between team stability and organizational flexibility?",
    options: [
      "Never change team membership once teams are formed",
      "Frequently reorganize teams to maintain organizational flexibility",
      "Protect team stability while making thoughtful changes when benefits clearly outweigh disruption costs",
      "Let individuals freely move between teams whenever they choose"
    ],
    correctAnswer: 2,
    explanation: "Leaders understand stable teams build high performance over time but organizations also need flexibility. They protect stability by avoiding arbitrary reorganizations while making intentional changes for clear benefits: new initiatives, skill needs, or persistent team issues. Reorganization should be purposeful and considered, not frequent or casual.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 276,
    question: "What does 'transparency' mean for how leaders should communicate challenges and setbacks?",
    options: [
      "Leaders should always present a positive view to maintain stakeholder confidence",
      "Share all problems and challenges immediately without filtering or context",
      "Only communicate challenges after they've been completely resolved",
      "Communicate challenges honestly with context and plans for addressing them"
    ],
    correctAnswer: 3,
    explanation: "Leaders demonstrate transparency by communicating challenges and setbacks honestly while providing context and how they're being addressed. They don't hide problems until they're solved or present only positive news. Transparency builds trust. People need honest information to make good decisions and adapt effectively.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 277,
    question: "How should leaders support teams in establishing appropriate documentation practices?",
    options: [
      "Enable teams to create just-enough documentation that serves real needs",
      "Mandate comprehensive documentation of all decisions and work",
      "Minimize all documentation to maximize working software focus",
      "Have separate documentation specialists create all documentation"
    ],
    correctAnswer: 0,
    explanation: "Leaders help teams understand that some documentation adds value (onboarding, architecture decisions, API contracts) while other documentation creates waste. They enable 'just enough' documentation that serves real users and purposes. They don't mandate comprehensive documentation or eliminate all documentation. Value determines what's documented.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 278,
    question: "What is the leadership role in managing dependencies between products or value streams?",
    options: [
      "Eliminate all cross-product dependencies before implementing Agile practices",
      "Make dependencies visible, reduce unnecessary coupling, and enable direct coordination",
      "Create detailed cross-product project plans to manage all dependencies",
      "Ignore dependencies and expect each product team to work independently"
    ],
    correctAnswer: 1,
    explanation: "Leaders help make cross-product dependencies visible through planning events or dependency mapping. They work to reduce dependencies through architectural decisions and product boundaries. For inherent dependencies, they enable direct product-to-product coordination. Making dependencies transparent enables proactive management and prioritization.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 279,
    question: "How should leaders respond to pressure for immediate results from Agile transformation?",
    options: [
      "Promise immediate results to maintain executive support",
      "Explain that Agile transformations show no results for at least two years",
      "Set realistic expectations while identifying early wins that demonstrate value",
      "Focus purely on long-term cultural change and ignore pressure for results"
    ],
    correctAnswer: 2,
    explanation: "Leaders set realistic expectations that cultural change takes time while identifying areas where early improvements can demonstrate value: faster feedback cycles, improved quality, better stakeholder engagement. They don't promise overnight transformation or ignore pressure for results. They balance building sustainable change with showing progress and value.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 280,
    question: "What does 'Built on a foundation of respect for people' mean for leadership decisions affecting employees?",
    options: [
      "Never make decisions that anyone disagrees with to maintain respect",
      "Respect means always choosing what's most comfortable for employees",
      "Respect is separate from decision-making; focus only on business outcomes",
      "Make decisions considering people's well-being while balancing organizational needs"
    ],
    correctAnswer: 3,
    explanation: "Respect means treating people as professionals, considering impact of decisions on their well-being, involving them appropriately in decisions affecting them, and explaining rationale for difficult decisions. It doesn't mean avoiding difficult decisions or always choosing what people prefer. Respect and business needs can both be honored in how decisions are made and communicated.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  },
  {
    id: 281,
    question: "How should leaders approach the concept of 'minimum viable product' (MVP)?",
    options: [
      "MVP is the smallest product that enables validated learning about customer needs and value",
      "MVP means the lowest quality product that can ship to minimize investment",
      "MVP is always the smallest possible feature set regardless of user needs",
      "MVP should always be built by separate teams from the main product"
    ],
    correctAnswer: 0,
    explanation: "Leaders understand MVP as a learning tool—the smallest product that enables validating hypotheses about customer needs and value. Quality should be appropriate; scope should be minimal for learning. MVP isn't about cutting corners or shipping incomplete products—it's about learning efficiently before investing in features that might not deliver value.",
    domain: "Empiricism and Agility",
    difficulty: "Intermediate"
  },
  {
    id: 282,
    question: "What is the leadership role when teams have different working styles or practices?",
    options: [
      "Mandate uniform practices across all teams for consistency",
      "Enable practice diversity while facilitating knowledge sharing and coordination where needed",
      "Allow complete diversity with no organizational coordination",
      "Force all teams to adopt practices from the highest-performing team"
    ],
    correctAnswer: 1,
    explanation: "Leaders allow teams to adapt practices to their context while creating forums for sharing what works (communities of practice, guilds, demos). Some coordination enables integration and learning. Total standardization kills innovation and context appropriateness; complete independence prevents learning. Balance enabling diversity with facilitating coordination and knowledge sharing.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 283,
    question: "How should leaders support teams dealing with unclear product vision?",
    options: [
      "Tell teams to proceed with implementation despite unclear vision",
      "Wait to start any work until vision is completely clear and documented",
      "Work with Product Owners and stakeholders to clarify and communicate product vision",
      "Have teams define product vision themselves without stakeholder input"
    ],
    correctAnswer: 2,
    explanation: "Leaders ensure Product Owners have support in developing and communicating clear product vision. They facilitate stakeholder alignment on vision and strategic direction. They don't let teams proceed blindly or delay all work. Clear vision enables teams to make good decisions and optimize for outcomes. Helping create clarity is a core leadership responsibility.",
    domain: "Strategic Vision",
    difficulty: "Intermediate"
  },
  {
    id: 284,
    question: "What does 'individuals over processes' mean when individuals are creating problems?",
    options: [
      "Always side with individuals over process concerns regardless of impact",
      "Individuals cannot be the problem; it's always the process",
      "Focus entirely on fixing processes and ignore individual contributions to problems",
      "Address individual behavior and performance issues while also examining systemic factors"
    ],
    correctAnswer: 3,
    explanation: "The value statement doesn't mean individuals are never accountable. Leaders address both individual performance and behavior issues AND examine whether systems and processes contribute to problems. Sometimes individuals need coaching or consequences; sometimes systems need fixing; often both. Context and root cause analysis guide the response.",
    domain: "Agile Leadership Mindset",
    difficulty: "Advanced"
  },
  {
    id: 285,
    question: "How should leaders measure the health and effectiveness of Agile teams?",
    options: [
      "Use multiple indicators: value delivered, quality, team health, and capability growth",
      "Measure only velocity and output metrics to track team productivity",
      "Health and effectiveness are subjective and cannot be measured",
      "Compare teams against each other and rank performance"
    ],
    correctAnswer: 0,
    explanation: "Leaders use multiple perspectives to assess team health: business outcomes achieved, quality metrics (defects, technical debt), team satisfaction and engagement, learning and capability growth, stakeholder satisfaction. No single metric tells the whole story. Comparing teams against each other creates dysfunctional competition. Focus on each team improving over time.",
    domain: "Evidence-Based Management",
    difficulty: "Intermediate"
  },
  {
    id: 286,
    question: "What is the leadership responsibility when organizational culture resists Agile values?",
    options: [
      "Accept that Agile won't work in this culture and maintain status quo",
      "Model Agile values consistently while addressing cultural impediments through leadership behavior",
      "Force Agile practices despite cultural misalignment",
      "Fire all people who represent the old culture"
    ],
    correctAnswer: 1,
    explanation: "Leaders shape culture primarily through their own consistent behavior—modeling transparency, adaptation, respect, and focus on value. They address cultural impediments by changing what gets rewarded, how decisions are made, and how failure is handled. Culture change is gradual and requires persistent leadership modeling, not mandates or mass turnover.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 287,
    question: "How should leaders approach the balance between delivering current commitments and investing in future capabilities?",
    options: [
      "Always prioritize current commitments; future capability builds naturally",
      "Always invest in future capability even at the expense of current commitments",
      "Make explicit trade-offs ensuring some investment in capability while meeting commitments",
      "Separate teams into delivery-focused and capability-focused groups"
    ],
    correctAnswer: 2,
    explanation: "Leaders balance delivering current value with building capabilities (technical infrastructure, skills, practices, architecture) for future value delivery. Pure focus on current commitments creates organizational debt. Pure focus on capability without delivery creates no near-term value. Explicit trade-offs ensure both current delivery and sustainable future capacity.",
    domain: "Strategic Vision",
    difficulty: "Advanced"
  },
  {
    id: 288,
    question: "What does 'customer collaboration' mean for how leaders should engage with end users?",
    options: [
      "Customer collaboration is Product Owner responsibility; leaders focus on other concerns",
      "Leaders should make all customer engagement decisions to maintain control",
      "Only allow customer interaction through formal requirements and contracts",
      "Enable and encourage direct team-customer interaction while ensuring strategic customer relationships"
    ],
    correctAnswer: 3,
    explanation: "Leaders enable teams to interact directly with customers for faster feedback and better understanding. They also maintain strategic customer relationships and remove impediments to customer access. They don't control all customer interaction or delegate it entirely. Both team-level collaboration and strategic relationship management are valuable.",
    domain: "Stakeholder Management",
    difficulty: "Intermediate"
  },
  {
    id: 289,
    question: "How should leaders support teams in managing quality in short iterations?",
    options: [
      "Ensure teams have practices and skills that enable built-in quality within iteration timeframes",
      "Accept lower quality to maintain delivery speed in short iterations",
      "Extend iterations to ensure sufficient time for quality",
      "Add separate QA phases after iterations to ensure quality"
    ],
    correctAnswer: 0,
    explanation: "Leaders ensure teams build quality through practices like test-driven development, automated testing, continuous integration, pair programming, and refactoring. Quality is built in during the iteration, not inspected in afterward. This requires investment in skills, tools, and time. Short iterations with high quality are possible with appropriate practices.",
    domain: "Value-Driven Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 290,
    question: "What is the leadership role when Agile teams struggle with self-organization?",
    options: [
      "Take over decision-making until teams prove they can self-organize",
      "Provide coaching, clear boundaries, and support while allowing teams to develop self-organization capabilities",
      "Leave teams to figure out self-organization completely independently",
      "Replace team members who cannot self-organize effectively"
    ],
    correctAnswer: 1,
    explanation: "Self-organization is a capability that develops over time. Leaders provide coaching, clear goals and constraints, and support while giving teams space to develop self-organization skills. They don't abandon struggling teams or take over. They ensure teams have necessary skills and create safety for teams to make decisions and learn from outcomes.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 291,
    question: "How should leaders approach succession planning in Agile organizations?",
    options: [
      "Succession planning is unnecessary since Agile teams are self-organizing",
      "Identify and develop successors in secret to avoid disrupting current performance",
      "Develop organizational bench strength through knowledge sharing and growth opportunities",
      "Only focus on succession planning for executive positions"
    ],
    correctAnswer: 2,
    explanation: "Leaders build organizational resilience by developing people's capabilities, ensuring knowledge sharing, creating growth opportunities, and avoiding single points of failure. This isn't secret succession planning but organizational capability development. They rotate responsibilities, support learning, and ensure multiple people can handle critical roles. This benefits both individuals and organizational sustainability.",
    domain: "Creating High-Performing Teams",
    difficulty: "Advanced"
  },
  {
    id: 292,
    question: "What does 'responding to change over following a plan' mean for annual budget cycles?",
    options: [
      "Eliminate annual budgets entirely since they represent plans",
      "Ignore budget constraints and spend based on emerging needs",
      "Maintain traditional annual budgets unchanged despite Agile adoption",
      "Evolve budgeting to enable more frequent reallocation and adaptation within fiscal constraints"
    ],
    correctAnswer: 3,
    explanation: "Leaders work to evolve budgeting from rigid annual project budgets to more adaptive funding: product-based funding, review points for reallocation, ability to pivot investments based on learning. They work within fiscal realities while enabling more flexibility than traditional budgeting. Complete budget elimination isn't realistic; total rigidity prevents agility.",
    domain: "Organizational Design",
    difficulty: "Advanced"
  },
  {
    id: 293,
    question: "How should leaders support Product Owners in balancing short-term stakeholder demands with long-term product health?",
    options: [
      "Enable Product Owners to make visible trade-offs between short-term delivery and long-term sustainability",
      "Always prioritize short-term stakeholder demands to maintain relationships",
      "Always prioritize long-term health even if stakeholders are dissatisfied",
      "Make all prioritization decisions for Product Owners to protect them from pressure"
    ],
    correctAnswer: 0,
    explanation: "Leaders ensure Product Owners can make and explain trade-offs between short-term feature delivery and long-term product health (technical debt, architecture, scalability). They support Product Owners when stakeholders pressure for unsustainable short-term focus. They don't make product decisions for Product Owners but ensure they have authority and support to balance competing concerns.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 294,
    question: "What is the most critical leadership capability for Agile transformation success?",
    options: [
      "Deep expertise in Agile frameworks and practices",
      "Genuine commitment to Agile values demonstrated through consistent behavior",
      "Charismatic communication ability to inspire organizational change",
      "Previous experience as a Scrum Master or Agile coach"
    ],
    correctAnswer: 1,
    explanation: "Transformations succeed when leaders genuinely believe in and consistently model Agile values: transparency, adaptation, respect, focus on value, empiricism. Framework knowledge, communication skills, and coaching experience help, but nothing replaces authentic commitment shown through daily decisions and behaviors. People watch what leaders do consistently to understand what's truly valued.",
    domain: "Agile Leadership Mindset",
    difficulty: "Foundation"
  },
  {
    id: 295,
    question: "How should leaders approach the integration of Agile teams with traditional project management organizations?",
    options: [
      "Keep Agile teams completely separate from traditional project management",
      "Force all project management to adopt Agile practices immediately",
      "Create interfaces and translation between approaches while working toward organizational alignment",
      "Have Agile teams comply with all traditional project management processes"
    ],
    correctAnswer: 2,
    explanation: "Leaders acknowledge that some parts of organizations may remain traditional while Agile adoption spreads. They create workable interfaces: translating between vocabularies, adapting reporting, finding compatible governance approaches. They work toward broader organizational evolution while enabling Agile teams to be effective in mixed environments. Neither complete separation nor forced uniformity serves organizational needs.",
    domain: "Leading Change",
    difficulty: "Advanced"
  },
  {
    id: 296,
    question: "What does 'working software over comprehensive documentation' mean for regulatory compliance?",
    options: [
      "Agile teams are exempt from compliance documentation requirements",
      "Maintain all traditional compliance documentation despite working software focus",
      "Working software satisfies all compliance requirements without additional documentation",
      "Find ways to meet compliance needs with just-enough documentation integrated into delivery"
    ],
    correctAnswer: 3,
    explanation: "Leaders help teams meet compliance requirements efficiently: automate compliance evidence gathering, build compliance into definition of done, create just-enough documentation that serves compliance purposes. The value statement doesn't eliminate necessary documentation—it questions unnecessary documentation. Leaders ensure teams meet legitimate compliance needs without returning to waterfall documentation practices.",
    domain: "Value-Driven Delivery",
    difficulty: "Advanced"
  },
  {
    id: 297,
    question: "How should leaders support teams in establishing effective collaboration practices?",
    options: [
      "Provide frameworks and support while enabling teams to adapt practices to their context",
      "Mandate specific collaboration practices all teams must follow",
      "Let teams figure out collaboration practices without any guidance",
      "Hire external facilitators to manage all team collaboration"
    ],
    correctAnswer: 0,
    explanation: "Leaders provide guidance on collaboration practices (pairing, mobbing, code review, working agreements) while enabling teams to adapt to their context and needs. They ensure teams have necessary skills and tools for effective collaboration. They don't mandate rigid practices or abandon teams to figure everything out alone. Support and autonomy both matter.",
    domain: "Creating High-Performing Teams",
    difficulty: "Intermediate"
  },
  {
    id: 298,
    question: "What is the leadership responsibility when teams identify impediments that require investment to resolve?",
    options: [
      "Tell teams to work around impediments that require investment",
      "Prioritize impediment investments based on impact and work to fund high-value improvements",
      "Immediately fund all impediment resolutions teams identify",
      "Document all impediments but make no commitments to address them"
    ],
    correctAnswer: 1,
    explanation: "Leaders take seriously team-identified impediments that need investment (tools, environments, technical infrastructure). They prioritize based on impact to value delivery and team effectiveness, work to fund high-priority improvements, and explain when impediments won't be immediately addressed. Taking action on impediments shows teams that their input matters and builds trust.",
    domain: "Agile Leadership Mindset",
    difficulty: "Intermediate"
  },
  {
    id: 299,
    question: "How should leaders balance encouraging experimentation with maintaining organizational stability?",
    options: [
      "Maximize experimentation without considering organizational stability",
      "Avoid all experimentation to maintain maximum stability",
      "Enable bounded experimentation while protecting critical organizational capabilities",
      "Only allow experimentation in designated innovation timeslots"
    ],
    correctAnswer: 2,
    explanation: "Leaders enable experimentation within appropriate boundaries: clear on what's safe to experiment with, what requires more careful consideration, and what's not open to experimentation (critical security, regulatory compliance). They create safety for intelligent experiments while maintaining stability of essential operations. Balance enables both innovation and reliability.",
    domain: "Agile Culture",
    difficulty: "Advanced"
  },
  {
    id: 300,
    question: "What does 'sustainable pace' mean for leadership expectations during crisis or critical deadlines?",
    options: [
      "Never ask for extra effort regardless of business criticality",
      "Crisis mode is the normal operating mode in competitive environments",
      "Sustainable pace means teams decide their hours without leadership visibility",
      "Occasional intensity for critical situations is acceptable; chronic overwork is not sustainable"
    ],
    correctAnswer: 3,
    explanation: "Leaders distinguish between occasional critical periods requiring extra effort and chronic overwork that burns people out. They acknowledge business reality—sometimes deadlines truly matter—while preventing crisis from becoming normal. After critical periods, they ensure teams recover. Sustainable pace is a strategic concern for long-term organizational capability, not a rigid rule preventing ever working hard.",
    domain: "Agile Culture",
    difficulty: "Intermediate"
  }
];

export { paliQuestions };
export default paliQuestions;
