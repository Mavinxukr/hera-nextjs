import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItemProps } from './MenuItem/MenuItem.props';

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    list: Array<MenuItemProps>
    color?: 'dark' | 'light';
}