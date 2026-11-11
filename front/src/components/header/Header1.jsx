import React from 'react'
import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, Margin, Padding } from "@mui/icons-material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header1() {
      const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{
      bgcolor:"#283445" ,
      height:"37px"
    }}>

      
          
        <Container>
<Stack direction={"row"} sx={{alignItems:"center"}}
       > 

<Typography sx={{
            background:"#b64e4e",
            mr:2,
            p: "3px 10px",
             color:"#fff",
             borderRadius:10
          }} >
              HOT
          </Typography>

          <Typography
          sx={{
            color:"#fff",
          }}>
            Free Express shiping
          </Typography>

      
         
                  <div>
      {theme.palette.mode === "light" ? (
        <IconButton

         sx={{
  position:"absolute",
  right:"100px",
  top:"-7px",
   color:"#fff",
 }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined  />
        </IconButton>
      ) : (
        <IconButton
         sx={{
  position:"absolute",
  right:"100px",
  top:"-7px"
  
 }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined   />
        </IconButton>
      )}
    </div>

<FacebookOutlinedIcon sx={{
  position:"absolute",
  right:"70px",
  color:"#fff"
 }} />
<TwitterIcon sx={{
  position:"absolute",
  right:"40px",
  color:"#fff"
}} />
<InstagramIcon sx={{
  position:"absolute",
  right:"10px",
  color:"#fff"
}} />
      
    


      </Stack>

        </Container>
    
    </Box>
  )
}

export default Header1