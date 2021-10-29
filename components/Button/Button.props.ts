import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'primary' | 'social';
    target?: "_blank";
    icon?: 'apple';
    href?: string;
    children: ReactNode;
}