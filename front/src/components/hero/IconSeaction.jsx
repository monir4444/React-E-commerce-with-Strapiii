
import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Stack, Container, Box, Typography } from '@mui/material';

function Iconseaction() {
  return (
    
    <Container>
        <Stack direction={"row"} sx={{alignItems:"center",flexWrap:"wrap"}} >
<MyBox icon={<ElectricBoltIcon />} title={ "Fast Delivery"} subTitle={"Start with 10$"} />
<MyBox icon={<CreditScoreIcon />} title={ "Payment"} subTitle={"Secure system"} />
<MyBox icon={<WorkspacePremiumIcon />} title={ "Money Guarantee"} subTitle={"7 days back"} />
<MyBox icon={<AccessAlarmIcon />} title={ "365 days"} subTitle={"For free return"} />

        </Stack>

    </Container>
  )
}

export default Iconseaction

const MyBox = ({icon,title,subTitle }) =>{

    return(
<Box sx={{width:200 ,display:"flex", flexGrow:"1",alignItems:"center",mt:2.5, gap:3, justifyContent:"center"}}>

          {icon}
          <Box>
        <Typography>{title}</Typography>
        <Typography sx={{fontWeight:300}} >{subTitle}</Typography>

          </Box>
</Box>
  

    )

    }
