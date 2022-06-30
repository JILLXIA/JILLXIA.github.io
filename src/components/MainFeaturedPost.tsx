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
    linkText?: string;
    title: string;
    texts: string[];
  },
  isHomePage: boolean
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post,isHomePage } = props;
  if(!post){
    return null
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${HomeBg})`
      }}
    >
      <Grid container maxWidth="lg" sx={{justifySelf:'center',alignSelf:'center',flexDirection:'row', justifyContent:'space-between',p: { xs: 3, md: 6 }}}>
        <Grid item md={6} sm={12}>
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Typography component="h1" variant="h3" color="#fff" gutterBottom>
              {post.title}
            </Typography>
            {post.texts.map((text,index)=>
            <Typography variant="h6" color="#fff" paragraph key={index}>
              {text}
            </Typography>)}
          </Box>
        </Grid>
        {isHomePage ? <Grid container md={6} sm={12} sx={{ justifyContent:'center'}}>
         <Box
          component="img"
          sx={{
            height: 300,
            width: 300,
            maxHeight: { xs: 200, md: 300 },
            maxWidth: { xs: 200, md: 300 },
            borderRadius: '50%',
            marginTop: {sm: 2},
            alignSelf: 'center',
            justifySelf:'center'
          }}
          alt="Icon."
          src={Icon}
          />
        </Grid> : null}
      </Grid>
    </Box>
  );
}
