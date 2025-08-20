
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Sunrise, Sunset, Star, ShieldCheck, CalendarIcon } from "lucide-react";
import { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { hi } from "date-fns/locale";

const detailedPanchangData = [
    // Sample data for a few days, cycling through
    { 
        tithi: "तृतीया – सुबह ~08:40 तक, फिर चतुर्थी",
        nakshatra: "पूर्वाभाद्रपदा – सुबह तक; फिर उत्तराभाद्रपदा",
        yoga: "सुकर्मा – शाम तक; फिर धृति",
        karana: "विष्टि → बव → बालव",
        rahuKaal: "03:44 PM – 05:21 PM",
        yamgand: "09:18 AM – 10:55 AM",
        gulika: "12:31 PM – 02:08 PM",
        durmuhurt: "08:40 AM–09:31 AM, 11:25 PM–12:09 AM",
        abhijitMuhurt: "12:06 PM – 12:57 PM",
        amritKaal: "05:59 AM – 07:29 AM",
        brahmaMuhurt: "04:30 AM – 05:18 AM",
        parvaVrat: "कजरी तीज, संकष्टी, अंगारकी, हेरम्ब संकष्टी, बहुला चतुर्थी",
        shubhYog: "सर्वार्थ सिद्धि योग, समसप्तक योग",
        sunrise: "06:06 AM",
        sunset: "06:57 PM",
        suggestion: "शुभ कार्य के लिए अभिजीत मुहूर्त, अमृत काल, और शुभ योग का उपयोग करें। राहुकाल, यमगंड, गुलिका, और दुर्मुहूर्त में बचें।"
    },
    {
        tithi: "चतुर्थी – सुबह ~09:15 तक, फिर पंचमी",
        nakshatra: "उत्तराभाद्रपदा – दोपहर तक; फिर रेवती",
        yoga: "धृति – रात तक; फिर शूल",
        karana: "बालव → कौलव → तैतिल",
        rahuKaal: "04:30 PM - 06:00 PM",
        yamgand: "12:00 PM - 01:30 PM",
        gulika: "03:00 PM - 04:30 PM",
        durmuhurt: "11:50 AM – 12:40 PM",
        abhijitMuhurt: "11:50 AM – 12:40 PM",
        amritKaal: "08:15 AM – 09:45 AM",
        brahmaMuhurt: "04:31 AM – 05:19 AM",
        parvaVrat: "गणेश चतुर्थी व्रत",
        shubhYog: "द्विपुष्कर योग",
        sunrise: "06:05 AM",
        sunset: "06:58 PM",
        suggestion: "आज नए कार्यों की शुरुआत के लिए उत्तम दिन है। गणेश पूजन से विशेष लाभ होगा।"
    },
    {
        tithi: "पंचमी – सुबह ~10:00 तक, फिर षष्ठी",
        nakshatra: "रेवती – शाम तक; फिर अश्विनी",
        yoga: "शूल – देर रात तक; फिर गण्ड",
        karana: "तैतिल → गर → वणिज",
        rahuKaal: "07:30 AM - 09:00 AM",
        yamgand: "01:30 PM - 03:00 PM",
        gulika: "09:00 AM - 10:30 AM",
        durmuhurt: "06:06 AM – 07:50 AM",
        abhijitMuhurt: "11:51 AM – 12:41 PM",
        amritKaal: "10:30 AM – 12:00 PM",
        brahmaMuhurt: "04:32 AM – 05:20 AM",
        parvaVrat: "ऋषि पंचमी",
        shubhYog: "रवि योग",
        sunrise: "06:04 AM",
        sunset: "06:59 PM",
        suggestion: "ज्ञान और शिक्षा से संबंधित कार्यों के लिए दिन शुभ है। बड़ों का आशीर्वाद लें।"
    }
];

export const PanchangToday = () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [panchang, setPanchang] = useState(detailedPanchangData[0]);

    useEffect(() => {
        setDate(new Date());
    }, []);

    useEffect(() => {
        if (date) {
            const dayOfMonth = date.getDate();
            const index = (dayOfMonth - 1) % detailedPanchangData.length;
            setPanchang(detailedPanchangData[index]);
        }
    }, [date]);

    if (!date) {
        return null; // or a loading skeleton
    }

    const renderTimings = () => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <p><strong>राहुकाल:</strong> {panchang.rahuKaal}</p>
            <p><strong>यमगंड:</strong> {panchang.yamgand}</p>
            <p><strong>गुलिका:</strong> {panchang.gulika}</p>
            <p><strong>दुर्मुहूर्त:</strong> {panchang.durmuhurt}</p>
            <p><strong>अभिजीत मुहूर्त:</strong> {panchang.abhijitMuhurt}</p>
            <p><strong>अमृत काल:</strong> {panchang.amritKaal}</p>
            <p><strong>ब्रह्म मुहूर्त:</strong> {panchang.brahmaMuhurt}</p>
        </div>
    );
    
    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
                    <CalendarDays className="text-accent" />
                    पंचांग
                </h2>
                 <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className="w-[280px] justify-start text-left font-normal"
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: hi }) : <span>Pick a date</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => newDate && setDate(newDate)}
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
            </div>
            <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10 shadow-lg relative overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline text-xl text-accent">Daily Astrological Details</CardTitle>
                    <CardDescription>{format(date, "PPPP", { locale: hi })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                        <div><strong>तिथि:</strong> {panchang.tithi}</div>
                        <div><strong>नक्षत्र:</strong> {panchang.nakshatra}</div>
                        <div><strong>योग:</strong> {panchang.yoga}</div>
                        <div><strong>करण:</strong> {panchang.karana}</div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-accent">महत्वपूर्ण समय</h4>
                        {renderTimings()}
                    </div>

                     <div className="flex justify-around items-center text-center text-sm text-muted-foreground pt-4 border-t border-purple-900/10">
                        <div className="flex items-center gap-2">
                            <Sunrise className="w-5 h-5 text-primary"/>
                            <div>
                                <p className="font-semibold">सूर्योदय</p>
                                <p>{panchang.sunrise}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sunset className="w-5 h-5 text-primary"/>
                             <div>
                                <p className="font-semibold">सूर्यास्त</p>
                                <p>{panchang.sunset}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-purple-900/10">
                       <p className="text-sm">
                           <strong className="text-accent flex items-center gap-2"><Star className="w-4 h-4" /> पर्व / व्रत:</strong> 
                           <span className="text-muted-foreground ml-2">{panchang.parvaVrat}</span>
                       </p>
                       <p className="text-sm">
                           <strong className="text-accent flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> शुभ योग:</strong> 
                           <span className="text-muted-foreground ml-2">{panchang.shubhYog}</span>
                       </p>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-primary/10 text-center">
                        <p className="text-sm font-medium text-primary-foreground/90">{panchang.suggestion}</p>
                    </div>

                </CardContent>
            </Card>
        </section>
    );
};
