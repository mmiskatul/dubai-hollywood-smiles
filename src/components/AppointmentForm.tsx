"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

interface AppointmentFormProps {
  initialTreatment?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = "Smile Makeover Consultation",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning (09:00 AM – 01:00 PM)",
    treatment: initialTreatment,
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const treatmentsList = [
    "Smile Makeover Consultation",
    "Porcelain & E-Max Veneers",
    "In-Clinic Teeth Whitening",
    "Clear Aligners (Orthodontics)",
    "Dental Implants & Restorative",
    "Aesthetic Composite Bonding",
    "Comprehensive General Checkup & Hygiene",
    "Root Canal Therapy",
    "Other Dental Care / Second Opinion",
  ];

  const timeSlots = [
    "Morning (09:00 AM – 01:00 PM)",
    "Afternoon (01:00 PM – 05:00 PM)",
    "Evening (05:00 PM – 09:00 PM)",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (formData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number (e.g. +971 50 123 4567)";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clinical booking request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`DHS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "Morning (09:00 AM – 01:00 PM)",
      treatment: initialTreatment,
      notes: "",
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-card text-center space-y-5 animate-in fade-in zoom-in-95 duration-200 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#EAF6F5] text-[#0F6B68] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B68] bg-[#EAF6F5] px-3 py-1 rounded-full">
            Request Received
          </span>
          <h3 className="text-2xl font-semibold text-[#171A1C]">
            Appointment Request Received
          </h3>
          <p className="text-sm text-[#5F666B] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#171A1C]">{formData.fullName}</strong>. Our patient coordinator at Dubai Hollywood Smiles will contact you via WhatsApp/phone to confirm your exact appointment timing.
          </p>
        </div>

        <div className="bg-[#F8FAFA] border border-[#E9EDEE] rounded-xl p-4 max-w-sm mx-auto text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-[#8A9297]">Reference Code:</span>
            <span className="font-mono font-semibold text-[#0F6B68]">{referenceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8A9297]">Selected Service:</span>
            <span className="font-medium text-[#171A1C]">{formData.treatment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8A9297]">Preferred Date:</span>
            <span className="font-medium text-[#171A1C]">{formData.preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8A9297]">Timing Window:</span>
            <span className="font-medium text-[#171A1C]">{formData.preferredTime}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={clinicInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#0F6B68] bg-[#EAF6F5] hover:bg-[#d8efec]"
          >
            <span>Message on WhatsApp</span>
          </a>
          <button
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#5F666B] border border-[#E9EDEE] hover:bg-[#F8FAFA]"
          >
            <span>Submit Another Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white border border-[#E9EDEE] rounded-2xl p-6 sm:p-8 shadow-card space-y-5 ${className}`}
    >
      <div className="border-b border-[#E9EDEE] pb-4">
        <h3 className="text-xl font-semibold text-[#171A1C]">
          Request a Consultation
        </h3>
        <p className="text-xs text-[#5F666B] mt-1">
          Tell us your preferred date and time. Our team will contact you to confirm the appointment.
        </p>
      </div>

      {/* Personal Info Grid */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
            Full Name <span className="text-[#0F6B68]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="e.g. Sarah Al Hashimi"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                errors.fullName ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
              } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] focus:border-transparent text-[#171A1C] placeholder-[#8A9297] transition-all`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
              Phone / WhatsApp <span className="text-[#0F6B68]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
                } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] focus:border-transparent text-[#171A1C] placeholder-[#8A9297] transition-all`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
              Email Address <span className="text-[#8A9297] font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
                } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] focus:border-transparent text-[#171A1C] placeholder-[#8A9297] transition-all`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Treatment Selection */}
        <div>
          <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
            Dental Treatment / Area of Interest
          </label>
          <select
            value={formData.treatment}
            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border border-[#E9EDEE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]"
          >
            {treatmentsList.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
              Preferred Date <span className="text-[#0F6B68]">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border ${
                  errors.preferredDate ? "border-red-400 bg-red-50/20" : "border-[#E9EDEE]"
                } focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]`}
              />
            </div>
            {errors.preferredDate && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
              Preferred Timing
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-[#8A9297] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#FCFCFC] border border-[#E9EDEE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C]"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-[#171A1C] mb-1.5">
            Additional Notes or Questions <span className="text-[#8A9297] font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Tell us any specific concerns, dental history, or aesthetic desires..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full p-3.5 rounded-lg text-sm bg-[#FCFCFC] border border-[#E9EDEE] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F6B68] text-[#171A1C] placeholder-[#8A9297] transition-all"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-white bg-[#0F6B68] hover:bg-[#0B5250] active:scale-[0.99] transition-all shadow-sm hover:shadow disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Request...</span>
          </>
        ) : (
          <>
            <span>Request Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-[#8A9297] text-center">
        No immediate payment required. Our clinic team will verify availability and confirm your reservation.
      </p>
    </form>
  );
};
