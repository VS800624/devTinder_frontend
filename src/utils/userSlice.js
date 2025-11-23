import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload
    },
    removeUser: (state, action) => {
    return null
    }
  }
})

export const {addUser, removeUser} = userSlice.actions
// here we are taking out these actions individually, and exporting it.
export default userSlice.reducer

// so userSlice is kind of like a big object which have actions and reducers so we are doing export default  userSlice.reducer , we are giving the reducer 
// A reducer is the combination of many small reducers cartSlice.reducer is the combination of above reducers i.e. addUser and removeUser (that is why it is written as reducers )