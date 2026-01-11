"use client";

import { motion } from "framer-motion";

const designSkills = [
  { name: "Frontend (React.js + Next.js)", percentage: 85 },
  { name: "Design", percentage: 90 },
  { name: "Backend (Nodejs + MongoDB)", percentage: 80 },
];

const developerSkills = [
  { name: "Front-End Development", percentage: 90 },
  { name: "Back-End Development", percentage: 85 },
  { name: "Full-Stack Development", percentage: 88 },
  { name: "Database Management", percentage: 80 },
  { name: "Version Control", percentage: 95 },
  { name: "API Integration", percentage: 87 },
];

const languageSkills = [
  { name: "English", percentage: 92 },
  { name: "Urdu", percentage: 88 },
  { name: "Hindi", percentage: 88 },
];

export function Skills() {
  return (
    <section id="skills" className="  px-4 py-10">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        {/* Design Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Design Skills</h2>
          <p className="text-lg mb-8">Highlight My Expertise in:</p>

          <div className="grid md:grid-cols-3 gap-8">
            {designSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.2"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      whileInView={{
                        strokeDashoffset:
                          2 * Math.PI * 45 * (1 - skill.percentage / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <div className="px-6 py-2 border-2 border-foreground rounded-full">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Developer Skills</h2>
          <p className="text-lg mb-8">Highlight My Expertise in:</p>

          <div className="space-y-6">
            {developerSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-foreground"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg mb-8">Technologies I Work With:</p>

          <div className="space-y-12">
            {/* MERN Stack */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">MERN Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  {
                    name: "MongoDB",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  },
                  {
                    name: "Express.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                  },
                  {
                    name: "React.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  },
                  {
                    name: "Node.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    name: "Next.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 border-2 border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "JavaScript",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                  },
                  {
                    name: "HTML5",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                  },
                  {
                    name: "CSS3",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                  },
                  {
                    name: "Tailwind CSS",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 border-2 border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend & Databases */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Backend & Databases
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "RESTful APIs",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  },
                  {
                    name: "Firebase",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                  },
                  {
                    name: "MongoDB",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  },
                  {
                    name: "Mongoose",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 border-2 border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Version Control */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Tools & Version Control
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "Git",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  },
                  {
                    name: "GitHub",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                  },
                  {
                    name: "Figma",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                  },
                  {
                    name: "Axios",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center gap-3 p-4 border-2 border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain"
                    />
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Language Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Language Skills</h2>
          <p className="text-lg mb-8">Highlight My Expertise in:</p>

          <div className="grid md:grid-cols-3 gap-8">
            {languageSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.2"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                      whileInView={{
                        strokeDashoffset:
                          2 * Math.PI * 45 * (1 - skill.percentage / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <div className="px-6 py-2 border-2 border-foreground rounded-full">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

