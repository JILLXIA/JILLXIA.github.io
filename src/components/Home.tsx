import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { PageType } from './Header';
import HomeAccordion from './HomeAccordion';

const mainFeaturedPost = {
  title: 'Welcome',
  description:"555",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  texts:[
    'Hi, I am Yudi Xia, a graduate student in Rice University majored in Computer Science. I received my bachelor degree in Software Engineering from Nanjing University, China.  Also, I worked in Meituan as a front-end engineer for one year.',
    'I am very passionate about programming and am curious to learn new technologies.',
    'If you want to make friends with me or give me some suggestions, you can see my contact information below and get in touch with me.'
  ]
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const theme = createTheme();

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header pageType={PageType.HOME}/>
        <Box sx={{marginLeft:0.3, marginRight: 0.3}}>
          <MainFeaturedPost post={mainFeaturedPost} />
          <HomeAccordion />
         </Box> 
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}
