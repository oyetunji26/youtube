import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCardBox, ChannelCardBox } from './';
import Loader from './loader';

const Videos = ({videos, direction }) => {
  // console.log(videos);
  // check if video is loading 
  if (!videos?.length) return <Loader/>

  return (
    <Stack direction = { direction ||'row'}  flexWrap = 'wrap' justifyContent = 'center' gap = {2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx = {{
          color: 'white'
        }}>
          {item.id.videoId && <VideoCardBox video={item} /> }
          {item.id.channelId && <ChannelCardBox channelDetail={item} />}
          
        </Box>
      ))}
    </Stack>
  );
}

export default Videos