import React from 'react'
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';


function Scroll() {
  return (
    <Zoom in={useScrollTrigger()}>


        <Fab onClick={()=>{
            window.scrollTo(0,0)
        }}
         sx={{position:"fixed" , bottom:33, right:33}} color="primary" aria-label="add">
   <KeyboardArrowUp fontSize="medium" />
</Fab>
    </Zoom>
  )
}

export default Scroll