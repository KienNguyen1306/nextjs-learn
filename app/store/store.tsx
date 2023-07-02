import { configureStore } from "@reduxjs/toolkit";
import couterSlide from "./couterSlide";
const store = configureStore({
  reducer: {
    count: couterSlide,
  },
});

export default store;
