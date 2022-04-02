import useStyle from "./style";
import {Backdrop, CircularProgress, IconButton, InputAdornment, Pagination, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import CardsStack from "../../../Components/CardsStack";
import {useDispatch, useSelector} from "react-redux";
import {getAllSets, getAllSetsByQuery} from "../../../Redux/actions";
import {SearchOutlined} from "@mui/icons-material";

const AllSetsPageContent = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSets(allSets.currentPage))
    }, [])
    const [searchQuery, setSearchQuery] = useState("");
    const allSets = useSelector(state => state.allSets);
    const isLoading = useSelector(state => state.isLoading);
    const handlePageChange = (_, value) => {
        dispatch(getAllSets(value))
    }
    const onSearchClick = () => {
        if (searchQuery==="") {
            dispatch(getAllSets(allSets.currentPage))
            return
        }
        dispatch(getAllSetsByQuery(searchQuery, allSets.currentPage))
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
                    placeholder={"Search for new sets"}
                    value={searchQuery}
                    onChange={(event)=>setSearchQuery(event.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={onSearchClick}>
                                    <SearchOutlined/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <Backdrop
                open={isLoading}
                sx={{zIndex: 20, backgroundColor: "rgba(255,255,255,0.8)"}}>
                <CircularProgress/>
            </Backdrop>
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
                    paddingBottom: "32px",
                    paddingTop: "32px"
                }}
            /> : null}
        </div>
    )
}

export default AllSetsPageContent;