import { createSlice } from "@reduxjs/toolkit";

export const pageNumberSlice = createSlice({
    name: 'page number',
    initialState:{value:1},
    reducers:{
        changePageNumber:(state, action) => {
            state.value = action.payload
        }
    }
})

export default pageNumberSlice.reducer
export const {changePageNumber} = pageNumberSlice.actions