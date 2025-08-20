
"use client";

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { HoroscopeSection } from '@/components/HoroscopeSection';
import { JyotishConcepts } from '@/components/JyotishConcepts';
import { PanchangToday } from '@/components/PanchangToday';
import { AskTheStars } from '@/components/AskTheStars';
import { PanchangSection } from '@/components/PanchangSection';
import { KundaliAndPanchangSection } from '@/components/KundaliAndPanchangSection';
import { ZodiacMarquee } from '@/components/ZodiacMarquee';
import { Button } from '@/components/ui/button';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'mr'>('en');

  return (
    <>
      <main className="w-full">
        <Hero lang={lang} />

        <div className="container mx-auto px-4 py-4 flex justify-center gap-2">
            <Button onClick={() => setLang('en')} variant={lang === 'en' ? 'default' : 'outline'}>English</Button>
            <Button onClick={() => setLang('mr')} variant={lang === 'mr' ? 'default' : 'outline'}>Marathi</Button>
        </div>

        <AskTheStars lang={lang} />

        <div className="container mx-auto px-4 py-0">
          <HoroscopeSection />
        </div>

        <PanchangSection lang={lang} />
        
        <div className="container mx-auto px-4 py-2 md:py-4">
            <KundaliAndPanchangSection lang={lang} />
            <div className="mt-12 grid gap-16 md:grid-cols-2">
                <div>
                    <JyotishConcepts lang={lang} />
                </div>
                <PanchangToday />
            </div>
        </div>
        
        <Testimonials lang={lang} />

        <ZodiacMarquee lang={lang} />
      </main>
    </>
  );
}
