import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Nav, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => (
  // browserRoouter used to wrap all our app
    <BrowserRouter>
      <Box sx = {{background: '#fff'}}>
        <Nav />
        <Routes>
          <Route path = "/" exact element={<Feed />} />
          <Route path = "/video/:id" element ={<VideoDetail />} />
          <Route path = "/channel/:id" element ={<ChannelDetail />} />
          <Route path = "/search/:searchTerm" element ={<SearchFeed />} />

        </Routes>
      </Box>
    </BrowserRouter>
  )


export default App