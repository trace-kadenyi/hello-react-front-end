import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
