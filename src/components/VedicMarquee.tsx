
"use client"

import React from 'react';

export const VedicMarquee = () => {
    const marqueeText = "जन्मतारीख / जन्मवेळ माहीत नसल्यास प्रश्न कुंडली मांडून सर्व समस्यांचे समाधान श्री सिद्धिविनायक ज्योतिष कार्यालयात करण्यात येईल.";
    // Duplicate the text with a separator for a seamless loop
    const marqueeContent = `${marqueeText} • ${marqueeText} • `;

    return (
        <div className="w-full bg-primary/10 py-3 overflow-hidden border-b border-purple-900/10">
            <div className="relative w-full">
                <div className="flex animate-marquee">
                   <p className="flex-shrink-0 text-primary font-medium whitespace-nowrap">{marqueeContent}</p>
                   <p className="flex-shrink-0 text-primary font-medium whitespace-nowrap">{marqueeContent}</p>
                </div>
            </div>
        </div>
    );
};
