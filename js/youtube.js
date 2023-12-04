document.addEventListener("DOMContentLoaded", function () {
    // Load the YouTube API client library
    gapi.load("client", initClient);
  
    function initClient() {
      // Initialize the API client library
      gapi.client.init({
        apiKey: 'AIzaSyAgGjEonQYha51pz9nXSshOvqlve2jMSuw',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
      }).then(function () {
        fetchYouTubeData();
      });
    }
  
    function fetchYouTubeData() {
      const channelId = 'UCZaFfDBBCqmYdfp6DJl0cRw';
      gapi.client.youtube.search.list({
        part: 'snippet',
        channelId: channelId,
        order: 'date',
        maxResults: 6,
        type: 'video',
      }).then(function (response) {
        const recentVideos = response.result.items;
        console.log('Recent Videos:', recentVideos);
        displayRecentVideos(recentVideos);
      });
  
      gapi.client.youtube.videos.list({
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'JP', 
        maxResults: 6,
      }).then(function (response) {
        const mostPopularVideo = response.result.items[0];
        console.log('Most Popular Video:', mostPopularVideo);
        displayMostPopularVideo(mostPopularVideos);
      });
    }
  
    function displayRecentVideos(recentVideos) {
      /*
      const recentVidContainer = document.getElementById("recentVidContainer")
      for (const video of recentVideos) {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video-item';
        titleDiv.appendChild(videoDiv);

        videoDiv.innerHTML = `
          <h2>${video.snippet.title}</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
        `;
      }
      */
    }
  
    function displayMostPopularVideo(mostPopularVideos) {
      /*
      const popularVidContainer = document.getElementById("popularVidContainer")
        for (const video of mostPopularVideo) {
          const videoDiv = document.createElement('div');
          videoDiv.className = 'video-item';
        
          videoDiv.innerHTML = `
            <h2>${video.snippet.title}</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
          `;
        }
        return videoDiv;
        */
    }
  });