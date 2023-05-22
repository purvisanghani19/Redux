import { configureStore } from '@reduxjs/toolkit';
// import  gitUser  from './features/gitUserSlice';
import userDetail from './crudslice/userDetails';
import { productapi } from './features/apislice';


export const store = configureStore({
    reducer: {
        //  app:gitUser,
        app:userDetail,
        [productapi.reducerPath]: productapi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productapi.middleware),
});