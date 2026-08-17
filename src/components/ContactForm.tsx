"use client";

import React, { useState } from "react";
import {
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
} from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning",
    treatment: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.message.trim()) errs.message = "Please enter your message or question";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-[#E9EDEE] rounded-2xl p-8 text-center space-y-4 shadow-card animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-full bg-[#EAF6F5] text-[#0F6B68] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold text-[#171A1C]">
          Thank You for Contacting Us
        </h3>
        <p className="text-sm text-[#5F666B] max-w-sm mx-auto leading-relaxed">
          Your inquiry has been delivered directly to our patient coordinator at Dubai Hollywood Smiles. We will respond promptly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              preferredDate: "",
              preferredTime: "Morning",
              treatment: "General Inquiry",
              message: "",
            });
          }}
          className="mt-2 text-xs font-semibold text-[#0F6B68] hover:underline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-card space-y-4"
    >
      <div>
        <h3 className="text-xl font-semibold text-[#171A1C]">Send an Inquiry</h3>
        <p className="text-xs text-[#5F666B] mt-1">
          Have a question about our treatments or wish to schedule a consultation? Fill out the form below.
        </p>
      </div>

      <div className="space-y-3.5">
        <div>
          <label className="block text-xs font-semibold text-[#171A1C] mb-1">
            Your Full Name <span className="text-[#0F6B68]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Mohammed Al Mansoor"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                errors.name ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
              } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1">
              Phone Number <span className="text-[#0F6B68]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+971 50 213 9191"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
                } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
                } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1">
              Treatment Interest
            </label>
            <select
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border border-[#E9EDEE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Smile Makeover">Smile Makeover</option>
              <option value="Porcelain Veneers">Porcelain Veneers</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Clear Aligners">Clear Aligners</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="General Dental Care">General Dental Care</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1">
              Preferred Contact Window
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border border-[#E9EDEE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]"
              >
                <option value="Morning">Morning (09:00 AM – 01:00 PM)</option>
                <option value="Afternoon">Afternoon (01:00 PM – 05:00 PM)</option>
                <option value="Evening">Evening (05:00 PM – 09:00 PM)</option>
                <option value="Anytime">Anytime via WhatsApp</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#171A1C] mb-1">
            How Can We Help You? <span className="text-[#0F6B68]">*</span>
          </label>
          <div className="relative">
            <textarea
              rows={4}
              placeholder="Tell us what you would like to achieve or ask about..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full p-3.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
              } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]`}
            />
          </div>
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] transition-colors shadow-sm disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Message</span>
          </>
        )}
      </button>
    </form>
  );
};
