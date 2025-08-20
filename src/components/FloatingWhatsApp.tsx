
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-24 right-6 z-50">
            <Button
                size="icon"
                className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg p-0"
                asChild
            >
                <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://tse3.mm.bing.net/th/id/OIP.JLXFMx03N6tpstTmMbNVlgHaHa?pid=Api&P=0&h=180"
                      alt="WhatsApp Icon"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                </Link>
            </Button>
        </div>
    );
}
