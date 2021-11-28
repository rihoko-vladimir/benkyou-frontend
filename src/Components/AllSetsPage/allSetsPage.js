import AllSetsPageContent from "./Content/allSetsPageContent";
import useStyles from "../Pages/style";
import NavigationDrawer from "../NavigationDrawerComponent/navigationDrawer";

const AllSetsPage = () => {
    const classes = useStyles();
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        <AllSetsPageContent/>
    </div>
}

export default AllSetsPage;
