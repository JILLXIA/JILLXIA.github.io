import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ImageList, ImageListItem } from '@mui/material';
import Link from '@mui/material/Link';
export default function Hobby() {
    const renderPhotography = () => {
        return (
            <Grid container sx={{flexDirection:'row',p: { xs: 3, md: 4 }}}>
                <Grid container md={8} sm={12} sx={{ justifyContent:'center'}}>
                    <Box sx={{ flex:1, height: 400, overflowY: 'scroll' }}>
                        <ImageList variant="masonry" cols={3} gap={4}>
                            {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                />
                            </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
                <Grid item md={4} sm={12} xs={12} display='flex' sx={{marginTop: {sm:3, xs:3}, paddingLeft: {md:3},justifyContent:'flex-start'}}>
                    <Box
                        sx={{
                        position: 'relative'
                        }}
                    >
                        <Typography variant="h6" color="inherit" gutterBottom style={{fontWeight:600}}>
                        Photography
                        </Typography>
                        <Typography variant="body1" color="inherit" gutterBottom>
                            I like photography, since photography can record many beautiful moments in life. The photos on the left were taken by myself in several different cities, such as Beijing, Chongqing, Nanjing and Osaka.
                        </Typography>
                        <Typography variant="body1" color="inherit" gutterBottom>
                            If you also like photography, you can follow my 500px or TuChong to communicate with me and see more photos.
                        </Typography>
                        <Link color="primary" href="https://500px.com.cn/community/user-details/feb128c4b4d258cc48e5dac5715042522?rs=feb128c4b4d258cc48e5dac5715042522">
                            500px
                        </Link>
                        <br />
                        <Link color="primary" href="https://tuchong.com/17167774/?utm_source=weixin&utm_medium=android_share">
                            TuChong
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        )
    }
    return <>{renderPhotography()}</>;
}

const itemData = [
    {
      img: 'https://s2.loli.net/2022/06/27/2xV3tcyoaNYrew5.jpg',
      title: 'NanjingZiFeng',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/HYhgmocZjMXJB3w.jpg',
      title: 'HeHua',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/exyj21XGdwgkp6L.jpg',
      title: 'TianTan',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/ZfGUzYQSiyjcHDm.jpg',
      title: 'BeiHai',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/KtTVWLnfdiIrDzu.jpg',
      title: 'YangZhou',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/isErgIkTSv82PUO.jpg',
      title: 'Chairs',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/dECL2Y38o1T9iPg.jpg',
      title: 'Laptop',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/vwUB8uhlY4boq7f.jpg',
      title: 'Doors',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/NtFOgIa3nVwKpeS.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/iLCNjVdqtAQPRKx.jpg',
      title: 'Storage',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/QmEk21CW45697PL.jpg',
      title: 'Candle',
    },
    {
      img: 'https://s2.loli.net/2022/06/27/AlagZpbNvcjmBfJ.jpg',
      title: 'Coffee table',
    },
    {
        img: 'https://s2.loli.net/2022/06/27/oRigjFeuQdPNSVO.jpg',
        title: 'Japan',
      },
  ];