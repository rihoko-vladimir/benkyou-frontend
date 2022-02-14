import {useState} from "react";
import {Button, Checkbox, FormControlLabel, FormGroup, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyle from "./style";
import PropTypes from "prop-types";

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
                                                     }} color={isAgreementError ? "error" : "primary"}/>}
                                  label={<Typography variant={"subtitle1"} color={isAgreementError ? "red" : "black"}>
                                      I agree with all terms, listed above</Typography>}/>
            </FormGroup>
        </div>
        <div className={classes.buttons}>
            <Button startIcon={<ArrowBackIcon/>} variant={"outlined"}
                    onClick={props.previousClickListener}>Previous</Button>
            <Button endIcon={<ArrowForwardIcon/>} variant={"contained"} onClick={next}>Next</Button>
        </div>
    </div>
}

TermsComponent.propTypes = {
    previousClickListener: PropTypes.func.isRequired,
    nextClickListener: PropTypes.func.isRequired,
}

export default TermsComponent;