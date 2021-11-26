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
    Toolbar,
    Typography
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';
import {makeStyles} from "@mui/styles";
import {useLocation, useNavigate} from "react-router";
import avatar from "./photo_2021-11-26_10-46-42.jpg";
import {useState} from "react";
import {ExitToApp, ExpandLess, ExpandMore, Settings} from "@mui/icons-material";

let drawerWidth = 270;

const useDrawerStyles = makeStyles({
    drawerClass: {
        width: drawerWidth,
    },
    paper: {
        background: hexToRgb("#eef6f6"),
        width: drawerWidth,
        borderRadius: "16px"
    },
    itemContainer: {
        margin: '8px',
    },
    root: {
        background: "transparent"
    },
    accountMenu:{
        backgroundColor: "rgba(0,0,0,0.07)",
    }

});

const NavigationDrawer = (props) => {
    const classes = useDrawerStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAccountOpen, setAccountOpen] = useState(false);
    const accountHandle = ()=>{
        setAccountOpen(!isAccountOpen);
    }
    console.log(location.pathname);
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
        <Drawer variant={"permanent"} anchor={"left"} className={classes.drawerClass}
                classes={{
                    paper: classes.paper,
                    root: classes.root
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
                <ListSubheader className={classes.root}>Account</ListSubheader>
                <ListItemButton onClick={accountHandle}>
                    <ListItemAvatar>
                        <Avatar src={avatar}/>
                    </ListItemAvatar>
                    <ListItemText>Vladimir Kozlovsky</ListItemText>
                    {isAccountOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={isAccountOpen} timeout={"auto"} classes={{
                    root:classes.accountMenu,
                }}>
                    <List>
                        <ListItemButton>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary={"Account preferences"}/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ExitToApp/>
                            </ListItemIcon>
                            <ListItemText primary={"Log out"}/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>);
};

export default NavigationDrawer;