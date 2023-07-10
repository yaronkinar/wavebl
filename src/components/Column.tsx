import {Box, Button} from "@mui/material";
import {JSX} from "react";

export interface ColumnParams {
    onClick: () => void;
    gridColumn: string;
    buttonLabel: string;
}

export default function Column(props: ColumnParams):JSX.Element {
    return <Box
        sx={{
            display: "grid",
            gridColumn: props.gridColumn ,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            height: "100e%",
        }}
    >
        <Button sx={{width: "100px"}} variant="contained" onClick={props.onClick}>{props.buttonLabel}</Button>
    </Box>;
}
