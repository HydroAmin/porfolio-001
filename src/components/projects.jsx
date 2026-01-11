"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const projects = [
  {
    title: "Style Decor",
    subtitle: "Decoration and event managing Platform",
    tags: ["DESIGN", "FRONTEND", "BACKEND"],
    image: "/style-decor.png",
    liveLink: "https://style-decor-client-wheat.vercel.app/",
    overview:
      "This application provides real-time updates and transparency between service providers and clients. Users can browse their desired decoration or event designs, check the availability of specialized decorators, and book consultations before confirming an event. The platform helps reduce unintentional delays and confusion between clients and service providers.",
    technologies:
      "React.js, React Router, Framer Motion, TailwindCSS, Express.js, Node.js, MongoDB, REST APIs",
    links: {
      client: "https://github.com/yourusername/style-decor-client",
      server: "https://github.com/yourusername/style-decor-server",
      live: "https://style-decor-client-wheat.vercel.app/",
    },
    features: [
      "Real-time workflow updates",
      "Role-based dashboard and system control",
      "User authentication, authorization, and security",
      "Smooth and optimized UI/UX",
      "Live system revenue, analytics, and earnings summary",
    ],
  },
  {
    title: "Local Food Lovers",
    subtitle: "Local Food lovers network",
    tags: ["DESIGN", "FRONTEND", "BACKEND"],
    image: "/foodlovers.png",
    liveLink: "https://effortless-madeleine-66699e.netlify.app/",
    overview:
      "A full-stack MERN application where people can share their reviews on local traditional foods. Users can add new reviews, manage and update their reviews, and keep track of others' reviews they like.",
    technologies:
      "React.js, React Router, Express.js, MongoDB, TanStack Query, Firebase",
    links: {
      client: "https://github.com/yourusername/local-food-lovers-client",
      server: "https://github.com/yourusername/local-food-lovers-server",
      live: "https://effortless-madeleine-66699e.netlify.app/",
    },
    features: [
      "Managed client-side navigation and state effectively using React Router DOM",
      "Built a highly responsive user interface using React.js and Tailwind CSS",
      "Used Axios to communicate with the Node.js/Express server and MongoDB database",
      "Enabled users to submit, update, and create a list of their favorite reviews through secure backend interactions",
    ],
  },
  {
    title: "Game Verse",
    subtitle: "Gaming platform",
    tags: ["DESIGN", "FRONTEND"],
    image: "/game-verse.png",
    liveLink: "https://game-verse-react-app.vercel.app/",
    overview:
      "A comprehensive discovery platform designed for gamers to navigate the rapidly evolving industry landscape. Game Verse features a robust, searchable catalog of released titles and a dedicated 'Upcoming Games' section, allowing users to track release dates and monitor highly anticipated games.",
    technologies: "React.js, React Router DOM, Tailwind CSS, Firebase",
    links: {
      github: "https://github.com/yourusername/game-verse",
      live: "https://game-verse-react-app.vercel.app/",
    },
    features: [
      "Implemented full user lifecycle management with secure sign-up, login, and profile updates",
      "Seamless Google Sign-In integration",
      "Enabled users to explore and search a vast catalog of current and future titles",
      "Maintained a dedicated 'Upcoming Games' section for tracking release dates",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="  flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[12rem] font-bold leading-none">PROJECTS</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">Some Of My Most Recent Projects</p>
          <h2 className="text-6xl md:text-7xl font-bold mb-12">
            My Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter:
                    "grayscale(0%) sepia(15%) saturate(120%) hue-rotate(-5deg)",
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  filter:
                    "grayscale(0%) sepia(20%) saturate(130%) hue-rotate(-5deg) brightness(1.05)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="rounded-lg overflow-hidden group cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-2 w-full">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex-1 px-3 py-2 bg-foreground text-background rounded text-xs font-medium"
                      >
                        Details
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 px-3 py-2 border-2 border-foreground bg-background rounded text-xs font-medium text-center flex items-center justify-center gap-1.5"
                      >
                        <AiOutlineLink className="text-base" />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background border-2 border-foreground rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-background border-b-2 border-foreground p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm opacity-70">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-foreground/10 rounded-lg transition-colors"
                >
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="rounded-lg overflow-hidden border-2 border-foreground">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Overview */}
                <div>
                  <h4 className="text-xl font-bold mb-2">Overview</h4>
                  <p className="text-sm leading-relaxed opacity-90">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold mb-2">Technologies Used</h4>
                  <p className="text-sm opacity-90">
                    {selectedProject.technologies}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-foreground">
                  {selectedProject.links.client && (
                    <a
                      href={selectedProject.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
                    >
                      <AiOutlineGithub className="text-xl" />
                      Client Code
                    </a>
                  )}
                  {selectedProject.links.server && (
                    <a
                      href={selectedProject.links.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
                    >
                      <AiOutlineGithub className="text-xl" />
                      Server Code
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
                    >
                      <AiOutlineGithub className="text-xl" />
                      GitHub Repository
                    </a>
                  )}
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <AiOutlineLink className="text-xl" />
                    Visit Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

