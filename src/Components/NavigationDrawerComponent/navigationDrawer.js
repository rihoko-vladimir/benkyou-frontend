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
import {useLocation, useNavigate} from "react-router";
import {useState} from "react";
import {
    AccountCircleOutlined,
    ArrowBackOutlined,
    ExpandLessOutlined,
    ExpandMoreOutlined,
    HomeOutlined,
    InfoOutlined,
    SettingsOutlined,
    StarOutlined,
    StarOutlineOutlined
} from "@mui/icons-material";
import useDrawerStyles from "./style";
import {useSelector} from "react-redux";

const NavigationDrawer = () => {
    const classes = useDrawerStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAccountOpen, setAccountOpen] = useState(false);
    const userFirstName = useSelector(state=>state.account.firstName);
    const userLastName = useSelector(state=>state.account.lastName);
    const accountImageUrl = useSelector(state=>state.account.accountImageUrl);
    console.log(`${userFirstName} ${userLastName} ${accountImageUrl}`)
    const accountHandle = () => {
        setAccountOpen(!isAccountOpen);
    }
    let applicationItems = [
        {
            name: "Home",
            icon: <HomeOutlined/>,
            path: "/home"
        },
        {
            name: "My Sets",
            icon: <StarOutlined/>,
            path: "/my-sets"
        },
        {
            name: "All Sets",
            icon: <StarOutlineOutlined/>,
            path: "/all-sets"
        },
        {
            name: "About",
            icon: <InfoOutlined/>,
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

    const navigateToAccountSettings = () => navigate("/account");

    return (
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
                        <Avatar src={accountImageUrl}>
                            <AccountCircleOutlined/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{userFirstName} {userLastName}</ListItemText>
                    {isAccountOpen ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
                </ListItemButton>
                <Collapse in={isAccountOpen} timeout={"auto"} classes={{
                    root: classes.accountMenu,
                }}>
                    <List>
                        <ListItemButton className={classes.accountItems} onClick={navigateToAccountSettings}>
                            <ListItemIcon>
                                <SettingsOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={"Account preferences"}/>
                        </ListItemButton>
                        <ListItemButton className={classes.accountItems}>
                            <ListItemIcon>
                                <ArrowBackOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={"Log out"}/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;