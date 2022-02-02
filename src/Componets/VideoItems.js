import * as React from 'react';
import {Box,Card,CardContent,Typography,CardMedia} from '@mui/material';
import {Store} from '../Store'
export default function VideoItems({video}) {
  const {snippet:{title,description,thumbnails:{default:{url}}},id:{videoId}} = video;
  const {Dispatch} =React.useContext(Store);
  const UpdateSelected =(video)=>{
    Dispatch({type:'Selected',value:video})
  }
  return (
    <Card sx={{ display: 'flex' }} key={videoId} style={{marginBottom:20,cursor:'pointer'}} onClick={()=>UpdateSelected(video)}>
     <CardMedia
        component="img"
        sx={{ width:'168px',height:'auto',resize:'contain'}}
        image={url}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
           {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" noWrap={true}>
          {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
