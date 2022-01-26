import useStyle from "./style";
import {Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router";
import UsernameComponent from "../UsernameStepComponent/username";
import PasswordComponent from "../PasswordStepComponent/password";
import TermsComponent from "../TermsStep/terms";
import EmailConfirmationComponent from "../EmailConfirmationComponent/emailConfirmation";

const RegistrationComponent = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const [currentStep, setCurrentStep] = useState(0);
    const nextStepCallback = () => {
        setCurrentStep(currentStep + 1);
    };
    const previousStepCallback = () => {
        setCurrentStep(currentStep - 1);
    }
    const onCancelClickListener = () => navigate("/auth");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
                                      username={username}/>)
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