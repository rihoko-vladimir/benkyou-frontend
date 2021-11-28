import HomePageContent from "./Content/homepageContent";
import useStyles from "../style";
import NavigationDrawer from "../../NavigationDrawerComponent/navigationDrawer";

const HomePage = () => {
    const classes = useStyles();
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        <HomePageContent/>
    </div>
}

export default HomePage;