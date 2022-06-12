import { Drawer as  MuiDrawer, Divider, Box, IconButton,List } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mainListItems } from './../ListItems';
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerWidth }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const HeaderDrawer = ({drawerWidth}) => {
    return (
        <Drawer variant="permanent" sx={{
            width: drawerWidth,
            flexShrink: 0,
            marginTop: 8,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: '#003863' },

        }}>

            <Divider />
            <List sx={{ color: 'white' }} component="nav">
                {mainListItems}
            </List>

            <Box style={{ textAlign: "center", position: "absolute", width: "100%", bottom: 0 }}>
                <IconButton>
                    <InfoOutlinedIcon style={{ color: "#ffffff", fontSize: 35 }} />
                </IconButton>
                <IconButton>
                    <EmailOutlinedIcon style={{ color: "#ffffff", fontSize: 35 }} />
                </IconButton>
            </Box>
        </Drawer>
    )
}
export default HeaderDrawer;