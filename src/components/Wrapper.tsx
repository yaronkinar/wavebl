import React from "react";
import {Box} from "@mui/material";

export default function Wrapper({children}: { children: React.ReactNode }): React.ReactNode {
    return (<Box
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
        {children}

    </Box>)
}
