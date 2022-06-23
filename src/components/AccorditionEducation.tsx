import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import NJUICON from '../images/NJU.jpg'
import RICEICON from '../images/rice_icon.jpeg'
import HomeBg from '../images/home_bg.jpeg'
import List from '@mui/material/List';
import { Divider, ListItem } from '@mui/material';

const resource = [
    {
        image: RICEICON,
        texts:[
            "Department of Computer Science, Rice University, Houston,TX, USA",
            "Aug 2022-Now",
            "Master of Computer Science, Majoring in Computer Science"
        ]
    },
    {
        image: NJUICON,
        texts:[
            "Software Institute, Nanjing University, Nanjing China",
            "Sep 2017-June 2021",
            "Bachelor of Engineering, Majoring in Software Engineering"
        ]
    }
]
export default function Education() {
    const renderASchool = (image: any, texts:string[]) => {
    return (<Grid container sx={{flexDirection:'row',p: { xs: 3, md: 4 }}}>
        <Grid container md={6} sm={12} sx={{ justifyContent:'center'}}>
            <Box
            component="img"
            sx={{
            height: 180,
            width: 180,
            maxHeight: { xs: 160, md: 180 },
            maxWidth: { xs: 160, md: 180 },
            alignSelf:'center',
            justifySelf:'center',
            borderRadius: '0%'
            }}
            alt="Icon."
            src={image}
        />
      </Grid>
        <Grid item md={6} sm={12} display='flex' sx={{marginTop: {sm:3, xs:3}}}>
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <Typography variant="h6" color="inherit" gutterBottom style={{fontWeight:600}}>
              {texts[0]}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom style={{fontStyle:'italic'}}>
            {texts[1]}
            </Typography>
            <Typography variant="body1" color="inherit" gutterBottom>
            {texts[2]}
            </Typography>
          </Box>
        </Grid>
      </Grid>)
    }

    const showView = resource.map((item,index) => <ListItem divider={index!=resource.length-1}>
        {renderASchool(item.image,item.texts)}
        </ListItem>)
    return(
        <List>
            {showView}
        </List>
    );

}