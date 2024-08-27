import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: [] = [];

export const cardIngredientsSlice = createSlice({
  name: "cardIngredients",
  initialState,
  reducers: {
    setCardIngredients: (state: [], action: PayloadAction<[]>) => {
      return action.payload;
    },
  },
});

export const { setCardIngredients } = cardIngredientsSlice.actions;
export default cardIngredientsSlice.reducer;
