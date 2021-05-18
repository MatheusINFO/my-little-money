/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducer => {
    const persistedReducer = persistReducer({
        key: 'mylittlemoney',
        storage,
        whitelist: ['auth']
    },
        reducer
    );

    return persistedReducer;
}