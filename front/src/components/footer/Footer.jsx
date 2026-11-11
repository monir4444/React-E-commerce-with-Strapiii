import { Box, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <Box sx={{ bgcolor:"gray" , height:"60px" , py:2}}>


        <Typography sx={{justifyContent:"center" , display:"flex" , alignItems:"center" ,fontSize:18}}>
          Designed and developen By MONIR SHRITAH   <CopyrightIcon /> 2026 </Typography>
    </Box>
  )
}

export default Footer