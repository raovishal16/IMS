import { createSlice } from "@reduxjs/toolkit";

const RoleSlice = createSlice({
  name: "role",
  initialState: {
    userRole: [],
  },
  reducers: {
    addRoleList: (state, action) => {
      state.userRole = action.payload;
    },
    deleteRoleList: (state, action) => {
      let roleId = action.payload;
      state.userRole = state.userRole.filter((item) => item._id !== roleId);
    },
    updateRoleList: (state, action) => {
      let { id, newname } = action.payload;
      state.userRole = state.userRole.map((item) =>
        item._id == id ? { ...item, name: newname } : item
      );
    },
  },
});

export const { addRoleList, deleteRoleList, updateRoleList } =
  RoleSlice.actions;
export default RoleSlice.reducer;
