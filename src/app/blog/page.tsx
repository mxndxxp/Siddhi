
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoroscopeSection } from '@/components/HoroscopeSection';
import { PanchangSection } from '@/components/PanchangSection';
import { PanchangToday } from '@/components/PanchangToday';
import { CalendarCheck, Star } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

const pageContent = {
  en: {
    title: "Vedic Almanac",
    subtitle: "Your daily astrological insights for planetary positions, significant timings, and horoscopes.",
    significantDatesTitle: "Significant Dates",
  },
  mr: {
    title: "वैदिक पंचांग",
    subtitle: "ग्रह स्थिती, महत्त्वपूर्ण वेळ आणि पत्रिकांसाठी तुमची दैनिक ज्योतिषशास्त्रीय माहिती.",
    significantDatesTitle: "महत्वपूर्ण तारखा",
  }
};

const significantDates = {
    en: [
        { year: 2024, date: "July 21, 2024", event: "Guru Purnima", description: "A day to honor spiritual and academic teachers. Excellent for seeking blessings and starting new studies." },
        { year: 2024, date: "August 19, 2024", event: "Raksha Bandhan", description: "Celebrates the bond between brothers and sisters. A day of love and protection." },
        { year: 2024, date: "August 26, 2024", event: "Krishna Janmashtami", description: "Celebration of Lord Krishna's birth. A day of fasting, devotion, and joy." },
        { year: 2024, date: "September 7, 2024", event: "Ganesh Chaturthi", description: "The beginning of the 10-day festival honoring Lord Ganesha's birth. Auspicious for new beginnings." },
        { year: 2024, date: "October 3, 2024", event: "Navaratri Begins", description: "Start of the nine nights dedicated to the worship of Goddess Durga in her various forms." },
        { year: 2024, date: "October 12, 2024", event: "Dussehra (Vijaya Dashami)", description: "Marks the victory of good over evil. A day for new ventures and success." },
        { year: 2024, date: "November 1, 2024", event: "Diwali (Lakshmi Puja)", description: "The festival of lights, celebrating the victory of light over darkness. Auspicious for wealth and prosperity." },
        { year: 2025, date: "March 14, 2025", event: "Holi", description: "The festival of colors, celebrating the arrival of spring and the victory of good over evil." },
        { year: 2025, date: "April 6, 2025", event: "Chaitra Navaratri Begins", description: "The nine-day festival dedicated to the goddess Durga, celebrated in the spring." },
        { year: 2025, date: "August 9, 2025", event: "Raksha Bandhan", description: "A day celebrating the bond of love and protection between siblings." },
        { year: 2025, date: "August 16, 2025", event: "Krishna Janmashtami", description: "Celebrating the birth of Lord Krishna. A day of fasting and devotion." },
        { year: 2025, date: "August 27, 2025", event: "Ganesh Chaturthi", description: "The auspicious start of the festival honoring Lord Ganesha." },
        { year: 2025, date: "October 21, 2025", event: "Diwali (Lakshmi Puja)", description: "The festival of lights, symbolizing the victory of light over darkness and good over evil." },
        { year: 2026, date: "February 25, 2026", event: "Maha Shivaratri", description: "The great night of Shiva, a major festival for devotion and spiritual growth." },
        { year: 2026, date: "March 4, 2026", event: "Holi", description: "The vibrant festival of colors, celebrating the eternal love of Radha and Krishna." },
        { year: 2026, date: "September 15, 2026", event: "Ganesh Chaturthi", description: "Beginning of the ten-day festival in honor of Lord Ganesha's birth." },
        { year: 2026, date: "October 11, 2026", event: "Navaratri Begins", description: "The start of the nine nights dedicated to the forms of Goddess Shakti." },
        { year: 2026, date: "October 20, 2026", event: "Dussehra (Vijaya Dashami)", description: "Commemorates the victory of Lord Rama over Ravana." },
        { year: 2026, date: "November 8, 2026", event: "Diwali (Lakshmi Puja)", description: "Festival of lights, celebrating new beginnings and the triumph of good over evil." },
    ],
    mr: [
        { year: 2024, date: "२१ जुलै, २०२४", event: "गुरु पौर्णिमा", description: "आध्यात्मिक आणि शैक्षणिक गुरूंचा सन्मान करण्याचा दिवस. आशीर्वाद घेण्यासाठी आणि नवीन अभ्यासाची सुरुवात करण्यासाठी उत्तम." },
        { year: 2024, date: "१९ ऑगस्ट, २०२४", event: "रक्षाबंधन", description: "भाऊ-बहिणीच्या नात्याचा उत्सव. प्रेम आणि संरक्षणाचा दिवस." },
        { year: 2024, date: "२६ ऑगस्ट, २०२४", event: "कृष्ण जन्माष्टमी", description: "भगवान श्रीकृष्णाच्या जन्माचा उत्सव. उपवास, भक्ती आणि आनंदाचा दिवस." },
        { year: 2024, date: "७ सप्टेंबर, २०२४", event: "गणेश चतुर्थी", description: "भगवान गणेशाच्या जन्माचा १० दिवसांचा उत्सव सुरू. नवीन सुरुवातीसाठी शुभ." },
        { year: 2024, date: "३ ऑक्टोबर, २०२४", event: "नवरात्री प्रारंभ", description: "देवी दुर्गेच्या विविध रूपांच्या पूजेसाठी समर्पित नऊ रात्रींची सुरुवात." },
        { year: 2024, date: "१२ ऑक्टोबर, २०२४", event: "दसरा (विजयादशमी)", description: "वाईटावर चांगल्याच्या विजयाचे प्रतीक. नवीन उपक्रम आणि यशासाठी एक दिवस." },
        { year: 2024, date: "१ नोव्हेंबर, २०२४", event: "दिवाळी (लक्ष्मीपूजन)", description: "प्रकाशाचा सण, अंधारावर प्रकाशाच्या विजयाचा उत्सव. धन आणि समृद्धीसाठी शुभ." },
        { year: 2025, date: "१४ मार्च, २०२५", event: "होळी", description: "रंगांचा सण, वसंत ऋतूचे आगमन आणि वाईटावर चांगल्याच्या विजयाचा उत्सव." },
        { year: 2025, date: "६ एप्रिल, २०२५", event: "चैत्र नवरात्री प्रारंभ", description: "वसंत ऋतूत साजरा होणारा देवी दुर्गेला समर्पित नऊ दिवसांचा उत्सव." },
        { year: 2025, date: "९ ऑगस्ट, २०२५", event: "रक्षाबंधन", description: "भावंडांमधील प्रेम आणि संरक्षणाच्या नात्याचा उत्सव साजरा करण्याचा दिवस." },
        { year: 2025, date: "१६ ऑगस्ट, २०२५", event: "कृष्ण जन्माष्टमी", description: "भगवान श्रीकृष्णाचा जन्मोत्सव. उपवास आणि भक्तीचा दिवस." },
        { year: 2025, date: "२७ ऑगस्ट, २०२५", event: "गणेश चतुर्थी", description: "भगवान गणेशाचा सन्मान करणाऱ्या उत्सवाची शुभ सुरुवात." },
        { year: 2025, date: "२१ ऑक्टोबर, २०२५", event: "दिवाळी (लक्ष्मीपूजन)", description: "प्रकाशाचा सण, अंधारावर प्रकाशाच्या आणि वाईटावर चांगल्याच्या विजयाचे प्रतीक." },
        { year: 2026, date: "२५ फेब्रुवारी, २०२६", event: "महाशिवरात्री", description: "शिवाची महान रात्र, भक्ती आणि आध्यात्मिक वाढीसाठी एक प्रमुख सण." },
        { year: 2026, date: "४ मार्च, २०२६", event: "होळी", description: "रंगांचा उत्साही सण, राधा आणि कृष्णाच्या शाश्वत प्रेमाचा उत्सव." },
        { year: 2026, date: "१५ सप्टेंबर, २०२६", event: "गणेश चतुर्थी", description: "भगवान गणेशाच्या जन्माच्या सन्मानार्थ दहा दिवसांच्या उत्सवाची सुरुवात." },
        { year: 2026, date: "११ ऑक्टोबर, २०२६", event: "नवरात्री प्रारंभ", description: "शक्तीच्या रूपांना समर्पित नऊ रात्रींची सुरुवात." },
        { year: 2026, date: "२० ऑक्टोबर, २०२६", event: "दसरा (विजयादशमी)", description: "भगवान रामाचा रावणावरील विजय साजरा." },
        { year: 2026, date: "८ नोव्हेंबर, २०२६", event: "दिवाळी (लक्ष्मीपूजन)", description: "प्रकाशाचा सण, नवीन सुरुवात आणि वाईटावर चांगल्याच्या विजयाचा उत्सव." },
    ]
};


const UpcomingDates = ({ year, lang }: { year: number, lang: 'en' | 'mr' }) => {
    const filteredDates = significantDates[lang].filter(d => d.year === year);
    return (
        <section>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3">
                <CalendarCheck className="text-accent"/>
                {pageContent[lang].significantDatesTitle}
            </h2>
        </div>
        <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10 p-2">
            <CardContent className="p-4">
            <ul className="space-y-4">
                {filteredDates.length > 0 ? filteredDates.map(item => (
                    <li key={item.event} className="flex items-start gap-4">
                        <Star className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-accent">{item.event} - <span className="font-normal text-muted-foreground">{item.date}</span></p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </li>
                )) : <p className="text-muted-foreground">No significant dates found for {year}.</p>}
            </ul>
            </CardContent>
        </Card>
        </section>
    )
};


export default function VedicAlmanacPage() {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [lang, setLang] = useState<'en' | 'mr'>('en');
  const currentContent = pageContent[lang];

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-headline font-bold text-primary">
            {currentContent.title}
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-12">
            <Button onClick={() => setLang('en')} variant={lang === 'en' ? 'default' : 'outline'}>English</Button>
            <Button onClick={() => setLang('mr')} variant={lang === 'mr' ? 'default' : 'outline'}>Marathi</Button>
        </div>

        <div className="mt-12 grid gap-16 md:grid-cols-2">
            <PanchangToday />
            <div>
                <div className="flex justify-end mb-4">
                    <Select onValueChange={(value) => setSelectedYear(parseInt(value))} defaultValue={String(selectedYear)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                            <SelectItem value="2029">2029</SelectItem>
                            <SelectItem value="2030">2030</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <UpcomingDates year={selectedYear} lang={lang} />
            </div>
        </div>
      </div>

      <HoroscopeSection />

      <PanchangSection lang={lang} />
    </>
  );
}

    