
"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar, Moon, Star, Sun, Wind } from 'lucide-react';

const contentData = {
    en: {
        title: "The Five Limbs of Panchang",
        subtitle: "Understand the five core elements of the Vedic calendar that determine the energy of each day.",
        elements: [
            {
                name: 'Tithi',
                icon: <Moon className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "The lunar day, calculated from the angle between the Sun and Moon. There are 30 Tithis in a lunar month, each with its unique energy influencing daily activities."
            },
            {
                name: 'Nakshatra',
                icon: <Star className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "The 27 lunar mansions or constellations the Moon passes through. Your birth Nakshatra is a key indicator of your personality and life path."
            },
            {
                name: 'Vaar',
                icon: <Sun className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "The weekday. Each day is ruled by a planet (e.g., Sunday by the Sun, Monday by the Moon), which infuses the day with its specific vibrational quality."
            },
            {
                name: 'Yoga',
                icon: <Wind className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "A period of time calculated from the combined longitudes of the Sun and Moon. There are 27 Yogas, each indicating specific astrological qualities for a day."
            },
            {
                name: 'Karana',
                icon: <Calendar className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "Half of a Tithi. There are 11 Karanas in total, which are used to determine auspicious timings for specific tasks and rituals."
            }
        ]
    },
    mr: {
        title: "पंचांगचे पाच अंग",
        subtitle: "प्रत्येक दिवसाची ऊर्जा निश्चित करणाऱ्या वैदिक कॅलेंडरचे पाच मुख्य घटक समजून घ्या.",
        elements: [
            {
                name: 'तिथी',
                icon: <Moon className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "चंद्र दिवस, सूर्य आणि चंद्र यांच्यातील कोनातून मोजला जातो. एका चंद्र महिन्यात ३० तिथी असतात, प्रत्येकाची स्वतःची ऊर्जा दैनंदिन कार्यांवर प्रभाव टाकते."
            },
            {
                name: 'नक्षत्र',
                icon: <Star className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "२७ चंद्र महाल किंवा नक्षत्र ज्यामधून चंद्र जातो. तुमचे जन्म नक्षत्र तुमच्या व्यक्तिमत्त्वाचा आणि जीवनमार्गाचा मुख्य सूचक आहे."
            },
            {
                name: 'वार',
                icon: <Sun className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "आठवड्याचा दिवस. प्रत्येक दिवसावर एका ग्रहाचे राज्य असते (उदा. रविवार सूर्याचा, सोमवार चंद्राचा), जो दिवसाला त्याच्या विशिष्ट कंपनात्मक गुणवत्तेने भरतो."
            },
            {
                name: 'योग',
                icon: <Wind className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "सूर्य आणि चंद्राच्या एकत्रित रेखांशातून मोजलेला कालावधी. एकूण २७ योग आहेत, प्रत्येक दिवसासाठी विशिष्ट ज्योतिषशास्त्रीय गुण दर्शवतो."
            },
            {
                name: 'करण',
                icon: <Calendar className="w-16 h-16 md:w-20 md:h-20 text-accent" />,
                description: "तिथीचा अर्धा भाग. एकूण ११ करण आहेत, जे विशिष्ट कार्ये आणि विधींसाठी शुभ वेळ निश्चित करण्यासाठी वापरले जातात."
            }
        ]
    }
}


export const PanchangSection = ({ lang = 'en' }: { lang?: 'en' | 'mr' }) => {
    const content = contentData[lang];

    return (
        <section className="py-24 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-headline font-bold text-accent">{content.title}</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                       {content.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {content.elements.map((element, index) => (
                        <Card key={index} className="bg-background/70 backdrop-blur-sm border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 text-center p-4">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/20 rounded-full">
                                    {element.icon}
                                </div>
                                <CardTitle className="mt-4 font-headline text-2xl text-accent">{element.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{element.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
