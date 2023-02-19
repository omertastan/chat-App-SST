import { configureStore } from "@reduxjs/toolkit"
import clientListSlice from "../slice/clientList"

export const store = configureStore({
    reducer: {
        clientState: clientListSlice
    }
})