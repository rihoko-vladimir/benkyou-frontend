import {useSelector} from "react-redux";
import AccountPageContent from "./accountPageContent";

const AccountPage = () => {
    const accountUserName = useSelector(state => state.account.firstName);
    const accountLastName = useSelector(state => state.account.lastName);
    const accountImage = useSelector(state => state.account.accountImageUrl);
    const aboutAccount = useSelector(state => state.account.aboutAccount);
    const accountBirthday = useSelector(state => state.account.birthday);
    return <AccountPageContent alternativeName={"Unknown name :("} firstName={accountUserName}
                               lastName={accountLastName}
                               accountImage={accountImage}
                               aboutAccount={aboutAccount}
                               birthday={accountBirthday}/>;
}

export default AccountPage;