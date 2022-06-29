import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header, { PageType } from '../components/Header';
import Footer from '../components/Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { navigate } from "gatsby"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Comments from '../components/Comments';
import { Chip, Divider, Stack } from '@mui/material';
import { theme } from '../Theme'
const OPACITY_CHANGE = 0.5
export default function content({ pageContext }:any) {
    const { product } = pageContext
    const [leftPage, setLeftPage] = useState<boolean>(false)
    const [rightPage, setRightPage] = useState<boolean>(false)
    const tags: string[] = product?.node?.frontmatter?.Tags?.split(";")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header pageType={PageType.BLOG}/>
      <Container maxWidth="lg">
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
        <Grid direction="row" container alignItems="center" justifyContent="space-between" xs={12} flex={1} marginTop={15}>
            <Grid direction="row" container alignItems="center" padding={3} flex={1}>
                <ArrowBackIosNewIcon opacity={(leftPage && product?.previous?.slug) ? OPACITY_CHANGE : 1}/>
                <Grid sx={{marginLeft:3, opacity: (leftPage && product?.previous?.slug) ? OPACITY_CHANGE : 1}}  
                    onClick={() => {
                    if(product?.previous?.slug){
                        navigate(`/blog/${product?.previous?.slug}`)
                    }
                    }}
                    onMouseEnter={() => {setLeftPage(true)}}
                    onMouseLeave={() => {setLeftPage(false)}}
                    >
                    <Typography variant="h6" gutterBottom component="div">
                        {product?.previous?.slug ? 'Newer Post' : 'That\'s All!'}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {product?.previous?.frontmatter?.title ?? 'This is the first blog.'}
                    </Typography>
                </Grid>
            </Grid>  
            <Grid direction="row" container alignItems="center" justifyContent="flex-end" flex={1} padding={3}>
                <Grid sx={{marginRight:3,opacity: (rightPage && product?.next?.slug) ? OPACITY_CHANGE : 1}} 
                    onClick={() => {
                    if(product?.next?.slug){
                        navigate(`/blog/${product?.next?.slug}`)
                    }
                    }}
                    onMouseEnter={() => {setRightPage(true)}}
                    onMouseLeave={() => {setRightPage(false)}}>
                    <Typography variant="h6" gutterBottom component="div" sx={{textAlign:'right'}}>
                        {product?.next?.slug ? 'Older Post' : 'That\'s All!'}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{textAlign:'right'}}>
                        {product?.next?.frontmatter?.title ?? 'This is the last blog.'}
                    </Typography>
                </Grid>
                <ArrowForwardIosIcon opacity={(rightPage && product?.next?.slug) ? OPACITY_CHANGE : 1}/>
            </Grid>
        </Grid>
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}