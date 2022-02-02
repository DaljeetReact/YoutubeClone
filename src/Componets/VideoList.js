import React from 'react';
import {Store} from '../Store';
import VideoItems from './VideoItems'
function VideoList() {
  const {State:{Videos}} =React.useContext(Store);
  return (
    <React.Fragment>
      {Videos?.map((video,index)=>{
        return (
          <VideoItems video={video} />
        )
      })}
    </React.Fragment>
  );
}

export default VideoList;
