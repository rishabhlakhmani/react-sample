import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import noteReducer from './note/note.slice';

const rootReducer = combineReducers({
    note: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

const store = configureStore({
    reducer: rootReducer,
});

export default store;
