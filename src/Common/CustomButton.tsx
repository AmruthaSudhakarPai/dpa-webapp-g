import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  searchBtn: {
    padding:"5px 45px 5px 25px",
    height:"40px",
    textTransform:"none",
    borderRadius: 20, 
    border:"1px #529535 solid",
    background:"#529535",
    position:"relative",
    fontSize:"16px",
    color:"#fff",
    minWidth:130,
    textAlign:"center",
    "&:hover":{
      background:"#458429", 
  },
    "& .MuiButton-endIcon ":{
      padding:" 5px 5px",
      background: "#D4E4CC",
      borderRadius: "50px",
      color: "#529535",
      position:"absolute",
      height:40,
      width:40,
      right:0,
      top:0,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
  },
  },

  resetBtn: {
    padding:"5px 45px 5px 25px",
    height:"40px",
    textTransform:"none",
    borderRadius: 20,
    minWidth:130,
    fontSize:"16px",
    border:"1px #EA4040 solid",
    color:"#000",
    background:"#fff",
    textAlign:"center",
    position:"relative",
    "&:hover":{
      background:"#FAA3A3", 
  },
    "& .MuiButton-endIcon ":{
      padding:" 5px 5px",
      background: "#fff",
      borderRadius: "50px",
      color: "#EA4040",
      border:"1px #EA4040 solid",
      height:40,
      width:40,
      position:"absolute",
      right:0,
      top:0,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
  },
  },

 


});


export default function CustomButton() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="contained" className={classes.resetBtn} endIcon={<CancelIcon />}>
        Reset
      </Button>
      <Button variant="contained" className={classes.searchBtn} endIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}