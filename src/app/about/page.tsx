
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const content = {
  en: {
    title: "About Shree Siddhivinayak Jyotish",
    welcome: "Welcome to Shree Siddhivinayak Jyotish. Our mission is to blend the ancient wisdom of Indian astrology with the power of modern artificial intelligence to provide you with unparalleled, personalized insights into your life's path.",
    mission: "For centuries, Jyotish (Vedic astrology) has been a guiding light for millions, offering a profound understanding of life's karmic patterns. We believe this timeless knowledge should be accessible to everyone in a way that is easy to understand and relevant to contemporary life.",
    ai: "Our sophisticated AI, trained on classical astrological texts, analyzes your unique birth chart to deliver guidance that is not only deeply authentic but also practical and empowering. Whether you seek clarity on your career, relationships, or spiritual growth, Shree Siddhivinayak Jyotish is here to illuminate your journey.",
    philosophyTitle: "Our Philosophy",
    authenticityTitle: "Authenticity",
    authenticityText: "We are committed to the principles of classical Indian astrology, ensuring our readings are rooted in authentic tradition.",
    innovationTitle: "Innovation",
    innovationText: "We leverage cutting-edge AI to make complex astrological concepts accessible and personalized for the modern world.",
    empowermentTitle: "Empowerment",
    empowermentText: "Our goal is to provide you with insights that empower you to make conscious choices and manifest your best life.",
  },
  mr: {
    title: "श्री सिद्धिविनायक ज्योतिष बद्दल",
    welcome: "श्री सिद्धिविनायक ज्योतिषमध्ये आपले स्वागत आहे. आमचे ध्येय भारतीय ज्योतिषशास्त्राच्या प्राचीन ज्ञानाला आधुनिक कृत्रिम बुद्धिमत्तेच्या सामर्थ्याने जोडून आपल्या जीवनाच्या मार्गावर अद्वितीय, वैयक्तिकृत अंतर्दृष्टी प्रदान करणे आहे.",
    mission: "शतकानुशतके, ज्योतिष (वैदिक ज्योतिष) लाखो लोकांसाठी एक मार्गदर्शक प्रकाश आहे, जो जीवनातील कर्माच्या पद्धतींची सखोल माहिती देतो. आमचा विश्वास आहे की हे कालातीत ज्ञान प्रत्येकासाठी अशा प्रकारे उपलब्ध असले पाहिजे जे समजण्यास सोपे आणि समकालीन जीवनासाठी संबंधित असेल.",
    ai: "आमची अत्याधुनिक एआय, शास्त्रीय ज्योतिष ग्रंथांवर प्रशिक्षित, आपल्या अद्वितीय जन्मपत्रिकेचे विश्लेषण करून असे मार्गदर्शन करते जे केवळ सखोल प्रामाणिकच नाही तर व्यावहारिक आणि सशक्त करणारे देखील आहे. आपण आपल्या करिअर, नातेसंबंध किंवा आध्यात्मिक वाढीवर स्पष्टता शोधत असलात तरी, श्री सिद्धिविनायक ज्योतिष आपला प्रवास उजळण्यासाठी येथे आहे.",
    philosophyTitle: "आमचे तत्वज्ञान",
    authenticityTitle: "सत्यता",
    authenticityText: "आम्ही शास्त्रीय भारतीय ज्योतिषाच्या तत्त्वांशी कटिबद्ध आहोत, आमची वाचने अस्सल परंपरेत रुजलेली आहेत याची खात्री करून.",
    innovationTitle: "नावीन्य",
    innovationText: "आम्ही अत्याधुनिक एआयचा वापर करून गुंतागुंतीच्या ज्योतिषशास्त्रीय संकल्पनांना आधुनिक जगासाठी प्रवेशयोग्य आणि वैयक्तिकृत बनवतो.",
    empowermentTitle: "सक्षमीकरण",
    empowermentText: "तुम्हाला जागरूक निवडी करण्यासाठी आणि तुमचे सर्वोत्तम जीवन प्रकट करण्यासाठी सक्षम करणारी अंतर्दृष्टी प्रदान करणे हे आमचे ध्येय आहे.",
  }
}

export default function AboutPage() {
  const [lang, setLang] = useState<'en' | 'mr'>('en');

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-accent mb-4 md:mb-0">
          {content[lang].title}
        </h1>
        <div className="flex gap-2 mt-4 md:mt-0">
            <Button onClick={() => setLang('en')} variant={lang === 'en' ? 'default' : 'outline'}>English</Button>
            <Button onClick={() => setLang('mr')} variant={lang === 'mr' ? 'default' : 'outline'}>Marathi</Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/01/21/Pictures/plating-devotee-around-delhi-weighing-donated-gold_2f6fc288-3c2a-11ea-bfbd-f812f33ac46f.jpg"
            alt="Astrology consultation"
            data-ai-hint="astrology consultation"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p>
            {content[lang].welcome}
          </p>
          <p>
            {content[lang].mission}
          </p>
          <p>
            {content[lang].ai}
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold text-accent mb-12">{content[lang].philosophyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10 p-4 md:p-6">
                  <CardHeader>
                      <CardTitle className="text-primary">{content[lang].authenticityTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">{content[lang].authenticityText}</p>
                  </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10 p-4 md:p-6">
                  <CardHeader>
                      <CardTitle className="text-primary">{content[lang].innovationTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">{content[lang].innovationText}</p>
                  </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10 p-4 md:p-6">
                  <CardHeader>
                      <CardTitle className="text-primary">{content[lang].empowermentTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground">{content[lang].empowermentText}</p>
                  </CardContent>
              </Card>
          </div>
      </div>
    </div>
  );
}
