import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/greetings';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

const greetingReducer = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default greetingReducer.reducer;
