import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import { MdOutlineToken } from "react-icons/md";
import { MdOutlineHexagon } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineWaves } from "react-icons/md";
import { FaBolt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white antialiased overflow-x-hidden">
      <main className="flex-grow">
        <section className="py-16 md:py-16 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">
              Client Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl leading-tight text-gray-900 dark:text-white">
              Trusted by{" "}
              <span className="text-primary dark:text-[#8b7ad6] relative inline-block">
                Innovative
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  ></path>
                </svg>
              </span>{" "}
              Companies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              See how our 360° digital solutions have helped businesses scale,
              optimize, and succeed in the modern landscape.
            </p>
          </div>
        </section>
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative flex flex-col p-8 rounded-xl  dark:bg-card-dark border border-gray-100 dark:border-border-dark hover:border-accent/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent/5">
                <div className="absolute -top-4 right-8 bg-primary text-white p-2 rounded-full shadow-lg shadow-primary/30">
                  <FaQuoteRight className="text-2xl" />
                </div>
                <div className="flex items-center gap-1 mb-6 text-accent">
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-8 flex-grow">
                  "The team transformed our outdated website into a modern,
                  high-converting platform. Their attention to detail and SEO
                  expertise resulted in a{" "}
                  <span className="font-bold text-primary dark:text-[#8b7ad6]">
                    40% increase in leads
                  </span>{" "}
                  within the first month."
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-border-dark">
                  <div className="relative">
                    <div className="size-12 rounded-full overflow-hidden border-2 border-accent">
                      <img
                        alt="Professional woman smiling in business attire"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Sarah Jenkins"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWQwVmynlO0kj4HcLkp3iKv9iQZWdirYbfdGASLrfGBkYf_4C1JdsautFIk6Vo00_D1J121W4mz1B2XtN5zhf_uJTDRNG0QWXWcWIBUe5Vy-QqLwYNQ2JgHkOrJiPxeX8vYyPHFY8LDHNhBkn874EEANa1hguTIVBNysialHe5hgKIWr2c94y72e8nVX1jSlk3nCDnBTcVaC0As_93PHBn42yWvaAh_FpaALGLyGueb7lp0kUgWgOtoc4j-tllYvNI666woVGFFMY"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Sarah Jenkins
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, TechStart
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#b4a6ed]">
                      SEO
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col p-8 rounded-xl  dark:bg-card-dark border border-gray-100 dark:border-border-dark hover:border-accent/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent/5">
                <div className="absolute -top-4 right-8 bg-white dark:bg-card-dark border border-accent text-accent p-2 rounded-full shadow-md">
                 <FaQuoteRight  className="text-2xl"/>
                </div>
                <div className="flex items-center gap-1 mb-6 text-accent">
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-8 flex-grow">
                  "Excellent service! They managed our social media campaigns
                  flawlessly. The engagement rates have skyrocketed, and the
                  content strategy is spot on. Truly a partner in our growth."
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-border-dark">
                  <div className="relative">
                    <div className="size-12 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                      <img
                        alt="Professional man in a suit smiling"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Michael Chen"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJMctBFpdoXxMc6fjYTZjuHf4IuHs4HV7HsYq0I-Y3EhW2NIDJOwpl3DJ2m9L8C7w580H0HR0UUxWqdi6fsFjzgWKv-Ik-LJhRMFqzZdfYh87CO5kQ21ob84lIoi-P6_2VdsERcotUmGNDr-ZWnLmIpccyr5q8SMJzYH4JU6caNQRUL05m2dqPpJpSfriPkVHbRrlDC_8nJM9nwdaKYBmMgBBGNlBd7WNdN7sBC5q1c1SEfgg0KGScHToWw6pQIj4wBfW1zXO1fO8"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Michael Chen
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Founder, GreenLife
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#b4a6ed]">
                      Social
                    </span>
                  </div>
                </div>
              </div>
              <div className="group relative flex flex-col p-8 rounded-xl  dark:bg-card-dark border border-gray-100 dark:border-border-dark hover:border-accent/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-accent/5">
                <div className="absolute -top-4 right-8 bg-white dark:bg-card-dark border border-accent text-accent p-2 rounded-full shadow-md">
                 <FaQuoteRight  className="text-2xl"/>
                </div>
                <div className="flex items-center gap-1 mb-6 text-accent">
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <FaStar className={"text-[20px]"} />
                  <span className="material-symbols-outlined filled text-[20px] text-accent/40">
                    star
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-8 flex-grow">
                  "Great experience working with them on our e-commerce store.
                  The maintenance support is responsive and reliable. Highly
                  recommended for complex IT solutions."
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-border-dark">
                  <div className="relative">
                    <div className="size-12 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                      <img
                        alt="Professional woman in business setting"
                        className="w-full h-full object-cover"
                        data-alt="Portrait of Emily Rodriguez"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4npEA0-u8ky4sZbjJ3Kqq1q1aK_n6llGCbz1NG2cGo2nb3mtohXeoFatSZANtspx4EM0bzlfuhXdX0Br6s-bv_D94SfIponP8FG52ItDurusBEh79HMnjrguFySME5_rZWlQ7ne7uiW3aZma3IGOJoTellq4IMljE1uuzeVww4ZGbyfiGV26b4IjXuutWowMvQU8jgxLTtvthY8g_UYtZ18xptGa_wdnJlACSQ-e7gcGgAoLQlhSM79lxP779bJyojQFvq10D2nk"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Emily Rodriguez
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Director, CreativeCo
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-[#b4a6ed]">
                      Dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 mt-12">
              <button className="size-12 rounded-full border border-gray-200 dark:border-border-dark flex items-center justify-center text-gray-600 dark:text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <FaArrowLeft/>
              </button>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-border-dark"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-border-dark"></div>
              </div>
              <button className="size-12 rounded-full border border-gray-200 dark:border-border-dark flex items-center justify-center text-gray-600 dark:text-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <FaArrowRight/>
              </button>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 dark:border-border-dark py-12 bg-gray-50 dark:bg-[#0a0812]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 text-xl font-bold text-primary dark:text-white">
                <MdOutlineToken  className="text-3xl"/>
                <span>Nexus</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-primary dark:text-white">
               <MdOutlineHexagon className="text-3xl" />
                <span>HexaLab</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-primary dark:text-white">
                <IoDiamond className="text-3xl" />
                <span>Brilliance</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-primary dark:text-white">
               <MdOutlineWaves className="text-3xl" />
                <span>FlowTech</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-primary dark:text-white">
                <FaBolt className="text-3xl" />
                <span>ZapSystems</span>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Testimonials;
