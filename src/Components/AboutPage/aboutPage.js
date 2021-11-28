import AboutPageContent from "./Content/aboutPageContent";
import useStyles from "../Pages/style";
import NavigationDrawer from "../NavigationDrawerComponent/navigationDrawer";

const AboutPage = () => {
    const classes = useStyles();
    return <div className={classes.homePage}>
        <NavigationDrawer/>
        <AboutPageContent/>
    </div>
}

export default AboutPage;
