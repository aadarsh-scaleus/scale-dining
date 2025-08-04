import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "contact@scaleus.in",
    link: "mailto:contact@scaleus.in",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "919425799077",
    link: "tel:919425799077",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Atulya IT Park, Indore (M.P.)",
    link: "Atulya IT Park, Indore (M.P.)",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // fake API
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section className="relative py-16 md:py-32 text-black dark:text-white overflow-hidden" id="contact">
      {/* --- animated background (unchanged) --- */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-rose-500/10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "400% 400%" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ---------- header ---------- */}
        <motion.div className="text-center mb-10 md:mb-20" variants={fadeInUp}>
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-black/80 dark:from-white dark:to-white/80">
              Get in
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Touch
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed text-black dark:text-white/60"
            variants={fadeInUp}
          >
            Have questions or need a demo? Contact us — we're here to help you
            simplify your restaurant operations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ---------- contact form ---------- */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold mb-4">Send us a message</h3>
              <p className="text-lg text-black dark:text-white/60">
                Tell us about your project and we'll get back to you within 24
                hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                /* ---------- form ---------- */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ---- name ---- */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40 dark:text-white/40" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 rounded-xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                          errors.name && "!border-red-400"
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* ---- email ---- */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40 dark:text-white/40" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 rounded-xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                          errors.email && "!border-red-400"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* ---- company ---- */}
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40 dark:text-white/40" />
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full pl-10 pr-4 py-4 rounded-xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>

                  {/* ---- message ---- */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-black/40 dark:text-white/40" />
                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={`w-full pl-10 pr-4 py-4 rounded-xl resize-none bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                        errors.message && "!border-red-400"
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* ---- submit button ---- */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-black/30 dark:border-white/30 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                /* ---------- success state ---------- */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-lg text-black dark:text-white/60 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/15 rounded-xl text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ---------- contact methods ---------- */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold mb-4">Other ways to reach us</h3>
              <p className="text-lg text-black dark:text-white/60">
                Choose the method that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.link}
                  className="block p-6 bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-black/15 dark:border-white/15 hover:bg-black/10 dark:hover:bg-white/10 transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-black dark:text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-black dark:text-white">
                        {method.title}
                      </h4>
                      <p className="text-sm text-black/60 dark:text-white/60 mb-1">
                        {method.description}
                      </p>
                      <p className="font-medium text-black dark:text-white">
                        {method.value}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-black/50 dark:text-white/40 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------- floating dots ---------- */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-black/20 dark:bg-white/20 rounded-full"
            style={{ left: `${10 + i * 12}%`, top: `${20 + i * 10}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
