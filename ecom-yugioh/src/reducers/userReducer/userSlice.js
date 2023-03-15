import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/YuGiShop";


export const login = createAsyncThunk("user/login", async (loginRequest) => {
  try {
    const response = await axios.post(`${baseURL}/user/login`, loginRequest);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  return null;
});

export const register = createAsyncThunk(
  "user/register",
  async (registerRequest) => {
    try {
      const response = await axios.post(
        `${baseURL}/user/register`,
        registerRequest
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.login = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logout.fulfilled, (state,action) => {
        state.status = "idle";
        state.login = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.status = "pending";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.login = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
