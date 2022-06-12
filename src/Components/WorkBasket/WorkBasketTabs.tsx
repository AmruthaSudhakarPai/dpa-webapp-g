import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WorkbasketHeader from "./WorkbasketHeader";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Card, IconButton } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const useStyles = makeStyles({

  vrTabsHolder: {
    background: "#f1f1f1",
    position: "relative",
  },

  tabsSlideBtnActive: {
    position: "relative",
    height: 40,
    transform: "rotate(90deg)",
    left: "-20px",
    top: 5,
    background: "#fff",
    marginRight: "-28px",
    boxShadow: "0px 3px 6px #00000029",

    "&:hover": {
      background: "#f1f1f1",
    },
  },

  tabsSlideBtn: {
    position: "relative",
    height: 40,
    transform: "rotate(90deg)",
    left: "0px",
    top: 5,
    background: "#fff",
    marginRight: "-28px",
    boxShadow: "0px 3px 6px #00000029",

    "&:hover": {
      background: "#f1f1f1",
    },
  },




  tabs: {
    background: "#fff",
    "& .MuiButtonBase-root.MuiTab-root": {
      color: "#000",
      textAlign: "left !important",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      border: "1px #ffffff solid",
      marginRight: "2px",
    },

    "& .Mui-selected": {
      fontWeight: "bold",
      border: "1px #d6e6cf solid !important",
      borderRadius: "3px",
      color: "#529535 !important",
    },

    "& .MuiTabs-indicator": {
      backgroundColor: "#008BBF",
    },

    "& .MuiTabs-indicator": {
      right: "auto",
      left: "0px",
      width: 5,
      backgroundColor: "#529535",
      borderRadius: "5px",
    },
  },

  tabsPanels: {
    padding: "10px 10px",
    background: "#f1f1f1",
    width: "100%",

  },
  tabsPanelsBox: {
    border: "1px #ccc solid",
    borderRadius: "5px",
    padding: "20px",
    background: "#fff",
  },
  workHeaderBox: {
    fontWeight: 500,
    marginBottom: "10px",
    fontSize: "20px",
    marginBottom: "25px",
    color: "#000",
    "& label": {
      display: "block",
      color: "#707070",
      marginBottom: "0px",
      fontSize: "18px",
      fontWeight: 300,
    },

    "& span": {
      color: "#7fc5df"
    },
  },

  workHeaderBoxTitle: {
    fontWeight: 500,
    marginBottom: "10px",
    fontSize: "20px",
    marginBottom: "25px",
    color: "#003863",
    "& span": {
      height: "2px",
      width: "50px",
      background: "#7fc5df",
      display: "block",
      marginTop: "10px",
      borderRadius: "3px",

    }
  },

  panelInfoCard: {
    padding: "15px 15px 0px 15px",

  },

  panelInfoCardContent: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",

    "& span": {
      fontSize: "12px",
      color: "#ccc",
    },
    "& label": {
      fontSize: "16px",
      color: "#000000",
      fontWeight: "600",
    }
  },

  cardTitle: {
    color: "#008BBF",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: 15,
    "& span": {
      height: "2px",
      background: "#008BBF",
      width: "60px",
      display: "block",
      marginTop: "5px",
    }
  },

  panelInfoCardContentHolder: {
    borderLeft: "1px #ccc solid",
    paddingLeft: "15px",
    height: "90%"
  },


});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [showTabs, setShowTabs] = React.useState(true);
  const [showInternalMedicineDetail, setshowInternalMedicineDetail] = React.useState(false);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        className={classes.vrTabsHolder}
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "calc(100vh - 160px)",
        }}
      >

        {showTabs === true &&
          <Tabs
            className={classes.tabs}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >

            <Tab label="Provider Detail" {...a11yProps(0)} />
            <Tab label="Credentails" {...a11yProps(1)} />
            <Tab label="Org Relationship" {...a11yProps(2)} />
            <Tab label="Servicing & Payment" {...a11yProps(3)} />
            <Tab label="Contracts/Fee Schedule" {...a11yProps(4)} />
            <Tab label="Claim and Reminbursements" {...a11yProps(5)} />
            <Tab label="Notes" {...a11yProps(6)} />
            <Tab label="Documents" {...a11yProps(7)} />
          </Tabs>
        }

        <IconButton onClick={() => setShowTabs(!showTabs)} className={showTabs === true ? classes.tabsSlideBtnActive : classes.tabsSlideBtn}>
          <BarChartIcon style={{ color: "#008BBF" }} />
        </IconButton>
        <TabPanel value={value} index={0} className={classes.tabsPanels}>

          {/* inner code start panel */}
          <Box className={classes.tabsPanelsBox}>
            <Grid container >
              <Grid item md={4}>
                <Box className={classes.workHeaderBoxTitle}>
                  <label>Provider Details</label>
                  <span></span>

                </Box>
              </Grid>
              <Grid item md={4}>
                <Box className={classes.workHeaderBox}>
                  <label>Effective from</label>
                  05/20/2009
                </Box>
              </Grid>
              <Grid item md={4} justifyContent="flex-end" style={{ textAlign: "right", }}>
                <Box className={classes.workHeaderBox}>
                  <label> </label>
                  <Avatar sx={{ width: 80, height: 80, float: "right" }} alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png" />
                </Box>

              </Grid>
            </Grid>



            <Grid container>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>Professional ID</label>
                  P-654987
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>DOB</label>
                  12/05/1988
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>Birth City</label>
                  Westborough,MA.
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>Medicaid #</label>
                  123456
                </Box>
              </Grid>



            </Grid>

            <Grid container>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>Medicare #</label>
                  1234567
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>NPI #</label>
                  123456789.
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>UPIN #</label>
                  1245689
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.workHeaderBox}>
                  <label>Social Security</label>
                  235-25-2356
                </Box>
              </Grid>


            </Grid>

            <Grid container >
              <Grid item md={12}>
                <Box className={classes.workHeaderBoxTitle}>
                  <label>Contact Information</label>
                  <span></span>

                </Box>
              </Grid>


            </Grid>



            <Grid container>
              <Grid item md={6}>
                <Box className={classes.workHeaderBox}>
                  <label>Home Address</label>
                  101 Church Street, Manhattan, NY-10001
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.workHeaderBox}>
                  <label>Phone #</label>
                  <span>210-915-0187</span>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6}>
                <Box className={classes.workHeaderBox}>
                  <label>Alternate Address</label>
                  121 William Street, Manhattan, NY-10007
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.workHeaderBox}>
                  <label>DOB</label>
                  <span>919-232-9090</span>
                </Box>
              </Grid>
            </Grid>


          </Box>
          {/* inner code end panel */}

        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabsPanels}>


          {/* second tab start panel */}
          {showInternalMedicineDetail === false ? <>
            <Card elevation={2} className={classes.panelInfoCard}>
              <Grid container spacing={2}>
                <Grid item md={2}>
                  <Box onClick={() => setshowInternalMedicineDetail(true)} style={{cursor:'pointer'}} className={classes.panelInfoCardContent}>
                    <h3>Internal Medicne</h3>
                  </Box>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Dgree preiod</span>
                    <label>12/06/2022</label>
                  </Box>
                </Grid>
                <Grid item md={6}>

                  <Box className={classes.panelInfoCardContent}>
                    <span>Dgree Name</span>
                    <label>M.D in Sleep Medicne</label>
                  </Box>

                  <Box className={classes.panelInfoCardContent}>
                    <span>Certification </span>
                    <label>American Board of Medical Speatility  (ABMS)</label>
                  </Box>


                </Grid>
                <Grid item md={2}>
                  <div className={classes.panelInfoCardContentHolder}>
                    <div className={classes.cardTitle}>More Info <span></span></div>
                    <Box className={classes.panelInfoCardContent}>
                      <label>Recideanship</label>
                      <label>Intersheep</label>
                      <label>Fellow Ship</label>
                    </Box>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className={classes.panelInfoCardContentHolder}>
                    <div className={classes.cardTitle}>Verification <span></span></div>
                    <Box className={classes.panelInfoCardContent}>
                      <span>Specility</span>
                      <label>Ayana Kelly</label>
                    </Box>
                    <Box className={classes.panelInfoCardContent}>
                      <span>Date & Time</span>
                      <label>21/04/2022 - 22/04/2022</label>
                    </Box>
                  </div>

                </Grid>
              </Grid>
            </Card>

            {/* second tab end panel */}
            <Card elevation={2} sx={{ marginTop: '10px' }} className={classes.panelInfoCard}>
              <Grid container spacing={2}>
                <Grid item md={2}>
                  <Box className={classes.panelInfoCardContent}>
                    <h3>OBGYN</h3>
                  </Box>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree preiod</span>
                    <label>12/06/2022</label>
                  </Box>
                </Grid>
                <Grid item md={6}>

                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Name</span>
                    <label>M.D in Sleep Medicne</label>
                  </Box>

                  <Box className={classes.panelInfoCardContent}>
                    <span>Certification </span>
                    <label>American Board of Medical Speatility  (ABMS)</label>
                  </Box>


                </Grid>
                <Grid item md={2}>
                  <div className={classes.panelInfoCardContentHolder}>
                    <div className={classes.cardTitle}>More Info <span></span></div>
                    <Box className={classes.panelInfoCardContent}>
                      <label>Recideanship</label>
                      <label>Intersheep</label>
                      <label>Fellow Ship</label>
                    </Box>
                  </div>
                </Grid>
                <Grid item md={2}>
                  <div className={classes.panelInfoCardContentHolder}>
                    <div className={classes.cardTitle}>Verification <span></span></div>
                    <Box className={classes.panelInfoCardContent}>
                      <span>Specility</span>
                      <label>Ayana Kelly</label>
                    </Box>
                    <Box className={classes.panelInfoCardContent}>
                      <span>Date & Time</span>
                      <label>21/04/2022 - 22/04/2022</label>
                    </Box>
                  </div>

                </Grid>
              </Grid>
            </Card>
          </> : <>

            <Card elevation={2} sx={{ marginTop: '10px' }} className={classes.panelInfoCard}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Credential</label>
                    <span></span>

                  </Box>

                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Specilality</span>
                    <label>Internal Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Effective Period </span>
                    <label>05/20/2009 - 05/20/2029</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Name </span>
                    <label>M.D. in Sleep Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Profession Training </span>
                    <label>Westborough, MA.</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>License State </span>
                    <label>New York</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Educational Institution </span>
                    <label>New York State University</label>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Education/Training</label>
                    <span></span>

                  </Box>

                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Degree Info</label>
                    <span></span>

                  </Box>


                </Grid>

                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Name </span>
                    <label>NYU Medical School</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Address </span>
                    <label>550 1st Ave. New York, NY-10016</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Awarded </span>
                    <label>M.D. in Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
              </Grid>


              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Residential Info</label>
                    <span></span>

                  </Box>


                </Grid>
                <Grid item md={6}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Fellowship Info</label>
                    <span></span>

                  </Box>


                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Department </span>
                    <label>General Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Degree Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Department </span>
                    <label>General Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Fellowship Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
              </Grid>


              <Grid container spacing={2}>
                <Grid item md={6}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Board Certificate</label>
                    <span></span>

                  </Box>


                </Grid>
                <Grid item md={6}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Award</label>
                    <span></span>

                  </Box>


                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Certification </span>
                    <label>General Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Certification Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Name </span>
                    <label>Lasker Award</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Organization Name </span>
                    <label>Albert Lasker Foundation</label>
                  </Box>
                </Grid>

                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Award Date</span>
                    <label>12/13/2009</label>
                  </Box>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Award Date</span>
                    <label>12/13/2009</label>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>Internship Info</label>
                    <span></span>

                  </Box>


                </Grid>
              
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Department </span>
                    <label>General Medicine</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Internship Period </span>
                    <label>07/31/1999 - 07/31/2001</label>
                  </Box>
                </Grid>
              
              </Grid>

              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Box className={classes.workHeaderBoxTitle}>
                    <label>HF Crendential Details</label>
                    <span></span>

                  </Box>


                </Grid>

                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Credential Specialist</span>
                    <label>Ayana Kelly</label>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className={classes.panelInfoCardContent}>
                    <span>Verification Date and Time </span>
                    <label>07/31/1999  12:30:21</label>
                  </Box>
                </Grid>
                <Grid item md={6}></Grid>
                <Grid item md={6}>
                  <Box className={classes.panelInfoCardContent}>

                    <label>National Plan And Provider Enumeration System (NPPES) <sup><CheckCircleIcon color='success' /></sup></label>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box className={classes.panelInfoCardContent}>

                    <label>Office of Inspector General (OIG)</label>
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box className={classes.panelInfoCardContent}>

                    <label>New York State Education Department(NYSED)  <sup><CheckCircleIcon color='success' /></sup></label>
                  </Box>
                </Grid>
              
              </Grid>
            </Card>
          </>}
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabsPanels}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabsPanels}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabsPanels}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabsPanels}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6} className={classes.tabsPanels}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7} className={classes.tabsPanels}>
          Item Eight
        </TabPanel>
      </Box>
    </>
  );
}
