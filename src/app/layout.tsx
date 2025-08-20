
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/Header';
import { TwinklingStars } from '@/components/TwinklingStars';
import { Chatbot } from '@/components/Chatbot';
import { VedicMarquee } from '@/components/VedicMarquee';
import Link from 'next/link';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Shree Siddhivinayak Jyotish',
  description: 'AI-powered Indian astrology for personalized insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {};
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative min-h-screen overflow-x-hidden">
        <TwinklingStars />
        <div className="relative z-10 flex flex-col items-center min-h-screen">
            <Header />
            <VedicMarquee />
            <main className="flex-grow w-full">
              {children}
            </main>
            <footer className="w-full py-12 mt-16 text-muted-foreground border-t border-purple-900/10 bg-card/50">
                <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-headline text-lg text-primary">Shree Siddhivinayak Jyotish</h3>
                        <p className="mt-2 text-sm">Your guide to the cosmos, blending ancient wisdom with modern technology.</p>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg text-primary">Quick Links</h3>
                        <ul className="mt-2 space-y-1 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/shop" className="hover:text-primary transition-colors">Online Shop</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-lg text-primary">Contact Info</h3>
                        <p className="mt-2 text-sm">shreesiddhivinayakjyotishpune@gmail.com</p>
                        <p className="text-sm">+91 7659 063 555</p>
                    </div>
                </div>
                <div className="container mx-auto mt-8 pt-8 border-t border-purple-900/10 text-center">
                  <p className="text-sm">&copy; {new Date().getFullYear()} Shree Siddhivinayak Jyotish. All rights reserved.</p>
                  <p className="text-xs mt-2 max-w-2xl mx-auto">
                    Disclaimer: The information and guidance provided on this website are for entertainment purposes only. It is not a substitute for professional advice from a qualified practitioner.
                  </p>
                </div>
            </footer>
        </div>
        <FloatingWhatsApp />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
