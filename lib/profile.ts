export const profile = {
  "name": "Abhilash Gandham",
  "email": "peabhilash.gandham311@gmail.com",
  "links": {
    "linkedin": "https://linkedin.com/in/abhilash-gandham",
    "github": "https://github.com/Abhi1289-311"
  },
  "summary": "Computer Science graduate from IIT Dharwad (2023) with a passion for Front-end development , performance optimization, and creating seamless user experiences. Skilled in Angular, React, JavaScript, and scalable UI design, I focus on building intuitive, high-performance applications. Currently working as a Technical Lead at HCL Technologies, I thrive on solving complex challenges and enhancing web interactions. Driven by innovation, my aim is to explore AI-powered UI advancements and next-generation web technologies to create future-ready digital solutions.",
  "skills": [
    "Languages : Python, C++, JavaScript",
    "Back-End Development : Node.js",
    "Libraries : JQuery",
    "Database : MySQL", 
    "Front-End Development : JavaScript, HTML, CSS",
    "Frameworks : Angular, ReactJs, Bootstrap",
    "Deployment Tools : Vercel, Heroku, Github Pages",
    "Testing : React Testing Library, JEST, Jasmine",
  ],
  "education": "IIT Dharwad August 2019 \u2013 April 2023 Bachelor of Technology in Computer Science. Dharwad, Karnataka",
  "certifications": [
    "JavaScript from LINKEDIN",
    "Level Up C++ from LINKEDIN", 
    "HTML from LINKEDIN",
    "CSS from LINKEDIN"
  ]
} as const;

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tech: string[];
};

export const projects: Project[] = [
  { title: "Project 1", slug: "project-1", summary: "Starter placeholder project demonstrating dynamic routes and basic UI.", tech: ["Next.js", "TypeScript"] },
  { title: "Project 2", slug: "project-2", summary: "Another placeholder showcasing ISR list and detail pages.", tech: ["React", "Tailwind CSS"] },
  { title: "Project 3", slug: "project-3", summary: "Simple demo to illustrate routing and component reuse.", tech: ["MUI", "Next.js App Router"] }
];
