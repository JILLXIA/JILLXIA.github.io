import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import Footer from '../Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import Link from '@mui/material/Link'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MainFeaturedPost from '../MainFeaturedPost';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const theme = createTheme();
const sections = [
    { title: 'Education', url: '#' },
    { title: 'Work Experience', url: '#' },
    { title: 'Hobby', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Study', url: '#' },
    { title: 'Contact', url: '#' }
  ];

const DEFAULT_PAGE = 1
const PAGE_SIZE = 1
export default function content() {
  const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE)
  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description'
  };
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

    const onChange = (event: object, page: number) => {
      setPageNumber(page)
    }

    const blogContent = () => {
        const showData = data.allMdx.nodes.slice((pageNumber-1) * PAGE_SIZE, pageNumber * PAGE_SIZE)
        const view = showData.map((node:any) => {
          return(
            <article key={node.id}>
                <h2>
                    <Link href={`/blog/${node.slug}`}>
                        {node?.frontmatter?.title}
                    </Link>
                </h2>
                <p>Posted: {node?.frontmatter?.date}</p>
                <Divider />
            </article>
          )
          })
        return <List>{view}</List>
    }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
        {blogContent()}
        <Stack spacing={2}>
          <Pagination 
            sx={{alignSelf:'center', marginTop:5}} 
            count={data.allMdx.nodes.length/PAGE_SIZE} 
            color="primary" 
            size="large"
            onChange={onChange}/>
        </Stack>
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