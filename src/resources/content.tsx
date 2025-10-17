import {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Olya",
  lastName: "Levina",
  name: `Olya Levina`,
  role: "UI and Test Automation Engineer",
  avatar: "/images/avatar.jpg",
  email: "olevina@ymail.com",
  location: "America/Los_Angeles",
  languages: ["English", "Russian"], 
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/olevina",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/olgailevina/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/olevina",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Eight years of experience building and testing scalable web applications
        in financial services and tech. Hands-on experience in test automation
        frameworks, frontend architecture, CI/CD pipelines, and performance
        tuning. Combining UI and API automation to deliver high quality,
        reliable releases. Known for creating user friendly features and
        collaborating across teams in fast paced Agile environments.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "American Expres",
        timeframe: "2019 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed 30+ customer-facing React components for card dashboards,
            statements, and personal savings/checking platforms, with the
            dashboard domain supporting over 1M daily users.
          </>,
          <>
            Ensured high code quality, accessibility, and reliability by writing
            automated tests with Jest, React Testing Library, and accessibility
            testing tools (a11y)
          </>,
          <>
            Built and deployed A/B testing components to support experimentation
            and optimize customer experience through data-driven decisions.
          </>,
          <>
            Mentored junior engineers and Collaborated with QA teams to
            integrate automated test analytics and monitor frontend performance
            metrics.
          </>,
          <>
            Built CI/CD pipelines and automated testing from scratch, increasing
            system reliability and coverage by 100% and streamlining deployment
            processes
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company:
          "Craft Culinary Concepts (Arizona Cardinals' Food & Beverage Partner)",
        timeframe: "2017 - 2019",
        role: "Marketing Manager & Web Developer",
        achievements: [
          <>
            Designed and maintained corporate website, increasing traffic by 70%
            through SEO optimization.
          </>,
          <>
            Managed digital marketing assets, B2B sales materials, and social
            media campaigns.
          </>,
          <>
            Traveled across the country to conventions, setting up booths,
            selling products, and writing proposals to expand market reach.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Arizona",
        description: <>Fullstack Software Development Bootcamp</>,
      },
      {
        name: "MCNY",
        description: <>Business Administration</>,
      },
      {
        name: "London Metropolitan University",
        description: <>Media & Marketing</>,
      },
      {
        name: "International Banking Institute",
        description: <>International Business Management</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Design",
        tags: [
          {
            name: "Adobe Suite",
            icon: "adobe",
          },
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Programming & Frameworks",
        tags: [
          { name: "JavaScript (ES6+)", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Redux", icon: "redux" },
          { name: "Node.js", icon: "node" },
          { name: "Express", icon: "express" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Testing & Automation",
        tags: [
          { name: "Playwright", icon: "playwright" },
          { name: "Selenium", icon: "selenium" },
          { name: "Jest", icon: "jest" },
          { name: "Cucumber.js", icon: "cucumber" },
          { name: "Unit Testing", icon: "test" },
          { name: "Accessibility (Lighthouse, Axe)", icon: "accessibility" },
        ],
        images: [],
      },
      {
        title: "Build & Deployment",
        tags: [
          { name: "Jenkins", icon: "jenkins" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Git", icon: "git" },
          { name: "NPM", icon: "npm" },
          { name: "Firebase", icon: "firebase" },
          { name: "Heroku", icon: "heroku" },
          { name: "GraphQL", icon: "graphql" },
        ],
        images: [],
      },
      {
        title: "UI/UX & Web Standards",
        tags: [
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
          { name: "Bootstrap", icon: "bootstrap" },
          { name: "SEO optimization", icon: "seo" },
          { name: "Accessibility (Lighthouse, Axe)", icon: "accessibility" },
        ],
        images: [],
      },
      {
        title: "Tools",
        tags: [
          { name: "Jira", icon: "jira" },
          { name: "Google Analytics", icon: "googleanalytics" },
          { name: "Adobe Creative Suite", icon: "adobe" },
        ],
        images: [],
      },
      {
        title: "Methodologies",
        tags: [
          { name: "Agile/Scrum", icon: "agile" },
          { name: "Test-Driven Development", icon: "tdd" },
          { name: "CI/CD Pipelines", icon: "cicd" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, newsletter, home, about, work };
