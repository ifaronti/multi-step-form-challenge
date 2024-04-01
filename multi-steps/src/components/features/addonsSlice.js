import { createSlice } from "@reduxjs/toolkit";

export const addonsSlice = createSlice({
    name:'addons',
    initialState:{
        value:{
            onlineService:'',
            storage:'',
            profileTheme: ''
        }
    },

    reducers:{
        updateAddons:(state, action) =>{
            state.value = action.payload
        }
    }
})

export default addonsSlice.reducer
export const {updateAddons} = addonsSlice.actions