import { configureStore } from "@reduxjs/toolkit";
import cardIndexReducer from "./slices/cardIndex";
import cardIngredientsReducer from "./slices/cardIngredients";
import dishNameReducer from "./slices/dishName";
export const store = configureStore({
  reducer: {
    cardIndex: cardIndexReducer,
    cardIngredients: cardIngredientsReducer,
    dishName: dishNameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
