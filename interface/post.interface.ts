export interface IPostItem {
    _id: number;
    preview: string;
    date: string;
    title: string;
    path: string,
    article: Array<IArticle>;
  }
  
export interface PostProps extends Record<string, unknown> {
  post: IPostItem;
}

export interface IArticle{
    id: number;
    title: string;
    text: string;
    img: string;
}
export interface IArticleSection extends IArticle{
  index: number;
  setIndex: (index:number) => void;
}

export interface IPostSidebar{
  list: Array<IArticle>
  active: number;
}