import { configureStore } from '@reduxjs/toolkit'

// Create your store
export const makeStore = () => {
  return configureStore({
    reducer: {
      // Add your reducers here, for example:
      // counter: counterReducer
    }
  })
}

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
