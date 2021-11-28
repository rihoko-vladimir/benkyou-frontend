import MySetsPageContent from "./Content/mySetsPageContent";
import useStyles from "../style";
import NavigationDrawer from "../../NavigationDrawerComponent/navigationDrawer";

const MySetsPage = () => {
    const classes = useStyles();
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        <MySetsPageContent/>
    </div>
}

export default MySetsPage;
