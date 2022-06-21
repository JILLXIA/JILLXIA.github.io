import * as React from 'react';
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
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
            <Paper 
                sx={{flex:1, marginRight:10, padding:3}} 
                elevation={4} 
                onClick={() => {
                    if(product?.previous?.slug){
                        navigate(`/blog/${product?.previous?.slug}`)
                    }
                }}>
                <Typography variant="h6" gutterBottom component="div">
                    NEXT
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {product?.previous?.frontmatter?.title ?? 'This is the first blog.'}
                </Typography>
            </Paper>
            <Paper 
                sx={{flex:1, marginLeft:10,padding:3}} 
                elevation={4} 
                onClick={() => {
                    if(product?.next?.slug){
                        navigate(`/blog/${product?.next?.slug}`)
                    }
                }}>
                <Typography variant="h6" gutterBottom component="div" sx={{textAlign:'right'}}>
                    PREVIOUS
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{textAlign:'right'}}>
                    {product?.next?.frontmatter?.title ?? 'This is the last blog.'}
                </Typography>
            </Paper>
        </Grid>
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}
