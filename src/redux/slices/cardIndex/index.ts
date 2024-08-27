import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = -1;

export const cardIndexSlice = createSlice({
  name: "cardIndex",
  initialState,
  reducers: {
    setCardIndex: (state: number, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setCardIndex } = cardIndexSlice.actions;
export default cardIndexSlice.reducer;
