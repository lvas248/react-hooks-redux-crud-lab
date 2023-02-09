import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state, action){
      state.entities.push({
        name: action.payload,
        id: uuid()
      })
    },
      restaurantRemoved(state, action){
        state.entities = state.entities.filter( r => r.id !== action.payload)
      }
  },
});

export const { restaurantAdded, restaurantRemoved } = restaurantsSlice.actions
export default restaurantsSlice.reducer;
