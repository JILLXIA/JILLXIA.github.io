import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { navigate } from "gatsby"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from '../images/mouse_hover.jpg';
import Box from '@mui/material/Box';
const theme = createTheme();
const sections = [
    { title: 'Education', url: '#' },
    { title: 'Work Experience', url: '#' },
    { title: 'Hobby', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Study', url: '#' },
    { title: 'Contact', url: '#' }
  ];
export default function content({ pageContext }:any) {
    const { product } = pageContext
    const [leftPage, setLeftPage] = useState<boolean>(false)
    const [rightPage, setRightPage] = useState<boolean>(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Box sx={{marginLeft:0.3, marginRight: 0.3}}>
            <Typography variant="h2" component="div" gutterBottom sx={{marginTop:3}}>
                {product?.node?.frontmatter?.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontStyle:'italic'}}>
                Posted: {product?.node?.frontmatter?.date}
            </Typography>
            <MDXRenderer>
                {product?.node?.body}
            </MDXRenderer>
            <Grid direction="row" container alignItems="center" justifyContent="space-between" xs={12} sx={{ flex:1, marginTop: 15}}>
                {product?.previous?.slug ? <Paper 
                    sx={{width:430, padding:3, backgroundImage: leftPage ? `url(${Image})` : null}} 
                    elevation={leftPage ? 6:4} 
                    onClick={() => {
                        if(product?.previous?.slug){
                            navigate(`/blog/${product?.previous?.slug}`)
                        }
                    }}
                    onMouseEnter={() => {setLeftPage(true)}}
                    onMouseLeave={() => {setLeftPage(false)}}
                >
                    <Grid direction="row" container alignItems="center">
                        <ArrowBackIosNewIcon />
                        <Grid sx={{marginLeft:3}}>
                            <Typography variant="h6" gutterBottom component="div">
                                NEXT
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {product?.previous?.frontmatter?.title ?? 'This is the first blog.'}
                            </Typography>
                        </Grid>
                    </Grid>  
                </Paper>: null}
                {product?.next?.slug ? <Paper 
                    sx={{width:430,padding:3,backgroundImage: rightPage ? `url(${Image})` : null}} 
                    elevation={rightPage ? 6 : 4} 
                    onClick={() => {
                        if(product?.next?.slug){
                            navigate(`/blog/${product?.next?.slug}`)
                        }
                    }}
                    onMouseEnter={() => {setRightPage(true)}}
                    onMouseLeave={() => {setRightPage(false)}}
                    >
                    <Grid direction="row" container alignItems="center" justifyContent="flex-end">
                        <Grid sx={{marginRight:3}}>
                            <Typography variant="h6" gutterBottom component="div" sx={{textAlign:'right'}}>
                                PREVIOUS
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" sx={{textAlign:'right'}}>
                                {product?.next?.frontmatter?.title ?? 'This is the last blog.'}
                            </Typography>
                        </Grid>
                        <ArrowForwardIosIcon />
                    </Grid>
                </Paper>: null}
            </Grid>
         </Box>
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}
