import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import {Header,VideoDetails,VideoList} from '../Componets'
import {youtTube} from '../Apis'
function Home(props) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
         <Header/>
      </Grid>
      <Grid item xs={12} md={8}>
        <VideoDetails/>
      </Grid>
      <Grid item md={4}>
        <VideoList/>
      </Grid>
    </Grid>
  );
}

export default Home;
