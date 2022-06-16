import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
  const image = getImage(props.data.mdx.frontmatter?.hero_image)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
            <p>{props.data.mdx.frontmatter.date}</p>
            {image ? 
            <>
            <GatsbyImage
              image={image}
              alt={props.data.mdx.frontmatter.hero_image_alt}
            />
            <p>
              Photo Credit:{" "}
              <a href={props.data.mdx.frontmatter.hero_image_credit_link}>
                {props.data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
            </>: null }
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`