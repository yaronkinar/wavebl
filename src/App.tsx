import React, { useState } from 'react'

import './App.css'
import {
    Box


} from '@mui/material';
import FormDialog from "./components/FormDialog.tsx";
import Column from "./components/Column.tsx";




function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    type DialogType = "blank" | "edit"
    const handleClickOpen = (type:DialogType) => {
        if(type === "blank") setValue('')
        if(type === "edit") setValue("Hello")
        setOpen(true);
    };

    const isValidate  = value.trim().length == 0;

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {


        setValue(event.target.value);
    };

    const handleSave = () => {
        console.log(value)
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };
  return (
      <div>
          <Box
              sx={{
                  display: 'grid',
                  gridAutoFlow: 'row',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gridTemplateRows: 'auto',
                  gap: 1,
                  padding: "20px",
                  border: '1px solid black',
                  height: '80vh',
              }}
          >
              <Column onClick={() => handleClickOpen("blank")} gridColumn={"1"} buttonLabel="Blank"/>

              <Column onClick={() => handleClickOpen("edit")} gridColumn={"5"} buttonLabel="Edit"/>
          </Box>


          <FormDialog open={open} onClose={handleClose} value={value} onChange={handleChange} error={isValidate}
                      onClick={handleSave}/>
      </div>
  )
}

export default App
