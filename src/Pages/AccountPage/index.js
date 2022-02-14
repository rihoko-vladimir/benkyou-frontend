import {useSelector} from "react-redux";
import AccountPageContent from "./Content";

const AccountPage = () => {
    const accountUserName = useSelector(state => state.account.firstName);
    const accountLastName = useSelector(state => state.account.lastName);
    const accountImage = useSelector(state => state.account.accountImageUrl);
    const aboutAccount = useSelector(state => state.account.aboutAccount);
    const accountBirthday = useSelector(state => state.account.birthday);
    const cardsCount = useSelector(state => state.myCards.length)
    return <AccountPageContent alternativeName={"Unknown name :("} firstName={accountUserName}
                               lastName={accountLastName}
                               accountImage={accountImage}
                               aboutAccount={aboutAccount}
                               birthday={accountBirthday} cardsCount={cardsCount}/>;
}

export default AccountPage;