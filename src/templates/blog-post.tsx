import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Typography from '@mui/material/Typography';

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
            {product?.frontmatter?.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{fontStyle:'italic'}}>
            Posted: {product?.frontmatter?.date}
          </Typography>
          <MDXRenderer>
                {product?.body}
            </MDXRenderer>
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}
