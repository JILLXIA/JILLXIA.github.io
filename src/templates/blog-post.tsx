import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header, { PageType } from '../components/Header';
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
import Comments from '../components/Comments';
import { Chip, Divider, Stack } from '@mui/material';
const theme = createTheme();
export default function content({ pageContext }:any) {
    const { product } = pageContext
    const [leftPage, setLeftPage] = useState<boolean>(false)
    const [rightPage, setRightPage] = useState<boolean>(false)
    const tags: string[] = product?.node?.frontmatter?.Tags?.split(";")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header pageType={PageType.BLOG}/>
        <Box sx={{marginLeft:0.3, marginRight: 0.3}}>
            <Typography variant="h3" component="div" gutterBottom sx={{marginTop:3}}>
                {product?.node?.frontmatter?.title}
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="subtitle1" color="text.secondary" sx={{fontStyle:'italic'}}>
                    Posted: {product?.node?.frontmatter?.date}
                </Typography>
                <Chip label={product?.node?.frontmatter?.Label} color="secondary" variant={"outlined"} />
            </Stack>
            <MDXRenderer>
                {product?.node?.body}
            </MDXRenderer>
            <Typography variant="h5" component="div" gutterBottom sx={{marginTop:6}}>Tags</Typography>
            <Divider sx={{marginBottom:5}}/>
            <Stack direction={{md:'row',sm:'row',xs:'column'}} spacing={{ xs: 1, sm: 2, md: 2 }}>
                {tags.map(item => <Chip label={item} color="primary" variant="outlined" />)}
            </Stack>
            <Typography variant="h5" component="div" gutterBottom sx={{marginTop:6}}>Comments</Typography>
            <Divider sx={{marginBottom:5}}/>
            <Comments />
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