
"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.316 1.906 6.03l-.419 1.563 1.559-.41z" />
    </svg>
  );

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

export default function ContactPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const recipientEmail = "shreesiddhivinayakjyotishpune@gmail.com";
        const emailSubject = `Contact Form: ${values.subject}`;
        const emailBody = `Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
        
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        toast({
            title: "Preparing Your Email",
            description: "Your email client should open shortly to send your message.",
        });
        form.reset();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-headline font-bold text-primary">
                    Get in Touch
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                    Have questions about our services or want to collaborate? We'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-accent">Send us a Message</CardTitle>
                        <CardDescription>Fill out the form and our team will get back to you within 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={form.control} name="subject" render={({ field }) => (
                                    <FormItem><FormLabel>Subject</FormLabel><FormControl><Input placeholder="Inquiry about..." {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Your detailed message..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Send Message
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10">
                        <CardHeader className="flex-row items-center gap-4">
                            <Mail className="w-8 h-8 text-accent"/>
                            <div>
                                <CardTitle className="font-headline text-xl text-accent">Email Us</CardTitle>
                                <p className="text-muted-foreground">shreesiddhivinayakjyotishpune@gmail.com</p>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10">
                        <CardHeader className="flex-row items-center gap-4">
                            <Phone className="w-8 h-8 text-accent"/>
                            <div>
                                <CardTitle className="font-headline text-xl text-accent">Call Us</CardTitle>
                                <p className="text-muted-foreground">+91 7659 063 555</p>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-purple-900/10">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <WhatsAppIcon className="w-8 h-8 text-accent"/>
                                <div>
                                    <CardTitle className="font-headline text-xl text-accent">Chat on WhatsApp</CardTitle>
                                    <p className="text-muted-foreground">Connect with us directly on WhatsApp for quick queries.</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href="https://wa.me/917659063555" target="_blank" rel="noopener noreferrer">
                                    Start Chat
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <div className="flex justify-center items-center mt-8">
                        <Image 
                            src="https://m.media-amazon.com/images/I/5190qb1srqL._UF1000,1000_QL80_.jpg"
                            alt="Ganesha"
                            width={250}
                            height={250}
                            className="rounded-lg shadow-lg opacity-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
