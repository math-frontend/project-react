import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userCurrent: 0
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, actions) => {
      state.userCurrent += 1
    },
    logout: (state, actions) => {
      console.log('Logout', state, actions)
    }
  },
})

export const { login, logout } = authenticationSlice.actions
export default authenticationSlice.reducer