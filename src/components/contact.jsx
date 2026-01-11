"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_xgshc7c",
        "template_aujgg6j",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "bE4C8wHNIPF9M_2bZ"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className=" flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-8 left-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3"
          style={{
            backgroundColor: status === "success" ? "#D4AF37" : "#DC2626",
            color: status === "success" ? "#1a1a1a" : "#ffffff",
          }}
        >
          {status === "success" ? (
            <>
              <FiCheckCircle className="text-2xl" />
              <div>
                <p className="font-bold text-lg">Message Delivered!</p>
                <p className="text-sm">
                  Thank you for reaching out. I'll respond soon.
                </p>
              </div>
            </>
          ) : (
            <>
              <FiXCircle className="text-2xl" />
              <div>
                <p className="font-bold text-lg">Delivery Failed</p>
                <p className="text-sm">
                  Please try again or contact me directly.
                </p>
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-[15rem] font-bold leading-none">CONTACT</span>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-2">Let's Get In Touch</p>
          <h2 className="text-6xl md:text-7xl font-bold mb-12">Contact Me</h2>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiPhone />
              </div>
              <span className="text-lg">01616660613</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiMail />
              </div>
              <span className="text-lg">amin.rahman.dev@gmail.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <FiMapPin />
              </div>
              <div>
                <span className="text-lg block">Rajshahi, Bangladesh</span>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/aminur.rahman.333043"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer hover:bg-foreground hover:text-background transition-colors"
              >
                <FiFacebook />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aminur-rahman679/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer hover:bg-foreground hover:text-background transition-colors"
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Amin-ur-Rahman"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center cursor-pointer hover:bg-foreground hover:text-background transition-colors"
              >
                <FiGithub />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Leave a Message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your e-mail"
                    className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-foreground pb-2 focus:outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full border-4 border-foreground flex items-center justify-center text-xl font-bold">
                  {isSubmitting ? "Sending..." : "Submit"}
                </div>
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-foreground hover:border-yellow-300"
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: 0.3 + i * 0.1,
                    }}
                  />
                ))}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

