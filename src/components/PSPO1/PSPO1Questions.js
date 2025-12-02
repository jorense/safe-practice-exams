const pspo1Questions = [
  {
    id: 1,
    question: "What is the primary way a Product Owner can maximize the value of a product?",
    options: [
      "By ordering the Product Backlog to optimize the work of the Development Team",
      "By spending more time with stakeholders than with the Development Team",
      "By attending all Development Team meetings to provide immediate clarifications",
      "By writing detailed requirements for each Product Backlog item before Sprint Planning"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner maximizes value primarily through effective Product Backlog ordering based on value, risk, dependencies, and learning opportunities. This enables the Development Team to deliver the most valuable work first and adapt based on feedback and changing conditions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "Who is responsible for monitoring progress toward a Product Goal?",
    options: [
      "The Development Team measures their velocity and forecasts completion",
      "The Product Owner is accountable for tracking progress toward the Product Goal",
      "Stakeholders review progress at Sprint Reviews and provide guidance",
      "The Scrum Master tracks progress and reports to stakeholders"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is accountable for tracking and communicating progress toward the Product Goal. While progress is made transparent at Sprint Review, the Product Owner owns the responsibility for monitoring whether the product is moving toward its goal.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 3,
    question: "When should the Product Backlog be refined?",
    options: [
      "During the Sprint Review when stakeholders provide feedback",
      "Only during dedicated refinement sessions scheduled in advance",
      "Continuously throughout the Sprint as an ongoing activity",
      "Only at Sprint Planning when items are being selected for the Sprint"
    ],
    correctAnswer: 2,
    explanation: "Product Backlog refinement is an ongoing activity throughout the Sprint, not confined to specific events. The Product Owner and Development Team collaborate to clarify, estimate, and add detail to items as needed to prepare for future Sprints.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 4,
    question: "The Product Owner is not collaborating with the Development Team during the Sprint. What is the most likely impact?",
    options: [
      "The Development Team has more time to focus on technical excellence",
      "Sprint Planning becomes more efficient in subsequent Sprints",
      "The team becomes more self-organizing and makes better technical decisions",
      "The Sprint Goal may not be achieved or the Increment may not be valuable"
    ],
    correctAnswer: 3,
    explanation: "Product Owner collaboration during the Sprint is essential for clarifying requirements, answering questions, and ensuring the team is building the right thing. Without collaboration, the team may build something that doesn't meet stakeholder needs or achieve the Sprint Goal.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 5,
    question: "What happens when multiple Scrum Teams work on the same product?",
    options: [
      "They should all work from a single Product Backlog with one Product Owner",
      "The teams should alternate Sprints to avoid conflicts and dependencies",
      "Each team's Product Owner should coordinate through a chief Product Owner",
      "Each team should have their own Product Owner and Product Backlog"
    ],
    correctAnswer: 0,
    explanation: "Multiple teams working on the same product work from a single Product Backlog with one Product Owner. This ensures unified prioritization and a cohesive product vision. The Product Owner may delegate ordering authority but remains accountable.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 6,
    question: "A stakeholder wants a specific feature built in the next Sprint. What should the Product Owner do?",
    options: [
      "Commit to the stakeholder that the feature will be in the next Sprint",
      "Add it to the Product Backlog and consider it for Sprint Planning based on priorities",
      "Ask the Development Team if they can accommodate the request",
      "Schedule a special planning session with the stakeholder and team"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should add the request to the Product Backlog and order it based on value, dependencies, and other priorities. Stakeholder requests are important input, but the Product Owner makes final ordering decisions and cannot guarantee specific items will be in any Sprint.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 7,
    question: "How should Product Backlog items be ordered when multiple factors like business value, risk, and dependencies exist?",
    options: [
      "Always prioritize business value above all other considerations",
      "Use a scoring system that weights each factor equally for objectivity",
      "The Product Owner uses their judgment to balance multiple factors",
      "Let stakeholders vote on priorities to ensure democratic decision-making"
    ],
    correctAnswer: 2,
    explanation: "Product Backlog ordering requires the Product Owner's judgment to balance multiple factors including value, risk, dependencies, learning opportunities, and technical considerations. There is no formula—it requires understanding context and making informed trade-offs.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 8,
    question: "What should a Product Owner do when the Development Team identifies significant technical debt?",
    options: [
      "Allocate a fixed percentage of each Sprint to technical debt reduction",
      "Defer technical debt work until all feature work is complete",
      "Create a separate technical backlog managed by the Development Team",
      "Work with the team to understand the impact and consider it in Product Backlog ordering"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should understand the impact of technical debt on future development speed, quality, and risk. Technical debt work should be considered alongside other work in Product Backlog ordering, not isolated or given automatic allocation.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 9,
    question: "When is a Sprint Goal created?",
    options: [
      "During Sprint Planning through collaboration between Product Owner and Development Team",
      "After Sprint Planning once the team knows what they can deliver",
      "During the previous Sprint's Review to guide upcoming Sprint Planning",
      "Before Sprint Planning by the Product Owner based on stakeholder priorities"
    ],
    correctAnswer: 0,
    explanation: "The Sprint Goal is crafted during Sprint Planning through collaboration. The Product Owner proposes objectives, and the Development Team provides input on what's achievable, resulting in a shared commitment that provides coherence for the Sprint.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 10,
    question: "What does it mean for a Product Backlog item to be 'Ready'?",
    options: [
      "It has been approved by stakeholders and allocated to a specific Sprint",
      "It is clear enough and detailed enough for the Development Team to work on it",
      "It has acceptance criteria, estimates, and assigned owners from the team",
      "The Product Owner has created complete specifications and mockups"
    ],
    correctAnswer: 1,
    explanation: "A 'Ready' item is clear enough for the Development Team to understand and work on during a Sprint. The level of detail needed varies by team and item complexity. 'Ready' is not a formal gate but a shared understanding of sufficient clarity.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 11,
    question: "How should a Product Owner handle conflicting priorities from different stakeholders?",
    options: [
      "Alternate between stakeholder requests to keep everyone satisfied",
      "Implement a voting system where stakeholders collectively decide priorities",
      "Use the Product Owner's authority to make final decisions based on their understanding",
      "Escalate conflicts to senior management for resolution"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner has final authority over Product Backlog ordering. They should listen to all stakeholders, understand different perspectives, but ultimately use their judgment and understanding of product strategy to make prioritization decisions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 12,
    question: "What is the relationship between the Product Goal and Sprint Goals?",
    options: [
      "The Product Goal is achieved when enough Sprint Goals have been completed",
      "Sprint Goals focus on technical work while Product Goals focus on business value",
      "Sprint Goals are created independently and don't necessarily relate to Product Goals",
      "Each Sprint Goal should be a step toward achieving the Product Goal"
    ],
    correctAnswer: 3,
    explanation: "Sprint Goals should coherently move the product toward its Product Goal. While not every Sprint must directly advance the Product Goal, over time the Sprint Goals should represent progress toward the longer-term product objective.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 13,
    question: "During Sprint Review, stakeholders request significant changes to what was just demoed. What should happen?",
    options: [
      "The Product Owner considers the feedback and may adjust the Product Backlog accordingly",
      "Changes should be deferred until the next Sprint Review for proper evaluation",
      "The Product Owner should reject changes to maintain the current Sprint plan",
      "The Development Team should implement the changes immediately in the current Sprint"
    ],
    correctAnswer: 0,
    explanation: "Sprint Review is an opportunity to inspect the Increment and adapt the Product Backlog. Stakeholder feedback may lead to Product Backlog changes, reprioritization, or new items. The Product Owner decides how to incorporate this learning.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 14,
    question: "What is the purpose of the Definition of Done from a Product Owner perspective?",
    options: [
      "It defines quality standards that the Product Owner can negotiate when under pressure",
      "It creates transparency about what 'Done' means for each Increment",
      "It lists all testing and documentation the Product Owner requires",
      "It sets minimum acceptable quality so the team can exceed it when possible"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done creates shared understanding of what complete means for an Increment. This transparency helps the Product Owner understand what they're accepting, make informed release decisions, and communicate progress accurately to stakeholders.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 15,
    question: "A Product Owner wants to maximize the Development Team's output. What is the best approach?",
    options: [
      "Provide detailed specifications upfront to prevent questions during development",
      "Minimize Product Owner availability to let the team work without interruptions",
      "Focus on Product Backlog ordering to ensure the team works on the most valuable items",
      "Add more items to each Sprint to keep the team fully utilized"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner maximizes value, not output. Working on the right things (through effective ordering) is more important than working on more things. The focus should be on outcomes and value delivered, not activity or quantity.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 16,
    question: "When should the Product Owner be available to the Development Team?",
    options: [
      "During scheduled office hours to balance availability with other responsibilities",
      "Only when specifically requested by the Scrum Master",
      "Only during Sprint Planning and Sprint Review to respect focus time",
      "Throughout the Sprint to answer questions and provide clarification as needed"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should be available throughout the Sprint to provide clarifications, answer questions, and collaborate with the Development Team. This availability is essential for the team to deliver valuable Increments that meet stakeholder needs.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 17,
    question: "What should a Product Owner do when market conditions change significantly mid-Sprint?",
    options: [
      "Work with the team to consider whether the Sprint Goal is still valid",
      "Update the Product Backlog but let the current Sprint continue unchanged",
      "Cancel the Sprint immediately to re-plan based on new conditions",
      "Wait until Sprint Review to discuss the changes with stakeholders"
    ],
    correctAnswer: 0,
    explanation: "Significant market changes may affect the Sprint Goal's validity. The Product Owner should discuss with the Development Team whether the Sprint Goal is still achievable and valuable. Only if the Sprint Goal becomes obsolete should Sprint cancellation be considered.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 18,
    question: "How detailed should Product Backlog items be?",
    options: [
      "All items should have the same level of detail for consistency",
      "Items at the top should be more detailed than those further down",
      "Only items for the next Sprint need detail; others can remain high-level",
      "All items should be fully detailed before being added to the Product Backlog"
    ],
    correctAnswer: 1,
    explanation: "Higher-ordered Product Backlog items typically have more detail than lower-ordered ones. Items likely to be selected soon need more clarity, while items further out can remain less detailed until they're closer to being worked on. This is progressive elaboration.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 19,
    question: "Who is responsible for estimating Product Backlog items?",
    options: [
      "Business analysts or technical leads provide estimates before Sprint Planning",
      "The Product Owner estimates based on their understanding of value and complexity",
      "The Development Team provides estimates as they will do the work",
      "The Scrum Master facilitates estimation sessions to ensure accuracy"
    ],
    correctAnswer: 2,
    explanation: "The Development Team is responsible for estimating Product Backlog items because they will do the work and are best positioned to understand the effort involved. The Product Owner may provide input on value, but the team estimates effort.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 20,
    question: "What should a Product Owner do when stakeholders bypass them and go directly to the Development Team with requests?",
    options: [
      "Create a formal change request process to control stakeholder access",
      "Let the Development Team decide whether to accept stakeholder requests",
      "Allow it as it improves communication and reduces bottlenecks",
      "Ask the team to redirect stakeholders to the Product Owner for backlog decisions"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner is accountable for the Product Backlog and its ordering. While stakeholders can communicate with the team, backlog decisions should go through the Product Owner to ensure coherent prioritization. The team should redirect prioritization discussions appropriately.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 21,
    question: "How should a Product Owner measure success?",
    options: [
      "By the value delivered and progress toward the Product Goal",
      "By the Development Team's velocity and predictability trends",
      "By the number of features delivered per Sprint or release",
      "By stakeholder satisfaction scores collected after each Sprint Review"
    ],
    correctAnswer: 0,
    explanation: "A Product Owner's success should be measured by value delivered and progress toward the Product Goal, not by output metrics like features delivered or velocity. The focus is on outcomes and impact, not activity or quantity.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 22,
    question: "What is the Product Owner's role during the Daily Scrum?",
    options: [
      "They should participate to ensure alignment on Sprint Goal progress",
      "They may attend but should not interfere with team self-organization",
      "They should attend only if specifically invited by the Development Team",
      "They should attend to provide clarifications and remove impediments"
    ],
    correctAnswer: 1,
    explanation: "The Daily Scrum is for the Development Team to inspect progress and adapt their plan. The Product Owner may attend as an observer but should not actively participate or direct the team's planning unless invited to provide specific input.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 23,
    question: "A Development Team says they need more time for a Product Backlog item. What should the Product Owner do?",
    options: [
      "Add more people to the team to increase capacity",
      "Push the team to work faster to meet the original timeline",
      "Accept the team's estimate and consider the impact on priorities",
      "Reduce the scope to fit the original time estimate"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should respect the Development Team's estimates and self-organization. If an item takes more time than expected, the Product Owner can re-evaluate priorities, consider scope adjustments, or accept the timeline, but shouldn't pressure the team to work faster.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 24,
    question: "When should the Product Backlog be updated?",
    options: [
      "Only after Sprint Review when stakeholder feedback is incorporated",
      "During dedicated backlog refinement sessions scheduled weekly",
      "Only during Sprint Planning when items are selected for the Sprint",
      "At any time by the Product Owner as they learn and priorities change"
    ],
    correctAnswer: 3,
    explanation: "The Product Backlog is a living artifact that the Product Owner can update at any time as they learn, priorities change, or new information emerges. It's not constrained to specific events or timeboxes, though changes are often discussed during refinement.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 25,
    question: "What is the best way for a Product Owner to prepare for Sprint Planning?",
    options: [
      "Ensure top Product Backlog items are clear, ordered, and refined",
      "Pre-select specific items for the Sprint to streamline planning",
      "Meet individually with each team member to understand their capacity",
      "Create detailed specifications for all items that might be discussed"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner prepares by ensuring the top of the Product Backlog is clear, ordered by value, and sufficiently refined so the Development Team can understand and select items. Pre-selecting items or over-detailing undermines collaborative Sprint Planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 26,
    question: "How should a Product Owner handle dependencies between Product Backlog items?",
    options: [
      "Create detailed dependency maps and critical path analyses",
      "Consider dependencies when ordering the Product Backlog",
      "Assign dependent items to the same Sprint automatically",
      "Let the Development Team manage all technical dependencies"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should consider dependencies when ordering the Product Backlog, balancing value with logical sequencing. They work with the Development Team to understand technical dependencies and factor them into prioritization decisions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 27,
    question: "What should a Product Owner do when the Development Team cannot complete everything they selected for the Sprint?",
    options: [
      "Accept partial features as Done if most of the work is complete",
      "Require the team to work overtime to meet their Sprint commitment",
      "Collaborate with the team to determine what can be completed and what moves back",
      "Cancel the Sprint and re-plan with a more realistic scope"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner and Development Team collaborate to determine what can realistically be completed within the Sprint. Incomplete items return to the Product Backlog for future consideration. This is normal adaptation based on learning during the Sprint.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 28,
    question: "How should a Product Owner work with multiple stakeholder groups with competing interests?",
    options: [
      "Create a stakeholder committee that makes prioritization decisions collectively",
      "Focus primarily on the stakeholder group that funds the product",
      "Give each group equal time and resources to ensure fairness",
      "Understand each group's needs and make informed trade-offs based on product strategy"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should understand all stakeholder perspectives but make informed decisions based on product strategy, value, and goals. They balance competing interests rather than trying to satisfy everyone equally or deferring to any single group.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 29,
    question: "What is the purpose of a Product Backlog item's acceptance criteria?",
    options: [
      "To provide shared understanding of what Done means for that item",
      "To define the minimum acceptable quality for the item",
      "To specify exactly how the Development Team should implement the item",
      "To create a contract between the Product Owner and Development Team"
    ],
    correctAnswer: 0,
    explanation: "Acceptance criteria create shared understanding between the Product Owner and Development Team about what needs to be true for an item to be considered complete. They clarify intent and enable verification, but aren't a contract or implementation specification.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 30,
    question: "When should a Product Owner release an Increment?",
    options: [
      "Only at the end of each Sprint during Sprint Review",
      "Whenever the Increment provides value and meets the Definition of Done",
      "After a minimum of three Sprints to ensure sufficient features exist",
      "When all planned features for the release are complete"
    ],
    correctAnswer: 1,
    explanation: "A Product Owner can release an Increment whenever it provides value and meets the Definition of Done. Releases are not tied to Sprint boundaries or minimum feature sets—they're based on value delivery opportunities and business timing.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 31,
    question: "How should a Product Owner respond when executives demand detailed multi-year roadmaps?",
    options: [
      "Create high-level roadmaps but note they're estimates subject to change",
      "Create the roadmaps as requested to maintain executive support",
      "Explain empirical planning and offer alternative approaches like Product Goal and ordering",
      "Delegate roadmap creation to business analysts or product managers"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should educate stakeholders on empirical planning in complex environments. While long-term vision (Product Goal) is valuable, detailed multi-year plans create false certainty. The Product Owner offers transparency through backlog ordering and regular inspection.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 32,
    question: "What happens to incomplete Product Backlog items at the end of a Sprint?",
    options: [
      "They automatically move to the next Sprint to ensure continuity",
      "They are split into smaller items that can be completed quickly",
      "They are moved to a 'technical debt' backlog for future cleanup",
      "They return to the Product Backlog for the Product Owner to re-order"
    ],
    correctAnswer: 3,
    explanation: "Incomplete items return to the Product Backlog where the Product Owner re-orders them based on priorities. They don't automatically carry forward—they compete with other backlog items for prioritization in future Sprint Planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 33,
    question: "A stakeholder wants metrics on team productivity and velocity. How should the Product Owner respond?",
    options: [
      "Provide velocity trends but emphasize value delivered over output",
      "Decline to share internal team metrics with external stakeholders",
      "Share velocity data as it demonstrates team performance",
      "Explain that velocity is a planning tool, not a productivity metric"
    ],
    correctAnswer: 0,
    explanation: "Velocity is a planning tool, not a performance metric. While the Product Owner can share velocity trends with context, they should emphasize value and outcomes over output. The focus should be on what's delivered and its impact, not numerical productivity measures.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 34,
    question: "How should a Product Owner handle feature requests from the Development Team?",
    options: [
      "Defer technical requests as the team should focus on business features",
      "Add them to the Product Backlog and prioritize them like any other item",
      "Automatically approve reasonable technical improvements the team suggests",
      "Create a separate technical backlog managed by the Development Team"
    ],
    correctAnswer: 1,
    explanation: "The Development Team can suggest Product Backlog items including technical improvements, refactoring, or infrastructure work. The Product Owner should understand the value proposition and order these items alongside other work in the Product Backlog.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 35,
    question: "What is the Product Owner's role in Sprint Retrospective?",
    options: [
      "They observe without participating to respect team self-organization",
      "They should not attend as it's only for the Development Team",
      "They participate as a member of the Scrum Team to improve collaboration",
      "They attend only when invited by the team to discuss specific issues"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner participates in Sprint Retrospective as a member of the Scrum Team. The Retrospective is for the entire Scrum Team to inspect and adapt their process, relationships, and practices—not just the Development Team.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 36,
    question: "How should a Product Owner decide when to declare a Product Goal achieved?",
    options: [
      "After a predetermined time period or number of Sprints",
      "When stakeholders collectively agree the goal has been met",
      "When all Product Backlog items have been completed",
      "When the product achieves the intended outcome or objective"
    ],
    correctAnswer: 3,
    explanation: "A Product Goal is achieved when the intended outcome or objective is realized, not necessarily when all work is done. The Product Owner assesses whether the product has achieved its goal and then either establishes a new Product Goal or considers the product complete.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 37,
    question: "What should a Product Owner do when the market changes and the current Product Goal is no longer valuable?",
    options: [
      "Work with stakeholders to define a new Product Goal that reflects current needs",
      "Continue with the current goal but adjust Product Backlog priorities",
      "Cancel all Sprints until a new strategic direction is established",
      "Complete the current Product Goal before considering alternatives"
    ],
    correctAnswer: 0,
    explanation: "If a Product Goal becomes obsolete due to market changes, the Product Owner should work with stakeholders to establish a new Product Goal that reflects current needs. The Product Goal should guide work, so it must remain relevant and valuable.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 38,
    question: "How should a Product Owner balance new features with maintenance work?",
    options: [
      "Focus exclusively on new features; maintenance is a technical concern",
      "Order the backlog considering the value and impact of both new work and maintenance",
      "Alternate Sprints between new features and maintenance work",
      "Allocate a fixed percentage of each Sprint to maintenance activities"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should understand how maintenance work impacts future development speed, quality, and risk, then order the backlog accordingly. Both new features and maintenance should be evaluated based on their value and impact, not given automatic allocation.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 39,
    question: "A stakeholder suggests the Product Owner is prioritizing the wrong things. What should the Product Owner do?",
    options: [
      "Ask the Scrum Master to mediate the disagreement",
      "Defend their prioritization decisions and maintain their current approach",
      "Listen to the stakeholder's perspective and explain their prioritization rationale",
      "Change priorities to maintain stakeholder support and satisfaction"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should listen to stakeholder concerns and understand their perspective, then explain their prioritization rationale and strategy. This doesn't mean changing priorities to please stakeholders, but engaging in informed dialogue about trade-offs and strategy.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 40,
    question: "What should be the Product Owner's primary focus during Sprint execution?",
    options: [
      "Monitoring team progress and ensuring they stay on schedule",
      "Attending all team meetings to maintain alignment and coordination",
      "Planning for future Sprints and engaging with stakeholders",
      "Being available to the Development Team and clarifying Product Backlog items"
    ],
    correctAnswer: 3,
    explanation: "During Sprint execution, the Product Owner's primary focus should be availability to the Development Team for clarifications and collaboration, while also refining upcoming backlog items and engaging stakeholders. The emphasis is on enabling the team's success in the current Sprint.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 41,
    question: "How should a Product Owner handle pressure to commit to fixed scope and dates?",
    options: [
      "Explain empirical forecasting and uncertainty in complex work",
      "Provide estimates but label them as highly uncertain and unreliable",
      "Delegate commitment decisions to the Development Team",
      "Commit to what stakeholders request to maintain trust and relationships"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should educate stakeholders on empirical forecasting and the inherent uncertainty in complex work. Rather than false commitments, they provide transparency through Product Backlog ordering, regular inspection at Sprint Reviews, and probabilistic forecasting.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 42,
    question: "What is the relationship between the Product Backlog and Sprint Backlog?",
    options: [
      "Sprint Backlog items are copied from the Product Backlog at Sprint Planning",
      "Product Backlog items selected for the Sprint inform the Sprint Backlog creation",
      "Sprint Backlog is a filtered view of the Product Backlog for the current Sprint",
      "Sprint Backlog replaces the Product Backlog during Sprint execution"
    ],
    correctAnswer: 1,
    explanation: "During Sprint Planning, the Development Team selects Product Backlog items and creates a Sprint Backlog that includes those items plus a plan for delivering them. The Sprint Backlog is owned by the Development Team and includes implementation details not in the Product Backlog.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 43,
    question: "A Product Owner notices the Development Team is not improving their practices. What should they do?",
    options: [
      "Provide specific guidance on practices the team should adopt",
      "Request management intervention to mandate practice improvements",
      "Raise concerns in Sprint Retrospective for team discussion",
      "Focus on their own accountabilities and let the Scrum Master address team improvement"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner can raise concerns about team practices in Retrospective as a Scrum Team member. While the Scrum Master facilitates improvement, the entire team collaborates on identifying and implementing improvements. The Product Owner has a voice in team process.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 44,
    question: "How detailed should a Product Owner's vision for the product be?",
    options: [
      "High-level and abstract to provide maximum flexibility for the team",
      "Detailed for short-term but vague for long-term to acknowledge uncertainty",
      "Extremely detailed with specific features and timelines defined upfront",
      "Clear enough to provide direction while allowing for emergence and adaptation"
    ],
    correctAnswer: 3,
    explanation: "The product vision should provide clear direction and purpose while allowing for adaptation as the team learns. It should be compelling and directional without being overly prescriptive about solutions, enabling the team and stakeholders to collaborate on how to achieve it.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 45,
    question: "What should a Product Owner do when the Development Team requests significant time for learning new technologies?",
    options: [
      "Understand the value and consider it in Product Backlog prioritization",
      "Suggest the team learn outside of Sprint time to maximize delivery",
      "Allocate a fixed percentage of each Sprint for learning activities",
      "Approve learning time as it's necessary for team effectiveness"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should understand how learning improves future development speed, quality, or capabilities, then consider learning activities in Product Backlog prioritization. Learning should be weighed against other work based on its value and impact.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 46,
    question: "How should a Product Owner communicate progress to stakeholders?",
    options: [
      "Through detailed status reports showing completed tasks and remaining work",
      "Primarily through Sprint Reviews where stakeholders inspect the Increment",
      "Via regular presentations showing velocity trends and burndown charts",
      "Through weekly email updates summarizing Sprint activities"
    ],
    correctAnswer: 1,
    explanation: "The primary way to communicate progress is through Sprint Reviews where stakeholders can inspect the actual working Increment. This provides transparency based on real outcomes rather than reports, metrics, or activity summaries that may not reflect actual value delivered.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 47,
    question: "What should a Product Owner do when they don't have all the answers stakeholders need?",
    options: [
      "Redirect detailed questions to the Development Team for technical answers",
      "Defer questions until they can research and provide complete answers",
      "Be transparent about what they know and don't know while committing to learn more",
      "Provide educated guesses to maintain credibility and stakeholder confidence"
    ],
    correctAnswer: 2,
    explanation: "Transparency is a Scrum value. The Product Owner should be honest about what they know and don't know, while showing commitment to learning and getting answers. This builds trust more than pretending to have all answers or deferring engagement.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 48,
    question: "How should a Product Owner handle a Product Backlog item that the Development Team says is impossible to implement?",
    options: [
      "Get a second opinion from technical experts outside the team",
      "Reduce the scope until the team agrees it's achievable",
      "Remove the item from the backlog as it's not feasible",
      "Explore alternatives with the team to achieve the underlying goal"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should collaborate with the Development Team to understand why something seems impossible and explore alternative approaches to achieve the underlying goal. The conversation should focus on the problem to solve, not the specific solution initially proposed.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 49,
    question: "What is the Product Owner's role in ensuring Definition of Done is met?",
    options: [
      "They trust the Development Team's professionalism in meeting the Definition of Done",
      "They conduct acceptance testing at Sprint end to validate each item",
      "They verify Definition of Done during Sprint Review before accepting work",
      "They inspect work during the Sprint to verify Definition of Done compliance"
    ],
    correctAnswer: 0,
    explanation: "The Development Team is responsible for ensuring work meets the Definition of Done. The Product Owner trusts the team's professionalism and quality standards. During Sprint Review, the Product Owner focuses on whether the Increment meets their product expectations, not policing the Definition of Done.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 50,
    question: "How should a Product Owner respond when asked to maximize the ROI of the product?",
    options: [
      "Focus on delivering as many features as possible to maximize output",
      "Order the backlog to optimize value delivery and minimize waste",
      "Create detailed business cases for each Product Backlog item",
      "Implement A/B testing for all features to measure actual ROI"
    ],
    correctAnswer: 1,
    explanation: "Maximizing ROI comes from ordering the Product Backlog to deliver high-value work first, eliminating low-value work, and continuously learning to adapt priorities. It's about optimizing value delivered relative to effort invested, not about maximizing output or calculating precise ROI for each item.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 51,
    question: "A Product Owner has limited availability due to other responsibilities. What should happen?",
    options: [
      "A proxy Product Owner should be appointed to handle day-to-day decisions",
      "This is acceptable if they communicate priorities clearly at Sprint Planning",
      "The organization should address this as Product Owner availability is essential",
      "The Development Team should become more self-sufficient to compensate"
    ],
    correctAnswer: 2,
    explanation: "Product Owner availability is critical for Scrum Team success. If a Product Owner cannot provide necessary availability, the organization should address this through workload adjustment, support, or reconsidering the assignment. A part-time, unavailable Product Owner undermines value delivery.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 52,
    question: "What should a Product Owner do when technical architecture decisions might impact future product direction?",
    options: [
      "Make the architectural decisions based on product strategy requirements",
      "Require detailed technical documentation before any architecture changes",
      "Let the Development Team make all technical decisions independently",
      "Engage with the team to understand implications for product strategy and flexibility"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should engage with the Development Team to understand how technical decisions impact product flexibility, future options, and strategic direction. While the team decides 'how', the Product Owner should understand implications for the product's future.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 53,
    question: "How should a Product Owner handle a situation where stakeholders want different products serving different markets?",
    options: [
      "Work with stakeholders to align on a single Product Goal or separate the products",
      "Let the Development Team decide how to organize their work",
      "Alternate Sprints between different market needs",
      "Create multiple Product Backlogs, one for each market segment"
    ],
    correctAnswer: 0,
    explanation: "If stakeholders want fundamentally different products, the Product Owner should work to either align on a unified Product Goal or recognize these as separate products needing separate Product Backlogs and potentially separate Scrum Teams.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 54,
    question: "What should a Product Owner do when they realize a recently completed feature provides less value than expected?",
    options: [
      "Investigate who made the prioritization error to prevent recurrence",
      "Accept it as learning and adjust future priorities accordingly",
      "Ask the Development Team to enhance the feature in the next Sprint",
      "Remove the feature from the product to avoid supporting low-value functionality"
    ],
    correctAnswer: 1,
    explanation: "This is normal learning in complex product development. The Product Owner should accept the learning, potentially adjust the Product Backlog based on new understanding, and move forward. Empiricism expects that we learn as we go and adapt based on evidence.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 55,
    question: "How should a Product Owner prepare stakeholders for Sprint Review?",
    options: [
      "Share completed work in advance so stakeholders can prepare questions",
      "Send detailed agenda and demo script so stakeholders know what to expect",
      "Provide context about Sprint Goal and what will be inspected, emphasizing collaboration",
      "No preparation needed; Sprint Review should be spontaneous and unscripted"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should set context about the Sprint Goal and what will be inspected, emphasizing that Sprint Review is collaborative, not just a demo. This helps stakeholders prepare for meaningful engagement without over-scripting the event or sharing work prematurely.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 56,
    question: "What should a Product Owner do when market research suggests a pivot in product strategy?",
    options: [
      "Wait until the current Sprint completes before considering strategic changes",
      "Commission additional research to validate findings before any changes",
      "Immediately change the Product Backlog to reflect new strategic direction",
      "Discuss findings with stakeholders and Scrum Team to inform Product Goal evolution"
    ],
    correctAnswer: 3,
    explanation: "Significant market research should be discussed with stakeholders and the Scrum Team to inform Product Goal and backlog evolution. This ensures informed decision-making while respecting the collaborative nature of product development and the expertise of the team.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 57,
    question: "How should a Product Owner handle bugs reported in production?",
    options: [
      "Add them to the Product Backlog and prioritize based on impact and severity",
      "Create a separate bug backlog managed by the Development Team",
      "Require the Development Team to fix all bugs before working on new features",
      "Allocate a percentage of each Sprint to bug fixes automatically"
    ],
    correctAnswer: 0,
    explanation: "Bugs should be added to the Product Backlog and prioritized like any other work based on their impact, severity, and value of fixing them versus doing other work. They compete for priority with other backlog items rather than being automatically allocated or separated.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 58,
    question: "What should a Product Owner do when the Development Team delivers an Increment that meets the Definition of Done but doesn't meet the Product Owner's expectations?",
    options: [
      "Reject the Increment and require the team to redo it in the next Sprint",
      "Accept it as Done and add new items to the backlog for adjustments",
      "Negotiate with the team to make changes before the Sprint ends",
      "Update the Definition of Done to include the Product Owner's expectations"
    ],
    correctAnswer: 1,
    explanation: "If an Increment meets the Definition of Done, it's Done regardless of whether it meets all expectations. The Product Owner should accept it and add new Product Backlog items for any adjustments needed. This indicates a need for better clarification in future Sprint Planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 59,
    question: "How should a Product Owner approach experimentation and validation of assumptions?",
    options: [
      "Conduct all experiments before Sprint Planning to inform priorities",
      "Minimize experimentation to focus resources on known valuable features",
      "Include experiments in the Product Backlog when learning is valuable",
      "Delegate experimentation to a separate innovation team outside Scrum"
    ],
    correctAnswer: 2,
    explanation: "Experimentation and validation can be valuable Product Backlog items when learning reduces risk or informs important decisions. The Product Owner should order experiments alongside other work based on the value of learning versus other priorities.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 60,
    question: "What is the most important characteristic of a Product Owner?",
    options: [
      "Availability to the Development Team throughout the Sprint",
      "Deep technical knowledge to make informed prioritization decisions",
      "Strong stakeholder management skills to balance competing demands",
      "Clear decision-making authority and accountability for product value"
    ],
    correctAnswer: 3,
    explanation: "While technical knowledge, stakeholder skills, and availability are important, the most critical characteristic is clear authority and accountability for maximizing product value. Without authority to make final decisions on the Product Backlog, the Product Owner cannot effectively fulfill their role.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 61,
    question: "How should a Product Owner handle a situation where the Development Team wants to rewrite significant portions of the codebase?",
    options: [
      "Understand the business case and opportunity cost, then prioritize accordingly",
      "Reject rewrites as they don't deliver new features to users",
      "Allow incremental refactoring but discourage large-scale rewrites",
      "Support technical decisions as the team knows what's best for the code"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should understand why the rewrite is proposed, what benefits it provides, and what opportunity costs exist (other work that won't get done). Then they prioritize the rewrite against other work in the Product Backlog based on its value proposition.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 62,
    question: "What should a Product Owner do when stakeholders complain about lack of predictability in delivery?",
    options: [
      "Provide longer Sprint forecasts to improve predictability",
      "Explain the nature of complex work and how empiricism provides transparency",
      "Ask the Development Team to improve their estimation accuracy",
      "Create more detailed plans and commit to specific delivery dates"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should educate stakeholders on complexity and empiricism—predictability improves through transparency and frequent inspection, not detailed plans. Sprint Reviews provide regular checkpoints, and Product Backlog ordering ensures highest-value work is done first regardless of exact timing.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 63,
    question: "How should a Product Owner respond when a Development Team member wants to work on their favorite technology rather than the highest-priority item?",
    options: [
      "Support the team member's professional development and learning interests",
      "Remind the team that they should work on the highest-ordered Product Backlog items",
      "Let the Development Team decide how to organize their work autonomously",
      "Negotiate a compromise where some time is allocated to the preferred technology"
    ],
    correctAnswer: 2,
    explanation: "The Development Team decides how to do their work, including task assignment. The Product Owner doesn't direct who works on what. If the team is not selecting high-priority items, the Product Owner should raise this concern with the whole team, not individual members.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 64,
    question: "What should a Product Owner do when regulatory changes require immediate product modifications?",
    options: [
      "Request management to allocate separate resources for regulatory compliance",
      "Interrupt the current Sprint to implement regulatory changes immediately",
      "Add regulatory work to the Product Backlog and prioritize it appropriately",
      "Work with the team to determine if the Sprint Goal is still valid"
    ],
    correctAnswer: 3,
    explanation: "Urgent regulatory changes may make the current Sprint Goal obsolete. The Product Owner should discuss with the Development Team whether the Sprint Goal is still achievable and valuable. If the Sprint Goal becomes obsolete, the Sprint might be cancelled, but this should be determined collaboratively.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 65,
    question: "How should a Product Owner handle pressure to deliver features that conflict with the product vision?",
    options: [
      "Engage in dialogue about how the request fits or challenges the current vision",
      "Escalate the conflict to senior leadership for resolution",
      "Deliver what stakeholders request to maintain support and relationships",
      "Stand firm on the product vision and decline conflicting features"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should engage stakeholders in dialogue about the product vision and how requests align or conflict with it. This might lead to vision evolution, understanding why the request doesn't fit, or finding ways to achieve stakeholder goals that align with the vision.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 66,
    question: "What should a Product Owner do when the Development Team consistently delivers less than forecast?",
    options: [
      "Coach the team on improving their estimation accuracy",
      "Accept this as empirical learning and adjust forecasts accordingly",
      "Investigate whether impediments are preventing the team from delivering",
      "Reduce the scope of Product Backlog items to fit the team's capacity"
    ],
    correctAnswer: 1,
    explanation: "Forecasts are based on past performance, and the team is learning what they can deliver. The Product Owner should accept empirical evidence and adjust expectations accordingly. If there are impediments, the Scrum Master helps address them, but forecast variance is normal in complex work.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 67,
    question: "How should a Product Owner balance short-term gains with long-term product health?",
    options: [
      "Always prioritize long-term health over short-term gains",
      "Focus on short-term value delivery to demonstrate progress",
      "Use judgment to balance both based on product context and strategy",
      "Alternate between short-term and long-term focus each Sprint"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner must use judgment to balance short-term value with long-term health based on product context, competitive environment, technical debt, and strategic goals. There's no formula—it requires understanding trade-offs and making informed decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 68,
    question: "What should a Product Owner do when stakeholders want visibility into the Development Team's Sprint Backlog?",
    options: [
      "Create a simplified version of the Sprint Backlog for stakeholder consumption",
      "Allow stakeholders to observe Daily Scrums for transparency",
      "Provide full transparency as openness is a Scrum value",
      "Explain that Sprint Backlog is owned by the Development Team for their planning"
    ],
    correctAnswer: 3,
    explanation: "The Sprint Backlog is owned by the Development Team for their planning purposes. While transparency is important, the Sprint Backlog is a planning artifact for the team. Stakeholders can see progress through the Product Increment at Sprint Review, not through monitoring the team's plan.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 69,
    question: "How should a Product Owner respond when competitors release features that aren't in the product roadmap?",
    options: [
      "Assess whether competitive features align with product strategy before prioritizing",
      "Ignore competitors and stay focused on the current product vision",
      "Conduct market research before making any Product Backlog changes",
      "Immediately add competitive features to the Product Backlog as high priority"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should assess whether competitive features align with product strategy and provide value to users. Competitive moves are important information, but shouldn't trigger automatic prioritization. The Product Owner makes informed decisions based on strategy, not just competitive reactions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 70,
    question: "What should a Product Owner do when the Development Team says a Product Backlog item is too large?",
    options: [
      "Assign it to multiple Sprints to accommodate the large size",
      "Work with the team to split it into smaller, valuable items",
      "Keep it as-is and let the team break it down during Sprint Planning",
      "Remove it from the backlog until it can be properly sized"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should collaborate with the Development Team to split large items into smaller items that each provide value. This enables better prioritization, faster feedback, and more flexible planning. Splitting should happen during backlog refinement, not wait until Sprint Planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 71,
    question: "How should a Product Owner handle a situation where users request one thing but data suggests they need something different?",
    options: [
      "Trust user requests as they know what they need better than data",
      "Follow the data and deprioritize user requests that conflict with insights",
      "Investigate the discrepancy and use judgment to determine the right course",
      "Implement both approaches and use A/B testing to determine which is better"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should investigate why user requests and data diverge, using both as inputs to informed decision-making. Neither should automatically override the other—understanding the why behind both perspectives enables better prioritization decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 72,
    question: "What should a Product Owner do when the Development Team wants to adopt a new development practice that will temporarily slow delivery?",
    options: [
      "Suggest waiting until after high-priority work is completed",
      "Allow the change but monitor velocity closely to assess impact",
      "Approve the change as the team decides how they work",
      "Understand the long-term benefits and factor short-term slowdown into expectations"
    ],
    correctAnswer: 3,
    explanation: "While the Development Team decides how they work, the Product Owner should understand implications for delivery timing and product plans. If the team believes a practice improves long-term effectiveness, the Product Owner should factor temporary slowdown into stakeholder expectations.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 73,
    question: "How should a Product Owner respond when asked to guarantee that specific features will be in the next release?",
    options: [
      "Explain that ordering provides high probability but not guarantees in complex work",
      "Have the Development Team commit to the features on behalf of the Product Owner",
      "Provide guarantees only for small, well-understood features",
      "Commit to features to maintain stakeholder trust and relationships"
    ],
    correctAnswer: 0,
    explanation: "In complex work, the Product Owner cannot guarantee specific features by specific dates. They can order the Product Backlog to maximize probability that important work is done soon, and provide empirical forecasts, but should not make guarantees that create false certainty.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 74,
    question: "What should a Product Owner do when team velocity varies significantly from Sprint to Sprint?",
    options: [
      "Investigate what's causing the variance and address root causes",
      "Accept variance as normal in complex work and use ranges for forecasting",
      "Ask the team to stabilize their velocity for more predictable planning",
      "Use only the lowest velocity for conservative forecasts"
    ],
    correctAnswer: 1,
    explanation: "Velocity variance is normal in complex work due to learning, item complexity differences, and adaptation. The Product Owner should accept this reality and use velocity ranges for probabilistic forecasting rather than expecting stability or using single-point estimates.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 75,
    question: "How should a Product Owner prepare for their role on a new Scrum Team?",
    options: [
      "Wait for the first Sprint Planning to collaborate with the team on direction",
      "Create a detailed product roadmap and backlog before the first Sprint",
      "Establish a clear Product Goal and initial Product Backlog ordering",
      "Focus on stakeholder relationships and let the team suggest backlog items"
    ],
    correctAnswer: 2,
    explanation: "A new Product Owner should establish a clear Product Goal that provides direction and create initial Product Backlog ordering based on current understanding. This gives the team something to work with while acknowledging it will evolve through collaboration, inspection, and adaptation.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 76,
    question: "What should a Product Owner do when development on a product is complete and there are no more features to add?",
    options: [
      "Transition the product to maintenance mode with reduced team capacity",
      "Continue running Sprints to maintain the product and fix bugs",
      "Disband the Scrum Team as the product is finished",
      "Move the team to work on a different product or establish a new Product Goal"
    ],
    correctAnswer: 3,
    explanation: "When a Product Goal is achieved and there's no further development needed, the Product Owner should either establish a new Product Goal for the same product or move the team to work on a different product. The team might be disbanded if there's truly no more valuable work to do.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 77,
    question: "How should a Product Owner handle a situation where the Development Team delivers exactly what was asked for, but it doesn't solve the user problem?",
    options: [
      "Accept responsibility for insufficient clarity and add new items to address the gap",
      "Ask the team to fix the solution without counting it toward Sprint velocity",
      "Escalate to management about the team's lack of business understanding",
      "Hold the team accountable for not understanding the requirements properly"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner is accountable for ensuring Product Backlog items are clearly understood. If the delivered work doesn't solve the problem, the Product Owner should accept responsibility for unclear requirements and work with the team to add new backlog items that address the actual need.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 78,
    question: "What is the Product Owner's role in resolving technical disagreements within the Development Team?",
    options: [
      "Make the final technical decision based on product strategy requirements",
      "Let the Development Team resolve their own technical disagreements",
      "Escalate to the Scrum Master who facilitates team conflict resolution",
      "Bring in external technical experts to make the decision"
    ],
    correctAnswer: 1,
    explanation: "The Development Team is self-organizing and decides how to do their work, including resolving technical disagreements. The Product Owner should not intervene in technical decisions unless the team specifically seeks input about business impact or trade-offs.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 79,
    question: "How should a Product Owner respond when users complain that requested features take too long to deliver?",
    options: [
      "Commit to specific delivery dates to manage user expectations",
      "Pressure the Development Team to work faster and increase their velocity",
      "Explore whether the backlog can be ordered differently to deliver value sooner",
      "Add more developers to the team to increase delivery capacity"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should explore whether value can be delivered sooner through different ordering, breaking items into smaller pieces, or finding ways to deliver partial functionality. Pressuring the team or making commitments doesn't address the underlying issue and may reduce quality.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 80,
    question: "What should a Product Owner do when a stakeholder wants a specific technical implementation approach?",
    options: [
      "Evaluate the technical approach and approve it if it seems reasonable",
      "Defer the decision to the Scrum Master who manages technical processes",
      "Direct the Development Team to implement using the stakeholder's approach",
      "Share the stakeholder's input with the team but let them decide the implementation"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should share stakeholder input with the Development Team, but the team decides how to implement solutions. The Product Owner focuses on what and why; the Development Team decides how. Stakeholder suggestions are input, not directives.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 81,
    question: "How should a Product Owner handle competing priorities from two equally important stakeholders?",
    options: [
      "Make a decision based on product strategy and explain the rationale to both",
      "Let the Development Team vote on which priority to pursue first",
      "Alternate Sprints to ensure each stakeholder gets equal attention",
      "Split development capacity 50/50 between both stakeholders' priorities"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner has final authority over Product Backlog ordering. They should make decisions based on product strategy, value, and goals, then explain the rationale to stakeholders. The goal is optimizing overall product value, not satisfying stakeholders equally.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 82,
    question: "What should a Product Owner do when the Development Team identifies a better way to achieve a Product Backlog item's objective?",
    options: [
      "Reject the alternative to maintain consistency with the original plan",
      "Collaborate with the team to understand and potentially adopt their approach",
      "Allow the change but document it as a deviation for stakeholders",
      "Defer to the team's technical judgment without further discussion"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should collaborate with the Development Team to understand their proposed alternative. If it better achieves the objective, the Product Owner should embrace it. The focus is on achieving outcomes, not enforcing specific solutions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 83,
    question: "How should a Product Owner communicate when they realize a previous prioritization decision was wrong?",
    options: [
      "Blame changing market conditions rather than admit an error",
      "Quietly adjust priorities without acknowledging the mistake",
      "Be transparent about the learning and adjust the Product Backlog accordingly",
      "Continue with the current plan to maintain credibility with stakeholders"
    ],
    correctAnswer: 2,
    explanation: "Transparency is a Scrum value. The Product Owner should openly acknowledge when priorities need to change based on learning, market changes, or previous misjudgment. This builds trust and demonstrates empiricism in action.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 84,
    question: "What should a Product Owner do when the Development Team consistently overestimates effort?",
    options: [
      "Replace high-estimating team members with more optimistic ones",
      "Create estimates independently to provide more accurate forecasts",
      "Challenge the team's estimates and push for lower numbers",
      "Accept the estimates and adjust forecasts based on actual delivery patterns"
    ],
    correctAnswer: 3,
    explanation: "The Development Team owns estimation. If they consistently overestimate, actual velocity data will reflect this, and forecasts will naturally adjust. The Product Owner should trust the team's professionalism while using empirical evidence for planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 85,
    question: "How should a Product Owner handle a situation where marketing wants to announce features before they're complete?",
    options: [
      "Explain the risks of announcing incomplete work and suggest alternatives",
      "Allow announcements but disclaim responsibility if delivery is delayed",
      "Commit the Development Team to specific dates to support marketing",
      "Provide marketing with estimated delivery dates for their announcements"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should help marketing understand the risks of announcing incomplete work in complex development. Rather than providing false certainty, explore alternatives like announcing capabilities when they're Done or using probabilistic language.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 86,
    question: "What should a Product Owner do when they lack domain expertise in a specialized area of the product?",
    options: [
      "Delegate Product Owner responsibilities for that area to a domain expert",
      "Collaborate with domain experts while retaining Product Owner accountability",
      "Focus only on areas where they have expertise and avoid the specialized area",
      "Request formal training before making any decisions about that area"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should collaborate with domain experts to understand specialized areas while retaining accountability for Product Backlog decisions. They can leverage expert knowledge without delegating their Product Owner role or avoiding necessary decisions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 87,
    question: "How should a Product Owner respond when stakeholders want quarterly business reviews instead of Sprint Reviews?",
    options: [
      "Delegate Sprint Reviews to the Scrum Master to free up time for business reviews",
      "Replace Sprint Reviews with quarterly business reviews to satisfy stakeholders",
      "Maintain Sprint Reviews and offer additional quarterly summaries if valuable",
      "Compromise by holding Sprint Reviews only once per quarter"
    ],
    correctAnswer: 2,
    explanation: "Sprint Review is a required Scrum event that provides regular inspection and adaptation opportunities. The Product Owner should maintain Sprint Reviews while potentially providing additional quarterly summaries if they add value. Frequent inspection is fundamental to empiricism.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 88,
    question: "What should a Product Owner do when the Development Team delivers an Increment but wants to add 'just one more thing' before showing stakeholders?",
    options: [
      "Assess whether the addition is valuable enough to delay the Sprint Review",
      "Let the team decide since they're self-organizing",
      "Allow the additional work since it's minor and improves the demonstration",
      "Remind the team that work meeting Definition of Done should be demonstrated as-is"
    ],
    correctAnswer: 3,
    explanation: "If work meets the Definition of Done, it should be demonstrated as-is at Sprint Review. Additional work should go through normal Product Backlog prioritization. The Sprint Review is for inspecting what's Done, not for last-minute additions.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 89,
    question: "How should a Product Owner handle feedback that their communication style is too directive?",
    options: [
      "Reflect on their approach and work toward more collaborative communication",
      "Explain that stakeholders need clear direction, not collaboration",
      "Delegate communication to the Scrum Master to avoid conflict",
      "Maintain their style since Product Owners have decision authority"
    ],
    correctAnswer: 0,
    explanation: "While Product Owners have decision authority, effective Product Ownership involves collaboration, not command. The Product Owner should reflect on feedback and adjust their communication style to be more collaborative while still providing clear direction.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 90,
    question: "What should a Product Owner do when users request features that duplicate existing functionality?",
    options: [
      "Add the features since users are requesting them",
      "Investigate why existing functionality isn't meeting their needs",
      "Educate users about existing features and reject the request",
      "Let the Development Team decide whether to implement duplicates"
    ],
    correctAnswer: 1,
    explanation: "When users request features that seem redundant, the Product Owner should investigate whether existing functionality is discoverable, usable, or actually meeting needs. The request likely indicates a problem to solve rather than a feature to build.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 91,
    question: "How should a Product Owner approach pricing decisions for the product?",
    options: [
      "Use competitor pricing as the primary input for pricing decisions",
      "Leave pricing decisions entirely to sales and marketing teams",
      "Collaborate with business stakeholders while considering product value and market",
      "Set prices based on development costs to ensure profitability"
    ],
    correctAnswer: 2,
    explanation: "While the Product Owner may not have sole authority over pricing, they should collaborate with stakeholders on pricing decisions, bringing their understanding of product value, market positioning, and customer needs to the discussion.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 92,
    question: "What should a Product Owner do when the Development Team wants to pause feature development for a quality improvement Sprint?",
    options: [
      "Allow one quality Sprint but require features in all subsequent Sprints",
      "Agree to the quality Sprint but reduce the team's velocity rating",
      "Reject the idea as all Sprints must deliver new user-facing features",
      "Understand the business case and consider quality work in backlog prioritization"
    ],
    correctAnswer: 3,
    explanation: "There's no such thing as a 'quality Sprint'—quality work should be ongoing. However, if the team proposes significant quality improvements, the Product Owner should understand the business case and prioritize that work in the Product Backlog like any other valuable work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 93,
    question: "How should a Product Owner handle a situation where competitors release a superior product?",
    options: [
      "Assess whether the Product Goal still serves users or needs evolution",
      "Stay the course to demonstrate commitment to the vision",
      "Commission market research before considering any changes",
      "Immediately pivot to copy competitor features"
    ],
    correctAnswer: 0,
    explanation: "Competitive changes should trigger reflection on whether the current Product Goal still serves users and the market. This doesn't mean copying competitors, but it does mean honestly assessing whether the product strategy needs to evolve based on changing competitive dynamics.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 94,
    question: "What should a Product Owner do when stakeholders want detailed specifications for Product Backlog items?",
    options: [
      "Create comprehensive specifications to meet stakeholder expectations",
      "Explain progressive elaboration and just-in-time refinement in Scrum",
      "Have business analysts create specifications separate from the Product Backlog",
      "Provide specifications only for high-priority items near the top of the backlog"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should educate stakeholders on progressive elaboration—items are detailed just-in-time as they approach implementation. Detailed specifications for all items creates waste and reduces ability to adapt based on learning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 95,
    question: "How should a Product Owner respond when the Development Team wants to experiment with new technologies?",
    options: [
      "Allow experimentation during refinement time but not during Sprints",
      "Support experimentation as it's part of professional development",
      "Understand the value proposition and consider experiments in backlog ordering",
      "Discourage experimentation that doesn't deliver user-facing features"
    ],
    correctAnswer: 2,
    explanation: "Technology experiments can be valuable if they improve future development speed, quality, or capabilities. The Product Owner should understand the value proposition and prioritize experiments in the Product Backlog based on their potential return, like any other work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 96,
    question: "What should a Product Owner do when team morale is low due to constant reprioritization?",
    options: [
      "Let the Scrum Master handle team morale issues",
      "Commit to stability for a fixed period to rebuild trust",
      "Stop reprioritizing to provide stability and improve morale",
      "Explain why adaptation is necessary while being empathetic to team concerns"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should acknowledge team concerns while explaining why adaptation and reprioritization are necessary in complex work. Collaboration and transparency about decision-making can help, but the Product Owner shouldn't sacrifice needed adaptation to preserve morale.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 97,
    question: "How should a Product Owner handle a Product Backlog that has grown to hundreds of items?",
    options: [
      "Review and remove items that are no longer valuable or relevant",
      "Create sub-backlogs organized by theme or feature area",
      "Archive old items into a separate list for potential future consideration",
      "Continue maintaining all items as they all represent potential value"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should regularly review and remove Product Backlog items that are no longer valuable, relevant, or aligned with the Product Goal. Maintaining a large backlog of outdated items creates waste and obscures what's truly important.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 98,
    question: "What should a Product Owner do when stakeholders disagree with data-driven prioritization decisions?",
    options: [
      "Override stakeholder opinions with data since data is objective",
      "Use data as input while explaining how it informed the decision",
      "Let stakeholders vote to democratically resolve the disagreement",
      "Gather more data until stakeholders agree with the conclusion"
    ],
    correctAnswer: 1,
    explanation: "Data is important input but doesn't make decisions—people do. The Product Owner should use data to inform decisions while explaining their reasoning to stakeholders. Data should influence but not dictate prioritization in complex environments where judgment matters.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 99,
    question: "How should a Product Owner respond when the Development Team says they need more Product Owner time than is available?",
    options: [
      "Implement asynchronous communication to maximize efficiency of limited time",
      "Reduce the team's Sprint commitment to match available Product Owner time",
      "Work with the organization to address Product Owner availability as a constraint",
      "Train team members to make Product Owner decisions in their absence"
    ],
    correctAnswer: 2,
    explanation: "If a Product Owner cannot provide necessary availability, this is an organizational impediment that should be addressed. Solutions might include adjusting other responsibilities, providing support, or reconsidering team size. Adequate Product Owner availability is essential for success.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 100,
    question: "What should a Product Owner do when users love a feature but it's expensive to maintain?",
    options: [
      "Let the Development Team decide whether to continue supporting it",
      "Remove the feature since maintenance costs outweigh benefits",
      "Keep the feature since user satisfaction is the primary metric",
      "Evaluate ongoing value versus maintenance costs and make an informed decision"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should evaluate the ongoing value users derive from the feature against its maintenance costs, considering both quantitative and qualitative factors. This might lead to keeping, improving, simplifying, or removing the feature based on net value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 101,
    question: "How should a Product Owner handle stakeholders who want influence over the Product Backlog without accountability?",
    options: [
      "Clarify that accountability for backlog decisions rests with the Product Owner",
      "Create a stakeholder committee that shares Product Owner authority",
      "Let them provide input but ignore it if they won't accept accountability",
      "Give them influence since stakeholder input is valuable"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should welcome stakeholder input while clarifying that accountability for Product Backlog ordering rests with the Product Owner. Stakeholders can influence decisions through input and collaboration, but final accountability cannot be shared or distributed.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 102,
    question: "What should a Product Owner do when analysis shows a feature is used by only 2% of users?",
    options: [
      "Remove the feature immediately to reduce maintenance burden",
      "Investigate whether that 2% represents critical use cases or high-value users",
      "Keep the feature since removing functionality alienates existing users",
      "Improve the feature to increase adoption before considering removal"
    ],
    correctAnswer: 1,
    explanation: "Low usage statistics should trigger investigation, not automatic decisions. That 2% might represent critical workflows, high-value customers, or regulatory requirements. The Product Owner should understand context before deciding whether to improve, simplify, or remove the feature.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 103,
    question: "How should a Product Owner approach integration with third-party systems?",
    options: [
      "Defer integration decisions to enterprise architects",
      "Treat integrations as technical work for the Development Team to decide",
      "Consider integrations in backlog ordering based on value and strategic importance",
      "Always prioritize integrations since they unlock future capabilities"
    ],
    correctAnswer: 2,
    explanation: "Integrations represent Product Backlog items that should be ordered based on their value, strategic importance, and impact on the Product Goal. The Product Owner should work with the Development Team to understand implications while making prioritization decisions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 104,
    question: "What should a Product Owner do when the Development Team wants to refactor code that 'works fine'?",
    options: [
      "Allow refactoring but insist it happens outside of Sprint time",
      "Approve minor refactoring but discourage major restructuring",
      "Reject refactoring since the code works and users don't see the benefit",
      "Understand how the refactoring impacts future development speed and flexibility"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should understand the business case for refactoring—how it affects future development speed, flexibility, defect rates, or risk. Refactoring that improves future capabilities should be considered in backlog ordering based on its value proposition.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 105,
    question: "How should a Product Owner handle pressure to deliver features faster at the expense of quality?",
    options: [
      "Explain how quality degradation impacts long-term value delivery",
      "Let the Development Team decide what quality standards to maintain",
      "Negotiate a balanced approach with some quality trade-offs",
      "Accept the trade-off since speed to market creates competitive advantage"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should help stakeholders understand how quality degradation creates technical debt that slows future development, increases defects, and ultimately reduces value delivery. Short-term speed gains often lead to long-term slowdowns and reduced product value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 106,
    question: "What should a Product Owner do when Sprint Reviews become status reports rather than collaborative working sessions?",
    options: [
      "Accept this format since it's efficient for busy stakeholders",
      "Facilitate more interactive reviews with hands-on exploration and dialogue",
      "Delegate Sprint Review facilitation to the Scrum Master",
      "Reduce Sprint Review frequency to ensure adequate stakeholder engagement"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review should be a collaborative working session, not a status report. The Product Owner should facilitate interaction through techniques like hands-on demonstrations, structured feedback sessions, and collaborative backlog discussions that engage stakeholders actively.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 107,
    question: "How should a Product Owner respond when the Development Team delivers more than forecast in a Sprint?",
    options: [
      "Increase Sprint commitments to match the team's demonstrated capacity",
      "Celebrate and encourage the team to maintain the higher pace",
      "Accept it as variance and adjust future forecasts based on trends",
      "Investigate whether quality was compromised to deliver more"
    ],
    correctAnswer: 2,
    explanation: "Occasional over-delivery is normal variance. The Product Owner should accept it without pressuring the team to sustain an unsustainable pace. Forecasts should be based on long-term trends, not individual Sprint variance. The focus should be on sustainable, quality delivery.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 108,
    question: "What should a Product Owner do when new regulations require immediate product changes?",
    options: [
      "Direct the team to work on regulatory changes outside of Sprint commitments",
      "Request a separate team to handle regulatory compliance",
      "Cancel the Sprint to immediately address regulatory requirements",
      "Add regulatory items to the Product Backlog and assess Sprint Goal impact"
    ],
    correctAnswer: 3,
    explanation: "Regulatory requirements should be added to the Product Backlog and prioritized. If they make the Sprint Goal obsolete, Sprint cancellation should be considered. However, most regulatory work can be incorporated through normal backlog management without Sprint cancellation.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 109,
    question: "How should a Product Owner handle conflicting technical opinions from team members during Sprint Planning?",
    options: [
      "Allow the team time to resolve technical discussions themselves",
      "Suggest the team defer implementation decisions until during the Sprint",
      "Ask the Scrum Master to facilitate resolution of technical disagreements",
      "Make the technical decision to keep Sprint Planning moving forward"
    ],
    correctAnswer: 0,
    explanation: "The Development Team is self-organizing regarding technical decisions. The Product Owner should allow them time to discuss and resolve technical disagreements during Sprint Planning, intervening only if discussions prevent Sprint Planning from achieving its purpose.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 110,
    question: "What should a Product Owner do when stakeholders want to skip Sprint Planning to save time?",
    options: [
      "Support streamlining meetings when relationships are mature",
      "Explain why Sprint Planning is essential for creating shared Sprint Goals",
      "Allow skipping Sprint Planning if the backlog is well-refined",
      "Propose shortening Sprint Planning but not eliminating it entirely"
    ],
    correctAnswer: 1,
    explanation: "Sprint Planning is essential for creating the Sprint Goal, selecting work, and creating a Sprint Backlog. It's not overhead—it's where the Development Team and Product Owner collaborate to define the Sprint. The Product Owner should explain its value rather than allowing it to be skipped.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 111,
    question: "How should a Product Owner approach measuring product success?",
    options: [
      "Let stakeholders define success metrics for the product",
      "Focus primarily on velocity and output metrics",
      "Define meaningful outcome and value metrics aligned with the Product Goal",
      "Use industry-standard metrics like user acquisition and revenue"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should define meaningful outcome and value metrics aligned with the Product Goal, not just output metrics. What constitutes success depends on the product's purpose—generic or stakeholder-defined metrics may not reflect actual value delivery.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 112,
    question: "What should a Product Owner do when the Development Team wants formal approval for every design decision?",
    options: [
      "Create design guidelines that eliminate the need for approvals",
      "Delegate design approvals to a senior developer or architect",
      "Provide formal approvals to ensure accountability for decisions",
      "Coach the team toward self-organization and design autonomy"
    ],
    correctAnswer: 3,
    explanation: "Requiring approval for every design decision undermines Development Team self-organization. The Product Owner should coach the team toward greater autonomy while being available for consultation on business impact or trade-offs, not approval of implementation details.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 113,
    question: "How should a Product Owner handle a situation where delivered features don't get adopted by users?",
    options: [
      "Investigate why adoption is low and what that reveals about user needs",
      "Improve marketing and communication about the features",
      "Remove underutilized features to simplify the product",
      "Blame users for not understanding the features' value"
    ],
    correctAnswer: 0,
    explanation: "Low feature adoption should trigger investigation into why. It might indicate poor usability, lack of actual need, inadequate communication, or timing issues. Understanding the why informs whether to improve, better communicate, or acknowledge the feature missed the mark.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 114,
    question: "What should a Product Owner do when executives want monthly detailed progress reports?",
    options: [
      "Create monthly reports in addition to Sprint Reviews",
      "Invite executives to Sprint Reviews for direct transparency",
      "Have the Scrum Master create progress reports for executives",
      "Provide reports but simplify Sprint Reviews to reduce redundancy"
    ],
    correctAnswer: 1,
    explanation: "Sprint Reviews provide transparency through inspection of working Increments. The Product Owner should invite executives to Sprint Reviews rather than creating separate reports. If executives cannot attend, concise summaries might supplement but not replace the transparency of Sprint Review.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 115,
    question: "How should a Product Owner respond when the Development Team wants to implement automated deployment pipelines?",
    options: [
      "Support it only if it doesn't impact feature delivery timelines",
      "Approve it as technical infrastructure that doesn't need prioritization",
      "Understand the value and prioritize it in the Product Backlog accordingly",
      "Defer to the team's technical judgment without involvement"
    ],
    correctAnswer: 2,
    explanation: "Automated deployment pipelines can provide significant value through faster feedback, reduced risk, and increased deployment frequency. The Product Owner should understand the value proposition and prioritize this work in the Product Backlog based on its expected return.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 116,
    question: "What should a Product Owner do when the product vision conflicts with emerging user needs?",
    options: [
      "Separate the product into different versions for different user needs",
      "Survey more users to determine which direction has majority support",
      "Stay true to the vision despite user feedback",
      "Evolve the vision based on learning about actual user needs"
    ],
    correctAnswer: 3,
    explanation: "Product vision should guide decisions but isn't immutable. When learning reveals that user needs differ from initial vision assumptions, the Product Owner should evolve the vision accordingly. Empiricism means adapting based on evidence, including about the vision itself.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 117,
    question: "How should a Product Owner handle a Development Team that wants to implement every item perfectly?",
    options: [
      "Help the team understand trade-offs between perfection and value delivery",
      "Set time limits on work to force completion within constraints",
      "Accept perfection-seeking as part of professional development culture",
      "Support perfectionism as it ensures high-quality outcomes"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should help the Development Team understand that value comes from delivering useful functionality, not perfection. They should collaborate on defining 'good enough' through the Definition of Done and acceptance criteria, balancing quality with timely value delivery.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 118,
    question: "What should a Product Owner do when stakeholders want certainty about long-term roadmaps?",
    options: [
      "Create detailed multi-year roadmaps to provide the certainty requested",
      "Explain empirical planning and offer transparency through Product Goal and ordering",
      "Provide high-level roadmaps with heavy disclaimers about uncertainty",
      "Delegate roadmap creation to product marketing or strategy teams"
    ],
    correctAnswer: 1,
    explanation: "In complex product development, long-term certainty is false. The Product Owner should educate stakeholders on empirical planning, offering transparency through the Product Goal, Product Backlog ordering, and regular inspection at Sprint Reviews rather than false certainty through detailed roadmaps.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 119,
    question: "How should a Product Owner respond when the Development Team wants to use new frameworks or technologies?",
    options: [
      "Require the team to prove the technology's value before adopting it",
      "Approve or reject based on personal technical preferences",
      "Understand how the change impacts delivery timelines and future development",
      "Let the team decide all technical choices without Product Owner input"
    ],
    correctAnswer: 2,
    explanation: "While the Development Team decides how to build, the Product Owner should understand implications for delivery timelines, learning curves, and future development. This informs discussions about whether adoption should happen now or be deferred based on competing priorities.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 120,
    question: "What should a Product Owner do when user research contradicts their intuition about priorities?",
    options: [
      "Always defer to research since it's based on actual user data",
      "Commission additional research to resolve the contradiction",
      "Trust their intuition as it's based on deep product understanding",
      "Give weight to research while also considering their expertise and judgment"
    ],
    correctAnswer: 3,
    explanation: "Both research and intuition are valuable inputs. The Product Owner should consider research seriously while also applying their judgment, understanding of strategy, and domain expertise. The goal is informed decision-making that considers multiple perspectives, not automatic deference to any single input.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 121,
    question: "How should a Product Owner handle Development Team concerns about unsustainable pace?",
    options: [
      "Work with the team and organization to address pace and workload issues",
      "Suggest the team improve their efficiency to handle the workload",
      "Defer pace concerns to the Scrum Master as a team health issue",
      "Acknowledge concerns but maintain current priorities due to business pressure"
    ],
    correctAnswer: 0,
    explanation: "Unsustainable pace threatens long-term value delivery. The Product Owner should take team concerns seriously and work with the team and organization to address root causes—whether unrealistic expectations, too much work in progress, or insufficient capacity.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 122,
    question: "What should a Product Owner do when sales promises features that aren't in the Product Backlog?",
    options: [
      "Immediately add promised features as top priority to honor the commitment",
      "Discuss with sales to understand the situation and evaluate priorities",
      "Reject the promised features to maintain Product Owner authority",
      "Require all sales commitments to be pre-approved by the Product Owner"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should discuss with sales to understand the customer need and business context, then make an informed prioritization decision. This might mean adding the feature as high priority, or it might mean helping sales manage customer expectations differently.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 123,
    question: "How should a Product Owner approach splitting a large Product Backlog item?",
    options: [
      "Keep it whole until Sprint Planning when the team can break it down",
      "Split it into technical components that can be developed independently",
      "Split it into thin vertical slices that each deliver value",
      "Split it by team member expertise to parallelize development"
    ],
    correctAnswer: 2,
    explanation: "Product Backlog items should be split into thin vertical slices that each deliver value and can be independently released. This enables better prioritization, faster feedback, and more flexibility than splitting by technical layer or waiting until Sprint Planning.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 124,
    question: "What should a Product Owner do when market share is declining despite regular product updates?",
    options: [
      "Focus on marketing rather than product changes",
      "Copy competitors' features to regain market position",
      "Increase release frequency to demonstrate product momentum",
      "Investigate whether updates align with what users actually value"
    ],
    correctAnswer: 3,
    explanation: "Declining market share despite updates suggests a disconnect between what's being delivered and what users value. The Product Owner should investigate whether the product addresses real user needs and competitive advantages, not just increase activity or copy competitors.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 125,
    question: "How should a Product Owner handle a Development Team that wants to remove technical debt before adding new features?",
    options: [
      "Understand the impact of technical debt and make informed trade-off decisions",
      "Allocate a fixed percentage of each Sprint to technical debt reduction",
      "Let the team decide when to address technical debt without Product Owner input",
      "Insist on continuous feature delivery to maintain stakeholder satisfaction"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should understand how technical debt impacts future development speed, risk, and quality, then make informed prioritization decisions. This might mean prioritizing technical debt work highly, but it's a value-based decision, not an automatic allocation or team decision.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 126,
    question: "What should a Product Owner do when they realize the Product Goal is too ambitious to achieve?",
    options: [
      "Keep working toward it to demonstrate commitment and perseverance",
      "Adjust the Product Goal to something more achievable and realistic",
      "Extend the timeline for achieving the Product Goal",
      "Request additional resources to achieve the ambitious goal"
    ],
    correctAnswer: 1,
    explanation: "If a Product Goal proves unrealistic, the Product Owner should adjust it based on learning. Product Goals should be challenging but achievable. Persisting with an unachievable goal wastes resources and demoralizes the team—adaptation based on evidence is fundamental to empiricism.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 127,
    question: "How should a Product Owner respond when compliance requirements conflict with user experience?",
    options: [
      "Escalate the conflict to legal and executive leadership",
      "Prioritize compliance since it's non-negotiable",
      "Find creative ways to meet compliance while minimizing UX impact",
      "Prioritize user experience and accept compliance risks"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should work with the Development Team to find creative solutions that meet compliance requirements while minimizing negative user experience impact. Compliance is typically non-negotiable, but how it's implemented offers opportunities for better user experience.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 128,
    question: "What should a Product Owner do when the Development Team's Definition of Done differs from organizational standards?",
    options: [
      "Negotiate a compromise between team preferences and organizational standards",
      "Escalate to management to enforce organizational standards",
      "Support the team's Definition of Done as they're self-organizing",
      "Ensure the Definition of Done meets organizational standards at minimum"
    ],
    correctAnswer: 3,
    explanation: "The Definition of Done must meet organizational standards at minimum. While the Development Team can have a more stringent Definition of Done, they cannot have a weaker one that violates organizational quality standards or compliance requirements.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 129,
    question: "How should a Product Owner handle pressure to cut corners on accessibility requirements?",
    options: [
      "Maintain accessibility standards regardless of pressure",
      "Make risk-informed decisions about accessibility scope and timing",
      "Delegate accessibility decisions to the Development Team",
      "Phase accessibility work to deliver functional features faster"
    ],
    correctAnswer: 0,
    explanation: "Accessibility is typically both a legal requirement and a core product quality attribute. The Product Owner should maintain accessibility standards, finding ways to meet them efficiently rather than cutting corners that create legal risk, exclude users, and require expensive retrofitting.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 130,
    question: "What should a Product Owner do when team velocity drops significantly after a major release?",
    options: [
      "Adjust forecasts downward based on the new velocity pattern",
      "Investigate the cause and address it if it represents a systemic issue",
      "Accept it as normal post-release slowdown and let velocity recover naturally",
      "Challenge the team to return to previous velocity levels"
    ],
    correctAnswer: 1,
    explanation: "Significant velocity drops warrant investigation. They might indicate technical debt accumulation, burnout, process issues, or other problems that need addressing. While some post-release slowdown can be normal, significant drops should be understood and addressed if they represent systemic issues.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 131,
    question: "How should a Product Owner approach Product Backlog items that have been pending for many Sprints?",
    options: [
      "Ask the Development Team why these items haven't been selected",
      "Keep them in the backlog as they represent potential future value",
      "Review them and remove items that are no longer relevant or valuable",
      "Lower their priority to make room for more current items"
    ],
    correctAnswer: 2,
    explanation: "Items that remain unselected for many Sprints may no longer be relevant, valuable, or aligned with current strategy. The Product Owner should review them and remove items that don't justify keeping in the backlog, keeping the Product Backlog focused on current strategy.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 132,
    question: "What should a Product Owner do when stakeholders want features that serve only a small segment of users?",
    options: [
      "Build niche features only if they don't delay mainstream features",
      "Let the Development Team decide whether niche features are worthwhile",
      "Reject niche features to focus on majority user needs",
      "Evaluate the value of serving that segment versus other priorities"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should evaluate whether serving a small segment delivers sufficient value—considering factors like revenue, strategic importance, competitive positioning, or brand impact. Small segments might represent high value, or they might not justify the investment.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 133,
    question: "How should a Product Owner handle a situation where the Development Team wants to rebuild a major component from scratch?",
    options: [
      "Understand the business case for rebuilding versus incremental improvement",
      "Allow rebuilding during off-Sprint time to maintain feature delivery",
      "Approve rebuilding only if competitors are also rebuilding similar components",
      "Reject rebuilds as they don't deliver new user-facing value"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should understand why rebuilding is proposed and what benefits it offers versus incremental improvement. Major rewrites represent significant opportunity cost, so the business case should be clear. Sometimes rebuilding is the right choice; other times incremental improvement is better.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 134,
    question: "What should a Product Owner do when users request features that would make the product more complex?",
    options: [
      "Add the features since users know what they need",
      "Evaluate whether the added complexity provides sufficient value",
      "Simplify existing features before adding new complexity",
      "Survey users to understand if the complexity is widely desired"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should evaluate whether features that add complexity provide sufficient value to justify that complexity. Sometimes simplicity is more valuable than additional features. The Product Owner should make informed trade-offs between capability and usability.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 135,
    question: "How should a Product Owner respond when the Development Team wants to slow down to improve their development practices?",
    options: [
      "Allow practice improvement only during low-priority work",
      "Support the slowdown since better practices improve long-term delivery",
      "Understand the expected improvement and make risk-informed decisions",
      "Suggest improving practices outside of Sprint time"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should understand what improvement is expected from changing practices and make an informed decision about the trade-off between short-term slowdown and long-term improvement. This requires collaboration between Product Owner and team, not automatic approval or rejection.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 136,
    question: "What should a Product Owner do when Sprint Reviews reveal stakeholders have different expectations about the product direction?",
    options: [
      "Let stakeholder disagreements resolve themselves over time",
      "Focus on the stakeholder with the most organizational authority",
      "Try to satisfy all stakeholder expectations equally",
      "Facilitate alignment around a coherent Product Goal and strategy"
    ],
    correctAnswer: 3,
    explanation: "Divergent stakeholder expectations indicate lack of alignment on Product Goal and strategy. The Product Owner should facilitate discussions to create alignment, not try to satisfy everyone or let conflicts persist. A coherent product strategy requires stakeholder alignment.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 137,
    question: "How should a Product Owner handle Development Team requests for training on new technologies?",
    options: [
      "Evaluate training value and consider it in prioritization decisions",
      "Suggest team members pursue training outside work hours",
      "Approve training only after all high-priority features are delivered",
      "Support training as professional development that benefits the product"
    ],
    correctAnswer: 0,
    explanation: "Training can be valuable if it improves the team's ability to deliver the product effectively. The Product Owner should understand the value proposition and consider training in Product Backlog prioritization based on expected return, like any investment in team capability.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 138,
    question: "What should a Product Owner do when competitors offer features that seem like 'table stakes' for the market?",
    options: [
      "Immediately add competitive features to match market expectations",
      "Evaluate whether those features actually matter to target users",
      "Differentiate by explicitly not offering those features",
      "Wait to see if competitors' features gain market traction"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should evaluate whether competitive features matter to their target users rather than assuming they're table stakes. Sometimes they are essential; sometimes they're not. Product strategy should be based on user needs and competitive positioning, not automatic feature parity.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 139,
    question: "How should a Product Owner respond when the Development Team wants to adopt mob programming or pair programming?",
    options: [
      "Allow experimentation but monitor velocity closely",
      "Support the practice change as it's within team self-organization",
      "Understand how the practice affects velocity and delivery patterns",
      "Reject practices that reduce individual productivity"
    ],
    correctAnswer: 2,
    explanation: "While the Development Team decides how they work, the Product Owner should understand how practice changes affect delivery patterns, velocity, and quality. This informs stakeholder communication and expectations without requiring Product Owner approval for how the team works.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 140,
    question: "What should a Product Owner do when stakeholders want the product to serve multiple distinct market segments?",
    options: [
      "Focus on the largest segment and deprioritize others",
      "Create separate versions of the product for different segments",
      "Try to serve all segments within a single product",
      "Evaluate whether a single product can effectively serve multiple segments"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should evaluate whether a single product can effectively serve multiple segments or whether trying to serve everyone results in serving no one well. This might lead to focusing on specific segments, creating separate products, or finding ways to serve multiple segments effectively.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 141,
    question: "How should a Product Owner handle a situation where actual user behavior contradicts stated user preferences?",
    options: [
      "Investigate the discrepancy to understand what it reveals",
      "Trust stated preferences as they represent conscious user intentions",
      "A/B test to determine which should guide prioritization",
      "Trust user behavior data over stated preferences"
    ],
    correctAnswer: 0,
    explanation: "Discrepancies between stated preferences and actual behavior warrant investigation. They might reveal usability issues, unmet needs, or gaps between what users think they want and what they actually value. Understanding the why behind the discrepancy informs better prioritization decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 142,
    question: "What should a Product Owner do when the Development Team wants to adopt continuous deployment?",
    options: [
      "Approve continuous deployment to accelerate value delivery",
      "Understand implications and requirements before supporting the change",
      "Reject continuous deployment to maintain Product Owner release control",
      "Allow continuous deployment only for non-critical features"
    ],
    correctAnswer: 1,
    explanation: "Continuous deployment can enable faster feedback and value delivery, but requires certain capabilities and considerations. The Product Owner should understand implications for their role, stakeholder communication, and product risk before supporting the transition.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 143,
    question: "How should a Product Owner respond when users request features that exist but are hard to find?",
    options: [
      "Educate users about existing features through documentation",
      "Redesign the interface to make all features equally prominent",
      "Improve feature discoverability rather than adding new features",
      "Add the requested features since users don't find existing ones valuable"
    ],
    correctAnswer: 2,
    explanation: "When users request features that exist but are undiscoverable, the problem is discoverability, not missing functionality. The Product Owner should prioritize improving findability rather than building redundant features or assuming users will read documentation.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 144,
    question: "What should a Product Owner do when the Development Team says they need to focus on automated testing?",
    options: [
      "Suggest manual testing to avoid slowing feature delivery",
      "Allow automated testing only after core features are complete",
      "Support automated testing as it's a technical practice decision",
      "Understand how automated testing impacts quality and development speed"
    ],
    correctAnswer: 3,
    explanation: "While the Development Team decides how to ensure quality, the Product Owner should understand how automated testing affects future development speed, quality, and confidence in releases. This informs expectations and communication without requiring Product Owner approval of technical practices.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 145,
    question: "How should a Product Owner handle pressure from sales to customize the product for individual customers?",
    options: [
      "Evaluate whether customization or configurability should be in the product strategy",
      "Allow customization only for high-value customers",
      "Create a separate customization backlog managed by sales",
      "Reject customization to maintain product consistency"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should evaluate whether customer-specific customization, configurable features, or product personalization should be part of the product strategy. This strategic decision considers scalability, market approach, and how the product creates value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 146,
    question: "What should a Product Owner do when the Development Team wants to migrate to a new technology stack?",
    options: [
      "Support the migration as it's a technical decision for the team",
      "Understand the business case and opportunity cost of the migration",
      "Reject migration to avoid disrupting feature delivery",
      "Allow migration only during low-priority work periods"
    ],
    correctAnswer: 1,
    explanation: "Technology stack migrations are major undertakings with significant opportunity cost. The Product Owner should understand the business case—improved development speed, better talent pool, reduced technical risk—and make informed decisions about prioritization versus other work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 147,
    question: "How should a Product Owner respond when stakeholders want to see progress through burndown charts?",
    options: [
      "Delegate burndown chart creation to the Scrum Master",
      "Provide burndown charts since they're standard Scrum artifacts",
      "Explain that Product Backlog and Sprint Reviews show more meaningful progress",
      "Create burndown charts in addition to Sprint Reviews"
    ],
    correctAnswer: 2,
    explanation: "Progress is best shown through working Increments at Sprint Reviews, not burndown charts. The Product Owner should educate stakeholders that inspecting actual working product provides more meaningful transparency than charts showing remaining work estimates.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 148,
    question: "What should a Product Owner do when the Development Team wants to standardize on specific coding practices?",
    options: [
      "Ensure standardization doesn't slow feature delivery",
      "Evaluate whether standardization time should be a backlog item",
      "Support standardization as it improves code consistency",
      "Stay uninvolved as coding practices are technical team decisions"
    ],
    correctAnswer: 3,
    explanation: "Coding practices are technical decisions within Development Team self-organization. The Product Owner doesn't need to be involved unless the team seeks input about trade-offs or business impact. The team decides how to build; the Product Owner focuses on what and why.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 149,
    question: "How should a Product Owner handle situations where quick wins conflict with strategic initiatives?",
    options: [
      "Balance quick wins with strategic work based on product context",
      "Focus exclusively on strategic initiatives for long-term success",
      "Alternate between quick wins and strategic work each Sprint",
      "Always prioritize quick wins to demonstrate value"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should balance quick wins with strategic work based on product context, competitive environment, and stakeholder needs. Sometimes quick wins build momentum and stakeholder confidence; sometimes they distract from important strategic work. Context determines the right balance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 150,
    question: "What should a Product Owner do when they realize the product isn't solving the problem they thought it would solve?",
    options: [
      "Continue with the current approach and evaluate after more data is gathered",
      "Acknowledge the learning and evolve product direction accordingly",
      "Pivot to solve a different problem the product happens to solve",
      "Commission research to validate the problem before making changes"
    ],
    correctAnswer: 1,
    explanation: "Discovering that the product doesn't solve the intended problem is valuable learning that should inform direction. The Product Owner should acknowledge this learning and evolve product direction accordingly—whether that means solving the problem differently, solving a different problem, or reconsidering the product's purpose.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 151,
    question: "How should a Product Owner handle a Development Team that delivers features but doesn't seem to understand the user problems they're solving?",
    options: [
      "Focus on their own problem understanding rather than the team's",
      "Accept feature delivery as long as it meets acceptance criteria",
      "Involve the team more in user research and problem understanding",
      "Provide more detailed specifications to prevent misunderstanding"
    ],
    correctAnswer: 2,
    explanation: "When the Development Team doesn't understand user problems, they miss opportunities to suggest better solutions and make poor implementation decisions. The Product Owner should involve them in user research, Sprint Reviews, and problem discussions to build shared understanding.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 152,
    question: "What should a Product Owner do when organizational leadership wants to shift from project to product funding?",
    options: [
      "Request additional resources to support both models during transition",
      "Focus solely on delivering outcomes regardless of funding model",
      "Maintain current practices until the funding model officially changes",
      "Support the shift and help leadership understand product-centric value delivery"
    ],
    correctAnswer: 3,
    explanation: "Product Owners are well-positioned to help organizations understand product-centric thinking. They should support the shift to product funding by demonstrating how continuous value delivery and adaptation differ from project-based approaches.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 153,
    question: "How should a Product Owner respond when the Development Team wants to implement feature flags for gradual rollouts?",
    options: [
      "Understand the implications and collaborate on rollout strategies",
      "Reject feature flags as they add unnecessary technical complexity",
      "Delegate feature flag decisions entirely to the Development Team",
      "Support feature flags as they enable better value delivery control"
    ],
    correctAnswer: 0,
    explanation: "Feature flags can enable progressive delivery, A/B testing, and risk management. The Product Owner should understand the implications for their role in release decisions and collaborate with the team on rollout strategies that balance learning with user experience.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 154,
    question: "What should a Product Owner do when users struggle to articulate what they need?",
    options: [
      "Build what users explicitly request even if it seems incomplete",
      "Use techniques like observation and prototyping to uncover real needs",
      "Focus on competitor features since users can't define requirements",
      "Rely on the Product Owner's expertise to determine user needs"
    ],
    correctAnswer: 1,
    explanation: "When users struggle to articulate needs, Product Owners should use techniques like user observation, journey mapping, and rapid prototyping to uncover underlying needs. What users say they want and what they actually need often differ, requiring deeper discovery.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 155,
    question: "How should a Product Owner handle a situation where the Development Team wants to attend industry conferences?",
    options: [
      "Allow conference attendance only during low-priority periods",
      "Support conference attendance as professional development",
      "Evaluate the value and impact on delivery timelines",
      "Suggest the team attend conferences on personal time"
    ],
    correctAnswer: 2,
    explanation: "Conference attendance can provide valuable learning, networking, and exposure to new practices. The Product Owner should understand the expected value and consider the impact on delivery timelines, making informed decisions about whether and when conference attendance makes sense.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 156,
    question: "What should a Product Owner do when stakeholders want to add 'nice to have' features to every Sprint?",
    options: [
      "Create a separate backlog for nice-to-have items",
      "Allow nice-to-have features only after all high-priority work is complete",
      "Include nice-to-have features to maintain stakeholder relationships",
      "Focus Sprint content on Sprint Goal achievement rather than feature lists"
    ],
    correctAnswer: 3,
    explanation: "Sprint Planning should focus on achieving a coherent Sprint Goal, not maximizing feature count. The Product Owner should help stakeholders understand that Sprints work toward goals, and every item should contribute to that goal rather than being nice-to-have additions.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 157,
    question: "How should a Product Owner respond when the Development Team wants to reduce technical complexity before adding new features?",
    options: [
      "Understand how complexity impacts future development and make informed trade-offs",
      "Allow complexity reduction during refinement time only",
      "Support complexity reduction as it's a technical decision",
      "Prioritize new features since complexity reduction isn't user-visible"
    ],
    correctAnswer: 0,
    explanation: "Technical complexity can slow development, increase defects, and reduce flexibility. The Product Owner should understand how complexity reduction enables future value delivery and make informed prioritization decisions, treating it as valuable work rather than overhead.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 158,
    question: "What should a Product Owner do when different stakeholder groups measure success differently?",
    options: [
      "Let each stakeholder group define success for their domain",
      "Establish unified success metrics aligned with the Product Goal",
      "Track separate metrics for each stakeholder group",
      "Focus on revenue metrics as the ultimate measure of success"
    ],
    correctAnswer: 1,
    explanation: "Different success metrics across stakeholder groups create competing priorities and confusion. The Product Owner should facilitate alignment on unified success metrics tied to the Product Goal, ensuring everyone understands how value and success are measured.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 159,
    question: "How should a Product Owner handle Development Team concerns about insufficient security expertise?",
    options: [
      "Accept security risks as a constraint of current team composition",
      "Hire security specialists to join the Development Team",
      "Work with the team and organization to address security capability gaps",
      "Deprioritize security-sensitive features until expertise is available"
    ],
    correctAnswer: 2,
    explanation: "Security capability gaps are organizational impediments that need addressing. The Product Owner should work with the team and organization to address gaps through training, consulting, hiring, or other means rather than accepting security risks or avoiding security work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 160,
    question: "What should a Product Owner do when Sprint Reviews reveal that delivered features don't match stakeholder mental models?",
    options: [
      "Accept mismatches as inevitable in complex development",
      "Have stakeholders approve designs before development begins",
      "Improve specifications to better communicate requirements upfront",
      "Involve stakeholders earlier in refinement and development"
    ],
    correctAnswer: 3,
    explanation: "Mismatches between delivered features and stakeholder expectations suggest insufficient collaboration during development. The Product Owner should involve stakeholders earlier through refinement participation, progress reviews, and feedback opportunities rather than trying to perfect upfront specifications.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 161,
    question: "How should a Product Owner respond when users want features that would compromise their own privacy?",
    options: [
      "Balance user requests with ethical considerations and privacy protection",
      "Let users decide what privacy trade-offs they're willing to make",
      "Reject privacy-compromising features regardless of user demand",
      "Build the features since users are requesting them"
    ],
    correctAnswer: 0,
    explanation: "Product Owners should consider ethical implications and long-term consequences, not just immediate user requests. Privacy protection may involve educating users about implications, providing informed choices, or declining to build features that create significant privacy risks.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 162,
    question: "What should a Product Owner do when the Development Team identifies a more efficient way to build multiple planned features?",
    options: [
      "Maintain the original plan to ensure predictable feature delivery",
      "Evaluate the trade-offs and make an informed prioritization decision",
      "Let the Development Team decide the implementation approach",
      "Support the efficient approach even if it delays some individual features"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should evaluate trade-offs between efficiency gains and timing changes. Sometimes building foundational capabilities first enables faster delivery of multiple features; other times sequential delivery provides value sooner. Context determines the right choice.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 163,
    question: "How should a Product Owner handle stakeholders who want to see every detail of what the Development Team is working on?",
    options: [
      "Invite stakeholders to observe Daily Scrums for visibility",
      "Provide full transparency by sharing all team artifacts and communications",
      "Explain appropriate transparency through Sprint Reviews and Product Backlog",
      "Create stakeholder-specific reports that summarize team activities"
    ],
    correctAnswer: 2,
    explanation: "Transparency in Scrum comes through Sprint Reviews (working Increment) and the Product Backlog (upcoming work), not through observing internal team processes. The Product Owner should help stakeholders understand appropriate transparency boundaries that inform without micromanaging.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 164,
    question: "What should a Product Owner do when competitive pressure demands faster delivery than the team can sustain?",
    options: [
      "Add more people to the Development Team to increase capacity",
      "Reduce quality standards temporarily to accelerate delivery",
      "Push the team to increase velocity to meet competitive needs",
      "Focus on highest-value features and manage stakeholder expectations realistically"
    ],
    correctAnswer: 3,
    explanation: "Competitive pressure doesn't change what's sustainable or possible. The Product Owner should focus on delivering the highest-value features and help stakeholders understand realistic timelines rather than creating unsustainable pressure or compromising quality.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 165,
    question: "How should a Product Owner respond when the Development Team wants to conduct a technical spike?",
    options: [
      "Understand the uncertainty being investigated and its impact on prioritization",
      "Reject spikes as they don't deliver user-facing value",
      "Allow spikes only during refinement time, not in Sprints",
      "Approve spikes as they're technical investigations within team autonomy"
    ],
    correctAnswer: 0,
    explanation: "Spikes investigate uncertainty that affects prioritization and planning. The Product Owner should understand what uncertainty exists, why it matters, and how investigation results will inform decisions. Spikes can be valuable Product Backlog items when learning reduces risk.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 166,
    question: "What should a Product Owner do when they lack time to participate in all refinement discussions?",
    options: [
      "Delegate refinement participation to a business analyst or proxy",
      "Prioritize refinement for highest-ordered items and work with organization on availability",
      "Reduce refinement frequency to match Product Owner availability",
      "Have the Development Team refine items without Product Owner input"
    ],
    correctAnswer: 1,
    explanation: "Product Owner participation in refinement is essential for ensuring items are valuable and clearly understood. If time is insufficient, this is an organizational constraint to address. The Product Owner should prioritize refinement for top items while working to improve availability.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 167,
    question: "How should a Product Owner handle a situation where delivered value doesn't translate to improved business metrics?",
    options: [
      "Focus on output metrics instead of outcome metrics",
      "Continue delivering features and trust that metrics will eventually improve",
      "Investigate whether the right value is being delivered or measured correctly",
      "Shift to delivering features that competitors have proven successful"
    ],
    correctAnswer: 2,
    explanation: "When delivered features don't improve business metrics, it suggests either the wrong things are being built or success is being measured incorrectly. The Product Owner should investigate the disconnect rather than assuming metrics will eventually follow.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 168,
    question: "What should a Product Owner do when the Development Team says they can't estimate certain Product Backlog items?",
    options: [
      "Remove unestimatable items from the Product Backlog",
      "Proceed with Sprint Planning using the Product Owner's priority judgment alone",
      "Provide estimates based on the Product Owner's understanding",
      "Work with the team to reduce uncertainty through spikes or splitting"
    ],
    correctAnswer: 3,
    explanation: "Inability to estimate indicates uncertainty or size issues. The Product Owner should work with the Development Team to reduce uncertainty through investigation or split large items into smaller, more estimatable pieces. Estimation belongs to the Development Team.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 169,
    question: "How should a Product Owner respond when stakeholders want them to make all decisions without team input?",
    options: [
      "Explain how collaboration with the team improves decision quality",
      "Delegate technical decisions to the team and keep business decisions separate",
      "Make quick decisions independently to demonstrate decisiveness",
      "Accept decision authority as it's the Product Owner's accountability"
    ],
    correctAnswer: 0,
    explanation: "While the Product Owner has decision authority, better decisions come from collaboration with the Development Team, who understand technical implications, effort, and alternative approaches. The Product Owner should educate stakeholders on how collaboration improves outcomes.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 170,
    question: "What should a Product Owner do when users resist changes to familiar features?",
    options: [
      "Revert changes to maintain user satisfaction",
      "Understand the resistance and evaluate whether changes truly improve experience",
      "Proceed with changes as users eventually adapt to improvements",
      "Make changes optional through settings or preferences"
    ],
    correctAnswer: 1,
    explanation: "User resistance to change might indicate poor usability, inadequate communication, or actual degradation masked as improvement. The Product Owner should investigate the resistance to understand whether it represents legitimate concerns or natural resistance to change.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 171,
    question: "How should a Product Owner handle a Development Team that wants detailed acceptance criteria for every item?",
    options: [
      "Have the team write their own acceptance criteria for approval",
      "Provide comprehensive acceptance criteria as requested",
      "Collaborate on appropriate detail levels that enable team autonomy",
      "Insist on minimal criteria to preserve flexibility"
    ],
    correctAnswer: 2,
    explanation: "The right level of detail depends on context, item complexity, and team maturity. The Product Owner should collaborate with the team to find appropriate detail levels that provide clarity without over-specifying, supporting their growth toward greater autonomy.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 172,
    question: "What should a Product Owner do when they discover that a completed feature has negative unintended consequences?",
    options: [
      "Roll back the feature immediately to prevent further negative impact",
      "Communicate the consequences to users and let them decide on usage",
      "Accept it as an unavoidable outcome of complex development",
      "Add work to the Product Backlog to address the unintended consequences"
    ],
    correctAnswer: 3,
    explanation: "Unintended negative consequences should be addressed through normal backlog prioritization. Whether to address immediately, eventually, or roll back depends on severity and impact. The Product Owner evaluates the situation and prioritizes appropriately.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 173,
    question: "How should a Product Owner respond when the Development Team wants to implement monitoring and observability tools?",
    options: [
      "Understand how monitoring enables better product decisions and value delivery",
      "Defer monitoring until after core features are complete",
      "Evaluate monitoring as a cost versus feature delivery",
      "Support monitoring as it's technical infrastructure the team manages"
    ],
    correctAnswer: 0,
    explanation: "Monitoring and observability enable better understanding of user behavior, system health, and value delivery. The Product Owner should understand how these capabilities inform product decisions and prioritize them based on their expected value, not defer them as technical overhead.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 174,
    question: "What should a Product Owner do when organizational policies conflict with agile principles?",
    options: [
      "Follow organizational policies regardless of agile principles",
      "Work to evolve policies while adapting Scrum within current constraints",
      "Ignore conflicting policies in favor of pure Scrum implementation",
      "Escalate conflicts to senior leadership for resolution"
    ],
    correctAnswer: 1,
    explanation: "Product Owners should work within organizational reality while helping evolve policies toward better product outcomes. This means adapting practices to current constraints while advocating for changes that improve value delivery, not demanding perfect conditions or ignoring policies.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 175,
    question: "How should a Product Owner handle situations where early adopters want different features than the broader market?",
    options: [
      "Transition from early adopter focus to broader market features",
      "Focus on early adopters who provide direct feedback",
      "Evaluate which features serve the long-term product strategy best",
      "Build features for both groups in parallel"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should evaluate which features align with long-term product strategy and sustainable business model. Early adopters are important but may not represent the broader market. Strategic decisions should consider both segments' needs and the product's ultimate direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 176,
    question: "What should a Product Owner do when the Development Team wants to establish coding standards?",
    options: [
      "Ensure standards don't slow feature delivery",
      "Require standards to be documented before implementation",
      "Approve standards that align with product quality goals",
      "Stay uninvolved as coding standards are technical team decisions"
    ],
    correctAnswer: 3,
    explanation: "Coding standards are technical practices within Development Team self-organization. The Product Owner doesn't need involvement unless the team seeks input about trade-offs. The team decides how to maintain code quality and consistency.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 177,
    question: "How should a Product Owner respond when stakeholders want to add features without understanding their complexity?",
    options: [
      "Facilitate discussions that help stakeholders understand complexity and trade-offs",
      "Have the Development Team explain technical complexity to stakeholders",
      "Make prioritization decisions based on the Product Owner's understanding of complexity",
      "Add features as requested since stakeholders define value"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should help stakeholders understand complexity and trade-offs so they can make informed input about priorities. This doesn't mean stakeholders estimate effort, but understanding that 'simple' requests might be complex helps inform better prioritization discussions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 178,
    question: "What should a Product Owner do when delivered features create support burden that affects development capacity?",
    options: [
      "Stop developing new features until support demand stabilizes",
      "Evaluate whether features need improvement or if support processes need evolution",
      "Allocate part of the team permanently to support duties",
      "Separate support from development by creating a support team"
    ],
    correctAnswer: 1,
    explanation: "High support burden might indicate usability issues, inadequate documentation, bugs, or insufficient support processes. The Product Owner should investigate root causes and determine whether product improvements, better documentation, process changes, or support investment is needed.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 179,
    question: "How should a Product Owner handle a situation where the Product Goal seems too easy to achieve?",
    options: [
      "Start planning for the next Product Goal while completing the current one",
      "Celebrate and maintain the achievable goal to ensure success",
      "Evolve the Product Goal to be more ambitious and stretch the team",
      "Add more features to the Product Backlog to extend the timeline"
    ],
    correctAnswer: 2,
    explanation: "Product Goals should be challenging and meaningful. If a goal seems too easy, the Product Owner should work with stakeholders to evolve it to something more ambitious that drives the product forward and motivates the team, rather than settling for easy achievement.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 180,
    question: "What should a Product Owner do when the Development Team delivers features that work differently than the Product Owner expected?",
    options: [
      "Accept the work but add backlog items to align it with expectations",
      "Improve specification detail to prevent future misalignment",
      "Reject the work and have it redone according to expectations",
      "Explore whether the delivered approach might be better than expected"
    ],
    correctAnswer: 3,
    explanation: "When features work differently than expected, the Product Owner should explore whether the team's approach might be superior. Development Teams often identify better implementation approaches. If the work meets the intent, different execution might be an improvement worth accepting.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 181,
    question: "How should a Product Owner respond when users want the product to do everything competitors do?",
    options: [
      "Add competitor features to the backlog for evaluation",
      "Explain that matching competitors dilutes product focus",
      "Build feature parity to remain competitive",
      "Focus on differentiation rather than copying competitor features"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should add competitor features to the Product Backlog for evaluation but not automatically build them. Some might represent necessary parity; others might not align with product strategy. Each should be evaluated based on value and strategic fit.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 182,
    question: "What should a Product Owner do when Sprint Reviews reveal stakeholders have unrealistic expectations about development speed?",
    options: [
      "Push the team to meet stakeholder expectations",
      "Use Sprint Reviews to educate stakeholders through empirical evidence",
      "Set lower expectations by forecasting conservatively",
      "Blame stakeholders for not understanding software development"
    ],
    correctAnswer: 1,
    explanation: "Sprint Reviews provide empirical evidence of what the team delivers. The Product Owner should use this transparency to help stakeholders develop realistic expectations based on actual delivery patterns, not aspirational beliefs about how fast development should be.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 183,
    question: "How should a Product Owner handle Development Team requests for dedicated time to learn new domain knowledge?",
    options: [
      "Provide domain knowledge through detailed specifications instead",
      "Support domain learning as it improves feature implementation",
      "Evaluate domain learning value and prioritize it in the Product Backlog",
      "Suggest team members learn domain knowledge outside work hours"
    ],
    correctAnswer: 2,
    explanation: "Domain knowledge improves the team's ability to build appropriate solutions, suggest improvements, and work autonomously. The Product Owner should evaluate the value of domain learning and consider it in backlog prioritization based on expected improvement in product outcomes.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 184,
    question: "What should a Product Owner do when market research suggests the product serves the wrong target audience?",
    options: [
      "Expand the product to serve multiple audiences simultaneously",
      "Commission additional research before making any changes",
      "Continue serving the current audience and ignore market research",
      "Evaluate whether to pivot to the right audience or refine the current approach"
    ],
    correctAnswer: 3,
    explanation: "Research suggesting wrong target audience is significant learning that deserves serious consideration. The Product Owner should evaluate whether to pivot toward the right audience, refine understanding of the current audience, or acknowledge the product might serve a different market than intended.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 185,
    question: "How should a Product Owner respond when the Development Team wants to replace manual testing with automated tests?",
    options: [
      "Understand the investment required and benefits gained from automation",
      "Maintain manual testing to avoid slowing feature delivery",
      "Require the team to automate tests outside Sprint time",
      "Support test automation as it's a technical practice decision"
    ],
    correctAnswer: 0,
    explanation: "Test automation requires investment but can dramatically improve feedback speed, quality confidence, and development efficiency. The Product Owner should understand the business case and consider automation work in backlog prioritization based on its expected return.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 186,
    question: "What should a Product Owner do when stakeholders want detailed timelines for Product Backlog items that aren't yet refined?",
    options: [
      "Provide rough estimates to satisfy stakeholder needs",
      "Explain that detailed planning for distant items creates false certainty",
      "Have the Development Team estimate all backlog items for timeline creation",
      "Create timeline ranges with heavy uncertainty disclaimers"
    ],
    correctAnswer: 1,
    explanation: "Detailed planning for unrefined items creates false certainty and waste when priorities change. The Product Owner should educate stakeholders on progressive elaboration—distant items are intentionally less detailed, and planning happens just-in-time as items approach implementation.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 187,
    question: "How should a Product Owner handle a situation where the Development Team's architecture decisions limit future product options?",
    options: [
      "Bring in external architects to review and approve team decisions",
      "Accept architectural constraints as technical decisions outside Product Owner domain",
      "Discuss with the team how architectural choices impact product flexibility",
      "Require the team to maintain maximum flexibility in all architectural decisions"
    ],
    correctAnswer: 2,
    explanation: "While the Development Team makes architectural decisions, the Product Owner should understand how those choices impact product flexibility, future capabilities, and strategic options. This enables informed discussion about trade-offs between current efficiency and future flexibility.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 188,
    question: "What should a Product Owner do when they don't understand the technical implications of a Product Backlog item?",
    options: [
      "Delegate technical items to the Development Team for prioritization",
      "Avoid prioritizing items with complex technical implications",
      "Trust the Development Team's technical judgment completely",
      "Seek to understand enough about implications to make informed prioritization decisions"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner doesn't need deep technical expertise but should understand implications enough to make informed value-based decisions. This might mean learning basics, asking clarifying questions, or having the team explain implications in business terms.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 189,
    question: "How should a Product Owner respond when users want offline functionality that significantly increases complexity?",
    options: [
      "Evaluate whether the value of offline access justifies the complexity",
      "Reject offline functionality due to implementation complexity",
      "Deliver a simplified offline mode that's easier to implement",
      "Build offline functionality since users are requesting it"
    ],
    correctAnswer: 0,
    explanation: "Offline functionality can be valuable but often adds significant complexity. The Product Owner should evaluate whether the value it provides (for which users, in which situations) justifies the investment and ongoing complexity burden.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 190,
    question: "What should a Product Owner do when the Development Team wants to improve development tooling?",
    options: [
      "Support tooling improvements as they're within team self-organization",
      "Understand how improved tooling affects development efficiency and prioritize accordingly",
      "Defer tooling improvements until after feature work is complete",
      "Allow tooling improvements only if they don't impact Sprint commitments"
    ],
    correctAnswer: 1,
    explanation: "Better development tooling can significantly improve development speed, quality, and team satisfaction. The Product Owner should understand the business case for tooling improvements and prioritize them in the Product Backlog based on their expected impact on value delivery.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 191,
    question: "How should a Product Owner handle stakeholders who want to micromanage the Development Team's work?",
    options: [
      "Ask stakeholders to direct all input through the Product Owner",
      "Allow stakeholder involvement as they have legitimate interest in the product",
      "Protect the team's autonomy while helping stakeholders understand appropriate boundaries",
      "Have the Scrum Master intervene to shield the team from stakeholders"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should protect team autonomy while helping stakeholders understand appropriate ways to engage—through Sprint Reviews, backlog input, and the Product Owner—rather than micromanaging implementation. This requires clear communication about roles and boundaries.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 192,
    question: "What should a Product Owner do when the product gains unexpected users who use it differently than intended?",
    options: [
      "Pivot immediately to serve the unexpected user base",
      "Add features specifically for unexpected users",
      "Ignore unexpected users and focus on the intended audience",
      "Investigate the unexpected usage and evaluate strategic implications"
    ],
    correctAnswer: 3,
    explanation: "Unexpected usage patterns might reveal new markets, unmet needs, or product capabilities not previously recognized. The Product Owner should investigate this learning and evaluate strategic implications—whether to serve these users, what it means for product direction, and market opportunities.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 193,
    question: "How should a Product Owner respond when the Development Team wants to consolidate similar features into a unified design?",
    options: [
      "Evaluate the consolidation proposal and make informed prioritization decisions",
      "Maintain separate features to preserve user familiarity",
      "Let the team decide feature consolidation as it's a design decision",
      "Support consolidation as it improves consistency and usability"
    ],
    correctAnswer: 0,
    explanation: "Feature consolidation can improve usability and maintainability but might disrupt familiar workflows. The Product Owner should evaluate the proposal, considering user impact, consistency benefits, and effort required, then make informed prioritization decisions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 194,
    question: "What should a Product Owner do when analysis paralysis prevents Product Backlog prioritization?",
    options: [
      "Gather more data until confident in prioritization decisions",
      "Make decisions with available information and adapt based on feedback",
      "Delegate prioritization to stakeholders or the Development Team",
      "Implement a scoring system to make decisions more objective"
    ],
    correctAnswer: 1,
    explanation: "Perfect information is rarely available. The Product Owner should make decisions with available information, knowing they can adapt based on feedback and learning. Empiricism means making informed decisions and adapting rather than seeking perfect information before acting.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 195,
    question: "How should a Product Owner handle a Development Team that wants to refactor code continuously?",
    options: [
      "Reject refactoring that doesn't deliver user-visible improvements",
      "Support continuous refactoring as it maintains code health",
      "Discuss how refactoring fits within the Definition of Done and Sprint work",
      "Limit refactoring to specific Sprints or time allocations"
    ],
    correctAnswer: 2,
    explanation: "Refactoring can be part of Done (maintaining quality) or separate backlog work (major restructuring). The Product Owner should discuss with the team how refactoring fits within their workflow and Definition of Done, ensuring quality maintenance while also delivering value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 196,
    question: "What should a Product Owner do when stakeholders want product features that serve internal convenience rather than user value?",
    options: [
      "Build internal features only after all user features are complete",
      "Have internal stakeholders create a separate product backlog",
      "Reject features that don't serve users directly",
      "Evaluate whether internal efficiency enables better user value delivery"
    ],
    correctAnswer: 3,
    explanation: "Some internal features enable better customer service, faster issue resolution, or better operations that indirectly benefit users. The Product Owner should evaluate whether internal features enable better value delivery and prioritize them accordingly, not automatically reject them.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 197,
    question: "How should a Product Owner respond when the Development Team wants to participate in open source communities?",
    options: [
      "Evaluate how participation benefits the product and prioritize time accordingly",
      "Suggest participation happens outside work hours",
      "Allow participation only in communities directly related to current work",
      "Support open source participation as professional development"
    ],
    correctAnswer: 0,
    explanation: "Open source participation can provide learning, community support, and improvements to tools the team uses. The Product Owner should understand the value proposition and consider time for participation in prioritization based on its expected benefit to product development.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 198,
    question: "What should a Product Owner do when users love certain features but metrics show they provide minimal business value?",
    options: [
      "Remove low-value features regardless of user sentiment",
      "Balance user satisfaction with business value in decision-making",
      "Keep all features that users love regardless of metrics",
      "Improve metrics tracking to better capture value"
    ],
    correctAnswer: 1,
    explanation: "User satisfaction is valuable but must be balanced with business sustainability and strategic goals. The Product Owner should consider both user sentiment and business value, potentially keeping delightful features while also ensuring the product achieves its business objectives.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 199,
    question: "How should a Product Owner handle a situation where the Development Team wants to slow down to reduce bugs?",
    options: [
      "Add separate quality assurance resources to find bugs",
      "Support slowing down if it improves long-term quality",
      "Investigate root causes of bugs and address them systematically",
      "Maintain current pace and accept bugs as inevitable"
    ],
    correctAnswer: 2,
    explanation: "Simply slowing down doesn't necessarily reduce bugs. The Product Owner should work with the team to investigate root causes—whether they need better practices, clearer requirements, improved testing, or different approaches—and address systemic issues rather than just adjusting pace.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 200,
    question: "What should a Product Owner do when they realize they've been optimizing for the wrong success metric?",
    options: [
      "Track both metrics during a transition period",
      "Validate the better metric with stakeholders before changing",
      "Continue with the current metric to maintain consistency",
      "Acknowledge the learning and adjust to more meaningful success measures"
    ],
    correctAnswer: 3,
    explanation: "Recognizing that success is being measured incorrectly is valuable learning. The Product Owner should acknowledge this and adjust to more meaningful metrics that better reflect actual value and product success, even if it means past optimization was misdirected.",
    domain: "Product Value",
    difficulty: "Foundation"
  }
];

export { pspo1Questions };
export default pspo1Questions;
