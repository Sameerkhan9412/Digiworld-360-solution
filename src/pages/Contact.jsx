import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div>
      <div className="px-4 md:px-10 lg:px-40 flex flex-col items-center pt-20 pb-10">
        <div className="flex flex-col max-w-[960px] w-full text-center">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 drop-shadow-sm">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-slate-900 dark:text-white">
            Let's Build Something{" "}
            <span className="text-primary dark:text-[#7b6cd6]">
              Extraordinary
            </span>
          </h2>
          <p className="text-slate-600 dark:text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or need expert advice on your digital
            strategy? We're here to help you grow. Reach out to us today.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1024px] w-full">
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-[#1E293B] dark:bg-card-dark shadow-sm border border-slate-100 dark:border-slate-800 hover-lift group cursor-default">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary duration-300">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Our Office
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    123 Innovation Drive, Tech Park
                    <br />
                    Suite 400, San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[#1E293B] dark:bg-card-dark shadow-sm border border-slate-100 dark:border-slate-800 hover-lift group cursor-default">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary duration-300">
                  <IoMdMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    <a
                      className="hover:text-accent transition-colors"
                      href="mailto:hello@digitalservices.com"
                    >
                      hello@digitalservices.com
                    </a>
                    <br />
                    <a
                      className="hover:text-accent transition-colors"
                      href="mailto:support@digitalservices.com"
                    >
                      support@digitalservices.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[#1E293B] dark:bg-card-dark shadow-sm border border-slate-100 dark:border-slate-800 hover-lift group cursor-default">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary duration-300">
                  <IoCall className=" text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    <a
                      className="hover:text-accent transition-colors"
                      href="tel:+15550192834"
                    >
                      +1 (555) 019-2834
                    </a>
                    <br />
                    Mon-Fri, 9am - 6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E293B] dark:bg-card-dark p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-5 py-3 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full px-5 py-3 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-5 py-3 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  id="message"
                  placeholder="How can we help you?"
                  rows="4"
                ></textarea>
              </div>
              <button
                className="mt-4 w-full py-4 rounded-2xl bg-background-dark hover:bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 flex justify-center items-center gap-2 group"
                type="button"
              >
                <span>Send Message</span>
                <IoMdSend className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-br from-primary via-[#5d51a8] to-primary-hover dark:from-primary/90 dark:to-[#2c2459] py-20 px-4 md:px-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E293B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Request a Free Consultation
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl leading-relaxed">
              Ready to elevate your business? Schedule a 30-minute discovery
              call with our experts. No strings attached.
            </p>
          </div>
          <div className="shrink-0">
            <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold text-lg shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3 cursor-pointer">
              <span>Book Your Call</span>
              <IoCalendarNumberOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
