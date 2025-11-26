import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests : (state, action) => action.payload,
    removeRequest : (state, action) => {
      const newArray = state.filter((req) =>  req._id !== action.payload) // the value of user connections is inside the state 
      // it will remove the person which request user have accepted or rejected on the bases od _id
      return newArray
    }
  }
})

export const {addRequests, removeRequest } = requestSlice.actions
export default requestSlice.reducer