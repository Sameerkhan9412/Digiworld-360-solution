"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import sideImage from "@/app/assets/image.png";

export default function HeroSection() {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2  lg:order-1">
            <div className="inline-block bg-muted rounded-full text-[#494852]">
              <p className="text-sm font-medium">
                Creative Ideas That Inspire Growth
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                World's Best Creative <br className="hidden sm:block" /> Agency
                Team
              </h1>
              <p className="text-muted-foreground max-w-md text-[#494852] leading-tight">
                World's best creative agency team — crafting legendary brands
                through bold ideas, strategic genius, and flawless execution
                that dominates the global stage.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Modal>
                <ModalTrigger className=" bg-black flex justify-center group/modal-btn">
                  <div className="group-hover/modal-btn:-translate-y-20 text-center transition duration-500">
                    Get Started
                  </div>
                  <div className="translate-y-20 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    Get Started
                  </div>
                </ModalTrigger>
              </Modal>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-5 h-5" fill="currentColor" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={sideImage}
                alt="Creative professional working on laptop"
                fill
                className="object-cover aspect-square"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
