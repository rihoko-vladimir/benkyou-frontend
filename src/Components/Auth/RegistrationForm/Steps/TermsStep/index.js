import {useState} from "react";
import {Button, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

const TermsComponent = (props) => {
    const classes = useStyle();
    const [isAgreementConfirmed, setIsAgreementConfirmed] = useState(false);
    const [isAgreementError, setAgreementError] = useState(false);
    const next = () => {
        if (!isAgreementConfirmed) {
            setAgreementError(true);
            return;
        }
        props.nextClickListener()
    }
    const isLoading = useSelector(state => state.isLoading);
    const register = useSelector(state => state.register);
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
            {!register.success? <Typography variant={"subtitle1"} color={"red"}>{register.payload}</Typography> : null }
        </div>
        <div className={classes.buttons}>
            <Button startIcon={<ArrowBackIcon/>} variant={"outlined"}
                    onClick={props.previousClickListener} disabled={isLoading}>Previous</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next} disabled={isLoading}>Next</Button>
        </div>
    </div>
}

TermsComponent.propTypes = {
    previousClickListener: PropTypes.func.isRequired,
    nextClickListener: PropTypes.func.isRequired,
}

export default TermsComponent;