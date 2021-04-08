import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: {},
  status: null,
  id: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    getError: (state, { payload }) => {
      state.message = payload.message;
      state.status = payload.status;
      state.id = payload.id;
    },
    clearError: (state) => {
      state.message = {};
      state.status = null;
      state.id = null;
    },
  },
});

export const { getError, clearError } = errorSlice.actions;

export const selectError = (state) => state.error;

export default errorSlice.reducer;
