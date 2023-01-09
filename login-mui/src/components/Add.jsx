import { Add as AddIcon } from '@mui/icons-material'
import { Fab, IconButton, Modal, Tooltip ,styled, Typography, Avatar, TextField, Button, ButtonGroup } from '@mui/material'
import { Box, Stack,  } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
})

const Add = () => {
    const[open, setOpen] = useState(false)

  return (
    <>
        <Tooltip onClick={e=>setOpen(true)}
        sx={{
            position:"fixed",
            bottom:20,
            left: { xs: "calc(50% - 25px)", md: 30},
        }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        
        <StyledModal  
                open={open}
                onClose={e=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center">
                     CreatePost 
                </Typography>
                <UserBox>
                    <Avatar sx={{width:30, heigth:30}} src="/static/images/avatar/1.jpg" />
                        <Typography fontWeight={500} variant="span" ml={1}>Yiğit Oğul Bayarlar</Typography>
                </UserBox>
                <TextField sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                    />

                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotionsIcon color="primary"/>
                    <ImageIcon color="secondar"/>
                    <VideoCameraFrontIcon color="success"/>
                    <PersonAddIcon color="error"/>
                </Stack>

                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
                </ButtonGroup>

           </Box>
        </StyledModal>
          
        


    </>
  )
}

export default Add