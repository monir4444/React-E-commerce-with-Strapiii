import { Container, IconButton, Stack, Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header2() {
  return (
   

    <Container sx={{my:3,display:"flex", justifyContent:"space-between"}}>
        <Stack sx={{alignItems:"center"}} >
          <ShoppingCartOutlinedIcon />
          <Typography>E-commerce</Typography>


        </Stack>

         <Search sx={{
          borderRadius:"22px",
          border:"1px solid red",
          flexGrow:0.5,
         }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

     <Stack direction={"row"} alignItems={"center"}> 
      
      
         <IconButton aria-label="show 8 shared files">
         <Badge badgeContent={2} color="primary">
           <ShoppingCartOutlinedIcon />
         </Badge>
       </IconButton>

        <IconButton>
         <Person2OutlinedIcon />
       </IconButton>
     </Stack>

    </Container>
  )
}

export default Header2