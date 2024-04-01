import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
    name:'plan',
    initialState:{value:{}},
    reducers:{
        updatePlan:(state, action) =>{
            state.value = action.payload
        }
    }
})

export default planSlice.reducer
export const {updatePlan} = planSlice.actions