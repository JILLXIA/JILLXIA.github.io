import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import HomeAccordion from './HomeAccordion';
const mainFeaturedPost = {
  title: 'Welcome',
  description:"555",
  texts:[
    'Hi, I am Yudi Xia, a graduate student in Rice University majored in Computer Science. I received my bachelor degree in Software Engineering from Nanjing University, China.  Also, I worked in Meituan as a front-end engineer for one year.',
    'I am very passionate about programming and am curious to learn new technologies.',
    'If you want to make friends with me or give me some suggestions, you can see my contact information below and get in touch with me.'
  ]
};

export default function BigHome() {

  return (
    <>
        <MainFeaturedPost post={mainFeaturedPost} isHomePage={true}/>
        <Container maxWidth="lg">
          <HomeAccordion />
        </Container>
    </>
      
  );
}