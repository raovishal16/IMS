import { createSlice } from "@reduxjs/toolkit";

const inqSlice = createSlice({
  name: "inqslice",
  initialState: {
    inqList: [],
  },
  reducers: {
    addInqList: (state, action) => {
      state.inqList = action.payload;
    },
    deleteInqList: (state,action)=>{
      let deleteInq = action.payload
      state.inqList = state.inqList.filter((item)=> item._id  !== deleteInq)
    }
   
  },
});

export const { addInqList ,deleteInqList} =
  inqSlice.actions;
export default inqSlice.reducer;
