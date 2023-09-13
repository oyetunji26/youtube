import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbNailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../util/constants';


const VideoCardBox = ({ video: {id: {videoId}, snippet} }) => {
  // console.log( videoId, snippet );
  return (
    <Card sx = {{
      width: { sm: '250px', md: '350px', xs: '330px' }
    }}>
      <Link to = {videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image = {snippet?.thumbnails?.high?.url}
          alt = {snippet?.title}
          sx = {{ width: '100%' , height: 180}}
        />
        <CardContent sx = {{
          backgroundColor: '#fff',
          height: '95px'
        }}>

          <Link to = {videoId? `/video/${videoId}` : demoVideoUrl} >
            <Typography variant="subtitle1" fontWeight = "bold" color = "#111">
              {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>

          <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
            <Typography variant="subtitle2" fontWeight = "bold" color = "gray">
              {/* <VerifiedUser /> */}
              {/* <CheckCircle sx = {{width: 13, height : 13 }}/> */}
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCardBox