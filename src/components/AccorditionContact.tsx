import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { graphql, useStaticQuery } from "gatsby"
import Link from '@mui/material/Link'
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../../images/ThankYou.jpeg'
import { ListItem, Paper } from '@mui/material';
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
                <Typography component="h2" variant="h5" color="#333">
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
                <Typography component="h2" variant="h5" color="#333">
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
                <Typography component="h2" variant="h5" color="#333">
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