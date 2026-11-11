import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import {useState}  from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem'; 
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import AccordionSummary from '@mui/material/AccordionSummary';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header3() {
   const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      
      
      <Box>
        <Button
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleClick}
        >
          <WindowIcon />
          <Typography
          sx={{
            padding:"0",
            textTransform:"capitalize",
          }}>
        
        
            categories
          </Typography>
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': buttonId,
            },
          }}
        >
          <MenuItem onClick={handleClose}>Bikes</MenuItem>
          <MenuItem onClick={handleClose}>Electronics</MenuItem>
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Games</MenuItem>
        </Menu>
      </Box>

    <IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon/>
    </IconButton>

     <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.": {height:"100%" }        }}
          >
            

          <Box sx={{ width:444, mx:"auto" ,mt:6, position:"relative" }}>

             

              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Home</Typography>
        </AccordionSummary>
      
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="link1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="link2" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Mega menu</Typography>
        </AccordionSummary>
      
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="link1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="link2" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">Pages</Typography>
        </AccordionSummary>
      
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="link1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="link2" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </Accordion>
       <IconButton sx={{position:"absolute", top:-10, right:-10}} onClick={toggleDrawer("top", false)}>
                <Close  />
              </IconButton>


          </Box>
          </Drawer>
      
      </Container>
  )
}

export default Header3