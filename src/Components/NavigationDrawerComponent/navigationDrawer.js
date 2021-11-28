import {
    Avatar,
    Collapse,
    Divider,
    Drawer,
    hexToRgb,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    StyledEngineProvider,
    Toolbar,
    Typography
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import {useLocation, useNavigate} from "react-router";
import avatar from "./photo_2021-11-26_10-46-42.jpg";
import {useState} from "react";
import {ExitToApp, ExpandLess, ExpandMore, Settings} from "@mui/icons-material";
import useDrawerStyles from "./style";

const NavigationDrawer = () => {
    const classes = useDrawerStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAccountOpen, setAccountOpen] = useState(false);
    const accountHandle = () => {
        setAccountOpen(!isAccountOpen);
    }
    let applicationItems = [
        {
            name: "Home",
            icon: <HomeIcon/>,
            path: "/home"
        },
        {
            name: "My Sets",
            icon: <StarIcon/>,
            path: "/my-sets"
        },
        {
            name: "All Sets",
            icon: <StarOutlineIcon/>,
            path: "/all-sets"
        },
        {
            name: "About",
            icon: <InfoIcon/>,
            path: "/about"
        }
    ];
    applicationItems.map(element => {
        Object.assign(element, {
            isSelected: location.pathname.includes(element.path)
        })
        return element;
    })
    const handleMenuClick = (path) => {
        navigate(path);
    };
    return (
        <StyledEngineProvider injectFirst>
            <Drawer variant={"permanent"} anchor={"left"} className={classes.drawerClass}
                    classes={{
                        paper: classes.paper,
                    }}>
                <Toolbar>
                    <Typography noWrap component="h5">
                        勉強！
                    </Typography>
                </Toolbar>
                <List>
                    {applicationItems.map((element) =>
                        <ListItemButton selected={element.isSelected} key={element.name} classes={{
                            container: classes.itemContainer
                        }} onClick={() => handleMenuClick(element.path)}>
                            <ListItemIcon>{element.icon}</ListItemIcon>
                            <ListItemText>{element.name}</ListItemText>
                        </ListItemButton>
                    )}
                </List>
                <Divider sx={
                    {
                        borderBottomColor: hexToRgb("#70797B"),
                        marginLeft: '20px',
                        marginRight: '20px',
                    }
                }/>
                <List>
                    <ListSubheader className={classes.accountHeader}>Account</ListSubheader>
                    <ListItemButton onClick={accountHandle} selected={isAccountOpen}>
                        <ListItemAvatar>
                            <Avatar src={avatar}/>
                        </ListItemAvatar>
                        <ListItemText>Vladimir Kozlovsky</ListItemText>
                        {isAccountOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={isAccountOpen} timeout={"auto"} classes={{
                        root: classes.accountMenu,
                    }}>
                        <List>
                            <ListItemButton className={classes.accountItems}>
                                <ListItemIcon>
                                    <Settings/>
                                </ListItemIcon>
                                <ListItemText primary={"Account preferences"}/>
                            </ListItemButton>
                            <ListItemButton className={classes.accountItems}>
                                <ListItemIcon>
                                    <ExitToApp/>
                                </ListItemIcon>
                                <ListItemText primary={"Log out"}/>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </StyledEngineProvider>
    );
};

export default NavigationDrawer;