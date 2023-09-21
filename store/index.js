import { configureStore } from '@reduxjs/toolkit'

import authenticationReducer from '../features/authentication'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer
  },
})