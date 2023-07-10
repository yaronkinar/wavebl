import {Button, Dialog, DialogActions, DialogContent, FormControl, TextField} from "@mui/material";
import React from "react";

interface FormDialog {
    open: boolean;
    onClose: () => void;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error: boolean;
    onClick: () => void;
}

export default function FormDialog(props: FormDialog) {

    return <Dialog open={props.open} onClose={props.onClose}>
        <DialogContent>

            <FormControl>
                <TextField
                    value={props.value}
                    onChange={props.onChange}
                    error={props.error}
                    helperText={props.error ? "Please Enter Text" : ""}
                    label="Text"
                    variant="outlined"
                />
            </FormControl>

        </DialogContent>
        <DialogActions>
            <Button disabled={props.error} onClick={props.onClose}>Cancel</Button>
            <Button disabled={props.error} onClick={props.onClick}>Save</Button>
        </DialogActions>
    </Dialog>;
}
