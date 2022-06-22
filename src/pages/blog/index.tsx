import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, useStaticQuery } from "gatsby"
import Link from '@mui/material/Link'
import List from '@mui/material/List';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Image from '../../images/mouse_hover.jpg';
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
const PAGE_SIZE = 2
export default function content() {
  const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE)
  const [selectIndex, setSelectIndex] = useState<number>(-1)
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
            frontmatter {
              title
              date
              description
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
        const view = showData.map((node:any, index:number) => {
          return(
            <Card 
              sx={{ 
                display: 'flex', 
                marginBottom:4,
                color: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: selectIndex==index ? `url(${Image})` : null
              }} 
              raised={selectIndex==index} 
              onMouseEnter={() => {setSelectIndex(index)}}
              onMouseLeave={() => {setSelectIndex(-1)}}>
              <CardContent sx={{ flex: 1}}>
                <Grid direction="row" container alignItems="center" xs={12}>
                  <Typography component="h2" variant="h5" color="primary">
                      {node?.frontmatter?.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{fontStyle:'italic',textAlign:'right', flex:1}}>
                    Posted: {node?.frontmatter?.date}
                  </Typography>
                </Grid>
                  <Typography variant="subtitle1" paragraph color="text.secondary" sx={{marginTop:3}}>
                    {node?.frontmatter?.description}
                  </Typography>
                  <Link href={`/blog/${node.slug}`} variant="subtitle1" color="primary" sx={{textAlign:'right'}} underline='hover'>
                    Continue reading...
                  </Link>
              </CardContent>
            </Card>
          )
          })
        return <List>{view}</List>
    }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <MainFeaturedPost post={mainFeaturedPost} />
        {blogContent()}
        <Stack spacing={2}>
          <Pagination 
            sx={{alignSelf:'center', marginTop:5}} 
            count={Math.ceil(data.allMdx.nodes.length/PAGE_SIZE)} 
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