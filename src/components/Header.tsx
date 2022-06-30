import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import { navigate } from "gatsby"
import Avatar from '@mui/material/Avatar';
import Image from '../images/avator.jpg';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

export enum PageType{
  HOME = 1,
  BLOG = 2,
  CONTACT = 3
}
export default function Header(props:any) {
  const { children,  ...rest  } = props
  const { pageType } = rest
  return (
    <React.Fragment>
      <AppBar position="sticky" color="inherit" enableColorOnDark elevation={0}>
        <Toolbar
          variant="dense"
          sx={{ 
            justifyContent: 'space-between', 
            alignContent:'center', 
            overflowX: 'auto',
            paddingTop:1,
            paddingBottom:1
          }}
        >
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            invisible={!(pageType===PageType.HOME)}
            color="primary" badgeContent=" " variant="dot"
          >
            <HomeIcon sx={{zIndex:10}} onClick={() => { navigate(`/`)}}/>
          </Badge>
          <Stack
            direction="row"
            spacing={3}
            sx={{alignItems:'center'}}
            >
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              invisible={!(pageType===PageType.BLOG)}
              color="primary" badgeContent=" " variant="dot"
            >
              <Typography color="inherit" fontWeight={600} onClick={() => { navigate(`/blog`)}}>Blog</Typography>
            </Badge>
            {children}
            <Avatar alt="Yudi Xia" src={Image} onClick={() => { navigate('https://github.com/JILLXIA')}}/>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
