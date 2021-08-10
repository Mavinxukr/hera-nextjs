import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    _id: number;
    name: string;
    href: string;
    t: 'dark' | 'light';
 }