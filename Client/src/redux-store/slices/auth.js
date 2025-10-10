// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '@/services/api';

// export const createUser = createAsyncThunk(
//   'auth/sign-up',
//   async (data, { rejectWithValue }) => {
//     try {
//       delete data.confirmPassword
//       const response = await api.post('/user/create', data);
//       return response.data; // Should include user data or token
//     } catch (err) {
//       return rejectWithValue(err.response?.data || 'sign-up failed');
//     }
//   }
// );
// // Async thunk for login
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/auth/login', credentials);
//       return response.data; // Should include user data or token
//     } catch (err) {
//       return rejectWithValue(err.response?.data || 'Login failed');
//     }
//   }
// );

// export const verifyToken = createAsyncThunk(
//   'auth/verifyToken',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get('/auth/verify-token');
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || 'Token verification failed');
//     }
//   }
// );

// // Async thunk for logout
// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await api.post('/auth/logout');

//     } catch (err) {
//       return rejectWithValue(err.response?.data || 'Logout failed');
//     }
//   }
// );

// // Initial state
// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,
//   isAuthenticated: false,
//   isVerifying: false
// };

// // Auth slice
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     resetError(state) {
//       state.error = null;
//     },
//     reInitialState(state) {
//       state.user = null;
//       state.isLoading = false;
//       state.error = null;
//       state.isAuthenticated = false;
//     },
//     updateUser(state, action) {
//       const updates = action.payload; // e.g. { firstName: "John", city: "NYC" }

//       for (const key in updates) {
//         if (Object.prototype.hasOwnProperty.call(updates, key)) {
//           state.user[key] = updates[key];
//         }
//       }
//     }

//   },
//   extraReducers: (builder) => {
//     builder

//       //create user

//       .addCase(createUser.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(createUser.fulfilled, (state, action) => {

//         state.isLoading = false;
//         state.user = action.payload?.data.user || {};
//         state.isAuthenticated = true;
//       })

//       // verifyToken

//       .addCase(verifyToken.pending, (state) => {
//         state.isVerifying = true;
//       })
//       .addCase(verifyToken.fulfilled, (state, action) => {
//         state.isVerifying = false;
//         state.user = action.payload?.data.user || {};
//         state.isAuthenticated = true;
//       })
//       .addCase(verifyToken.rejected, (state) => {
//         state.isVerifying = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })

//       // Login
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload?.data.user || {};
//         state.isAuthenticated = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//       })

//       // Logout
//       .addCase(logout.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false
//       })
//       .addCase(logout.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { resetError, updateUser } = authSlice.actions;
// export default authSlice.reducer;
