import { AppBar, Toolbar , styled, Typography,Box, InputBase,Badge, Avatar, MenuItem, Menu} from '@mui/material'
import React from 'react'
import Face6Icon from '@mui/icons-material/Face6';
import  MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div")(({theme})=> ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));

const Icons = styled(Box)(({theme})=> ({
    display:"none",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
 }));

 const UserBox = styled(Box)(({theme})=> ({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }

 }));
 

const Navbar = () => {

    const [open , setOpen] = useState(false);
  return (
    <AppBar position="sticky">
        <StyledToolbar >
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                YOBY DEV
            </Typography>
            <Face6Icon sx={{display:{xs:"blcok", sm:"none"}}} />

            <Search> <InputBase placeholder='search'/> </Search>

            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon/>
                </Badge>

                <Badge badgeContent={4} color="error">
                    <Notifications/>
                </Badge>

                <Avatar sx={{width:30, heigth:30}} src="https://fastly.4sqi.net/img/user/width960/36015892-FU42M5VY1CNKDM4I.jpg" onClick={e=>setOpen(true)}/>

            </Icons>

            <UserBox onClick={e=>setOpen(true)}> 
                <Avatar sx={{width:30, heigth:30}} src="https://fastly.4sqi.net/img/user/width960/36015892-FU42M5VY1CNKDM4I.jpg" />
                <Typography variant='span'>
                Mümtaz
            </Typography>
            </UserBox>
            
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e)=>setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar