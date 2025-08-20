
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';

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

type Message = {
    role: 'user' | 'model';
    content: string;
};

type ConversationStage = 
    | 'initial'
    | 'getName'
    | 'getDOB'
    | 'getBirthPlace'
    | 'getBirthTime'
    | 'readyToSend'
    | 'completed';

const questions: Record<Exclude<ConversationStage, 'initial' | 'readyToSend' | 'completed'>, string> = {
    getName: "To get started, what is your full name?",
    getDOB: "Thank you! Now, what is your date of birth (e.g., YYYY-MM-DD)?",
    getBirthPlace: "Great. And where were you born?",
    getBirthTime: "Almost done. What was your time of birth?",
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', content: "Welcome to Shree Siddhivinayak Jyotish! To book a detailed reading, I need to collect a few details from you." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [stage, setStage] = useState<ConversationStage>('initial');
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        dob: '',
        birthPlace: '',
        birthTime: ''
    });

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen && stage === 'initial') {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'model', content: questions.getName }]);
                setStage('getName');
            }, 500);
        }
    }, [isOpen, stage]);

    const handleSend = async () => {
        if (!input.trim() || isLoading || stage === 'completed' || stage === 'readyToSend') return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        let nextStage: ConversationStage = stage;
        let infoUpdate = {};

        switch (stage) {
            case 'getName':
                infoUpdate = { fullName: currentInput };
                nextStage = 'getDOB';
                break;
            case 'getDOB':
                infoUpdate = { dob: currentInput };
                nextStage = 'getBirthPlace';
                break;
            case 'getBirthPlace':
                infoUpdate = { birthPlace: currentInput };
                nextStage = 'getBirthTime';
                break;
            case 'getBirthTime':
                infoUpdate = { birthTime: currentInput };
                nextStage = 'readyToSend';
                break;
        }

        const updatedUserInfo = { ...userInfo, ...infoUpdate };
        setUserInfo(updatedUserInfo);
        
        if (nextStage !== 'readyToSend') {
            setMessages(prev => [...prev, { role: 'model', content: questions[nextStage as keyof typeof questions] }]);
            setStage(nextStage);
        } else {
            setMessages(prev => [...prev, { role: 'model', content: "Thank you for providing your details. Please click the button below to send this information to us via WhatsApp." }]);
            setStage('readyToSend');
        }

        setIsLoading(false);
    };
    
    const generateWhatsAppLink = () => {
        const message = `New Reading Request:\n\nFull Name: ${userInfo.fullName}\nDate of Birth: ${userInfo.dob}\nPlace of Birth: ${userInfo.birthPlace}\nTime of Birth: ${userInfo.birthTime}`;
        return `https://wa.me/917659063555?text=${encodeURIComponent(message)}`;
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    size="icon"
                    className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                </Button>
            </div>
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50">
                    <Card className="w-80 h-96 flex flex-col shadow-2xl bg-card/90 backdrop-blur-lg border-primary/20">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-primary/10">
                            <CardTitle className="text-lg font-headline text-primary flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                Book a Reading
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatContainerRef}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                                        msg.role === 'user' 
                                            ? 'bg-primary text-primary-foreground' 
                                            : 'bg-muted text-muted-foreground'
                                    }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                             {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <div className="p-2 border-t border-primary/10">
                            {stage === 'readyToSend' ? (
                                <Button className="w-full" asChild>
                                    <Link href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" onClick={() => {
                                        setMessages(prev => [...prev, {role: 'model', content: "Please send the pre-filled message in WhatsApp to confirm your request. Thank you!"}]);
                                        setStage('completed');
                                    }}>
                                        <WhatsAppIcon className="mr-2 h-4 w-4" />
                                        Send Details via WhatsApp
                                    </Link>
                                </Button>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder={stage === 'completed' ? "Conversation ended." : "Type your answer..."}
                                        disabled={isLoading || stage === 'completed' || stage === 'initial' || stage === 'readyToSend'}
                                    />
                                    <Button size="icon" onClick={handleSend} disabled={isLoading || stage === 'completed' || stage === 'initial' || stage === 'readyToSend'}>
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            )}
        </>
    );
}
