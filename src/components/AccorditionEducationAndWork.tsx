import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


export default function EducationAndWork({resource}:any) {
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
        <Grid item md={6} sm={12} xs={12} display='flex' sx={{marginTop: {sm:3, xs:3},justifyContent:'flex-start'}}>
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

    const showView = resource.map((item: { image: any; texts: string[]; },index: number) => <ListItem divider={index!=resource.length-1}>
        {renderASchool(item.image,item.texts)}
        </ListItem>)
    return(
        <List>
            {showView}
        </List>
    );

}