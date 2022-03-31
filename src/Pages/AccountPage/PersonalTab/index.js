// noinspection RequiredAttributes

import {Button, TextField} from "@mui/material";
import useStyle from "./style";
import PropTypes from "prop-types";
import {DesktopDatePicker, LocalizationProvider, TabPanel} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAbout,
    changeBirthday,
    changeFirstName,
    changeLastName,
    changeUserAccountInfo
} from "../../../Redux/actions";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useState} from "react";
import enLocale from 'date-fns/locale/en-US';

const PersonalTab = ({value, index}) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const firstName = useSelector(state => state.accountPage.firstName);
    const lastName = useSelector(state => state.accountPage.lastName);
    const birthday = useSelector(state => state.accountPage.birthday);
    const about = useSelector(state => state.accountPage.about);
    const avatar = useSelector(state => state.accountPage.base64);
    const [isSaveAvailable, setSaveAvailable] = useState(false);
    const saveChanges = () => {
        dispatch(changeUserAccountInfo({firstName, lastName, birthday, about, avatar}))
        setSaveAvailable(false)
    }
    const onChange = () => {
        setSaveAvailable(true)
    }
    return (
        <TabPanel value={value} tabIndex={index}>
            <div className={classes.container}>
                <TextField
                    label="First Name"
                    value={firstName}
                    onChange={(event) => {
                        onChange()
                        dispatch(changeFirstName(event.target.value))
                    }}
                    fullWidth
                />
                <TextField
                    label="Last Name"
                    value={lastName}
                    onChange={(event) => {
                        onChange()
                        dispatch(changeLastName(event.target.value))
                    }}
                    fullWidth
                />
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
                    <DesktopDatePicker
                        label="Birthday"
                        value={birthday}
                        onChange={(newValue) => {
                            onChange()
                            try {
                                console.log(newValue)
                                const value = newValue.toISOString().split('T')[0]
                                dispatch(changeBirthday(value));
                            } catch (e) {
                                //ignored
                            }
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    label="About me"
                    multiline
                    rows={4}
                    value={about}
                    onChange={(event) => {
                        onChange()
                        dispatch(changeAbout(event.target.value))
                    }}
                    variant="outlined"
                />
                <Button
                    onClick={saveChanges}
                    disabled={!isSaveAvailable && !avatar}
                    className={classes.button}
                    variant={"contained"}>
                    Save
                </Button>
            </div>
        </TabPanel>
    )
}

PersonalTab.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export default PersonalTab;