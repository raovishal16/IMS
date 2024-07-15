import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name: "course",
  initialState: {
    course: [],
  },
  reducers: {
    addCourseList: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { addCourseList } = CourseSlice.actions;
export default CourseSlice.reducer;
