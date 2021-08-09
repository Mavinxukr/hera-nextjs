
import { AxiosResponse } from 'axios';
import axios from '../core/axios';

export const getAllPosts = async () => {
  try {
    console.log('get post');
    const response :AxiosResponse = await axios.get('/posts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};