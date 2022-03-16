import {Alert, AlertTitle, Button, Collapse, IconButton, Typography} from "@mui/material";
import useStyle from "./style";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createSet} from "../../../Redux/actions";
import {starterSets} from "../../../Data/defaultSetInfo";

const HomePageContent = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const userSets = useSelector(state => state.myCards);
    const [open,setOpen] = useState(userSets.length===0);
    const addDefaultSets = () =>{
        starterSets.forEach(set => dispatch(createSet(set)))
    }
    return (
        <div
            className={classes.homePageContainer}>
            <Typography
                variant={"h4"}>
                Welcome to the 勉強！
            </Typography>
            <p>Easy and convenient service to learn kanji! Create your own sets, share it with friends, search for pre-made sets or public sets of other users</p>
            <Timeline position={"right"} sx={{
                "& .MuiTimelineContent-root": {
                    flex: 1000
                }
            }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={"success"}>
                                <StarOutlineIcon/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Go to <a href={"#"}>My Sets</a> page</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={"info"}>
                            <AddIcon/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Create new set</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={"secondary"}>
                            <SchoolIcon/>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>Study!</TimelineContent>
                </TimelineItem>
            </Timeline>
            <Collapse in={open}>
                <Alert
                    severity={"info"}
                    icon={<SchoolIcon/>}
                    action={
                    <div>
                        <Button
                            size="small"
                            onClick={() => {
                                setOpen(false);
                                addDefaultSets();
                            }}>
                            Add
                        </Button>
                        <IconButton
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}>
                            <CloseIcon/>
                        </IconButton>
                    </div>}>
                    <AlertTitle>Starter pack</AlertTitle>
                    We found that you don't have any sets yet. Do you want to add starter sets?
                </Alert>
            </Collapse>
        </div>);
}

export default HomePageContent;