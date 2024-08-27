import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const dishNameSlice = createSlice({
  name: "dishName",
  initialState,
  reducers: {
    setDishName: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});
export const { setDishName } = dishNameSlice.actions;
export default dishNameSlice.reducer;
