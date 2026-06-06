import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Astra from "../assets/space_astro.png";
import { FaPaperPlane, FaCheck, FaTimes } from "react-icons/fa";

const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-15%" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.service) newErrors.service = "Select a service";
    if (
      formData.service &&
      formData.service !== "Other" &&
      !formData.budget.trim()
    )
      newErrors.budget = "Budget is required";
    if (!formData.idea.trim()) newErrors.idea = "Describe your idea";
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", service: "", budget: "", idea: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-4 md:px-8"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Astronaut + Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-1/2 flex flex-col items-center gap-8"
          >
            {/* Floating Astronaut */}
            <motion.img
              src={Astra}
              alt="Astronaut"
              className="w-56 md:w-72 lg:w-80 drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />

            {/* Contact Info Cards */}
            <div className="w-full max-w-sm space-y-3">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "manishdewangan1302@gmail.com",
                  href: "mailto:manishdewangan1302@gmail.com",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Raipur, India",
                },
                {
                  icon: "⏰",
                  label: "Response Time",
                  value: "Within 24 hours",
                },
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 hover:border-blue-500/30 transition-colors"
                >
                  <span className="text-xl">{info.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
            >
              <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
              <p className="text-gray-500 text-sm mb-4">
                Fill out the form and I'll get back to you soon.
              </p>

              {/* Name + Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Your Name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  error={errors.name}
                  focused={focused}
                  onChange={handleChange}
                  onFocus={setFocused}
                />
                <InputField
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  error={errors.email}
                  focused={focused}
                  onChange={handleChange}
                  onFocus={setFocused}
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-400">
                  Service Needed <span className="text-red-400">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused("")}
                  className={`p-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all duration-300 ${
                    errors.service
                      ? "border-red-500"
                      : focused === "service"
                        ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                        : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Development" className="text-black">
                    Web Development
                  </option>
                  <option value="App Development" className="text-black">
                    App Development
                  </option>
                  <option value="Other" className="text-black">
                    Other
                  </option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs">{errors.service}</p>
                )}
              </div>

              {/* Budget — conditional */}
              <AnimatePresence>
                {formData.service && formData.service !== "Other" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <InputField
                      label="Budget (₹)"
                      name="budget"
                      placeholder="e.g. 15000"
                      value={formData.budget}
                      error={errors.budget}
                      focused={focused}
                      onChange={handleChange}
                      onFocus={setFocused}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Idea Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-400">
                  Your Idea <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="idea"
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.idea}
                  onChange={handleChange}
                  onFocus={() => setFocused("idea")}
                  onBlur={() => setFocused("")}
                  className={`p-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all duration-300 resize-none ${
                    errors.idea
                      ? "border-red-500"
                      : focused === "idea"
                        ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                        : "border-white/10 hover:border-white/20"
                  }`}
                />
                {errors.idea && (
                  <p className="text-red-400 text-xs">{errors.idea}</p>
                )}
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status && status !== "sending" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                      status === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <FaCheck size={12} /> Message sent successfully!
                      </>
                    ) : (
                      <>
                        <FaTimes size={12} /> Something went wrong. Try again.
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Reusable Input Field ─────────────────────────────────────────────────────
const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  focused,
  onChange,
  onFocus,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm text-gray-400">
      {label} <span className="text-red-400">*</span>
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => onFocus(name)}
      onBlur={() => onFocus("")}
      className={`p-3 rounded-xl bg-white/5 border text-white text-sm focus:outline-none transition-all duration-300 ${
        error
          ? "border-red-500"
          : focused === name
            ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
            : "border-white/10 hover:border-white/20"
      }`}
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

export default Contact;
