"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const steps = [
  { number: "01", label: "IDEA" },
  { number: "02", label: "SKETCH" },
  { number: "03", label: "DESIGN" },
  { number: "04", label: "DEVELOP" },
  { number: "05", label: "TEXT" },
  { number: "06", label: "LAUNCH" },
];

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="  flex items-center px-4 py-10 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[12rem] font-bold leading-none">WORK</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">How I Work</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-16">
            My Working Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-4">
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-20 h-0.5 bg-foreground hidden md:block" />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-32 rounded-full border-2 border-foreground flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl font-bold">{step.number}</span>
                    <span className="text-sm font-bold mt-1">{step.label}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-lg">Need More Info? Please Get in touch</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center"
            >
              <FiArrowDown size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

