import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections : (state, action) => {
      return action.payload
    }, 
    removeConnections : (state, actions) => {
      return null
    }
  }
})

export const {addConnections , removeConnections} = createSlice.actions
export default connectionSlice.reducer