export interface PostItem {
    preview: string;
    title: string;
    article: Array<IArticle>;
  }
  
  export interface PostProps extends Record<string, unknown> {
    post: PostItem;
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