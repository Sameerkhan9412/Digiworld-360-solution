"use client"
import Header from "@/components/common/Header";
import HeroSection from "@/components/common/Hero-Section";
import LogoSlider from "@/components/LogoSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center bg-zinc-50 font-sans">
        <HeroSection/>
        <LogoSlider/>
    </div>
  );
}
