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
import useDrawerStyles from "../style";
import PropTypes from "prop-types";

const applicationItems = [
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

const NavigationDrawerContent = (props) => {
    const classes = useDrawerStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [isAccountOpen, setAccountOpen] = useState(false);
    const accountHandle = () => {
        setAccountOpen(!isAccountOpen);
    }
    applicationItems.map(element => {
        Object.assign(element, {
            isSelected: location.pathname.includes(element.path)
        })
        return element;
    })
    const handleMenuClick = (path) => {
        navigate(path);
    };

    const navigateToAccountSettings =
        () => navigate("/account");

    return (
        <Drawer variant={"permanent"}
                anchor={"left"}
                className={classes.drawerClass}
                classes={{
                    paper: classes.paper,
                }}>
            <Toolbar>
                <Typography
                    noWrap
                    component="h5">
                    勉強！
                </Typography>
            </Toolbar>
            <List>
                {applicationItems.map(
                    (element) =>
                    <ListItemButton
                        selected={element.isSelected}
                        key={element.name}
                        classes={{
                        container: classes.itemContainer
                    }}
                        onClick={() => handleMenuClick(element.path)}>
                        <ListItemIcon>
                            {element.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {element.name}
                        </ListItemText>
                    </ListItemButton>
                )}
            </List>
            <Divider
                sx={
                {
                    borderBottomColor: hexToRgb("#70797B"),
                    marginLeft: '20px',
                    marginRight: '20px',
                }
            }/>
            <List>
                <ListSubheader
                    className={classes.accountHeader}>
                    Account
                </ListSubheader>
                <ListItemButton
                    onClick={accountHandle}
                    selected={isAccountOpen}>
                    <ListItemAvatar>
                        <Avatar
                            src={props.accountImage}>
                            <AccountCircleOutlined/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        {props.accountFirstName} {props.accountLastName}
                    </ListItemText>
                    {isAccountOpen
                        ? <ExpandLessOutlined/>
                        : <ExpandMoreOutlined/>}
                </ListItemButton>
                <Collapse
                    in={isAccountOpen}
                    timeout={"auto"}
                    classes={{
                    root: classes.accountMenu,
                }}>
                    <List>
                        <ListItemButton
                            className={classes.accountItems}
                            onClick={navigateToAccountSettings}>
                            <ListItemIcon>
                                <SettingsOutlined/>
                            </ListItemIcon>
                            <ListItemText
                                primary={"Account preferences"}/>
                        </ListItemButton>
                        <ListItemButton
                            className={classes.accountItems}>
                            <ListItemIcon>
                                <ArrowBackOutlined/>
                            </ListItemIcon>
                            <ListItemText
                                primary={"Log out"}/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

NavigationDrawerContent.propTypes = {
    accountFirstName: PropTypes.string.isRequired,
    accountLastName: PropTypes.string.isRequired,
    accountImage: PropTypes.string.isRequired,
}

export default NavigationDrawerContent;