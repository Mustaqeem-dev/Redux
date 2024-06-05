//ducks pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0, //initial value
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ///logics and updates here
    //inc,dec ,reset
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
  },
});

export const { incremented } = counterSlice.actions;
export const { decremented } = counterSlice.actions;
export default counterSlice.reducer;
