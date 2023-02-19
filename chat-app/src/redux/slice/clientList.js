import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const clientListSlice = createSlice({
    name: "clientState",
    initialState,
    reducers: {
        setClient(state, action) {
            state.value = action.payload;
        },
        deleteClient(state, action) {
            state.value = null;
        },
    },
});

export const { setClient, deleteClient } = clientListSlice.actions;
export default clientListSlice.reducer;