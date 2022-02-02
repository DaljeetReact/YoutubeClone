import React from 'react';
import { Grid, Box } from '@mui/material';
import { Header, VideoDetails, VideoList } from '../Componets'
function Home() {
  return (
    <React.Fragment>
      <Header />
    <Grid container spacing={1} py={5} px={5} backgroundColor={'#F9F9F9'}>
      <Grid item xs={12} md={8}>
        <Box py={2}>
          <VideoDetails />
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box p={2}>
          <VideoList />
        </Box>
      </Grid>
    </Grid>
    </React.Fragment>

  );
}

export default Home;
