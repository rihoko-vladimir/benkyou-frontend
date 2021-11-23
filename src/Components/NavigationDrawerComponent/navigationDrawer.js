import {
    Divider,
    Drawer,
    hexToRgb,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';

let drawerWidth = 270;

const NavigationDrawer = () => {
    let applicationItems = [
        {
            name: "Home",
            icon: <HomeIcon/>,
        },
        {
            name: "My Sets",
            icon: <StarIcon/>,
        },
        {
            name: "All Sets",
            icon: <StarOutlineIcon/>,
        },
        {
            name: "About",
            icon: <InfoIcon/>
        }
    ];
    return (
        <Drawer variant={"permanent"} anchor={"left"}
                sx={
                    {
                        width: drawerWidth,
                        '.MuiPaper-root': {
                            width: drawerWidth,
                            background: hexToRgb("#0068740D"),
                            borderRadius: '16px',
                        },
                    }
                }
        >
            <Toolbar>
                <Typography noWrap component="h5">
                    勉強！
                </Typography>
            </Toolbar>
            <List>
                {applicationItems.map((element) =>
                    <ListItem button key={element.name}>
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText>{element.name}</ListItemText>
                    </ListItem>
                )}
            </List>
            <Divider sx={
                {
                    borderBottomColor: hexToRgb("#70797B"),
                    marginLeft:'20px',
                    marginRight:'20px',
                }
            }/>
            <Toolbar>
                <Typography nowrap component="h1">
                    Account
                </Typography>
            </Toolbar>
        </Drawer>);
};

export default NavigationDrawer;