import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../util/constants';

const ChannelCardBox = ({channelDetail, mTop}) => {
  console.log({channelDetail});
  return (
    <Box sx = {{
       borderRadius: '16px',
       display: 'flex',
       justifyContent: 'center',
       alignItems:'center',
       width: { sm: '250px', md: '350px', xs: '100%' },
       height: '318px',
       margin: 'auto'
    }}>
      <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#222'
        }}>
          <CardMedia image = {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt = {channelDetail?.snippet?.title}
            sx = {{
              borderRadius: '50%', height: 180, width: 180, alignSelf: 'center' , mb: 2, border: '1px solid #e3e3e3'
            }}
          />
          <Typography variant='h6' sx = {{color: '#333'}}>
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx = {{width: 13, height : 13, color: '#333'}}/>
            {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCardBox