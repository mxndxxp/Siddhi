
"use client"
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/shop", label: "Online Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 border-b border-primary/10 sticky top-0 z-50 bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center ml-8">
              <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrXT9jKpy5DL9h2X0znKlTqEl2kQOP2EGMdm896PP-bUhiDS4X" alt="Shree Siddhivinayak Jyotish Logo" width={40} height={40} className="h-10 w-10 rounded-full" data-ai-hint="Ganesha" />
              <h1 className="ml-3 text-2xl font-headline font-bold title-glow">
                Shree Siddhivinayak Jyotish
              </h1>
            </Link>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center items-center">
            <nav className="flex items-center gap-8">
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                    </Link>
                ))}
                 <Button size="lg" asChild className="ml-8 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 animate-press px-6">
                    <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
                        Buy Now
                    </Link>
                 </Button>
            </nav>
        </div>

        <div className="flex-1 md:hidden flex justify-end">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="flex flex-col gap-6 p-6">
                        <Link href="/" className="flex items-center mb-4" onClick={() => setIsMenuOpen(false)}>
                            <Image src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrXT9jKpy5DL9h2X0znKlTqEl2kQOP2EGMdm896PP-bUhiDS4X" alt="Shree Siddhivinayak Jyotish Logo" width={40} height={40} className="h-10 w-10 rounded-full" data-ai-hint="Ganesha" />
                            <h1 className="ml-3 text-2xl font-headline font-bold title-glow">
                                Shree Siddhivinayak Jyotish
                            </h1>
                        </Link>
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="mt-4 transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 animate-press">
                           <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
                                Buy Now
                           </Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};
