import { Box, Container, Stack, Typography,Button,Rating,Dialog,IconButton } from '@mui/material'
import React, { useState } from 'react'
import {useGetproductByNameQuery} from '../../redux/product'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';

function Main() {
    

  const handleAlignment = (event, newValue) => {
   
    setmyData(newValue)
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const allProAPI = 'products?populate=*'
  const menCategoryAPI = 'products?populate=*&filters[productCategory][$eq]=men'
  const womenCategoryAPI = 'products?populate=*&filters[productCategory][$eq]=women'

  const [myData, setmyData] = useState(allProAPI);


   const { data, error, isLoading } = useGetproductByNameQuery(myData)

    if (isLoading) {
      return(
        <Typography>LODING..........</Typography>
      )
    }

    if (error) {
      return(
        <Typography>{error.message}</Typography>
      )
    }


   if(data){
return (
    

    <Container sx={{py:"35px"}}>


    <Stack direction={"row"} sx={{alignItems:"center" ,justifyContent:"space-between"}}>
    <Box>
        <Typography variant='h6'>Selected Products</Typography>
        <Typography sx={{fontWeight:300}}>All Our new arrivals in a exclusive brand selection </Typography>
    </Box>
     <ToggleButtonGroup
      value={myData}
      exclusive
      color='error'
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value={allProAPI} aria-label="left aligned">
      ALL PRODUCTS
      </ToggleButton>
      <ToggleButton value={menCategoryAPI} aria-label="centered"
      sx={{mx:"16px !important"}}>
        MEN CATEGORY
      </ToggleButton>
      <ToggleButton value={womenCategoryAPI} aria-label="right aligned">
        WOMEN CATEGORY
      </ToggleButton>
      
    </ToggleButtonGroup>


    </Stack>

    <Stack direction={"row"} sx={{flexWrap:"wrap",justifyContent:"space-between"}}>
    {data.data.map((item) => { 
      return(
         <Card key={item} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 277, mt:6 }}
        image={`${item.productimg[0].url}`}
        title="green iguana"
      />
      <CardContent>
        <Stack direction={"row"} sx={{justifyContent:"space-between" , alignItems:"center"} }>
          <Typography>{item.productTitle}</Typography>
          <Typography>{item.productPrice}</Typography>
        </Stack>
        <Typography>{item.productDiscription}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}} >
        <Button onClick={handleClickOpen} size="large">ADD TO CART</Button>
        <Rating precision={0.5} name="read-only" value={item.productRating} readOnly />
      </CardActions>
    </Card>
        
      )
       })}
    </Stack>


     <Dialog
     sx={{".MuiPaper-root":{minWidth: {xs:"100%",md:800}},
  }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        
<IconButton sx={{position:"absolute", top:0, right:10}} onClick={handleClose}>
                <Close  />
              </IconButton>
        <ProductDetails />
      </Dialog>
    </Container>
  )
   }
  
}

export default Main