import React from 'react'
import List from '@mui/material/List';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { navigate } from "gatsby"

export default function Contact() {
    const renderContact = () => {
    return (
    <List sx={{flexDirection:'column',p: { xs: 3, md: 4 }}}>
        <ListItem divider>
            <Stack
            direction="row"
            spacing={3}
            sx={{alignItems:'center'}}
            >
                <EmailIcon />
                <Typography component="h2" variant="h5" color="inherit">
                    xyd.yudi@hotmail.com
                </Typography>

            </Stack>
        </ListItem>
        <ListItem divider>
            <Stack
            direction="row"
            spacing={3}
            sx={{alignItems:'center'}}
            onClick={() => {navigate("https://github.com/JILLXIA")}}
            >
                <GitHubIcon />
                <Typography component="h2" variant="h5" color="inherit">
                    JILLXIA
                </Typography>

            </Stack>
         </ListItem>
         <ListItem>
            <Stack
            direction="row"
            spacing={3}
            sx={{alignItems:'center'}}
            onClick={() => {navigate("https://www.linkedin.com/in/yudi-xia-4613451aa/")}}
            >
                <LinkedInIcon />
                <Typography component="h2" variant="h5" color="inherit">
                    Yudi Xia
                </Typography>

            </Stack>
        </ListItem>
      </List>)
    }

    return(
        renderContact()
    );

}