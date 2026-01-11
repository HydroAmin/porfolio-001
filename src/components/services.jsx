"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "02",
    title: "Web Development",
    items: [
      "Front-End Development",
      "Back-End Development",
      "Full-Stack Development",
      "Database Management",
      "API Integration Design",
    ],
  },
  {
    number: "03",
    title: "Technologies & Tools",
    items: [
      "React & Next.js",
      "Node.js & Express.js",
      "MongoDB Integration",
      "State Management (Redux)",
      "Payment Integration (Stripe)",
    ],
  },
  {
    number: "04",
    title: "UI/UX Implementation",
    items: [
      "Responsive Design",
      "Animation (Framer Motion)",
      "Interactive Charts (Recharts)",
      "Map Integration (Leaflet)",
      "Tailwind CSS Styling",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="  flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[12rem] font-bold leading-none">SERVICES</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">How I Can Help Your Next Project</p>
          <h2 className="text-6xl md:text-7xl font-bold mb-12">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="border-2 border-foreground rounded-lg p-8"
              >
                <div className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-foreground pb-2 inline-block">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2">»</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

