import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    tab: ITab;
    active: string;
    setTab: (slug: string) => void
}

export interface ITab {
    _id: number;
    name: string;
    slug: string,
}

export interface BlogTabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tabs: Array<ITab>
    active: string;
    setTab: (slug: string) => void
 }