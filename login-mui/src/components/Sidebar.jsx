import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Groups3Icon from '@mui/icons-material/Groups3';
import StoreIcon from '@mui/icons-material/Store';
import Person3Icon from '@mui/icons-material/Person3';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}> 
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
                  <ListItemButton component="a" href="#home">
                    <ListItemIcon>
                      <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#pages">
                    <ListItemIcon>
                      <AutoStoriesIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#groups">
                    <ListItemIcon>
                      <Groups3Icon/>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#market">
                    <ListItemIcon>
                      <StoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#friends">
                    <ListItemIcon>
                      <Person3Icon/>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                  </ListItemButton>
              </ListItem> 
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#settings">
                    <ListItemIcon>
                      <SettingsApplicationsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component="a" href="#account">
                    <ListItemIcon>
                      <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
              </ListItem> 

            {/* Dark MODE SWİTCH*/}

              <ListItem disablePadding>
                  <ListItemButton component="a" href="#account">
                    <ListItemIcon>
                      <DarkModeIcon/>
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                  </ListItemButton>
              </ListItem>
          </List>
      </Box>
    </Box>
  )
}

export default Sidebar