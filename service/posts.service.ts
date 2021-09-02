import { AxiosResponse } from 'axios';
import axios from '../core/axios';

export interface IFetchPosts {
  page?: number;
  topic?: number;
  search?: string;
}
export interface IFetchPost {
  bid: number;
}

export interface Subtitle {
    id: number;
    title: string;
    text: string;
    image: string;
}

export interface IPost {
    id: number;
    title: string;
    topic: string;
    draft: boolean;
    cover_image: string;
    background_image: string;
    date: string;
    subtitles: Subtitle[];
}

export interface Links {
    first: string;
    last: string;
    prev?: any;
    next?: any;
}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface IResponsePosts {
    data: IPost[];
    links: Links;
    meta: Meta;
}

export interface IResponsePost {
  data: IPost;
}

export const getAllPosts = async ({ page, topic, search} : IFetchPosts ): Promise<IResponsePosts> => {
    const response :AxiosResponse<IResponsePosts> = await axios.get('/blog-articles' , {
      params: {
        search,
        page,
        topic
      }
    });
    return response.data;
};

export const getPostById = async ({bid}  : IFetchPost ): Promise<IResponsePost | unknown > => {    
    const response :AxiosResponse<IResponsePost> = await axios.get(`/blog-articles/${bid}`);
    return response.data;
};