import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "api/v1/greeting"

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    const response = await axios.get(BASE_URL)
    return response.data
  }
)

const greetingReducer = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    addGreeting: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.value = action.payload
    }
  }
})

export const { addGreeting } = greetingReducer.actions

export default greetingReducer.reducer;