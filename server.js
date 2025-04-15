// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Example endpoint: Get video list
app.get('/api/videos', (req, res) => {
    const videos = [
    
        { id: 1, title: 'Live Stream 1', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 2, title: 'Live Stream 2', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 3, title: 'Live Stream 3', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 4, title: 'Live Stream 4', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 5, title: 'Live Stream 5', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 6, title: 'Live Stream 6', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 7, title: 'Live Stream 7', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 8, title: 'Live Stream 8', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 9, title: 'Live Stream 9', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 10, title: 'Live Stream 10', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 11, title: 'Live Stream 11', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 12, title: 'Live Stream 12', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 13, title: 'Live Stream 13', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 14, title: 'Live Stream 14', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 15, title: 'Live Stream 15', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 16, title: 'Live Stream 16', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 17, title: 'Live Stream 17', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 18, title: 'Live Stream 18', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 19, title: 'Live Stream 19', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 20, title: 'Live Stream 20', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_10MB.mp4', isLive: true },
        { id: 21, title: 'Saved Video 21', url: 'https://www.facebook.com/iitkanpur/videos/1023749973025160', isLive: false }
      ];
  res.json(videos);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

// Endpoint: Simulated system load metrics
app.get('/api/load', (req, res) => {
  const loadMetrics = { 
    cpu: Math.floor(Math.random() * 100), 
    memory: Math.floor(Math.random() * 100) 
  };
  res.json(loadMetrics);
});

// Always listen on port 3001 for internal communication
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
