import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD_TASK: (state) => {
      state.value += 1
    },
    REMOVE_TASK: (state) => {
      state.value -= 1
    },
    TOGGLE_TASK: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } = cardSlice.actions

export default cardSlice.reducer