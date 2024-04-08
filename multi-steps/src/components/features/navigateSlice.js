import {createSlice} from '@reduxjs/toolkit'

export const navTo = createSlice({
    name : 'Go To',
    initialState:{value:{}},
    reducers:{
        navigateTo:(state, action)=>{
            state.value = action.payload
        }
    }
})
export default navTo.reducer
export const {navigateTo} = navTo.actions