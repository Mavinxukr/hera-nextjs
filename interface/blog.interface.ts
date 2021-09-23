import { IResponsePosts } from "../service/posts.service";
import { IResponseTopics } from "../service/topics.service";

  
export interface BlogProps extends Record<string, unknown> {
  posts: IResponsePosts;
  topics: IResponseTopics;
}
