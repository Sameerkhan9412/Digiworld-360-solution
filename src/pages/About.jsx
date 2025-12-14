import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md"
import { FaEye } from "react-icons/fa";
const About = () => {
  return (
    <div className="flex flex-1 justify-center pt-24 pb-10 px-4 ">
      <div className="layout-content-container flex flex-col  max-w-[1280px] flex-1 w-full">
        <div className="@container mb-12">
          <div className="">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden group"
              data-alt="Abstract digital network connections background dark"
              style={{backgroundImage:`linear-gradient(rgba(15, 17, 26, 0.7) 0%, rgba(15, 17, 26, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEqNiC6CgoGh-DK-bkCyW1YBdpwAvlSqDHwQcWEbRniy8AZ1V-MwHwhLXZ0kOHJYIU0P8EzMVCnMX3xf5PTS66sN7ALfW4JNS_WHCODtGnkz8RjRIbZxXPUXc0hKoNigN62KcPmyfM9vSvwDnNAZ-7vyjw1OKwA_AlUjTmjbiS1UDaCpyMvIhvpMkXuwflMA9Si1h5w6Hd7ikXUDXOaqb_aA8sxxKMFPnlHM5XUt3C-1vkii_i9s90MO1Qf7pmVAW-PMl3i6riEPs")`}}
            >
              <div className="flex flex-col gap-4 z-10 max-w-[720px]">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Architects of the Digital Future
                </h1>
                <h2 className="text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                  We are a collective of developers, designers, and strategists
                  dedicated to transforming your digital presence into a
                  powerful engine for growth.
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4 z-10 mt-4">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
                  <span className="truncate">Our Story</span>
                </button>
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#1f2333] border border-primary/50 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2d3246] transition-colors">
                  <span className="truncate">View Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-10 @container">
          <div className="flex flex-col gap-4 px-4">
            <h2 className="text-[#131811] dark:text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
              Driven by Innovation, <br />
              <span className="text-primary dark:text-[#7b6fe6]">
                Structured for Success.
              </span>
            </h2>
            <p className="text-[#4b5563] dark:text-[#a0aec0] text-base font-normal leading-normal max-w-[720px]">
              Since our inception, we have been bridging the gap between complex
              technology and user-centric design. We don't just build websites;
              we build digital ecosystems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="flex flex-1 gap-5 rounded-lg border border-[#e5e7eb] dark:border-[#2d3246] bg-white dark:bg-[#181b25] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center size-12 rounded-full bg-accent/20 text-accent">
                <MdOutlineRocketLaunch className="text-[32px]"/>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#131811] dark:text-white text-xl font-bold leading-tight">
                  Our Mission
                </h3>
                <p className="text-[#4b5563] dark:text-[#a0aec0] text-sm md:text-base font-normal leading-relaxed">
                  To empower businesses through innovative technology and
                  data-driven marketing solutions that scale. We strive to
                  demystify the digital landscape for our partners.
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-5 rounded-lg border border-[#e5e7eb] dark:border-[#2d3246] bg-white dark:bg-[#181b25] p-8 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary dark:text-[#9e94ff]">
                <FaEye className="text-[32px]"/>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#131811] dark:text-white text-xl font-bold leading-tight">
                  Our Vision
                </h3>
                <p className="text-[#4b5563] dark:text-[#a0aec0] text-sm md:text-base font-normal leading-relaxed">
                  To become the global standard for digital transformation
                  services, setting new benchmarks in quality, performance, and
                  ethical web practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h2 className="text-[#131811] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-4xl md:text-5xl font-black text-primary dark:text-[#9e94ff] mb-2">
                12+
              </span>
              <span className="text-sm font-medium text-[#4b5563] dark:text-[#a0aec0]">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-accent/10 border border-accent/20">
              <span className="text-4xl md:text-5xl font-black text-accent mb-2">
                500+
              </span>
              <span className="text-sm font-medium text-[#4b5563] dark:text-[#a0aec0]">
                Projects Delivered
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-4xl md:text-5xl font-black text-primary dark:text-[#9e94ff] mb-2">
                98%
              </span>
              <span className="text-sm font-medium text-[#4b5563] dark:text-[#a0aec0]">
                Client Retention
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-accent/10 border border-accent/20">
              <span className="text-4xl md:text-5xl font-black text-accent mb-2">
                24/7
              </span>
              <span className="text-sm font-medium text-[#4b5563] dark:text-[#a0aec0]">
                Support Active
              </span>
            </div>
          </div>
        </div>
        <div className="py-12 px-4">
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-[#131811] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">
              Meet the Experts
            </h2>
            <p className="text-[#4b5563] dark:text-[#a0aec0] text-base max-w-[600px]">
              Our diverse team of experts brings together decades of experience
              across development, design, and digital strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-accent transition-colors duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Portrait of Sarah Jenkins, CEO"
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2jBwCXREl3HOrXL1yTo49iddScKsUvzg5Y0f_5-7COLPdWoAf03a6-J8qn1L6Jphgh0hEhLwDVEis0ik4YEq18_J8rXVCr3UeWJKqCTf2n6unpNGGvOzcTtD6cBL-ZgMQy5Ewd4i9glH-cV8-suj1Gn2hEXz_rWGzSZ3P8ze9XE6ApvZHeCPWKgjKFjPQE_sP2tOF-vAkaAMHYGqmB-9T_qalCQ6TdR514QExsuw31PGqQkxHEnWQC8kA77LJOhPfqdnAXRVY6O0")`}}
                ></div>
              </div>
              <div className="text-center">
                <h3 className="text-[#131811] dark:text-white text-lg font-bold">
                  Sarah Jenkins
                </h3>
                <p className="text-primary dark:text-[#9e94ff] text-sm font-medium group-hover:text-accent transition-colors">
                  CEO &amp; Founder
                </p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-accent transition-colors duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Portrait of David Chen, CTO"
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2tJ1JDxM7DFjyWeB1tburAxhfCe3O3DJCY3BWL5Qh9SMIIogR_F_rSMGBpy4nwvLsUa063vi8hbbMt_JriwntImeOqCD4SQCT3uuG-pTlQXPzvCvWLID3esK7pMiHvrIYsBcPZm6dPIuHaIedG2Stu55lrhXpVhaabX0vrsI6JeuXkvSBe5Nqm9_HiXUzy1rsFxay3z1fl-6h9iFmP8Q4t5qgy42mjhuXEwQg-8NWrE-nq-bDZi8YXniq3SLP7BpreVYIwcG8Xe4")`}}
                ></div>
              </div>
              <div className="text-center">
                <h3 className="text-[#131811] dark:text-white text-lg font-bold">
                  David Chen
                </h3>
                <p className="text-primary dark:text-[#9e94ff] text-sm font-medium group-hover:text-accent transition-colors">
                  Chief Technology Officer
                </p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-accent transition-colors duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Portrait of Maria Garcia, Head of Design"
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG3g88RekaDBTUyKUzGtI-9bc7-iBaNgDEB0ZnJN7bEqoK_0YGI6EX6OT6ll_GW9c5smw-K3l1r1sUHTeSrq0A2YP8JyTK81VHO-Jk2P6eoxIznSuBl5wAM-X7tE57ID9WfibZxwQArkOazRmoccrdaUwAPd10YJF0AAA9phI5GpRufOUku306YDHMT4VhXpzuBBVNCaAgdvi42j4sAmAUArzxqbEgUx5bpl8zJsfJKoPcsiQnSw4XZEjhRsWuh3oVUJxNoMwU0Yk")`}}
                ></div>
              </div>
              <div className="text-center">
                <h3 className="text-[#131811] dark:text-white text-lg font-bold">
                  Maria Garcia
                </h3>
                <p className="text-primary dark:text-[#9e94ff] text-sm font-medium group-hover:text-accent transition-colors">
                  Head of Design
                </p>
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-accent transition-colors duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Portrait of James Wilson, SEO Strategist"
                  style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfc3mch3buzMs-mq81RIXwHL4iv9T9w2Ow-IIRin0snXUZufi0PTT7vAc4-W9UQAYXvB0sn8czKzmQlAnImzOzn-RTfgzgceAgGoElEMLe_QI3JG8w-WdtlQhjOtn8ilFtqR3dVvBLcAIqrsO3KGKYx0JsSUNjIGMjGrIeKLE37iH0uxCLIleQyP_5XRf-AvF5IZ51xqZCwO32KQbJ78mbYnTd-7Dfi3yl7hEtR-RIx_OM4KWinAdkvVZnPrfXtnvzd0Bq7ZLog5g")`}}
                ></div>
              </div>
              <div className="text-center">
                <h3 className="text-[#131811] dark:text-white text-lg font-bold">
                  James Wilson
                </h3>
                <p className="text-primary dark:text-[#9e94ff] text-sm font-medium group-hover:text-accent transition-colors">
                  Lead SEO Strategist
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 px-4">
          <div className="rounded-xl bg-[#181b25] border border-[#2d3246] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[200px] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-[#a0aec0] text-base md:text-lg max-w-[600px]">
                Join the hundreds of businesses that have transformed their
                online identity with our expert services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-accent text-white text-base font-bold leading-normal hover:bg-white hover:text-[#131811] transition-all">
                  Start a Project
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-transparent border border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
