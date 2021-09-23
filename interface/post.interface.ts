import { IPost } from "../service/posts.service";

  
export interface PostProps extends Record<string, unknown> {
  post: IPost;
}
