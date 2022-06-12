import React from 'react';
import { Settings, Notifications, InsertDriveFile, Person } from '@mui/icons-material';
import Image from 'next/image'
import Logo from './../../Content/images/logo.png';
import { Typography, Badge, Box, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Searchbar from './../Searchbar';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    drawerWidth: number;
}

interface HeaderAppBarProps {
    drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const useStyles = makeStyles({
    headerAppbar: {
        padding: "0px 0px",
        "& .MuiToolbar-root": {
            paddingLeft: "0px",
            paddingRight: "0px",
        },

    },

    toolbarBtn: {
        borderRadius: 0,
        height: "100%",
        margin: "0px 2px",
        minWidth: "55px",
        minHeight: "70px",
        padding: "5px 10px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",

        "&:hover": {
            background: "#76A960",

        }
    },
    toolbarUsername: {
        fontSize: "16px",
        fontWeight: "600",

    },
    toolbaruserlabel: {
        fontSize: "13px",
        display: "block",
        width: "100%",

    },

    logoHolder: {
        background: "#fff",
        textAlign: "center",
        "& img": {
            maxWidth: "100%",
            maxHeight: "70px",

        }

    }


});
const HeaderAppBar = ({ drawerWidth }: HeaderAppBarProps) => {
    const classes = useStyles();
    const [showHcp, setShowHcp] = React.useState(false);
    const router = useRouter();
    const getHeader = () => {
        if (typeof window !== 'undefined') {
            return router.pathname !== '/' ? <Searchbar setShowHcp={setShowHcp} /> : "Welcome to Provider Atlas"
        }
    }

    return (
        <AppBar className={classes.headerAppbar} drawerWidth={drawerWidth} sx={{ background: '#529535E6' }} position="absolute" elevation={0} >
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Box className={classes.logoHolder} style={{ width: drawerWidth }}>
                    <Image src={Logo} />
                </Box>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    ml={2}
                    sx={{ flexGrow: 2, fontSize: "22px" }}
                >
                    {getHeader()}

                </Typography>
                <Box>


                </Box>
                <Box>
                    <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                        <Badge badgeContent={4} color="secondary">
                            <Notifications />
                        </Badge>
                        <span style={{ fontSize: "8px", paddingTop: 5, }}>Notification</span>
                    </IconButton>
                </Box>
                <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                    <InsertDriveFile />
                    <span style={{ fontSize: "8px", paddingTop: 5, }}>Transections</span>
                </IconButton>
                <IconButton className={classes.toolbarBtn} color="inherit" style={{ flexDirection: "column", display: "flex", }}>
                    <Settings />
                    <span style={{ fontSize: "8px", paddingTop: 5, }}>Setting</span>
                </IconButton>
                <IconButton className={classes.toolbarBtn} color="inherit" style={{ marginRight: "20px" }}>
                    <Person style={{ background: "#76A960", borderRadius: 100, padding: "5px", marginRight: "10px", fontSize: "35px" }} />
                    <div className={classes.toolbarUsername}> Aditiya<span className={classes.toolbaruserlabel}>Dataops</span>  </div>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default HeaderAppBar;