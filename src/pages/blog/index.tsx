import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import Link from '@mui/material/Link';
const theme = createTheme();
const sections = [
    { title: 'Education', url: '#' },
    { title: 'Work Experience', url: '#' },
    { title: 'Hobby', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Study', url: '#' },
    { title: 'Contact', url: '#' }
  ];
export default function content() {

    // 函数式组件的用法
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            rawBody
            frontmatter {
              title
              date
            }
            id
            slug
          }
        }
      }
      
    `)

    const blogContent = () => {
        const view = data.allMdx.nodes.map((node:any) => (
            <article key={node.id}>
                <h2>
                    <Link href={`/blog/${node.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
            </article>
        ))
        return view
    }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        {blogContent()}
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}

// 如果是类组件可以这样用
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `