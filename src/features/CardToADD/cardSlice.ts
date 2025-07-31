import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cardItems: typeof window !== "undefined" && localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card")!)
    : [],
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addToCard: (state, action: PayloadAction<number | string>) => {
      if (!state.cardItems.includes(action.payload)) {
        state.cardItems.push(action.payload);
        if (typeof window !== "undefined") {
          localStorage.setItem("card", JSON.stringify(state.cardItems));
        }
      }
    },
    setCardItems: (state, action: PayloadAction<(number | string)[]>) => {
      state.cardItems = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("card", JSON.stringify(state.cardItems));
      }
    }
  }
});

export const { addToCard, setCardItems } = cardSlice.actions;
export default cardSlice.reducer;
