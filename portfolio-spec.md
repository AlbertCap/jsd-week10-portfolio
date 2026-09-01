# Albert.dev — Portfolio Website Specification

## 1. Project Overview

Build a personal developer portfolio website for Albert.

Albert is currently a junior software developer in training and is studying software development through a coding bootcamp.

Previous background:
- Associate Financial Advisor
- Background in Investment Informatics

Important:
- Finance is ONLY part of Albert's previous career background.
- Do NOT make Finance the theme of the website.
- Do NOT use financial dashboards, stock charts, banking imagery, or fintech visual language.
- The current focus is Software Development.
- Albert is particularly interested in exploring Mobile App Development in the future.

The portfolio should communicate:

> Learning.
> Building.
> Exploring.

The website should feel like the portfolio of a developer who is actively learning and building—not someone pretending to be a senior engineer.

---

# 2. Main Concept

## Core Identity

"Software Developer in Progress."

Hero headline:

HELLO,
I'M ALBERT 👋

SOFTWARE
DEVELOPER
IN PROGRESS.

Supporting text:

Learning.
Building.
Exploring.

Primary CTA:

SEE WHAT I'M BUILDING →

The phrase "Software Developer in Progress." is intentional.

It represents Albert's current stage:
- Still learning
- Building projects
- Developing technical skills
- Exploring mobile development

Do not describe Albert as:
- Senior Developer
- Full-Stack Expert
- MERN Expert
- Experienced Software Engineer

Use honest junior-level positioning.

---

# 3. Design Direction

## Style

Minimal / Bold

Keywords:

- Minimal
- Bold typography
- Modern
- Clean
- Developer-focused
- Young
- Confident
- Slightly playful
- Professional
- Spacious
- Editorial-inspired

Avoid:

- Corporate website style
- Generic Bootstrap-style layouts
- Excessive cards
- Excessive gradients
- Excessive glassmorphism
- Excessive 3D
- Hacker/terminal cliché
- Finance aesthetic
- Stock market graphics
- Overly futuristic cyberpunk style

The website should look intentional and designed—not like an AI-generated template.

---

# 4. Color System

Use a dark visual identity.

Primary colors:

Background:
#0A0A0A

Primary text:
#F5F5F5

Muted text:
#888888

Accent:
#5B8CFF

Border:
#242424

Suggested CSS variables:

--color-bg: #0A0A0A;
--color-text: #F5F5F5;
--color-muted: #888888;
--color-accent: #5B8CFF;
--color-border: #242424;

Color usage rule:

90% neutral colors
10% electric blue accent

Do not overuse blue.

Electric blue should be reserved for:
- Primary CTA
- Important links
- Hover states
- Small highlights
- Selected states
- Interactive elements

---

# 5. Typography

Use a modern sans-serif font.

Preferred:
- Geist
- Inter

If Geist is unavailable, use Inter.

Typography should be one of the main visual elements.

Hero typography should be large and bold.

Desktop hero:
approximately 80–120px

Tablet:
approximately 64–80px

Mobile:
approximately 48–60px

Use tight line-height for large headings.

Example:

HELLO,
I'M ALBERT 👋

SOFTWARE
DEVELOPER
IN PROGRESS.

The hero heading should occupy significant visual space.

Do not make typography unnecessarily small.

---

# 6. Layout

Maximum content width:

1440px

Use generous horizontal padding.

Desktop:
32–64px

Tablet:
24–40px

Mobile:
20–24px

Use a 12-column grid on desktop where appropriate.

The layout should prioritize:
- whitespace
- hierarchy
- typography
- alignment
- visual rhythm

Avoid filling every empty space.

Negative space is an intentional part of the design.

---

# 7. Navigation

Create a minimal sticky navigation.

Desktop:

ALBERT.DEV

WORK
ABOUT
CONTACT

Optional:
Theme toggle

Keep navigation small and unobtrusive.

Navigation should not compete with the Hero.

Mobile:

ALBERT.DEV
☰

Use a clean mobile menu.

---

# 8. Hero Section

Hero is the most important section.

Content:

HELLO,
I'M ALBERT 👋

SOFTWARE
DEVELOPER
IN PROGRESS.

Learning.
Building.
Exploring.

Primary CTA:

SEE WHAT I'M BUILDING →

Optional secondary link:

GITHUB ↗

Hero should feel large and confident.

Do not add a profile photo unless there is a strong design reason.

Do not use generic developer stock images.

Prefer typography and subtle graphical elements.

---

# 9. Hero Animation

Use subtle entrance animations.

Suggested sequence:

1. "HELLO, I'M ALBERT" fades/slides in
2. Main heading appears
3. "Learning. Building. Exploring." appears
4. CTA appears

Animation should be:
- smooth
- quick
- subtle

Avoid:
- typewriter effect
- excessive text scrambling
- dramatic page transitions
- constant movement

Respect:

prefers-reduced-motion

Users who disable motion should receive a static version.

---

# 10. Current Status Section

Create a section that clearly communicates what Albert is currently learning.

Title:

CURRENTLY LEARNING

Content:

JavaScript
React
Node.js
Express.js
MongoDB
Git
GitHub

Create another subsection:

EXPLORING

Mobile App Development
React Native
Expo

Important:

Do not present technologies as percentages.

Do NOT use:

JavaScript 90%
React 80%

Instead use clean typography, tags, or grouped lists.

---

# 11. Projects Section

Section title:

SELECTED WORK

Supporting text:

Things I've built,
things I'm building,
and things I want to build.

Projects should be the primary proof of development ability.

At the current stage, Albert may not have many completed projects.

This is acceptable.

Use project statuses:

- COMPLETED
- IN PROGRESS
- COMING SOON
- CONCEPT

Do not fake project completion.

Do not invent:
- users
- revenue
- performance metrics
- production usage
- clients
- business results

unless real information is provided later.

---

# 12. Project Card Structure

Each project should contain:

Project number

01

Project title

E-COMMERCE
WEB APP

Status

COMPLETED / IN PROGRESS / COMING SOON

Short description

Technology

JavaScript · MongoDB · Node.js

Visual preview

CTA:

VIEW PROJECT →

or

VIEW GITHUB ↗

Project cards should feel like a gallery/editorial layout rather than generic UI cards.

Use large images/mockups where available.

---

# 13. Placeholder Projects

The website must support placeholder projects.

Example:

PROJECT 01

E-COMMERCE WEB APP

Status:
IN PROGRESS

Description:
A web application built while learning
frontend development and database integration.

Tech:
JavaScript · MongoDB

---

PROJECT 02

MOBILE APP

Status:
COMING SOON

Description:
My next step into mobile application development.

Tech:
React Native · Expo

Important:

The second project is a placeholder/concept.

Do not make it look like a completed application.

Use labels such as:

COMING SOON

CONCEPT

or

CURRENTLY EXPLORING

This content will be replaced with real projects later.

Design the project data structure so projects can easily be added/removed/updated.

---

# 14. Project Data Architecture

Do not hard-code project cards directly into the UI if avoidable.

Create a project data structure.

Example concept:

projects = [
  {
    number: "01",
    title: "E-Commerce Web App",
    status: "In Progress",
    description: "...",
    technologies: ["JavaScript", "MongoDB"],
    image: "...",
    github: "...",
    demo: "..."
  }
]

This will make it easy to replace placeholder projects with real projects later.

---

# 15. Learning Section

Create a section:

WHAT I'M LEARNING

This section should communicate growth rather than expertise.

Example:

01
JavaScript

Building a strong foundation in
modern JavaScript and programming fundamentals.

02
React

Learning components, props, state,
events and application structure.

03
Backend

Exploring Node.js, Express.js,
REST APIs and databases.

04
Mobile

Exploring mobile application development
as my next direction.

Keep descriptions short.

---

# 16. Career Journey

Create a small section explaining Albert's career transition.

Title:

MY JOURNEY

Keep Finance as background context only.

Timeline:

Associate Financial Advisor
↓
Generation Coding Bootcamp
↓
Junior Software Developer in Training
↓
Web Development
↓
Exploring Mobile Development

Important:

Do not make this a Finance-themed section.

Do not use:
- financial charts
- money icons
- investment graphics
- stock imagery

The purpose of this section is simply to explain the career transition.

---

# 17. About Section

Title:

A LITTLE ABOUT ME

Suggested copy:

"I'm currently transitioning into software development and learning how to turn ideas into working applications.

I enjoy understanding how things work, breaking problems down, and building things from scratch.

Right now, I'm focused on becoming a better developer and exploring mobile app development."

Keep the tone:
- natural
- honest
- approachable
- concise

Do not use generic phrases such as:

"I'm a passionate developer who loves solving problems."

unless they are supported by actual personality or examples.

---

# 18. Tech Stack

Create a simple categorized section.

LANGUAGE

JavaScript

FRONTEND

HTML
CSS
React

BACKEND

Node.js
Express.js

DATABASE

MongoDB

TOOLS

Git
GitHub
VS Code

EXPLORING

React Native
Expo

Only include technologies that Albert is actually learning or using.

Do not exaggerate proficiency.

---

# 19. Contact Section

Large closing section.

Headline:

LET'S BUILD
SOMETHING.

Supporting text:

I'm currently looking for
Junior Software Developer opportunities.

Links:

GitHub ↗
LinkedIn ↗
Email ↗

Use large typography.

Keep the section simple.

---

# 20. Footer

Example:

ALBERT.DEV

© 2026 ALBERT

Built with curiosity
and probably too much coffee.

The footer can have a small playful personality.

---

# 21. Responsive Design

The website must be fully responsive.

Breakpoints should be chosen based on layout needs rather than blindly following common breakpoints.

Desktop:
Large typography
Multi-column layouts
Large whitespace

Tablet:
Reduce typography
Adjust grid

Mobile:
Single-column layout
Large readable typography
Touch-friendly buttons
No horizontal overflow

Hero must remain visually strong on mobile.

Do not simply shrink the desktop design.

Recompose layouts when necessary.

---

# 22. Accessibility

Follow basic accessibility best practices.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Accessible navigation
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text for meaningful images
- aria-labels where appropriate
- Respect prefers-reduced-motion

Do not rely solely on color to communicate status.

---

# 23. Performance

Keep the website lightweight.

Avoid unnecessary dependencies.

Optimize images.

Use lazy loading where appropriate.

Do not add a library just for a simple animation.

Prefer CSS animations when possible.

The site should feel fast.

---

# 24. Animation Philosophy

Animation should communicate polish, not show off.

Use:

- fade
- slide
- subtle scale
- hover transitions
- scroll reveal

Avoid:

- excessive parallax
- spinning objects
- constant floating elements
- flashy transitions
- loading screens that delay access to content

If an animation does not improve UX or visual storytelling, remove it.

---

# 25. Vibe Coding Requirement

This website is being developed using Vibe Coding.

However, generated code must still be:
- readable
- maintainable
- logically structured
- componentized
- beginner-friendly

Do not create unnecessarily complicated architecture.

Avoid overengineering.

The code should be understandable by a junior developer learning from it.

---

# 26. Future-Proofing

The portfolio will evolve.

Current state:

Learning
↓
Building
↓
Exploring

Future state:

More completed projects
↓
More advanced React
↓
Full-stack applications
↓
Mobile applications
↓
Professional Software Developer

Design the website so content can evolve without redesigning the entire application.

Project data should be easy to replace.

Skills should be easy to update.

Career timeline should be easy to update.

---

# 27. Important Content Rules

Do not invent personal information.

Do not invent:
- job experience
- company names
- achievements
- client work
- project metrics
- certifications
- awards
- programming experience
- production applications

If information is missing, use a placeholder such as:

[ADD GITHUB URL]

[ADD LINKEDIN URL]

[ADD EMAIL]

Do not make up information.

---

# 28. Development Instructions

Before writing code:

1. Inspect the existing project structure.
2. Identify the current framework and dependencies.
3. Reuse existing infrastructure where appropriate.
4. Do not unnecessarily rewrite the entire project.
5. Identify missing information that should be represented as placeholders.
6. Create a clean component structure.

Suggested component structure:

src/
  components/
    Navbar
    Hero
    CurrentStatus
    Projects
    Learning
    Journey
    About
    TechStack
    Contact
    Footer

Use the project's existing conventions if they differ.

---

# 29. Implementation Priority

Build in this order:

Phase 1:
- Global styles
- Typography
- Color system
- Navbar
- Hero

Phase 2:
- Projects
- Current Learning
- Tech Stack

Phase 3:
- Journey
- About
- Contact
- Footer

Phase 4:
- Responsive design
- Animation
- Accessibility
- Performance polish

Do not start with complex animations.

Get the layout and visual hierarchy right first.

---

# 30. Final Design Test

Before considering the implementation complete, ask:

1. Does the website immediately communicate who Albert is?
2. Does "Software Developer in Progress" feel like the main identity?
3. Does the design look like a real developer portfolio rather than a generic template?
4. Is the website minimal without feeling empty?
5. Is Electric Blue used as an accent rather than everywhere?
6. Are projects the main proof of ability?
7. Is the career transition clear but not the main theme?
8. Does Mobile Development feel like the future direction?
9. Can placeholder projects easily be replaced with real projects?
10. Does the website look good on mobile?
11. Does the site avoid exaggerating Albert's current experience?
12. Would the design still work after Albert gets his first developer job?

---

# 31. Claude Code Working Style

Do not immediately generate the entire application blindly.

First:

- inspect the repository
- understand the existing code
- identify the current stack
- propose the implementation plan

Then implement the design.

After implementation:

- run the project
- inspect for errors
- fix build/runtime issues
- verify responsive behavior
- verify navigation
- verify buttons and links
- verify accessibility
- verify that no placeholder information is presented as real information

When making design decisions that are not explicitly specified above, prioritize:

1. Minimalism
2. Typography
3. Usability
4. Consistency
5. Performance
6. Maintainability

Do not add visual features just because they are technically possible.

The final result should feel:

"Simple, intentional, modern, and personal."

Not:

"AI-generated portfolio template."