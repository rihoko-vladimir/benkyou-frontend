import useStyle from "./style";
import {Typography} from "@mui/material";

const AdminPage = ()=>{
    const classes = useStyle();
    return (
        <div className={classes.pageContainer}>
            <Typography variant={"h4"}>
                Administrator
            </Typography>
        </div>)
}

export default AdminPage;