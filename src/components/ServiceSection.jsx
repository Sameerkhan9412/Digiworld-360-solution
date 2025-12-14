import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const ServiceSection = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-800 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative w-full h-full flex flex-col grow overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-60"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="layout-container flex h-full grow flex-col z-10">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <div className="flex flex-col gap-6 mb-16 items-start md:items-center text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 dark:bg-white/5 dark:border-white/10">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent-light">
                    Our Expertise
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                  Comprehensive{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent">
                    Digital Solutions
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-[720px] leading-relaxed">
                  We offer a full suite of services to help your business grow
                  online, from custom development to strategic marketing.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative flex flex-col gap-6 rounded-lg p-8 dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    {/* <span className="material-symbols-outlined text-3xl">code</span> */}
                    <FaCode className="text-3xl" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      Website Development
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Custom, responsive websites built for speed and conversion
                      using the latest technologies.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                   <FaArrowRight  className="text-sm"/>/>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-lg p-8 dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    <FaGear className={"text-3xl"} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      Website Maintenance
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      24/7 security monitoring, regular updates, and ongoing
                      performance optimization.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-lg p-8  dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    <GrAnnounce className="text-3xl" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      Digital Marketing
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Data-driven strategies to boost your brand visibility and
                      ROI across all channels.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                   <FaArrowRight  className="text-sm"/>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-lg p-8 dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    <MdOutlineManageSearch  className="text-3xl"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      SEO Optimization
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Climb search rankings and drive consistent organic traffic
                      to your digital assets.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                   <FaArrowRight  className="text-sm"/>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-lg p-8  dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                   <FaUserGroup className={"text-3xl"}/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      Social Media Management
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Engaging content creation and community management to
                      build loyal followings.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                   <FaArrowRight  className="text-sm"/>
                  </div>
                </div>
                <div className="group relative flex flex-col gap-6 rounded-lg p-8  dark:bg-card-dark border border-slate-200 dark:border-white/5 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(62,44,133,0.15)] hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary dark:text-primary-light group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    <FaShoppingCart className="text-3xl"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      E-commerce Solutions
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Scalable online stores designed for seamless shopping
                      experiences and high sales.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>Learn more</span>
                   <FaArrowRight  className="text-sm"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
