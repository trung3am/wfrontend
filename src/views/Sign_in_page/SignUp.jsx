import React from "react";
import  Grid from "@mui/material/Grid";
import {Avatar, TextField, Typography, Link, Checkbox,FormControlLabel,FormGroup  } from "@mui/material";
import "./SignUp-style.css";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import Button from '@mui/material/Button';



export default function SignUp(){
    return(
        <div className="SignUp-style">
            <Grid align="center" margin="normal" >
            <Avatar sx={{ width: 70, height: 70 }} ><GroupAddRoundedIcon color="primary"/> </Avatar>
            {/* </Grid>
            <Grid align= "center"> */}
            <TextField id="outlined-basic" label="Tên Đăng Nhập" variant="standard" margin="dense" required fullWidth />
            <TextField id="outlined-basic" label="Email" variant="standard" margin="dense" required fullWidth />
            <TextField id="outlined-basic" label="Mật Khẩu" variant="standard" margin="dense" type="password" fullWidth  required />       
                <Button className="btn-style" type="submit" color="primary" variant="contained" size="normal" fullWidth  > Đăng Ký 
                </Button>
            </Grid>
           
        </div>
    )
}