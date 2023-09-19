import './App.css';
import Youtube from './Api/Youtube';
import { Grid } from '@mui/material';
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetail';
import VideoList from './Components/VideoList'
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  async function onSubmit(searchTerm) {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDVpgxjUPmDA6Nlhy0reWnhwPQMDq6ZQ-A",
        q: searchTerm
      }
    });
    // console.log(response.data.items[0]);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return (
    <>
      {/* <h1>Video Sharing Application</h1> */}
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={onSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail selectedVideo={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
