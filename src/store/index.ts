import { configureStore } from '@reduxjs/toolkit';
import categorySettings from './categorySettings';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    categorySettings,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
