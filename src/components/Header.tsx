import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { navigate } from "gatsby"
import Avatar from '@mui/material/Avatar';
import Image from '../images/avator.jpg';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

export enum PageType{
  HOME = 1,
  BLOG = 2,
  CONTACT = 3
}
export default function Header(props:any) {
  const { pageType } = props
  return (
    <React.Fragment>
      {/* <AppBar position="sticky"> */}
        <Toolbar
          variant="dense"
          sx={{ 
            justifyContent: 'space-between', 
            alignContent:'center', 
            position:'sticky',
            top:0,
            zIndex:1,
            overflowX: 'auto', 
            backgroundColor:'#fff' ,
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
            spacing={5}
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
              <Link href="/blog" underline="none" color="inherit">Blog</Link>
            </Badge>
            <Avatar alt="Yudi Xia" src={Image} onClick={() => { navigate('https://github.com/JILLXIA')}}/>
          </Stack>
        </Toolbar>
      {/* </AppBar> */}
    </React.Fragment>
  );
}
