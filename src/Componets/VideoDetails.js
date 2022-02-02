import React from 'react';
import { Typography} from '@mui/material';
import {Store} from '../Store'
function VideoDetails() {
  const {State:{Selected}} =  React.useContext(Store);
  let videoid = Selected?.id?.videoId??'QcDqtbtw-zI';
  const url = `https://www.youtube.com/embed/${videoid}`;

  return (
    <React.Fragment>
      <iframe width="100%" height="580" src={url} 
       title="YouTube video player" 
       ></iframe>
       <Typography variant="h4" component="h2">
        {Selected?.snippet?.title}
      </Typography>
      <Typography variant="subtitle2">
        {Selected?.snippet?.description}
      </Typography>
    </React.Fragment>
  );
}

export default VideoDetails;
