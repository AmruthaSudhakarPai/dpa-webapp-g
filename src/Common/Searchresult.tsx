import * as React from 'react';
import { Box, Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router'


const useStyles = makeStyles({


    searchResultHolder: {
        border: "1px #529535 solid",
        borderRadius: "20px",
        padding: '15px 4px ',
        position: "absolute",
        left: "0px",
        top: "calc(100% + 2px)",
        maxHeight: "400px",
        width: "100%",
        overflow: "auto",
    },





    searchResulTtle: {
        color: "#003863",
        opacity: "0.5",
        fontWeight: 600,
        borderBottom: "1px #ccc solid",
        borderTop: "1px #ccc solid",
        padding: "12px 0px",
        fontSize: "16px",

        "&:first-child": {
            borderTop: "0px #ccc solid",
        },

        "& div": {
            paddingLeft: "15px",
            paddingRight: "15px"
        },
    },

    searchResult: {
        color: "#000000",
        padding: "12px 0px",
        fontSize: "18px",

        "& div": {
            paddingLeft: "15px",
            paddingRight: "15px"
        },


    }




});



export default function Searchbar() {
    const classes = useStyles();
    const router = useRouter();
    return (
        <>
            <Box elevation={0} className={classes.searchResultHolder}  >
                {/*----- start loop here ------------ */}
                <Grid container className={classes.searchResultInner}>
                    <Grid item xs="12" className={classes.searchResulTtle} >
                        <Grid container>
                            <Grid items xs="4" ms="4" >Phone No.</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right", cursor: "pointer" }}>
                                <Grid container>
                                    <Grid items xs="4" ms="4">
                                        <div onClick={() => router.push('/Table')}>
                                            Facility - 50 </div>||
                                    </Grid>
                                    <Grid pl={-2} items xs="4" ms="4" >
                                        <div onClick={() => router.push('/Table')}>
                                            Organization - 129</div> ||
                                    </Grid>
                                    <Grid pl={-2} items xs="4" ms="4" >
                                        <div onClick={() => router.push('/Table')}>
                                            Professional - 1
                                        </div>
                                    </Grid>
                                </Grid></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {/*----- end loop here ------------ */}

                {/*----- start loop here ------------ */}
                <Grid container className={classes.searchResultInner} style={{ borderTop: "1px #ccc solid", marginTop: "10px" }}>
                    <Grid item xs="12" className={classes.searchResulTtle} >
                        <Grid container>
                            <Grid items xs="4" ms="4" >Phone No.</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right", cursor: "pointer" }}>
                                <Grid container>
                                    <Grid items xs="4" ms="4">
                                        <div onClick={() => router.push('/Table')}>
                                            Facility - 50 </div>||
                                    </Grid>
                                    <Grid pl={-2} items xs="4" ms="4" >
                                        <div onClick={() => router.push('/Table')}>
                                            Organization - 129</div> ||
                                    </Grid>
                                    <Grid pl={-2} items xs="4" ms="4" >
                                        <div onClick={() => router.push('/Table')}>
                                            Professional - 1
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs="12" className={classes.searchResult}>
                        <Grid container>
                            <Grid items xs="4" ms="4">512-123-9876</Grid>
                            <Grid items xs="8" ms="8" style={{ textAlign: "right" }}>Facility - 50 || Organization - 129 || Professional - 1</Grid>
                        </Grid>
                    </Grid>

                </Grid>
                {/*----- end loop here ------------ */}

            </Box>
        </>
    );
}
