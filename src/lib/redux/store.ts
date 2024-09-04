import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux/faetures/counter/counterSlice'
import pizzaSlice from '../redux/faetures/slices/pizzaSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      pizza: pizzaSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']