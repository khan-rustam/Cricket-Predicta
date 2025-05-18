"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Simulate form submission - would be connected to actual API in production
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out! We'll get back to you soon.",
      });

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          type: null,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Cricket ball background decorations */}
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute right-0 bottom-20 w-60 h-60 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute left-1/3 bottom-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-12 relative">
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-5 font-bold">
            CRICKET PREDICTA
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm mb-4">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              CONTACT US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions about Cricket Predicta? Want to partner with us? Or
            just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg backdrop-blur-sm p-8 h-full transform transition-all hover:scale-[1.01]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 relative">
                Contact Information
                <div className="h-1 w-12 bg-primary/70 mt-2"></div>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      Call Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      +91 98765 43210
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      Email Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      info@cricketpredicta.com
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      support@cricketpredicta.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shadow-sm">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      Visit Us
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      123 Cricket Stadium Road,
                      <br />
                      Mumbai, Maharashtra,
                      <br />
                      India - 400001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 relative">
                Connect With Us
                <div className="h-0.5 w-10 bg-primary/70 mt-2"></div>
              </h3>
              <div className="flex gap-4">
                <a
                 href="https://www.facebook.com/share/18fPALuu7u/"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                   href="https://x.com/cricpredicta"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/cricketpredicta"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@cricketpredicta"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg backdrop-blur-sm p-8 h-full">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 relative">
              Send Us a Message
              <div className="h-1 w-12 bg-primary/70 mt-2"></div>
            </h3>

            {formStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                }`}
              >
                {formStatus.type === "success" ? (
                  <CheckCircle className="h-6 w-6 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-6 w-6 shrink-0 mt-0.5" />
                )}
                <p>{formStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700/50 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700/50 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                >
                  <option value="">Please select</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700/50 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors w-full md:w-auto shadow-md hover:shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
