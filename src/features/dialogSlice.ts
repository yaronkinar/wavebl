import { createSlice } from '@reduxjs/toolkit';

interface DialogState {
    open: boolean;
    value: string;
    error: boolean;
}

const initialState: DialogState = {
    open: false,
    value: '',
    error: false
};

const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        openDialog: (state,action) => {
            state.open = true;
            state.value = action.payload;
        },
        closeDialog: (state) => {
            state.open = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setDialogValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { openDialog, closeDialog, setDialogValue,setError } = dialogSlice.actions;

export default dialogSlice.reducer

