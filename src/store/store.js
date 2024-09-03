import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../api/Slice/cardSlice";




export const store = configureStore({
  reducer: {
    counter: cardSlice
  },
})