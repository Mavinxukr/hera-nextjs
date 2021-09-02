import { AxiosResponse } from 'axios';
import axios from '../core/axios';

export const subscribeThunk = async (email:string):Promise<any>=> {
    const response:AxiosResponse = await axios.post('/emails', {email});
    return response;
};
