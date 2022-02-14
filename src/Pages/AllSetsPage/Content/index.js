import useStyle from "./style";
import {Alert, AlertTitle, TextField, Typography} from "@mui/material";
import {useState} from "react";

const AllSetsPageContent = () => {
    const classes = useStyle();
    const info = [];
    const [state, setState] = useState({
        input: "",
        filteredResults: info
    });
    const onTextInputChanged = (text) => {
        setState({
            input: text,
            filteredResults: info.filter(element => element.title.includes(text))
        })
        console.log(text)
    }
    return (
        <div
            className={classes.pageContainer}>
            <Typography
                variant={"h4"}>
                All Sets
            </Typography>
            <div
                className={classes.inputContainer}>
                <TextField
                    variant={"outlined"} className={classes.searchBarClass}
                    onChange={(event) =>
                        onTextInputChanged(event.target.value)}
                    placeholder={"Search for new sets"}/>
            </div>
            <Alert severity={"warning"}>
                <AlertTitle>Work in progress</AlertTitle>
                Currently this component won't work as expected - please stay tuned!
            </Alert>
            {/*<CardsStack*/}
            {/*    info={state.filteredResults} cards={info}/>*/}
        </div>
    )
}

export default AllSetsPageContent;