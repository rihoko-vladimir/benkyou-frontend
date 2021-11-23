import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoIcon from '@mui/icons-material/Info';

const NavigationDrawer = () => {
    let applicationItems = [<ListItem>
        <ListItemIcon>
            <HomeIcon/>
            <ListItemText primary={"Home"}/>
        </ListItemIcon>
    </ListItem>,
        <ListItem>
            <ListItemIcon>
                <StarIcon/>
                <ListItemText primary={"My sets"}/>
            </ListItemIcon>
        </ListItem>,
        <ListItem>
            <ListItemIcon>
                <StarOutlineIcon/>
                <ListItemText primary={"All sets"}/>
            </ListItemIcon>
        </ListItem>,
        <ListItem>
            <ListItemIcon>
                <InfoIcon/>
                <ListItemText primary={"Info"}/>
            </ListItemIcon>
        </ListItem>
    ];
    return (<Drawer variant={"permanent"} anchor={"left"} sx={
        {
            width:"20%",
        }
    }>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                勉強！
            </Typography>
        </Toolbar>
        <Divider/>
        <List>
            {applicationItems}
        </List>
        <Divider/>

    </Drawer>);
};

export default NavigationDrawer;