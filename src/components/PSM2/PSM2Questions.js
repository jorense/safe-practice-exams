// Professional Scrum Master II (PSM 2) Practice Exam Questions
// Comprehensive question bank with length bias prevention and professional-grade content
// Domain Distribution: Scrum Theory & Principles (25%), Self-Managing Teams (25%), 
// Facilitating Events (20%), Product Value (20%), Organizational Design (10%)

export const psm2Questions = [
  {
    id: 1,
    question: "A Development Team member tells the Scrum Master that another team member is not pulling their weight. How should the Scrum Master respond?",
    options: [
      "Schedule a private meeting with the underperforming team member to discuss performance concerns directly",
      "Encourage the team member to raise the concern during the Sprint Retrospective for team discussion",
      "Document the concern and escalate it to management for appropriate corrective action",
      "Reassign work from the underperforming member to more productive team members"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate team self-management by encouraging the team member to bring concerns to the Retrospective. This respects the team's autonomy to address their own dynamics while providing a safe forum for discussion. The Scrum Master coaches the team on how to have difficult conversations rather than solving problems for them.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "During Sprint Planning, the Product Owner wants to add an urgent item that wasn't in the Product Backlog. What should happen?",
    options: [
      "The Development Team should accommodate the urgent request to maintain stakeholder relationships",
      "The Product Owner adds it to the Product Backlog and discusses it with the Development Team",
      "The Scrum Master should reject the addition to protect the team from scope creep",
      "The item should be deferred automatically until the next Sprint Planning session"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner can add items to the Product Backlog at any time. During Sprint Planning, if this item is truly valuable, the Product Owner can discuss it with the Development Team. The team then decides if they can include it in the Sprint Backlog based on their capacity and Sprint Goal, respecting their self-management.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 3,
    question: "What is the primary accountability of a Scrum Master toward the organization?",
    options: [
      "Ensuring all Scrum Teams follow standardized processes and report consistent metrics",
      "Leading, training, and coaching the organization in its Scrum adoption and implementation",
      "Managing resource allocation across multiple Scrum Teams to optimize organizational efficiency",
      "Protecting teams from organizational impediments while escalating unresolved issues"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master's organizational accountability is to lead, train, and coach the organization in Scrum adoption. This includes helping employees and stakeholders understand Scrum theory and practice, planning and advising Scrum implementations, and helping remove barriers between stakeholders and Scrum Teams.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 4,
    question: "A Product Owner is struggling to engage stakeholders in Product Backlog refinement. How should the Scrum Master help?",
    options: [
      "Take over stakeholder communication to ensure consistent engagement with Product Backlog activities",
      "Coach the Product Owner on techniques to better engage and collaborate with stakeholders",
      "Schedule mandatory stakeholder meetings and enforce attendance policies across the organization",
      "Recommend replacing the Product Owner with someone who has stronger stakeholder relationships"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master serves the Product Owner by coaching them on effective stakeholder engagement techniques. This builds the Product Owner's capability rather than creating dependency. The Scrum Master facilitates understanding but doesn't take over the Product Owner's accountabilities.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 5,
    question: "How should a Scrum Master handle a situation where team members consistently work overtime to meet Sprint commitments?",
    options: [
      "Praise the team's dedication and commitment to meeting their Sprint Goals consistently",
      "Help the team understand sustainable pace and facilitate discussion about capacity planning",
      "Negotiate with management to provide overtime compensation for the team's extra efforts",
      "Increase Sprint duration to provide more time for completing planned work items"
    ],
    correctAnswer: 1,
    explanation: "Consistent overtime indicates unsustainable pace, which is contrary to Agile principles. The Scrum Master should facilitate discussions about realistic capacity, help the team improve estimation, and ensure they understand that sustainable pace is essential for long-term success and maintaining quality standards.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 6,
    question: "What should a Scrum Master do when a Development Team wants to skip the Sprint Retrospective because they feel there's nothing to improve?",
    options: [
      "Allow the team to skip the event since Scrum Teams are self-managing entities",
      "Facilitate the Retrospective and help the team discover continuous improvement opportunities",
      "Replace the Retrospective with additional refinement time to maximize productivity",
      "Schedule the Retrospective but make it optional for team members to attend"
    ],
    correctAnswer: 1,
    explanation: "The Sprint Retrospective is mandatory in Scrum. The belief that there's nothing to improve indicates a lack of inspection mindset. The Scrum Master should facilitate the event and use techniques to help the team discover improvement opportunities, reinforcing the continuous improvement pillar of Scrum.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 7,
    question: "A Development Team is having difficulty creating a meaningful Sprint Goal. What is the best approach for the Scrum Master?",
    options: [
      "Create the Sprint Goal for the team based on the Sprint Backlog items selected",
      "Coach the team on creating cohesive Sprint Goals that provide focus and flexibility",
      "Suggest postponing Sprint Planning until the Product Owner provides clearer direction",
      "Recommend selecting fewer items so the team can more easily identify a goal"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should coach the Development Team on crafting meaningful Sprint Goals. A good Sprint Goal provides coherence and focus while allowing flexibility in implementation. The Scrum Master facilitates understanding of how the Sprint Goal guides the team's work throughout the Sprint.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 8,
    question: "How should a Scrum Master respond when a manager asks them to report on individual team member productivity?",
    options: [
      "Provide the requested metrics to maintain positive relationships with organizational management",
      "Explain that Scrum focuses on team outcomes and individual metrics harm collaboration",
      "Decline the request and suggest the manager attend Daily Scrums to observe directly",
      "Create anonymous productivity reports that protect individual team member identities"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate the manager about Scrum's focus on team outcomes rather than individual productivity metrics. Measuring individuals creates competition and undermines collaboration. The Scrum Master helps the organization understand how to evaluate team effectiveness through product value and outcomes.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 9,
    question: "A Product Owner wants to maximize value but struggles with prioritizing the Product Backlog. What should the Scrum Master do?",
    options: [
      "Teach the Product Owner various prioritization techniques and frameworks for maximizing value",
      "Take over Product Backlog ordering temporarily until the Product Owner gains experience",
      "Suggest the Development Team prioritize items based on their technical dependencies",
      "Recommend hiring a business analyst to assist with Product Backlog prioritization"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master serves the Product Owner by teaching prioritization techniques such as value vs. effort analysis, MoSCoW, WSJF, or other frameworks. This builds the Product Owner's capability to fulfill their accountability of maximizing product value through effective backlog management.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 10,
    question: "What is the most important consideration when a Scrum Team is deciding whether to adopt additional practices beyond Scrum?",
    options: [
      "Whether the practice is approved by industry standards or certification bodies",
      "Whether the practice helps the team achieve their goals without contradicting Scrum",
      "Whether other successful Scrum Teams in the organization use the practice",
      "Whether the practice can be implemented without additional training costs"
    ],
    correctAnswer: 1,
    explanation: "Teams can add practices that help them achieve their goals as long as they don't contradict Scrum's principles and framework. The key is empiricism—the team should experiment, inspect, and adapt based on what helps them deliver value effectively within Scrum's accountabilities and events.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 11,
    question: "A Development Team discovers a major architectural flaw during a Sprint. How should this be handled?",
    options: [
      "Cancel the Sprint immediately and begin a new Sprint focused on fixing the architecture",
      "Add technical debt items to the Product Backlog and continue the current Sprint",
      "Extend the current Sprint timeline to allow proper resolution of the architectural issues",
      "The team discusses with the Product Owner and decides the best course of action"
    ],
    correctAnswer: 3,
    explanation: "The Development Team should discuss the discovery with the Product Owner to determine the impact on the Sprint Goal and product value. Together, they decide whether to continue, adjust the Sprint scope, or if the Sprint Goal becomes obsolete, potentially cancel the Sprint. This respects both technical expertise and value considerations.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 12,
    question: "How should a Scrum Master handle conflict between the Product Owner and Development Team about what should be in a Sprint?",
    options: [
      "Facilitate a discussion where both parties can understand each other's perspectives",
      "Make a decision based on what will deliver the most value to stakeholders",
      "Escalate the conflict to senior management for resolution and clear direction",
      "Enforce Scrum rules that the Development Team has final say on Sprint contents"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master facilitates healthy conflict resolution by ensuring both parties understand each other's perspectives. The Product Owner proposes what should be done based on value; the Development Team decides what they can accomplish. The Scrum Master coaches on collaboration without taking sides or making decisions.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 13,
    question: "What should a Scrum Master do when stakeholders bypass the Product Owner and directly request work from the Development Team?",
    options: [
      "Coach stakeholders on working through the Product Owner while protecting team focus",
      "Allow the team to accept requests directly to improve stakeholder satisfaction",
      "Create a formal policy requiring all requests to go through the Scrum Master",
      "Ask the Product Owner to establish stricter access controls around the team"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should coach stakeholders on the Product Owner's accountability for backlog management and help them understand how direct requests undermine prioritization and team focus. This education helps create organizational understanding while respecting the Product Owner's role.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 14,
    question: "A Development Team wants to demonstrate incomplete work at the Sprint Review. What should the Scrum Master advise?",
    options: [
      "Only work meeting the Definition of Done should be demonstrated at Sprint Review",
      "Incomplete work should be shown to gather early feedback from stakeholders",
      "The team should postpone the Sprint Review until all work is completed",
      "Incomplete work can be shown but should be clearly labeled as work in progress"
    ],
    correctAnswer: 0,
    explanation: "Only work that meets the Definition of Done should be demonstrated at the Sprint Review. Showing incomplete work creates confusion about what is actually done and potentially shippable. The Scrum Master coaches the team on maintaining transparency through consistent quality standards.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 15,
    question: "How should a Scrum Master address a Development Team that consistently over-commits and fails to meet their Sprint Goals?",
    options: [
      "Recommend reducing the amount of work selected in future Sprint Planning sessions",
      "Help the team improve their forecasting ability and understand their actual capacity",
      "Suggest extending Sprint duration to provide more time for committed work",
      "Work with the Product Owner to simplify requirements and reduce complexity"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help the team improve their forecasting through better understanding of capacity, velocity trends, and realistic estimation. This builds the team's self-management capability rather than simply reducing commitments, which doesn't address the underlying forecasting skills.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 16,
    question: "What is the primary purpose of the Daily Scrum from the Scrum Master's perspective?",
    options: [
      "To collect status updates that can be reported to management and stakeholders",
      "To enable the Development Team to synchronize work and replan for the next day",
      "To identify impediments that the Scrum Master needs to resolve for the team",
      "To ensure all team members are working on their assigned tasks daily"
    ],
    correctAnswer: 1,
    explanation: "The Daily Scrum's purpose is for the Development Team to inspect progress toward the Sprint Goal and adapt their plan for the next 24 hours. It's the team's planning meeting, not a status report. The Scrum Master ensures the team understands this purpose.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 17,
    question: "A Product Owner rarely attends Sprint Retrospectives. How should the Scrum Master handle this?",
    options: [
      "Explain to the Product Owner that they are required to attend all Scrum events",
      "Discuss with the Product Owner the value of their participation in improving collaboration",
      "Proceed with Retrospectives without the Product Owner to respect their time constraints",
      "Schedule separate Retrospectives specifically for the Product Owner and Scrum Master"
    ],
    correctAnswer: 1,
    explanation: "While the Product Owner should attend the Sprint Retrospective, the Scrum Master should coach them on the value of their participation rather than mandate attendance. Understanding the benefits typically leads to better engagement than enforcing rules. The Scrum Master facilitates understanding of how retrospectives improve team effectiveness.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 18,
    question: "How should a Scrum Master respond when asked to certify that a Scrum Team is 'doing Scrum correctly'?",
    options: [
      "Assess the team against the Scrum Guide and provide a detailed compliance report",
      "Explain that Scrum is a framework for empirical process control, not a certification checklist",
      "Decline the request as certification is not part of the Scrum Master's accountabilities",
      "Create metrics showing Sprint Goal achievement rates and Definition of Done compliance"
    ],
    correctAnswer: 1,
    explanation: "Scrum is based on empiricism and transparency, not compliance. The Scrum Master should help the organization understand that the focus should be on whether the team is inspecting and adapting effectively and delivering value, not whether they're checking compliance boxes.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 19,
    question: "A Development Team member asks the Scrum Master to assign them specific tasks. What should the Scrum Master do?",
    options: [
      "Assign tasks to demonstrate leadership and keep the team productive and focused",
      "Coach the team member on self-management and collaborative work selection",
      "Defer to the Product Owner to assign tasks based on priority and value",
      "Create a rotation system so all team members get equal task assignments"
    ],
    correctAnswer: 1,
    explanation: "The Development Team is self-managing, meaning they decide how to accomplish their work. The Scrum Master should coach the team member on taking ownership of their work selection and collaborating with teammates. This builds capability rather than creating dependency on task assignment.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 20,
    question: "What should a Scrum Master do when organizational policies conflict with Scrum principles?",
    options: [
      "Work within existing policies while coaching the organization toward Scrum-aligned practices",
      "Require immediate policy changes before implementing Scrum in the organization",
      "Create exceptions for Scrum Teams so they can operate outside standard policies",
      "Document all conflicts and escalate them to executive leadership for resolution"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master works to help the organization understand and adopt Scrum, which often means coaching on gradual change. While advocating for Scrum-aligned practices, the Scrum Master should be pragmatic about organizational change, working within constraints while demonstrating benefits to influence policy evolution.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 21,
    question: "A Development Team wants to refine Product Backlog items during the Sprint. What should the Scrum Master advise?",
    options: [
      "Refinement should only occur during designated refinement sessions outside the Sprint",
      "The team can refine whenever needed, typically spending up to 10% of Sprint capacity",
      "Refinement should be postponed until Sprint Planning to maximize development time",
      "Only the Product Owner should refine items to maintain consistent prioritization"
    ],
    correctAnswer: 1,
    explanation: "Product Backlog refinement is an ongoing activity where the Development Team and Product Owner collaborate. Teams typically spend no more than 10% of their Sprint capacity on refinement. The Scrum Master ensures the team understands this is an ongoing collaborative activity, not a separate formal event.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 22,
    question: "How should a Scrum Master help a team that struggles with creating a useful Definition of Done?",
    options: [
      "Provide the team with industry standard Definition of Done templates to adopt immediately",
      "Facilitate discussions about quality and help the team define their own standards",
      "Require the team to adopt the organizational Definition of Done without modifications",
      "Create the Definition of Done based on the Scrum Master's experience with other teams"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master facilitates the team's creation of their Definition of Done by helping them think through quality standards, dependencies, and organizational requirements. The team must own their Definition of Done for commitment to quality, though it must meet organizational standards as a baseline.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 23,
    question: "What should a Scrum Master do when a Development Team consistently completes all Sprint Backlog items mid-Sprint?",
    options: [
      "Celebrate the team's efficiency and allow them to enjoy the remaining Sprint time",
      "Coach the team on collaborating with the Product Owner to pull in additional items",
      "Suggest increasing the Sprint duration to better match the team's capacity",
      "Recommend the team use extra time for training and professional development"
    ],
    correctAnswer: 1,
    explanation: "If a team consistently finishes early, they're under-forecasting. The Scrum Master should coach them on improving their Sprint Planning by selecting more work aligned with the Sprint Goal. The team should also collaborate with the Product Owner about pulling in additional valuable items when possible.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 24,
    question: "A Product Owner wants to track team velocity to measure performance. How should the Scrum Master respond?",
    options: [
      "Explain that velocity is a planning tool, not a performance metric for evaluation",
      "Help establish velocity tracking systems to provide the requested performance data",
      "Suggest using story points completed per Sprint as the primary performance indicator",
      "Recommend alternative metrics like cycle time and throughput for performance measurement"
    ],
    correctAnswer: 0,
    explanation: "Velocity is a planning tool to help teams forecast how much work they can accomplish. Using it as a performance metric encourages gaming the numbers and undermines its usefulness. The Scrum Master should coach on focusing on product value delivery and outcome-based metrics instead.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 25,
    question: "How should a Scrum Master handle a situation where the Development Team and Product Owner disagree on the Definition of Done?",
    options: [
      "The Development Team decides the Definition of Done as they are accountable for quality",
      "Facilitate discussion to create shared understanding of quality standards and constraints",
      "The Product Owner has final authority over the Definition of Done to ensure value",
      "Escalate to management to establish a standardized Definition of Done for the team"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master facilitates collaboration between the Product Owner and Development Team to create shared understanding. While the team commits to meeting the Definition of Done, it must account for organizational quality standards and product requirements. Consensus building creates shared ownership.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 26,
    question: "A stakeholder complains that the Scrum Team is not delivering enough features. What should the Scrum Master do?",
    options: [
      "Help the stakeholder understand how to measure value delivered rather than feature count",
      "Work with the team to increase velocity and deliver more features per Sprint",
      "Suggest reducing quality standards temporarily to increase feature delivery speed",
      "Recommend adding more team members to increase overall feature delivery capacity"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should coach the stakeholder on focusing on value delivered rather than feature count. This involves helping them understand outcomes, user value, and product success metrics. The conversation should shift from output (features) to outcomes (value realized).",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 27,
    question: "What should a Scrum Master do when a Development Team resists collaborating with the Product Owner?",
    options: [
      "Mandate collaboration as a required part of Scrum framework implementation",
      "Investigate root causes and facilitate better understanding between both parties",
      "Create structured interaction schedules to enforce regular collaboration sessions",
      "Recommend replacing team members who are resistant to proper Scrum practices"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should investigate why resistance exists—it might indicate trust issues, communication problems, or misunderstandings about roles. By facilitating conversations and building understanding, the Scrum Master helps create conditions for organic collaboration rather than forcing it.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 28,
    question: "How should a Scrum Master respond when asked to create a detailed project plan with specific dates for feature delivery?",
    options: [
      "Create the plan using historical velocity data to forecast approximate delivery dates",
      "Explain that Scrum uses empirical forecasting and guide on probabilistic planning approaches",
      "Decline the request as detailed planning contradicts agile principles and practices",
      "Collaborate with the Product Owner to create a release plan with committed dates"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate on empirical forecasting in Scrum. Rather than refusing or blindly complying, they help stakeholders understand probabilistic planning, using historical data for forecasts while emphasizing that Scrum provides transparency about progress and adapts to change.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 29,
    question: "A Development Team wants to invite subject matter experts to their Sprint Retrospective. What should the Scrum Master advise?",
    options: [
      "Retrospectives are for the Scrum Team only and should not include external participants",
      "The team can invite anyone they believe will help improve their effectiveness",
      "External participants require approval from the Product Owner and Scrum Master",
      "Subject matter experts should attend Sprint Reviews instead of Retrospectives"
    ],
    correctAnswer: 1,
    explanation: "The Development Team can invite anyone they believe will contribute to improvement discussions. While Retrospectives are typically for the Scrum Team, inviting others who can provide valuable perspective or expertise supports the goal of continuous improvement.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 30,
    question: "What should a Scrum Master do when multiple teams are working on the same product with separate Product Owners?",
    options: [
      "Maintain the current structure and facilitate coordination between Product Owners",
      "Coach the organization that a product should have one Product Owner accountable for value",
      "Create a Product Owner committee to make collaborative decisions about the product",
      "Assign each team their own product area to eliminate coordination needs"
    ],
    correctAnswer: 1,
    explanation: "One product should have one Product Owner accountable for maximizing value. Multiple Product Owners create conflicting priorities and diffuse accountability. The Scrum Master should coach the organization on this principle, though the Product Owner may delegate authority or work with subject matter experts.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 31,
    question: "How should a Scrum Master handle a Product Owner who makes all decisions without consulting the Development Team?",
    options: [
      "Coach the Product Owner on the value of leveraging team expertise in decisions",
      "Allow the Product Owner full autonomy as they are accountable for product value",
      "Establish formal review processes requiring team approval of Product Owner decisions",
      "Escalate the behavior to management as a violation of collaborative principles"
    ],
    correctAnswer: 0,
    explanation: "While the Product Owner has authority over product decisions, the Scrum Master should coach them on leveraging Development Team expertise. Better decisions come from collaboration. The Scrum Master facilitates mutual respect and understanding without undermining the Product Owner's accountability.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 32,
    question: "A Development Team wants to change their Sprint length. What factors should the Scrum Master help them consider?",
    options: [
      "Organizational standards and alignment with other teams using consistent Sprint lengths",
      "Feedback frequency needs, market dynamics, and ability to deliver Done increments",
      "Management preferences and reporting requirements for consistent sprint planning",
      "Team member availability and coordination with individual vacation schedules"
    ],
    correctAnswer: 1,
    explanation: "Sprint length should be determined by the need for feedback, market dynamics, product complexity, and the team's ability to deliver a Done increment. The Scrum Master helps the team think through these factors empirically rather than focusing on organizational convenience or standardization.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 33,
    question: "What should a Scrum Master do when a Development Team treats the Sprint Backlog as a contract that cannot change?",
    options: [
      "Support the team's commitment to completing everything they planned during Sprint Planning",
      "Coach the team that the Sprint Backlog is a flexible plan that can adapt during Sprint",
      "Work with the Product Owner to reduce scope changes that disrupt team plans",
      "Suggest shorter Sprints to reduce the impact of changing requirements on commitments"
    ],
    correctAnswer: 1,
    explanation: "The Sprint Backlog is a living artifact that the Development Team can update as they learn more during the Sprint. While the Sprint Goal remains fixed, how the team achieves it can adapt. The Scrum Master coaches on balancing commitment to the Sprint Goal with flexibility in implementation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 34,
    question: "How should a Scrum Master address a Development Team that wants to work on technical improvements not visible to users?",
    options: [
      "Discourage such work as it doesn't directly deliver value to users or stakeholders",
      "Help the team articulate the value to the Product Owner for backlog prioritization",
      "Allocate a fixed percentage of each Sprint to technical improvement work automatically",
      "Suggest addressing technical improvements during separate technical Sprint iterations"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help the Development Team articulate the value of technical improvements (reduced risk, increased velocity, better quality) to the Product Owner. The Product Owner then prioritizes this work against other backlog items. Technical improvements belong in the Product Backlog, not hidden from prioritization.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 35,
    question: "A Product Owner asks the Scrum Master to prevent the Development Team from talking to stakeholders. What should the Scrum Master do?",
    options: [
      "Comply with the request to support the Product Owner's authority over stakeholder management",
      "Coach the Product Owner on the value of Development Team-stakeholder collaboration",
      "Create guidelines defining when and how the Development Team can engage stakeholders",
      "Encourage the team to continue stakeholder conversations despite the Product Owner's concerns"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should understand why the Product Owner has concerns, then coach on how Development Team-stakeholder collaboration benefits product development. Rather than controlling communication, the Product Owner should encourage appropriate collaboration while maintaining accountability for product direction.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 36,
    question: "What should a Scrum Master do when a Development Team member dominates Daily Scrums?",
    options: [
      "Privately coach the team member on inclusive communication and active listening",
      "Interrupt and redirect when the team member talks too long during Daily Scrums",
      "Implement a time limit per person to ensure equal speaking opportunities",
      "Facilitate a Retrospective discussion about effective Daily Scrum practices"
    ],
    correctAnswer: 3,
    explanation: "The Scrum Master should facilitate team self-management by raising the issue in a Retrospective, where the team can discuss and improve their Daily Scrum practices. This respects the team's ownership of the event while addressing the concern collaboratively rather than through direct intervention.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 37,
    question: "How should a Scrum Master respond when management wants to add someone to a Development Team to speed delivery?",
    options: [
      "Support the addition as more team members typically increase overall delivery capacity",
      "Explain how adding people to an established team can temporarily reduce productivity",
      "Negotiate to add the person after the current Sprint to minimize disruption",
      "Recommend adding the person to a different team to avoid impacting velocity"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate management about how adding people to an established team creates onboarding overhead and can temporarily slow delivery. This helps manage expectations while explaining the team dynamics principle that adding people isn't a simple solution to speed concerns.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 38,
    question: "What should a Scrum Master do when a Product Owner focuses exclusively on new features and ignores technical debt?",
    options: [
      "Coach the Product Owner on the long-term impact of technical debt on value delivery",
      "Allocate a fixed percentage of each Sprint to technical debt without Product Owner input",
      "Have the Development Team include technical debt work without Product Owner knowledge",
      "Escalate the issue to management to mandate technical debt prioritization"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should coach the Product Owner on understanding how technical debt impacts future value delivery, quality, and velocity. By helping the Product Owner understand the business impact, they can make informed prioritization decisions that balance new features with sustainability.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 39,
    question: "A Development Team wants to use pair programming but management objects to 'two people doing one person's work.' What should the Scrum Master do?",
    options: [
      "Support management's concern and discourage pair programming to maximize individual productivity",
      "Educate management on how pair programming improves quality and knowledge sharing",
      "Allow the team to pair program without informing management to avoid conflict",
      "Suggest the team try pair programming only for complex work to compromise"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate management about the benefits of pair programming: improved quality, knowledge sharing, reduced defects, and better design. This helps management understand that the Development Team should be empowered to choose their practices based on effectiveness.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 40,
    question: "How should a Scrum Master handle a situation where a Development Team wants to cancel the Daily Scrum when everyone is remote?",
    options: [
      "Allow cancellation as remote work makes Daily Scrums less effective and valuable",
      "Coach the team on maintaining Daily Scrum regardless of location for synchronization",
      "Suggest replacing Daily Scrum with asynchronous written status updates instead",
      "Recommend scheduling Daily Scrum only on days when coordination is needed"
    ],
    correctAnswer: 1,
    explanation: "The Daily Scrum is even more important for remote teams as it provides regular synchronization. The Scrum Master should help the team understand its value and find effective ways to conduct it remotely. Location doesn't change the need for daily planning and coordination.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 41,
    question: "What should a Scrum Master do when stakeholders criticize the Development Team's technical decisions in the Sprint Review?",
    options: [
      "Defend the Development Team's technical autonomy and redirect the conversation to outcomes",
      "Allow the criticism to continue as stakeholder feedback is valuable for improvement",
      "Schedule a separate technical review meeting for stakeholders to provide feedback",
      "Ask the Product Owner to manage stakeholder expectations about technical decisions"
    ],
    correctAnswer: 0,
    explanation: "The Sprint Review focuses on product increment and value, not technical implementation. The Scrum Master should protect the Development Team's technical autonomy while redirecting conversation to outcomes. Technical decisions are the team's domain unless they impact value delivery.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 42,
    question: "A Product Owner is creating detailed designs and specifications for the Development Team. How should the Scrum Master respond?",
    options: [
      "Support this approach as clear specifications reduce ambiguity and rework",
      "Coach the Product Owner on defining 'what' and empowering the team on 'how'",
      "Suggest the Product Owner hire a business analyst to create specifications",
      "Ask the Development Team to follow the specifications exactly as provided"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should focus on what needs to be built and why (outcome/value), while the Development Team determines how to build it. The Scrum Master coaches the Product Owner on this boundary and helps them trust the team's technical expertise.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 43,
    question: "How should a Scrum Master help a new Development Team member integrate into an established team?",
    options: [
      "Assign a mentor from the team to onboard the new member and answer questions",
      "Create a detailed onboarding checklist and monitor the new member's progress",
      "Facilitate team discussions about how they want to support the new member",
      "Pair the new member with the most experienced developer for initial Sprints"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master facilitates the team's self-organization around integrating a new member. By having the team discuss and decide their approach, it builds collective ownership and ensures the approach fits the team's culture and practices rather than imposing a solution.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 44,
    question: "What should a Scrum Master do when the Product Owner is unavailable during most of the Sprint?",
    options: [
      "Have the Development Team make product decisions in the Product Owner's absence",
      "Work with the organization to ensure appropriate Product Owner availability",
      "Assign Scrum Master to temporarily fulfill Product Owner responsibilities",
      "Postpone Sprints until the Product Owner has more available time"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should work with the organization to help them understand the Product Owner's crucial role and need for availability. This might involve coaching on the role's importance, helping redistribute Product Owner responsibilities, or addressing organizational impediments to their availability.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 45,
    question: "A Development Team wants to create comprehensive documentation for every feature. How should the Scrum Master respond?",
    options: [
      "Discourage this as comprehensive documentation contradicts agile principles",
      "Help the team define what documentation is valuable and part of Done",
      "Support the initiative as documentation improves long-term maintainability",
      "Suggest creating documentation only for complex features to save time"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master helps the team think about documentation as part of their Definition of Done. If documentation is valuable, it should be included. The team decides what level of documentation is necessary and valuable, not following a blanket rule of more or less documentation.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 46,
    question: "How should a Scrum Master handle a Development Team that wants to work in specialized silos rather than collaboratively?",
    options: [
      "Allow specialization if it increases individual productivity and technical excellence",
      "Coach the team on cross-functional collaboration and shared ownership benefits",
      "Reorganize the team to group similar specialists together for better efficiency",
      "Create rotation schedules to force specialists to work in different areas"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master coaches on the benefits of cross-functional collaboration: knowledge sharing, reduced bottlenecks, flexibility, and collective ownership. Rather than forcing or preventing specialization, they help the team understand how collaboration improves outcomes and sustainability.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 47,
    question: "What should a Scrum Master do when a Product Owner wants to change priorities mid-Sprint?",
    options: [
      "Protect the team by preventing any priority changes during the Sprint",
      "Facilitate discussion about whether the Sprint Goal is still achievable and valuable",
      "Allow the change only if the team agrees unanimously to accept it",
      "Suggest waiting until the next Sprint to implement any priority changes"
    ],
    correctAnswer: 1,
    explanation: "The key question is whether the Sprint Goal is still valid and achievable. The Scrum Master facilitates discussion between the Product Owner and Development Team about the impact of changes. If the Sprint Goal becomes obsolete, Sprint cancellation might be appropriate; otherwise, work within the Sprint continues toward the goal.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 48,
    question: "A Development Team asks the Scrum Master to run interference with other departments. What should the Scrum Master do?",
    options: [
      "Take on this responsibility to protect team focus and remove external impediments",
      "Coach the team on how to manage their own external interactions effectively",
      "Create formal processes for inter-departmental requests to protect the team",
      "Escalate the organizational impediments to management for resolution"
    ],
    correctAnswer: 1,
    explanation: "While the Scrum Master can help remove impediments, they should primarily coach the team on handling external interactions themselves. This builds the team's capability and avoids creating dependency. The Scrum Master supports and facilitates but shouldn't become a buffer that prevents team growth.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 49,
    question: "How should a Scrum Master respond when a Development Team wants metrics to track their improvement?",
    options: [
      "Implement standard agile metrics like velocity, burndown charts, and cycle time",
      "Help the team identify what they want to improve and appropriate metrics",
      "Discourage metrics as they can create pressure and undermine team morale",
      "Provide metrics used by other high-performing teams as benchmarks"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate the team's thinking about what they want to improve and what metrics would help them inspect and adapt. Metrics should serve the team's improvement goals rather than being imposed. This creates ownership and ensures metrics are meaningful to the team.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 50,
    question: "What should a Scrum Master do when management asks them to work with multiple Scrum Teams simultaneously?",
    options: [
      "Accept the assignment as Scrum Masters can effectively serve multiple teams",
      "Evaluate capacity and discuss trade-offs with management about effectiveness",
      "Decline the request as one Scrum Master should only serve one team",
      "Suggest hiring additional Scrum Masters to maintain one-to-one team ratios"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should be honest about their capacity and discuss with management how serving multiple teams might impact effectiveness. While one Scrum Master can serve multiple teams, it depends on team maturity, organizational impediments, and the Scrum Master's experience. The conversation should focus on effectiveness over arbitrary ratios.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 51,
    question: "A Development Team consistently identifies impediments but never takes action to resolve them. What should the Scrum Master do?",
    options: [
      "Coach the team on self-management and taking ownership of impediment resolution",
      "Resolve all impediments for the team to demonstrate effective Scrum Master leadership",
      "Create an impediment backlog and assign impediments to team members for resolution",
      "Escalate all impediments to management for organizational-level resolution"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should coach the team toward self-management by helping them understand they can resolve many impediments themselves. While the Scrum Master helps remove impediments, fostering team autonomy and problem-solving capability is more valuable than creating dependency.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 52,
    question: "How should a Scrum Master handle a Product Owner who equates story points with hours worked?",
    options: [
      "Support this approach as it provides clear metrics for tracking team productivity",
      "Educate the Product Owner that story points represent complexity, not time",
      "Suggest the team switch to hour-based estimation for clearer communication",
      "Have the team stop using story points and estimate in t-shirt sizes instead"
    ],
    correctAnswer: 1,
    explanation: "Story points represent relative complexity, effort, and risk—not time. The Scrum Master should educate the Product Owner on this distinction to prevent misuse of velocity and story points as productivity metrics, which undermines their value as planning tools.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 53,
    question: "A Development Team wants to demonstrate their technical architecture to stakeholders. What should the Scrum Master advise?",
    options: [
      "Encourage the demonstration if it helps stakeholders understand technical decisions and constraints",
      "Redirect the Sprint Review to focus only on user-facing features and functionality",
      "Schedule a separate technical review meeting outside of the Sprint Review event",
      "Suggest the team create documentation instead of using Sprint Review time"
    ],
    correctAnswer: 0,
    explanation: "If showing technical architecture helps stakeholders understand product decisions, constraints, or capabilities, it can be appropriate for Sprint Review. The key is whether it facilitates collaboration about the product. The Scrum Master should ensure the demonstration serves the Sprint Review's purpose of inspection and adaptation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 54,
    question: "What should a Scrum Master do when a Development Team becomes defensive during Sprint Retrospectives?",
    options: [
      "Skip retrospectives temporarily until team morale improves and defensiveness decreases",
      "Facilitate discussions to understand the root causes of defensiveness and rebuild trust",
      "Limit retrospective topics to only positive items to maintain team morale",
      "Have team members submit anonymous feedback instead of discussing issues openly"
    ],
    correctAnswer: 1,
    explanation: "Defensiveness often indicates lack of psychological safety or trust. The Scrum Master should facilitate understanding of root causes and work to rebuild trust. This might involve adjusting facilitation techniques, establishing working agreements, or addressing underlying team dynamics.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 55,
    question: "A Product Owner asks the Scrum Master to enforce that the Development Team must complete all Sprint Backlog items. How should the Scrum Master respond?",
    options: [
      "Explain that the team commits to the Sprint Goal, not necessarily all items",
      "Support the Product Owner by holding the team accountable for completing all items",
      "Suggest reducing the number of items in future Sprints to ensure completion",
      "Create a policy that incomplete items count against team performance metrics"
    ],
    correctAnswer: 0,
    explanation: "The Development Team forecasts what they can accomplish and commits to the Sprint Goal. While they strive to complete planned work, the Sprint Goal is the commitment, not individual items. The Scrum Master should educate both the Product Owner and team on this distinction.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 56,
    question: "How should a Scrum Master address a situation where the Development Team avoids difficult conversations in Retrospectives?",
    options: [
      "Use different retrospective formats and facilitation techniques to encourage openness",
      "Make retrospectives optional so team members only attend when they have input",
      "Replace retrospectives with one-on-one discussions between Scrum Master and team members",
      "Focus retrospectives on celebrating successes rather than discussing improvements"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should vary retrospective formats and techniques to create psychological safety and encourage honest discussion. This might include anonymous techniques, different question frameworks, or activities that help the team surface difficult topics in constructive ways.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 57,
    question: "A stakeholder complains directly to the Scrum Master about the Development Team's slow progress. What should the Scrum Master do?",
    options: [
      "Defend the team and explain that they are working as fast as possible",
      "Listen to concerns and facilitate a conversation with the Product Owner and team",
      "Immediately relay the complaint to the team to motivate faster delivery",
      "Ask the stakeholder to raise concerns during the Sprint Review instead"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should listen to understand the stakeholder's concerns, then facilitate appropriate conversations. This might involve helping the stakeholder understand how to work through the Product Owner, or facilitating discussions about priorities and value delivery.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 58,
    question: "What should a Scrum Master do when a Development Team member consistently arrives late to Daily Scrums?",
    options: [
      "Privately address the behavior with the individual team member about commitment",
      "Facilitate the team discussing and establishing their own Daily Scrum agreements",
      "Start Daily Scrums later to accommodate the team member's schedule",
      "Report the behavior to management for disciplinary action"
    ],
    correctAnswer: 1,
    explanation: "The Daily Scrum belongs to the Development Team. The Scrum Master should facilitate the team discussing their working agreements, including punctuality. This builds team self-management rather than the Scrum Master enforcing rules or addressing individuals directly.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 59,
    question: "How should a Scrum Master respond when asked to predict exactly when a product will be complete?",
    options: [
      "Use historical velocity to calculate an exact completion date for the product",
      "Provide probabilistic forecasts based on empirical data and explain uncertainty",
      "Decline to provide any forecast as it contradicts agile principles",
      "Commit to a specific date based on the team's maximum velocity"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should provide probabilistic forecasts based on historical data while explaining the inherent uncertainty in complex work. This educates stakeholders on empirical forecasting while providing useful planning information based on trends and evidence.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 60,
    question: "A Product Owner wants to add acceptance criteria to Definition of Done. What should the Scrum Master advise?",
    options: [
      "Acceptance criteria and Definition of Done serve different purposes and shouldn't be mixed",
      "Support adding acceptance criteria as it makes the Definition of Done more specific",
      "Suggest the team vote on whether to include acceptance criteria in Definition of Done",
      "Replace the current Definition of Done with acceptance criteria for clarity"
    ],
    correctAnswer: 0,
    explanation: "Acceptance criteria are specific to individual Product Backlog items and define when that item is complete. Definition of Done applies to all work and ensures consistent quality standards. The Scrum Master should help the Product Owner understand this important distinction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 61,
    question: "What should a Scrum Master do when the Development Team wants to invite the Product Owner to leave during technical discussions?",
    options: [
      "Support the request as technical discussions don't require Product Owner participation",
      "Coach the team on the value of Product Owner presence for context and decisions",
      "Create separate technical planning sessions outside of Sprint Planning",
      "Allow the team to decide but suggest limiting Product Owner absence to brief periods"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner's presence during technical discussions provides valuable context about priorities, trade-offs, and business constraints. The Scrum Master should coach the team on collaborative planning while ensuring technical decisions remain with the Development Team.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 62,
    question: "A Development Team completed all Sprint Backlog items but the Product Owner says the Sprint Goal wasn't met. What does this indicate?",
    options: [
      "The Product Owner is incorrectly assessing Sprint success and should be coached",
      "The Sprint Goal and Sprint Backlog items may not have been properly aligned",
      "The team should have focused more on the Product Owner's expectations",
      "The Definition of Done needs to be updated to include Sprint Goal achievement"
    ],
    correctAnswer: 1,
    explanation: "This situation suggests the Sprint Goal and selected items weren't well-aligned during Sprint Planning. The Scrum Master should facilitate better Sprint Goal creation that truly represents the value and purpose of the Sprint, ensuring work selected supports achieving that goal.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 63,
    question: "How should a Scrum Master handle a situation where team members work in isolation and rarely collaborate?",
    options: [
      "Mandate pair programming and mob programming for all development work",
      "Coach the team on collaboration benefits and facilitate experiments with pairing",
      "Reorganize work assignments to force interdependencies between team members",
      "Accept this as the team's preferred working style if they deliver value"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should coach on collaboration benefits and help the team experiment with collaborative techniques. However, forcing specific practices undermines self-management. The focus should be on helping the team discover the value of collaboration through experience.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 64,
    question: "A Product Owner wants to use the Sprint Review to evaluate individual team member performance. What should the Scrum Master do?",
    options: [
      "Allow this as Product Owner feedback helps team members improve their skills",
      "Explain that Sprint Review focuses on the product, not individual performance",
      "Suggest the Product Owner provide individual feedback in private one-on-one meetings",
      "Facilitate a discussion where team members can respond to Product Owner assessments"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review is about inspecting the product increment and adapting the Product Backlog, not evaluating individuals. The Scrum Master should educate the Product Owner on the purpose of Sprint Review and help redirect focus to product and value delivery.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 65,
    question: "What should a Scrum Master do when organizational policies require detailed documentation that the team considers wasteful?",
    options: [
      "Coach the team to create minimal viable documentation that satisfies requirements",
      "Seek exemptions for Scrum Teams from all documentation requirements",
      "Have the team ignore the policy and address issues only if they arise",
      "Escalate the policy as an impediment and stop work until it's resolved"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should help the team find pragmatic solutions that satisfy organizational needs while minimizing waste. This might involve working with the organization to understand the documentation's purpose and finding lean approaches that meet compliance needs.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 66,
    question: "A Development Team is spending more than 10% of their Sprint capacity on Product Backlog refinement. What should the Scrum Master advise?",
    options: [
      "Immediately reduce refinement time to stay within the recommended 10% guideline",
      "Explore why more time is needed and help the team find more efficient approaches",
      "Suggest the Product Owner do more refinement independently to reduce team time",
      "Accept this as necessary if it helps the team better understand upcoming work"
    ],
    correctAnswer: 1,
    explanation: "The 10% guideline isn't a strict rule. If a team needs more time, the Scrum Master should help them understand why and find more efficient approaches. However, excessive refinement time might indicate unclear requirements, lack of Product Owner availability, or inefficient refinement practices.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 67,
    question: "How should a Scrum Master respond when a Development Team wants to work through lunch to finish Sprint commitments?",
    options: [
      "Support their dedication and commitment to meeting the Sprint Goal",
      "Coach the team on sustainable pace and help them improve forecasting",
      "Negotiate with management for overtime compensation for the team",
      "Allow it occasionally but discourage making it a regular practice"
    ],
    correctAnswer: 1,
    explanation: "Skipping lunch indicates unsustainable pace. The Scrum Master should coach on the importance of sustainable development and help the team improve their forecasting. Consistent pressure to skip breaks suggests systemic issues with planning or external pressure.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 68,
    question: "What should a Scrum Master do when the Development Team and Product Owner disagree about whether work meets the Definition of Done?",
    options: [
      "Make a final decision based on objective assessment of the Definition of Done",
      "Facilitate discussion to ensure shared understanding of the Definition of Done",
      "Side with the Development Team as they own the Definition of Done",
      "Allow the Product Owner to make the final determination about quality"
    ],
    correctAnswer: 1,
    explanation: "Disagreement suggests lack of shared understanding about the Definition of Done. The Scrum Master should facilitate discussion to clarify the definition and how it applies to the specific work. The goal is consensus on what Done means, not adjudication.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 69,
    question: "A stakeholder asks the Scrum Master why the team keeps changing their estimates for Product Backlog items. How should the Scrum Master respond?",
    options: [
      "Explain that estimates evolve as the team learns more about the work",
      "Commit to stable estimates and coach the team on more accurate initial estimation",
      "Suggest using story points which are more stable than hour estimates",
      "Stop sharing estimates with stakeholders to avoid confusion and questions"
    ],
    correctAnswer: 0,
    explanation: "Estimates naturally evolve as teams learn more through refinement and experience. The Scrum Master should educate stakeholders that changing estimates reflects learning and discovery, which is healthy and expected in complex work.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 70,
    question: "How should a Scrum Master handle a Product Owner who only makes themselves available at the end of the Sprint?",
    options: [
      "Work with the organization and Product Owner to ensure appropriate availability",
      "Have the Development Team make product decisions in the Product Owner's absence",
      "Adjust Sprint Planning to occur at the end of Sprints when Product Owner is available",
      "Appoint a proxy Product Owner who can be available throughout the Sprint"
    ],
    correctAnswer: 0,
    explanation: "Product Owner availability is crucial for the team's success. The Scrum Master should work with both the Product Owner and organization to address this impediment, helping them understand the impact of limited availability on value delivery and team effectiveness.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 71,
    question: "A Development Team wants to create a 'hardening' Sprint at the end of each release to fix bugs and improve quality. What should the Scrum Master advise?",
    options: [
      "Support this approach as it ensures high quality before releases to production",
      "Coach the team that every Sprint should produce potentially shippable increments",
      "Suggest hardening Sprints only when necessary based on technical debt levels",
      "Recommend dedicating the last week of each Sprint to hardening activities"
    ],
    correctAnswer: 1,
    explanation: "Hardening Sprints indicate the Definition of Done isn't being met in regular Sprints. The Scrum Master should coach the team on building quality in continuously and ensuring their Definition of Done produces truly Done increments every Sprint.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 72,
    question: "What should a Scrum Master do when multiple teams working on the same product have different Definitions of Done?",
    options: [
      "Allow each team to maintain their own Definition of Done for flexibility",
      "Facilitate creating a shared Definition of Done that all teams must meet",
      "Have teams create a minimal shared baseline with team-specific additions",
      "Standardize on the most rigorous Definition of Done across all teams"
    ],
    correctAnswer: 1,
    explanation: "When multiple teams work on the same product, they need a shared Definition of Done to ensure integration and consistent quality. The Scrum Master should facilitate creating this shared understanding, though teams can have additional standards beyond the baseline.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 73,
    question: "How should a Scrum Master respond when the Development Team complains that Sprint Planning takes too long?",
    options: [
      "Reduce Sprint Planning to one hour regardless of Sprint length",
      "Investigate why it's taking long and help the team improve Planning effectiveness",
      "Split Sprint Planning into multiple shorter sessions throughout the Sprint",
      "Have the Product Owner present the plan to save time on team discussion"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should investigate root causes—poor backlog refinement, unclear acceptance criteria, estimation difficulties, or ineffective facilitation—and help the team address them. Simply reducing time without addressing causes won't improve effectiveness.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 74,
    question: "A Product Owner wants to change the Definition of Done mid-Sprint to exclude certain quality criteria. What should the Scrum Master do?",
    options: [
      "Allow the change to help the team meet their Sprint Goal",
      "Explain that the Definition of Done shouldn't be lowered during a Sprint",
      "Facilitate a team discussion about whether to accept the change",
      "Suggest creating a separate Definition of Done for this Sprint only"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done represents the organization's quality standard and shouldn't be lowered mid-Sprint. If the Sprint Goal is at risk, the team should discuss reducing scope or potentially canceling the Sprint, but maintaining quality standards is essential.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 75,
    question: "What should a Scrum Master do when a Development Team member refuses to participate in Retrospectives?",
    options: [
      "Make attendance mandatory and escalate non-compliance to management",
      "Understand why they're refusing and address underlying concerns",
      "Allow them to skip Retrospectives if they don't have improvement suggestions",
      "Ask the team to vote on whether attendance should be optional"
    ],
    correctAnswer: 1,
    explanation: "Refusal to attend suggests underlying issues—lack of psychological safety, previous negative experiences, or misunderstanding of purpose. The Scrum Master should understand these concerns and work to address them, creating conditions for willing participation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 76,
    question: "How should a Scrum Master handle requests from other departments for the Development Team to do 'quick favors'?",
    options: [
      "Politely decline all requests to protect the team's Sprint commitment",
      "Coach the organization on working through the Product Owner for prioritization",
      "Allow small requests that take less than a day of team effort",
      "Create a separate backlog for these requests to manage them transparently"
    ],
    correctAnswer: 1,
    explanation: "All work should flow through the Product Backlog and Product Owner for prioritization. The Scrum Master should educate the organization on this principle while helping the Product Owner manage stakeholder expectations and requests effectively.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 77,
    question: "A Development Team wants to split into specialized sub-teams for frontend and backend work. What should the Scrum Master advise?",
    options: [
      "Support this if it increases individual productivity and technical excellence",
      "Coach the team on the benefits of cross-functional collaboration and T-shaped skills",
      "Allow the split but require daily synchronization meetings between sub-teams",
      "Create separate Product Backlogs for frontend and backend work"
    ],
    correctAnswer: 1,
    explanation: "Splitting into specialized sub-teams creates handoffs, dependencies, and integration challenges. The Scrum Master should coach the team on staying cross-functional, encouraging T-shaped skills, and collaborating across specializations to maintain flow and flexibility.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 78,
    question: "What should a Scrum Master do when the Product Owner and stakeholders use the Sprint Review as a status meeting?",
    options: [
      "Allow this as it keeps stakeholders informed about progress",
      "Facilitate the Sprint Review to focus on product inspection and adaptation",
      "Suggest separate status meetings to address stakeholder information needs",
      "Have the team demonstrate only completed work without discussion"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review is for inspecting the increment and adapting the Product Backlog through collaboration. The Scrum Master should facilitate the event to encourage interaction, feedback, and collaborative planning rather than passive status reporting.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 79,
    question: "A Development Team consistently finishes Sprints without a Done increment. What is the Scrum Master's best response?",
    options: [
      "Help the team understand and improve their Definition of Done and capacity planning",
      "Extend Sprint length to give the team more time to complete work",
      "Reduce the number of items selected in Sprint Planning",
      "Remove impediments that are preventing the team from finishing work"
    ],
    correctAnswer: 0,
    explanation: "Consistently not having a Done increment indicates issues with understanding Done, capacity, or planning. The Scrum Master should help the team inspect these factors and improve. This might involve revisiting the Definition of Done, improving forecasting, or addressing quality practices.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 80,
    question: "How should a Scrum Master respond when asked to track 'resource utilization' for Development Team members?",
    options: [
      "Implement time tracking systems to provide accurate utilization data",
      "Explain why utilization metrics are harmful to self-managing teams and value delivery",
      "Track utilization but keep it confidential from team members",
      "Suggest tracking team utilization as an aggregate rather than individuals"
    ],
    correctAnswer: 1,
    explanation: "Utilization metrics drive local optimization and discourage collaboration, slack time for learning, and helping others. The Scrum Master should educate requesters on focusing on outcomes and value delivery rather than individual activity metrics.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 81,
    question: "A Product Owner wants to attend the Daily Scrum to provide updates on stakeholder feedback. What should the Scrum Master advise?",
    options: [
      "The Product Owner can attend but should not provide updates during Daily Scrum",
      "Support this as it improves communication between Product Owner and team",
      "Suggest the Product Owner share updates before or after the Daily Scrum",
      "Create a separate daily meeting for Product Owner updates to the team"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner can attend the Daily Scrum to listen, but the event is for the Development Team to plan their day. Updates should be shared at other times. The Scrum Master should ensure the Daily Scrum maintains its purpose as the team's planning event.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 82,
    question: "What should a Scrum Master do when a Development Team creates elaborate technical documentation that no one reads?",
    options: [
      "Require stakeholders to review documentation to justify the team's effort",
      "Facilitate team discussion about documentation value and their Definition of Done",
      "Mandate that all documentation must be approved by the Product Owner",
      "Eliminate documentation requirements from the Definition of Done"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate the team questioning the value of their documentation practices. If documentation isn't being used, the team should consider whether it's truly valuable or if their Definition of Done needs adjustment based on actual needs.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 83,
    question: "How should a Scrum Master handle a Product Owner who consistently prioritizes new features over fixing known defects?",
    options: [
      "Respect Product Owner authority and don't interfere with prioritization decisions",
      "Coach the Product Owner on the long-term consequences of accumulating technical debt",
      "Have the Development Team fix defects without Product Owner knowledge",
      "Allocate a fixed percentage of each Sprint to defect fixes automatically"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should coach the Product Owner on understanding how defects impact future velocity, quality, and customer satisfaction. This helps the Product Owner make informed prioritization decisions that balance new features with sustainability.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 84,
    question: "A Development Team wants to adopt test-driven development but lacks the skills. What should the Scrum Master do?",
    options: [
      "Hire consultants to implement test-driven development for the team",
      "Help the team acquire skills through training, coaching, or pairing with experts",
      "Suggest they focus on automated testing after development instead",
      "Recommend postponing TDD until team members gain more experience"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help the team acquire needed skills rather than postponing improvements or having others do the work. This might involve arranging training, finding mentors, facilitating learning time, or bringing in coaches who can teach while doing.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 85,
    question: "What should a Scrum Master do when stakeholders interrupt the Development Team during the Sprint with urgent requests?",
    options: [
      "Coach stakeholders on working through the Product Owner for all requests",
      "Allow interruptions for truly urgent issues to maintain stakeholder relationships",
      "Create a formal change request process to manage mid-Sprint changes",
      "Have the team set 'do not disturb' hours to protect their focus time"
    ],
    correctAnswer: 0,
    explanation: "All requests should flow through the Product Owner, who can assess urgency and impact on the Sprint Goal. The Scrum Master should coach stakeholders on this approach while helping the Product Owner manage urgent situations appropriately.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 86,
    question: "How should a Scrum Master respond when the Development Team wants to spend a Sprint on technical exploration without delivering features?",
    options: [
      "Support this as teams should be empowered to manage technical work",
      "Help the team articulate the value to the Product Owner for prioritization",
      "Suggest they do exploration work outside of Sprint time instead",
      "Limit exploration to 20% of Sprint capacity to ensure feature delivery"
    ],
    correctAnswer: 1,
    explanation: "Technical exploration should be in the Product Backlog and prioritized like other work. The Scrum Master should help the Development Team articulate the value (risk reduction, better solutions, informed decisions) so the Product Owner can make prioritization decisions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 87,
    question: "A Development Team member says the Daily Scrum is a waste of time because everyone already knows what everyone is doing. What should the Scrum Master do?",
    options: [
      "Make Daily Scrum optional since the team is already well-coordinated",
      "Explore whether the team is truly synchronized or just assumes they are",
      "Replace Daily Scrum with an online status board to save time",
      "Reduce Daily Scrum frequency to three times per week instead of daily"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should explore whether the team is genuinely synchronized or making assumptions. Even well-coordinated teams benefit from daily replanning. If truly unnecessary, it might indicate team size or other issues, but removing synchronization usually reveals hidden coordination gaps.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 88,
    question: "What should a Scrum Master do when management wants to standardize Sprint length across all teams in the organization?",
    options: [
      "Support standardization as it simplifies organizational planning and coordination",
      "Advocate for teams to choose Sprint length based on their specific context",
      "Suggest a compromise Sprint length that works reasonably well for most teams",
      "Implement the standard length but allow exceptions for special circumstances"
    ],
    correctAnswer: 1,
    explanation: "Sprint length should be determined by each team based on their context, feedback needs, and ability to deliver Done increments. The Scrum Master should help the organization understand that team autonomy in this decision supports effectiveness, though synchronized cadence can help with coordination.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 89,
    question: "A Product Owner complains that the Development Team doesn't understand the business domain. How should the Scrum Master help?",
    options: [
      "Arrange domain training and facilitate increased Product Owner-team interaction",
      "Suggest the Product Owner provide more detailed specifications to compensate",
      "Recommend hiring team members with specific domain expertise",
      "Have the Product Owner attend all team discussions to provide context"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should facilitate domain learning through training, increased collaboration with the Product Owner, interaction with users, and other learning opportunities. Building domain knowledge within the team improves their ability to make good decisions and add value.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 90,
    question: "How should a Scrum Master handle a Development Team that wants to eliminate their Definition of Done to move faster?",
    options: [
      "Allow this temporarily to help the team catch up on overdue commitments",
      "Explain why Definition of Done is essential for maintaining sustainable quality",
      "Suggest simplifying the Definition of Done rather than eliminating it completely",
      "Escalate to management to decide whether quality standards can be reduced"
    ],
    correctAnswer: 1,
    explanation: "Definition of Done ensures transparency and prevents technical debt accumulation. The Scrum Master should coach the team on how eliminating it creates future problems and help them find other ways to address speed concerns, such as improving practices or adjusting forecasting.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 91,
    question: "What should a Scrum Master do when a Product Owner makes all decisions without consulting the Development Team?",
    options: [
      "Respect Product Owner authority over product decisions and don't interfere",
      "Coach the Product Owner on involving the team for better decisions and buy-in",
      "Have the team refuse to work on items until consulted about decisions",
      "Create a formal approval process requiring team sign-off on decisions"
    ],
    correctAnswer: 1,
    explanation: "While the Product Owner has authority over product decisions, better decisions come from leveraging Development Team expertise. The Scrum Master should coach the Product Owner on the benefits of collaboration while respecting their accountability for product direction.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 92,
    question: "A Development Team wants to create a 'technical debt Sprint' to address accumulated quality issues. What should the Scrum Master advise?",
    options: [
      "Support this approach as dedicated time helps address technical debt effectively",
      "Coach the team on addressing technical debt incrementally within regular Sprints",
      "Suggest technical debt Sprints quarterly to maintain quality sustainably",
      "Have the team create a separate technical debt backlog for tracking"
    ],
    correctAnswer: 1,
    explanation: "Technical debt should be addressed continuously within regular Sprints as part of sustainable development. Separate technical debt Sprints suggest the Definition of Done isn't being met. The Scrum Master should help the team build quality in rather than defer it.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 93,
    question: "How should a Scrum Master respond when team members say they don't have time for Sprint Retrospectives?",
    options: [
      "Make Retrospectives optional when the team is under pressure to deliver",
      "Shorten Retrospectives but ensure they still happen every Sprint",
      "Explain why Retrospectives are essential and help the team see value in improvement",
      "Replace Sprint Retrospectives with quarterly improvement planning sessions"
    ],
    correctAnswer: 2,
    explanation: "Feeling too busy for improvement is exactly when Retrospectives are most valuable. The Scrum Master should help the team understand that continuous improvement is essential for sustainability and effectiveness, not a luxury for when things are going well.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 94,
    question: "A Product Owner wants to demonstrate incomplete work at Sprint Review to get early feedback. What should the Scrum Master advise?",
    options: [
      "Allow this as early feedback is valuable even for incomplete work",
      "Explain that only work meeting Definition of Done should be demonstrated",
      "Suggest showing incomplete work only if clearly labeled as work in progress",
      "Recommend scheduling separate feedback sessions for incomplete work"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review is for inspecting the Done increment. Showing incomplete work creates confusion about what's actually Done and potentially releasable. If early feedback is needed, it should happen during refinement or separate sessions, not Sprint Review.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 95,
    question: "What should a Scrum Master do when a Development Team treats their velocity as a target to achieve?",
    options: [
      "Support this as velocity targets help teams improve performance consistently",
      "Coach the team that velocity is a planning tool, not a performance target",
      "Set realistic velocity improvement goals based on historical trends",
      "Use velocity targets but avoid making them part of performance evaluations"
    ],
    correctAnswer: 1,
    explanation: "Treating velocity as a target encourages gaming the numbers through inflated estimates or reduced quality. The Scrum Master should coach that velocity is a planning tool for forecasting, and the focus should be on delivering value, not hitting numbers.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 96,
    question: "How should a Scrum Master handle pressure from management to increase the Development Team's velocity?",
    options: [
      "Work with the team to identify improvement opportunities that increase velocity",
      "Educate management that velocity is relative and not a performance metric",
      "Suggest hiring additional team members to increase overall capacity",
      "Help the team inflate story point estimates to show velocity improvement"
    ],
    correctAnswer: 1,
    explanation: "Velocity is team-specific and relative. The Scrum Master should educate management on focusing on value delivery and outcomes rather than velocity. Pressure to increase velocity typically leads to inflated estimates or reduced quality without actually improving delivery.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 97,
    question: "A Development Team wants to experiment with different Sprint lengths. What should the Scrum Master advise?",
    options: [
      "Maintain consistent Sprint length as changing it disrupts predictability",
      "Support experimentation but encourage consistency once optimal length is found",
      "Suggest varying Sprint length based on the complexity of upcoming work",
      "Allow different Sprint lengths for different types of work or projects"
    ],
    correctAnswer: 1,
    explanation: "Teams should experiment to find their optimal Sprint length, but consistency provides rhythm and predictability once found. The Scrum Master should support learning while helping the team understand the value of consistency for sustainable pace and planning.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 98,
    question: "What should a Scrum Master do when the Product Owner rarely participates in Product Backlog refinement?",
    options: [
      "Have the Development Team conduct refinement without Product Owner involvement",
      "Coach the Product Owner on the importance of collaborative refinement",
      "Take over refinement facilitation to ensure it happens regularly",
      "Cancel refinement sessions until Product Owner availability improves"
    ],
    correctAnswer: 1,
    explanation: "Product Owner participation in refinement is crucial for clarifying requirements and priorities. The Scrum Master should coach the Product Owner on the value of collaborative refinement and work with the organization to address availability impediments.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 99,
    question: "How should a Scrum Master respond when asked to report team capacity for long-term resource planning?",
    options: [
      "Provide historical velocity data for planning purposes with appropriate context",
      "Decline as capacity planning contradicts agile principles and empiricism",
      "Create detailed capacity plans showing team member allocation percentages",
      "Suggest using story points per Sprint as a capacity planning metric"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master can provide historical velocity trends to help with forecasting while explaining the uncertainty inherent in complex work. This provides useful planning information without false precision or treating estimates as commitments.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 100,
    question: "A Development Team is frustrated that stakeholders never attend Sprint Reviews. What should the Scrum Master do?",
    options: [
      "Make Sprint Review optional since stakeholders aren't engaged anyway",
      "Help the Product Owner and team make Sprint Review more valuable for stakeholders",
      "Schedule Sprint Reviews at times convenient for stakeholder attendance",
      "Replace Sprint Review with recorded demonstrations sent to stakeholders"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help make Sprint Review compelling for stakeholders by ensuring it focuses on valuable collaboration and feedback rather than passive demonstration. This might involve better facilitation, clearer invitations, or the Product Owner directly engaging key stakeholders.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 101,
    question: "A Development Team says they don't need Sprint Planning because they already know what to work on. What should the Scrum Master do?",
    options: [
      "Make Sprint Planning optional since the team is self-managing and prepared",
      "Coach the team on Sprint Planning's purpose beyond just selecting work items",
      "Reduce Sprint Planning to 30 minutes to acknowledge their readiness",
      "Allow them to skip Planning but require they document their Sprint Goal"
    ],
    correctAnswer: 1,
    explanation: "Sprint Planning is about more than selecting work—it's about creating the Sprint Goal, collaborative planning, and team alignment. The Scrum Master should help the team understand these deeper purposes and the value of collaborative commitment rather than individual task selection.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 102,
    question: "How should a Scrum Master handle a Product Owner who creates detailed technical designs for every Product Backlog item?",
    options: [
      "Support this as it provides clarity and reduces ambiguity for the team",
      "Coach the Product Owner to focus on outcomes and let the team design solutions",
      "Have the Development Team ignore the designs and implement as they see fit",
      "Suggest the Product Owner hire technical architects to create better designs"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner should define the what and why (outcomes and value), while the Development Team determines how (technical implementation). The Scrum Master coaches the Product Owner on trusting the team's expertise and focusing on value rather than solutions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 103,
    question: "What should a Scrum Master do when the Development Team wants to rewrite legacy code instead of adding new features?",
    options: [
      "Support the team's technical judgment and approve the rewrite Sprint",
      "Help the team present the business case to the Product Owner for prioritization",
      "Suggest incremental refactoring alongside feature development instead",
      "Schedule the rewrite for after current feature commitments are complete"
    ],
    correctAnswer: 1,
    explanation: "Large rewrites should be in the Product Backlog and prioritized by the Product Owner based on value. The Scrum Master helps the Development Team articulate the business value (reduced risk, faster future delivery, better quality) so informed prioritization decisions can be made.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 104,
    question: "A Scrum Team's Sprint Review has become a formal acceptance gate where stakeholders approve or reject work. What should the Scrum Master do?",
    options: [
      "Support this as stakeholder approval ensures quality and business alignment",
      "Facilitate the Sprint Review to focus on collaboration and adaptation instead",
      "Suggest moving acceptance decisions to a separate governance meeting",
      "Have the Product Owner make all acceptance decisions without stakeholder votes"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review should be collaborative inspection and adaptation, not a formal acceptance gate. The Scrum Master should facilitate discussions focused on feedback, learning, and Product Backlog adaptation rather than approval/rejection decisions.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 105,
    question: "How should a Scrum Master respond when a Development Team member is also serving as Scrum Master for another team?",
    options: [
      "Allow this as it promotes knowledge sharing across teams in the organization",
      "Discuss the potential conflicts and impacts on both roles with the individual",
      "Require the person to choose one role to avoid conflicts of interest",
      "Support dual roles but ensure clear time allocation between responsibilities"
    ],
    correctAnswer: 1,
    explanation: "Being both a Development Team member and Scrum Master for different teams can create conflicts, divided attention, and challenges. The Scrum Master should facilitate discussion about these impacts with the individual and organization to find the best approach.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 106,
    question: "A Product Owner wants to pay the Development Team bonuses for completing more story points. What should the Scrum Master advise?",
    options: [
      "Support incentives that motivate the team to increase productivity and performance",
      "Explain how this will likely lead to inflated estimates and gaming the system",
      "Suggest team-based bonuses rather than individual story point achievements",
      "Recommend bonuses based on stakeholder satisfaction scores instead"
    ],
    correctAnswer: 1,
    explanation: "Paying for story points incentivizes gaming the estimation system through inflation rather than genuine improvement. The Scrum Master should educate on how this undermines the usefulness of estimates and damages collaboration by creating competitive dynamics.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 107,
    question: "What should a Scrum Master do when team members consistently volunteer for the same types of work, avoiding other skills?",
    options: [
      "Allow this as people are most productive working in their areas of expertise",
      "Encourage cross-skilling and facilitate pairing across different specializations",
      "Assign work to ensure each person gets exposure to different skill areas",
      "Split the team into specialized groups based on their preferred work types"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should encourage cross-functional skill development to reduce bottlenecks and increase team resilience. This is done through coaching and facilitating pairing opportunities, not by assigning work, which undermines self-management.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 108,
    question: "How should a Scrum Master handle a situation where the Product Owner and stakeholders have conflicting priorities?",
    options: [
      "Facilitate a meeting where conflicts can be discussed and resolved",
      "Remind stakeholders that only the Product Owner decides priorities",
      "Have the Development Team choose which priorities to follow",
      "Escalate the conflict to executive management for resolution"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner has the authority to order the Product Backlog. While the Scrum Master can facilitate understanding between parties, they should educate stakeholders that the Product Owner is accountable for prioritization decisions. The Product Owner may need to collaborate with stakeholders but maintains final authority.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 109,
    question: "A Development Team wants to create separate 'dev' and 'test' roles within the team. What should the Scrum Master advise?",
    options: [
      "Support role specialization if it improves efficiency and quality",
      "Coach the team that everyone is responsible for quality and testing",
      "Allow separation but require regular role rotation between team members",
      "Suggest hiring dedicated testers to join the Development Team"
    ],
    correctAnswer: 1,
    explanation: "In Scrum, quality is everyone's responsibility, not relegated to specific roles. The Scrum Master should coach the team on shared ownership of quality and testing as part of their Definition of Done, preventing the creation of mini-waterfalls within Sprints.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 110,
    question: "What should a Scrum Master do when the organization wants to evaluate Scrum Masters based on team velocity?",
    options: [
      "Accept this metric as it reflects the Scrum Master's effectiveness",
      "Educate that velocity isn't comparable across teams or a measure of Scrum Master performance",
      "Suggest using velocity improvement trends rather than absolute numbers",
      "Propose alternative metrics like Sprint Goal achievement rates"
    ],
    correctAnswer: 1,
    explanation: "Velocity is team-specific and influenced by many factors beyond Scrum Master effectiveness. Evaluating Scrum Masters on velocity creates perverse incentives. The Scrum Master should educate on focusing on team health, impediment removal, and organizational change outcomes instead.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 111,
    question: "A Development Team says Scrum is slowing them down with too many meetings. How should the Scrum Master respond?",
    options: [
      "Reduce meeting frequency and duration to address team concerns",
      "Explore why events feel like overhead and help the team find value in them",
      "Allow the team to skip events they consider unproductive",
      "Combine multiple events into single longer sessions to save time"
    ],
    correctAnswer: 1,
    explanation: "Scrum events are opportunities for inspection and adaptation, not overhead. The Scrum Master should explore why the team views them as burdensome—ineffective facilitation, lack of preparation, poor outcomes—and improve event effectiveness rather than reducing or eliminating them.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 112,
    question: "How should a Scrum Master handle a Product Owner who never says no to stakeholder requests?",
    options: [
      "Respect the Product Owner's authority and don't interfere with stakeholder management",
      "Coach the Product Owner on the importance of prioritization and trade-offs",
      "Have the Development Team push back on unrealistic expectations directly",
      "Create a stakeholder request queue with automatic acceptance criteria"
    ],
    correctAnswer: 1,
    explanation: "A Product Owner who never says no isn't effectively prioritizing or managing scope. The Scrum Master should coach them on making trade-off decisions, saying no to low-value work, and focusing on outcomes rather than satisfying all requests.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 113,
    question: "What should a Scrum Master do when a Development Team wants to stop estimating Product Backlog items?",
    options: [
      "Explain that estimation is required by the Scrum framework and must continue",
      "Explore why they want to stop and whether forecasting could work without estimates",
      "Allow them to stop but require tracking actual time spent on items",
      "Suggest simplified estimation techniques like t-shirt sizing instead"
    ],
    correctAnswer: 1,
    explanation: "Scrum doesn't mandate estimation. The Scrum Master should explore the team's reasoning and help them determine if they can still forecast Sprint capacity and plan effectively without estimates. Some mature teams can, while others need estimates for effective planning.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 114,
    question: "A stakeholder asks the Scrum Master why the team isn't working nights and weekends like they used to. How should the Scrum Master respond?",
    options: [
      "Explain that sustainable pace is essential for long-term productivity and quality",
      "Suggest the team needs to be more committed and work harder",
      "Negotiate specific deadlines when overtime would be appropriate",
      "Recommend hiring additional team members to handle the workload"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should educate stakeholders on sustainable pace being essential for maintaining quality, creativity, and preventing burnout. Regular overtime indicates systemic problems with planning, expectations, or capacity that need addressing.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 115,
    question: "How should a Scrum Master handle a Development Team that wants to create detailed project plans with Gantt charts?",
    options: [
      "Discourage this as it contradicts agile principles and empirical process control",
      "Explore why they want this and help them understand alternative approaches",
      "Allow it if it helps the team organize and coordinate their work effectively",
      "Suggest creating high-level roadmaps instead of detailed project plans"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should understand the team's underlying needs—perhaps coordination, visibility, or stakeholder pressure. Then help them find approaches that provide needed benefits while maintaining empiricism and adaptability, such as Product Backlog ordering or release planning.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 116,
    question: "What should a Scrum Master do when the Product Owner wants to split the Product Backlog into 'must-haves' and 'nice-to-haves'?",
    options: [
      "Support this approach as it clarifies priorities for the Development Team",
      "Coach the Product Owner that the backlog order itself represents priorities",
      "Suggest using MoSCoW prioritization with four categories instead of two",
      "Allow categorization but ensure each category has its own ordering"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog is already ordered by priority. The Scrum Master should help the Product Owner understand that creating categories can obscure true priorities and that continuous ordering provides clearer prioritization and flexibility.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 117,
    question: "A Development Team wants to work from home two days per week. How should the Scrum Master respond?",
    options: [
      "Establish a policy requiring all team members to be present in the office",
      "Support the team's self-management in determining their working arrangements",
      "Allow remote work only for individual tasks, not collaborative work",
      "Require Product Owner approval for any remote work arrangements"
    ],
    correctAnswer: 1,
    explanation: "Self-managing teams decide how they work. The Scrum Master should support the team determining their working arrangements while ensuring they maintain effectiveness in collaboration and communication. Remote work is compatible with Scrum when well-executed.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 118,
    question: "How should a Scrum Master handle a Product Owner who changes priorities multiple times during a Sprint?",
    options: [
      "Protect the Sprint by preventing any priority changes until the next Sprint",
      "Facilitate discussion about impact on the Sprint Goal with each change",
      "Allow changes but require the Product Owner to notify stakeholders",
      "Have the team refuse work on changed priorities until next Sprint"
    ],
    correctAnswer: 1,
    explanation: "The key consideration is the Sprint Goal. The Scrum Master should facilitate discussions about whether priority changes affect Sprint Goal achievement. If the goal becomes obsolete, Sprint cancellation might be appropriate. Otherwise, the team adapts their plan while maintaining Sprint Goal focus.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 119,
    question: "What should a Scrum Master do when stakeholders complain that Scrum Teams are 'not accountable' because they don't commit to fixed scope and dates?",
    options: [
      "Explain that teams are accountable to Sprint Goals and delivering value, not fixed plans",
      "Suggest creating fixed-scope commitments to improve stakeholder trust",
      "Have teams provide more detailed estimates to enable fixed-date commitments",
      "Implement change request processes to track and justify scope changes"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should educate stakeholders that accountability in Scrum means committing to Sprint Goals and delivering working software frequently, not committing to fixed scopes and dates. This enables adaptation while maintaining transparency and accountability to outcomes.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 120,
    question: "A Development Team member complains that Sprint Retrospectives never lead to actual changes. What should the Scrum Master do?",
    options: [
      "Take ownership of implementing the improvement actions identified in Retrospectives",
      "Facilitate better follow-through on improvement actions by the team",
      "Stop having Retrospectives until the team is ready to commit to changes",
      "Document all improvements and report lack of progress to management"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help the team improve their ability to follow through on identified improvements. This might involve better action identification, tracking, or addressing impediments to implementation. The team must own and act on improvements, not just identify them.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 121,
    question: "How should a Scrum Master respond when asked to create individual performance reviews for Development Team members?",
    options: [
      "Create reviews based on contribution to Sprint Goals and team collaboration",
      "Explain that Scrum focuses on team performance rather than individual ratings",
      "Provide objective metrics like story points completed and code commits",
      "Ask team members to provide peer reviews of each other's performance"
    ],
    correctAnswer: 1,
    explanation: "Scrum emphasizes team performance over individual performance. The Scrum Master should educate that individual performance reviews can undermine collaboration and team dynamics. If organizational policies require reviews, focus should be on contribution to team success and growth.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 122,
    question: "What should a Scrum Master do when the Development Team wants to replace Daily Scrums with a status board everyone updates?",
    options: [
      "Allow this as long as everyone stays synchronized through the board",
      "Explain that face-to-face conversation in Daily Scrum provides more value than status boards",
      "Suggest using the board in addition to Daily Scrum for better transparency",
      "Support the experiment and help the team assess if it works for them"
    ],
    correctAnswer: 3,
    explanation: "The Scrum Master should support the team's self-management in experimenting with their practices. Help them try it and objectively assess whether it maintains the synchronization and planning benefits of Daily Scrum, then adapt based on results.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 123,
    question: "A Product Owner insists on attending the entire Sprint Retrospective. What should the Scrum Master advise?",
    options: [
      "The Product Owner is part of the Scrum Team and should attend Retrospectives",
      "Explain benefits of Product Owner attendance while allowing team input on participation",
      "Exclude the Product Owner to ensure the team can speak freely about issues",
      "Have separate Retrospectives with and without Product Owner attendance"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is part of the Scrum Team and typically should attend Retrospectives. However, if their presence inhibits open discussion, the Scrum Master should facilitate this conversation with the team and Product Owner to find approaches that work for everyone.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 124,
    question: "How should a Scrum Master handle a situation where team members are routinely pulled into production support issues?",
    options: [
      "Work with the organization to create a dedicated support team to handle production issues",
      "Help the team account for support time in their Sprint capacity planning",
      "Protect Sprint commitments by preventing team members from doing support work",
      "Create a separate support backlog that the team works from in parallel"
    ],
    correctAnswer: 1,
    explanation: "If production support is part of the team's reality, they should account for this in Sprint Planning by reserving capacity. The Scrum Master can also help the organization understand the impact on delivery and explore whether a dedicated support approach might be beneficial.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 125,
    question: "What should a Scrum Master do when a Development Team wants to adopt Kanban practices within their Sprint?",
    options: [
      "Discourage this as it conflicts with Scrum's time-boxed iteration approach",
      "Support the team experimenting with Kanban practices if they find value",
      "Suggest the team switch fully to Kanban instead of mixing frameworks",
      "Allow Kanban only for operational work, not feature development"
    ],
    correctAnswer: 1,
    explanation: "Teams can supplement Scrum with complementary practices like Kanban visualization, WIP limits, and flow metrics if they find them valuable. The Scrum Master should support experimentation while ensuring Scrum's accountabilities and events remain intact.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 126,
    question: "A stakeholder complains that the Development Team is not responsive enough to urgent production issues. How should the Scrum Master respond?",
    options: [
      "Have the team drop everything immediately when production issues arise",
      "Facilitate discussion about balancing new work with production support appropriately",
      "Create a separate on-call rotation that doesn't affect Sprint commitments",
      "Explain that Sprint commitments take priority over production support"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate conversations about appropriate balance between Sprint work and production support. This might involve capacity planning, response time expectations, or organizational changes. The goal is sustainable approaches that serve both needs.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 127,
    question: "How should a Scrum Master handle a Product Owner who accepts work on behalf of the Development Team?",
    options: [
      "Allow this as the Product Owner represents stakeholder interests to the team",
      "Clarify that only the Development Team can commit to work during Sprint Planning",
      "Support the Product Owner's decision if it aligns with organizational priorities",
      "Have the Development Team refuse work the Product Owner accepted without consultation"
    ],
    correctAnswer: 1,
    explanation: "Only the Development Team can commit to what they will accomplish. The Product Owner proposes what should be done based on value, but the team decides what they can accomplish. The Scrum Master should coach both parties on this crucial distinction.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 128,
    question: "What should a Scrum Master do when the Development Team wants to create a 'Definition of Ready' for Product Backlog items?",
    options: [
      "Discourage this as it creates handoffs and gates that contradict agile principles",
      "Support the team defining when items are ready for Sprint Planning",
      "Explain that Definition of Done is sufficient without needing Definition of Ready",
      "Allow Definition of Ready but ensure it doesn't create delays or bottlenecks"
    ],
    correctAnswer: 1,
    explanation: "Definition of Ready can help teams communicate what preparation is needed for effective Sprint Planning. The Scrum Master should support this while ensuring it doesn't become a rigid gate or excuse for poor Product Owner-team collaboration during refinement.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 129,
    question: "A Development Team member asks the Scrum Master to resolve a technical disagreement between two team members. What should the Scrum Master do?",
    options: [
      "Facilitate a discussion where both parties present their perspectives to the team",
      "Make a technical decision based on experience and best practices",
      "Ask the Product Owner to decide based on business priorities",
      "Have the team vote to determine which technical approach to use"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master facilitates team self-management by helping them resolve conflicts collaboratively. They should facilitate discussion and decision-making rather than making technical decisions, which are the Development Team's domain.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 130,
    question: "How should a Scrum Master respond when management wants to compare velocity across different Scrum Teams?",
    options: [
      "Provide velocity data but emphasize it's for information only, not comparison",
      "Educate that velocity is team-specific and not comparable across different teams",
      "Normalize velocity across teams using factors like team size and complexity",
      "Suggest comparing trends rather than absolute velocity numbers"
    ],
    correctAnswer: 1,
    explanation: "Velocity is relative to each team and not comparable—different teams estimate differently, work on different products, and have different contexts. The Scrum Master should educate management to focus on value delivery and outcomes rather than velocity comparisons.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 131,
    question: "What should a Scrum Master do when a Development Team wants to demo the same increment in multiple Sprint Reviews?",
    options: [
      "Allow this as it gives more stakeholders opportunity to provide feedback",
      "Explain that Sprint Review should focus on new work completed in the Sprint",
      "Support repeated demos if different stakeholder groups need to see the work",
      "Suggest recording the demo once and sharing it instead of multiple reviews"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review is about inspecting the increment created during that Sprint and adapting the Product Backlog. While stakeholders who missed it might need to see previous work, the Sprint Review should focus on the current Sprint's increment and forward-looking adaptation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 132,
    question: "A Product Owner wants the Development Team to estimate in hours instead of story points. How should the Scrum Master respond?",
    options: [
      "Support the change as hours provide more concrete and understandable estimates",
      "Explain the benefits of relative estimation over time-based estimation",
      "Allow the team to decide which estimation approach works best for them",
      "Suggest using both hours and story points for comprehensive planning"
    ],
    correctAnswer: 2,
    explanation: "Estimation technique is the team's choice. The Scrum Master can educate on relative vs. absolute estimation trade-offs, but ultimately the Development Team decides what works for their forecasting. Both approaches can be valid depending on context.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 133,
    question: "How should a Scrum Master handle a situation where the Product Owner makes promises to stakeholders without consulting the Development Team?",
    options: [
      "Coach the Product Owner on collaborating with the team before making commitments",
      "Have the Development Team refuse to honor commitments made without their input",
      "Accept that Product Owners have authority to make stakeholder commitments",
      "Create a policy requiring team approval before Product Owner makes promises"
    ],
    correctAnswer: 0,
    explanation: "The Product Owner should collaborate with the Development Team to understand feasibility before making commitments. The Scrum Master coaches the Product Owner on why this collaboration leads to better outcomes and more reliable commitments.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 134,
    question: "What should a Scrum Master do when team members stop talking during Daily Scrums and just update a board instead?",
    options: [
      "Allow this if the board provides sufficient transparency and coordination",
      "Facilitate discussion about whether silent board updates serve Daily Scrum's purpose",
      "Require verbal updates from all team members during Daily Scrums",
      "Suggest the team alternate between verbal updates and board-only updates"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help the team reflect on whether their current practice serves the Daily Scrum's purpose of synchronization and daily replanning. They might discover the board is sufficient, or that conversation provides important context and coordination.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 135,
    question: "A Development Team wants to spend Sprints learning new technologies before implementing features. What should the Scrum Master advise?",
    options: [
      "Support dedicated learning Sprints to build necessary technical capabilities",
      "Help the team propose learning as Product Backlog items for prioritization",
      "Suggest team members learn new technologies on their own time",
      "Allocate a fixed percentage of each Sprint to learning activities"
    ],
    correctAnswer: 1,
    explanation: "Learning and capability building have value and belong in the Product Backlog for prioritization. The Scrum Master helps the team articulate this value to the Product Owner, who can then prioritize learning against other work based on strategic importance.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 136,
    question: "How should a Scrum Master respond when a Development Team complains about too much time spent in Product Backlog refinement?",
    options: [
      "Limit refinement to exactly 10% of Sprint capacity as the guideline recommends",
      "Investigate why refinement is taking excessive time and help improve efficiency",
      "Have the Product Owner do more refinement independently before involving the team",
      "Reduce refinement time even if it means less prepared items for Sprint Planning"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should understand why refinement takes excessive time—unclear requirements, poor Product Owner preparation, ineffective techniques, or complexity. Then help improve refinement effectiveness rather than simply reducing time, which might harm Sprint Planning quality.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 137,
    question: "What should a Scrum Master do when stakeholders want more detailed progress reports than Sprint Reviews provide?",
    options: [
      "Create detailed status reports to supplement Sprint Review information",
      "Help stakeholders understand what transparency Scrum already provides",
      "Have the Product Owner provide additional reporting to stakeholders",
      "Implement automated dashboards showing real-time team progress"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help stakeholders understand the transparency Scrum provides through Sprint Reviews, Product Backlog visibility, and Definition of Done. If genuine information gaps exist, address those rather than creating additional reporting overhead.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 138,
    question: "A Development Team wants to keep a team member's contributions confidential from the Product Owner. How should the Scrum Master respond?",
    options: [
      "Support this to maintain team trust and psychological safety",
      "Explain that transparency is a Scrum value and secrets undermine it",
      "Understand why they want confidentiality and address underlying issues",
      "Allow confidentiality but only for sensitive performance issues"
    ],
    correctAnswer: 2,
    explanation: "The desire for confidentiality suggests underlying issues—fear of judgment, lack of trust, or past negative experiences. The Scrum Master should understand these root causes and work to create conditions where transparency doesn't create fear or negative consequences.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 139,
    question: "How should a Scrum Master handle a Product Owner who spends most of their time on future roadmap planning instead of current Sprint support?",
    options: [
      "Accept this as appropriate strategic focus for the Product Owner role",
      "Coach the Product Owner on the importance of being available during Sprints",
      "Have the Development Team escalate concerns about Product Owner availability",
      "Suggest the Product Owner delegate current Sprint support to a proxy"
    ],
    correctAnswer: 1,
    explanation: "While strategic planning is important, Product Owner availability during Sprints is crucial for answering questions, providing feedback, and collaborating with the team. The Scrum Master should coach on balancing strategic and tactical responsibilities effectively.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 140,
    question: "What should a Scrum Master do when the Development Team wants to create extensive documentation for compliance requirements?",
    options: [
      "Discourage documentation as it contradicts the agile principle of working software over documentation",
      "Help the team integrate compliance documentation into their Definition of Done",
      "Suggest hiring technical writers so developers can focus on coding",
      "Negotiate with compliance to reduce documentation requirements for agile teams"
    ],
    correctAnswer: 1,
    explanation: "If documentation is necessary for compliance, it should be part of the Definition of Done. The Scrum Master helps the team create documentation efficiently while meeting requirements, rather than treating it as separate from Done work or trying to avoid compliance obligations.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 141,
    question: "A stakeholder insists that certain Product Backlog items must be completed by specific dates. How should the Scrum Master respond?",
    options: [
      "Have the Development Team commit to the dates to satisfy stakeholder needs",
      "Help the stakeholder understand empirical forecasting and inherent uncertainty",
      "Create a project plan showing exactly when each item will be completed",
      "Suggest the stakeholder work directly with the Product Owner on scheduling"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate stakeholders on empirical forecasting—using historical data for probabilistic predictions while acknowledging uncertainty. This provides useful planning information without false precision or commitments that ignore complexity.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 142,
    question: "How should a Scrum Master handle a Development Team that wants to create architecture diagrams for every Sprint?",
    options: [
      "Support this as good technical documentation practice for complex systems",
      "Help the team determine what documentation provides value and when",
      "Suggest creating architecture diagrams only for major design changes",
      "Discourage per-Sprint documentation in favor of maintaining a single living architecture document"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master helps the team think about documentation value—what's the purpose, who uses it, and when is it needed. The team should decide documentation practices based on actual value rather than following rules or avoiding all documentation.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 143,
    question: "What should a Scrum Master do when the Product Owner wants to add 'stretch goals' beyond the Sprint forecast?",
    options: [
      "Support this as it motivates the team to exceed expectations and deliver more value",
      "Explain that stretch goals can undermine Sprint Goal commitment and focus",
      "Allow stretch goals if they don't interfere with Sprint Goal achievement",
      "Suggest the Product Owner keep stretch goals private until the team requests more work"
    ],
    correctAnswer: 1,
    explanation: "Stretch goals can undermine commitment to the Sprint Goal and create pressure for unsustainable pace. The Scrum Master should help the Product Owner understand that if the team finishes early, they can pull additional items in collaboration with the Product Owner.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 144,
    question: "A Development Team member consistently misses Sprint commitments but won't ask for help. What should the Scrum Master do?",
    options: [
      "Facilitate team discussion about collaboration and asking for help",
      "Privately coach the individual on seeking help when needed",
      "Have the team implement pair programming to improve collaboration",
      "Work with the individual to identify and address skill gaps"
    ],
    correctAnswer: 0,
    explanation: "This is a team dynamics issue that should be addressed by the team. The Scrum Master facilitates discussions about collaboration, asking for help, and team support rather than coaching individuals separately, which would undermine team self-management.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 145,
    question: "How should a Scrum Master respond when management wants to add a new member to a high-performing Development Team?",
    options: [
      "Support adding the member as more people increase delivery capacity",
      "Explain how adding people temporarily disrupts team performance and dynamics",
      "Suggest the new member join a different team to avoid disrupting this one",
      "Allow the addition but provide extra coaching during the transition period"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate management that adding people to established teams creates onboarding overhead and can temporarily reduce performance. Help them understand team dynamics and consider whether the disruption is worth the eventual benefit.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 146,
    question: "What should a Scrum Master do when the Development Team wants to skip Sprint Review because there's 'nothing to show'?",
    options: [
      "Allow skipping Sprint Review since there's no increment to inspect",
      "Facilitate Sprint Review focused on why no increment was created and what to adapt",
      "Suggest canceling the Sprint and starting fresh with better planning",
      "Use Sprint Review time for additional refinement of upcoming work"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review should still occur to inspect why no increment was created and adapt the Product Backlog and approach. This transparency is crucial for learning and improvement, making the event especially valuable when things don't go as planned.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 147,
    question: "A Product Owner wants to use the Sprint Retrospective to discuss product strategy. What should the Scrum Master advise?",
    options: [
      "Support this as product strategy affects how the team works",
      "Explain that Retrospective focuses on process improvement, not product discussions",
      "Allow strategy discussion if time permits after process improvement topics",
      "Suggest scheduling a separate product strategy session outside Retrospective"
    ],
    correctAnswer: 1,
    explanation: "Sprint Retrospective is for the Scrum Team to inspect how they work together and plan improvements. Product strategy discussions belong in Sprint Planning, refinement, or separate sessions. The Scrum Master should protect the Retrospective's focus on team process improvement.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 148,
    question: "How should a Scrum Master handle a Development Team that refuses to let anyone observe their Daily Scrum?",
    options: [
      "Respect the team's decision as Daily Scrum is their event to manage",
      "Explain that transparency means allowing observation while maintaining team focus",
      "Understand why they want privacy and address underlying concerns",
      "Require that Daily Scrums be open to maintain organizational transparency"
    ],
    correctAnswer: 2,
    explanation: "The desire for privacy suggests underlying issues—fear of micromanagement, past negative experiences, or misunderstanding about observation vs. participation. The Scrum Master should understand and address these concerns while coaching on balancing transparency with effective team coordination.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 149,
    question: "What should a Scrum Master do when stakeholders complain that Sprint Reviews are too informal and lack structure?",
    options: [
      "Add more structure with formal agendas and presentation templates",
      "Explain that collaboration is more important than formality in Sprint Reviews",
      "Balance structure with collaboration to meet stakeholder expectations",
      "Maintain informality as it encourages better feedback and interaction"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master should find balance between structure that makes stakeholders comfortable and informality that encourages collaboration. Some structure can help, but Sprint Review should remain collaborative and conversational rather than formal presentation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 150,
    question: "A Development Team wants to eliminate Sprint Goals because they just do whatever items they select. What should the Scrum Master do?",
    options: [
      "Allow this as teams are self-managing and can choose their practices",
      "Coach the team on the purpose and value of cohesive Sprint Goals",
      "Suggest using a generic goal like 'complete selected backlog items'",
      "Focus on improving Sprint Planning to create better Sprint Goals"
    ],
    correctAnswer: 1,
    explanation: "Sprint Goals provide coherence, focus, and flexibility. The Scrum Master should coach the team on creating meaningful goals that represent the Sprint's purpose beyond just completing items. This helps the team see sprints as coherent increments of value rather than arbitrary collections of tasks.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 151,
    question: "How should a Scrum Master respond when the Product Owner wants to prioritize items that help achieve organizational OKRs over customer-facing features?",
    options: [
      "Support this as organizational objectives should drive Product Backlog prioritization",
      "Coach the Product Owner on balancing strategic objectives with customer value delivery",
      "Suggest alternating Sprints between OKR-focused and customer-focused work",
      "Have the Development Team evaluate which priorities deliver the most business value"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is accountable for maximizing product value, which typically involves balancing various concerns including organizational objectives, customer needs, and technical health. The Scrum Master coaches the Product Owner on considering all factors in prioritization decisions rather than focusing exclusively on one area.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 152,
    question: "What should a Scrum Master do when a Development Team creates informal sub-teams that only work on certain types of items?",
    options: [
      "Allow this as it leverages specialization and improves individual efficiency",
      "Coach the team on maintaining cross-functionality and avoiding silos",
      "Formalize the sub-teams into separate Scrum Teams with dedicated backlogs",
      "Rotate sub-team membership regularly to prevent permanent specialization"
    ],
    correctAnswer: 1,
    explanation: "Informal sub-teams based on specialization create knowledge silos, bottlenecks, and reduce team resilience. The Scrum Master should coach the team on staying cross-functional, encouraging knowledge sharing, and collaborating across specialties.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 153,
    question: "A stakeholder asks the Scrum Master to provide weekly status reports on team progress. How should the Scrum Master respond?",
    options: [
      "Create weekly status reports to maintain positive stakeholder relationships",
      "Invite the stakeholder to Sprint Reviews for direct visibility into progress",
      "Ask the Product Owner to provide stakeholder updates instead",
      "Suggest the stakeholder review the Product Backlog and burndown directly"
    ],
    correctAnswer: 1,
    explanation: "Sprint Reviews provide stakeholder visibility into progress and opportunity for collaboration. The Scrum Master should help stakeholders engage with Scrum events rather than creating separate reporting mechanisms. If Sprint Review frequency isn't sufficient, address that rather than adding status reports.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 154,
    question: "How should a Scrum Master handle a Development Team that creates very detailed task breakdowns that take hours to maintain?",
    options: [
      "Support detailed task tracking as it improves transparency and accountability",
      "Help the team evaluate whether the task detail provides value worth the effort",
      "Suggest using a tool to automate task tracking and reduce manual effort",
      "Mandate simpler task tracking to reduce planning overhead for the team"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate the team's reflection on whether their task tracking provides value proportional to the effort. Teams should find the right level of detail that helps them coordinate without becoming burdensome overhead.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 155,
    question: "What should a Scrum Master do when the Product Owner wants to lock down the Product Backlog order for an entire quarter?",
    options: [
      "Support this as it provides predictability and stability for planning",
      "Explain that the Product Backlog should remain adaptable based on learning",
      "Allow locked ordering but require quarterly reviews to adjust priorities",
      "Suggest locking near-term items while keeping longer-term items flexible"
    ],
    correctAnswer: 1,
    explanation: "The Product Backlog should be continuously refined and reordered based on learning and changing circumstances. The Scrum Master should coach the Product Owner on maintaining adaptability while acknowledging the need for reasonable short-term stability.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 156,
    question: "A Development Team asks the Scrum Master to make all their external communications and handle stakeholder interactions. What should the Scrum Master do?",
    options: [
      "Accept this responsibility to shield the team and let them focus on development",
      "Coach the team on building their own communication skills and stakeholder relationships",
      "Share communication responsibilities with willing team members",
      "Have the Product Owner handle all external communications instead"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should coach the team toward building their own communication capabilities rather than creating dependency. While the Scrum Master can facilitate and support, teams should develop the ability to communicate effectively with stakeholders.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 157,
    question: "How should a Scrum Master respond when management wants to standardize tools across all Scrum Teams?",
    options: [
      "Support standardization as it simplifies training and cross-team collaboration",
      "Advocate for teams choosing their own tools based on their needs",
      "Suggest a standard toolset but allow exceptions for justified cases",
      "Implement standard tools but let teams customize them extensively"
    ],
    correctAnswer: 1,
    explanation: "Self-managing teams should choose tools that work for them. While the Scrum Master can share information about trade-offs, teams should make their own tool decisions. However, in some organizational contexts, reasonable standardization might be necessary—the key is team input in those decisions.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 158,
    question: "What should a Scrum Master do when the Development Team spends significant Sprint time fixing bugs in previously 'Done' work?",
    options: [
      "Accept this as normal technical work and include bug fixes in Sprint Planning",
      "Investigate why Done work has bugs and improve the Definition of Done",
      "Create a separate bug-fixing Sprint to address quality issues",
      "Have the team allocate a fixed percentage of each Sprint to bug fixes"
    ],
    correctAnswer: 1,
    explanation: "Significant bugs in Done work suggest the Definition of Done isn't ensuring adequate quality. The Scrum Master should help the team strengthen their Definition of Done and improve practices to prevent defects rather than just planning time to fix them.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 159,
    question: "A Product Owner complains that Sprint Reviews take too long. What should the Scrum Master do?",
    options: [
      "Reduce Sprint Review duration regardless of Sprint length",
      "Investigate why Sprint Review feels too long and improve its effectiveness",
      "Limit the number of stakeholders to reduce discussion time",
      "Have the Development Team demonstrate without interactive discussion"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should understand why Sprint Review feels too long—poor preparation, unfocused discussion, or wrong participants. Then help improve effectiveness rather than simply reducing time, which might reduce valuable collaboration and feedback.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 160,
    question: "How should a Scrum Master handle a situation where two Development Team members won't work together due to personality conflicts?",
    options: [
      "Separate the team members to avoid conflict and maintain productivity",
      "Facilitate a conversation to address the conflict and find resolution",
      "Have the team establish working agreements about professional behavior",
      "Escalate to HR or management to resolve the interpersonal issue"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate conflict resolution by helping team members communicate and find ways to work together professionally. If facilitation doesn't resolve it, the team might need to establish working agreements. Separation should be a last resort after attempting resolution.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 161,
    question: "What should a Scrum Master do when the Product Owner wants to demonstrate work to stakeholders before Sprint Review?",
    options: [
      "Allow this as early feedback helps improve the Sprint Review demonstration",
      "Explain that Sprint Review is for stakeholder inspection and shouldn't be pre-shown",
      "Support pre-demos if they don't replace the formal Sprint Review event",
      "Suggest the Product Owner wait to get authentic stakeholder reactions"
    ],
    correctAnswer: 2,
    explanation: "Product Owners can get feedback anytime, including before Sprint Review. The key is that Sprint Review still occurs as a collaborative event for inspecting the increment and adapting the Product Backlog, not just a rehearsed presentation.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 162,
    question: "A Development Team wants to adopt continuous deployment but the Product Owner is concerned about losing control. How should the Scrum Master help?",
    options: [
      "Support the Product Owner's concern and discourage continuous deployment",
      "Facilitate discussion about how continuous deployment works with Product Owner authority",
      "Explain that continuous deployment is a team decision the Product Owner can't block",
      "Suggest a trial period where the team deploys automatically but Product Owner can rollback"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should facilitate understanding between the Development Team and Product Owner about how continuous deployment can work while maintaining Product Owner control over releases. This might involve feature toggles, release strategies, or deployment vs. release distinctions.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 163,
    question: "How should a Scrum Master respond when a Development Team wants to work in complete silence with no conversation?",
    options: [
      "Support this if the team believes silence improves their focus and productivity",
      "Explore why they want silence and ensure essential collaboration still happens",
      "Require verbal communication during Daily Scrums and pairing activities at minimum",
      "Suggest noise-cancelling headphones as a compromise for individual focus time"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should understand what's driving the desire for silence and ensure essential collaboration doesn't suffer. Teams need to communicate to self-organize effectively, but they can find balance between focused work time and collaborative activities.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 164,
    question: "What should a Scrum Master do when stakeholders bypass the Product Owner and pressure the Development Team to work on specific items?",
    options: [
      "Allow this when stakeholders have urgent or important requests for the team",
      "Coach stakeholders and team on working through the Product Owner for prioritization",
      "Have the team document stakeholder requests and forward them to Product Owner",
      "Create an escalation process for stakeholder requests that bypass normal channels"
    ],
    correctAnswer: 1,
    explanation: "All work should flow through the Product Owner for prioritization. The Scrum Master coaches stakeholders on why this is important and helps the Development Team redirect requests appropriately while maintaining positive stakeholder relationships.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 165,
    question: "A Product Owner wants to personally approve every commit before it's merged to the main branch. What should the Scrum Master advise?",
    options: [
      "Support this as it ensures Product Owner visibility into all changes",
      "Explain that technical implementation details aren't Product Owner accountability",
      "Suggest the Product Owner review only significant architectural changes",
      "Have the Development Team implement automated approvals based on predefined criteria"
    ],
    correctAnswer: 1,
    explanation: "How work is implemented technically is the Development Team's domain. The Product Owner shouldn't need to approve technical implementation details. The Scrum Master should coach on appropriate boundaries while ensuring the Product Owner has needed visibility into what's being delivered.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 166,
    question: "How should a Scrum Master handle a Development Team that wants to use different Definition of Done for different types of work?",
    options: [
      "Allow this as different work types may have different quality requirements",
      "Explain that a single Definition of Done ensures consistent quality standards",
      "Support variations if they represent additional criteria, not relaxed standards",
      "Have the team create separate backlogs for different work types and standards"
    ],
    correctAnswer: 2,
    explanation: "The Definition of Done ensures consistent quality. Different work types can have additional specific criteria, but the baseline Definition of Done should apply to all work. The Scrum Master should coach on maintaining quality standards while acknowledging some work may need extra considerations.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 167,
    question: "What should a Scrum Master do when management questions why the team isn't 100% utilized?",
    options: [
      "Explain that utilization metrics are harmful and the focus should be on value delivery",
      "Work with the team to take on more work to improve utilization rates",
      "Create reports showing the team is actually highly utilized across all activities",
      "Educate that some slack time enables collaboration, learning, and sustainable pace"
    ],
    correctAnswer: 0,
    explanation: "The Scrum Master should educate management that high utilization creates bottlenecks, reduces collaboration, and prevents improvement time. The focus should be on value delivered and outcomes achieved, not maximizing individual utilization which is a local optimization.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 168,
    question: "A Development Team wants to create a 'stabilization period' at the end of each Sprint before the Sprint Review. What should the Scrum Master advise?",
    options: [
      "Support this as it ensures the increment is truly ready for Sprint Review",
      "Coach the team that work should meet Definition of Done throughout the Sprint",
      "Allow stabilization time but encourage reducing it over time",
      "Suggest extending Sprint length to include adequate stabilization time"
    ],
    correctAnswer: 1,
    explanation: "Needing stabilization periods suggests work isn't Done when the team thinks it is. The Scrum Master should coach on building quality in continuously and ensuring the Definition of Done produces truly Done increments without needing stabilization phases.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 169,
    question: "How should a Scrum Master respond when the Product Owner wants to use Sprint Review to assign blame for missed Sprint Goals?",
    options: [
      "Allow this as it creates accountability for meeting commitments",
      "Redirect the Sprint Review to focus on the product and adaptation, not blame",
      "Suggest discussing team performance issues in Retrospective instead",
      "Have the team explain the reasons for missing the Sprint Goal"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review is about inspecting the product increment and adapting the Product Backlog, not assigning blame. The Scrum Master should facilitate focus on learning, adaptation, and forward progress rather than blame, which undermines psychological safety and collaboration.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 170,
    question: "What should a Scrum Master do when a Development Team wants to replace Story Points with the #NoEstimates approach?",
    options: [
      "Discourage this as Scrum requires estimation for Sprint Planning",
      "Support the team experimenting with No Estimates if they can still plan effectively",
      "Require they try No Estimates for at least three Sprints before deciding",
      "Suggest keeping story points but reducing the precision of estimates"
    ],
    correctAnswer: 1,
    explanation: "Scrum doesn't mandate estimation approaches. The Scrum Master should support the team experimenting with No Estimates while ensuring they can still forecast capacity and plan Sprints effectively. If they can plan without estimates, that's acceptable; if not, they'll discover the need for some forecasting mechanism.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 171,
    question: "A stakeholder complains that Scrum creates too much uncertainty compared to waterfall planning. How should the Scrum Master respond?",
    options: [
      "Agree to create more detailed upfront plans to reduce perceived uncertainty",
      "Explain that Scrum makes uncertainty visible rather than creating it",
      "Suggest the organization return to waterfall if predictability is essential",
      "Demonstrate how empirical forecasting provides probabilistic predictions"
    ],
    correctAnswer: 1,
    explanation: "Scrum doesn't create uncertainty—it makes existing uncertainty visible through transparency. The Scrum Master should educate stakeholders that traditional plans often hide uncertainty with false precision, while Scrum enables adaptation to reality.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 172,
    question: "How should a Scrum Master handle a Product Owner who wants all Product Backlog items fully specified before any development starts?",
    options: [
      "Support this as complete specifications reduce ambiguity and rework",
      "Coach the Product Owner on progressive elaboration and just-in-time refinement",
      "Suggest the Product Owner hire business analysts to create specifications",
      "Allow full specification but help the team provide input on what's needed"
    ],
    correctAnswer: 1,
    explanation: "Product Backlog items should be refined progressively as they approach Sprint Planning. The Scrum Master should coach the Product Owner on just-in-time refinement that reduces waste from detailed specifications of work that might change or never be done.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 173,
    question: "What should a Scrum Master do when team members complain they don't have time to attend to all Scrum events?",
    options: [
      "Make some events optional based on each team member's schedule constraints",
      "Investigate whether events are too long or too frequent for the work",
      "Explain that Scrum events are mandatory and non-negotiable framework elements",
      "Combine multiple events into longer but less frequent sessions"
    ],
    correctAnswer: 2,
    explanation: "Scrum events are essential opportunities for inspection and adaptation. The Scrum Master should explain their purpose and ensure they're facilitated effectively. If time truly is an issue, examine whether events are too long (suggesting poor facilitation) or if workload expectations are unsustainable.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 174,
    question: "A Development Team wants the Scrum Master to participate in technical design decisions. How should the Scrum Master respond?",
    options: [
      "Participate if they have relevant technical expertise to contribute",
      "Decline as technical decisions are the Development Team's domain",
      "Participate only to facilitate discussion, not influence technical decisions",
      "Offer opinions but clarify the team makes the final decision"
    ],
    correctAnswer: 0,
    explanation: "If the Scrum Master has relevant technical expertise, they can contribute to technical discussions just like any team member would. The key is the Development Team makes technical decisions collectively, and the Scrum Master shouldn't use their role to override team decisions.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 175,
    question: "How should a Scrum Master respond when management wants to use Sprint Goals as performance commitments for the team?",
    options: [
      "Support this as it creates clear accountability for Sprint outcomes",
      "Explain that Sprint Goals guide work but aren't performance contracts",
      "Suggest using Sprint Goal achievement rates as one of many team metrics",
      "Help the team improve their Sprint Goal achievement to meet expectations"
    ],
    correctAnswer: 1,
    explanation: "Sprint Goals provide focus and coherence, not performance targets. The Scrum Master should educate that treating them as commitments for performance evaluation undermines their purpose and creates pressure that can damage quality, collaboration, and honest Sprint Planning.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 176,
    question: "A Development Team wants to create separate 'feature' and 'maintenance' backlogs. What should the Scrum Master advise?",
    options: [
      "Support this as it helps distinguish new work from ongoing maintenance activities",
      "Explain that all work should flow through a single Product Backlog for prioritization",
      "Allow separate backlogs but ensure both are visible to stakeholders",
      "Suggest using labels or tags within one backlog instead of separation"
    ],
    correctAnswer: 1,
    explanation: "There should be one Product Backlog per product, with all work ordered by the Product Owner. Separate backlogs prevent effective prioritization and obscure trade-offs between new features and maintenance. The Scrum Master coaches on using one backlog with clear ordering.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 177,
    question: "What should a Scrum Master do when a Product Owner wants to add technical tasks to the Product Backlog?",
    options: [
      "Discourage this as technical tasks belong in the Sprint Backlog, not Product Backlog",
      "Help the Product Owner understand whether these represent value or implementation details",
      "Allow technical tasks if they're important to the Development Team",
      "Suggest the team maintain a separate technical backlog for such items"
    ],
    correctAnswer: 1,
    explanation: "Product Backlog items should represent value. The Scrum Master helps distinguish between valuable technical work (refactoring for speed, architectural improvements) that belongs in the Product Backlog and implementation details that the Development Team manages in their Sprint Backlog.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 178,
    question: "How should a Scrum Master handle a Development Team that wants to declare technical bankruptcy and start over?",
    options: [
      "Support the team's technical judgment and approve a complete rewrite",
      "Help the team articulate the business case and risks to the Product Owner",
      "Suggest incremental improvement rather than complete rewrites",
      "Facilitate a technical review with external experts before deciding"
    ],
    correctAnswer: 1,
    explanation: "Major technical decisions like complete rewrites should be understood by the Product Owner who must weigh the costs, benefits, and opportunity costs. The Scrum Master helps the team articulate the value proposition and risks so informed prioritization decisions can be made.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 179,
    question: "A stakeholder complains that the Scrum Team is not transparent enough about their work. What should the Scrum Master do?",
    options: [
      "Create additional status reports and dashboards for stakeholder visibility",
      "Help the stakeholder understand what transparency Scrum already provides",
      "Ask the team to provide daily email updates to concerned stakeholders",
      "Invite the stakeholder to observe Daily Scrums for better transparency"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should help stakeholders understand the transparency Scrum already provides: Sprint Reviews, visible Product Backlog, Definition of Done, and potentially shippable increments. If legitimate gaps exist, address those specifically rather than adding overhead.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 180,
    question: "What should a Scrum Master do when team members ask for individual career development plans?",
    options: [
      "Create individual development plans based on skill gaps and career goals",
      "Facilitate team discussions about growth opportunities within team context",
      "Refer team members to HR or management for career planning support",
      "Suggest self-directed learning paths based on industry best practices"
    ],
    correctAnswer: 1,
    explanation: "While individuals own their development, the Scrum Master can facilitate team discussions about growth, learning opportunities, and skill development within the team's context. This balances individual growth with team needs and creates peer support for development.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 181,
    question: "How should a Scrum Master respond when the Product Owner wants to use velocity to commit to delivery dates?",
    options: [
      "Provide historical velocity data to help the Product Owner make commitments",
      "Explain that velocity enables forecasting but not date commitments in complex work",
      "Help the Product Owner calculate projected completion based on average velocity",
      "Suggest using velocity ranges rather than single numbers for commitments"
    ],
    correctAnswer: 1,
    explanation: "Velocity helps with probabilistic forecasting but doesn't support date commitments due to inherent uncertainty and variability. The Scrum Master educates on empirical forecasting that acknowledges uncertainty while providing useful planning information.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 182,
    question: "A Development Team wants to skip retrospectives when they had a 'good' Sprint. What should the Scrum Master do?",
    options: [
      "Allow this as there's nothing to improve when Sprints go well",
      "Facilitate the retrospective to capture what went well and sustain it",
      "Suggest shorter retrospectives for Sprints that went smoothly",
      "Have the team vote on whether each retrospective is necessary"
    ],
    correctAnswer: 1,
    explanation: "Retrospectives are valuable even after good Sprints to understand what made them successful and how to sustain those conditions. The Scrum Master should facilitate reflection on successes, not just problems, to reinforce positive patterns.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 183,
    question: "What should a Scrum Master do when management asks for a list of impediments the team is facing?",
    options: [
      "Provide the list to help management understand and address organizational issues",
      "Explain that the team is addressing impediments and management involvement isn't needed",
      "Ask the team's permission before sharing impediment information with management",
      "Create sanitized version of impediments that doesn't make the team look bad"
    ],
    correctAnswer: 0,
    explanation: "Sharing impediments with management is appropriate, especially for organizational impediments the Scrum Master needs help removing. Transparency about impediments helps the organization improve. However, the Scrum Master should be thoughtful about how information is shared to maintain trust.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 184,
    question: "How should a Scrum Master handle a Product Owner who changes their mind frequently about priorities?",
    options: [
      "Lock down priorities for each Sprint to provide stability for the team",
      "Help the Product Owner understand the impact while respecting their authority",
      "Suggest the Product Owner consult with the team before making changes",
      "Create a change control process to limit frequency of priority changes"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner has authority to change priorities based on learning and market changes. The Scrum Master helps them understand impacts on the team and Product Backlog while coaching on thoughtful prioritization. The goal is informed decisions, not limiting authority.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 185,
    question: "A Development Team wants to work in a separate location away from the Product Owner and stakeholders. What should the Scrum Master advise?",
    options: [
      "Support this to reduce distractions and improve team focus and productivity",
      "Explore why they want separation and address underlying collaboration issues",
      "Allow remote work but require daily in-person meetings for coordination",
      "Suggest the team try it as an experiment and assess the impact"
    ],
    correctAnswer: 1,
    explanation: "The desire for physical separation suggests underlying issues with collaboration, interruptions, or relationships. The Scrum Master should understand and address root causes rather than simply accommodating separation, which can create bigger collaboration problems.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 186,
    question: "What should a Scrum Master do when a Development Team wants to formalize roles like 'tech lead' or 'senior developer'?",
    options: [
      "Discourage this as it contradicts the principle of self-managing teams",
      "Support role definition if it helps the team organize their work effectively",
      "Explore what need the team is trying to address with formal roles",
      "Allow informal leadership but discourage formal role assignments"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master should understand what problem the team is trying to solve with formal roles. They might need technical direction, decision-making processes, or recognition. Address the underlying need in ways that support self-management rather than creating hierarchy.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 187,
    question: "How should a Scrum Master respond when stakeholders want more detailed requirements before the team starts work?",
    options: [
      "Support detailed requirements as they reduce ambiguity and rework",
      "Educate stakeholders on just-in-time elaboration and working in thin slices",
      "Have the Product Owner create detailed specifications to satisfy stakeholders",
      "Suggest a compromise of moderately detailed requirements for near-term items"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate stakeholders on emergent requirements and progressive elaboration. Detailed upfront requirements create waste when things change and delay learning. Help stakeholders understand how working in thin slices with feedback reduces risk.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 188,
    question: "A Product Owner asks the Scrum Master to ensure the team delivers specific features by quarter-end. What should the Scrum Master do?",
    options: [
      "Work with the team to commit to the quarter-end deadline for those features",
      "Explain that teams can forecast but not guarantee delivery of specific scope by dates",
      "Help the Product Owner understand what could realistically be completed",
      "Suggest the Product Owner negotiate deadline extensions if needed"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master should educate that in complex work, teams can forecast probabilistically but cannot guarantee specific scope by specific dates. Help both Product Owner and team communicate about forecasts, uncertainty, and what trade-offs might be possible.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 189,
    question: "What should a Scrum Master do when the Development Team wants to implement every possible software engineering practice they've heard about?",
    options: [
      "Support comprehensive adoption of industry best practices for quality",
      "Help the team prioritize which practices address their most important challenges",
      "Suggest starting with basics like version control and automated testing",
      "Allow the team to decide which practices to adopt through experimentation"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master helps the team think strategically about practices that address their specific challenges rather than adopting everything. Encourage focus on high-value improvements, experimentation, and learning what works in their context.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 190,
    question: "How should a Scrum Master handle a situation where Sprint Reviews become product demonstrations with no stakeholder interaction?",
    options: [
      "Accept this if stakeholders are busy and appreciate efficient demonstrations",
      "Facilitate more interactive Sprint Reviews with prepared questions and discussions",
      "Suggest alternating between demonstration and discussion formats",
      "Ask the Product Owner to require stakeholder participation"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review should be collaborative. The Scrum Master should facilitate interaction through techniques like prepared questions, facilitated discussions, hands-on exploration, or feedback exercises. The goal is collaboration, not passive viewing.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 191,
    question: "A Development Team member consistently dominates technical decisions, ignoring other team members' input. What should the Scrum Master do?",
    options: [
      "Privately coach the individual on inclusive decision-making",
      "Facilitate team discussion about decision-making processes and inclusion",
      "Support the dominant person if they have the most technical expertise",
      "Implement a voting system to ensure all voices are heard equally"
    ],
    correctAnswer: 1,
    explanation: "This is a team dynamics issue that the team should address collectively. The Scrum Master facilitates discussion about inclusive decision-making and collaborative technical discussions rather than coaching individuals separately, which would undermine team self-management.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 192,
    question: "What should a Scrum Master do when the Product Owner wants to attend team refinement sessions but dominates the conversation?",
    options: [
      "Ask the Product Owner to present items then step back for team discussion",
      "Facilitate balanced participation by actively managing speaking time",
      "Accept this as appropriate since backlog items are the Product Owner's domain",
      "Have separate refinement sessions with and without Product Owner"
    ],
    correctAnswer: 1,
    explanation: "Product Owner participation in refinement is important, but it should be collaborative. The Scrum Master facilitates balanced participation where the Product Owner provides context and answers questions, while the team contributes estimates, questions, and technical insights.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 193,
    question: "How should a Scrum Master respond when management wants to standardize Sprint ceremonies across all teams?",
    options: [
      "Support standardization as it creates consistency and enables knowledge sharing",
      "Advocate for teams adapting Scrum events to their specific context",
      "Suggest standard durations but allow flexibility in facilitation approaches",
      "Implement standards but gather feedback for potential adjustments"
    ],
    correctAnswer: 1,
    explanation: "While Scrum events are timeboxed and required, how they're facilitated should fit each team's context. The Scrum Master advocates for team autonomy in adapting practices while ensuring the events serve their purposes effectively.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 194,
    question: "A Product Owner wants to include 'stretch goals' that aren't part of the Sprint Goal. What should the Scrum Master advise?",
    options: [
      "Support stretch goals if they motivate the team toward higher performance",
      "Explain how stretch goals can undermine focus on the Sprint Goal",
      "Suggest keeping stretch goals private and only discussing if capacity exists",
      "Allow stretch goals but clarify they're optional, not commitments"
    ],
    correctAnswer: 1,
    explanation: "Stretch goals can undermine commitment to the Sprint Goal by implying the forecast isn't genuine or creating pressure for unsustainable pace. The Scrum Master coaches on focusing on the Sprint Goal, with the team pulling additional work if capacity exists.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 195,
    question: "What should a Scrum Master do when a Development Team wants to demonstrate only 'impressive' features in Sprint Review?",
    options: [
      "Support this as it creates better stakeholder impressions of team capability",
      "Coach the team that Sprint Review should show all Done work for transparency",
      "Allow selective demonstration if it keeps stakeholders more engaged",
      "Suggest the team present all work but emphasize the impressive features"
    ],
    correctAnswer: 1,
    explanation: "Sprint Review should transparently show all Done work. Selective demonstration undermines transparency and stakeholder understanding of actual progress. The Scrum Master coaches on the value of honest representation over impression management.",
    domain: "Facilitating Events",
    difficulty: "Foundation"
  },
  {
    id: 196,
    question: "How should a Scrum Master handle a Product Owner who accepts incomplete work as 'done enough'?",
    options: [
      "Support the Product Owner's authority to decide when work is acceptable",
      "Remind the Product Owner and team that only work meeting Definition of Done is Done",
      "Suggest updating the Definition of Done to match actual quality standards",
      "Allow flexibility in Definition of Done based on business pressures"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done is not negotiable on a case-by-case basis. The Scrum Master ensures both Product Owner and team understand that only work meeting the Definition of Done can be considered Done, regardless of pressure or circumstances.",
    domain: "Scrum Theory & Principles",
    difficulty: "Foundation"
  },
  {
    id: 197,
    question: "A Development Team wants to work overtime regularly to meet aggressive deadlines. What should the Scrum Master do?",
    options: [
      "Support the team's commitment and dedication to meeting their goals",
      "Coach the team on sustainable pace and help address root causes of pressure",
      "Negotiate with management for more reasonable deadlines or additional resources",
      "Allow occasional overtime but discourage making it a regular practice"
    ],
    correctAnswer: 1,
    explanation: "Regular overtime indicates unsustainable pace and systemic issues with planning, expectations, or capacity. The Scrum Master coaches on sustainable pace and works to address root causes like unrealistic forecasts or external pressure rather than normalizing overtime.",
    domain: "Self-Managing Teams",
    difficulty: "Foundation"
  },
  {
    id: 198,
    question: "What should a Scrum Master do when stakeholders complain about lack of detailed project plans and timelines?",
    options: [
      "Create detailed project plans to satisfy stakeholder expectations",
      "Educate stakeholders on empirical planning and forecasting in Scrum",
      "Have the Product Owner create high-level roadmaps for stakeholders",
      "Suggest using velocity-based projections for timeline estimates"
    ],
    correctAnswer: 1,
    explanation: "The Scrum Master educates stakeholders on how empirical planning works—using Product Backlog ordering, Sprint Reviews, and velocity trends for forecasting rather than detailed upfront plans. Help them understand how this reduces risk through adaptation.",
    domain: "Organizational Design",
    difficulty: "Foundation"
  },
  {
    id: 199,
    question: "How should a Scrum Master respond when the Development Team wants to create architectural runway before building features?",
    options: [
      "Support dedicated architectural work before feature development begins",
      "Help the team propose architecture work as items for Product Owner prioritization",
      "Suggest building architecture incrementally alongside feature development",
      "Facilitate a discussion with the Product Owner about technical foundation needs"
    ],
    correctAnswer: 3,
    explanation: "The Scrum Master facilitates discussion between Development Team and Product Owner about architectural needs. Architecture work should be prioritized in the Product Backlog, but the conversation should explore whether it can be built incrementally or requires upfront investment.",
    domain: "Product Value",
    difficulty: "Foundation"
  },
  {
    id: 200,
    question: "A Product Owner wants to micromanage how the Development Team implements features. What should the Scrum Master do?",
    options: [
      "Allow this as the Product Owner is accountable for maximizing value",
      "Coach the Product Owner on respecting Development Team autonomy in implementation",
      "Facilitate a discussion about appropriate boundaries and collaboration",
      "Have the Development Team push back and refuse detailed direction"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master facilitates understanding of appropriate boundaries—Product Owner decides what and why, Development Team decides how. Rather than simply telling the Product Owner to stop, facilitate discussion where both parties understand each other's accountabilities and concerns.",
    domain: "Product Value",
    difficulty: "Foundation"
  }
];

export default psm2Questions;
