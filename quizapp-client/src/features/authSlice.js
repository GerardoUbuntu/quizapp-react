import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getError, clearError } from './errorSlice';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  error: null,
};

// Load User
export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const user = await axios.get(
        'http://localhost:3006/api/v1/auth/user',
        tokenConfig(getState)
      );
      return user.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// SignUp User
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue, dispatch }) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('hello');
    // Request body
    const body = JSON.stringify(user);
    try {
      const res = await axios.post(
        'http://localhost:3006/api/v1/auth/signUp',
        body,
        config
      );
      return res.data;
    } catch (err) {
      dispatch(
        getError({
          message: err.response.data,
          status: err.response.status,
          id: 'REGISTER_FAIL',
        })
      );
      return rejectWithValue(err.response.data.message);
    }
  }
);

// SignIn User
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Request body
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(
        'http://localhost:3006/api/v1/auth/signIn',
        body,
        config
      );
      dispatch(clearError());
      return res.data;
    } catch (err) {
      dispatch(
        getError({
          message: err.response.data,
          status: err.response.status,
          id: 'LOGIN_FAIL',
        })
      );
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [loadUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = payload;
    },
    [loadUser.rejected]: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      console.log(payload);
      localStorage.setItem('token', payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.token = payload.token;
      state.user = payload.user;
    },
    [signUp.rejected]: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      console.log(payload);
      localStorage.setItem('token', payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.token = payload.token;
      state.user = payload.user;
    },
    [signIn.rejected]: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

export const { logout } = authSlice.actions;

export const authenticated = (state) => state.auth.isAuthenticated;
export const selectLoading = (state) => state.auth.isLoading;

export default authSlice.reducer;
