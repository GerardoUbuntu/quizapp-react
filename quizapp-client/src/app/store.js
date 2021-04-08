import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '../features/errorSlice';
import authReducer from '../features/authSlice';

export default configureStore({
  reducer: {
    error: errorReducer,
    auth: authReducer,
  },
});
