import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthDB from '../../services/authService';
import axios from 'axios';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (newUser) => {
    const response = await axios.get('http://localhost:3001/users');

    if (response.status === 200) {
      const users = response.data;
      const userFound = users.find((user) => user.email.toLowerCase() === newUser?.email.toLowerCase());

      if (userFound === undefined) {
        const user = await axios.post('http://localhost:3001/users', newUser);

        // Set user creds in browser
        AuthDB.set('user', user.data);
      }
    }

    return response.data;
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (loginUser) => {
    const response = await axios.get('http://localhost:3001/users');

    if (response.status === 200) {
      const users = response.data;

      const userFound = users.find((user) => {
        return user.email.toLowerCase() === loginUser?.email.toLowerCase()
          && user.password === loginUser.password;
      });

      if (userFound === undefined) {
        throw new Error(`user or password did't match !!`);
      } else {
        // Set user creds in browser
        AuthDB.set('user', userFound);
        return userFound;
      }
    }
  }
);

const authSlice = createSlice({
  name: 'authApi',
  initialState: {
    user: {},
    error: null,
    loading: false
  },
  reducers: {
    isUserLogin: (state) => {
      const user = AuthDB.get('user');
      state.user = user || {};
    },
    logOut: (state) => {
      AuthDB.remove('user');
      state.user = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { isUserLogin, logOut } = authSlice.actions;


// Examples :-

// Check if user is loged in
  // dispatch(isUserLogin());

// Login user
  // dispatch(logIn({
  //   password: 'Welcome@123',
  //   email: 'Brijesh@softobiz.com',
  // }));

// Sign-in user
  // dispatch(signIn({
  //   name: 'Brijesh',
  //   lastName: 'Rohilla',
  //   password: 'Welcome@123',
  //   email: 'Brijesh@softobiz.com',
  // }));

  // Log-out user
  // dispatch(logOut());