import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ErrorProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    align?: 'left' | 'right' | 'center' | 'justify'
    children: ReactNode;
}