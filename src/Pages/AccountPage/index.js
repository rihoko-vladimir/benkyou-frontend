import {Tab, Tabs, Typography} from "@mui/material";
import useStyles from "./style";
import SecurityTab from "./SecurityTab";
import PersonalTab from "./PersonalTab";
import GeneralTab from "./GeneralTab";
import AccountOverview from "../../Components/AccountOverview";
import {TabContext} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "../../Redux/actions";

const AccountPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tabValue = useSelector(state => state.accountPage.tabValue) || "1"
    const setValue = (value) => dispatch(changeValue(value))

    return (
        <div
            className={classes.pageContainer}>
            <Typography
                variant={"h4"}>
                Account
            </Typography>
            <div
                className={classes.accountMainContainer}>
                <AccountOverview/>
                <div
                    className={classes.mainAccountContainer}>
                    <Typography
                        variant={"h5"}>
                        Account
                    </Typography>
                    <TabContext value={tabValue}>
                        <Tabs orientation={"horizontal"} className={classes.tabs} variant={"fullWidth"} value={tabValue}
                              onChange={(e, value) => setValue(value)}>
                            <Tab label={"General"} value={"1"}/>
                            <Tab label={"Personal"} value={"2"}/>
                            <Tab label={"Security (Coming soon)"} value={"3"} disabled/>
                        </Tabs>
                        <GeneralTab index={0} value="1"/>
                        <PersonalTab index={1} value="2"/>
                        <SecurityTab index={2} value="3"/>
                    </TabContext>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;