import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import { navigate } from "gatsby"
import Avatar from '@mui/material/Avatar';
import Image from '../images/avator.jpg';
import Stack from '@mui/material/Stack';
export default function Header() {
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
          <HomeIcon sx={{zIndex:10}} onClick={() => { navigate(`/`)}}/>
          <Stack
            direction="row"
            spacing={5}
            sx={{alignItems:'center'}}
            >
            <Link href="/blog" underline="none" color="inherit">Blog</Link>
            <Link href="/contact" underline="none" color="inherit">Contact</Link>
            <Avatar alt="Yudi Xia" src={Image} onClick={() => { navigate('https://github.com/JILLXIA')}}/>
          </Stack>
        </Toolbar>
      {/* </AppBar> */}
    </React.Fragment>
  );
}
