
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const content = {
  en: {
    title: "Astrological Gemstones & Instruments",
    subtitle: "Explore our curated collection of authentic gemstones and sacred instruments to enhance your spiritual journey and astrological well-being.",
    button: "Enquire Now",
  },
  mr: {
    title: "ज्योतिषरत्ने आणि उपकरणे",
    subtitle: "तुमचा आध्यात्मिक प्रवास आणि ज्योतिषीय कल्याण वाढवण्यासाठी अस्सल रत्ने आणि पवित्र उपकरणांचा आमचा निवडक संग्रह एक्सप्लोर करा.",
    button: "चौकशी करा",
  }
};

const productsData = {
  en: [
      {
        name: 'Ruby (Manik)',
        image: 'https://images.unsplash.com/photo-1676496219942-e52c419f4868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cnVieXxlbnwwfHx8fDE3NTUxNzI5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        dataAiHint: 'ruby gemstone',
        description: 'Associated with the powerful Sun, Ruby (Manik) is a gemstone of royalty, believed to boost vitality, leadership qualities, and confidence. It is a powerful stone for career growth, promoting success, authority, and recognition in your professional life. It also invigorates passion, courage, and motivation, helping to overcome self-doubt and lethargy. Astrologically, it is recommended for strengthening the Sun in one\'s horoscope, bringing fame and fortune.',
      },
      {
        name: 'Pearl (Moti)',
        image: 'https://images.unsplash.com/photo-1635709653351-17be19b70c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZWFybHxlbnwwfHx8fDE3NTUxNzI5ODl8MA&ixlib-rb-4.1.0&q=80&w=1080',
        dataAiHint: 'pearl gemstone',
        description: "Representing the serene and calming energy of the Moon, Pearl (Moti) is a gemstone that fosters emotional stability, tranquility, and inner peace. It is highly regarded for its ability to calm a restless mind, alleviate stress and anxiety, and promote mental clarity. Astrologically, it strengthens the Moon in a wearer's chart, which can enhance intuition, creativity, and compassion. It is also believed to bring harmony to relationships, particularly strengthening the bond with one's mother, and is beneficial for those seeking emotional balance and a peaceful domestic life.",
      },
      {
        name: 'Yellow Sapphire (Pukhraj)',
        image: 'https://images.unsplash.com/photo-1705575472028-d92d0bba6608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzYXBwaGlyZXxlbnwwfHx8fDE3NTUxNzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        dataAiHint: 'yellow sapphire',
        description: 'Governed by the benevolent planet Jupiter, Yellow Sapphire (Pukhraj) is one of the most auspicious gemstones. It is revered for bestowing wisdom, fortune, spiritual knowledge, and prosperity upon its wearer. Believed to attract wealth and unlock opportunities for financial growth, it is particularly beneficial for teachers, scholars, lawyers, and traders. It also promotes marital bliss, righteous living, and helps in fulfilling ambitions, making it a stone of immense success and divine grace.',
      },
      {
        name: 'Emerald (Panna)',
        image: 'https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbWVyYWxkJTIwfGVufDB8fHx8MTc1NTE3MzEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
        dataAiHint: 'emerald gemstone',
        description: 'Linked to the planet Mercury, Emerald (Panna) is a gemstone of intellect, communication, and creativity. It is highly recommended for enhancing analytical abilities, memory, and verbal skills, making it ideal for students, writers, public speakers, and artists. It sharpens the intellect, promotes better expression, and fosters harmony and love in relationships. Emerald is also considered a stone of healing, believed to bring physical and emotional well-being to the wearer.',
      },
      {
        name: 'Shri Yantra',
        image: 'https://www.rudraksham.com/media/catalog/product/cache/6a33421d969d65e61c40372047da0106/s/h/shri-yantra-framed_1.jpg',
        dataAiHint: 'shri yantra',
        description: "Known as the 'Queen of Yantras,' the Shri Yantra is a powerful sacred instrument of Vedic tradition. Its complex geometry, featuring nine interlocking triangles that radiate from a central point, is a visual representation of the cosmic plan. Meditating upon it or placing it in one's home or workplace is believed to attract wealth, good fortune, and positive energy, while also correcting Vastu doshas and promoting a harmonious environment.",
      },
      {
        name: 'Rudraksha Mala',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOYYDak1bk777TjEt21brN983vFzDag7WoA&s',
        dataAiHint: 'rudraksha beads',
        description: 'A string of sacred beads from the Rudraksha tree, traditionally used for Japa (chanting mantras) and meditation. Each bead is believed to possess divine vibrations that provide spiritual protection, calm the mind, and enhance concentration. Wearing a Rudraksha Mala is said to help in controlling stress and blood pressure, leading the wearer on a path toward peace and enlightenment.',
      },
      {
        name: 'Parad Shivling',
        image: 'https://www.mahakaalprasad.com/cdn/shop/files/Screenshot2023-10-19225745.png?v=1697736529',
        dataAiHint: 'parad shivling',
        description: 'A Shivling meticulously crafted from purified and solidified mercury (Parad), as described in ancient Vedic texts. It is considered a highly auspicious and potent object for worship, believed to bring immense health, wealth, and spiritual growth. It is said that worshipping a Parad Shivling bestows the combined benefits of worshipping all the twelve Jyotirlingas, making it a rare and powerful addition to any sacred space.',
      },
      {
        name: 'Navgrah Yantra',
        image: 'https://m.media-amazon.com/images/I/81rueZlPTqL._UF350,350_QL50_.jpg',
        dataAiHint: 'navgrah yantra',
        description: 'A powerful yantra that harmonizes the energies of the nine celestial bodies (Navagrahas) as defined in Vedic astrology. This sacred diagram helps to mitigate the negative influences of malefic planets in one\'s horoscope and enhances their positive effects. Worshipping the Navgrah Yantra is believed to bring overall well-being, success, and protection from astrological adversities.',
      },
  ],
  mr: [
    {
      name: 'माणिक (Manik)',
      image: 'https://images.unsplash.com/photo-1676496219942-e52c419f4868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cnVieXxlbnwwfHx8fDE3NTUxNzI5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      dataAiHint: 'ruby gemstone',
      description: 'शक्तिशाली सूर्याशी संबंधित, माणिक हे राजेशाहीचे रत्न आहे, जे चैतन्य, नेतृत्व गुण आणि आत्मविश्वास वाढवते असे मानले जाते. हे करिअरच्या वाढीसाठी एक शक्तिशाली दगड आहे, जे तुमच्या व्यावसायिक जीवनात यश, अधिकार आणि ओळख वाढवते. हे उत्कटता, धैर्य आणि प्रेरणा देखील वाढवते, आत्म-शंका आणि सुस्तीवर मात करण्यास मदत करते. ज्योतिषशास्त्रीयदृष्ट्या, कुंडलीतील सूर्य मजबूत करण्यासाठी, प्रसिद्धी आणि भाग्य आणण्यासाठी याची शिफारस केली जाते.',
    },
    {
      name: 'मोती (Moti)',
      image: 'https://images.unsplash.com/photo-1635709653351-17be19b70c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwZWFybHxlbnwwfHx8fDE3NTUxNzI5ODl8MA&ixlib-rb-4.1.0&q=80&w=1080',
      dataAiHint: 'pearl gemstone',
      description: 'चंद्राच्या शांत आणि सुखदायक ऊर्जेचे प्रतिनिधित्व करणारे, मोती हे एक रत्न आहे जे भावनिक स्थिरता, शांतता आणि आंतरिक शांती वाढवते. अस्वस्थ मनाला शांत करण्याची, तणाव आणि चिंता कमी करण्याची आणि मानसिक स्पष्टता वाढवण्याच्या क्षमतेसाठी हे अत्यंत मानले जाते. ज्योतिषशास्त्रीयदृष्ट्या, हे परिधान करणाऱ्याच्या कुंडलीत चंद्राला मजबूत करते, ज्यामुळे अंतर्ज्ञान, सर्जनशीलता आणि करुणा वाढू शकते. हे नातेसंबंधांमध्ये सुसंवाद आणते, विशेषतः आईसोबतचे बंधन मजबूत करते आणि भावनिक संतुलन आणि शांत कौटुंबिक जीवनाची इच्छा असणाऱ्यांसाठी फायदेशीर आहे.',
    },
    {
      name: 'पुखराज (Pukhraj)',
      image: 'https://images.unsplash.com/photo-1705575472028-d92d0bba6608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzYXBwaGlyZXxlbnwwfHx8fDE3NTUxNzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      dataAiHint: 'yellow sapphire',
      description: 'परोपकारी ग्रह गुरुद्वारे शासित, पुष्कराज (पुखराज) सर्वात शुभ रत्नांपैकी एक आहे. हे परिधान करणाऱ्याला ज्ञान, भाग्य, आध्यात्मिक ज्ञान आणि समृद्धी प्रदान करण्यासाठी पूजनीय आहे. संपत्ती आकर्षित करते आणि आर्थिक वाढीच्या संधी उघडते असे मानले जाते, हे विशेषतः शिक्षक, विद्वान, वकील आणि व्यापाऱ्यांसाठी फायदेशीर आहे. हे वैवाहिक सुख, धार्मिक जीवन जगण्यास प्रोत्साहन देते आणि महत्त्वाकांक्षा पूर्ण करण्यात मदत करते, ज्यामुळे ते प्रचंड यश आणि दैवी कृपेचा दगड बनते.',
    },
    {
      name: 'पन्ना (Panna)',
      image: 'https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxlbWVyYWxkJTIwfGVufDB8fHx8MTc1NTE3MzEwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      dataAiHint: 'emerald gemstone',
      description: 'बुध ग्रहाशी संबंधित, पन्ना (Panna) हे बुद्धिमत्ता, संवाद आणि सर्जनशीलतेचे रत्न आहे. विश्लेषणात्मक क्षमता, स्मरणशक्ती आणि मौखिक कौशल्ये वाढवण्यासाठी याची अत्यंत शिफारस केली जाते, ज्यामुळे ते विद्यार्थी, लेखक, सार्वजनिक वक्ते आणि कलाकारांसाठी आदर्श बनते. ते बुद्धी तीक्ष्ण करते, उत्तम अभिव्यक्तीला प्रोत्साहन देते आणि नातेसंबंधांमध्ये सुसंवाद आणि प्रेम वाढवते. पन्ना हे एक उपचार करणारा दगड देखील मानला जातो, जो परिधान करणाऱ्याला शारीरिक आणि भावनिक स्वास्थ्य देतो असे मानले जाते.',
    },
    {
      name: 'श्री यंत्र',
      image: 'https://www.rudraksham.com/media/catalog/product/cache/6a33421d969d65e61c40372047da0106/s/h/shri-yantra-framed_1.jpg',
      dataAiHint: 'shri yantra',
      description: "'यंत्रांची राणी' म्हणून ओळखले जाणारे, श्री यंत्र हे वैदिक परंपरेचे एक शक्तिशाली पवित्र उपकरण आहे. त्याची गुंतागुंतीची भूमिती, ज्यात नऊ एकमेकांत गुंतलेले त्रिकोण आहेत जे एका मध्य बिंदूतून पसरतात, हे वैश्विक योजनेचे दृश्य प्रतिनिधित्व आहे. त्यावर ध्यान केल्याने किंवा ते घरात किंवा कामाच्या ठिकाणी ठेवल्याने संपत्ती, सौभाग्य आणि सकारात्मक ऊर्जा आकर्षित होते, तसेच वास्तुदोष दूर होतात आणि सुसंवादी वातावरणाला प्रोत्साहन मिळते.",
    },
    {
      name: 'रुद्राक्ष माळ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOYYDak1bk777TjEt21brN983vFzDag7WoA&s',
      dataAiHint: 'rudraksha beads',
      description: 'रुद्राक्ष वृक्षाच्या पवित्र मण्यांची माळ, पारंपारिकपणे जप (मंत्रोच्चार) आणि ध्यानासाठी वापरली जाते. प्रत्येक मण्यामध्ये दैवी कंपने असतात जी आध्यात्मिक संरक्षण, मनःशांती आणि एकाग्रता वाढवतात असे मानले जाते. रुद्राक्ष माळ धारण केल्याने तणाव आणि रक्तदाब नियंत्रित करण्यास मदत होते, ज्यामुळे परिधान करणारा शांती आणि आत्मज्ञानाच्या मार्गावर जातो.',
    },
    {
      name: 'पारद शिवलिंग',
      image: 'https://www.mahakaalprasad.com/cdn/shop/files/Screenshot2023-10-19225745.png?v=1697736529',
      dataAiHint: 'parad shivling',
      description: 'प्राचीन वैदिक ग्रंथांमध्ये वर्णन केल्यानुसार, शुद्ध आणि घट्ट पारा (पारद) पासून काळजीपूर्वक तयार केलेले शिवलिंग. हे पूजेसाठी अत्यंत शुभ आणि सामर्थ्यवान मानले जाते, जे प्रचंड आरोग्य, संपत्ती आणि आध्यात्मिक वाढ आणते असे मानले जाते. असे म्हटले जाते की पारद शिवलिंगाची पूजा केल्याने सर्व बारा ज्योतिर्लिंगांची पूजा करण्याचे एकत्रित फळ मिळते, ज्यामुळे ते कोणत्याही पवित्र जागेसाठी एक दुर्मिळ आणि शक्तिशाली भर होते.',
    },
    {
      name: 'नवग्रह यंत्र',
      image: 'https://m.media-amazon.com/images/I/81rueZlPTqL._UF350,350_QL50_.jpg',
      dataAiHint: 'navgrah yantra',
      description: 'एक शक्तिशाली यंत्र जे वैदिक ज्योतिषानुसार परिभाषित केलेल्या नऊ खगोलीय पिंडांच्या (नवग्रहांच्या) ऊर्जा संतुलित करते. हे पवित्र आकृती कुंडलीतील अशुभ ग्रहांचे नकारात्मक प्रभाव कमी करण्यास आणि त्यांचे सकारात्मक प्रभाव वाढविण्यात मदत करते. नवग्रह यंत्राची पूजा केल्याने सर्वांगीण कल्याण, यश आणि ज्योतिषशास्त्रीय संकटांपासून संरक्षण मिळते असे मानले जाते.',
    },
  ]
};


export default function ShopPage() {
  const [lang, setLang] = useState<'en' | 'mr'>('en');
  const currentContent = content[lang];
  const currentProducts = productsData[lang];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-headline font-bold text-accent">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <Card key={product.name} className="flex flex-col bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="p-0">
              <Image
                src={product.image}
                alt={product.name}
                data-ai-hint={product.dataAiHint}
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <div className="p-6 flex-grow flex flex-col">
              <CardTitle className="font-headline text-xl text-accent">{product.name}</CardTitle>
              <CardContent className="p-0 pt-4 flex-grow">
                <p className="text-muted-foreground text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="p-0 pt-4 mt-auto">
                  <Button asChild className="w-full">
                    <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
                      {currentContent.button}
                    </Link>
                  </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
