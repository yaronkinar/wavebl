import './App.css';
import FormDialog from "./components/FormDialog.tsx";
import Column from "./components/Column.tsx";
import Wrapper from "./components/Wrapper.tsx";
import {useDispatch} from "react-redux";
import {openDialog} from "./features/dialogSlice.ts";
import {useCallback} from "react";


type ButtonType = 'blank' | 'edit';

function App() {

    const dispatch = useDispatch();


    const memoizedHandleClickOpen = useCallback(
        (type: ButtonType) => {
            switch (type) {
                case 'blank':
                    dispatch(openDialog(''));
                    break;
                case 'edit':
                    dispatch(openDialog('Hello'));
                    break;
                default:
                    // Do nothing
                    break;
            }
        },
        [dispatch],
    );
    return (
        <div>
            <Wrapper>
                <Column onClick={() => memoizedHandleClickOpen("blank")} gridColumn={"1"} buttonLabel="Blank"/>
                <Column onClick={() => memoizedHandleClickOpen("edit")} gridColumn={"5"} buttonLabel="Edit"/>
            </Wrapper>

            <FormDialog/>
        </div>
    )
}

export default App;
