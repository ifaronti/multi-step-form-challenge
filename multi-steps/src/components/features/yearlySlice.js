import { createSlice } from "@reduxjs/toolkit";

export const yearlySlice = createSlice({
    name: 'yearly',
    initialState:{value:false},
    reducers:{
        changeYearly:(state, action) =>{
            state.value = action.payload
        }
    }
})

export default yearlySlice.reducer
export const {changeYearly} = yearlySlice.actions