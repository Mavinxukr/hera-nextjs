import { AxiosResponse } from 'axios';
import axios from '../core/axios';

export interface IError{
    email: string[];
}

export interface IResponseSubscribe{
    message: string;
    errors?: IError
}

export const subscribeThunk = async (email:string):Promise<IResponseSubscribe>=> {
    try{
        const response:AxiosResponse = await axios.post('/emails', {email});
        return response.data;
    }catch(error: any ){
        console.log(error.response);
        
        return error.response.data;
    }
};
