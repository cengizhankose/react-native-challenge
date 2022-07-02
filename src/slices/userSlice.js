import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: state => {
      state.value += 1;
    },
  },
});

export const {add} = counterSlice.actions;

export default counterSlice.reducer;
