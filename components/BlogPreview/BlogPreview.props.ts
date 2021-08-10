import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface BlogPreviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    img: string;
    date: string;
    title: string;
    href: string;
}