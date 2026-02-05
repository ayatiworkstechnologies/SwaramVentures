"use client";

import { Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact },
    reset: resetContact,
  } = useForm();

  const {
    register: registerNewsletter,
    handleSubmit: handleSubmitNewsletter,
    formState: { errors: errorsNewsletter },
    reset: resetNewsletter,
  } = useForm();

  const onContactSubmit = (data) => {
    console.log("Contact Form Data:", data);
    alert("Message sent! (Check console for data)");
    resetContact();
  };

  const onNewsletterSubmit = (data) => {
    console.log("Newsletter Data:", data);
    alert("Subscribed! (Check console for data)");
    resetNewsletter();
  };

  return (
    <main className="bg-white">
      {/* Main Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-secondary font-medium tracking-wide uppercase text-sm">
                  Contact Info
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight">
                  We are always happy to assist you
                </h1>
              </div>

              <div className="space-y-6 pt-4">
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

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-primary font-medium leading-relaxed max-w-sm">
                    Medyan Grandstand, 6th floor,
                    <br />
                    Meydan Road, Nad Al Sheba,
                    <br />
                    Dubai, U.A.E
                  </p>
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
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-primary font-semibold text-sm"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Your Name"
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${
                        errorsContact.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200 focus:border-primary focus:ring-primary"
                      }`}
                      {...registerContact("name", {
                        required: "Name is required",
                      })}
                    />
                    {errorsContact.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errorsContact.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-primary font-semibold text-sm"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email Address"
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${
                        errorsContact.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
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
                      <p className="text-red-500 text-xs mt-1">
                        {errorsContact.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-primary font-semibold text-sm"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary ${
                      errorsContact.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-primary focus:ring-primary"
                    }`}
                    {...registerContact("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]*$/,
                        message: "Invalid phone number format",
                      },
                    })}
                  />
                  {errorsContact.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errorsContact.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-primary font-semibold text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell About Your Project"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 text-primary resize-none"
                    {...registerContact("message")}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
                    Leave us a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-4">
              <span className="text-secondary font-medium tracking-wide uppercase text-sm">
                SUBSCRIBE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-600 max-w-lg leading-relaxed">
                Stay informed about the latest investor updates, financial
                results, and announcements by subscribing to our newsletter.
              </p>
            </div>

            <div className="w-full">
              <form
                className="max-w-md ml-auto"
                onSubmit={handleSubmitNewsletter(onNewsletterSubmit)}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="newsletter-email"
                    className="text-primary font-semibold text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    placeholder="Enter Your Email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all placeholder:text-gray-400 text-primary mb-1 ${
                      errorsNewsletter.email
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-primary focus:ring-primary"
                    }`}
                    {...registerNewsletter("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errorsNewsletter.email && (
                    <p className="text-red-500 text-xs mb-4">
                      {errorsNewsletter.email.message}
                    </p>
                  )}
                  {!errorsNewsletter.email && <div className="mb-4" />}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
