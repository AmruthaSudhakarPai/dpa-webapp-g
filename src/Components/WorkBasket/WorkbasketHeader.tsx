import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
  workHeaderBoxHolder: {
      width:"100%",
      padding:"20px 20px",
  },

  workHeaderBox:{
    fontWeight:500,
    fontSize:"20px",
    color:"#000",
    "& label":{
      display:"block",
      color:"#707070",
      marginBottom:"5px",
      fontSize:"18px",
      fontWeight:300,
    },
  },
 
});



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function WorkbasketHeader() {
  const classes = useStyles();
  return (

<>
<Box className={classes.workHeaderBoxHolder}>
  <Grid container>
    <Grid item xs={12} sm={12} md={7} style={{display:"flex",}} justifyContent="space-evenly" alignItems="flex-start" >
      <Box className={classes.workHeaderBox}>
        <label>Prefix</label>
        Mr.
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>First Name</label>
        Rondey
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>Middle Name</label>
        Becker
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>Last Name</label>
       White
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>Stuffs</label>
       Jr.
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>Tittle Code</label>
        MD.
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>Sex</label>
        Male
      </Box>
      <Box className={classes.workHeaderBox}>
        <label>License</label>
        #1223456
      </Box>



    </Grid>
    <Grid item xs={12}   sm={12}  md={5}  spacing={2}>
      <Grid container>
        <Grid item xs={12} md={5} justifyContent="flex-end"> <TextField fullWidth  label="License" style={{width:"95%"}}  size="small"  /> </Grid>  
        <Grid item xs={12} md={5} justifyContent="flex-end"><TextField fullWidth  label="License" style={{width:"95%"}} size="small"  /> </Grid>  
        <Grid item xs={12} md={2} style={{ textAlign:"right",}}>
        <IconButton color="primary" >
                    <EditIcon style={{ fontSize: "25px" }} />
                </IconButton>
        </Grid>  
      </Grid>
    </Grid>
  </Grid>
</Box>

    
    </>
  );
}

