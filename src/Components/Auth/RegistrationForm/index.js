import useStyle from "./style";
import {Step, StepLabel, Stepper, Typography} from "@mui/material";
import UsernameComponent from "./Steps/UsernameStep";
import PasswordComponent from "./Steps/PasswordStep";
import TermsComponent from "./Steps/TermsStep";
import EmailConfirmationComponent from "./Steps/EmailConfirmation";
import {useSelector} from "react-redux";

const RegistrationComponent = () => {
    const classes = useStyle();
    const currentStep = useSelector(state => state.registration.step);
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
                ? (<UsernameComponent/>)
                : currentStep === 1
                    ? (<PasswordComponent/>)
                    : currentStep === 2
                        ? (<TermsComponent/>)
                        : currentStep === 3
                            ? (<EmailConfirmationComponent/>)
                            : null
            }
        </div>
    )
}

export default RegistrationComponent;