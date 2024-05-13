import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/CryptoAPI';
import { newsApi } from '../services/NewsAPI';
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer, 
        [newsApi.reducerPath] : newsApi.reducer,
    }, 
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            cryptoApi.middleware,
            newsApi.middleware
        );
    }
});