import { Paper, Typography } from '@mui/material'
import React from 'react'

const VideoDetail = ({ selectedVideo }) => {
    const videoId = selectedVideo.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    const title = selectedVideo.snippet.title;
    const channelTitle = selectedVideo.snippet.channelTitle;
    const description = selectedVideo.snippet.description;
    console.log(videoId)
    return (
        <>
            <> {videoId ? <></> : <div>Loading..</div>} </>
            <Paper elevation={6} style={{ height: "70vh" }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1">
                    {channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>
            </Paper>
        </>
    )
}

export default VideoDetail
