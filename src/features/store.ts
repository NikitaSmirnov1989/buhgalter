import { configureStore, Tuple  } from '@reduxjs/toolkit'
import faqSlice from './faq/faqSlice';
import { useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    faq: faqSlice,
  },
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
