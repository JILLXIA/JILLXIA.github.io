import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { PageType } from './Header';
import HomeAccordion from './HomeAccordion';
import { theme } from '../Theme'
const mainFeaturedPost = {
  title: 'Welcome',
  description:"555",
  texts:[
    'Hi, I am Yudi Xia, a graduate student in Rice University majored in Computer Science. I received my bachelor degree in Software Engineering from Nanjing University, China.  Also, I worked in Meituan as a front-end engineer for one year.',
    'I am very passionate about programming and am curious to learn new technologies.',
    'If you want to make friends with me or give me some suggestions, you can see my contact information below and get in touch with me.'
  ]
};

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header pageType={PageType.HOME}/>
        <Box sx={{marginLeft:0.3, marginRight: 0.3}}>
          <MainFeaturedPost post={mainFeaturedPost} isHomePage={true}/>
          <HomeAccordion />
         </Box> 
      </Container>
      <Footer
        description="All rights reserved"
      />
    </ThemeProvider>
  );
}
