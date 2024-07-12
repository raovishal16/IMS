import { createSlice } from "@reduxjs/toolkit";

const branchSlice = createSlice({
  name: "branch",
  initialState: {
    branchList: [],
  },
  reducers: {
    addBranchList: (state, action) => {
      state.branchList = action.payload;
    },
    deleteBranch: (state, action) => {
      const branchId = action.payload;
      state.branchList = state.branchList.filter(
        (branch) => branch._id !== branchId
      );
    },
    updateBranch: (state, action) => {
      const { id, newName } = action.payload;
      state.branchList = state.branchList.map((branch) =>
        branch._id === id ? { ...branch, name: newName } : branch
      );
    },
  },
});

export const { addBranchList, deleteBranch, updateBranch } =
  branchSlice.actions;
export default branchSlice.reducer;
