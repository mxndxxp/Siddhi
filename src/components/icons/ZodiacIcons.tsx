
import React from 'react';

const iconProps: React.SVGProps<SVGSVGElement> = {
  strokeWidth: "1.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const OmIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.23 5.426c.48.034.94.164 1.372.38.452.226.83.542 1.126.938.29.39.49.852.593 1.37.102.518.152 1.07.152 1.644 0 .584-.05 1.146-.152 1.674-.103.528-.303.99-.594 1.376a2.742 2.742 0 01-1.125.938c-.432.216-.892.346-1.372.38-.52.038-1.072.053-1.644.053-.582 0-1.14-.015-1.668-.053a2.64 2.64 0 01-1.376-.38 2.742 2.742 0 01-1.125-.938c-.29-.385-.49-.847-.594-1.375-.102-.528-.152-1.09-.152-1.675 0-.574.05-1.126.152-1.644.104-.518.304-.98.594-1.37.297-.396.675-.712 1.126-.938.452-.226.912-.35 1.376-.38.528-.03 1.086-.048 1.668-.048.572 0 1.122.015 1.644.048zM12 8.333c-.38 0-.74.06-1.074.176l-.16.06c-.312.112-.58.28-.79.49-.204.204-.36.45-.46.726l-.06.17c-.085.28-.127.58-.127.89 0 .31.042.61.126.89l.06.17c.1.276.256.522.46.726.21.21.478.378.79.49l.16.06c.334.116.694.176 1.074.176.38 0 .736-.06 1.07-.176l.16-.06c.31-.112.58-.28.79-.49.21-.21.36-.45.46-.726l.06-.17c.08-.28.12-.58.12-.89s-.04-.61-.12-.89l-.06-.17c-.1-.276-.25-.522-.46-.726-.21-.21-.48-.378-.79-.49l-.16-.06A2.66 2.66 0 0012 8.333z" />
    </svg>
);

export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 22a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zM22 12a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zM4 12a1 1 0 00-1-1H1a1 1 0 000 2h2a1 1 0 001-1zM12 4a1 1 0 001-1V1a1 1 0 00-2 0v2a1 1 0 001 1zM19.07 4.93a1 1 0 00.707-.293l1.414-1.414a1 1 0 10-1.414-1.414L18.36 3.22a1 1 0 00.707 1.707zM3.515 20.485a1 1 0 00.707-.293l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 00.707 1.707zM19.07 19.07a1 1 0 001.707-.707l-1.414-1.414a1 1 0 10-1.414 1.414l1.12 1.12.294-.417zM4.93 4.93a1 1 0 001.414 0L7.757 3.515a1 1 0 00-1.414-1.414L4.93 3.515a1 1 0 000 1.414z"/>
    </svg>
);


export const AriesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M18 9C18 7.11438 18 6.17157 17.4142 5.58579C16.8284 5 15.8856 5 14 5H10C8.11438 5 7.17157 5 6.58579 5.58579C6 6.17157 6 7.11438 6 9" />
    <path d="M12 19V5" />
  </svg>
);

export const TaurusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M7 6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6" />
  </svg>
);

export const GeminiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M7 4H17" />
    <path d="M7 20H17" />
    <path d="M9 4V20" />
    <path d="M15 4V20" />
  </svg>
);

export const CancerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M8 7.5C8 5.875 9.42857 5 12 5C14.5714 5 16 5.875 16 7.5" />
    <path d="M8 16.5C8 18.125 9.42857 19 12 19C14.5714 19 16 18.125 16 16.5" />
    <path d="M8 7.5C6.25 7.5 5 9.42857 5 12C5 14.5714 6.25 16.5 8 16.5" />
    <path d="M16 7.5C17.75 7.5 19 9.42857 19 12C19 14.5714 17.75 16.5 16 16.5" />
  </svg>
);

export const LeoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12 7C9.8 7 8 8 8 10C8 12.5 12 17 12 17" />
    <circle cx="9" cy="5" r="3" />
    <path d="M15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19H16.5" />
  </svg>
);

export const VirgoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M6 4V20" />
    <path d="M10 4V20" />
    <path d="M14 4V20" />
    <path d="M18 20V9.5C18 6.83333 16.5 4 14 4" />
    <path d="M21 16C21 17.1046 20.1046 18 19 18C17.8954 18 17 17.1046 17 16L19 12L21 16Z" />
  </svg>
);

export const LibraIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M4 15H20" />
    <path d="M6 15C6 12.7909 7.79086 11 10 11H14C16.2091 11 18 12.7909 18 15" />
    <path d="M6 8H18" />
  </svg>
);

export const ScorpioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M6 4V16C6 18.2091 7.79086 20 10 20H10.5" />
    <path d="M10 4V16C10 18.2091 11.7909 20 14 20H14.5" />
    <path d="M14 4V16" />
    <path d="M18 15L21 18M21 15L18 18" />
  </svg>
);

export const SagittariusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M5 19L19 5" />
    <path d="M13 5H19V11" />
    <path d="M9 11L5 15" />
  </svg>
);

export const CapricornIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M6 4V12C6 14.2091 7.79086 16 10 16H10.5" />
    <path d="M10 4V10" />
    <path d="M15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13C19 15.5 15 20 15 20" />
  </svg>
);

export const AquariusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M4 8L8 12L12 8L16 12L20 8" />
    <path d="M4 15L8 19L12 15L16 19L20 15" />
  </svg>
);

export const PiscesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M7 5C7 2.79086 8.79086 1 11 1" />
    <path d="M7 19C7 21.2091 8.79086 23 11 23" />
    <path d="M17 5C17 2.79086 15.2091 1 13 1" />
    <path d="M17 19C17 21.2091 15.2091 23 13 23" />
    <path d="M4 12H20" />
  </svg>
);
