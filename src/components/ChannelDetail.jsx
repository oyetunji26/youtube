import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import { Videos , ChannelCardBox } from './';
import { fetchFromApi } from '../util/fetchFromApi';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail, videos);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
    // fetchFromApi(`search?channelId?${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  },[id])
  // useParams is used to get the parameter embedded in a url

  return (
    <Box minHeight = '95vh'>
    <Box>
      <div style ={{zIndex: 10, height : '300px',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(88,9,121,1) 35%, rgba(0,212,255,1) 100%)'
      }} />
      <div style = {{
        marginTop: '-110px'
      }}>
        <ChannelCardBox channelDetail = {channelDetail} />

        <Box p={2} display="flex">
          <Videos videos={videos} />
        </Box>
      </div>
    </Box>
  
    </Box>
  )
}

export default ChannelDetail