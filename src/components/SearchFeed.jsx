import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromApi } from "../util/fetchFromApi";
import { Videos } from "./";



const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, pt: 3}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#111"}}>
          Search results for: <span style={{ color: "#FF0000" }}> {searchTerm} </span> videos
          {/* #FC1503 */}
        </Typography>

        <Videos videos={videos} />
      </Box>
    </>
  )
}

export default SearchFeed