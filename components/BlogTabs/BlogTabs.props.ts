import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITab{
    name: string
}

export interface BlogTabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tabs: Array<ITab>
 }