import React from "react";
import  AppBar from "@mui/material/AppBar";
import  Grid from "@mui/material/Grid";
import  Paper  from "@mui/material/Paper";
import Tab from '@mui/material/Tab';
import Tabs from "@mui/material/Tabs";
import "./LoginContainer-style.css"
import Signin from "./Signin.jsx"
import SignUp from "./SignUp.jsx"

//const LoginContainer =() =>{
export default function LoginContainer(){  
    const [value, setValue] = React.useState(0)
    const handleTabs = (e,val) => {
        console.warn (val)
        setValue(val)
   }   
    return(
   
        <Grid>
            <Paper elevation={10} className ="paperStyle" >
                <AppBar position="static" className ="appbar-style">
                    <Tabs
                        value={value}
                        onChange={handleTabs}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Đăng Nhập"  />
                        <Tab label="Đăng Ký"  />        
                    </Tabs>

                    <TabPanel value ={value} index={0}> 
                    <Signin />
                     </TabPanel>
                    <TabPanel value ={value} index={1}> 
                        <SignUp/>
                     </TabPanel>
              </AppBar>

            </Paper>
        </Grid>
      
    )
}

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div>
        {value === index && (
          
            <h1>{children}</h1>
          
        )}
      </div>
    );
  }
