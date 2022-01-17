import NavigationDrawerContent from "./Content/navigationDrawerContent";
import {useSelector} from "react-redux";

const NavigationDrawer = () => {
    const accountFirstName = useSelector((state => state.account.firstName));
    const accountLastName = useSelector((state => state.account.lastName));
    const accountImage = useSelector((state => state.account.accountImageUrl));
    return <NavigationDrawerContent accountFirstName={accountFirstName}
                                    accountLastName={accountLastName}
                                    accountImage={accountImage}/>
};

export default NavigationDrawer;