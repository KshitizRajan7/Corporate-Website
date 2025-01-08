import { configureStore } from '@reduxjs/toolkit'
import departSlice from './departSlice'

export const store = configureStore ({
    reducer: {
        department:departSlice
    }
  })

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']