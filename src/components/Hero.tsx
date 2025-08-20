
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ZodiacWheel } from "./ZodiacWheel";

const content = {
  en: {
    title: "Welcome to Shree Siddhivinayak Jyotish",
    quote: `Om Man Samarthya Data Shree Aniruddha Yanamaha`
  },
  mr: {
    title: "श्री सिद्धिविनायक ज्योतिषमध्ये आपले स्वागत आहे",
    quote: "ॐ मन: सामर्थ्यदाता श्री अनिरुद्धाय नमः"
  }
}

export const Hero = ({ lang }: { lang: 'en' | 'mr' }) => {

  const handleScroll = () => {
    const section = document.getElementById('ask-the-stars');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden h-[740px]">
        <Image 
            src="https://i0.wp.com/urbanacres.in/wp-content/uploads/2025/02/Shri-Siddhivinayak-Temple-in-Mumbai.webp"
            alt="Shri Siddhivinayak Temple" 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="opacity-80"
            data-ai-hint="Siddhivinayak Temple"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container z-10 w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-4xl sm:text-5xl font-headline text-white leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.7)] animate-stomp">
                        {content[lang].title}
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-white max-w-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                        {content[lang].quote}
                    </p>
                    <div className="relative mt-8">
                      <Button 
                          size="lg" 
                          className="px-8 py-6 text-lg animate-pulse-glow"
                          onClick={handleScroll}
                      >
                            Get Started
                            <ArrowDown className="ml-2"/>
                      </Button>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8 md:mt-0">
                    <ZodiacWheel />
                </div>
            </div>
        </div>
    </section>
  );
};
