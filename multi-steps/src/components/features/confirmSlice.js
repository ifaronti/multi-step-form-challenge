import {createSlice} from '@reduxjs/toolkit'

const confirmSlice = createSlice({
    name: 'confirm',
    initialState:{value:false},
    reducers:{
        changeConfirm:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default confirmSlice.reducer
export const {changeConfirm} = confirmSlice.actions