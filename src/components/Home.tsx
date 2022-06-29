import * as React from 'react';
import Container from '@mui/material/Container';
import MainFeaturedPost from './MainFeaturedPost';
import HomeAccordion from './HomeAccordion';
import { Wrapper } from './ThemeWrapper'
import { PageType } from './Header';
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
    <Wrapper pageType={PageType.HOME}>
      <Container maxWidth="lg">
          <MainFeaturedPost post={mainFeaturedPost} isHomePage={true}/>
          <HomeAccordion />
      </Container>
    </Wrapper>
  );
}
