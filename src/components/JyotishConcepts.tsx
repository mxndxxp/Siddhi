import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const contentData = {
  en: {
    title: "Learn Jyotish",
    learnMore: "Learn More",
    concepts: [
      {
        title: "Kundali (Birth Chart)",
        content: "A Kundali or Birth Chart is a snapshot of the heavens at the moment of your birth. It's the most fundamental tool in Vedic Astrology, showing the precise placement of planets and stars. Analyzing this chart reveals your core personality, strengths, weaknesses, and the karmic path you are destined to walk in this lifetime. It is the blueprint of your potential.",
      },
      {
        title: "Planets (Grahas)",
        content: "In Jyotish, nine 'planets' or celestial bodies are used: Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, and the two lunar nodes, Rahu and Ketu. Each Graha carries a specific energy and significance, influencing different aspects of your life from your career to your relationships.",
      },
      {
        title: "Houses (Bhavas)",
        content: "The zodiac is divided into 12 'houses', each representing a different area of life, such as self, wealth, family, career, and spirituality. The placement of planets in these houses reveals life patterns and potentials.",
      },
      {
        title: "Zodiac Signs (Rashis)",
        content: "The 12 zodiac signs (Rashis) are Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each sign has its own characteristics and is ruled by a planet.",
      },
      {
        title: "Nakshatras (Lunar Mansions)",
        content: "The zodiac is also divided into 27 lunar mansions or 'Nakshatras'. They provide a deeper layer of understanding and are crucial for predictive astrology and determining personality traits.",
      },
      {
        title: "Lal Kitab (Red Book)",
        content: "Lal Kitab is a unique system of astrology that originated in the Punjab region. It is famous for its simple and effective remedies (upayas) to mitigate planetary afflictions. Unlike traditional Jyotish, it has its own distinct rules for chart analysis and is known for its practical, often easy-to-perform solutions.",
      }
    ]
  },
  mr: {
    title: "ज्योतिष शिका",
    learnMore: "अधिक जाणून घ्या",
    concepts: [
       {
        title: "कुंडली (जन्म पत्रिका)",
        content: "कुंडली किंवा जन्म पत्रिका म्हणजे तुमच्या जन्माच्या क्षणी आकाशाचा एक स्नॅपशॉट. हे वैदिक ज्योतिषशास्त्रातील सर्वात मूलभूत साधन आहे, जे ग्रह आणि ताऱ्यांचे अचूक स्थान दर्शवते. या पत्रिकेचे विश्लेषण केल्याने तुमचे मूळ व्यक्तिमत्त्व, सामर्थ्य, कमजोरी आणि या जन्मात तुम्ही ज्या कर्ममार्गावर चालणार आहात ते उघड होते. ही तुमच्या क्षमतेची ब्लू प्रिंट आहे.",
      },
      {
        title: "ग्रह (Grahas)",
        content: "ज्योतिषशास्त्रात नऊ 'ग्रह' किंवा खगोलीय पिंड वापरले जातात: सूर्य, चंद्र, मंगळ, बुध, गुरू, शुक्र, शनी, आणि दोन चंद्र नोड्स, राहू आणि केतू. प्रत्येक ग्रहाची एक विशिष्ट ऊर्जा आणि महत्त्व असते, जे तुमच्या करिअरपासून ते तुमच्या नातेसंबंधांपर्यंत तुमच्या जीवनातील विविध पैलूंवर प्रभाव टाकते.",
      },
      {
        title: "भाव (Bhavas)",
        content: "राशीचक्र १२ 'भावां'मध्ये विभागलेले आहे, प्रत्येक भाव जीवनाच्या वेगवेगळ्या क्षेत्रांचे प्रतिनिधित्व करतो, जसे की स्व, धन, कुटुंब, करिअर आणि आध्यात्मिकता. या भावांमधील ग्रहांचे स्थान जीवनातील पद्धती आणि क्षमता प्रकट करते.",
      },
      {
        title: "राशी (Rashis)",
        content: "१२ राशी आहेत: मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तूळ, वृश्चिक, धनु, मकर, कुंभ आणि मीन. प्रत्येक राशीची स्वतःची वैशिष्ट्ये आहेत आणि त्यावर एका ग्रहाचे राज्य आहे.",
      },
      {
        title: "नक्षत्र (Lunar Mansions)",
        content: "राशीचक्र २७ 'नक्षत्रां'मध्ये विभागलेले आहे. ते अधिक सखोल समज प्रदान करतात आणि भविष्यवाणी ज्योतिष आणि व्यक्तिमत्व वैशिष्ट्ये निश्चित करण्यासाठी महत्त्वपूर्ण आहेत.",
      },
       {
        title: "लाल किताब",
        content: "लाल किताब ही ज्योतिषशास्त्राची एक अनोखी प्रणाली आहे जी पंजाब प्रदेशात उगम पावली. ती ग्रहपीडा कमी करण्यासाठी सोप्या आणि प्रभावी उपायांसाठी प्रसिद्ध आहे. पारंपारिक ज्योतिषापेक्षा वेगळे, यात पत्रिका विश्लेषणासाठी स्वतःचे वेगळे नियम आहेत आणि ती व्यावहारिक, अनेकदा सहज करता येण्याजोग्या उपायांसाठी ओळखली जाते.",
      }
    ]
  }
};


export const JyotishConcepts = ({ lang }: { lang: 'en' | 'mr' }) => {
  const { title, concepts, learnMore } = contentData[lang];
  return (
    <section>
      <h2 className="text-3xl font-headline font-bold text-primary mb-6 flex items-center gap-3">
        <BookOpen className="text-accent"/>
        {title}
      </h2>
      <div className="p-6 rounded-lg bg-card/80 backdrop-blur-sm border-purple-900/10">
        <Accordion type="single" collapsible className="w-full">
          {concepts.map((concept, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-headline text-lg hover:no-underline text-accent">{concept.title}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {concept.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-6">
        <Button asChild className="w-full">
          <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
            {learnMore}
          </Link>
        </Button>
      </div>
    </section>
  );
};
