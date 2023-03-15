import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/YuGiShop";

export const getAllCards = createAsyncThunk("card/all", async () => {
  try {
    const response = await axios.get(`${baseURL}/cards`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCards.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(getAllCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cardSlice.reducer;
