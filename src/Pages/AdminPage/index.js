import useStyle from "./style";
import {Tab, Tabs, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import userRoles from "../../Models/userRoles";
import {useState} from "react";
import DashboardTab from "./Tabs/DashboardTab";
import ReportsTab from "./Tabs/ReportsTab";
import UsersTab from "./Tabs/UsersTab";
import SetsTab from "./Tabs/SetsTab";
import {TabContext} from "@mui/lab";

const AdminPage = () => {
    const classes = useStyle();
    const isAdmin = useSelector((state => state.account.userRole === userRoles.admin))
    const [value, setValue] = useState("1");
    return (
        <div className={classes.pageContainer}>
            {!isAdmin ? <Navigate to={"/hub"}/> : null}
            <Typography variant={"h4"}>
                Administrator
            </Typography>
            <div className={classes.adminContent}>
                <TabContext value={value}>
                    <Tabs orientation={"horizontal"} variant={"fullWidth"} value={value}
                          onChange={(e, value) => setValue(value)}>
                        <Tab label={"Dashboard"} value={"1"}/>
                        <Tab label={"Reports"} value={"2"}/>
                        <Tab label={"Users"} value={"3"}/>
                        <Tab label={"Sets"} value={"4"}/>
                    </Tabs>
                    <DashboardTab index={0} value={"1"}/>
                    <ReportsTab index={1} value={"2"}/>
                    <UsersTab index={2} value={"3"}/>
                    <SetsTab index={3} value={"4"}/>
                </TabContext>
            </div>
        </div>)
}

export default AdminPage;