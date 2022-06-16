import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
const theme = createTheme();
const sections = [
    { title: 'Education', url: '#' },
    { title: 'Work Experience', url: '#' },
    { title: 'Hobby', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Study', url: '#' },
    { title: 'Contact', url: '#' }
  ];
export default function content(props:any) {
    console.log(`${JSON.stringify(props)}`)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
            <p>{props.data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {props.data.mdx.body}
            </MDXRenderer>
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}

// useStaticQuery 是不能传入参数的
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`