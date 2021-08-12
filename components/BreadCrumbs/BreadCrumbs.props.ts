export interface CrumbProps{
    id: number;
    name: string;
    path: string;
}
export interface CrumbsProps{
    crumbs: Array<CrumbProps>;
}