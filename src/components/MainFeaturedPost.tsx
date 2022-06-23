import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Icon from '../images/home_avator.jpg'
import HomeBg from '../images/home_bg.jpeg'

interface MainFeaturedPostProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    linkText?: string;
    title: string;
    texts: string[];
  };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props;
  if(!post){
    return null
  }

  return (
    <Paper
      sx={{
        position: 'relative',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${HomeBg})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      />
      <Grid container sx={{flexDirection:'row', justifyContent:'space-between',p: { xs: 3, md: 6 }}}>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            {post.texts.map((text)=>
            <Typography variant="h6" color="inherit" paragraph>
              {text}
            </Typography>)}
            {post.linkText ? <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>:null }
          </Box>
        </Grid>
        <Box
        component="img"
        sx={{
          height: 450,
          width: 450,
          maxHeight: { xs: 450, md: 430 },
          maxWidth: { xs: 450, md: 430 },
          alignSelf:'center',
          justifySelf:'center',
          borderRadius: '50%'
        }}
        alt="Icon."
        src={Icon}
      />
      </Grid>
    </Paper>
  );
}
