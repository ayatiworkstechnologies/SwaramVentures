"use client";

import { Mail, MapPin, Play } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactPage() {
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact, isSubmitting },
    reset: resetContact,
  } = useForm();

  const {
    register: registerNewsletter,
    handleSubmit: handleSubmitNewsletter,
    formState: { errors: errorsNewsletter },
    reset: resetNewsletter,
  } = useForm();

  // CONTACT FORM SUBMIT (API POST)
  const onContactSubmit = async (data) => {
    try {
      const res = await fetch(
        "https://api.ayatiworks.com/api/v1/public/swaram/contact_us/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key":
              "ac3890f456cc30ca130f975581100afe9ccffbb6377acec9457de52507a3148d",
          },
          body: JSON.stringify({ data: data }),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Message sent successfully!");
      resetContact();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-white">
      {/* Main Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Contact Info */}
            <div className="space-y-10">
              <div>
                <span className="text-secondary font-medium tracking-wide uppercase text-sm">
                  Contact Info
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight">
                  Explore Strategic Opportunities
                </h1>
              </div>

              <div className="space-y-8 pt-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <a
                    href="mailto:info@swaram.ae"
                    className="text-lg text-primary font-medium hover:text-secondary transition-colors"
                  >
                    info@swaram.ae
                  </a>
                </div>

                {/* Address 1 */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-semibold">
                      Swaram Ventures LLC FZC
                    </p>
                    <p className="text-lg text-primary/80 leading-relaxed max-w-sm">
                      Meydan Grandstand, 6th floor,
                      <br />
                      Meydan Free Zone, Nad Al Sheba,
                      <br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* Address 2 */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary font-semibold">
                      Swaram General Trading LLC
                    </p>
                    <p className="text-lg text-primary/80 leading-relaxed max-w-sm">
                      1503, Sobha Sapphire,
                      <br />
                      Business Bay, Dubai,
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white">
              <form
                className="space-y-6"
                onSubmit={handleSubmitContact(onContactSubmit)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-primary font-semibold text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${errorsContact.name
                        ? "border-red-500"
                        : "border-gray-200 focus:border-primary focus:ring-primary"
                        }`}
                      {...registerContact("name", {
                        required: "Name is required",
                      })}
                    />
                    {errorsContact.name && (
                      <p className="text-red-500 text-xs">
                        {errorsContact.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-primary font-semibold text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${errorsContact.email
                        ? "border-red-500"
                        : "border-gray-200 focus:border-primary focus:ring-primary"
                        }`}
                      {...registerContact("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errorsContact.email && (
                      <p className="text-red-500 text-xs">
                        {errorsContact.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-primary font-semibold text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${errorsContact.phone
                      ? "border-red-500"
                      : "border-gray-200 focus:border-primary focus:ring-primary"
                      }`}
                    {...registerContact("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errorsContact.phone && (
                    <p className="text-red-500 text-xs">
                      {errorsContact.phone.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-primary font-semibold text-sm">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell About Your Project"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-primary resize-none"
                    {...registerContact("message")}
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full justify-center group shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? "Sending..." : "Leave us a Message"}
                    <Play
                      size={16}
                      className="fill-current group-hover:scale-110 smooth"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
