import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { graphql, useStaticQuery } from "gatsby"
import List from '@mui/material/List';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { PageType } from '../../components/Header';
import { navigate } from "gatsby"
import Chip from '@mui/material/Chip';
const DEFAULT_PAGE = 1
const PAGE_SIZE = 2

const label = [
  "All",
  "LeetCode",
  "Front-End",
  "Personal"
]
export default function content() {
  // const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE)
  const [selectIndex, setSelectIndex] = useState<number>(-1)
  const [labelIndex, setLabelIndex] = useState<number>(0)
  const mainFeaturedPost = {
    title: 'My Blog Page',
    texts: [
      'My Blog will update irregularly. I will record my study process, such as course notes, algorithm tips and so on.'
    ]
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
              Tags
              Label
            }
            id
            slug
          }
        }
      }
      
    `)

    // const onChange = (event: object, page: number) => {
    //   setPageNumber(page)
    // }

    const handleLabelClick = (index:number) => {
      setLabelIndex(index)
    }

    const blogContent = () => {
        const fileData = data.allMdx.nodes.filter((item:any) => {
          if(labelIndex===0){
            return true
          }
          return item?.frontmatter?.Label === label[labelIndex]
        })
        // const showData = fileData.slice((pageNumber-1) * PAGE_SIZE, pageNumber * PAGE_SIZE)
        const view = fileData.map((node:any, index:number) => {
          const tags: string[] = node?.frontmatter?.Tags?.split(";")
          return(
            <Card 
              sx={{ 
                display: 'flex', 
                marginBottom:4,
                color: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundImage: selectIndex==index ? `url(${Image})` : null
              }} 
              raised={selectIndex==index} 
              onMouseEnter={() => {setSelectIndex(index)}}
              onMouseLeave={() => {setSelectIndex(-1)}}
              onClick={() => {navigate(`/blog/${node.slug}`)}}
              >
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
                  <Stack direction={{md:'row',sm:'row',xs:'row'}} spacing={1}>
                    {tags.map((item) =>  <Chip label={item} color="primary" variant={"outlined"} />)}
                  </Stack>
              </CardContent>
            </Card>
          )
          })
        return <List>{view}</List>
    }
  return (
    <>
      {/* <MainFeaturedPost post={mainFeaturedPost} isHomePage={false}/> */}
      <Container maxWidth="lg">
        <MainFeaturedPost post={mainFeaturedPost} isHomePage={false}/>
        <Stack direction="row" spacing={1} sx={{marginBottom:3, position:'sticky'}}>
          {label.map((item, index) => <Chip label={item} color="secondary" variant={index===labelIndex ? "filled" : "outlined"} onClick={() => handleLabelClick(index)}/>)}
        </Stack>
        {blogContent()}
        {/* <Stack spacing={2}>
          <Pagination 
            sx={{alignSelf:'center', marginTop:5}} 
            count={Math.ceil(data.allMdx.nodes.length/PAGE_SIZE)} 
            color="primary" 
            size="large"
            onChange={onChange}/>
        </Stack> */}
      </Container>
    </>
  );
}