import React, { useState, useCallback } from 'react';

import './App.css';
import FormDialog from "./components/FormDialog.tsx";
import Column from "./components/Column.tsx";
import Wrapper from "./components/Wrapper.tsx";

function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    type DialogMode = "blank" | "edit"
    const handleClickOpen = useCallback((type: DialogMode) => {
        if (type === "blank") setValue('')
        if (type === "edit") setValue("Hello")
        setOpen(true);
    }, [setValue, setOpen]);

    const hasError = value.trim().length === 0;

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, [setValue]);

    const handleSave = useCallback(() => {
          if(!hasError){
              console.log(value);

          }
        setOpen(false);
    }, [value, setOpen,hasError]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    return (
        <div>
            <Wrapper>
                <Column onClick={() => handleClickOpen("blank")} gridColumn={"1"} buttonLabel="Blank"/>
                <Column onClick={() => handleClickOpen("edit")} gridColumn={"5"} buttonLabel="Edit"/>
            </Wrapper>

            <FormDialog open={open} onClose={handleClose} text={value} onChange={handleChange} error={hasError} onClick={handleSave}/>
        </div>
    )
}

export default App;
