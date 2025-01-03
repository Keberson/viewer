import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { uziApi } from './service/uzi'

export const store = configureStore({
    reducer: {
        [uziApi.reducerPath]: uziApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(uziApi.middleware)
})

setupListeners(store.dispatch);
