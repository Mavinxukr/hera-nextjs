import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IntroSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    _id: number;
    title: string;
    text: string;
    img: string;
    reverse?: boolean;
}