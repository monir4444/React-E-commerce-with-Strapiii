import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './sider.css';

function Hero() {
  return (
    <Container sx={{mt: 2.5,display:"flex",alignItems:"center", gap:2}}>
        
        
    
<Swiper
loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="src\images\banner-15.jpg" alt="" />
            <Box sx={{position:"absolute" ,left:"10%",textAlign:"left"}}>
                <Typography sx={{color:"#222",fontSize:"30px"}}>LIFESTYLE COLLECTION</Typography>
                <Typography sx={{color:"#222",fontWeight:400,fontSize:"30px"}}>MEN</Typography>
                 <Typography sx={{color:"#222",fontSize:"30px"}}>SALE UP TO 30% OFF </Typography>
                 <Button sx={{bgcolor:"#222"}}>SHOP NOW</Button>
            </Box>
        </SwiperSlide>
         <SwiperSlide>
            <img src="src\images\banner-25.jpg" alt="" />
             <Box sx={{position:"absolute" ,left:"10%",textAlign:"left"}}>
                <Typography sx={{color:"#222",fontSize:"30px"}}>LIFESTYLE COLLECTION</Typography>
                <Typography sx={{color:"#222",fontWeight:400,fontSize:"30px"}}>WOMEN</Typography>
                 <Typography sx={{color:"#222",fontSize:"30px"}}>SALE UP TO 30% OFF </Typography>
                 <Button sx={{bgcolor:"#222"}}>SHOP NOW</Button>
            </Box>
        </SwiperSlide>
        
      </Swiper>

        
        <Box sx={{display: {xs:"none",md:"block",minWidth:"26.5%"}}}>

            <Box sx={{position:"relative"}}>
                <img width={"100%"} src="src\images\banner-17.jpg" alt="" />

                
               <Stack sx={{position:"absolute",top:0,ml:4,mt:3}}>
                 <Typography sx={{color:"#283445",fontSize:"18px"}}>NEW ARRIVALS</Typography>
                 <Typography sx={{color:"#283445",lineHeight:"16px",mt:1}}>SUMMER</Typography>
                  <Typography sx={{color:"#283445",fontSize:"18px"}}>SALE 20% OFF</Typography>
               </Stack>
            </Box>

            <Box  sx={{position:"relative"}}>
              <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
              <Stack sx={{position:"absolute",top:0,ml:4,mt:3}}>
              <Typography sx={{color:"#283445",fontSize:"18px"}}>GAMING 4K</Typography>
                 <Typography sx={{color:"#283445",lineHeight:"16px",mt:1}}>DESKTOPS &</Typography>
                  <Typography sx={{color:"#283445",fontSize:"18px"}}>LAPTOPS</Typography>
                  </Stack>
            </Box>

        </Box>
        
        
        </Container>




  )



}

export default Hero