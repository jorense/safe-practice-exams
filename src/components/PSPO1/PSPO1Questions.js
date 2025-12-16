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
      "Understand the technical debt impact and prioritize it within the Product Backlog"
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
      "Assess with the team whether the Sprint Goal remains valid given new conditions",
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
      "Determine with the team what can finish and what returns to the Product Backlog",
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
      "Engage stakeholders to establish a new Product Goal aligned with market reality",
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
      "Prioritize the backlog considering value and impact of all types of work",
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
      "Engage stakeholders to establish one Product Goal or split into separate products",
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
      "Assess with the team whether the Sprint Goal remains achievable and relevant"
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
      "Apply judgment to prioritize based on product context and strategic direction",
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
      "Split it into smaller valuable items through conversation with the team",
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
      "Explore the team's proposal to understand benefits and consider adoption",
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
      "Leverage domain experts while maintaining Product Owner accountability",
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
      "Partner with business stakeholders while evaluating product value and market",
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
      "Engage the organization to address Product Owner availability constraints",
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
      "Transform reviews into interactive sessions with demonstrations and feedback",
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
      "Encourage the team toward self-organization and design autonomy"
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
      "Discuss trade-offs between perfection and delivering value incrementally",
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
      "Engage team and organization to address unsustainable pace and workload",
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
      "Drive alignment around a coherent Product Goal and unified strategy"
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
      "Support the transition and educate leadership on product-centric value delivery"
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
      "Understand implications and discuss appropriate rollout strategies with the team",
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
      "Engage team and organization to address security capability gaps",
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
      "Focus refinement on highest-priority items and address availability with organization",
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
      "Reduce uncertainty through investigation spikes or breaking items down"
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
      "Discuss appropriate detail levels that support team autonomy and clarity",
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
      "Lead discussions to educate stakeholders about complexity and trade-offs",
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
      "Shield the team's autonomy while educating stakeholders on appropriate boundaries",
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
  },
  {
    id: 201,
    question: "When should the Product Owner involve the Development Team in Product Backlog refinement?",
    options: [
      "Only during Sprint Planning when items are being selected",
      "After stakeholders have approved all Product Backlog items",
      "Only when the Product Owner has fully defined all requirements",
      "Continuously throughout the Sprint as needed to prepare upcoming items"
    ],
    correctAnswer: 3,
    explanation: "Product Backlog refinement is a collaborative ongoing activity where the Product Owner and Development Team work together throughout the Sprint. This collaboration helps clarify requirements, estimate effort, identify technical considerations, and prepare items for future Sprints.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 202,
    question: "A Product Owner discovers that stakeholders have conflicting priorities. What is the best approach?",
    options: [
      "Alternate between stakeholder priorities to keep everyone happy",
      "Let the Development Team decide which features to build",
      "Align stakeholders on priorities and make final Product Backlog ordering decisions",
      "Build features that satisfy the most senior stakeholder"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should facilitate discussions to help stakeholders understand trade-offs and align on priorities, but ultimately the Product Owner is accountable for Product Backlog ordering. They must make decisions that maximize overall product value, not just satisfy individual stakeholders.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 203,
    question: "What is the relationship between the Product Goal and Sprint Goals?",
    options: [
      "The Product Goal is the sum of all Sprint Goals",
      "Sprint Goals replace the need for a Product Goal",
      "Sprint Goals are independent of the Product Goal",
      "Each Sprint Goal should be a step toward achieving the Product Goal"
    ],
    correctAnswer: 3,
    explanation: "Sprint Goals should coherently contribute to achieving the Product Goal. The Product Goal provides long-term direction, while Sprint Goals represent incremental steps toward that objective, creating alignment and focus across Sprints.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 204,
    question: "How should a Product Owner handle technical debt that is slowing down the Development Team?",
    options: [
      "Hire additional developers to work on features while others fix debt",
      "Tell the team to work faster to compensate for technical debt",
      "Work with the team to understand impacts and include technical debt in Product Backlog ordering",
      "Ignore technical debt since it's a Development Team responsibility"
    ],
    correctAnswer: 0,
    explanation: "Technical debt affects the team's ability to deliver value. The Product Owner should understand its impact on velocity, quality, and future capabilities, then work with the team to balance addressing technical debt with delivering new features in Product Backlog ordering.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 205,
    question: "What is the best way for a Product Owner to ensure the Development Team understands the 'why' behind Product Backlog items?",
    options: [
      "Communicate the Product Goal, Sprint Goal, and value of each item",
      "Send comprehensive documentation before Sprint Planning",
      "Explain requirements during Daily Scrum when the team has questions",
      "Include detailed user stories with acceptance criteria for every item"
    ],
    correctAnswer: 2,
    explanation: "Understanding comes from context and purpose, not just detailed requirements. By clearly communicating the Product Goal, Sprint Goal, and the value each item delivers, the Product Owner helps the team understand why they're building something, enabling better decisions and solutions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 206,
    question: "When is the Product Backlog complete?",
    options: [
      "When the Product Goal has been achieved",
      "When all stakeholder requirements have been documented",
      "When enough items are ready for the next three Sprints",
      "The Product Backlog is never complete as long as the product exists"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog is a living artifact that evolves as long as the product exists. New insights, market changes, stakeholder feedback, and emerging opportunities continuously shape the Product Backlog. It's never 'complete' in a traditional sense.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 207,
    question: "A stakeholder demands to see progress reports daily. What should the Product Owner do?",
    options: [
      "Provide daily reports to maintain stakeholder satisfaction",
      "Invite the stakeholder to Daily Scrum to observe progress",
      "Understand the underlying need and find an appropriate transparency mechanism",
      "Explain that Scrum only provides updates at Sprint Review"
    ],
    correctAnswer: 2,
    explanation: "Rather than simply complying or refusing, the Product Owner should understand why the stakeholder needs daily updates. There may be legitimate concerns that can be addressed through appropriate transparency mechanisms like burn-down charts, product increments, or more frequent check-ins.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 208,
    question: "What should a Product Owner do when they don't have domain expertise in the product area?",
    options: [
      "Defer all product decisions to stakeholders who have expertise",
      "Actively learn the domain while leveraging expert input for decisions",
      "Request reassignment to a product area they understand",
      "Rely entirely on the Development Team's technical knowledge"
    ],
    correctAnswer: 1,
    explanation: "A Product Owner should actively develop domain expertise while leveraging the knowledge of stakeholders, users, and team members. They remain accountable for Product Backlog ordering but should learn continuously and consult experts to make informed decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 209,
    question: "How should a Product Owner respond when the Development Team says an item is impossible to build?",
    options: [
      "Escalate to management to force the team to build it",
      "Find a different team that can build the item",
      "Remove the item from the Product Backlog immediately",
      "Explore why it seems impossible and discuss alternative approaches"
    ],
    correctAnswer: 3,
    explanation: "When the team says something is impossible, it's an opportunity to understand constraints and explore alternatives. The Product Owner should collaborate with the team to understand the underlying problem, discuss the business need, and discover alternative solutions that might achieve the desired outcome.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 210,
    question: "What is the primary purpose of the Sprint Review?",
    options: [
      "To evaluate team performance and velocity",
      "For the Development Team to demonstrate completed work to the Product Owner",
      "To inspect the Increment and adapt the Product Backlog based on feedback",
      "For stakeholders to approve the work done during the Sprint"
    ],
    correctAnswer: 0,
    explanation: "The Sprint Review is an inspection and adaptation event where the Scrum Team and stakeholders review the Increment and collaborate on what to do next. It's not a demo or approval gate, but a working session to gather feedback and adapt the Product Backlog.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 211,
    question: "A Product Owner notices the team is building features that aren't being used. What should they do?",
    options: [
      "Increase marketing efforts to drive adoption of existing features",
      "Focus on building more features to find ones that will be used",
      "Continue building planned features since they were already prioritized",
      "Investigate why features aren't used and adjust the Product Backlog accordingly"
    ],
    correctAnswer: 3,
    explanation: "Unused features represent waste and misalignment with user needs. The Product Owner should investigate why features aren't used, learn from this feedback, and adjust priorities to focus on features that deliver actual value. This is empiricism in action.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 212,
    question: "What does it mean for a Product Backlog item to be 'Ready'?",
    options: [
      "It is clear enough and small enough for the team to complete in a Sprint",
      "The Development Team has designed the technical solution",
      "It meets the Definition of Done and can be released",
      "It has been approved by all stakeholders and management"
    ],
    correctAnswer: 0,
    explanation: "'Ready' means a Product Backlog item has been sufficiently refined that the Development Team understands it well enough to select it for a Sprint and complete it within a Sprint. This typically includes clarity, size, and acceptance criteria, but the team defines their own readiness criteria.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 213,
    question: "How should a Product Owner prioritize security features versus new functionality?",
    options: [
      "Balance security needs with feature delivery based on risk and value",
      "Let the Development Team decide when to implement security",
      "Address security only when regulations require it",
      "Always prioritize security over new features"
    ],
    correctAnswer: 2,
    explanation: "Security is critical but must be balanced with other priorities. The Product Owner should assess security risks, regulatory requirements, and potential impacts, then balance these against the value of new features. Critical security issues typically take priority, but all decisions should maximize overall product value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 214,
    question: "What should a Product Owner do when they're managing multiple products simultaneously?",
    options: [
      "Reduce involvement with Development Teams to maximize coverage",
      "Dedicate specific days to each product for focused attention",
      "Delegate Product Owner responsibilities to team leads",
      "Consider whether they can effectively serve as Product Owner for all products"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner role requires significant engagement and accountability. Managing multiple products may compromise effectiveness. The Product Owner should honestly assess whether they can adequately serve each product and consider delegation, support, or organizational changes if needed.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 215,
    question: "How should a Product Owner handle a situation where the Sprint Goal becomes unachievable mid-Sprint?",
    options: [
      "Work with the team to adjust scope while trying to preserve the Sprint Goal intent",
      "Extend the Sprint to allow the team to complete the goal",
      "Continue the Sprint and acknowledge failure at Sprint Review",
      "Cancel the Sprint immediately and start Sprint Planning"
    ],
    correctAnswer: 2,
    explanation: "When the Sprint Goal becomes threatened, the Product Owner and Development Team should collaborate to adjust scope while trying to preserve the Sprint Goal's intent. Only if the Sprint Goal becomes obsolete should cancellation be considered. Flexibility within the Sprint allows adaptation.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 216,
    question: "What is the Product Owner's role during the Sprint?",
    options: [
      "Monitor the Development Team's progress and ensure they stay on task",
      "Be available to clarify items and answer questions as the team needs",
      "Focus on stakeholder management and preparing for the next Sprint",
      "Review completed work daily to ensure it meets requirements"
    ],
    correctAnswer: 1,
    explanation: "During the Sprint, the Product Owner should be available to the Development Team for clarifications, collaboration, and questions. They also continue refining the Product Backlog, engaging stakeholders, and monitoring progress toward the Sprint Goal and Product Goal.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 217,
    question: "A Development Team estimates that a high-priority item will take multiple Sprints. What should the Product Owner do?",
    options: [
      "Lower its priority until it can be completed in one Sprint",
      "Extend Sprint length to accommodate larger items",
      "Keep the item as-is and plan for multiple Sprints to complete it",
      "Break it down with the team into smaller pieces that each deliver value"
    ],
    correctAnswer: 3,
    explanation: "Large items should be broken down into smaller pieces that can each deliver value and fit within a Sprint. This enables faster feedback, earlier value delivery, and better adaptability. The Product Owner and team collaborate to identify valuable incremental slices.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 218,
    question: "How should a Product Owner measure the success of a product?",
    options: [
      "By the Development Team's velocity trend",
      "By the number of features delivered per Sprint",
      "By outcome-based metrics aligned with the Product Goal",
      "By stakeholder satisfaction scores"
    ],
    correctAnswer: 0,
    explanation: "Product success should be measured by outcomes that align with the Product Goal—such as user adoption, business value, customer satisfaction, or revenue impact. Output metrics like features delivered or velocity don't necessarily indicate whether the product is achieving its purpose.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 219,
    question: "What should a Product Owner do when users request a feature that contradicts the Product Goal?",
    options: [
      "Refuse the request since it doesn't align with the Product Goal",
      "Understand the underlying need and explore aligned alternatives",
      "Defer the decision to stakeholders",
      "Add it to the Product Backlog but prioritize it very low"
    ],
    correctAnswer: 3,
    explanation: "User requests should be understood deeply. The specific feature may contradict the Product Goal, but the underlying need might be addressed in ways that align with the goal. The Product Owner should explore the 'why' behind the request and find aligned solutions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 220,
    question: "When should a Product Owner consider canceling a Sprint?",
    options: [
      "When testing reveals significant defects in the Increment",
      "When the Development Team is not making expected progress",
      "When the Sprint Goal becomes obsolete and no longer makes sense",
      "When stakeholders request urgent changes to priorities"
    ],
    correctAnswer: 0,
    explanation: "A Sprint should be canceled only when the Sprint Goal becomes obsolete—meaning continuing the Sprint would waste effort because circumstances have changed fundamentally. This is rare and requires careful consideration since cancellation is disruptive and costly.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 221,
    question: "How should a Product Owner work with the Development Team on estimates?",
    options: [
      "Provide estimates based on business needs and deadlines",
      "The Development Team is solely responsible for all estimates",
      "Ensure shared understanding of items while the team is responsible for estimates",
      "Hire estimation experts to provide accurate forecasts"
    ],
    correctAnswer: 2,
    explanation: "The Development Team owns estimation since they do the work, but the Product Owner collaborates to ensure shared understanding of value, scope, and priorities. This collaboration helps the team make informed estimates and helps the Product Owner understand trade-offs.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 222,
    question: "What is the Product Owner's accountability regarding the Definition of Done?",
    options: [
      "The Definition of Done is not the Product Owner's concern",
      "The Product Owner defines the Definition of Done for quality standards",
      "The Product Owner must ensure the Definition of Done is being followed",
      "The Product Owner has input but the Development Team is accountable for it"
    ],
    correctAnswer: 1,
    explanation: "While the Development Team is accountable for the Definition of Done, the Product Owner should collaborate on it to ensure it enables the delivery of valuable, usable Increments. The Product Owner has a vested interest in quality standards that affect product value.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 223,
    question: "A stakeholder wants to add an item directly to the current Sprint. What should the Product Owner do?",
    options: [
      "Explain that changes during a Sprint threaten the Sprint Goal",
      "Ask the Development Team if they have capacity for the item",
      "Schedule it for the next Sprint automatically",
      "Add it immediately since stakeholder satisfaction is important"
    ],
    correctAnswer: 2,
    explanation: "Once Sprint Planning is complete, the Sprint Backlog should not be changed in ways that threaten the Sprint Goal. The Product Owner should explain this to the stakeholder, understand the urgency, and determine if the item should be planned for the next Sprint or if the situation warrants Sprint cancellation.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 224,
    question: "How does a Product Owner maximize the value delivered by the Development Team?",
    options: [
      "By ensuring the team works at maximum capacity every Sprint",
      "By effective Product Backlog ordering and collaboration with the team",
      "By adding more features to the Product Backlog",
      "By reducing time spent on Product Backlog refinement"
    ],
    correctAnswer: 1,
    explanation: "Value maximization comes from ordering the Product Backlog effectively (considering value, risk, dependencies, learning) and collaborating closely with the Development Team to ensure they understand what they're building and why. It's about building the right things, not just more things.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 225,
    question: "What should a Product Owner do when market conditions change and the Product Goal is no longer relevant?",
    options: [
      "Let the Development Team continue working while goals are reassessed",
      "Cancel all current Sprints until a new direction is established",
      "Continue with the current Product Goal since teams need stability",
      "Engage stakeholders to establish a new Product Goal that reflects current reality"
    ],
    correctAnswer: 3,
    explanation: "When the Product Goal becomes irrelevant, the Product Owner should work with stakeholders to define a new Product Goal that reflects current market conditions and business strategy. The product should adapt to changing circumstances while providing clear direction to the team.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 226,
    question: "How should Product Backlog items be expressed?",
    options: [
      "As high-level features with detailed sub-tasks",
      "As detailed technical specifications to avoid ambiguity",
      "In whatever format makes the most sense for the product and team",
      "Always as user stories following a standard template"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Guide doesn't prescribe a specific format for Product Backlog items. They can be user stories, features, requirements, or any format that works for the team and product. The key is that they're clear, valuable, and ordered effectively.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 227,
    question: "A Product Owner is struggling to get stakeholder engagement. What is the best approach?",
    options: [
      "Escalate to management to mandate stakeholder participation",
      "Understand why stakeholders aren't engaged and address those barriers",
      "Reduce Sprint Review frequency to only when stakeholders are available",
      "Make decisions without stakeholder input and proceed"
    ],
    correctAnswer: 3,
    explanation: "Lack of engagement usually has underlying causes—stakeholders may not see value in participation, may not understand their role, or may have competing priorities. The Product Owner should understand these barriers and address them rather than proceeding without input or forcing participation.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 228,
    question: "What is the Product Owner's role in removing impediments?",
    options: [
      "The Development Team should remove their own impediments",
      "The Scrum Master removes all impediments, not the Product Owner",
      "Remove impediments related to Product Backlog clarity and stakeholder access",
      "Escalate all impediments to management for resolution"
    ],
    correctAnswer: 0,
    explanation: "While the Scrum Master helps remove impediments generally, the Product Owner is best positioned to address impediments related to Product Backlog clarity, stakeholder engagement, and product direction. Each role helps remove impediments within their area of accountability.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 229,
    question: "How should a Product Owner handle competing priorities from different business units?",
    options: [
      "Allocate Sprint capacity proportionally to each business unit",
      "Rotate focus between business units Sprint by Sprint",
      "Work across units to align on a coherent Product Goal and ordering",
      "Create separate Product Backlogs for each business unit"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should facilitate alignment across business units to create a coherent Product Goal and Product Backlog ordering that maximizes overall value. While this may require difficult trade-offs, a single product should have unified direction rather than fragmented priorities.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 230,
    question: "When should the Product Owner update the Product Backlog?",
    options: [
      "During dedicated refinement sessions scheduled in advance",
      "Only during Sprint Planning when items are being selected",
      "At the Sprint Review based on stakeholder feedback",
      "Continuously as new information emerges and priorities change"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog is a living artifact that should be updated continuously as the Product Owner gains new information, priorities change, or items need clarification. While Sprint Review and refinement sessions are important moments for updates, the Product Owner shouldn't wait for scheduled events.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 231,
    question: "What should a Product Owner do when the Development Team consistently over-commits in Sprint Planning?",
    options: [
      "Use historical data and Sprint Goal discussions to improve forecasting",
      "Accept that incomplete Sprints are normal in Scrum",
      "Add more developers to increase team capacity",
      "Reduce the number of items offered in Sprint Planning"
    ],
    correctAnswer: 2,
    explanation: "Consistent over-commitment indicates the team is struggling with forecasting. The Product Owner can help by collaborating on Sprint Goals that allow flexibility, reviewing historical data to inform planning, and helping the team build forecasting skills through experience and reflection.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 232,
    question: "How should a Product Owner balance new feature development with maintenance work?",
    options: [
      "Focus exclusively on new features to maximize product value",
      "Dedicate separate teams to features and maintenance",
      "Alternate Sprints between new features and maintenance",
      "Add all work to the Product Backlog and order it based on value and risk"
    ],
    correctAnswer: 1,
    explanation: "Both new features and maintenance work should be part of the Product Backlog, ordered based on their value, risk, and impact. Maintenance that prevents future problems or enables future work can be highly valuable. The Product Owner balances both based on what maximizes overall product value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 233,
    question: "What is the best way for a Product Owner to communicate product vision to the Development Team?",
    options: [
      "Let the team discover the vision through building the product",
      "Include vision statements in every Product Backlog item",
      "Create a detailed vision document and present it at the start",
      "Continuously reinforce vision through Product Goals, Sprint Goals, and conversations"
    ],
    correctAnswer: 3,
    explanation: "Product vision is communicated through continuous engagement—articulating Product Goals, crafting meaningful Sprint Goals, explaining the 'why' behind items, and having ongoing conversations. Vision is reinforced through consistent communication, not just initial documentation.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 234,
    question: "A Development Team wants to experiment with a new technology. What should the Product Owner do?",
    options: [
      "Approve all reasonable technical learning requests",
      "Reject the request since it doesn't directly deliver features",
      "Understand the potential value and include it in Product Backlog prioritization",
      "Let the team experiment on their own time outside of Sprints"
    ],
    correctAnswer: 0,
    explanation: "Technical experiments can deliver value through improved capabilities, reduced risk, or enhanced quality. The Product Owner should understand the expected benefits and trade-offs, then consider the experiment in Product Backlog ordering based on its value relative to other items.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 235,
    question: "How should a Product Owner handle a feature that seemed valuable but users find confusing?",
    options: [
      "Provide training to help users understand the feature",
      "Continue as planned since user education takes time",
      "Remove the feature immediately to avoid user frustration",
      "Investigate whether the issue is design, implementation, or concept"
    ],
    correctAnswer: 3,
    explanation: "User confusion could stem from UX design, implementation issues, or the fundamental concept. The Product Owner should investigate the root cause through user research and feedback before deciding whether to improve the design, fix implementation issues, or remove the feature.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 236,
    question: "What should a Product Owner do when they don't have authority to make certain product decisions?",
    options: [
      "Step down from the Product Owner role",
      "Defer all decisions to those who have authority",
      "Work to gain the necessary authority or clarity about decision rights",
      "Make decisions anyway and deal with consequences later"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner needs authority to make product decisions and order the Product Backlog. If this authority is unclear or lacking, they should work with organizational leadership to clarify decision rights and gain necessary authority. Without it, they cannot effectively fulfill the role.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 237,
    question: "How should a Product Owner approach competitor analysis?",
    options: [
      "Copy successful competitor features to stay competitive",
      "Ignore competitors and focus only on unique product vision",
      "Use competitor insights to inform strategy while maintaining product identity",
      "Delegate competitive analysis to a market research team"
    ],
    correctAnswer: 2,
    explanation: "Competitor analysis provides valuable market insights, but the Product Owner should use this information to inform strategy rather than simply copying features. The goal is to understand market dynamics and user needs while building a product that delivers unique value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 238,
    question: "What should a Product Owner do when Sprint Reviews consistently have low stakeholder attendance?",
    options: [
      "Mandate stakeholder attendance through management",
      "Cancel Sprint Reviews and share updates via email instead",
      "Continue Sprint Reviews with whoever attends",
      "Investigate why attendance is low and make Sprint Reviews more valuable"
    ],
    correctAnswer: 1,
    explanation: "Low attendance suggests Sprint Reviews aren't providing value to stakeholders. The Product Owner should understand why—perhaps timing is bad, content isn't relevant, or stakeholders don't understand the purpose—and make changes to ensure Sprint Reviews are valuable collaborative sessions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 239,
    question: "How should a Product Owner handle a situation where the team's Definition of Done doesn't meet organizational standards?",
    options: [
      "Engage the team and organization to ensure the Definition of Done meets standards",
      "Impose organizational standards on the team immediately",
      "Create a separate Definition of Done for release purposes",
      "Let the team maintain their Definition of Done since they own it"
    ],
    correctAnswer: 2,
    explanation: "The Definition of Done must meet organizational standards. If there's a gap, the Product Owner should collaborate with the team and organization to understand requirements and help the team adopt practices that meet standards while being realistic about their capabilities and improvement needs.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 240,
    question: "What is the Product Owner's role in Sprint Planning?",
    options: [
      "Define exactly what the Development Team will build during the Sprint",
      "Propose a Sprint Goal and clarify Product Backlog items as needed",
      "Observe while the Development Team selects and plans their work",
      "Present items in priority order and then leave the team to plan"
    ],
    correctAnswer: 1,
    explanation: "In Sprint Planning, the Product Owner proposes a Sprint Goal and objective, ensures the team understands top Product Backlog items, and is available to clarify and answer questions. The Development Team selects work and creates the Sprint Backlog, but the Product Owner actively participates in creating shared understanding.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 241,
    question: "How should a Product Owner approach building features for different user segments?",
    options: [
      "Alternate between segments to serve all users equally",
      "Order features based on value across all segments",
      "Create separate Product Backlogs for each segment",
      "Focus on the largest user segment to maximize impact"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner should consider value across all user segments when ordering the Product Backlog. Some features for smaller segments might deliver disproportionate value. The goal is maximizing overall product value, not equally distributing features across segments.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 242,
    question: "What should a Product Owner do when regulatory requirements conflict with user needs?",
    options: [
      "Find ways to meet regulatory requirements while optimizing user experience",
      "Escalate the conflict to legal and compliance teams",
      "Prioritize regulatory requirements since they're mandatory",
      "Focus on user needs and address regulations only when required"
    ],
    correctAnswer: 0,
    explanation: "Regulatory requirements are typically non-negotiable, but how they're implemented can vary. The Product Owner should work to meet regulatory requirements in ways that minimize negative impact on user experience, potentially finding creative solutions that satisfy both needs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 243,
    question: "How should a Product Owner handle feedback that contradicts data and metrics?",
    options: [
      "Trust feedback since users know what they need",
      "Investigate why they differ to gain deeper understanding",
      "Collect more data until it aligns with feedback",
      "Trust the data and ignore contradictory feedback"
    ],
    correctAnswer: 3,
    explanation: "Contradictions between feedback and data are learning opportunities. The Product Owner should investigate why they differ—perhaps metrics aren't measuring the right things, feedback represents edge cases, or there are confounding factors. Both data and feedback provide valuable but incomplete pictures.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 244,
    question: "What should a Product Owner do when the Development Team wants to refactor large portions of the codebase?",
    options: [
      "Approve refactoring since the team knows what's best technically",
      "Reject refactoring since it doesn't deliver user-visible features",
      "Understand the benefits, costs, and risks before making a decision",
      "Allow refactoring only during dedicated technical Sprint"
    ],
    correctAnswer: 0,
    explanation: "Large refactoring efforts can deliver significant value through improved maintainability, reduced bugs, and faster future development. The Product Owner should understand the expected benefits, costs, and risks, then balance this work against other priorities in the Product Backlog.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 245,
    question: "How should a Product Owner communicate Product Backlog changes to stakeholders?",
    options: [
      "Send detailed change logs after every modification",
      "Only communicate changes at Sprint Review",
      "Proactively communicate significant changes and be available for questions",
      "Let stakeholders monitor the Product Backlog themselves"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner should proactively communicate significant Product Backlog changes that affect stakeholder expectations or decisions. While not every minor change needs communication, stakeholders should be kept informed of major priority shifts, scope changes, or timeline impacts.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 246,
    question: "What should a Product Owner do when historical data shows certain types of work are consistently underestimated?",
    options: [
      "Add buffer time to estimates for these types of work",
      "Support the team in investigating root causes and improving estimation",
      "Avoid scheduling this type of work when possible",
      "Accept that some work is hard to estimate accurately"
    ],
    correctAnswer: 1,
    explanation: "Consistent underestimation indicates incomplete understanding of the work. Rather than adding buffers, the Product Owner should help the team investigate why these items are underestimated and what's being missed, helping them develop better understanding and estimation skills over time.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 247,
    question: "How should a Product Owner balance innovation with incremental improvement?",
    options: [
      "Alternate between innovation Sprints and improvement Sprints",
      "Focus on innovation since improvements can happen anytime",
      "Add innovation and improvements to the Product Backlog based on their value",
      "Dedicate a percentage of capacity to each type of work"
    ],
    correctAnswer: 2,
    explanation: "Both innovation and incremental improvement should be part of the Product Backlog, ordered based on their expected value and alignment with the Product Goal. Some innovations deliver breakthrough value while some improvements are critical for product viability. Context determines the right balance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 248,
    question: "What should a Product Owner do when users are happy but business metrics aren't improving?",
    options: [
      "Question whether the business metrics are measuring the right things",
      "Continue focusing on user happiness since that's most important",
      "Shift focus entirely to business metrics",
      "Investigate why this gap exists and adjust product strategy accordingly"
    ],
    correctAnswer: 1,
    explanation: "User happiness without business results suggests a misalignment between user needs and business value, or possibly wrong metrics. The Product Owner should investigate this disconnect and adjust product strategy to create value for both users and the business, as sustainable products need both.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 249,
    question: "How should a Product Owner respond to a Development Team request for dedicated research time?",
    options: [
      "Approve it since team learning is always valuable",
      "Understand what they want to research and the expected value",
      "Suggest research happens outside Sprint time",
      "Reject it since research doesn't deliver working software"
    ],
    correctAnswer: 3,
    explanation: "Research can deliver significant value through risk reduction, better technical decisions, or new capabilities. The Product Owner should understand what the team wants to research and why, then evaluate the expected value against other Product Backlog items to make an informed prioritization decision.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 250,
    question: "What should a Product Owner do when the Development Team identifies a critical bug in production?",
    options: [
      "Add it to the Product Backlog and order it based on impact",
      "Allow the team to fix it immediately regardless of Sprint plans",
      "Wait until the next Sprint to address it systematically",
      "Escalate to management for a decision"
    ],
    correctAnswer: 0,
    explanation: "Even critical bugs should go through the Product Owner for prioritization. However, if a bug truly threatens the Sprint Goal or product viability, the Product Owner would typically order it at the top of the Product Backlog. The key is that the Product Owner makes an informed decision based on impact and priorities.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 251,
    question: "How should a Product Owner handle pressure to commit to specific delivery dates?",
    options: [
      "Refuse all date commitments since Scrum is empirical",
      "Provide forecasts based on evidence while explaining uncertainty",
      "Let the Development Team commit to dates they're comfortable with",
      "Commit to dates to satisfy stakeholder expectations"
    ],
    correctAnswer: 3,
    explanation: "While the Product Owner cannot guarantee specific deliveries, they can provide forecasts based on historical data, current velocity, and Product Backlog ordering. These forecasts should include honest communication about uncertainty and assumptions, helping stakeholders make informed decisions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 252,
    question: "What should a Product Owner do when two features are equally valuable but mutually exclusive?",
    options: [
      "Run experiments or gather more data to inform the decision",
      "Let stakeholders vote on which feature to build",
      "Build both and let users choose which to use",
      "Select based on development cost and effort"
    ],
    correctAnswer: 0,
    explanation: "When facing uncertainty about which option delivers more value, the Product Owner should seek more information through experiments, user research, or prototypes. Making decisions based on limited information when better information is available leads to suboptimal outcomes.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 253,
    question: "How should a Product Owner approach accessibility requirements?",
    options: [
      "Treat accessibility as integral to product quality and value",
      "Create a separate accessibility backlog for focused work",
      "Let the Development Team decide accessibility standards",
      "Add accessibility features only when legally required"
    ],
    correctAnswer: 2,
    explanation: "Accessibility should be treated as integral to product quality, expanding the potential user base and often improving usability for everyone. Rather than being an add-on, accessibility considerations should be part of the Definition of Done and built into features from the start.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 254,
    question: "What should a Product Owner do when stakeholders disagree about the Product Goal?",
    options: [
      "Let the Development Team decide based on technical feasibility",
      "Choose the goal supported by the most senior stakeholder",
      "Create multiple Product Goals to satisfy all stakeholders",
      "Drive toward alignment and escalate if stakeholders cannot reach consensus"
    ],
    correctAnswer: 1,
    explanation: "A product needs a clear, unified Product Goal. The Product Owner should facilitate stakeholder alignment through discussion and negotiation. If consensus cannot be reached, the Product Owner may need to escalate to higher leadership for strategic direction, as conflicting goals lead to fragmented products.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 255,
    question: "How should a Product Owner handle a situation where early adopters love features that might not scale to mainstream users?",
    options: [
      "Focus on mainstream users since they represent larger market",
      "Serve early adopters exclusively since they're most engaged",
      "Consider the product lifecycle and balance needs of different user segments",
      "Create separate products for early adopters and mainstream users"
    ],
    correctAnswer: 2,
    explanation: "Products often evolve through different user segments. The Product Owner should understand where the product is in its lifecycle and consciously decide how to balance early adopter needs with mainstream appeal. This might shift over time as the product and market mature.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 256,
    question: "What should a Product Owner do when Development Team members disagree about technical approach?",
    options: [
      "Make the technical decision to resolve the disagreement",
      "Support the team in working through disagreements themselves",
      "Escalate to an architect or technical lead for decision",
      "Choose the approach that delivers features fastest"
    ],
    correctAnswer: 1,
    explanation: "Technical decisions are the Development Team's responsibility. The Product Owner should support the team in working through technical disagreements, potentially helping them understand business context and priorities, but should not make technical decisions. The team must own their technical choices.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 257,
    question: "How should a Product Owner communicate when priorities change significantly?",
    options: [
      "Only announce changes at Sprint Review",
      "Minimize priority changes to maintain stability",
      "Make changes quietly to avoid disrupting the team",
      "Explain the reasoning behind changes to affected stakeholders and team"
    ],
    correctAnswer: 3,
    explanation: "Significant priority changes should be communicated transparently with explanation of the reasoning. This helps the Development Team and stakeholders understand the context, maintain trust, and adjust their own planning and expectations accordingly.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 258,
    question: "What should a Product Owner do when the team velocity is decreasing over time?",
    options: [
      "Investigate root causes with the team and Scrum Master",
      "Accept lower velocity and adjust forecasts accordingly",
      "Pressure the team to work faster and restore previous velocity",
      "Add more team members to increase capacity"
    ],
    correctAnswer: 0,
    explanation: "Decreasing velocity is a signal that something needs attention—growing technical debt, unclear requirements, process issues, or team challenges. The Product Owner should work with the team and Scrum Master to investigate and address root causes rather than just accepting or pushing against the trend.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 259,
    question: "How should a Product Owner handle situations where user research contradicts their assumptions?",
    options: [
      "Conduct more research until it confirms their assumptions",
      "Split the difference between assumptions and research",
      "Trust their experience and instincts over research findings",
      "Embrace the learning and adjust strategy based on evidence"
    ],
    correctAnswer: 3,
    explanation: "User research that contradicts assumptions is valuable learning. The Product Owner should embrace empiricism, acknowledge when assumptions were wrong, and adjust strategy based on evidence. Being willing to be proven wrong leads to better products.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 260,
    question: "What should a Product Owner do when Sprint Review reveals the team built something different than intended?",
    options: [
      "Investigate why the misunderstanding occurred and address root causes",
      "Blame the team for not asking enough questions",
      "Reject the work and require it to be rebuilt correctly",
      "Accept the work and clarify requirements for future items"
    ],
    correctAnswer: 0,
    explanation: "Misunderstandings indicate communication gaps. The Product Owner should investigate why the disconnect occurred—unclear requirements, insufficient collaboration, assumptions, or process issues—and address root causes to prevent similar issues while working with the team to determine next steps for the current work.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 261,
    question: "How should a Product Owner approach building features that might cannibalize existing revenue streams?",
    options: [
      "Consider the long-term strategic value despite short-term revenue impact",
      "Only pursue such features if stakeholders unanimously support them",
      "Build defensive features only when competitors threaten",
      "Avoid features that threaten current revenue"
    ],
    correctAnswer: 2,
    explanation: "Sometimes the best long-term strategy involves short-term cannibalization. The Product Owner should consider strategic implications—if the product doesn't evolve, competitors might capture the market anyway. This requires balancing short-term revenue with long-term product viability and market position.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 262,
    question: "What should a Product Owner do when the Development Team says they need to slow down to improve code quality?",
    options: [
      "Reject the request since stakeholders expect current pace",
      "Support quality improvements that enhance long-term value delivery",
      "Allow quality time only after all committed features are delivered",
      "Add QA resources instead of slowing development"
    ],
    correctAnswer: 1,
    explanation: "Quality issues compound over time, slowing future development and increasing risk. If the team needs time to improve quality, this is typically a valuable investment. The Product Owner should understand what improvements are needed and support work that enhances the team's ability to deliver value sustainably.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 263,
    question: "How should a Product Owner handle a situation where the most valuable feature requires significant technical risk?",
    options: [
      "Avoid the feature until the risk can be eliminated",
      "Build the feature despite the risk since it's highest value",
      "Invest in reducing the risk before committing to the feature",
      "Find a less risky alternative even if it's less valuable"
    ],
    correctAnswer: 2,
    explanation: "High-value features with significant technical risk often warrant risk reduction activities like spikes, prototypes, or architectural investigation. The Product Owner should work with the team to understand and reduce risk before committing to large investments, balancing risk management with value delivery.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 264,
    question: "What should a Product Owner do when they realize the Product Goal is too ambitious to achieve?",
    options: [
      "Blame the Development Team's velocity for the shortfall",
      "Push harder to achieve the original goal",
      "Quietly adjust the goal without announcement",
      "Transparently reassess and adjust the Product Goal with stakeholders"
    ],
    correctAnswer: 1,
    explanation: "Product Goals should be challenging yet achievable. If a goal proves unrealistic, the Product Owner should transparently reassess with stakeholders, learn from the experience, and establish a more appropriate goal. Transparency and empiricism are core to Scrum.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 265,
    question: "How should a Product Owner work with the Scrum Master?",
    options: [
      "The Scrum Master reports to the Product Owner on team progress",
      "They should minimize interaction to avoid confusion of roles",
      "The Product Owner directs the Scrum Master's activities",
      "They work as peers, each with their own distinct accountabilities"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner and Scrum Master are peer roles with distinct but complementary accountabilities. They should collaborate closely—the Scrum Master helping the Product Owner understand Scrum and be effective, while the Product Owner provides product direction. Neither reports to the other.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 266,
    question: "What should a Product Owner do when stakeholders want detailed long-term roadmaps?",
    options: [
      "Provide directional roadmaps that acknowledge uncertainty",
      "Delegate roadmap creation to project managers",
      "Create detailed roadmaps since stakeholders need planning visibility",
      "Refuse roadmaps since Scrum is empirical and adaptive"
    ],
    correctAnswer: 0,
    explanation: "While detailed long-term plans conflict with empiricism, stakeholders often need some forward visibility. The Product Owner can provide directional roadmaps that show intended direction and major themes while acknowledging uncertainty and the expectation that plans will adapt based on learning.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 267,
    question: "How should a Product Owner handle features that are technically complete but don't deliver expected value?",
    options: [
      "Require the team to rebuild the feature correctly",
      "Remove the feature and move on to more promising work",
      "Accept the feature since development work is complete",
      "Investigate why value wasn't delivered and decide next steps"
    ],
    correctAnswer: 3,
    explanation: "When features don't deliver expected value, the Product Owner should investigate why—was the hypothesis wrong, implementation misaligned, user needs misunderstood, or measurement incorrect? Understanding why helps inform whether to iterate, pivot, or remove the feature, and improves future decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 268,
    question: "What should a Product Owner do when the Development Team wants to use new technology for a feature?",
    options: [
      "Understand the trade-offs and make an informed decision",
      "Defer to the Development Team since it's a technical decision",
      "Reject new technology to minimize risk and maintain consistency",
      "Approve new technology to keep the team motivated and learning"
    ],
    correctAnswer: 0,
    explanation: "New technology decisions involve trade-offs between risk, learning, capabilities, and maintenance. While the Development Team makes technical decisions, the Product Owner should understand implications for the product—will it enable new capabilities, introduce risk, affect timelines? This informs Product Backlog ordering.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 269,
    question: "How should a Product Owner respond when asked to guarantee feature delivery by a specific date?",
    options: [
      "Commit to the date to secure stakeholder support",
      "Refuse any date commitments since guarantees are impossible",
      "Provide a forecast with assumptions and caveats clearly explained",
      "Add buffer time to estimates then commit to the padded date"
    ],
    correctAnswer: 2,
    explanation: "The Product Owner cannot guarantee specific deliveries due to complexity and uncertainty, but can provide forecasts based on historical velocity, current understanding, and Product Backlog ordering. These forecasts should clearly communicate assumptions, risks, and the empirical nature of the process.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 270,
    question: "What should a Product Owner do when Sprint Reviews become presentations rather than collaborative sessions?",
    options: [
      "Continue presentations since they're efficient and professional",
      "Restructure Sprint Reviews to encourage stakeholder engagement and feedback",
      "Cancel Sprint Reviews and gather feedback through other channels",
      "Reduce Sprint Review frequency to only when collaboration is needed"
    ],
    correctAnswer: 1,
    explanation: "Sprint Reviews should be collaborative working sessions, not presentations. If they've become one-directional, the Product Owner should restructure them to encourage stakeholder engagement—perhaps by focusing on specific questions, demonstrating real usage scenarios, or explicitly soliciting input on priorities.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 271,
    question: "How should a Product Owner balance building for current users versus potential future users?",
    options: [
      "Focus exclusively on current users since they're proven",
      "Focus on future users since growth is critical for sustainability",
      "Make strategic choices based on product lifecycle and business goals",
      "Allocate equal attention to both groups"
    ],
    correctAnswer: 2,
    explanation: "The right balance depends on product lifecycle, market conditions, and business strategy. Early-stage products might focus on early adopters, mature products on retention, and growth-stage products on expansion. The Product Owner makes strategic choices about where to focus based on Product Goals and market context.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 272,
    question: "What should a Product Owner do when they don't understand a technical constraint the Development Team describes?",
    options: [
      "Trust the team's technical judgment without further questions",
      "Ask questions until they understand enough to make informed decisions",
      "Hire technical consultants to validate the team's assessment",
      "Ignore technical constraints and focus on business priorities"
    ],
    correctAnswer: 1,
    explanation: "Product Owners don't need to be technical experts, but should understand constraints well enough to make informed prioritization decisions. They should ask questions, seek clarification, and potentially ask for demonstrations or alternatives until they understand trade-offs and implications for the product.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 273,
    question: "How should a Product Owner handle a request to build features specifically for a single large customer?",
    options: [
      "Refuse single-customer features to maintain product focus",
      "Evaluate the features against product strategy and broader applicability",
      "Build the features but only if the customer pays for development",
      "Build the features to maintain the important customer relationship"
    ],
    correctAnswer: 3,
    explanation: "Single-customer requests should be evaluated like any other: Do they align with Product Goals? Do they have broader applicability? What's the value versus cost? A large customer's needs might indicate broader market needs, or might represent customization that fragments the product. Context matters.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 274,
    question: "What should a Product Owner do when the Development Team wants to completely rewrite a major component?",
    options: [
      "Understand the business case for the rewrite and evaluate against alternatives",
      "Compromise by allowing partial rewrite over multiple Sprints",
      "Reject rewrites since they don't add visible user value",
      "Approve rewrites since the team knows what's best technically"
    ],
    correctAnswer: 0,
    explanation: "Major rewrites represent significant investment. The Product Owner should understand why it's needed (maintainability, performance, risk reduction), what value it enables, what alternatives exist, and what the costs are. Like any Product Backlog item, it should be evaluated based on value versus investment.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 275,
    question: "How should a Product Owner handle situation where organizational policies conflict with maximizing product value?",
    options: [
      "Ignore policies that prevent value delivery",
      "Work to understand policy intent and find aligned solutions, or escalate if necessary",
      "Focus on aspects of the product where policies don't apply",
      "Follow organizational policies regardless of impact on value"
    ],
    correctAnswer: 3,
    explanation: "Organizational policies often have important purposes (risk management, compliance, standards). The Product Owner should understand policy intent and try to find solutions that satisfy both policy and value. If policies genuinely prevent value delivery without good reason, escalating for organizational learning and policy evolution may be appropriate.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 276,
    question: "What is the Product Owner's primary responsibility in Scrum?",
    options: [
      "Ensuring the Scrum framework is followed correctly",
      "Maximizing the value of the product resulting from the work of the Scrum Team",
      "Writing detailed technical specifications for all features",
      "Managing the Development Team's daily activities"
    ],
    correctAnswer: 3,
    explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. This is accomplished through effective Product Backlog management, stakeholder engagement, and collaboration with the Development Team.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 277,
    question: "How should a Product Owner handle a situation where the Development Team delivers an Increment that doesn't meet stakeholder expectations?",
    options: [
      "Investigate the gap between expectations and delivery to improve future collaboration",
      "Present it to stakeholders anyway and let them provide feedback",
      "Reject the Increment and require the team to rebuild it",
      "Accept it but deprioritize the team for future work"
    ],
    correctAnswer: 0,
    explanation: "Misalignment between expectations and delivery indicates communication or understanding gaps. The Product Owner should investigate root causes—unclear requirements, changing expectations, insufficient collaboration—and address them to prevent future issues while determining appropriate next steps.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 278,
    question: "When should Product Backlog items include acceptance criteria?",
    options: [
      "Only items in the current Sprint need acceptance criteria",
      "Items should have clear acceptance criteria before they're ready for Sprint Planning",
      "Acceptance criteria are optional and not required in Scrum",
      "All items must have acceptance criteria before entering the Product Backlog"
    ],
    correctAnswer: 3,
    explanation: "While the Scrum Guide doesn't mandate acceptance criteria, they're commonly used to clarify what 'Done' means for a specific item. Items should have sufficient clarity, including acceptance criteria if appropriate, before the team selects them for a Sprint.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 279,
    question: "What should a Product Owner do when different stakeholder groups measure success differently?",
    options: [
      "Establish shared success metrics aligned with the Product Goal",
      "Let each group measure success independently",
      "Choose one group's metrics as the official measure of success",
      "Track all metrics equally and report to each group separately"
    ],
    correctAnswer: 0,
    explanation: "Different success metrics can lead to conflicting priorities. The Product Owner should facilitate alignment on shared success metrics that reflect the Product Goal and overall product value, ensuring all stakeholders understand how success is measured.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 280,
    question: "How should a Product Owner prioritize accessibility features?",
    options: [
      "Deprioritize them since they benefit only a small user segment",
      "Build them only when required by law or regulation",
      "Consider them integral to product quality and user experience",
      "Create a separate accessibility backlog to address periodically"
    ],
    correctAnswer: 2,
    explanation: "Accessibility benefits all users through better usability, expands market reach, and is often legally required. The Product Owner should treat accessibility as integral to product quality, incorporating it into the Definition of Done and feature development rather than treating it as optional.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 281,
    question: "What should a Product Owner do when users complain that features are too complex?",
    options: [
      "Provide better user documentation and training materials",
      "Investigate whether complexity is inherent or a design problem",
      "Defend the features since they were built as specified",
      "Remove the complex features immediately"
    ],
    correctAnswer: 1,
    explanation: "User complaints about complexity might indicate UX issues, poor onboarding, feature bloat, or genuinely complex domain problems. The Product Owner should investigate the root cause and determine whether simplification, better design, or user education is the appropriate solution.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 282,
    question: "How should a Product Owner respond when asked to guarantee a specific release date?",
    options: [
      "Provide a firm commitment based on current velocity",
      "Refuse to provide any timeline estimates",
      "Provide data-based forecast with clear assumptions and risks",
      "Commit to the date but pad estimates significantly"
    ],
    correctAnswer: 2,
    explanation: "Product Owners cannot guarantee delivery dates due to complexity and uncertainty, but can provide evidence-based forecasts. These forecasts should clearly communicate assumptions (stable velocity, no scope changes), known risks, and confidence levels to help stakeholders make informed decisions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 283,
    question: "What is the relationship between the Product Owner and the Scrum Master?",
    options: [
      "The Scrum Master manages the Product Owner's work",
      "They are peer roles with distinct, complementary accountabilities",
      "The Product Owner has authority over the Scrum Master",
      "They share accountability for product success"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner and Scrum Master are peer roles. The Scrum Master serves the Product Owner by helping them be effective, understand Scrum, and optimize value delivery. Neither has authority over the other, and they collaborate closely while maintaining distinct accountabilities.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 284,
    question: "How should a Product Owner handle technical architecture decisions?",
    options: [
      "Defer entirely to the Development Team's technical expertise",
      "Understand how architecture affects product strategy while team makes technical decisions",
      "Hire an architect to make all technical decisions",
      "Make all architecture decisions to ensure business alignment"
    ],
    correctAnswer: 3,
    explanation: "The Development Team owns technical and architectural decisions. However, the Product Owner should understand how architecture affects the product's strategic capabilities, flexibility, and long-term value to make informed prioritization decisions.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 285,
    question: "What should a Product Owner do when Sprint Reviews consistently lack meaningful stakeholder feedback?",
    options: [
      "Investigate why feedback is lacking and adjust the review format or timing",
      "Replace Sprint Reviews with email updates",
      "Cancel Sprint Reviews until stakeholders are ready to participate",
      "Continue reviews as scheduled regardless of participation"
    ],
    correctAnswer: 0,
    explanation: "Lack of stakeholder feedback suggests Sprint Reviews aren't providing value or aren't structured effectively. The Product Owner should understand why—timing, format, content relevance—and make changes to ensure reviews become valuable collaborative sessions that generate actionable feedback.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 286,
    question: "How should a Product Owner balance building new capabilities versus improving existing ones?",
    options: [
      "Dedicate fixed percentages to new versus existing features",
      "Make prioritization decisions based on value and strategic direction",
      "Improve existing features only when customers complain",
      "Always prioritize new capabilities to maximize growth"
    ],
    correctAnswer: 3,
    explanation: "The balance between new and improved capabilities depends on product strategy, market conditions, and user needs. The Product Owner should evaluate each opportunity based on its value contribution to the Product Goal rather than following arbitrary allocation rules.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 287,
    question: "What should a Product Owner do when the Development Team consistently completes less than forecast in Sprint Planning?",
    options: [
      "Replace team members who aren't performing",
      "Pressure the team to commit to more work",
      "Review historical patterns to identify forecasting gaps and improve accuracy",
      "Accept lower completion as normal and adjust expectations"
    ],
    correctAnswer: 0,
    explanation: "Consistent underdelivery indicates forecasting issues. The Product Owner should examine historical data with the team to identify patterns, understand what's being missed in estimates, and help improve forecasting accuracy through better understanding and Sprint Goal flexibility.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 288,
    question: "How should a Product Owner handle a situation where the most valuable feature requires significant technical debt paydown first?",
    options: [
      "Build the feature anyway and accept slower delivery",
      "Skip the feature and find alternatives that don't require debt paydown",
      "Prioritize necessary technical debt reduction as an enabler of value",
      "Add more developers to work around the technical debt"
    ],
    correctAnswer: 2,
    explanation: "When technical debt prevents valuable features, reducing that debt becomes valuable itself as an enabler. The Product Owner should prioritize the necessary technical work, understanding it as an investment that enables future value delivery rather than as work separate from value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 289,
    question: "What should a Product Owner do when stakeholders disagree on whether the product is succeeding?",
    options: [
      "Let each stakeholder evaluate success using their own criteria",
      "Side with the most senior stakeholder's assessment",
      "Focus on metrics that show the most favorable results",
      "Establish clear, shared success metrics aligned with the Product Goal"
    ],
    correctAnswer: 1,
    explanation: "Disagreement about success indicates lack of shared understanding and aligned metrics. The Product Owner should establish clear success criteria and metrics aligned with the Product Goal that all stakeholders accept, ensuring everyone evaluates the product consistently.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 290,
    question: "How should a Product Owner respond when asked to add features from competitors?",
    options: [
      "Add them immediately to maintain competitive parity",
      "Refuse since copying competitors lacks innovation",
      "Evaluate them against product strategy and unique value proposition",
      "Add them only if customers explicitly request them"
    ],
    correctAnswer: 2,
    explanation: "Competitor features should be evaluated like any other opportunity: Do they align with the Product Goal? Do they serve user needs? Do they differentiate or commoditize the product? Simply copying competitors can dilute product identity without delivering meaningful value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 291,
    question: "What should a Product Owner do when the Development Team wants to rewrite a component from scratch?",
    options: [
      "Compromise by allowing incremental refactoring instead",
      "Approve it to maintain team morale and motivation",
      "Reject it since rewrites don't add visible features",
      "Understand the value proposition and evaluate it like any other backlog item"
    ],
    correctAnswer: 1,
    explanation: "Rewrites should be evaluated based on their value proposition—improved maintainability, better performance, reduced risk, or enabling future capabilities. The Product Owner should understand expected benefits, costs, and alternatives to make an informed prioritization decision.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 292,
    question: "How should a Product Owner handle a situation where velocity has been stable but stakeholders want faster delivery?",
    options: [
      "Add more team members to increase capacity",
      "Explore whether scope, priorities, or expectations need adjustment",
      "Explain that velocity cannot be changed and reset expectations",
      "Pressure the Development Team to increase velocity"
    ],
    correctAnswer: 3,
    explanation: "Stable velocity with pressure for faster delivery suggests misalignment between expectations and capacity. The Product Owner should explore whether the right things are being built, if scope can be reduced, or if priorities need adjustment rather than simply trying to increase velocity.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 293,
    question: "What should a Product Owner do when different user segments have conflicting feature requests?",
    options: [
      "Evaluate each request based on strategic value and Product Goal alignment",
      "Create separate product variants for each segment",
      "Prioritize the largest user segment to maximize impact",
      "Alternate between segments to maintain fairness"
    ],
    correctAnswer: 0,
    explanation: "Conflicting requests should be evaluated based on their strategic value, alignment with Product Goals, and overall impact. Some smaller segment requests might deliver disproportionate value. The goal is maximizing product value, not equally distributing features across segments.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 294,
    question: "How should a Product Owner respond when the Development Team says an estimate was wrong and work will take longer?",
    options: [
      "Require better estimation processes to prevent future errors",
      "Accept the delay without discussion",
      "Hold the team accountable to their original estimate",
      "Understand what was learned and adjust plans accordingly"
    ],
    correctAnswer: 3,
    explanation: "Estimates are forecasts based on current understanding. When new information emerges, the Product Owner should understand what was learned, how it affects the Sprint Goal, and adjust plans accordingly. This is empiricism in action—learning and adapting based on new information.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 295,
    question: "What should a Product Owner do when market research contradicts user feedback?",
    options: [
      "Investigate the contradiction to gain deeper understanding",
      "Collect more data until they align",
      "Trust market research since it's more systematic",
      "Trust user feedback since it's more direct"
    ],
    correctAnswer: 0,
    explanation: "Contradictions between market research and user feedback are learning opportunities. Perhaps research and feedback represent different user segments, contexts, or biases. The Product Owner should investigate why they differ to develop more nuanced understanding.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 296,
    question: "How should a Product Owner handle pressure to cut quality to meet deadlines?",
    options: [
      "Explain how quality issues create future problems and costs",
      "Let the Development Team decide quality standards",
      "Meet the deadline but document the quality compromise",
      "Reduce quality temporarily to hit the deadline"
    ],
    correctAnswer: 2,
    explanation: "Quality cuts create technical debt that slows future work, increases bugs, and reduces product value. The Product Owner should help stakeholders understand these trade-offs and long-term costs, potentially adjusting scope rather than quality to meet timing needs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 297,
    question: "What should a Product Owner do when the Definition of Done cannot be met for some Product Backlog items?",
    options: [
      "Prioritize them lower until the team can meet the Definition of Done",
      "Remove those items from the Product Backlog permanently",
      "Create exceptions to the Definition of Done for specific items",
      "Determine with the team whether to refine the items or adjust the Definition of Done"
    ],
    correctAnswer: 1,
    explanation: "If valuable items can't meet the Definition of Done, there may be issues with the items (too large, unclear) or the Definition of Done itself (unrealistic, outdated). The Product Owner should investigate with the team whether to improve the items or evolve the Definition of Done.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 298,
    question: "How should a Product Owner approach innovation versus incremental improvement?",
    options: [
      "Focus on innovation since it provides competitive advantage",
      "Focus on improvement since it's lower risk",
      "Balance innovation and improvement based on product strategy and market conditions",
      "Dedicate separate teams to innovation and improvement"
    ],
    correctAnswer: 2,
    explanation: "The right balance depends on product lifecycle, market position, and strategic goals. Early products might emphasize innovation, mature products improvement, and others a mix. The Product Owner makes strategic choices based on context rather than following fixed rules.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 299,
    question: "What should a Product Owner do when the Development Team identifies opportunities to simplify the product?",
    options: [
      "Reject simplification since features were requested by stakeholders",
      "Support simplification if it improves user experience and maintainability",
      "Defer simplification until after all planned features are complete",
      "Require user research to validate simplification proposals"
    ],
    correctAnswer: 1,
    explanation: "Simplification often improves user experience, reduces maintenance burden, and focuses the product. If the Development Team identifies valuable simplification opportunities, the Product Owner should consider them seriously in Product Backlog prioritization.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 300,
    question: "How should a Product Owner handle stakeholders who want detailed progress tracking between Sprint Reviews?",
    options: [
      "Refuse since Scrum only requires Sprint Review transparency",
      "Understand their concerns and establish appropriate transparency methods",
      "Invite them to Daily Scrum events",
      "Provide daily progress reports to satisfy their needs"
    ],
    correctAnswer: 3,
    explanation: "Requests for detailed tracking often indicate concerns about risk, timeline, or value delivery. Rather than simply complying or refusing, the Product Owner should understand stakeholder needs and provide appropriate transparency—perhaps burn-down charts, interim demos, or more frequent check-ins.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 301,
    question: "What should a Product Owner do when users love a feature but it's expensive to maintain?",
    options: [
      "Weigh maintenance costs against user value in prioritization decisions",
      "Charge users extra for access to expensive features",
      "Remove the feature to reduce maintenance costs",
      "Keep the feature since user satisfaction is paramount"
    ],
    correctAnswer: 0,
    explanation: "High maintenance costs affect the product's ability to deliver future value. The Product Owner should balance user satisfaction with sustainable product development, potentially looking for ways to simplify the feature, offset costs with value, or make strategic trade-offs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 302,
    question: "How should a Product Owner respond when the Development Team wants dedicated time for learning new technologies?",
    options: [
      "Reject it since it doesn't deliver product features",
      "Understand what they want to learn and how it benefits the product",
      "Allow learning only during personal time outside work hours",
      "Approve learning time as professional development investment"
    ],
    correctAnswer: 3,
    explanation: "Learning can deliver value through improved capabilities, better solutions, or reduced future costs. The Product Owner should understand what the team wants to learn, expected benefits, and evaluate this learning time against other Product Backlog items based on value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 303,
    question: "What should a Product Owner do when product metrics show declining engagement?",
    options: [
      "Accept decline as normal product lifecycle",
      "Add more features to re-engage users",
      "Investigate root causes before deciding on solutions",
      "Increase marketing to attract more users"
    ],
    correctAnswer: 0,
    explanation: "Declining engagement could stem from many causes—better alternatives, unmet needs, poor UX, or changing user contexts. The Product Owner should investigate root causes through research and data analysis before determining appropriate responses.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 304,
    question: "How should a Product Owner handle a Development Team that delivers features faster than they can be validated with users?",
    options: [
      "Slow down development to match validation capacity",
      "Ship features without validation to maintain momentum",
      "Invest in improving validation processes and capacity",
      "Validate only the most critical features"
    ],
    correctAnswer: 2,
    explanation: "Fast delivery without validation creates risk of building the wrong things. Rather than slowing delivery, the Product Owner should invest in improving validation capacity—better processes, more frequent testing, automated collection—to maintain both speed and learning.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 305,
    question: "What should a Product Owner do when organizational restructuring affects stakeholder relationships?",
    options: [
      "Continue with existing stakeholders until formally notified of changes",
      "Proactively understand new structures and rebuild stakeholder relationships",
      "Wait for new stakeholders to reach out",
      "Focus on the product and minimize stakeholder interaction during transitions"
    ],
    correctAnswer: 1,
    explanation: "Organizational changes can affect product direction, priorities, and support. The Product Owner should proactively understand new structures, identify new stakeholders, establish relationships, and ensure continued alignment on Product Goals and priorities.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 306,
    question: "How should a Product Owner respond when the Development Team wants to use a Sprint for only technical work?",
    options: [
      "Reject it since every Sprint must deliver user-facing value",
      "Allow it occasionally to address technical needs",
      "Understand what technical work is needed and include it in normal Sprint Planning",
      "Approve it only if all feature work is complete"
    ],
    correctAnswer: 2,
    explanation: "All work, including technical work, should be prioritized in the Product Backlog based on value. Rather than segregating technical Sprints, the Product Owner should understand technical needs and balance them with feature work in normal Sprint Planning based on overall value delivery.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 307,
    question: "What should a Product Owner do when stakeholders want features that conflict with the product vision?",
    options: [
      "Escalate the conflict to senior management for resolution",
      "Build the features anyway since stakeholder satisfaction is important",
      "Refuse the features to protect product vision integrity",
      "Explore whether the vision needs evolution or stakeholders need education"
    ],
    correctAnswer: 1,
    explanation: "Conflicts between stakeholder requests and product vision indicate misalignment. The Product Owner should investigate whether the vision needs updating based on new information, or whether stakeholders need better understanding of the vision and strategy.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 308,
    question: "How should a Product Owner handle situations where regulatory compliance slows feature delivery?",
    options: [
      "Build features first and address compliance later",
      "Request exemptions from compliance requirements",
      "Prioritize compliance over speed since it's legally required",
      "Find ways to streamline compliance processes while meeting requirements"
    ],
    correctAnswer: 3,
    explanation: "Compliance is typically non-negotiable, but how it's achieved can vary. The Product Owner should look for ways to meet compliance requirements efficiently—perhaps through better processes, earlier involvement of compliance experts, or architectural choices that simplify compliance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 309,
    question: "What should a Product Owner do when the Product Goal is achieved?",
    options: [
      "Establish a new Product Goal for the next phase of product evolution",
      "Let the team take a break before starting new work",
      "Celebrate success and disband the Scrum Team",
      "Continue with the same goal to build more features"
    ],
    correctAnswer: 0,
    explanation: "Achieving a Product Goal is a milestone, not an ending. The Product Owner should engage stakeholders to define the next Product Goal that represents the product's next phase of evolution, maintaining momentum while celebrating the achievement.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 310,
    question: "How should a Product Owner balance building for power users versus casual users?",
    options: [
      "Focus on casual users since they're the larger market",
      "Make strategic choices based on product positioning and business model",
      "Build separate interfaces for each user type",
      "Focus on power users since they generate most value"
    ],
    correctAnswer: 3,
    explanation: "The right balance depends on product strategy, business model, and market positioning. Some products succeed by serving power users deeply, others by making casual use accessible. The Product Owner makes strategic choices based on Product Goals and market reality.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 311,
    question: "What should a Product Owner do when the Development Team says they're blocked by dependencies on other teams?",
    options: [
      "Engage teams and organization to improve dependency coordination",
      "Accept delays as inevitable when dependencies exist",
      "Escalate to management to force other teams to unblock them",
      "Remove the blocked items and select different work"
    ],
    correctAnswer: 0,
    explanation: "Dependencies that cause blocking indicate systemic issues. While addressing the immediate block is important, the Product Owner should work with the organization to improve dependency management—perhaps through better coordination, different team structures, or architectural changes.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 312,
    question: "How should a Product Owner respond to requests for features that would create vendor lock-in?",
    options: [
      "Reject them to maintain product flexibility",
      "Approve them if they provide immediate value",
      "Evaluate trade-offs between immediate value and long-term flexibility",
      "Let the Development Team decide based on technical preferences"
    ],
    correctAnswer: 2,
    explanation: "Vendor lock-in involves trade-offs between immediate capabilities, development speed, and long-term flexibility. The Product Owner should understand these trade-offs and make strategic decisions based on product timeline, market dynamics, and strategic direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 313,
    question: "What should a Product Owner do when user research shows the product solving a different problem than intended?",
    options: [
      "Continue with the original plan despite user behavior",
      "Pivot to address the problem users are actually solving",
      "Educate users on the intended use case",
      "Investigate the unexpected use case and its strategic implications"
    ],
    correctAnswer: 1,
    explanation: "Unexpected usage patterns are valuable learning. The Product Owner should investigate this finding—is there a larger opportunity? Should the product pivot? Can it serve multiple use cases? This investigation informs strategic decisions about product direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 314,
    question: "How should a Product Owner handle a situation where the most requested feature would benefit only a vocal minority?",
    options: [
      "Build it since it's the most requested feature",
      "Reject it since it only serves a minority",
      "Evaluate strategic value beyond request volume alone",
      "Survey all users to determine true demand"
    ],
    correctAnswer: 2,
    explanation: "Request volume doesn't always indicate value. A vocal minority might represent important use cases, future growth, or strategic value. Conversely, they might be an edge case. The Product Owner should evaluate strategic value beyond simple request counting.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 315,
    question: "What should a Product Owner do when the Development Team wants to adopt new development practices?",
    options: [
      "Defer to the Scrum Master's judgment on development practices",
      "Support any practice that improves team effectiveness",
      "Reject changes that might slow initial delivery",
      "Understand expected benefits and impacts on product delivery"
    ],
    correctAnswer: 1,
    explanation: "Development practice changes can affect delivery speed, quality, and team capacity. While the Development Team owns their practices, the Product Owner should understand expected impacts on product delivery to set appropriate stakeholder expectations and adjust plans.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 316,
    question: "How should a Product Owner respond when early adopters request features that might alienate mainstream users?",
    options: [
      "Reject them to protect future mainstream appeal",
      "Consider product lifecycle stage and strategic user segment priorities",
      "Build the features but make them optional or hidden",
      "Build the features since early adopters are current users"
    ],
    correctAnswer: 3,
    explanation: "Early product stages often focus on early adopters, later stages on mainstream users. The Product Owner should make conscious strategic choices about target user segments based on product lifecycle, market dynamics, and business goals.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 317,
    question: "What should a Product Owner do when the Development Team identifies a better solution than what was requested?",
    options: [
      "Understand the alternative and evaluate it against original objectives",
      "Present both options to stakeholders for decision",
      "Insist on the original request since stakeholders approved it",
      "Approve the alternative since the team knows best technically"
    ],
    correctAnswer: 0,
    explanation: "The Development Team might discover better technical approaches or solutions. The Product Owner should understand the alternative, compare it against original objectives, and determine if it better achieves the desired outcomes. Product Backlog items describe outcomes, not implementations.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 318,
    question: "How should a Product Owner handle metrics that show features are being used differently than designed?",
    options: [
      "Improve onboarding to teach proper usage",
      "Accept the different usage as user preference",
      "Change the features to force intended usage",
      "Investigate why usage differs and adapt accordingly"
    ],
    correctAnswer: 3,
    explanation: "Different-than-designed usage reveals learning about user needs and behavior. The Product Owner should investigate why users behave differently—better workflows, unmet needs, confusing design—and use this learning to improve the product.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 319,
    question: "What should a Product Owner do when stakeholders want to copy a competitor's entire product strategy?",
    options: [
      "Evaluate which elements align with product vision and market position",
      "Test competitor features with users before committing",
      "Copy the strategy since it's proven successful",
      "Reject it to maintain product uniqueness"
    ],
    correctAnswer: 0,
    explanation: "Competitor strategies work in their specific context and may not fit different products or markets. The Product Owner should evaluate which elements might be valuable while maintaining the product's unique value proposition and strategic positioning.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 320,
    question: "How should a Product Owner respond when the Development Team consistently finds issues in refinement that weren't considered?",
    options: [
      "View this as healthy collaboration and learning",
      "Bring in specialists earlier in the refinement process",
      "Reduce refinement frequency to better prepare",
      "Spend more time preparing items before refinement"
    ],
    correctAnswer: 2,
    explanation: "Discovering issues during refinement is exactly what refinement is for—collaborative exploration that uncovers complexities, dependencies, and considerations. This is healthy collaboration, not a failure of preparation.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 321,
    question: "What should a Product Owner do when organizational leadership wants to dictate specific Product Backlog ordering?",
    options: [
      "Escalate the conflict to higher leadership",
      "Follow leadership directives since they have authority",
      "Refuse since the Product Owner is accountable for backlog ordering",
      "Understand their priorities and incorporate them appropriately"
    ],
    correctAnswer: 1,
    explanation: "While the Product Owner is accountable for Product Backlog ordering, leadership input represents important business priorities and constraints. The Product Owner should understand these priorities and incorporate them appropriately while exercising judgment about how best to maximize value.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 322,
    question: "How should a Product Owner handle a situation where market feedback contradicts the Product Goal?",
    options: [
      "Adjust the Product Goal based on market feedback",
      "Stay committed to the original Product Goal",
      "Assess if feedback shows trends or fundamental shifts",
      "Survey more users to confirm the feedback"
    ],
    correctAnswer: 2,
    explanation: "Market feedback should inform Product Goals, but not every signal warrants goal changes. The Product Owner should evaluate whether feedback represents fundamental market changes requiring goal adjustment, or temporary trends that don't invalidate the strategic direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 323,
    question: "What should a Product Owner do when the Development Team wants to split into specialized sub-teams?",
    options: [
      "Let the Scrum Master and team decide organizational structure",
      "Support the split if it improves team effectiveness",
      "Oppose the split to maintain team cohesion",
      "Understand the implications for product delivery and integration"
    ],
    correctAnswer: 1,
    explanation: "Team structure changes can affect delivery speed, integration complexity, and collaboration. While the organization decides structure, the Product Owner should understand implications for product delivery, potential delays, and integration challenges to set appropriate expectations.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 324,
    question: "How should a Product Owner prioritize features when multiple stakeholders claim equal urgency?",
    options: [
      "Rotate priorities to maintain stakeholder relationships",
      "Evaluate actual value, risk, and strategic alignment of each feature",
      "Let stakeholders negotiate priorities among themselves",
      "Prioritize based on stakeholder seniority"
    ],
    correctAnswer: 3,
    explanation: "Claimed urgency doesn't indicate actual value. The Product Owner should evaluate each item based on genuine value delivery, risk reduction, strategic alignment, and dependency management rather than stakeholder pressure or organizational politics.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 325,
    question: "What should a Product Owner do when product analytics show a feature is heavily used but generates negative feedback?",
    options: [
      "Investigate why usage and satisfaction diverge",
      "Improve the feature based on feedback",
      "Remove the feature since users dislike it",
      "Keep the feature since usage indicates value"
    ],
    correctAnswer: 0,
    explanation: "High usage with negative feedback might indicate the feature addresses a real need but poorly, or users have no alternative. The Product Owner should investigate this contradiction to understand whether to improve implementation, find better solutions, or address unmet needs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 326,
    question: "How should a Product Owner handle pressure to build features for one-time events or campaigns?",
    options: [
      "Build them if they support strategic marketing objectives",
      "Assess value including implementation cost, maintenance burden, and strategic importance",
      "Suggest using third-party tools instead of custom development",
      "Deprioritize them since they're not sustainable features"
    ],
    correctAnswer: 3,
    explanation: "One-time features involve trade-offs between immediate campaign value and long-term maintenance burden. The Product Owner should evaluate total value considering implementation cost, maintenance overhead, potential future reuse, and strategic campaign importance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 327,
    question: "What should a Product Owner do when the Development Team says the Product Backlog has too many unclear items?",
    options: [
      "Refine upcoming items while distant ones stay less detailed",
      "Hire business analysts to clarify all items",
      "Remove all unclear items from the backlog",
      "Invest more time in refinement to clarify items"
    ],
    correctAnswer: 0,
    explanation: "Not all Product Backlog items need equal clarity—items further from Sprint Planning can remain less defined. The Product Owner should ensure upcoming items are sufficiently refined while accepting that distant items naturally have less detail. Progressive refinement is normal.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 328,
    question: "How should a Product Owner respond when users request features that would make the product more complex?",
    options: [
      "Build them since users know what they need",
      "Reject them to maintain product simplicity",
      "Evaluate whether the added value justifies increased complexity",
      "Build them but make advanced features optional"
    ],
    correctAnswer: 2,
    explanation: "Complexity is a form of cost that affects future development, user experience, and maintenance. The Product Owner should evaluate whether requested features deliver sufficient value to justify the complexity they add, potentially exploring simpler alternatives.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 329,
    question: "What should a Product Owner do when the Development Team completes Sprint work early?",
    options: [
      "End the Sprint early and start the next Sprint",
      "Discuss with the team how to use the time most valuably",
      "Add more work to the Sprint Backlog from the Product Backlog",
      "Let the team use remaining time for technical improvements or learning"
    ],
    correctAnswer: 1,
    explanation: "Early completion provides an opportunity to deliver additional value. The Product Owner and Development Team should discuss options—pulling in more backlog items, technical improvements, learning, or deeper refinement—and decide how to best use the time based on circumstances.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 330,
    question: "How should a Product Owner handle features that would benefit the business but inconvenience users?",
    options: [
      "Prioritize user experience over business needs",
      "Prioritize business needs since they ensure product viability",
      "Find ways to achieve business goals while minimizing user friction",
      "Be transparent with users about business requirements"
    ],
    correctAnswer: 2,
    explanation: "Sustainable products need both happy users and viable business models. The Product Owner should look for solutions that achieve business objectives while minimizing user friction, potentially through better design, phased rollouts, or alternative approaches.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 331,
    question: "What should a Product Owner do when stakeholders want to see detailed Sprint plans in advance?",
    options: [
      "Create tentative plans with heavy caveats about changes",
      "Provide detailed plans for the next three Sprints",
      "Refuse since Sprint Planning happens just-in-time",
      "Explain empiricism and offer appropriate forward-looking information"
    ],
    correctAnswer: 1,
    explanation: "Detailed advance Sprint plans conflict with empiricism and just-in-time planning. The Product Owner should explain why this approach doesn't work in Scrum while offering appropriate alternatives—Product Backlog ordering, directional roadmaps, or Sprint Goal themes.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 332,
    question: "How should a Product Owner prioritize performance optimization work?",
    options: [
      "Deprioritize it until users complain about performance",
      "Evaluate performance work like any other item based on value and impact",
      "Dedicate a fixed percentage of capacity to performance optimization",
      "Always prioritize performance since it affects all users"
    ],
    correctAnswer: 3,
    explanation: "Performance optimization should be evaluated based on its impact on user experience, business metrics, and competitive position. Severe performance issues might warrant high priority, while minor optimizations might be less valuable than other work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 333,
    question: "What should a Product Owner do when the Development Team identifies significant security vulnerabilities in production?",
    options: [
      "Schedule security fixes for the next Sprint",
      "Immediately halt all feature work to fix security issues",
      "Add security fixes to the Product Backlog and prioritize appropriately based on severity",
      "Let the Development Team fix critical security issues without Product Backlog prioritization"
    ],
    correctAnswer: 0,
    explanation: "Security vulnerabilities should be added to the Product Backlog and prioritized by the Product Owner based on severity, exploitation risk, and impact. Critical vulnerabilities would typically receive highest priority, while minor issues might be balanced with other work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 334,
    question: "How should a Product Owner handle requests to build features for internal teams rather than end users?",
    options: [
      "Build them since internal teams are important stakeholders",
      "Evaluate them based on their contribution to overall product value",
      "Create a separate backlog for internal features",
      "Reject them since the product should focus on end users"
    ],
    correctAnswer: 3,
    explanation: "Internal tools and features should be evaluated like any other work—do they enable better end-user value delivery, improve product quality, or provide strategic advantages? Their value comes from how they ultimately serve the product's purpose.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 335,
    question: "What should a Product Owner do when different teams working on the same product want to use different Definition of Done standards?",
    options: [
      "Let teams with the highest standards set the Definition of Done",
      "Let each team define their own standards",
      "Mandate a single Definition of Done for product consistency",
      "Establish a shared baseline with team-specific additions where appropriate"
    ],
    correctAnswer: 0,
    explanation: "When multiple teams work on one product, they should share a single Definition of Done to ensure consistent Increment quality and integration. This shared standard ensures the product maintains coherent quality regardless of which team works on which part.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 336,
    question: "How should a Product Owner respond when asked to demonstrate ROI for every Product Backlog item?",
    options: [
      "Calculate detailed ROI for all items since it's good practice",
      "Refuse since ROI calculation isn't part of Scrum",
      "Explain that some value is qualitative and offer appropriate value justification",
      "Provide ROI only for the highest-ordered items"
    ],
    correctAnswer: 2,
    explanation: "Not all value is easily quantified as ROI. Strategic positioning, risk reduction, learning, and user satisfaction have value that doesn't fit simple ROI calculations. The Product Owner should explain value using appropriate measures for each item's nature.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 337,
    question: "What should a Product Owner do when the Development Team wants to experiment with a potentially better technology?",
    options: [
      "Limit experiments to a fixed percentage of Sprint capacity",
      "Approve experiments that might improve product capabilities",
      "Reject experiments that don't directly deliver features",
      "Understand the experiment's purpose and evaluate it as a Product Backlog item"
    ],
    correctAnswer: 1,
    explanation: "Technology experiments can deliver value through improved capabilities, reduced risk, or better performance. The Product Owner should understand what the team wants to learn, expected benefits, costs, and risks, then prioritize the experiment like any other backlog item.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 338,
    question: "How should a Product Owner handle situations where quick wins are available but don't align with strategic goals?",
    options: [
      "Pursue quick wins for momentum and stakeholder satisfaction",
      "Ignore quick wins to maintain strategic focus",
      "Evaluate whether occasional quick wins justify their strategic misalignment",
      "Build quick wins only when strategic work is blocked"
    ],
    correctAnswer: 2,
    explanation: "Quick wins can build momentum, satisfy stakeholders, and demonstrate value, but too many can distract from strategic goals. The Product Owner should make conscious trade-offs about when quick wins are valuable despite strategic misalignment.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 339,
    question: "What should a Product Owner do when the Development Team says a feature request is technically impossible?",
    options: [
      "Remove the feature request from the Product Backlog",
      "Explore the underlying need and alternative solutions",
      "Challenge the team to find a way to implement it",
      "Escalate to technical architects for alternative approaches"
    ],
    correctAnswer: 1,
    explanation: "'Impossible' often means impossible with current approach, technology, or understanding. The Product Owner should explore the underlying need—perhaps different solutions could achieve the same outcome, or the impossible aspect could be decomposed or approached differently.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 340,
    question: "How should a Product Owner balance data-driven decisions with intuition and vision?",
    options: [
      "Trust intuition since vision drives innovation",
      "Use data to inform decisions while maintaining strategic vision",
      "Alternate between data-driven and vision-driven decisions",
      "Always prioritize data over intuition for objectivity"
    ],
    correctAnswer: 3,
    explanation: "Data provides evidence and learning, but vision and intuition drive innovation and strategy. The Product Owner should use data to inform and validate decisions while maintaining strategic vision, recognizing that both play important roles in product success.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 341,
    question: "What should a Product Owner do when Sprint Reviews reveal the team built something different than discussed in Sprint Planning?",
    options: [
      "Investigate why the disconnect occurred and address root causes",
      "Adjust expectations and move forward",
      "Reject the Increment and require it to be rebuilt",
      "Accept it if it provides value even though it's different"
    ],
    correctAnswer: 0,
    explanation: "Mismatched outcomes indicate communication breakdown or changing understanding. The Product Owner should investigate root causes—unclear items, insufficient collaboration, discovered complexities—and address them to prevent recurrence while determining appropriate next steps.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 342,
    question: "How should a Product Owner approach deprecating features that some users still love?",
    options: [
      "Remove features that no longer align with product strategy",
      "Communicate changes clearly and provide migration paths where possible",
      "Grandfather existing users while removing features for new users",
      "Keep all loved features regardless of maintenance burden"
    ],
    correctAnswer: 3,
    explanation: "Feature deprecation requires balancing product evolution with user impact. The Product Owner should have clear rationale, communicate changes transparently, provide reasonable notice, and offer migration paths or alternatives when possible to minimize disruption.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 343,
    question: "What should a Product Owner do when organizational changes threaten the Product Goal's viability?",
    options: [
      "Assess organizational changes and their impact on product strategy",
      "Escalate concerns to leadership and wait for direction",
      "Continue with the current Product Goal until formally changed",
      "Immediately revise the Product Goal to match new reality"
    ],
    correctAnswer: 0,
    explanation: "Organizational changes might make Product Goals obsolete or might not affect them significantly. The Product Owner should assess the impact, engage stakeholders to understand new strategic context, and determine whether Product Goal adjustment is needed.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 344,
    question: "How should a Product Owner handle Development Team concerns about repetitive work that should be automated?",
    options: [
      "Approve automation work since it improves efficiency",
      "Reject it since manual work still delivers value",
      "Evaluate automation investment against efficiency gains and opportunity costs",
      "Add automation to the Product Backlog as technical debt"
    ],
    correctAnswer: 2,
    explanation: "Automation involves upfront investment for future efficiency gains. The Product Owner should evaluate whether efficiency gains and quality improvements justify the investment compared to other valuable work, considering both short and long-term perspectives.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 345,
    question: "What should a Product Owner do when user complaints focus on one aspect while metrics show different problems?",
    options: [
      "Prioritize whichever is easier to fix",
      "Address complaints since users know their pain points",
      "Focus on metrics since they're more objective",
      "Examine complaints and metrics to develop comprehensive understanding"
    ],
    correctAnswer: 1,
    explanation: "Complaints and metrics provide different but complementary insights. Users might complain about visible issues while metrics reveal deeper systemic problems. The Product Owner should investigate both to develop comprehensive understanding and make informed prioritization decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 346,
    question: "How should a Product Owner respond when the Development Team wants to refactor code that works but is difficult to maintain?",
    options: [
      "Reject refactoring since the code works correctly",
      "Approve refactoring to improve long-term maintainability",
      "Understand maintenance challenges and evaluate refactoring as a Product Backlog item",
      "Allow refactoring only when adding new features to the same area"
    ],
    correctAnswer: 2,
    explanation: "Difficult-to-maintain code slows future development and increases risk. The Product Owner should understand how maintenance challenges affect velocity and quality, then evaluate refactoring work against other priorities based on its value in enabling future work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 347,
    question: "What should a Product Owner do when stakeholder priorities change frequently?",
    options: [
      "Set fixed planning horizons where priorities cannot change",
      "Resist changes to maintain stable priorities",
      "Accept all changes to keep stakeholders satisfied",
      "Investigate what drives volatility and guide stakeholders toward stable priorities"
    ],
    correctAnswer: 1,
    explanation: "Frequent priority changes might indicate unclear strategy, reactivity to market changes, or stakeholder misalignment. The Product Owner should understand what's driving volatility and help stakeholders establish more sustainable priorities while maintaining appropriate adaptability.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 348,
    question: "How should a Product Owner handle pressure to match competitor pricing regardless of product value?",
    options: [
      "Maintain pricing based on unique value delivered",
      "Evaluate pricing strategy considering market position and value differentiation",
      "Let sales and marketing teams determine appropriate pricing",
      "Match competitor pricing to remain competitive"
    ],
    correctAnswer: 3,
    explanation: "Pricing reflects value positioning. Matching competitor pricing might be appropriate for commodity products but could undervalue differentiated products. The Product Owner should understand market dynamics, competitive positioning, and value delivery when considering pricing strategies.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 349,
    question: "What should a Product Owner do when the Development Team identifies opportunities to reuse existing components instead of building custom solutions?",
    options: [
      "Evaluate trade-offs between reuse benefits and custom solution advantages",
      "Let the Development Team decide based on technical preferences",
      "Always prefer reuse to minimize development effort",
      "Build custom solutions to maintain full control and flexibility"
    ],
    correctAnswer: 0,
    explanation: "Reuse can accelerate delivery but might involve compromises in functionality or flexibility. The Product Owner should understand trade-offs—faster delivery versus perfect fit, reduced effort versus long-term constraints—and decide based on product needs and strategic direction.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 350,
    question: "How should a Product Owner measure success when the Product Goal focuses on learning rather than immediate business results?",
    options: [
      "Skip measurement until the product transitions to growth phase",
      "Measure learning outcomes like validated hypotheses and gained insights",
      "Insist on business metrics even during learning phases",
      "Use proxy metrics that might indicate future business value"
    ],
    correctAnswer: 3,
    explanation: "When Product Goals focus on learning, success metrics should measure learning outcomes—hypotheses validated, insights gained, user understanding improved. These learning metrics are valuable outcomes that inform future business decisions and product direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 351,
    question: "What should a Product Owner do when stakeholders request a detailed feature comparison with competitors?",
    options: [
      "Analyze competitors to inform strategy while maintaining unique positioning",
      "Delegate competitive analysis to marketing team",
      "Create comprehensive comparison and match all competitor features",
      "Refuse since focusing on competitors undermines product vision"
    ],
    correctAnswer: 0,
    explanation: "Competitive analysis provides market context and can inform strategy, but blindly matching competitors leads to undifferentiated products. The Product Owner should understand the competitive landscape while making strategic choices that deliver unique value aligned with the Product Goal.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 352,
    question: "How should a Product Owner handle a situation where the Development Team wants to adopt pair programming?",
    options: [
      "Allow it only for complex or risky work",
      "Reject it since it reduces apparent productivity by 50%",
      "Support it if the team believes it improves quality and knowledge sharing",
      "Require proof through a controlled experiment first"
    ],
    correctAnswer: 0,
    explanation: "Development practices are the Development Team's decision. If they believe pair programming will improve quality, reduce bugs, or enhance knowledge sharing, the Product Owner should support their professional judgment while understanding how it might affect delivery patterns.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 353,
    question: "What should a Product Owner do when users request a feature that would create significant data privacy concerns?",
    options: [
      "Explore how to achieve user needs while protecting privacy",
      "Build it but make it optional for privacy-conscious users",
      "Build it since users are requesting it",
      "Reject it outright due to privacy concerns"
    ],
    correctAnswer: 0,
    explanation: "User requests often reveal underlying needs that might be satisfied differently. The Product Owner should understand what users are trying to accomplish and explore solutions that meet those needs while maintaining appropriate privacy protections and regulatory compliance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 354,
    question: "How should a Product Owner prioritize work when the product has significant usability issues but stakeholders want new features?",
    options: [
      "Evaluate the impact of usability issues versus value of new features",
      "Alternate between usability fixes and new features",
      "Build new features since stakeholders have requested them",
      "Fix usability issues first since they affect all users"
    ],
    correctAnswer: 0,
    explanation: "Both usability and new features deliver value. The Product Owner should evaluate the impact of usability issues (how many users affected, severity, workarounds available) against the value of new features to make informed prioritization decisions that maximize overall product value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 355,
    question: "What should a Product Owner do when the Development Team consistently underestimates complex items?",
    options: [
      "Accept that complex items are hard to estimate accurately",
      "Add a buffer to all team estimates",
      "Investigate why complexity is being underestimated and address root causes",
      "Break down complex items more thoroughly before estimation"
    ],
    correctAnswer: 0,
    explanation: "Consistent underestimation of complex items indicates incomplete understanding or missing considerations. The Product Owner should examine patterns with the team—is it specific types of complexity, missing dependencies, or unclear requirements—and address the root causes rather than just adding buffers.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 356,
    question: "How should a Product Owner respond when asked to commit to delivering specific features by a fixed date for a marketing campaign?",
    options: [
      "Provide a forecast with clear assumptions and contingency plans",
      "Suggest delaying the marketing campaign until features are complete",
      "Commit to the date to support the marketing campaign",
      "Refuse any commitments since Scrum is empirical"
    ],
    correctAnswer: 0,
    explanation: "Marketing campaigns require coordination. The Product Owner should provide an evidence-based forecast, clearly state assumptions and risks, and work together on contingency plans. This might include identifying must-have versus nice-to-have features or alternative timing strategies.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 357,
    question: "What should a Product Owner do when metrics show users abandoning the product during onboarding?",
    options: [
      "Simplify the product to reduce onboarding complexity",
      "Add incentives to encourage users to complete onboarding",
      "Improve onboarding tutorials and documentation",
      "Investigate why users abandon and what barriers they encounter"
    ],
    correctAnswer: 3,
    explanation: "Abandonment during onboarding could stem from many causes—confusing UX, unmet expectations, technical issues, or lack of perceived value. The Product Owner should investigate the specific barriers users encounter before deciding on solutions like better tutorials, simpler design, or clearer value proposition.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 358,
    question: "How should a Product Owner handle the Definition of Done when it conflicts with time-to-market pressure?",
    options: [
      "Create exceptions for high-priority features",
      "Let stakeholders decide whether to compromise quality",
      "Temporarily relax the Definition of Done to meet deadlines",
      "Maintain the Definition of Done and adjust scope or timing"
    ],
    correctAnswer: 3,
    explanation: "The Definition of Done ensures quality and reduces technical debt. Rather than compromising quality standards, the Product Owner should work with stakeholders to adjust scope (deliver fewer features fully Done) or timing to maintain sustainable delivery and product quality.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 359,
    question: "What should a Product Owner do when the Development Team identifies an opportunity to consolidate redundant code?",
    options: [
      "Defer it until all planned features are complete",
      "Let the team decide since it's technical work",
      "Approve it immediately as good technical practice",
      "Evaluate the consolidation effort against other priorities based on value"
    ],
    correctAnswer: 3,
    explanation: "Code consolidation can reduce maintenance burden and future development time, delivering real value. The Product Owner should understand the expected benefits and effort, then prioritize this work alongside other items based on its value contribution to sustainable product development.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 360,
    question: "How should a Product Owner approach feature requests from paying customers versus free users?",
    options: [
      "Consider strategic value including revenue, growth, and product direction",
      "Build separate product versions for different user types",
      "Prioritize paying customer requests since they generate revenue",
      "Treat all requests equally regardless of user type"
    ],
    correctAnswer: 0,
    explanation: "While paying customers are important, product decisions should consider multiple factors—revenue impact, strategic fit, user growth, and product vision. Sometimes free user features drive growth that leads to more paying customers. The Product Owner makes strategic trade-offs based on overall product value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 361,
    question: "What should a Product Owner do when Sprint Reviews reveal stakeholders have unrealistic expectations about product capabilities?",
    options: [
      "Ignore unrealistic expectations and continue with planned work",
      "Replace stakeholders with more technically savvy ones",
      "Build features to meet their expectations regardless of feasibility",
      "Educate stakeholders on technical constraints and realistic capabilities"
    ],
    correctAnswer: 3,
    explanation: "Unrealistic expectations often stem from misunderstanding technical constraints or product architecture. The Product Owner should educate stakeholders about what's feasible, why, and what alternatives might achieve their goals. This helps align expectations with reality while exploring valuable solutions.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 362,
    question: "How should a Product Owner handle a situation where early success metrics look good but team morale is declining?",
    options: [
      "Focus on metrics since they indicate product success",
      "Investigate morale issues as they affect sustainable delivery",
      "Accept that high performance sometimes requires sacrifice",
      "Reduce expectations to ease team pressure"
    ],
    correctAnswer: 1,
    explanation: "Declining morale threatens sustainable delivery and future product success. The Product Owner should investigate causes—unsustainable pace, lack of autonomy, unclear direction, technical debt—and address them. Short-term metrics don't guarantee long-term success if the team isn't sustainable.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 363,
    question: "What should a Product Owner do when the product has accumulated so much technical debt that velocity is decreasing?",
    options: [
      "Dedicate several Sprints exclusively to technical debt reduction",
      "Accept lower velocity as the new normal",
      "Add more developers to compensate for reduced velocity",
      "Prioritize technical debt reduction alongside features based on impact"
    ],
    correctAnswer: 3,
    explanation: "Technical debt that reduces velocity is preventing value delivery. Rather than dedicating entire Sprints (which delays all features), the Product Owner should prioritize high-impact debt reduction in the Product Backlog, balancing it with feature work to improve velocity while continuing to deliver value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 364,
    question: "How should a Product Owner respond when users find creative workarounds that bypass intended product workflows?",
    options: [
      "Fix the product to prevent workarounds",
      "Investigate why users need workarounds",
      "Document the workarounds as alternative usage patterns",
      "Educate users on proper product usage"
    ],
    correctAnswer: 1,
    explanation: "User workarounds reveal unmet needs or product friction. Rather than simply preventing them, the Product Owner should investigate what problems users are solving and why the intended workflow doesn't work. This insight can lead to product improvements that better serve user needs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 365,
    question: "What should a Product Owner do when organizational changes result in new stakeholders with different priorities?",
    options: [
      "Engage new stakeholders to understand and align priorities",
      "Wait for stakeholders to reach consensus before making changes",
      "Continue with existing priorities until formally directed to change",
      "Immediately pivot to align with new stakeholder priorities"
    ],
    correctAnswer: 0,
    explanation: "New stakeholders may have different perspectives and priorities. The Product Owner should proactively engage them, understand their viewpoints, and help align them on Product Goals and priorities. This ensures the product continues to deliver value aligned with organizational objectives.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 366,
    question: "How should a Product Owner handle pressure to add features that would significantly increase product complexity?",
    options: [
      "Evaluate whether the value justifies the complexity cost",
      "Add features but hide them in advanced settings",
      "Add the features since stakeholders are requesting them",
      "Reject features that increase complexity"
    ],
    correctAnswer: 0,
    explanation: "Complexity is a real cost affecting future development, user experience, and maintenance. The Product Owner should evaluate whether requested features deliver sufficient value to justify the complexity they add, exploring simpler alternatives or questioning whether the value is worth the long-term cost.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 367,
    question: "What should a Product Owner do when the Development Team reports that automated tests are becoming difficult to maintain?",
    options: [
      "Reduce test coverage to decrease maintenance burden",
      "Understand the issues and prioritize test suite improvements",
      "Hire additional QA resources to maintain tests",
      "Accept test maintenance as necessary overhead"
    ],
    correctAnswer: 1,
    explanation: "Difficult-to-maintain tests indicate issues that will worsen over time, potentially leading to abandoned tests and quality problems. The Product Owner should understand what makes tests hard to maintain and prioritize improvements that enable sustainable quality practices.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 368,
    question: "How should a Product Owner approach requests to build features for potential future customers who haven't committed?",
    options: [
      "Evaluate strategic value considering probability and potential impact",
      "Build features only after securing customer commitments",
      "Build the features to attract future customers",
      "Reject speculative features and focus on current user needs"
    ],
    correctAnswer: 0,
    explanation: "Speculative features involve risk and opportunity. The Product Owner should evaluate the strategic value considering the probability of attracting customers, potential revenue, strategic positioning, and opportunity cost. Sometimes investing in future customers makes strategic sense, sometimes current needs take priority.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 369,
    question: "What should a Product Owner do when Sprint Reviews become routine demonstrations with minimal stakeholder engagement?",
    options: [
      "Restructure reviews to encourage participation and meaningful feedback",
      "Replace Sprint Reviews with written status reports",
      "Continue reviews as scheduled to maintain Scrum ceremonies",
      "Cancel Sprint Reviews until stakeholders can engage"
    ],
    correctAnswer: 0,
    explanation: "Sprint Reviews should be collaborative working sessions, not passive demonstrations. The Product Owner should restructure reviews to encourage engagement—perhaps focusing on specific decisions needed, demonstrating in user contexts, or explicitly soliciting input on priorities—to make them valuable for all participants.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 370,
    question: "How should a Product Owner handle situations where the most valuable features require capabilities the team hasn't built before?",
    options: [
      "Invest in learning and exploration to build team capability",
      "Outsource these features to external vendors",
      "Deprioritize these features until the team develops necessary skills",
      "Hire specialists who already have the required capabilities"
    ],
    correctAnswer: 0,
    explanation: "New capabilities enable valuable features and expand what the team can deliver. The Product Owner should evaluate investing in learning, spikes, or experimentation to build team capability. This investment enables current features and future possibilities, though it must be balanced against other priorities.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 371,
    question: "What should a Product Owner do when product analytics show a feature is rarely used despite significant development investment?",
    options: [
      "Remove the feature immediately to reduce complexity",
      "Investigate why usage is low before deciding on next steps",
      "Promote the feature through marketing and user education",
      "Accept that not all features will be heavily used"
    ],
    correctAnswer: 1,
    explanation: "Low usage could indicate poor discoverability, unmet user needs, better alternatives, or wrong audience. The Product Owner should investigate why—through user research or analytics—before deciding whether to improve discoverability, redesign the feature, or remove it.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 372,
    question: "How should a Product Owner respond when the Development Team wants to replace a working technology with a newer alternative?",
    options: [
      "Understand the business case, benefits, and migration effort",
      "Defer the decision to technical leadership",
      "Reject the change since current technology works",
      "Approve it to keep the team's skills current"
    ],
    correctAnswer: 0,
    explanation: "Technology changes involve trade-offs. The Product Owner should understand the business case—what new capabilities or efficiencies does it enable, what are the migration risks and costs, what's the long-term maintenance impact—and evaluate it against other priorities based on overall value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 373,
    question: "What should a Product Owner do when stakeholders want features that would lock users into the product ecosystem?",
    options: [
      "Consider the ethical implications and long-term brand impact",
      "Let marketing and sales teams decide based on business strategy",
      "Build the features since they increase customer retention",
      "Reject them to maintain user freedom and trust"
    ],
    correctAnswer: 0,
    explanation: "Lock-in features can increase short-term retention but may damage long-term trust and brand reputation. The Product Owner should consider ethical implications, user rights, competitive positioning, and whether sustainable success comes from lock-in or genuine value delivery.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 374,
    question: "How should a Product Owner handle the Product Backlog when multiple teams are working on the same product?",
    options: [
      "Create separate backlogs for each team to work independently",
      "Maintain a single Product Backlog with one Product Owner",
      "Let each team maintain their own section of the backlog",
      "Create a hierarchical backlog structure with team-specific items"
    ],
    correctAnswer: 1,
    explanation: "Multiple teams working on one product should work from a single Product Backlog with one Product Owner to ensure unified prioritization and coherent product development. The Product Owner may delegate ordering authority but remains accountable for the Product Backlog.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 375,
    question: "What should a Product Owner do when user research reveals that a core product assumption was wrong?",
    options: [
      "Validate the research and evaluate strategic implications before deciding",
      "Conduct more research until findings align with assumptions",
      "Continue with current direction since changing is costly",
      "Immediately pivot based on the research findings"
    ],
    correctAnswer: 0,
    explanation: "Research that contradicts core assumptions is critical learning. The Product Owner should validate the findings, understand their strategic implications, and evaluate whether they warrant pivoting, adjusting direction, or continuing with modifications. This is empiricism—making decisions based on evidence.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 376,
    question: "How should a Product Owner prioritize work when there are critical bugs in production?",
    options: [
      "Evaluate bug severity and impact against feature value",
      "Create a separate bug-fixing Sprint",
      "Always prioritize critical bugs over all feature work",
      "Continue with planned features and fix bugs in parallel"
    ],
    correctAnswer: 0,
    explanation: "Even critical bugs should go through Product Backlog prioritization. The Product Owner should evaluate severity, user impact, workarounds, and business consequences against feature value. Truly critical bugs affecting many users would naturally rise to top priority, but all work should be prioritized based on value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 377,
    question: "What should a Product Owner do when the Development Team identifies technical risks in the current architecture?",
    options: [
      "Understand risks and prioritize based on likelihood and impact",
      "Hire consultants to resolve technical risks",
      "Continue with planned work until risks materialize",
      "Immediately stop feature work to address risks"
    ],
    correctAnswer: 0,
    explanation: "Technical risks should be understood and prioritized like any other work. The Product Owner should understand the risk likelihood, potential impact, and mitigation options, then prioritize risk reduction appropriately. Some risks warrant immediate attention, others can be monitored and addressed over time.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 378,
    question: "How should a Product Owner handle feature requests that would benefit internal teams but not end users?",
    options: [
      "Evaluate them based on how they ultimately enable end-user value",
      "Create a separate internal product backlog",
      "Reject them since the product should focus on end users",
      "Build them since internal teams are stakeholders"
    ],
    correctAnswer: 0,
    explanation: "Internal tools and features should be evaluated based on how they ultimately serve end users—do they enable better support, faster feature delivery, higher quality, or better user understanding? Their value comes from enabling the team to deliver better end-user value.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 379,
    question: "What should a Product Owner do when stakeholders want to see a detailed product roadmap for the next year?",
    options: [
      "Provide a directional roadmap showing themes and objectives with clear uncertainty",
      "Commit only to the next quarter and refuse longer planning",
      "Create a detailed roadmap with specific features and dates",
      "Refuse since long-term planning contradicts empiricism"
    ],
    correctAnswer: 0,
    explanation: "While detailed long-term plans conflict with empiricism, stakeholders often need forward-looking information for strategic planning. The Product Owner can provide directional roadmaps showing intended themes, objectives, and sequence while clearly communicating uncertainty and expectation that details will evolve.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 380,
    question: "How should a Product Owner respond when the Development Team says they need to slow down to improve quality?",
    options: [
      "Support the team in addressing quality systematically",
      "Investigate root causes of quality issues rather than just slowing down",
      "Hire QA specialists to maintain quality without slowing development",
      "Reject the request since stakeholders expect current velocity"
    ],
    correctAnswer: 3,
    explanation: "Simply slowing down doesn't necessarily improve quality. The Product Owner should investigate root causes—insufficient testing, unclear requirements, technical debt, rushing—and address them systematically. Sometimes this means temporary slowdown, sometimes different practices, sometimes addressing specific technical issues.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 381,
    question: "What should a Product Owner do when market conditions make the current Product Goal obsolete mid-execution?",
    options: [
      "Continue with the current goal to avoid disruption",
      "Define a new Product Goal aligned with new market conditions",
      "Pause all work until the market stabilizes",
      "Let the Development Team continue while goals are reassessed"
    ],
    correctAnswer: 1,
    explanation: "Product Goals should reflect current market reality and business strategy. When market conditions fundamentally change, the Product Owner should engage stakeholders to define a new Product Goal that responds to new conditions. Continuing with obsolete goals wastes effort on irrelevant outcomes.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 382,
    question: "How should a Product Owner handle situations where competitors release features the product was planning to build?",
    options: [
      "Cancel those features and focus on differentiation",
      "Evaluate whether the features still provide value given competition",
      "Build the features anyway since they were planned",
      "Accelerate development of those features to catch up"
    ],
    correctAnswer: 3,
    explanation: "Competitor actions change the value equation. Features that provided competitive advantage might now just achieve parity. The Product Owner should re-evaluate whether building these features still delivers value, or if resources would be better spent on differentiation or addressing different needs.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 383,
    question: "What should a Product Owner do when the Development Team wants to adopt test-driven development (TDD)?",
    options: [
      "Support the team's professional development practice decision",
      "Reject it since it initially slows feature delivery",
      "Require proof that TDD improves outcomes before allowing it",
      "Allow it only for critical or complex features"
    ],
    correctAnswer: 0,
    explanation: "Development practices are the Development Team's responsibility. If they believe TDD will improve quality, reduce bugs, or enhance design, the Product Owner should support their professional judgment. The Product Owner's role is understanding how practices affect delivery patterns, not dictating how the team works.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 384,
    question: "How should a Product Owner prioritize work when facing both feature requests and platform migration needs?",
    options: [
      "Pause migration to continue feature delivery",
      "Evaluate migration urgency and value against feature priorities",
      "Run separate teams for migration and features",
      "Complete platform migration before any new features"
    ],
    correctAnswer: 3,
    explanation: "Platform migration is work that should be prioritized like any other based on its urgency, value, and risks. Sometimes migration enables future features or addresses critical technical risks warranting high priority. Sometimes features deliver more immediate value. Context determines the right balance.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 385,
    question: "What should a Product Owner do when users request features that would make the product more like competitors?",
    options: [
      "Maintain product differentiation by refusing competitive features",
      "Understand the underlying needs and evaluate strategic positioning",
      "Build the features but add unique twists for differentiation",
      "Build the features to meet user expectations"
    ],
    correctAnswer: 3,
    explanation: "User requests for competitive features might indicate unmet needs or preference for familiar patterns. The Product Owner should understand what problems users are trying to solve and make strategic decisions about whether to match competitors, differentiate through alternative solutions, or maintain unique positioning.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 386,
    question: "How should a Product Owner handle a situation where the Sprint Goal is at risk due to unexpected technical challenges?",
    options: [
      "Cancel the Sprint and start fresh with better understanding",
      "Adjust scope while trying to preserve Sprint Goal intent",
      "Accept failure and plan better for the next Sprint",
      "Extend the Sprint to allow completion of the Sprint Goal"
    ],
    correctAnswer: 3,
    explanation: "When unexpected challenges threaten the Sprint Goal, the Product Owner and Development Team should collaborate to adjust scope while preserving Sprint Goal intent. This might mean completing fewer items fully or finding alternative ways to achieve the goal's purpose within the Sprint timebox.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 387,
    question: "What should a Product Owner do when analytics show users engaging with the product differently than intended?",
    options: [
      "Change the product to enforce intended usage patterns",
      "Investigate unexpected usage to understand user needs and behavior",
      "Improve onboarding to teach users the intended workflow",
      "Accept that users will find their own ways to use products"
    ],
    correctAnswer: 1,
    explanation: "Unexpected usage patterns reveal user needs and mental models. Rather than forcing intended patterns, the Product Owner should investigate why users behave differently—their unexpected usage might reveal better workflows, unmet needs, or product design issues worth addressing.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 388,
    question: "How should a Product Owner respond when stakeholders request features based on individual opinions rather than data?",
    options: [
      "Build the features since stakeholders have valuable insights",
      "Seek to understand the insights behind opinions and validate appropriately",
      "Require stakeholders to provide supporting data for all requests",
      "Reject all requests not backed by data"
    ],
    correctAnswer: 3,
    explanation: "Stakeholder opinions often contain valuable domain expertise and market insights not yet captured in data. The Product Owner should understand the reasoning behind opinions and determine appropriate validation—sometimes through data, sometimes through experimentation, sometimes trusting expert judgment in their domain.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 389,
    question: "What should a Product Owner do when the Development Team identifies opportunities for automation that would reduce manual work?",
    options: [
      "Focus on feature delivery and defer automation",
      "Evaluate automation value against other priorities",
      "Let the team implement automation during slack time",
      "Prioritize automation to improve team efficiency"
    ],
    correctAnswer: 3,
    explanation: "Automation can deliver real value through time savings, reduced errors, and faster feedback. The Product Owner should understand the investment required and ongoing benefits, then prioritize automation work alongside other items based on its value in enabling sustainable, efficient product development.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 390,
    question: "How should a Product Owner handle pressure to match competitor pricing regardless of value delivered?",
    options: [
      "Maintain pricing based on unique value proposition",
      "Evaluate pricing strategy considering positioning and value delivery",
      "Let sales and marketing teams determine pricing strategy",
      "Match competitor pricing to remain competitive"
    ],
    correctAnswer: 3,
    explanation: "Pricing reflects value positioning and business strategy. The Product Owner should understand market dynamics, competitive positioning, and value differentiation when considering pricing. Sometimes matching competitors makes sense, sometimes premium pricing reflects unique value, sometimes lower pricing enables market penetration.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 391,
    question: "What should a Product Owner do when Sprint Planning consistently takes longer than the timeboxed duration?",
    options: [
      "Enforce the timebox strictly regardless of planning completeness",
      "Investigate why planning takes too long and address root causes",
      "Reduce the number of items considered in Sprint Planning",
      "Extend the timebox to allow thorough planning"
    ],
    correctAnswer: 3,
    explanation: "Consistently exceeding the timebox indicates issues—unclear items, insufficient refinement, unrealistic expectations, or poor planning practices. The Product Owner should investigate root causes with the team and Scrum Master and address them rather than just extending timeboxes or cutting planning short.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 392,
    question: "How should a Product Owner prioritize accessibility features when they benefit a small percentage of users?",
    options: [
      "Prioritize them based on regulatory requirements only",
      "Consider accessibility as part of product quality for all users",
      "Build accessibility features only when specifically requested",
      "Deprioritize them due to limited user impact"
    ],
    correctAnswer: 3,
    explanation: "Accessibility often benefits more users than expected, improves general usability, expands market reach, and is frequently required by law. Rather than treating it as niche, the Product Owner should consider accessibility part of product quality, potentially incorporating it into the Definition of Done.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 393,
    question: "What should a Product Owner do when the Development Team wants to investigate emerging technologies that might benefit the product?",
    options: [
      "Support all learning and technology exploration",
      "Evaluate investigation value against other priorities",
      "Allow investigation during personal learning time",
      "Reject investigations that don't deliver immediate features"
    ],
    correctAnswer: 3,
    explanation: "Technology investigation can deliver value through new capabilities, improved performance, or reduced costs. The Product Owner should understand what the team wants to explore, expected benefits, investigation time needed, and risks, then prioritize this work like any other backlog item based on value.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 394,
    question: "How should a Product Owner handle a situation where user complaints don't align with usage data?",
    options: [
      "Trust user complaints over potentially misleading data",
      "Investigate the discrepancy to understand the complete picture",
      "Collect more data until it aligns with complaints",
      "Trust the data over subjective complaints"
    ],
    correctAnswer: 3,
    explanation: "Discrepancies between complaints and data reveal important insights. Perhaps complaints represent a vocal minority, edge cases, or emerging issues not yet reflected in data. Or data doesn't capture important quality-of-life issues. The Product Owner should investigate to understand both perspectives comprehensively.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 395,
    question: "What should a Product Owner do when stakeholders want to add features to differentiate from competitors but users haven't requested them?",
    options: [
      "Focus only on user-requested features",
      "Evaluate strategic value considering competitive positioning and user needs",
      "Test differentiation features with users before committing",
      "Build differentiation features to gain competitive advantage"
    ],
    correctAnswer: 3,
    explanation: "Differentiation features involve strategic trade-offs. They might create competitive advantage and attract new users, or they might add complexity users don't value. The Product Owner should evaluate strategic benefits, potential user value, and opportunity costs to make informed prioritization decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 396,
    question: "How should a Product Owner respond when the Development Team says a feature is technically complete but doesn't meet the Definition of Done?",
    options: [
      "Accept the feature since core functionality is complete",
      "Reject the feature as incomplete until Definition of Done is met",
      "Adjust the Definition of Done for this specific feature",
      "Release the feature with known limitations documented"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done is not negotiable for individual items. If work doesn't meet the Definition of Done, it's not complete and cannot be considered part of the Increment. The Product Owner should work with the team to understand what's needed to fully complete the item.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 397,
    question: "What should a Product Owner do when multiple stakeholders each want to be the primary contact for product decisions?",
    options: [
      "Choose the most senior stakeholder as primary contact",
      "Establish clear decision-making authority and communication protocols",
      "Make all decisions independently to avoid stakeholder conflicts",
      "Rotate primary contact role among stakeholders"
    ],
    correctAnswer: 3,
    explanation: "Clear decision-making authority and communication protocols prevent confusion and conflict. The Product Owner should work with organizational leadership to establish who has authority for what decisions, how stakeholders provide input, and how the Product Owner synthesizes input into coherent direction.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 398,
    question: "How should a Product Owner handle features that were valuable when planned but are now less important due to market changes?",
    options: [
      "Complete them since they were committed to stakeholders",
      "Cancel them and reprioritize based on current value",
      "Finish them quickly then move to more valuable work",
      "Let the Development Team decide whether to continue"
    ],
    correctAnswer: 1,
    explanation: "Product Backlog ordering should reflect current value, not historical decisions. When market changes reduce feature value, the Product Owner should reprioritize based on current understanding. Past commitments shouldn't drive building low-value features when higher-value alternatives exist.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 399,
    question: "What should a Product Owner do when users request features that would require significant changes to the business model?",
    options: [
      "Build the features and adapt the business model",
      "Evaluate strategic implications with business stakeholders",
      "Test willingness to pay before changing business model",
      "Reject features that require business model changes"
    ],
    correctAnswer: 3,
    explanation: "Features requiring business model changes have strategic implications beyond product functionality. The Product Owner should engage business stakeholders to evaluate whether changes align with strategy, whether the features justify model evolution, and what risks and opportunities exist.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 400,
    question: "How should a Product Owner prioritize work when there are dependencies between features being built by different teams?",
    options: [
      "Build all dependency features first before dependent features",
      "Minimize dependencies through architecture and backlog ordering",
      "Accept dependencies and manage them through communication",
      "Coordinate team schedules to build dependent features simultaneously"
    ],
    correctAnswer: 3,
    explanation: "While dependencies sometimes can't be avoided, the Product Owner should minimize them through thoughtful Product Backlog ordering and architectural choices. When dependencies exist, they should be made transparent and managed through clear ordering and team coordination.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 401,
    question: "What should a Product Owner do when the Development Team consistently delivers high-quality work but slower than stakeholder expectations?",
    options: [
      "Pressure the team to increase velocity",
      "Educate stakeholders on the team's sustainable pace and quality focus",
      "Add more developers to increase delivery capacity",
      "Reduce quality standards to increase delivery speed"
    ],
    correctAnswer: 1,
    explanation: "Sustainable, high-quality delivery is more valuable than fast, low-quality work. The Product Owner should help stakeholders understand the value of quality, the team's capacity, and realistic expectations. If faster delivery is critical, scope adjustment is more sustainable than pressuring the team.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 402,
    question: "How should a Product Owner handle a situation where early adopters love features that might not appeal to mainstream users?",
    options: [
      "Simplify features for mainstream appeal",
      "Make strategic choices based on product lifecycle and target market",
      "Build separate product versions for different user segments",
      "Maintain features that satisfy early adopters"
    ],
    correctAnswer: 3,
    explanation: "Products evolve through different user segments. The Product Owner should make strategic choices about target markets based on product lifecycle and business goals. Early products might focus on early adopters, growth products on mainstream users. These are conscious strategic decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 403,
    question: "What should a Product Owner do when Sprint Reviews reveal that stakeholders expected different outcomes than what was delivered?",
    options: [
      "Rebuild the features to match stakeholder expectations",
      "Improve Sprint Goal clarity and stakeholder communication",
      "Accept misalignment as inevitable in complex development",
      "Require stakeholders to review detailed specifications before Sprints"
    ],
    correctAnswer: 1,
    explanation: "Misaligned expectations indicate communication gaps. The Product Owner should improve Sprint Goal clarity, stakeholder engagement during Sprints, and communication about what's being built and why. Prevention through better communication is more effective than correction after delivery.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 404,
    question: "How should a Product Owner respond when users request features to solve problems caused by poor UX design?",
    options: [
      "Build the requested features to address user pain points",
      "Fix the underlying UX issues instead of adding features",
      "Build features first, then improve UX when time permits",
      "Explain UX issues to users and provide workarounds"
    ],
    correctAnswer: 1,
    explanation: "Addressing root causes is more valuable than building compensatory features. If poor UX creates problems, fixing the UX improves the product for all users and prevents accumulating features that work around design issues. The Product Owner should prioritize addressing root causes.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 405,
    question: "What should a Product Owner do when the Development Team wants to refactor code that works but violates coding standards?",
    options: [
      "Reject refactoring since the code works correctly",
      "Support refactoring to maintain code quality standards",
      "Evaluate refactoring value against other priorities",
      "Refactor only when adding new features to that code"
    ],
    correctAnswer: 2,
    explanation: "Code standard violations can increase maintenance costs, slow future changes, and cause bugs. The Product Owner should understand the implications and prioritize refactoring work based on its value in enabling sustainable development, balanced against other priorities.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 406,
    question: "How should a Product Owner handle pressure to build features that would create competitive advantage but potentially harm users?",
    options: [
      "Build them since competitive advantage is valuable",
      "Reject them based on ethical concerns",
      "Evaluate long-term brand and trust implications",
      "Build them but make them optional for users"
    ],
    correctAnswer: 2,
    explanation: "Features that harm users damage long-term trust and brand value. The Product Owner should consider ethical implications, potential user harm, brand reputation, and whether sustainable success comes from practices that benefit users or practices that exploit them.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 407,
    question: "What should a Product Owner do when the Definition of Done becomes outdated due to new quality requirements?",
    options: [
      "Maintain the current Definition of Done for consistency",
      "Update the Definition of Done to reflect new quality standards",
      "Create exceptions for items with new requirements",
      "Gradually phase in new standards over multiple Sprints"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done should evolve to reflect current quality standards and organizational expectations. When new requirements emerge, the Product Owner should work with the team and organization to update the Definition of Done appropriately, even though this may initially impact velocity.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 408,
    question: "How should a Product Owner prioritize infrastructure improvements that don't directly deliver user features?",
    options: [
      "Deprioritize them since they don't benefit users directly",
      "Prioritize them based on how they enable future value delivery",
      "Dedicate a fixed percentage of capacity to infrastructure",
      "Build infrastructure only when feature work is blocked"
    ],
    correctAnswer: 1,
    explanation: "Infrastructure improvements deliver value by enabling better performance, reliability, scalability, or faster feature development. The Product Owner should evaluate them based on how they enable future value delivery and prioritize accordingly, just like any other work.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 409,
    question: "What should a Product Owner do when stakeholders disagree on whether the product is ready for release?",
    options: [
      "Release if the Product Owner believes it's ready",
      "Wait until all stakeholders agree before releasing",
      "Define clear release criteria in advance to guide decisions",
      "Release and address stakeholder concerns post-launch"
    ],
    correctAnswer: 2,
    explanation: "Release decisions should be based on clear criteria—quality standards, feature completeness, market timing—established in advance. The Product Owner makes release decisions within this framework, though significant stakeholder concerns should be understood and addressed.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 410,
    question: "How should a Product Owner handle a situation where velocity is high but stakeholder satisfaction is declining?",
    options: [
      "Maintain high velocity since metrics show productivity",
      "Investigate stakeholder dissatisfaction despite high delivery",
      "Slow down to improve stakeholder relationships",
      "Focus on better stakeholder communication"
    ],
    correctAnswer: 1,
    explanation: "High velocity with declining satisfaction suggests misalignment between what's being built and what stakeholders value. The Product Owner should investigate whether priorities are wrong, communication is poor, or velocity is being achieved through shortcuts that compromise value.",
    domain: "Stakeholder Management",
    difficulty: "Foundation"
  },
  {
    id: 411,
    question: "What should a Product Owner do when the Development Team identifies an opportunity to eliminate waste in their development process?",
    options: [
      "Support process improvements that increase efficiency",
      "Focus on feature delivery rather than process changes",
      "Evaluate the improvement value and time investment",
      "Defer to the Scrum Master for process improvement decisions"
    ],
    correctAnswer: 2,
    explanation: "Process improvements can deliver real value through time savings and better quality. The Product Owner should understand the expected benefits and investment required, then evaluate whether the improvement work should be prioritized based on its value in enabling better product development.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 412,
    question: "How should a Product Owner respond when market research shows the product solving a different problem than originally intended?",
    options: [
      "Pivot to focus on the problem users are actually solving",
      "Educate users on the intended problem space",
      "Investigate the finding and evaluate strategic implications",
      "Continue with original intent since the product was designed for it"
    ],
    correctAnswer: 2,
    explanation: "Users solving unexpected problems reveals valuable market insight. The Product Owner should investigate this finding—is there a bigger opportunity? Should the product pivot? Can it serve both use cases?—and evaluate strategic implications before deciding direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 413,
    question: "What should a Product Owner do when the Development Team reports that technical debt is preventing them from delivering certain types of features?",
    options: [
      "Find alternative features that can be delivered despite debt",
      "Prioritize necessary technical debt reduction to enable future features",
      "Accept that some features cannot be delivered",
      "Add more developers to work around technical debt"
    ],
    correctAnswer: 1,
    explanation: "Technical debt that blocks valuable features makes debt reduction valuable. The Product Owner should prioritize the debt work needed to unblock important features, understanding it as enabling work that delivers value by making future value delivery possible.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 414,
    question: "How should a Product Owner handle requests for features that would require users to change their current workflows significantly?",
    options: [
      "Reject them to avoid disrupting users",
      "Build them since they represent product evolution",
      "Evaluate whether the workflow change delivers sufficient value",
      "Phase in changes gradually to minimize disruption"
    ],
    correctAnswer: 2,
    explanation: "Workflow changes impose costs on users—learning time, disruption, potential resistance. The Product Owner should evaluate whether the value delivered justifies these costs and disruption. Sometimes transformation is valuable, sometimes minimizing disruption through incremental change is better.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 415,
    question: "What should a Product Owner do when Sprint Planning reveals that the top priority items aren't ready for development?",
    options: [
      "Cancel Sprint Planning until items are ready",
      "Select lower-priority items that are ready",
      "Use Sprint Planning time to refine top-priority items",
      "Reduce Sprint Goal ambition to match available ready items"
    ],
    correctAnswer: 1,
    explanation: "If high-priority items aren't ready, the team should select lower-priority ready items rather than taking unclear work or spending Sprint Planning on refinement. This indicates insufficient refinement beforehand and should trigger improved ongoing refinement practices.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 416,
    question: "How should a Product Owner prioritize features when facing trade-offs between acquisition of new users and retention of existing users?",
    options: [
      "Focus on acquisition since growth is critical",
      "Focus on retention since existing users drive revenue",
      "Make strategic choices based on business model and lifecycle stage",
      "Balance equally between acquisition and retention features"
    ],
    correctAnswer: 2,
    explanation: "The right balance depends on business model, product lifecycle, and market conditions. Early products might emphasize acquisition, mature products retention. The Product Owner makes strategic choices based on what drives sustainable business success in current context.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 417,
    question: "What should a Product Owner do when the Development Team consistently finds ambiguity in Product Backlog items during Sprint execution?",
    options: [
      "Write more detailed specifications before Sprint Planning",
      "Improve collaboration and clarification processes during Sprints",
      "Invest more time in Product Backlog refinement",
      "Accept that some ambiguity is inevitable in complex work"
    ],
    correctAnswer: 2,
    explanation: "Consistent ambiguity during Sprints indicates insufficient refinement. The Product Owner should invest more time in ongoing refinement with the team before Sprint Planning to clarify items, answer questions, and ensure upcoming work is sufficiently understood.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 418,
    question: "How should a Product Owner handle a situation where regulatory requirements conflict with optimal user experience?",
    options: [
      "Prioritize compliance over user experience",
      "Optimize user experience within compliance constraints",
      "Seek regulatory exemptions for better user experience",
      "Build compliant features but hide them from users when possible"
    ],
    correctAnswer: 1,
    explanation: "Regulatory compliance is typically non-negotiable, but implementation approaches vary. The Product Owner should find ways to meet requirements while optimizing user experience within those constraints—through better design, clearer communication, or more elegant implementation.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 419,
    question: "What should a Product Owner do when metrics show declining engagement despite adding requested features?",
    options: [
      "Add more features to re-engage users",
      "Investigate why new features aren't improving engagement",
      "Improve feature discoverability and onboarding",
      "Accept that engagement naturally declines over time"
    ],
    correctAnswer: 1,
    explanation: "Adding features that don't improve engagement suggests misalignment between what's built and what users need. The Product Owner should investigate why—are wrong features being built, is complexity overwhelming users, are there underlying experience issues—before deciding on solutions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 420,
    question: "How should a Product Owner respond when the Development Team wants to adopt continuous deployment practices?",
    options: [
      "Support the practice if it enables faster value delivery",
      "Reject it due to quality and control concerns",
      "Require proven quality gates before allowing continuous deployment",
      "Let the team decide deployment practices independently"
    ],
    correctAnswer: 0,
    explanation: "Continuous deployment can enable faster feedback and value delivery. The Product Owner should understand how it works, what quality practices support it, and how it affects product evolution. If it enables better outcomes through faster learning and delivery, it should be supported.",
    domain: "Scrum Framework",
    difficulty: "Foundation"
  },
  {
    id: 421,
    question: "What should a Product Owner do when stakeholders want features that would differentiate the product but increase development and maintenance complexity?",
    options: [
      "Build differentiation features regardless of complexity",
      "Reject features that add significant complexity",
      "Evaluate whether competitive advantage justifies complexity costs",
      "Build simplified versions of differentiation features"
    ],
    correctAnswer: 2,
    explanation: "Differentiation features involve trade-offs between competitive advantage and complexity costs. The Product Owner should evaluate whether the strategic value and competitive positioning justify the increased complexity, maintenance burden, and slower future development.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 422,
    question: "How should a Product Owner handle Product Backlog items that have been in the backlog for multiple months without being selected?",
    options: [
      "Remove them since they're clearly not important",
      "Keep them in case they become relevant later",
      "Review them to determine if they still provide value",
      "Automatically archive items older than a certain age"
    ],
    correctAnswer: 2,
    explanation: "Long-standing backlog items might indicate low value, changed priorities, or items overtaken by other work. The Product Owner should periodically review aged items to determine if they still provide value, if context has changed, or if they should be removed to keep the backlog focused.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  },
  {
    id: 423,
    question: "What should a Product Owner do when user behavior data contradicts explicit user feedback and requests?",
    options: [
      "Trust behavior data over stated preferences",
      "Trust user feedback over potentially misleading data",
      "Investigate the contradiction to understand user needs comprehensively",
      "Run experiments to resolve the contradiction"
    ],
    correctAnswer: 2,
    explanation: "People often say one thing but do another. The Product Owner should investigate contradictions between stated preferences and actual behavior to understand users more deeply. Both data sources provide valuable but incomplete insights that together paint a fuller picture.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 424,
    question: "How should a Product Owner prioritize work when there's pressure to both innovate and maintain stability?",
    options: [
      "Focus on innovation since stability can be addressed reactively",
      "Focus on stability since it protects current value",
      "Balance innovation and stability based on product maturity and market position",
      "Dedicate separate teams to innovation and stability"
    ],
    correctAnswer: 2,
    explanation: "The right balance depends on product lifecycle, market conditions, and business strategy. New products might emphasize innovation, mature products stability. The Product Owner makes strategic choices about balancing exploration and exploitation based on context and Product Goals.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 425,
    question: "What should a Product Owner do when the Development Team identifies that accumulated shortcuts are now preventing efficient feature development?",
    options: [
      "Accept slower development as consequence of past shortcuts",
      "Add more developers to compensate for inefficiency",
      "Prioritize addressing critical shortcuts that most impact velocity",
      "Continue with features and address shortcuts opportunistically"
    ],
    correctAnswer: 2,
    explanation: "Shortcuts that prevent efficient development are technical debt affecting value delivery. The Product Owner should prioritize addressing the most impactful shortcuts—those that most affect velocity or quality—understanding this work as an investment that enables better future value delivery.",
    domain: "Product Backlog Management",
    difficulty: "Foundation"
  }
];

export default pspo1Questions;
