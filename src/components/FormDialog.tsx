import {Button, Dialog, DialogActions, DialogContent, FormControl, TextField} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store.ts";
import {closeDialog, setDialogValue, setError} from "../features/dialogSlice.ts";


export default function FormDialog() {
    const dialog = useSelector((state: RootState) => state.dialog);
    const dispatch = useDispatch();
    const hasError = dialog.value.trim().length === 0;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setError(false))

        if (event.target.value.trim().length === 0) {
            dispatch(setError(true))
        }
        dispatch(setDialogValue(event.target.value));


    };

    const handleSave = () => {

        console.log(dialog.value);

        dispatch(closeDialog());
    };
    const handleClose = () => {
        dispatch(closeDialog());
    };
    return <Dialog open={dialog.open} onClose={handleClose}>
        <DialogContent>

            <FormControl>
                <TextField
                    value={dialog.value}
                    onChange={handleChange}
                    error={hasError}
                    helperText={hasError ? "Please Enter Text" : ""}
                    label="Text"
                    variant="outlined"
                />
            </FormControl>

        </DialogContent>
        <DialogActions>
            <Button disabled={hasError} onClick={handleClose}>Cancel</Button>
            <Button disabled={hasError} onClick={handleSave}>Save</Button>
        </DialogActions>
    </Dialog>;
}
