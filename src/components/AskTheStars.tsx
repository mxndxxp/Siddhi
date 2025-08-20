
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { OmIcon, CancerIcon, LeoIcon, VirgoIcon, LibraIcon, SagittariusIcon } from "./icons/ZodiacIcons";
import React, { useState, useEffect } from "react";

const formSchema = z.object({
  birthDate: z.string().min(1, "Birth date is required."),
  birthTime: z.string().min(1, "Birth time is required."),
  birthLocation: z.string().min(1, "Birth location is required."),
  question: z.string().min(10, "Please ask a more detailed question."),
});

const floatingSigns = [
    { icon: OmIcon, top: '15%', left: '10%', size: 40, delay: '0s' },
    { icon: LeoIcon, top: '25%', left: '85%', size: 50, delay: '2s' },
    { icon: SagittariusIcon, top: '80%', left: '5%', size: 35, delay: '4s' },
    { icon: OmIcon, top: '50%', left: '20%', size: 45, delay: '1s' },
    { icon: VirgoIcon, top: '65%', left: '90%', size: 40, delay: '3s' },
    { icon: OmIcon, top: '5%', left: '40%', size: 30, delay: '5s' },
    { icon: OmIcon, top: '90%', left: '80%', size: 55, delay: '0.5s' },
    { icon: CancerIcon, top: '40%', left: '80%', size: 38, delay: '2.5s' },
    { icon: LibraIcon, top: '85%', left: '30%', size: 42, delay: '1.5s' },
];

const content = {
    en: {
        title: "Ask the Stars",
        description: "Enter your birth details and ask a question to receive personalized astrological guidance.",
        birthDate: "Birth Date",
        birthTime: "Birth Time",
        birthLocation: "Birth Location",
        locationPlaceholder: "e.g., Mumbai, India",
        question: "Your Question",
        questionPlaceholder: "Ask about your career, relationships, or life path...",
        button: "Get Your Reading",
        readingTitle: "Guidance from the Stars",
    },
    mr: {
        title: "ताऱ्यांना विचारा",
        description: "तुमची जन्मतारीख आणि वेळ टाका आणि वैयक्तिकृत ज्योतिषशास्त्रीय मार्गदर्शन मिळवण्यासाठी प्रश्न विचारा.",
        birthDate: "जन्मतारीख",
        birthTime: "जन्मवेळ",
        birthLocation: "जन्मस्थान",
        locationPlaceholder: "उदा., मुंबई, भारत",
        question: "तुमचा प्रश्न",
        questionPlaceholder: "तुमच्या करिअर, नातेसंबंध किंवा जीवनमार्गाबद्दल विचारा...",
        button: "तुमचे वाचन मिळवा",
        readingTitle: "तारकांकडून मार्गदर्शन",
    }
}

const FloatingSign = ({ icon: Icon, top, left, size, delay } : { icon: React.FC<any>, top: string, left: string, size: number, delay: string }) => (
    <div className="floating-symbol absolute opacity-40 text-white" style={{ top, left, animationDelay: delay, animationDuration: '8s' }}>
        <Icon style={{ width: size, height: size }} className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"/>
    </div>
);

const Star = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute rounded-full bg-white" style={style}></div>
);

export const AskTheStars = ({ lang }: { lang: 'en' | 'mr' }) => {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
          boxShadow: '0 0 2px 0.5px #fff',
        };
        return { id: i, style };
      });
      setStars(newStars);
    };

    generateStars();
  }, [isClient]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthDate: "1990-01-01",
      birthTime: "12:00",
      birthLocation: "New Delhi, India",
      question: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `New Reading Request:\n\nBirth Date: ${values.birthDate}\nBirth Time: ${values.birthTime}\nBirth Location: ${values.birthLocation}\n\nQuestion: ${values.question}`;
    const whatsappUrl = `https://wa.me/917659063555?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  }

  return (
    <section id="ask-the-stars" className="scroll-mt-24 py-16 bg-indigo-900/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            {isClient && stars.map(star => <Star key={star.id} style={star.style} />)}
            {floatingSigns.map((sign, i) => <FloatingSign key={i} {...sign} />)}
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <Card className="max-w-xl mx-auto text-left shadow-lg bg-card/80 backdrop-blur-sm border-purple-900/10">
                <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-xl text-accent">
                    <Wand2 className="text-accent"/>
                    {content[lang].title}
                </CardTitle>
                <CardDescription>
                    {content[lang].description}
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                        control={form.control}
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{content[lang].birthDate}</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="birthTime"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{content[lang].birthTime}</FormLabel>
                            <FormControl>
                                <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="birthLocation"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{content[lang].birthLocation}</FormLabel>
                            <FormControl>
                                <Input placeholder={content[lang].locationPlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="question"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>{content[lang].question}</FormLabel>
                            <FormControl>
                            <Textarea placeholder={content[lang].questionPlaceholder} {...field} rows={3} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        {content[lang].button}
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
       </div>
    </section>
  );
};
