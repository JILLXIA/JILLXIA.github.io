import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { graphql, useStaticQuery } from "gatsby"
import Link from '@mui/material/Link'
import List from '@mui/material/List';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StaticImage } from 'gatsby-plugin-image';
import Image from '../../images/ThankYou.jpeg'
import { Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { navigate } from "gatsby"
const theme = createTheme();
export default function contact() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header />
            <Box sx={{marginLeft:0.3, marginRight: 0.3}}>
                <Grid container flexDirection={'row'}>
                    <img src={Image} width={509} height={339}/>
                    <Grid
                    container
                    sx={{
                        flex:1,
                        marginLeft:5,
                        alignContent:'flex-start',
                        justifyContent:'space-around'
                    }}
                    flexDirection={'column'}
                    >
                        <Typography component="h1" variant="h3" color="#333">
                            Contact Me
                        </Typography>
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
                    </Grid>
                </Grid>
            </Box>
          </Container>
          <Footer
            description="All rights reserved"
          />
        </ThemeProvider>
      );
}