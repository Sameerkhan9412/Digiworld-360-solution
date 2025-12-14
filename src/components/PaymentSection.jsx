import React from "react";
import {
  FaQuoteRight,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
  FaBolt,FaCheckCircle
} from "react-icons/fa";
import {
  MdOutlineToken,
  MdOutlineHexagon,
  MdOutlineWaves,MdCancel
} from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { IoDiamond } from "react-icons/io5";
const PaymentSection = () => {
  return (
    <div className=" transition-colors duration-300">
      <main className="flex-grow">
        <div className="layout-container flex flex-col items-center py-16 px-4 md:px-10 lg:px-40 w-full">
          <div className="text-center max-w-[800px] mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-[-0.015em] mb-4">
              Scalable Pricing for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Digital Success
              </span>
            </h2>
            <p className="text-[#6b7280] dark:text-[#a3b99d] text-lg">
              Transparent pricing tailored to your business needs. Upgrade,
              downgrade, or cancel at any time.
            </p>
            <div className="flex items-center justify-center mt-8 gap-4">
              <span className="text-sm font-bold text-[#131811] dark:text-white">
                Monthly
              </span>
              <div className="relative inline-block w-14 mr-2 align-middle select-none">
                <input id="toggle" type="checkbox" className="peer sr-only" />

                {/* Track */}
                <label
                  htmlFor="toggle"
                  className="block h-8 w-14 rounded-full bg-primary cursor-pointer transition-colors duration-300 peer-checked:bg-accent"
                ></label>

                {/* Thumb */}
                <div
                  className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white flex items-center justify-center
               transition-all duration-300 peer-checked:translate-x-6"
                >
                  {/* Tick icon */}
                  <svg
                    className="w-4 h-4 text-accent opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <span className="text-sm font-bold text-[#131811] dark:text-white flex items-center gap-2">
                Yearly{" "}
                <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-[1200px]">
            <div className="group relative flex flex-col gap-6 rounded-lg border border-solid border-[#e5e7eb] dark:border-border-dark  dark:bg-card-dark p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-tight text-primary">
                  Basic
                </h3>
                <p className="text-[#6b7280] dark:text-[#a3b99d] text-sm">
                  Perfect for small businesses starting out.
                </p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                    $499
                  </span>
                  <span className="text-[#6b7280] dark:text-[#a3b99d] text-base font-bold">
                    /month
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Web Maintenance
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Basic SEO Setup
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Email Support
                </div>
                <div className="flex gap-3 items-center text-sm font-medium text-[#9ca3af] dark:text-[#52634e]">
                 <MdCancel className="text-2xl"/>
                  Social Media Management
                </div>
                <div className="flex gap-3 items-center text-sm font-medium text-[#9ca3af] dark:text-[#52634e]">
                 <MdCancel className="text-2xl"/>
                  24/7 Priority Support
                </div>
              </div>
              <button className="w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary dark:bg-border-dark text-[#131811] dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary-hover dark:hover:text-white text-sm font-bold transition-all mt-auto duration-300">
                Choose Basic
              </button>
            </div>
            <div className="group relative flex flex-col gap-6 rounded-lg border-2 border-accent  dark:bg-card-dark p-8 shadow-2xl shadow-accent/10 scale-100 md:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-[#ff8c00] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                Most Popular
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-tight text-accent">
                  Standard
                </h3>
                <p className="text-[#6b7280] dark:text-[#a3b99d] text-sm">
                  Everything you need to grow your digital presence.
                </p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black leading-tight tracking-[-0.033em]">
                    $999
                  </span>
                  <span className="text-[#6b7280] dark:text-[#a3b99d] text-base font-bold">
                    /month
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-accent text-2xl" />
                  Web Dev &amp; Design
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-accent text-2xl" />
                  Advanced SEO Strategy
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-accent text-2xl" />
                  Social Media Mgmt (3 Channels)
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-accent text-2xl" />
                  Priority Email &amp; Chat Support
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-accent text-2xl" />
                  Monthly Performance Reports
                </div>
              </div>
              <button className="w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 text-sm font-bold transition-all mt-auto transform hover:scale-[1.02]">
                Get Started
              </button>
            </div>
            <div className="group relative flex flex-col gap-6 rounded-lg border border-solid border-[#e5e7eb] dark:border-border-dark  dark:bg-card-dark p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-tight text-primary">
                  Enterprise
                </h3>
                <p className="text-[#6b7280] dark:text-[#a3b99d] text-sm">
                  For large organizations requiring custom solutions.
                </p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                    Custom
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Full E-commerce Solutions
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Dedicated Account Manager
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  24/7 Priority Support
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Custom Integrations &amp; API
                </div>
                <div className="flex gap-3 items-center text-sm font-medium">
                 <FaCheckCircle className="text-primary text-2xl" />
                  Enterprise-grade Security
                </div>
              </div>
              <button className="w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary dark:bg-border-dark text-[#131811] dark:text-white hover:bg-primary-hover hover:text-white dark:hover:bg-primary-hover dark:hover:text-white text-sm font-bold transition-all mt-auto duration-300">
                Contact Sales
              </button>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-[#6b7280] dark:text-[#a3b99d] mb-4">
              Need a more detailed breakdown?
            </p>
            <a
              className=" group inline-flex items-center gap-2 text-primary hover:text-accent hover:underline font-bold text-sm transition-all duration-500"
              href="#"
            >
              Compare all features
              <FaArrowRight className="group-hover:translate-x-1"/>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentSection;
