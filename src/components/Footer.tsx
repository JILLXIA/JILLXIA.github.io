import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { navigate } from "gatsby"
import Stack from '@mui/material/Stack'
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/JILLXIA">
        Yudi Xia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title?: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        {title ? <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography> : null}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
        <Stack
            direction="row"
            spacing={3}
            sx={{justifyContent:'center', marginTop:2}}
            >
          <GitHubIcon onClick={() => navigate("https://github.com/JILLXIA")}/>
          <LinkedInIcon onClick={() => navigate("https://www.linkedin.com/in/yudi-xia-4613451aa/")}/>
        </Stack>
      </Container>
    </Box>
  );
}
