import React from "react";
import  Grid from "@mui/material/Grid";
import {Avatar, TextField, Typography, Link, Checkbox,FormControlLabel,FormGroup  } from "@mui/material";
import "./Signin-style.css";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';



export default function Sigin(){
    return(
        <div className="signin-style">
            <Grid align="center" margin="normal" >
            <Avatar sx={{ width: 70, height: 70 }} ><AccountCircleRoundedIcon color="primary"/> </Avatar>
            {/* </Grid>
            <Grid align= "center"> */}
            <TextField id="outlined-basic" label="Tên Đăng Nhập" variant="standard" margin="dense" required fullWidth />
            <TextField id="outlined-basic" label="Mật Khẩu" variant="standard" margin="dense" type="password" fullWidth  required />   
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />}  label="Ghi nhớ trên thiết bị này." />
            </FormGroup>       
            {/* </Grid>
            <Grid align="center">  */}
                <Button className="btn-style" type="submit" color="primary" variant="contained" size="normal" fullWidth  > Đăng Nhập 
                </Button>
            </Grid>
            <Grid align="left">
                <Typography >
                    <Link href="#" variant="body2">  Quên mật khẩu? </Link>
                </Typography>
            </Grid>
        </div>
    )
}