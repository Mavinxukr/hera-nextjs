
import { AxiosResponse } from 'axios';
import axios from '../core/axios';

export interface ITopic {
    id: number;
    name: string;
    counter: number;
}

export interface IResponseTopics {
    data: ITopic[];
}


export const getAllTopics = async (): Promise<IResponseTopics> => {
    const response :AxiosResponse = await axios.get('/blog-topics');
    return response.data;
};