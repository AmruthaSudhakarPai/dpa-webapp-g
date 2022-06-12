import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { makeStyles } from '@mui/styles';
import bgMainImage from '../Content/images/mainBG.jpg';

import { useRouter } from 'next/router';
import Copyright from './Copyright';
import HeaderAppBar from './Header/HeaderAppBar';
import HeaderDrawer from './Header/HeaderDrawer';

const useStyles = makeStyles({
    footer: {
        position: "fixed",
        width: "100%",
        padding: "5px 0px",
        textAlign: "center",
        bottom: "0px",
    },
    mainContainerBg: {
        backgroundImage: `url(${bgMainImage.src})`,
        backgroundRepeat: " no-repeat",
        backgroundPosition: "right bottom",
    }
});

const drawerWidth = 220;
const mdTheme = createTheme();

const Header: React.FC = ({ children }) => {

    const classes = useStyles();
    const router = useRouter();
    const [padding, setPadding] = React.useState('200px');

    const paddingValue = () => {
        router.pathname === '/' ? setPadding('200px') : setPadding('0px');
    }
    React.useEffect(() => {
        paddingValue();
    }, [router.pathname])
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <HeaderAppBar drawerWidth={drawerWidth} />
                <HeaderDrawer drawerWidth={drawerWidth} />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? "#fff"
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    
                    }}
                >
                    <Toolbar />
                    <Container maxWidth='false' >
                        <Grid className={router.pathname === '/' ? classes.mainContainerBg : ''} container
                            spacing={3}
                            direction="column"
                            mt={1}
                            alignContent="center"
                            justifyContent={'flex-start'}
                            style={{ minHeight: '92vh', paddingTop: padding, }}
                        >
                            {children}

                        </Grid>
                    </Container>
                    <Copyright className={classes.footer} />

                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default Header;