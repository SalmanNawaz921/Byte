import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "category",
  initialState: {
    categoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      state.categoryName = action.payload;
      state.searchQuery = "";
    },
    findNews: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectCategory, findNews } = category.actions;
export default category.reducer;
