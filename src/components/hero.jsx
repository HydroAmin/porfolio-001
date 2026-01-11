"use client";

import { motion } from "framer-motion";
import { TbFileCv } from "react-icons/tb";

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure to place your resume.pdf in the public folder
    link.download = "Aminur_Rahman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="top"
      className=" flex items-center justify-center py-10 pt-32 px-4 relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[20rem] font-bold leading-none">HELLO</span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-4 uppercase">Hi, I am Aminur Rahman</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            MERN stack Developer
          </h1>
          <p className="text-xl mb-8">based in Rajshahi, Bangladesh</p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-foreground text-background rounded-full font-medium"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-foreground rounded-full font-medium"
            >
              Contact Me
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="my-5 flex items-center px-8 py-3 border-2 border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            {" "}
            Download
            <TbFileCv size={24}></TbFileCv>
          </motion.button>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Animated Rings */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-foreground"
                style={{ width: "100%", height: "100%" }}
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{
                  scale: 1 + i * 0.1,
                  opacity: 0.3 - i * 0.1,
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Profile Image */}
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-foreground relative z-10">
              <img
                src="/meee.png"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

