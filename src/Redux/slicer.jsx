import { createSlice } from "@reduxjs/toolkit";

export const slicer=createSlice({
    name:"afril",
    initialState:{count:0},
    reducers:{
        increment:(state)=>{
            state.count+=1
        }
    }
})

export const {increment} = slicer.actions;
export default slicer.reducer;