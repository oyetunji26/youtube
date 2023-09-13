import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromApi } from "../util/fetchFromApi";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ 
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #fff",
        px: { sx: 0, md: 2 },
        pt: 2
    }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#333", }}>
          Copyright © 2023 Devem
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, pt: 3}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#111" }}>
          {selectedCategory} <span style={{ color: "#FF0000" }}>videos</span>
          {/* #FC1503 */}
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;