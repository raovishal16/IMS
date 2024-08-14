import { createSlice } from "@reduxjs/toolkit";
const RefSlice = createSlice({
    name: "reference",
    initialState: {
      RefList: [],
    },
    reducers: {
      addRefList: (state, action) => {
        state.RefList = action.payload;
      },
      deleteRefList:(state,action) =>{
        let refId = action.payload;
        state.RefList = state.RefList.filter((item) => item._id !== refId);
      },
      updateRefList:(state,action)=>{
        let {id,newname} = action.payload
        state.RefList = state.RefList.map((item)=> item._id === id ? {...item,name:newname}:item)
      }
    
    },
  });
  
  export const { addRefList,deleteRefList ,updateRefList} =  RefSlice.actions;
  export default RefSlice.reducer;
  