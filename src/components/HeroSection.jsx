import React from 'react'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";


const HeroSection = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center relative">
<div className="absolute inset-0 pointer-events-none bg-hero-glow-light dark:bg-hero-glow"></div>
<div className="layout-container w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left z-10">
<div className="flex flex-col gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-surface-dark border border-gray-200 dark:border-slate-700 w-fit mx-auto lg:mx-0">
<VscWorkspaceTrusted  className='text-sm'/>
<span className="text-xs font-semibold text-primary uppercase tracking-wider">Top Rated Agency</span>
</div>
<h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                                Grow Your Business with <span className="text-primary block sm:inline">Expert Digital Solutions</span>
</h1>
<p className="text-text-light dark:text-text-dim text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                We provide website development, maintenance, digital marketing, SEO, and more to help your business dominate the online space.
                            </p>
</div>
<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
<button className="group flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary hover:bg-primary-hover transition-all duration-300 text-white text-base font-bold shadow-[0_0_20px_rgba(61,52,139,0.3)] hover:shadow-[0_0_30px_rgba(61,52,139,0.5)]">
<span className="truncate">Get a Quote</span>
<FaArrowRight className='text-sm transition-transform group-hover:translate-x-1' />
</button>
<button className="group flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-transparent border border-gray-300 dark:border-slate-600 hover:border-accent dark:hover:border-accent text-slate-700 dark:text-white hover:text-accent dark:hover:text-accent transition-all duration-300 text-base font-bold">
<span className="truncate">Our Services</span>
</button>
</div>
<div className="pt-6 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<span className="text-xs text-text-light dark:text-text-dim font-medium uppercase tracking-wider">Trusted by:</span>
<div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-300"> TechFlow</div>
<div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-300"> HexaSoft</div>
<div className="flex items-center gap-1 font-bold text-slate-600 dark:text-slate-300"> OrbitInc</div>
</div>
</div>
<div className="order-1 lg:order-2 relative z-10 w-full flex justify-center lg:justify-end">
<div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-surface-dark border border-gray-200 dark:border-slate-700 group shadow-2xl shadow-primary/10">
<div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" data-alt="Team of developers working together on digital projects in a modern office with screens displaying code and analytics" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz8Ui7XYFQIcLnz5pQpUJUJTzcnb1AWIQSnseMoY0rbykSctpq06eM9T40p_DQfE05lZugaMnjqz7RFOh2nUwQmubHC0W3it4fO8F-EwpfgzCHwWIsivwyabZknaKvCbS0BKXqQQm48jU7jMBvID3taTL1efDDa7hIS1b2Y6a2muI59g75zdv8xUTvHy4V1uQdfHZbKngt1QenewPvIzZW7beQdk0RTbrfcd1RLx0H9yGZ3pgAtf5Q9VwIJweGRhgSSvNCpuIILFc")`}}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-background-dark/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg text-primary">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<p className="text-text-light dark:text-text-dim text-xs font-medium">Monthly Growth</p>
<p className="text-slate-900 dark:text-white text-lg font-bold">+128%</p>
</div>
</div>
<div className="h-8 w-24">
<svg className="w-full h-full stroke-accent fill-none stroke-2" viewBox="0 0 100 30">
<path d="M0 25 Q 20 25 25 15 T 50 10 T 75 20 T 100 5"></path>
</svg>
</div>
</div>
<div className="absolute top-6 right-6 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
<span className="material-symbols-outlined text-sm">verified</span> Verified Agency
                            </div>
</div>
<div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</main>
  )
}

export default HeroSection