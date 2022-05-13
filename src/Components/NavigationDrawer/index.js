import NavigationDrawerContent from "./Content";
import {useSelector} from "react-redux";

const NavigationDrawer = () => {
    const accountFirstName = useSelector((state => state.account.firstName));
    const accountLastName = useSelector((state => state.account.lastName));
    const accountImage = useSelector((state => state.account.accountImageUrl));
    const userRole = useSelector((state => state.account.userRole));
    return <NavigationDrawerContent accountFirstName={accountFirstName}
                                    accountLastName={accountLastName}
                                    accountImage={accountImage} userRole={userRole}/>
};

export default NavigationDrawer;