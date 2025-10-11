// Third-party Imports
import { configureStore } from '@reduxjs/toolkit'

// Slice Imports
import authReducer from '@/redux-store/slices/auth.js'


export const store = configureStore({
  reducer: {
    authReducer,
    
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
