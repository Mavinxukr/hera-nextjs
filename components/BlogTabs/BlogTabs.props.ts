import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITopic } from '../../service/topics.service';

export interface BlogTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    tab: ITopic;
    active: string;
    setTopic: (name: string) => void
}


export interface BlogTabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    topics: Array<ITopic>
    active: string;
    setTopic: (name: string) => void
 }