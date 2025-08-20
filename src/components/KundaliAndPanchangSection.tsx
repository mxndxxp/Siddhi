
"use client"
import React from 'react';
import Image from 'next/image';

const contentData = {
    en: {
        title: "Unlocking Your Destiny with Kundali & Panchang",
        kundaliDescription: "Your **Kundali**, or birth chart, is the celestial map of your life's journey, created at the exact moment you were born. It reveals the influence of planets and cosmic energies on your personality, potential, and destiny.",
        panchangDescription: "The **Panchang** is the daily Vedic calendar that guides us in aligning our actions with the rhythm of the universe. By understanding the day's Tithi, Nakshatra, and other elements, you can choose the most auspicious times for important activities, maximizing your chances of success and harmony."
    },
    mr: {
        title: "कुंडली आणि पंचांगद्वारे आपले भविष्य उघडा",
        kundaliDescription: "तुमची **कुंडली**, किंवा जन्मपत्रिका, तुमच्या जन्माच्या अचूक क्षणी तयार केलेला तुमच्या जीवन प्रवासाचा खगोलीय नकाशा आहे. हे तुमच्या व्यक्तिमत्त्वावर, क्षमतेवर आणि नशिबावर ग्रह आणि वैश्विक ऊर्जांचा प्रभाव प्रकट करते.",
        panchangDescription: "**पंचांग** हे दैनिक वैदिक कॅलेंडर आहे जे आपल्याला आपल्या कृतींना विश्वाच्या तालाशी जुळवून घेण्यास मार्गदर्शन करते. दिवसाची तिथी, नक्षत्र आणि इतर घटक समजून घेऊन, आपण महत्त्वाच्या कार्यांसाठी सर्वात शुभ वेळ निवडू शकता, ज्यामुळे यश आणि सुसंवादाची शक्यता वाढते."
    }
}


export const KundaliAndPanchangSection = ({ lang = 'en' }: { lang?: 'en' | 'mr' }) => {
  const content = contentData[lang];
  return (
    <section className="my-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 flex items-center justify-center">
                <Image
                    src="https://mannjyotishvigyan.com/wp-content/uploads/2019/05/allkundli.jpg"
                    alt="Kundali Chart"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    data-ai-hint="astrology chart"
                />
            </div>
            <div className="text-center md:text-left">
                 <h2 className="text-3xl font-headline font-bold text-primary mb-6">{content.title}</h2>
                 <blockquote className="text-lg italic text-muted-foreground border-l-4 border-accent pl-6 space-y-4">
                    <p dangerouslySetInnerHTML={{ __html: content.kundaliDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    <p dangerouslySetInnerHTML={{ __html: content.panchangDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                 </blockquote>
            </div>
        </div>
    </section>
  );
};
