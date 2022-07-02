import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
