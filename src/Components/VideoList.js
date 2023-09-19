import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const VideoList = ({ videos, onVideoSelect }) => {
    const onClickHandler = (selectedVideo) => {
        onVideoSelect(selectedVideo);
    }
    return (
        <Grid item xs={12}>
            {videos.map((video) => (
                <Paper elevation={6} key={video.id.videoId} onClick={() => onClickHandler(video)}
                    style={{
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer', marginBottom: "25px"
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={video.snippet.thumbnails.default.url} alt="thumbnails" style={{
                            marginRight: '12px',
                            width: '120px',
                            height: '90px',
                        }} />
                        <Typography variant="subtitle1">
                            <b>{video.snippet.title}</b>
                        </Typography>
                    </div>
                </Paper>
            ))}
        </Grid>

    )
}

export default VideoList;
