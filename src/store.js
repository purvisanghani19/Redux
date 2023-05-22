import { configureStore } from '@reduxjs/toolkit';
// import  gitUser  from './features/gitUserSlice';
import userDetail from './crudslice/userDetails';


export const store = configureStore({
    reducer: {
        //  app:gitUser,
        app:userDetail,
    },
});