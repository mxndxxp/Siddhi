
"use client"

import React from 'react';
import { AriesIcon, TaurusIcon, GeminiIcon, CancerIcon, LeoIcon, VirgoIcon, LibraIcon, ScorpioIcon, SagittariusIcon, CapricornIcon, AquariusIcon, PiscesIcon } from '@/components/icons/ZodiacIcons';

const content = {
    en: [
        { name: "Aries", icon: <AriesIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The pioneer's fire, forging paths where none existed." },
        { name: "Taurus", icon: <TaurusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The serene earth, finding beauty in steadfast purpose." },
        { name: "Gemini", icon: <GeminiIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The curious wind, dancing between worlds of thought and word." },
        { name: "Cancer", icon: <CancerIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The nurturing tide, ruled by the heart's deep currents." },
        { name: "Leo", icon: <LeoIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The radiant sun, shining with courage and noble spirit." },
        { name: "Virgo", icon: <VirgoIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The careful harvest, perfecting the world through service." },
        { name: "Libra", icon: <LibraIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The graceful balance, seeking harmony in every connection." },
        { name: "Scorpio", icon: <ScorpioIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The hidden depths, where transformation and truth reside." },
        { name: "Sagittarius", icon: <SagittariusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The soaring arrow, forever seeking wisdom and adventure." },
        { name: "Capricorn", icon: <CapricornIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The steady mountain, building legacies that withstand time." },
        { name: "Aquarius", icon: <AquariusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The cosmic river, pouring forth innovation for all humanity." },
        { name: "Pisces", icon: <PiscesIcon className="w-24 h-24 text-accent mx-auto" />, quote: "The boundless ocean, where dreams and divinity become one." },
    ],
    mr: [
        { name: "मेष", icon: <AriesIcon className="w-24 h-24 text-accent mx-auto" />, quote: "पहिल्याची आग, जिथे कोणी नाही तिथे मार्ग तयार करणे." },
        { name: "वृषभ", icon: <TaurusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "शांत पृथ्वी, स्थिर हेतूमध्ये सौंदर्य शोधणे." },
        { name: "मिथुन", icon: <GeminiIcon className="w-24 h-24 text-accent mx-auto" />, quote: "उत्सुक वारा, विचार आणि शब्दांच्या जगात नाचणे." },
        { name: "कर्क", icon: <CancerIcon className="w-24 h-24 text-accent mx-auto" />, quote: "पोषण करणारी लाट, हृदयाच्या खोल प्रवाहांनी शासित." },
        { name: "सिंह", icon: <LeoIcon className="w-24 h-24 text-accent mx-auto" />, quote: "तेजस्वी सूर्य, धैर्य आणि उदात्त भावनेने चमकणारा." },
        { name: "कन्या", icon: <VirgoIcon className="w-24 h-24 text-accent mx-auto" />, quote: "काळजीपूर्वक कापणी, सेवेद्वारे जगाला परिपूर्ण करणे." },
        { name: "तूळ", icon: <LibraIcon className="w-24 h-24 text-accent mx-auto" />, quote: "मोहक संतुलन, प्रत्येक कनेक्शनमध्ये सुसंवाद शोधणे." },
        { name: "वृश्चिक", icon: <ScorpioIcon className="w-24 h-24 text-accent mx-auto" />, quote: "लपलेली खोली, जिथे परिवर्तन आणि सत्य वास करते." },
        { name: "धनु", icon: <SagittariusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "उंच बाण, कायम ज्ञान आणि साहस शोधत." },
        { name: "मकर", icon: <CapricornIcon className="w-24 h-24 text-accent mx-auto" />, quote: "स्थिर पर्वत, काळाच्या कसोटीवर टिकणारे वारसे तयार करणे." },
        { name: "कुंभ", icon: <AquariusIcon className="w-24 h-24 text-accent mx-auto" />, quote: "वैश्विक नदी, सर्व मानवतेसाठी नावीन्य ओतणे." },
        { name: "मीन", icon: <PiscesIcon className="w-24 h-24 text-accent mx-auto" />, quote: "अथांग महासागर, जिथे स्वप्ने आणि देवत्व एक होतात." },
    ]
};


export const ZodiacMarquee = ({ lang }: { lang: 'en' | 'mr' }) => {
    const zodiacSignsWithQuotes = content[lang];
    // We duplicate the array to create a seamless loop
    const marqueeContent = [...zodiacSignsWithQuotes, ...zodiacSignsWithQuotes];

    return (
        <section className="py-16 bg-card/50 backdrop-blur-sm border-y border-purple-900/10 overflow-hidden">
            <div className="relative w-full">
                <div className="flex animate-marquee">
                    {marqueeContent.map((sign, index) => (
                        <div key={index} className="flex-shrink-0 w-80 mx-8 text-center flex flex-col items-center">
                            {sign.icon}
                            <h3 className="mt-4 font-headline text-xl text-primary">{sign.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground italic h-12">"{sign.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
