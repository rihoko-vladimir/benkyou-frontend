import useStyle from "./style";
import {
    Backdrop,
    Button,
    CircularProgress,
    IconButton,
    InputAdornment,
    Pagination,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import CardsStack from "../../../Components/CardsStack";
import {useDispatch, useSelector} from "react-redux";
import {getAllSets} from "../../../Redux/actions";
import {SearchOutlined} from "@mui/icons-material";

const AllSetsPageContent = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSets(allSets.currentPage))
    }, [])
    const allSets = useSelector(state => state.allSets);
    const isLoading = useSelector(state => state.isLoading);
    const handlePageChange = (_, value) => {
        dispatch(getAllSets(value))
    }
    return (
        <div
            className={classes.pageContainer}>
            <Backdrop
                open={isLoading}
                sx={{zIndex: 1000, backgroundColor:"rgba(255,255,255,0.8)"}}>
                <CircularProgress/>
            </Backdrop>
            <Typography
                variant={"h4"}>
                All Sets
            </Typography>
            <div
                className={classes.inputContainer}>
                <TextField
                    disabled
                    variant={"outlined"} className={classes.searchBarClass}
                    placeholder={"Search for new sets"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end">
                                <SearchOutlined/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
            <CardsStack
                cards={allSets.sets}
                manageAble={false}/>
            {allSets.pages > 1 ? <Pagination
                count={allSets.pages}
                page={allSets.currentPage}
                onChange={handlePageChange}
                variant={"outlined"}
                size={"large"}
                color={"primary"}
                hidePrevButton
                hideNextButton
                sx={{
                    paddingBottom:"32px",
                    paddingTop:"32px"
                }}
            /> : null}
        </div>
    )
}

export default AllSetsPageContent;