import useStyle from "./style";
import {Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UsernameComponent from "./Steps/UsernameStep";
import PasswordComponent from "./Steps/PasswordStep";
import TermsComponent from "./Steps/TermsStep";
import EmailConfirmationComponent from "./Steps/EmailConfirmation";
import * as actions from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const RegistrationComponent = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const [currentStep, setCurrentStep] = useState(0);
    const previousStepCallback = () => {
        setCurrentStep(currentStep - 1);
    }
    const onCancelClickListener = () => navigate("/auth");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const nextStepCallback = () => {
        if (currentStep === 2) {
            dispatch(actions.register({userName: username, email, firstName, lastName, password, isTermsAccepted: true}))
        } else {
            setCurrentStep(currentStep + 1);
        }
    };
    const register = useSelector(state => state.register);
    useEffect(()=>()=>{
        if (register.success){
            setCurrentStep(3)
        }}, [register])
    return (
        <div>
            <Typography variant={"h4"}>Registration</Typography>
            <Stepper orientation={"horizontal"} className={classes.stepper} activeStep={currentStep}>
                <Step>
                    <StepLabel>Email</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Password</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Terms</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Confirmation</StepLabel>
                </Step>
            </Stepper>
            {currentStep === 0
                ? (<UsernameComponent cancelClickListener={onCancelClickListener}
                                      emailCallback={setEmail}
                                      usernameCallback={setUsername}
                                      nextClickListener={nextStepCallback}
                                      email={email}
                                      username={username}
                                      firstName={firstName}
                                      firstNameCallback={setFirstName}
                                      lastName={lastName}
                                      lastNameCallback={setLastName}/>)
                : currentStep === 1
                    ? (<PasswordComponent previousClickListener={previousStepCallback}
                                          nextClickListener={nextStepCallback}
                                          passwordCallback={setPassword}
                                          password={password}
                    />)
                    : currentStep === 2
                        ? (<TermsComponent nextClickListener={nextStepCallback}
                                           previousClickListener={previousStepCallback}/>)
                        : currentStep === 3
                            ? (<EmailConfirmationComponent email={email}/>)
                            : null
            }
        </div>
    )
}

export default RegistrationComponent;