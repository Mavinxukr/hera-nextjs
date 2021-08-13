import { IPostItem } from "./post.interface";

  
export interface BlogProps extends Record<string, unknown> {
  posts: Array<IPostItem>;
}
