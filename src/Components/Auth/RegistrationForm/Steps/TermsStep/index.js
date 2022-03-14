import {useEffect, useState} from "react";
import {Button, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../../../Redux/actions";

const TermsComponent = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const [isAgreementConfirmed, setIsAgreementConfirmed] = useState(false);
    const [isAgreementError, setAgreementError] = useState(false);
    const registrationStep = useSelector(state => state.registration.step);
    const userName = useSelector(state => state.registration.userName);
    const email = useSelector(state => state.registration.email);
    const firstName = useSelector(state => state.registration.firstName);
    const lastName = useSelector(state => state.registration.lastName);
    const password = useSelector(state => state.registration.password);
    const next = () => {
        if (!isAgreementConfirmed) {
            setAgreementError(true);
            return;
        }
        dispatch(actions.register({userName, email, firstName, lastName, password, isTermsAccepted: true}))
    }
    const isLoading = useSelector(state => state.isLoading);
    const register = useSelector(state => state.register);
    const registrationResult = useSelector(state => state.register)
    useEffect(()=>{
        if (registrationResult.success === true)
            dispatch(actions.setRegistrationStep(registrationStep+1))
        else if (registrationResult.success === false){
            console.log("Account already exists")
        }
    }, [registrationResult])
    return <div className={classes.registrationForm}>
        <div className={classes.checkboxAndAgreement}>
            <div className={classes.agreement}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores incidunt ipsum. Ad error
                    iure nobis pariatur similique. At aut et impedit in magnam modi nostrum ratione unde veniam vitae.
                </p>
            </div>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={isAgreementConfirmed}
                                                     onChange={() => {
                                                         setIsAgreementConfirmed(!isAgreementConfirmed)
                                                         setAgreementError(false);
                                                     }} color={isAgreementError ? "error" : "primary"} disabled={isLoading}/>}
                                  label={<Typography variant={"subtitle1"} color={isAgreementError ? "red" : "black"}>
                                      I agree with all terms, listed above</Typography>}/>
            </FormGroup>
            {!register.success === false? <Typography variant={"subtitle1"} color={"red"}>{register.message}</Typography> : null }
        </div>
        <div className={classes.buttons}>
            <Button startIcon={<ArrowBackIcon/>} variant={"outlined"}
                    onClick={()=>dispatch(actions.setRegistrationStep(registrationStep-1))} disabled={isLoading}>Previous</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next} disabled={isLoading}>Next</Button>
        </div>
    </div>
}

export default TermsComponent;