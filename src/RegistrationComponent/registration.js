import useStyle from "./style";
import {Button, Step, StepLabel, Stepper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from "react-router";

const RegistrationComponent = () => {
    const navigate = useNavigate();
    const classes = useStyle();
    const [currentStep, setCurrentStep] = useState(0);
    const onCancelClickListener = ()=>navigate("/");
    return (
        <div>
            <Typography variant={"h4"}>Registration</Typography>
            <Stepper orientation={"horizontal"} className={classes.stepper} activeStep={currentStep}>
                <Step>
                    <StepLabel>Username and Email</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Password</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Terms</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Preferences</StepLabel>
                </Step>
            </Stepper>
            {currentStep === 0
                ? <div className={classes.registrationForm}>
                    <TextField fullWidth variant={"outlined"} label={"Username"}
                               placeholder={"Your creative Username"}/>
                    <TextField fullWidth variant={"outlined"} label={"Email"} placeholder={"youremail@mail.com"}/>
                    <div className={classes.buttons}>
                        <Button startIcon={<CloseIcon/>} variant={"outlined"} onClick={onCancelClickListener}>Cancel</Button>
                        <Button endIcon={<ArrowForwardIcon/>} variant={"contained"}>Next</Button>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default RegistrationComponent;