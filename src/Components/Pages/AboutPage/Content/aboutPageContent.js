import AccountPageContent from "../../AccountPage/accountPageContent";
import {useSelector} from "react-redux";

const AboutPageContent = () => {
    const accountUserName = useSelector(state => state.account.firstName);
    const accountLastName = useSelector(state => state.account.lastName);
    const accountImage = useSelector(state => state.account.accountImageUrl);
    const aboutAccount = useSelector(state => state.account.aboutAccount);
    const accountBirthDay = useSelector(store=>store.account.birthDate);
    return <AccountPageContent alternativeName={"Unknown name :("} name={accountUserName} lastName={accountLastName}
                               accountImage={accountImage} aboutAccount={aboutAccount} birthDay={accountBirthDay}/>;
}

export default AboutPageContent;