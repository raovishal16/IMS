import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    statusList: [],
  },
  reducers: {
    addStatusList: (state, action) => {
      state.statusList = action.payload;
    },
    deleteStatusList:(state,action)=>{
        let statsusId = action.payload
        state.statusList = state.statusList.filter((item)=> item.id !== statsusId)
    }
   
  },
});

export const { addStatusList ,deleteStatusList } =
  statusSlice.actions;
export default statusSlice.reducer;
