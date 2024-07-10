import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const branchNameAdd = createAsyncThunk(
  "branch/branchAdd",
  async (branch, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.register.adminLoginToken;
    try {
      const response = await axios.post(
        "http://localhost:3000/branch/branch",
        branch,
        {
          headers: {
            authorization: `${token}`,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const addBranch = createSlice({
  name: "branch",
  initialState: {
    BranchName: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(branchNameAdd.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(branchNameAdd.fulfilled, (state, action) => {
        state.loading = false;
        state.BranchName = action.payload;
        state.error = null;
      })
      .addCase(branchNameAdd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default addBranch.reducer;
