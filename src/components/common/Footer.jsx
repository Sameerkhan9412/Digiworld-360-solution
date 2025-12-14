import React from "react";
import logo from "../../assets/logo.png"
import { FaArrowRight, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
   <footer className="bg-[#0B1120] text-slate-300 pt-16 pb-8 border-t border-slate-800">
<div className="px-4 md:px-10 lg:px-40">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="flex flex-col gap-6">
<img src={logo} alt="logo" className="h-11 w-auto rounded-md object-fit"/>
<p className="text-slate-400 text-sm leading-relaxed">
                            Your trusted partner for comprehensive digital solutions. We combine creativity with technology to drive results.
                        </p>
<div className="flex gap-3 mt-2">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="#">
<FaFacebook />
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="#">
<FaTwitter/>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="#">
<FaInstagram/>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110" href="#">
<FaLinkedin/>
</a>
</div>
</div>
<div>
<h4 className="text-white text-lg font-bold mb-6">Company</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-accent transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> About Us</a></li>
<li><a className="hover:text-accent transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Our Team</a></li>
<li><a className="hover:text-accent transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Careers</a></li>
<li><a className="hover:text-accent transition-colors flex items-center gap-2" href="#"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-lg font-bold mb-6">Services</h4>
<ul className="flex flex-col gap-3 text-sm">
<li><a className="hover:text-accent transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Digital Marketing</a></li>
<li><a className="hover:text-accent transition-colors" href="#">SEO Optimization</a></li>
<li><a className="hover:text-accent transition-colors" href="#">E-commerce Solutions</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Social Media Mgmt</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-lg font-bold mb-6">Newsletter</h4>
<p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and tech insights.</p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full pl-4 pr-12 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors text-sm" placeholder="Your email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 w-10 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center transition-colors" type="button">
<FaArrowRight className="text-2xl"/>
</button>
</div>
<span className="text-xs text-slate-500">We respect your privacy. Unsubscribe anytime.</span>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p>© 2025 Digital Services Co. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
  );
};

export default Footer;
