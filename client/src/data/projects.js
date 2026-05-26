export const projectGroups = [
  {
    title: "MERN Projects",
    description: "Portfolio projects and concepts with clear, truthful development status.",
    projects: [
      {
        id: "college-management-system",
        title: "College Management System",
        status: "In Progress",
        category: "MERN Project / In Progress",
        description:
          "College Management System is a full-stack web application concept designed to manage college-level operations such as students, faculty, courses, attendance, notices, results, and admin activities. I have already worked on the backend logic using Java, and now I am planning to rebuild the complete project as a modern MERN stack web application with a proper frontend, backend API, database, authentication, and admin dashboard.",
        technologies: ["Java Backend Logic", "React", "Node.js", "Express", "MongoDB", "Authentication", "Admin Dashboard"],
        githubUrl: "https://github.com/Dar-shan26/College-Management-System-Java.git",
        liveUrl: "#",
      },
      {
        id: "shop-flow",
        title: "Shop Flow",
        status: "Planned",
        category: "MERN Concept Project",
        description:
          "Shop Flow is a shop management software concept designed to help small and medium shop owners manage their daily business operations digitally. The project will include product management, inventory tracking, billing, customer records, sales history, and business reports. The goal of this project is to create a simple but powerful dashboard where shop owners can easily manage stock, generate bills, monitor sales, and understand business performance.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Dashboard", "Reports"],
        githubUrl: "#",
        liveUrl: "#",
      },
      {
        id: "historian-website",
        title: "Historian Website",
        status: "Planned",
        category: "MERN Concept Project",
        description:
          "Historian is a history-based educational website concept where users can explore historical events, ancient civilizations, timelines, articles, and knowledge-based content in a clean and interactive way. The goal of this project is to make history learning more interesting through structured content, categories, search functionality, timeline views, and a modern responsive UI. In the future, it can also include an admin panel to manage articles and historical data.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Search", "Timeline UI", "Admin Panel"],
        githubUrl: "#",
        liveUrl: "#",
      },
    ],
  },
];

export const featuredProjects = projectGroups.flatMap((group) => group.projects);
