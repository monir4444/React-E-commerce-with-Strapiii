import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

function ProductDetails() {
  return (
    <Box sx={{display:"flex" , alignItems:"center", gap:2.5}}>

        <Box sx={{display:"flex"}}><img width={300} src="src\images\1 (15).JPG" alt="" /></Box>
        <Box>
            <Typography variant='h5'>WOMEN FASHION</Typography>
            <Typography sx={{color:"crimson" , fontSize:"22px"}}>12.99$</Typography>
            <Typography>Loremr sit amet consectett. Fugolor quam. Magnam nostrum, corporis quidem accusantium est, vero, fugratione.</Typography>
            <Stack direction={"row"} sx={{gap:1,my:2}}>
                {["src/images/1 (12).jpg","src/images/1 (15).JPG"].map((item)=>{
                    return(
                        <img width={90} key={item} src={item} alt='' />
                    )
                })}


            </Stack>

            <Button>Buy Now</Button>
        </Box>
    </Box>
  )
}

export default ProductDetails