
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const contentData = {
  en: {
    title: "What Our Users Say",
    subtitle: "Hear from our community about their journey with Shree Siddhivinayak Jyotish.",
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        quote: "The insights I received were incredibly accurate and helped me navigate a difficult career decision. The AI is surprisingly insightful, blending tradition with technology perfectly.",
      },
      {
        name: "Rohan Mehta",
        location: "Delhi",
        rating: 4.5,
        quote: "I was skeptical about an AI astrologer, but Shree Siddhivinayak Jyotish proved me wrong. The chatbot is helpful for quick questions, and the detailed report was eye-opening.",
      },
      {
        name: "Ananya Iyer",
        location: "Bengaluru",
        rating: 5,
        quote: "A fantastic resource for anyone interested in Vedic astrology. The 'Ask the Stars' feature is brilliant and the daily panchang is always my first read in the morning. Highly recommend!",
      },
    ]
  },
  mr: {
    title: "आमचे वापरकर्ते काय म्हणतात",
    subtitle: "आमच्या समुदायाकडून श्री सिद्धिविनायक ज्योतिषसोबतच्या त्यांच्या प्रवासाबद्दल ऐका.",
    testimonials: [
      {
        name: "प्रिया शर्मा",
        location: "मुंबई",
        rating: 5,
        quote: "मला मिळालेली माहिती अविश्वसनीयपणे अचूक होती आणि मला करिअरच्या कठीण निर्णयातून मार्ग काढण्यास मदत झाली. AI आश्चर्यकारकपणे अंतर्ज्ञानी आहे, परंपरेला तंत्रज्ञानाशी उत्तम प्रकारे जोडते.",
      },
      {
        name: "रोहन मेहता",
        location: "दिल्ली",
        rating: 4.5,
        quote: "मी AI ज्योतिषाबद्दल साशंक होतो, पण श्री सिद्धिविनायक ज्योतिषने मला चुकीचे ठरवले. चॅटबॉट त्वरित प्रश्नांसाठी उपयुक्त आहे आणि तपशीलवार अहवाल डोळे उघडणारा होता.",
      },
      {
        name: "अनन्या अय्यर",
        location: "बंगळूरु",
        rating: 5,
        quote: "वैदिक ज्योतिषात रस असलेल्या प्रत्येकासाठी एक विलक्षण स्त्रोत. 'तार्यांना विचारा' वैशिष्ट्य उत्कृष्ट आहे आणि दैनिक पंचांग मी सकाळी सर्वात आधी वाचते. अत्यंत शिफारसीय!",
      },
    ]
  }
}

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    if (halfStar) {
        stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
        stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
    }
    return stars;
}

export const Testimonials = ({ lang }: { lang: 'en' | 'mr' }) => {
  const content = contentData[lang];
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">
            {content.title}
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 text-center p-4">
              <CardHeader>
                <div className="flex justify-center mb-2">
                    {renderStars(testimonial.rating)}
                </div>
                <CardTitle className="font-headline text-xl text-accent">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
