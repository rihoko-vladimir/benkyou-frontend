import HomePageContent from "./Content/homepageContent";
import NavigationDrawer from "../../NavigationDrawerComponent/navigationDrawer";

const HomePage = ()=>{
    return <div className={"homePage"}>
        <NavigationDrawer/>
        <HomePageContent/>
    </div>
}

export default HomePage;