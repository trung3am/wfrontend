import React from "react";
import { Container, Button, Box,Typography, Grid, Paper,Avatar,TextField,FormControl,InputAdornment,FilledInput,InputLabel  } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import "./EditUser-style.css"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { typography } from "@mui/system";


export default function EditUser(){  
    const [values, setValues] = React.useState({
        fullname: '',
        username: '',
        phonenumber: '',
        email: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
   
        <Grid className="backgroud-edituser-style">
            <Paper elevation={10} className ="paperStyle-edituser" >
               <Grid container  spacing={5} padding={2} >
                   <Grid item className="avatar-style" xl={4} md={4} align = "center" >
                      
                       <Avatar
                            alt="Remy Sharp"
                            src="img/EditUser/avatar/1.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                       
                        <Typography variant="h6" color="red" fontWeight="bold">
                            Bau Auto
                        </Typography>
                        <Typography variant="body1" color="blue" fontWeight="bold">
                            abc@info.com
                        </Typography>
                        <Typography variant="subtitle1">
                           Thành Viên Bạc
                        </Typography>
                   </Grid>
                    <Grid item  className="detail-info-style" xl={8} md={8}>                     
                        <Box borderBottom={1} borderColor="blue" className="infoproduce-style" >
                                <Typography variant="h6" fontWeight="bold">
                                    Thông tin cá nhân
                                </Typography>                        
                        </Box>
                        <Box
                                borderBottom={1} borderColor="blue"
                                className="box-detail-style"
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Họ và Tên"
                                    defaultValue="Trần Báu Lộc"
                                    variant="filled"
                                />
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Tên Đăng Nhập"
                                    defaultValue="bauloc"
                                    variant="filled"
                                />
                                  <TextField
                                    id="filled-number"
                                    label="Số Điện Thoại"
                                    type="number"
                                    variant="filled"
                                />
                                 <TextField
                                    required
                                    id="filled-required"
                                    label="Email"
                                    defaultValue="abc@info.com"
                                    variant="filled"
                                />
                               
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                <InputLabel htmlFor="filled-adornment-password">Mật Khẩu Cũ</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                </FormControl>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Mật Khẩu Mới</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                 {/*
                                <TextField
                                    id="filled-password-input"
                                    label="Mật Khẩu Mới"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-read-only-input"
                                    label="Read Only"
                                    defaultValue="Hello World"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="filled"
                                /> */}
                              
                                {/* <TextField
                                    id="filled-search"
                                    label="Search field"
                                    type="search"
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-helperText"
                                    label="Helper text"
                                    defaultValue="Default Value"
                                    helperText="Some important text"
                                    variant="filled"
                                /> */}
                            </div>
      
                    </Box>
                      
                        <Box  className="saveInfo-style" >
                            <Button className="btn-style" type="submit" color="primary" variant="contained" size="large"   > 
                            <SaveOutlinedIcon/>
                            Lưu Thông Tin
                            </Button>
                        </Box>                     
                    </Grid>

               </Grid>
            </Paper>
        </Grid>
      
    )
}


