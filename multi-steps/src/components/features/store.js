import { configureStore } from "@reduxjs/toolkit";
import yearlySlice from "./yearlySlice";
import pageNumberSlice from "./pageNumberSlice";
import  planSlice  from "./planValueSlice";
import addonsSlice from "./addonsSlice";

export const theStore = configureStore({
    reducer:{
        yearly : yearlySlice,
        page : pageNumberSlice,
        plan : planSlice,
        addons : addonsSlice
    }
})