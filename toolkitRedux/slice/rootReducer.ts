import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts.slice';


const rootReducer = combineReducers({
    posts: posts
});

export default rootReducer;