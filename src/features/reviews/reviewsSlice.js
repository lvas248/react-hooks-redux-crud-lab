import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {},
  reducers: {
    reviewAdded(state, action){
      state.entities.puch({
        comment: action.payload.comment,
        
      })
    }
  },
});

export default reviewsSlice.reducer;