
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { AriesIcon, TaurusIcon, GeminiIcon, CancerIcon, LeoIcon, VirgoIcon, LibraIcon, ScorpioIcon, SagittariusIcon, CapricornIcon, AquariusIcon, PiscesIcon } from '@/components/icons/ZodiacIcons';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateHoroscope, GenerateHoroscopeOutput } from "@/ai/flows/generate-horoscope";

const zodiacSignsData = {
  en: [
    { name: "Aries", icon: <AriesIcon />, reading: "A day for bold action. Your energy is high." },
    { name: "Taurus", icon: <TaurusIcon />, reading: "Focus on financial matters. Practicality brings the best results." },
    { name: "Gemini", icon: <GeminiIcon />, reading: "Communication is key today. Express your ideas clearly." },
    { name: "Cancer", icon: <CancerIcon />, reading: "Listen to your intuition. Your instincts will guide you correctly." },
    { name: "Leo", icon: <LeoIcon />, reading: "Your creativity is at its peak. A great day for artistic pursuits." },
    { name: "Virgo", icon: <VirgoIcon />, reading: "Bring order to your life. Organizing your space brings clarity." },
    { name: "Libra", icon: <LibraIcon />, reading: "Find balance in your relationships. Harmony comes from compromise." },
    { name: "Scorpio", icon: <ScorpioIcon />, reading: "A transformative day awaits. Embrace the changes coming your way." },
    { name: "Sagittarius", icon: <SagittariusIcon />, reading: "Adventure is calling. Step out of your comfort zone." },
    { name: "Capricorn", icon: <CapricornIcon />, reading: "Your hard work will pay off soon. Stay focused on your goals." },
    { name: "Aquarius", icon: <AquariusIcon />, reading: "Connect with your community. Collaboration is fruitful." },
    { name: "Pisces", icon: <PiscesIcon />, reading: "Pay attention to your dreams. Your subconscious has a message." },
  ],
  mr: [
    { name: "मेष", icon: <AriesIcon />, reading: "आजचा दिवस धाडसी कृतीसाठी आहे. तुमची ऊर्जा उच्च आहे." },
    { name: "वृषभ", icon: <TaurusIcon />, reading: "आर्थिक बाबींवर लक्ष केंद्रित करा. व्यावहारिक दृष्टिकोन सर्वोत्तम परिणाम देईल." },
    { name: "मिथुन", icon: <GeminiIcon />, reading: "संवाद आज महत्त्वाचा आहे. गैरसमज टाळण्यासाठी तुमच्या कल्पना स्पष्टपणे मांडा." },
    { name: "कर्क", icon: <CancerIcon />, reading: "तुमच्या अंतर्ज्ञानाकडे लक्ष द्या. तुमची सहज प्रवृत्ती तुम्हाला योग्य दिशा दाखवेल." },
    { name: "सिंह", icon: <LeoIcon />, reading: "तुमची सर्जनशीलता शिगेला पोहोचली आहे. कलात्मक कार्यांसाठी उत्तम दिवस." },
    { name: "कन्या", icon: <VirgoIcon />, reading: "तुमच्या जीवनात सुव्यवस्था आणा. तुमची जागा स्वच्छ केल्याने मानसिक स्पष्टता येईल." },
    { name: "तूळ", icon: <LibraIcon />, reading: "तुमच्या नातेसंबंधात संतुलन साधा. तडजोडीतून सुसंवाद साधता येतो." },
    { name: "वृश्चिक", icon: <ScorpioIcon />, reading: "परिवर्तनाचा दिवस तुमची वाट पाहत आहे. बदलाला स्वीकारा." },
    { name: "धनु", icon: <SagittariusIcon />, reading: "साहस तुम्हाला खुणावत आहे. तुमच्या कम्फर्ट झोनमधून बाहेर पडा." },
    { name: "मकर", icon: <CapricornIcon />, reading: "तुमच्या मेहनतीचे फळ लवकरच मिळेल. तुमच्या ध्येयांवर लक्ष केंद्रित करा." },
    { name: "कुंभ", icon: <AquariusIcon />, reading: "तुमच्या समुदायाशी संपर्क साधा. समविचारी लोकांशी सहयोग करणे फायद्याचे ठरेल." },
    { name: "मीन", icon: <PiscesIcon />, reading: "तुमच्या स्वप्नांकडे लक्ष द्या. तुमचे अंतर्मन तुम्हाला काहीतरी महत्त्वाचे सांगण्याचा प्रयत्न करत आहे." },
  ]
};

const content = {
    en: {
        title: "Daily Horoscope",
        button: "Read More",
        previous: "Previous",
        next: "Next",
        horoscopeFor: "Today's Horoscope for",
        generating: "Generating your horoscope..."
    },
    mr: {
        title: "दैनिक राशिफल",
        button: "अधिक वाचा",
        previous: "मागील",
        next: "पुढील",
        horoscopeFor: "आजचे राशीभविष्य",
        generating: "तुमचे राशीभविष्य तयार होत आहे..."
    }
}


const FloatingPlanet = ({ size, color, blur, top, left, animationDuration, animationDelay }: { size: number, color: string, blur: number, top: string, left: string, animationDuration: string, animationDelay?: string }) => {
    return (
        <div className="absolute" style={{ top, left, animation: `float ${animationDuration} ease-in-out infinite`, animationDelay}}>
            <div 
                className="rounded-full"
                style={{ 
                    width: size, 
                    height: size, 
                    backgroundColor: color,
                    boxShadow: `0 0 ${blur}px ${blur/2}px ${color}`,
                    opacity: 0.7
                }}
            />
        </div>
    );
}

const HoroscopeDialogContent = ({ sign, lang, onNavigate }: {
    sign: { name: string; icon: React.ReactElement; reading: string; };
    lang: 'en' | 'mr';
    onNavigate: (direction: 'next' | 'previous') => void;
}) => {
    const [horoscope, setHoroscope] = useState<GenerateHoroscopeOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    React.useEffect(() => {
        const fetchHoroscope = async () => {
            setIsLoading(true);
            setHoroscope(null);
            setError(null);
            try {
                const result = await generateHoroscope({ sign: sign.name, language: lang });
                setHoroscope(result);
            } catch (e) {
                setError("Sorry, we couldn't generate the horoscope right now. Please try again later.");
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHoroscope();
    }, [sign, lang]);

    return (
        <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-sm border-purple-900/20 text-foreground">
            <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                        {React.cloneElement(sign.icon, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                        <span className="text-2xl font-headline text-primary">{sign.name}</span>
                         <DialogDescription>{content[lang].horoscopeFor} {sign.name}</DialogDescription>
                    </div>
                </DialogTitle>
            </DialogHeader>
            <div className="py-4 min-h-[120px]">
                {isLoading && (
                    <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                        <Loader2 className="w-8 h-8 animate-spin text-primary mb-2" />
                        <p>{content[lang].generating}</p>
                    </div>
                )}
                {error && <p className="text-destructive">{error}</p>}
                {horoscope && (
                    <p className="text-muted-foreground whitespace-pre-wrap">{horoscope.horoscope}</p>
                )}
            </div>
            <DialogFooter className="flex justify-between w-full">
                <Button variant="outline" onClick={() => onNavigate('previous')}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> {content[lang].previous}
                </Button>
                <Button variant="outline" onClick={() => onNavigate('next')}>
                    {content[lang].next} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </DialogFooter>
        </DialogContent>
    );
};


export const HoroscopeSection = () => {
  const [lang, setLang] = useState<'en' | 'mr'>('mr');
  const [selectedSignIndex, setSelectedSignIndex] = useState<number | null>(null);

  const handleNavigation = (direction: 'next' | 'previous') => {
    if (selectedSignIndex === null) return;
    const totalSigns = zodiacSignsData[lang].length;
    let newIndex;
    if (direction === 'next') {
      newIndex = (selectedSignIndex + 1) % totalSigns;
    } else {
      newIndex = (selectedSignIndex - 1 + totalSigns) % totalSigns;
    }
    setSelectedSignIndex(newIndex);
  };
  
  const selectedSign = selectedSignIndex !== null ? zodiacSignsData[lang][selectedSignIndex] : null;

  return (
    <section className="my-12 py-24 bg-accent/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-50 hidden md:block">
            {/* Orbits */}
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '90s' }}>
                 <FloatingPlanet size={40} color="#FFD700" blur={20} top="10%" left="10%" animationDuration="8s" />
            </div>
             <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
                <FloatingPlanet size={20} color="#ADD8E6" blur={15} top="80%" left="85%" animationDuration="10s" animationDelay="2s" />
            </div>
            <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '120s' }}>
                <FloatingPlanet size={30} color="#E6E6FA" blur={18} top="50%" left="50%" animationDuration="6s" animationDelay="1s" />
            </div>
             <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '80s', animationDirection: 'reverse' }}>
                <FloatingPlanet size={25} color="#FF6347" blur={16} top="20%" left="70%" animationDuration="9s" animationDelay="3s" />
            </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-headline text-center font-bold text-yellow-200 mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary-foreground) / 0.5)' }}>{content[lang].title}</h2>
            <div className="flex justify-center gap-2 mb-12">
                <Button onClick={() => setLang('en')} variant={lang === 'en' ? 'default' : 'outline'} className="text-white border-yellow-200/50 bg-black/20 hover:bg-black/40">English</Button>
                <Button onClick={() => setLang('mr')} variant={lang === 'mr' ? 'default' : 'outline'} className="text-white border-yellow-200/50 bg-black/20 hover:bg-black/40">Marathi</Button>
            </div>
            
            <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedSignIndex(null)}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {zodiacSignsData[lang].map((sign, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/4">
                        <DialogTrigger asChild onClick={() => setSelectedSignIndex(index)}>
                            <Card className="text-center bg-black/20 backdrop-blur-sm border-orange-300/20 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white cursor-pointer h-full flex flex-col">
                                <CardHeader className="items-center">
                                    <div className="w-16 h-16 mx-auto bg-black/10 rounded-full flex items-center justify-center text-yellow-300">
                                        {React.cloneElement(sign.icon, { className: 'w-8 h-8' })}
                                    </div>
                                <CardTitle className="mt-4 font-headline text-xl text-yellow-300" style={{ textShadow: '0 0 8px hsl(var(--primary-foreground) / 0.4)' }}>{sign.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-neutral-300 text-sm" style={{ textShadow: '0 0 5px hsl(var(--primary-foreground) / 0.3)' }}>{sign.reading}</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-white bg-black/30 border-orange-300/50 hover:bg-black/50" />
                <CarouselNext className="text-white bg-black/30 border-orange-300/50 hover:bg-black/50" />
              </Carousel>
              {selectedSign && (
                <HoroscopeDialogContent 
                    sign={selectedSign} 
                    lang={lang} 
                    onNavigate={handleNavigation}
                />
              )}
            </Dialog>

       </div>
    </section>
  );
};
