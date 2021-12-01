import React from "react";
import { Container, Button, Box,Typography, Grid, Paper,FormControl ,FormControlLabel ,FormLabel ,RadioGroup,Radio  } from "@mui/material";
import "./QuickView-style.css"
import CarouselProduce from "./CarouselProduce";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from "@mui/material/colors";


//const LoginContainer =() =>{
export default function QuickView(){  
      
    return(
   
        <Grid>
            <Paper elevation={10} className ="paperStyle-quickview" >
               <Grid container  spacing={5} padding={2} >
                   <Grid item className="carousel-style" xl={6} >
                       <CarouselProduce />
                   </Grid>
                    <Grid item  className="detail-produce-style" xl={6}> 
                      
                        <Box borderBottom={1} borderColor="blue" className="infoproduce-style" >
                                <Typography variant="h5">
                                    Bàn phím cơ Filco Majestouch Minila-R Convertible ASAGI
                                </Typography>
                                <Typography variant="body2">
                                Bảo hành: 60 tháng đổi mới
                                </Typography>
                        </Box>
                        <Box borderBottom={1} borderColor="blue" className="infoproduce-style" >
                        <Typography variant="h6">
                             Giới thiệu tổng quan
                             </Typography>
                             <Typography variant="body2">
                            Là thương hiệu bàn phím cơ đến từ Nhật Bản, Filco được ra đời từ năm 1992. Đến nay, Filco nổi tiếng với các bàn phím cơ sử dụng switch Cherry 
                                và thời gian bảo hành lên đến 5 năm.
                                </Typography>
                        </Box>
                        <Box borderBottom={1} borderColor="blue" className="infoproduce-style" >
                        <Typography variant="h6">
                            Tùy chọn
                            </Typography>                
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="blue"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="blue" control={<Radio />} label="Loại phím Cherry Blue" />
                                    <FormControlLabel value="brown" control={<Radio />} label="Loại phím Cherry Brown" />
                                    <FormControlLabel value="black" control={<Radio />} label="Loại phím Cherry Black" />
                                </RadioGroup>
                            </FormControl>
                         </Box>
                        <Box className="infoproduce-style" > 
                            <h3>5.000.000đ</h3>
                        </Box>
                        <Box className="infoproduce-style-addcart" width="320px" >
                            <Button className="btn-style" type="submit" color="primary" variant="contained" size="large"   > 
                            <ShoppingCartIcon/>
                            Thêm vào giỏ 
                            </Button>
                            <Button className="btn-style" type="submit" color="primary" variant="contained" size="large" > 
                                <FavoriteBorderIcon/>
                            </Button>
                        </Box>

                      
                    </Grid>

               </Grid>
            </Paper>
        </Grid>
      
    )
}


